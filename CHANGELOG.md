# CHANGELOG

Todos los cambios notables en el Núcleo Operativo Autopoiético TAMV se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Pendiente de lanzamiento]

### Añadido

- Estructura base de CI/CD con GitHub Actions
- Configuración de Docker y Docker Compose
- Documentación completa de arquitectura técnica
- Manual de integración Wiki-Arquitectura
- Ontología Prisma con entidades CivilNode, Identity, Domain, Contract, Artifact
- Licencia Civilizatoria TAMV
- Guía de contribución completa

## [1.0.0-alpha.1] - 2026-02-28

### Añadido

#### Arquitectura Core
- **NOA-TAMV Architecture Document** (`docs/architecture/TAMV-Core-Architecture.md`)
  - Especificación completa de 4 capas EOCT
  - Ontología Prisma con tipos enumerados
  - Configuración Terraform para topologías federadas
  - Contratos REST y Async API
  - Sistema de autopoiesis (4 capacidades)
  - Estructura de directorios autopoietica

- **Wiki Integration Manual** (`docs/architecture/TAMV-Wiki-Integration-Manual.md`)
  - Mapeo de 7 planos operativos
  - Conexión Wiki ↔ Prisma Ontología
  - Blueprint Terraform para documentación
  - Circuito de cambio con Isabella AI

#### Código y Configuración
- **Prisma Schema** (`prisma/schema.prisma`)
  - Entidades: CivilNode, Identity, Domain, Contract, Artifact
  - Relaciones complejas con foreign keys
  - Enums para estados y tipos
  - Índices optimizados para federación

- **Biografía Extendida** (`src/pages/BiografiaCEO.tsx`)
  - 9 secciones completas de biografía oficial
  - Timeline 2000-2026
  - Análisis quirúrgico de trayectoria
  - Mapa de hitos consolidado

- **README Actualizado**
  - Visión de TAMV MD-X4
  - Dimensión 4D
  - Principios del Códice
  - Información del fundador

#### Infraestructura y DevOps
- **Docker Configuration**
  - Multi-stage Dockerfile (builder, production, development)
  - Docker Compose con servicios completos
  - PostgreSQL, Redis, Grafana stack, Jupyter

- **CI/CD Pipeline** (`.github/workflows/ci.yml`)
  - Lint y type checking
  - Tests con coverage
  - Build y artifact upload
  - Docker build y push a GHCR
  - Terraform deployment
  - Notificaciones automáticas

#### Documentación Legal y Comunitaria
- **Licencia Civilizatoria** (`LICENSE`)
  - Principios de dignidad humana
  - Soberanía de datos
  - Transparencia radical
  - Autopoiesis abierta

- **Guía de Contribución** (`CONTRIBUTING.md`)
  - Proceso de desarrollo
  - Estándares de código
  - Convención de commits
  - Plantilla de PR

- **Propuesta de Valor** (`docs/Propuesta_Valor_TAMV.md`)
  - Comparativa vs Metaverso de Meta
  - Características únicas TAMV
  - Tecnologías componentes
  - Contacto e información

#### Configuración
- **Variables de Entorno** (`.env.example`)
  - Base de datos PostgreSQL
  - Supabase
  - Autenticación JWT
  - Servicios externos (Sourcegraph, Grafana, Jupyter)
  - Configuración de nodo civilizatorio
  - SMTP y notificaciones
  - Feature flags

- **Testing Configuration** (`vitest.config.ts`)
  - Configuración de Vitest con React
  - Cobertura con v8
  - Reportes JUnit
  - Aliases de path

### Seguridad

- Implementación de variables de entorno seguras
- Configuración de healthchecks en Docker
- Usuario no-root en contenedores
- Separación de credenciales en `.env.example`

### Notas

- Este release alpha establece la base técnica del NOA-TAMV
- La arquitectura está diseñada para evolución continua (autopoiesis)
- Todos los componentes siguen principios del Código Civilizatorio

## Estructura de Versionado

```
[MAJOR].[MINOR].[PATCH]-[pre-release].[N]

Ejemplos:
- 1.0.0-alpha.1  (Pre-release alpha)
- 1.0.0-beta.2   (Pre-release beta)
- 1.0.0          (Release estable)
- 1.1.0          (Nueva funcionalidad)
- 1.1.1          (Bug fix)
```

## Roadmap

### Beta (Próximo)
- [ ] Implementación completa de Prisma ORM
- [ ] Autenticación con ID-NVIDA
- [ ] Dashboard funcional con Grafana
- [ ] Integración Isabella AI completa

### Release 1.0.0
- [ ] Federación de nodos operativa
- [ ] Smart Contracts en TAU Coin
- [ ] Metaverso funcional (Nebulaia)
- [ ] Gobernanza distribuida activa

## Referencias

- [Convención de Commits](https://conventionalcommits.org/)
- [Semántica de Versionado](https://semver.org/)
- [Manteniendo Changelog](https://keepachangelog.com/)

---

**Anubis Villaseñor** y la Comunidad TAMV  
*"Reconfigurar el centro desde la periferia"*
