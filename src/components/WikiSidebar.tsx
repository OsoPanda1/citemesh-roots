import {
  BookOpen, Landmark, Layers, Shield, Brain, Clock, FileText,
  Home, Network, GraduationCap, Globe, Coins, ChevronDown,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const mainNav = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Introducción", url: "/introduccion", icon: BookOpen },
  { title: "Filosofía y Códice", url: "/filosofia", icon: Landmark },
  { title: "Arquitectura", url: "/arquitectura", icon: Layers },
];

const dominios = [
  { title: "ID‑NVIDA", url: "/dominios/id-nvida", icon: Shield },
  { title: "UTAMV", url: "/dominios/utamv", icon: GraduationCap },
  { title: "Metaverso MD‑X4", url: "/dominios/metaverso", icon: Globe },
  { title: "Economía TAMV", url: "/dominios/economia", icon: Coins },
  { title: "Seguridad", url: "/dominios/seguridad", icon: Shield },
];

const extras = [
  { title: "IA & Agentes", url: "/ia-agentes", icon: Brain },
  { title: "Línea de Tiempo", url: "/timeline", icon: Clock },
  { title: "Documentación", url: "/documentacion", icon: FileText },
];

export function WikiSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const renderItems = (items: typeof mainNav) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.url}>
          <SidebarMenuButton asChild>
            <NavLink
              to={item.url}
              end
              className="hover:bg-sidebar-accent/50 transition-colors"
              activeClassName="bg-sidebar-accent text-primary font-medium"
            >
              <item.icon className="mr-2 h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/70 uppercase text-xs tracking-widest">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(mainNav)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="w-full">
              <SidebarGroupLabel className="text-primary/70 uppercase text-xs tracking-widest flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-1">
                  <Network className="h-3 w-3" /> Dominios
                </span>
                {!collapsed && <ChevronDown className="h-3 w-3" />}
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>{renderItems(dominios)}</SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/70 uppercase text-xs tracking-widest">
            Más
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(extras)}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
