import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Cloud, Shield, CheckCircle, Terminal, Globe } from "lucide-react";

const Despliegue = () => (
  <WikiPage
    title="Manual de Despliegue Universal"
    subtitle="Guía paso a paso para replicar el ecosistema TAMV en cualquier infraestructura"
  >
    <Tabs defaultValue="cloud" className="w-full">
      <TabsList className="w-full flex-wrap h-auto gap-1 bg-muted/30 p-1">
        <TabsTrigger value="cloud" className="text-xs">Cloud</TabsTrigger>
        <TabsTrigger value="onpremise" className="text-xs">On-Premise</TabsTrigger>
        <TabsTrigger value="federada" className="text-xs">Federada</TabsTrigger>
        <TabsTrigger value="certificacion" className="text-xs">Certificación</TabsTrigger>
      </TabsList>

      <TabsContent value="cloud" className="space-y-6 mt-6">
        <Section title="Despliegue en Cloud">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mb-4">
            <p className="text-sm text-muted-foreground">
              Método recomendado para iniciar rápidamente. Compatible con AWS, GCP, Azure y Lovable Cloud.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { step: "1. Provisionar infraestructura", desc: "Usar Terraform/OpenTofu para levantar VPC, subnets, bases de datos PostgreSQL y servicios de edge computing." },
              { step: "2. Configurar identidad", desc: "Desplegar el módulo ID-NVIDA con proveedor OAuth2/OIDC. Configurar claves de cifrado y certificados TLS 1.3." },
              { step: "3. Base de datos", desc: "Inicializar esquema TAMV con migraciones SQL. Configurar RLS, triggers de auditoría y conexión a EOCT." },
              { step: "4. Edge Functions", desc: "Desplegar funciones serverless para Isabella AI, webhooks y procesamiento de pipelines hexagonales." },
              { step: "5. Frontend", desc: "Build estático con Vite + React. Servir desde CDN con caché agresivo y service workers para PWA." },
              { step: "6. Monitoreo", desc: "Conectar Grafana Cloud o Prometheus self-hosted. Configurar alertas para latencia, CPU y health checks." },
              { step: "7. Validación", desc: "Ejecutar suite de tests E2E. Verificar todos los dominios operativos y obtener certificación federada." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3">
                <Cloud className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-foreground text-sm">{s.step}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Requisitos mínimos Cloud">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: "Compute", value: "2 vCPU, 4GB RAM por nodo" },
              { label: "Storage", value: "50GB SSD (PostgreSQL)" },
              { label: "Network", value: "100 Mbps, IP pública" },
              { label: "SSL", value: "Certificado TLS 1.3 válido" },
              { label: "DNS", value: "Dominio propio configurado" },
              { label: "CDN", value: "Cloudflare o equivalente" },
            ].map((r) => (
              <div key={r.label} className="rounded-lg border border-border/50 bg-card/50 p-3 flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{r.label}</span>
                <span className="text-xs text-muted-foreground">{r.value}</span>
              </div>
            ))}
          </div>
        </Section>
      </TabsContent>

      <TabsContent value="onpremise" className="space-y-6 mt-6">
        <Section title="Despliegue On-Premise">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Para organizaciones que requieren control total sobre la infraestructura y los datos.
          </p>
          <div className="rounded-lg border border-border/50 bg-muted/20 p-4 font-mono text-xs text-muted-foreground space-y-1 mb-4">
            <div className="text-primary"># 1. Clonar repositorio</div>
            <div>git clone https://github.com/OsoPanda1/tamv-ecosystem</div>
            <div className="mt-2 text-primary"># 2. Configurar variables de entorno</div>
            <div>cp .env.example .env.local</div>
            <div>nano .env.local  # Editar credenciales</div>
            <div className="mt-2 text-primary"># 3. Levantar con Docker Compose</div>
            <div>docker compose -f docker-compose.prod.yml up -d</div>
            <div className="mt-2 text-primary"># 4. Ejecutar migraciones</div>
            <div>docker exec tamv-db psql -U tamv -f /migrations/init.sql</div>
            <div className="mt-2 text-primary"># 5. Verificar servicios</div>
            <div>curl -s https://localhost/health | jq .</div>
          </div>

          <div className="space-y-3">
            {[
              { title: "Hardware mínimo", desc: "Servidor x86_64 con 8GB RAM, 4 cores, 200GB SSD. GPU opcional para módulos XR." },
              { title: "Sistema operativo", desc: "Ubuntu 22.04 LTS o Rocky Linux 9. Docker Engine 24+ y Docker Compose v2." },
              { title: "Red", desc: "Firewall configurado, puertos 80/443/5432/8443. VPN para administración remota." },
              { title: "Backups", desc: "pg_dump automatizado cada 6 horas. Retención mínima 30 días. Réplica en sitio secundario." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Server className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </TabsContent>

      <TabsContent value="federada" className="space-y-6 mt-6">
        <Section title="Despliegue Federado">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Modelo para crear una red de nodos autónomos interconectados bajo el protocolo CITE-MESH.
          </p>
          <div className="space-y-4">
            {[
              { phase: "Fase 1: Nodo semilla", desc: "Desplegar instancia base con todos los dominios activos. Este nodo será la autoridad raíz de certificación." },
              { phase: "Fase 2: Registro federado", desc: "Configurar el registro central de nodos. Cada nuevo nodo se registra con su clave pública y metadata." },
              { phase: "Fase 3: Sincronización", desc: "Activar protocolo CITE-MESH para sincronización bidireccional de datos entre nodos, con resolución de conflictos." },
              { phase: "Fase 4: Gobernanza", desc: "Establecer el consejo de guardianes entre nodos. Cada nodo elige representantes para la gobernanza federada." },
              { phase: "Fase 5: Certificación", desc: "Ejecutar auditoría automatizada. Verificar compliance con estándares TAMV y emitir certificado de nodo federado." },
            ].map((p) => (
              <div key={p.phase} className="rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="h-4 w-4 text-primary shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm">{p.phase}</h4>
                </div>
                <p className="text-xs text-muted-foreground pl-6">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </TabsContent>

      <TabsContent value="certificacion" className="space-y-6 mt-6">
        <Section title="Sistema de Certificación Federada">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Cada réplica del ecosistema TAMV debe pasar un proceso de validación para ser reconocida oficialmente como nodo federado.
          </p>
          <div className="space-y-3">
            {[
              { title: "Verificación de integridad", desc: "Hash SHA-256 del codebase debe coincidir con la versión oficial. Módulos custom deben estar documentados.", icon: Shield },
              { title: "Tests de seguridad", desc: "Penetration testing automatizado. Zero vulnerabilidades críticas. RLS activo en todas las tablas.", icon: Shield },
              { title: "Compliance normativo", desc: "Verificación de cumplimiento con GDPR, AI Act y estándares ISO 27001. Auditoría de datos personales.", icon: CheckCircle },
              { title: "Performance baseline", desc: "Latencia < 200ms P95. Uptime > 99.5% en período de prueba de 30 días. Health checks operativos.", icon: CheckCircle },
              { title: "Gobernanza local", desc: "Guardián de nodo designado. Protocolo de incidentes documentado. Canal de comunicación con la federación.", icon: CheckCircle },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <item.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Certificado emitido:</strong> Incluye ID único de nodo, fecha de certificación,
              nivel de compliance y firma criptográfica del Guardián Supremo. Válido por 12 meses, renovable con re-auditoría.
            </p>
          </div>
        </Section>
      </TabsContent>
    </Tabs>
  </WikiPage>
);

export default Despliegue;
