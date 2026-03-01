import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Area, AreaChart,
} from "recharts";
import { Activity, Server, Shield, Wifi, Cpu, HardDrive, Zap, AlertTriangle, Eye } from "lucide-react";

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
    {/* Visibility by membership */}
    <Section title="Visibilidad por nivel de membresía">
      <div className="rounded-lg border border-border/50 bg-muted/20 p-4 mb-2">
        <div className="flex items-start gap-2 mb-3">
          <Eye className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            La información visible en este dashboard varía según tu nivel de membresía:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { level: "Free", visibility: "Sin acceso al dashboard" },
            { level: "Premium", visibility: "Indicadores agregados globales (solo lectura)" },
            { level: "Devs", visibility: "Métricas por dominio, gráficas de tendencia" },
            { level: "Advance", visibility: "Estado de nodo propio, alertas personalizadas, SLAs" },
            { level: "Enterprise", visibility: "Vista completa: todos los nodos, métricas detalladas, configuración" },
          ].map((v) => (
            <div key={v.level} className="rounded-md border border-border/50 bg-card/50 p-2.5">
              <span className="text-xs font-semibold text-foreground">{v.level}</span>
              <p className="text-xs text-muted-foreground mt-0.5">{v.visibility}</p>
            </div>
          ))}</
