import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WikiLayout } from "@/components/WikiLayout";
import { IsabellaChat } from "@/components/IsabellaChat";
import Index from "./pages/Index";
import Introduccion from "./pages/Introduccion";
import Filosofia from "./pages/Filosofia";
import Arquitectura from "./pages/Arquitectura";
import DomainPage from "./pages/DomainPage";
import IAAgentes from "./pages/IAAgentes";
import Timeline from "./pages/Timeline";
import Documentacion from "./pages/Documentacion";
import Gobernanza from "./pages/Gobernanza";
import Dashboard from "./pages/Dashboard";
import SistemasAvanzados from "./pages/SistemasAvanzados";
import Manuales from "./pages/Manuales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WikiLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduccion" element={<Introduccion />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/dominios/:slug" element={<DomainPage />} />
            <Route path="/ia-agentes" element={<IAAgentes />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/gobernanza" element={<Gobernanza />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sistemas-avanzados" element={<SistemasAvanzados />} />
            <Route path="/manuales" element={<Manuales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WikiLayout>
        <IsabellaChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
