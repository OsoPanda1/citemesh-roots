# Guía de Contribución TAMV

## 🤝 Cómo Contribuir al Núcleo Operativo Autopoiético TAMV

¡Gracias por tu interés en construir la infraestructura civilizatoria del futuro! Este documento te guía en el proceso de contribución.

## 📜 Principios de Contribución

### El Códice del Contribuyente

1. **Dignidad sobre Velocidad**: Prefiere código lento y ético que rápido y opaco
2. **Transparencia Radical**: Documenta cada decisión técnica
3. **Soberanía Compartida**: Respeta la autonomía de otros nodos
4. **Antifragilidad**: Los errores son semillas de mejora

## 🚀 Proceso de Contribución

### 1. Antes de Empezar

- [ ] Lee el [Código de Conducta](CODE_OF_CONDUCT.md)
- [ ] Familiarízate con la [Arquitectura](docs/architecture/TAMV-Core-Architecture.md)
- [ ] Únete a la comunidad: gobernanza@tamv.online

### 2. Configura tu Entorno

```bash
# 1. Fork del repositorio
# 2. Clona tu fork
git clone https://github.com/TU_USUARIO/citemesh-roots.git
cd citemesh-roots

# 3. Instala dependencias
npm install

# 4. Configura variables de entorno
cp .env.example .env
# Edita .env con tus credenciales

# 5. Inicia base de datos local
npx prisma migrate dev

# 6. Inicia servidor de desarrollo
npm run dev
```

### 3. Crea una Rama

```bash
# Convención de nombres:
# feature/nueva-funcionalidad
# fix/correccion-error
# docs/documentacion
# refactor/optimizacion

git checkout -b feature/mi-contribucion
```

### 4. Desarrolla con Propósito

#### Estándares de Código

**Nomenclatura Civilizatoria**
```typescript
// ✅ Correcto: Nombres descriptivos y semánticos
interface CivilNodeConfig {
  trustTier: TrustTier;
  sovereigntyLevel: SovereigntyLevel;
}

// ❌ Incorrecto: Abreviaciones opacas
interface Cfg {
  tt: number;
}
```

**Documentación Integrada**
```typescript
/**
 * Registra un nuevo CivilNode en la red federada.
 * 
 * @param config - Configuración inicial del nodo
 * @returns Promise<CivilNode> - Nodo registrado con trust inicial
 * @throws ValidationError - Si el nodo no cumple requisitos de certificación
 * 
 * @example
 * const node = await registerCivilNode({
 *   region: 'latam-mx-hidalgo',
 *   trustTier: TrustTier.LEVEL_3
 * });
 */
```

**Tests como Contrato**
```typescript
// Cada función debe tener tests que documenten su comportamiento
// Tests > comentarios como documentación

describe('CivilNode Lifecycle', () => {
  it('should initialize with PENDING status', async () => {
    const node = await createCivilNode(basicConfig);
    expect(node.status).toBe('PROVISIONING');
  });
  
  it('should reject nodes without certification', async () => {
    await expect(createCivilNode(unverifiedConfig))
      .rejects.toThrow('CERTIFICATION_REQUIRED');
  });
});
```

### 5. Realiza Commits Significativos

```bash
# Formato de commit:
# <type>(<scope>): <descripción>
#
# <cuerpo>
#
# <referencias>

# Ejemplos:
feat(ontology): add CivilNode entity with trust scoring

governance(codex): implement role-based access control

docs(architecture): document EOCT layer 4 meta-systemic

fix(prisma): handle null values in Contract execution

refactor(terraform): modularize service mesh configuration
```

**Tipos de Commit**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de error
- `docs`: Documentación
- `style`: Cambios de estilo (formato)
- `refactor`: Reestructuración de código
- `test`: Tests
- `chore`: Tareas de mantenimiento

**Scopes Permitidos**
- `ontology`: Modelos Prisma
- `governance`: Políticas y contratos
- `infrastructure`: Terraform/K8s
- `observability`: Grafana/métricas
- `consciousness`: Isabella AI
- `laboratory`: Jupyter/simulaciones
- `autopoiesis`: Sistema autopoiético

### 6. Antes del Pull Request

```bash
# 1. Asegúrate de que pasen todos los checks
npm run lint
npm run type-check
npm run test

# 2. Actualiza tu rama con main
git fetch origin
git rebase origin/main

# 3. Resuelve conflictos si los hay

# 4. Push a tu fork
git push origin feature/mi-contribucion
```

### 7. Plantilla de Pull Request

```markdown
## Descripción
Breve descripción del cambio y su propósito civilizatorio.

## Tipo de Cambio
- [ ] Nueva funcionalidad (feat)
- [ ] Corrección (fix)
- [ ] Documentación (docs)
- [ ] Refactorización (refactor)
- [ ] Tests (test)

## Checklist
- [ ] Código sigue el estilo del proyecto
- [ ] Tests añadidos/actualizados
- [ ] Documentación actualizada
- [ ] Commits siguen convención semántica
- [ ] No hay secretos/credenciales expuestos

## Pruebas Realizadas
Describe cómo probaste el cambio.

## Impacto en la Civilización
¿Cómo mejora este cambio el ecosistema TAMV?

## Referencias
Relacionado con: #
Cierra: #
```

## 🛡️ Proceso de Revisión

### Etapas de Revisión

1. **Revisión Automática**
   - CI/CD ejecuta tests
   - Linting y formateo
   - Coverage mínimo 80%

2. **Revisión por Pares**
   - Al menos 1 aprobación
   - Revisiones constructivas
   - Discussiones técnicas

3. **Revisión por Guardianía**
   - Para cambios críticos
   - Validación arquitectónica
   - Verificación de principios Códice

### Criterios de Aceptación

- ✅ Cumple con principios del Códice
- ✅ Mantiene o mejora test coverage
- ✅ Documentación actualizada
- ✅ No introduce deuda técnica
- ✅ Respete soberanía de datos
- ✅ Transparente y auditables

## 📚 Recursos

### Documentación
- [Arquitectura Completa](docs/architecture/TAMV-Core-Architecture.md)
- [Manual Wiki-Integración](docs/architecture/TAMV-Wiki-Integration-Manual.md)
- [Ontología Prisma](prisma/schema.prisma)

### Contacto
- General: gobernanza@tamv.online
- Técnico: tech@tamv.online
- Guardianía: suprema@tamv.online

## 🏆 Reconocimiento de Contribuidores

Las contribuciones se reconocen mediante:
- Mención en CHANGELOG.md
- Badge de contribuidor
- Credencial verificable
- Participación en gobernanza

## ⚖️ Resolución de Conflictos

Si surge un conflicto ético técnico:
1. Documenta el dilema
2. Consulta la comunidad
3. Prioriza principios Códice
4. Escalada a Guardianía si procede

## Juramento del Contribuyente

> *"Contribuyo no solo código, sino conciencia. Mis aportaciones honran la dignidad humana y fortalecen la soberanía digital de la civilización."*

---

**Construyamos juntos el futuro soberano.**

Anubis Villaseñor y la Comunidad TAMV
