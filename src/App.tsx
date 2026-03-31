import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RDMLayout } from "@/components/rdm/RDMLayout";
import { GuiaDigital } from "@/components/rdm/GuiaDigital";
import { WikiLayout } from "@/components/WikiLayout";
import { IsabellaChat } from "@/components/IsabellaChat";
import CinematicIntro from "@/components/CinematicIntro";
import { useCinematicIntro } from "@/hooks/useCinematicIntro";

// RDM Pages
import RDMHome from "./pages/rdm/RDMHome";
import RDMCultura from "./pages/rdm/RDMCultura";
import RDMGastronomia from "./pages/rdm/RDMGastronomia";
import RDMDichosMineros from "./pages/rdm/RDMDichosMineros";
import RDMComercios from "./pages/rdm/RDMComercios";
import RDMComercioDetalle from "./pages/rdm/RDMComercioDetalle";
import RDMRutas from "./pages/rdm/RDMRutas";
import RDMRutaDetalle from "./pages/rdm/RDMRutaDetalle";
import RDMQueVisitar from "./pages/rdm/RDMQueVisitar";
import RDMMuro from "./pages/rdm/RDMMuro";
import RDMMapa from "./pages/rdm/RDMMapa";

// Wiki Pages
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
import RealDelMonteDigital from "./pages/RealDelMonteDigital";
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
            <Routes>
              {/* ─── RDM Digital (main experience) ─── */}
              <Route element={<RDMLayout><RDMHome /></RDMLayout>} path="/" />
              <Route element={<RDMLayout><RDMCultura /></RDMLayout>} path="/cultura" />
              <Route element={<RDMLayout><RDMCultura /></RDMLayout>} path="/cultura/:tab" />
              <Route element={<RDMLayout><RDMGastronomia /></RDMLayout>} path="/gastronomia" />
              <Route element={<RDMLayout><RDMDichosMineros /></RDMLayout>} path="/dichos-mineros" />
              <Route element={<RDMLayout><RDMComercios /></RDMLayout>} path="/comercios" />
              <Route element={<RDMLayout><RDMComercioDetalle /></RDMLayout>} path="/comercios/:id" />
              <Route element={<RDMLayout><RDMRutas /></RDMLayout>} path="/rutas" />
              <Route element={<RDMLayout><RDMRutaDetalle /></RDMLayout>} path="/rutas/:id" />
              <Route element={<RDMLayout><RDMQueVisitar /></RDMLayout>} path="/que-visitar" />
              <Route element={<RDMLayout><RDMMuro /></RDMLayout>} path="/muro" />
              <Route element={<RDMLayout><RDMMapa /></RDMLayout>} path="/mapa" />

              {/* ─── Wiki TAMV ─── */}
              <Route path="/wiki" element={<WikiLayout><Index /></WikiLayout>} />
              <Route path="/wiki/introduccion" element={<WikiLayout><Introduccion /></WikiLayout>} />
              <Route path="/wiki/filosofia" element={<WikiLayout><Filosofia /></WikiLayout>} />
              <Route path="/wiki/arquitectura" element={<WikiLayout><Arquitectura /></WikiLayout>} />
              <Route path="/wiki/dominios/:slug" element={<WikiLayout><DomainPage /></WikiLayout>} />
              <Route path="/wiki/ia-agentes" element={<WikiLayout><IAAgentes /></WikiLayout>} />
              <Route path="/wiki/timeline" element={<WikiLayout><Timeline /></WikiLayout>} />
              <Route path="/wiki/documentacion" element={<WikiLayout><Documentacion /></WikiLayout>} />
              <Route path="/wiki/gobernanza" element={<WikiLayout><Gobernanza /></WikiLayout>} />
              <Route path="/wiki/dashboard" element={<WikiLayout><Dashboard /></WikiLayout>} />
              <Route path="/wiki/sistemas-avanzados" element={<WikiLayout><SistemasAvanzados /></WikiLayout>} />
              <Route path="/wiki/manuales" element={<WikiLayout><Manuales /></WikiLayout>} />
              <Route path="/wiki/despliegue" element={<WikiLayout><Despliegue /></WikiLayout>} />
              <Route path="/wiki/biografia-ceo" element={<WikiLayout><BiografiaCEO /></WikiLayout>} />
              <Route path="/wiki/casos-de-uso" element={<WikiLayout><CasosDeUso /></WikiLayout>} />
              <Route path="/wiki/kit-apis" element={<WikiLayout><KitAPIs /></WikiLayout>} />
              <Route path="/wiki/estrategia" element={<WikiLayout><Estrategia /></WikiLayout>} />
              <Route path="/wiki/wikitamv" element={<WikiLayout><WikiTAMV /></WikiLayout>} />
              <Route path="/wiki/red-social" element={<WikiLayout><RedSocial /></WikiLayout>} />
              <Route path="/wiki/seguridad-tenochtitlan" element={<WikiLayout><SeguridadTenochtitlan /></WikiLayout>} />
              <Route path="/wiki/blockchain-msr" element={<WikiLayout><BlockchainMSR /></WikiLayout>} />
              <Route path="/wiki/xr-tecnologia" element={<WikiLayout><XRTecnologia /></WikiLayout>} />
              <Route path="/wiki/economia-federada" element={<WikiLayout><EconomiaFederada /></WikiLayout>} />
              <Route path="/wiki/quantum-computing" element={<WikiLayout><QuantumComputing /></WikiLayout>} />
              <Route path="/wiki/enciclopedia" element={<WikiLayout><EnciclopediaUniversal /></WikiLayout>} />
              <Route path="/wiki/isabella-ai" element={<WikiLayout><IsabellaAI /></WikiLayout>} />
              <Route path="/wiki/impacto-civilizatorio" element={<WikiLayout><ImpactoCivilizatorio /></WikiLayout>} />
              <Route path="/wiki/real-del-monte" element={<WikiLayout><RealDelMonteDigital /></WikiLayout>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <GuiaDigital />
            <IsabellaChat />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
