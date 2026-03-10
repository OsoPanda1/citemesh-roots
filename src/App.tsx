import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WikiLayout } from "@/components/WikiLayout";
import { IsabellaChat } from "@/components/IsabellaChat";
import CinematicIntro from "@/components/CinematicIntro";
import { useCinematicIntro } from "@/hooks/useCinematicIntro";
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
import Despliegue from "./pages/Despliegue";
import BiografiaCEO from "./pages/BiografiaCEO";
import CasosDeUso from "./pages/CasosDeUso";
import KitAPIs from "./pages/KitAPIs";
import Estrategia from "./pages/Estrategia";
import WikiTAMV from "./pages/WikiTAMV";
import RedSocial from "./pages/RedSocial";
import SeguridadTenochtitlan from "./pages/SeguridadTenochtitlan";
import BlockchainMSR from "./pages/BlockchainMSR";
import XRTecnologia from "./pages/XRTecnologia";
import EconomiaFederada from "./pages/EconomiaFederada";
import QuantumComputing from "./pages/QuantumComputing";
import EnciclopediaUniversal from "./pages/EnciclopediaUniversal";
import IsabellaAI from "./pages/IsabellaAI";
import ImpactoCivilizatorio from "./pages/ImpactoCivilizatorio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { showIntro, completeIntro } = useCinematicIntro();

  return (
    <>
      <CinematicIntro show={showIntro} onComplete={completeIntro} />
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
                <Route path="/despliegue" element={<Despliegue />} />
                <Route path="/biografia-ceo" element={<BiografiaCEO />} />
                <Route path="/casos-de-uso" element={<CasosDeUso />} />
                <Route path="/kit-apis" element={<KitAPIs />} />
                <Route path="/estrategia" element={<Estrategia />} />
                <Route path="/wikitamv" element={<WikiTAMV />} />
                <Route path="/red-social" element={<RedSocial />} />
                <Route path="/seguridad-tenochtitlan" element={<SeguridadTenochtitlan />} />
                <Route path="/blockchain-msr" element={<BlockchainMSR />} />
                <Route path="/xr-tecnologia" element={<XRTecnologia />} />
                <Route path="/economia-federada" element={<EconomiaFederada />} />
                <Route path="/quantum-computing" element={<QuantumComputing />} />
                <Route path="/enciclopedia" element={<EnciclopediaUniversal />} />
                <Route path="/isabella-ai" element={<IsabellaAI />} />
                <Route path="/impacto-civilizatorio" element={<ImpactoCivilizatorio />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </WikiLayout>
            <IsabellaChat />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
