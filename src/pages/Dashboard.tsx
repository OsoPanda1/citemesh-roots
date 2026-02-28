import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Area, AreaChart,
} from "recharts";
import { Activity, Server, Shield, Wifi, Cpu, HardDrive, Zap, AlertTriangle } from "lucide-react";

const nodeStatus = [
  { name: "ID-NVIDA", activos: 8, inactivos: 1, latencia: 12 },
  { name: "UTAMV", activos: 6, inactivos: 0, latencia: 18 },
  { name: "Metaverso", activos: 10, inactivos: 2, latencia: 24 },
  { name: "Economía", activos: 7, inactivos: 1, latencia: 15 },
  { name: "Seguridad", activos: 12, inactivos: 0, latencia: 8 },
  { name: "Isabella AI", activos: 5, inactivos: 1, latencia: 22 },
];

const domainHealth = [
  { name: "ID-NVIDA", value: 95 },
  { name: "UTAMV", value: 88 },
  { name: "Metaverso", value: 82 },
  { name: "Economía", value: 91 },
  { name: "Seguridad", value: 98 },
];

const COLORS = [
  "hsl(38, 90%, 55%)", "hsl(185, 70%, 45%)", "hsl(280, 60%, 55%)",
  "hsl(120, 50%, 45%)", "hsl(0, 70%, 55%)",
];

const timelineData = [
  { hora: "00:00", carga: 12, eventos: 3 },
  { hora: "04:00", carga: 8, eventos: 1 },
  { hora: "08:00", carga: 45, eventos: 12 },
  { hora: "12:00", carga: 78, eventos: 28 },
  { hora: "16:00", carga: 65, eventos: 22 },
  { hora: "20:00", carga: 42, eventos: 15 },
  { hora: "23:59", carga: 18, eventos: 5 },
];

const radarData = [
  { metric: "Disponibilidad", value: 96 },
  { metric: "Rendimiento", value: 88 },
  { metric: "Seguridad", value: 98 },
  { metric: "Latencia", value: 75 },
  { metric: "Resiliencia", value: 92 },
  { metric: "Escalabilidad", value: 84 },
];

const statCards = [
  { label: "Nodos activos", value: "48/52", icon: Server, status: "ok" as const },
  { label: "Latencia promedio", value: "16ms", icon: Wifi, status: "ok" as const },
  { label: "CPU cluster", value: "42%", icon: Cpu, status: "ok" as const },
  { label: "Almacenamiento", value: "2.4 TB", icon: HardDrive, status: "ok" as const },
  { label: "Eventos/min", value: "1,247", icon: Zap, status: "ok" as const },
  { label: "Alertas activas", value: "3", icon: AlertTriangle, status: "warn" as const },
];

const StatusDot = ({ status }: { status: "ok" | "warn" | "error" }) => (
  <span className={`w-2 h-2 rounded-full inline-block ${
    status === "ok" ? "bg-green-500 animate-pulse" :
    status === "warn" ? "bg-yellow-500 animate-pulse" :
    "bg-destructive animate-pulse"
  }`} />
);

const Dashboard = () => (
  <WikiPage title="Dashboard de Monitoreo" subtitle="Estado en tiempo real de nodos federados y dominios TAMV">
    {/* Stat Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {statCards.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-lg border border-border/50 bg-card/60 p-3"
        >
          <div className="flex items-center justify-between mb-2">
            <s.icon className="h-4 w-4 text-muted-foreground" />
            <StatusDot status={s.status} />
          </div>
          <div className="text-lg font-bold text-foreground">{s.value}</div>
          <div className="text-xs text-muted-foreground">{s.label}</div>
        </motion.div>
      ))}
    </div>

    {/* Charts Row 1 */}
    <Section title="Nodos por dominio">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-border/50 bg-card/40 p-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Nodos activos vs inactivos</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={nodeStatus}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
              <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} />
              <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} />
              <Tooltip
                contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: 8, color: "hsl(45, 10%, 90%)" }}
              />
              <Bar dataKey="activos" fill="hsl(38, 90%, 55%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="inactivos" fill="hsl(0, 70%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/40 p-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Salud de dominios (%)</h4>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={domainHealth} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, value }) => `${name}: ${value}%`}>
                {domainHealth.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: 8, color: "hsl(45, 10%, 90%)" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>

    {/* Charts Row 2 */}
    <Section title="Actividad temporal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-border/50 bg-card/40 p-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Carga del sistema (24h)</h4>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
              <XAxis dataKey="hora" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} />
              <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: 8, color: "hsl(45, 10%, 90%)" }} />
              <Area type="monotone" dataKey="carga" stroke="hsl(38, 90%, 55%)" fill="hsl(38, 90%, 55%)" fillOpacity={0.15} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/40 p-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Métricas de resiliencia</h4>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(220, 15%, 18%)" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 10 }} />
              <PolarRadiusAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 9 }} />
              <Radar dataKey="value" stroke="hsl(185, 70%, 45%)" fill="hsl(185, 70%, 45%)" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>

    {/* Node Table */}
    <Section title="Detalle de nodos federados">
      <div className="rounded-lg border border-border/50 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/30">
              <th className="text-left px-4 py-2 text-muted-foreground font-medium">Dominio</th>
              <th className="text-center px-4 py-2 text-muted-foreground font-medium">Activos</th>
              <th className="text-center px-4 py-2 text-muted-foreground font-medium">Inactivos</th>
              <th className="text-center px-4 py-2 text-muted-foreground font-medium">Latencia</th>
              <th className="text-center px-4 py-2 text-muted-foreground font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {nodeStatus.map((n) => (
              <tr key={n.name} className="border-t border-border/30 hover:bg-muted/10 transition-colors">
                <td className="px-4 py-2.5 font-medium text-foreground">{n.name}</td>
                <td className="px-4 py-2.5 text-center text-foreground">{n.activos}</td>
                <td className="px-4 py-2.5 text-center text-foreground">{n.inactivos}</td>
                <td className="px-4 py-2.5 text-center text-muted-foreground">{n.latencia}ms</td>
                <td className="px-4 py-2.5 text-center">
                  <StatusDot status={n.inactivos === 0 ? "ok" : "warn"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    <Section title="Infraestructura de observabilidad">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { title: "Grafana", desc: "Dashboards y alertas visuales para métricas de nodos, servicios y dominios en tiempo real." },
          { title: "Terraform", desc: "IaC para provisioning reproducible de infraestructura federada multi-región." },
          { title: "Prisma", desc: "ORM tipado para acceso a datos con migraciones versionadas y auditoría de esquemas." },
        ].map((t) => (
          <div key={t.title} className="rounded-lg border border-border/50 bg-card/50 p-4">
            <h4 className="font-semibold text-primary text-sm mb-1">{t.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  </WikiPage>
);

export default Dashboard;
