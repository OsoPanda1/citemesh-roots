import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, MapPin, Utensils, Landmark, MessageSquare, Route, Eye, Store, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Inicio", href: "/", icon: MapPin },
  { label: "Cultura", href: "/cultura", icon: Landmark },
  { label: "Gastronomía", href: "/gastronomia", icon: Utensils },
  { label: "Rutas", href: "/rutas", icon: Route },
  { label: "Comercios", href: "/comercios", icon: Store },
  { label: "Muro", href: "/muro", icon: MessageSquare },
  { label: "Mapa", href: "/mapa", icon: Eye },
  { label: "RDM-TOS", href: "/rdm-tos", icon: Route },
];

const FOOTER_LINKS = [
  { label: "Cultura e Historia", href: "/cultura" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Dichos Mineros", href: "/dichos-mineros" },
  { label: "Rutas Turísticas", href: "/rutas" },
  { label: "Comercios", href: "/comercios" },
  { label: "Qué Visitar", href: "/que-visitar" },
  { label: "Muro", href: "/muro" },
  { label: "Mapa", href: "/mapa" },
  { label: "RDM-TOS", href: "/rdm-tos" },
];

interface RDMLayoutProps {
  children: ReactNode;
}

export function RDMLayout({ children }: RDMLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ─── Top bar ─── */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center h-14 px-4 gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg text-primary tracking-tight hidden sm:inline">RDM Digital</span>
            <span className="text-xs text-muted-foreground hidden md:inline">Real del Monte</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {NAV_ITEMS.map(n => (
              <Link
                key={n.href}
                to={n.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  location.pathname === n.href || (n.href !== "/" && location.pathname.startsWith(n.href))
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link to="/dichos-mineros" className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <BookOpen className="h-4 w-4" /> Dichos
            </Link>
            <Link to="/que-visitar" className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <Eye className="h-4 w-4" /> Qué visitar
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border/40 bg-background pb-2">
            {[...NAV_ITEMS, { label: "Dichos Mineros", href: "/dichos-mineros", icon: BookOpen }, { label: "Qué Visitar", href: "/que-visitar", icon: Eye }].map(n => (
              <Link
                key={n.href}
                to={n.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm",
                  location.pathname === n.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <n.icon className="h-4 w-4" />
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* ─── Main ─── */}
      <main className="flex-1">{children}</main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/40 bg-muted/30 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-bold text-primary">RDM Digital</span>
              </div>
              <p className="text-sm text-muted-foreground">Real del Monte – Pueblo Mágico vivo 24/7</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Explorar</h4>
              <ul className="space-y-1.5">
                {FOOTER_LINKS.slice(0, 4).map(l => (
                  <li key={l.href}><Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Comunidad</h4>
              <ul className="space-y-1.5">
                {FOOTER_LINKS.slice(4).map(l => (
                  <li key={l.href}><Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Ecosistema</h4>
              <ul className="space-y-1.5">
                <li><Link to="/wiki" className="text-sm text-muted-foreground hover:text-primary transition-colors">Wiki TAMV</Link></li>
                <li><span className="text-sm text-muted-foreground">TAMV MD‑X4™</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-4 text-center">
            <p className="text-xs text-muted-foreground">Proyecto piloto del ecosistema TAMV MD‑X4™ para Real del Monte, Hidalgo, México.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
