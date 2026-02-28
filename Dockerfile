# ============================================================================
# Dockerfile - Núcleo Operativo Autopoiético TAMV
# ============================================================================

# ----------------------------------------------------------------------------
# Etapa 1: Construcción
# ----------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias del sistema
RUN apk add --no-cache git python3 make g++

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig*.json ./
COPY components.json ./
COPY tailwind.config.ts ./
COPY postcss.config.js ./
COPY vite.config.ts ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# Construir aplicación
RUN npm run build

# ----------------------------------------------------------------------------
# Etapa 2: Producción
# ----------------------------------------------------------------------------
FROM node:20-alpine AS production

WORKDIR /app

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S tamv -u 1001

# Copiar dependencias de producción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Copiar build
COPY --from=builder /app/dist ./dist

# Copiar archivos necesarios
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public

# Instalar sharp para optimización de imágenes
RUN npm install sharp --platform=linuxmusl --arch=x64 --ignore-scripts

# Cambiar permisos
RUN chown -R tamv:nodejs /app
USER tamv

# Puerto expuesto
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Variable de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Comando de inicio
CMD ["node", "dist/main.js"]

# ----------------------------------------------------------------------------
# Etapa 3: Desarrollo
# ----------------------------------------------------------------------------
FROM node:20-alpine AS development

WORKDIR /app

# Instalar dependencias del sistema
RUN apk add --no-cache git python3 make g++

# Instalar nodemon globalmente
RUN npm install -g nodemon ts-node

# Copiar package.json
COPY package*.json ./

# Instalar dependencias (incluyendo dev)
RUN npm install

# Puerto expuesto
EXPOSE 5173

# Comando de desarrollo
CMD ["npm", "run", "dev"]
