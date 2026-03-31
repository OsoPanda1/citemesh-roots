import { useMemo, useState } from "react";
import { Brain, Database, MapPinned, Sparkles, Code2, Castle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  RDM_API_BLUEPRINT,
  RDM_CORE_NODES,
  RDM_FOUNDATIONAL_LAYERS,
  RDM_LOVABLE_EXPORT,
  RDM_NARRATIVE_PROFILES,
  RDM_STRUCTURAL_AXES,
  RDM_SYMBOLIC_SYSTEM,
  RDM_TOS_META,
} from "@/data/rdm-tos-content";

const EXPERIENCE_OPTIONS = ["historia", "romance", "aventura", "gastronomía"];

export default function RDMTOS() {
  const [experience, setExperience] = useState("historia");
  const [availableTime, setAvailableTime] = useState("180");

  const profile = useMemo(
    () => RDM_NARRATIVE_PROFILES.find((item) => item.trigger === experience) ?? RDM_NARRATIVE_PROFILES[0],
    [experience],
  );

  const score = useMemo(() => {
    const timeFactor = Number(availableTime) >= 180 ? 0.94 : 0.87;
    return timeFactor.toFixed(2);
  }, [availableTime]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Castle className="h-7 w-7 text-primary" /> RDM-TOS · Sistema Operativo Turístico de Real del Monte
          </CardTitle>
          <p className="text-muted-foreground">{RDM_TOS_META.nature}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <p><strong>Sistema:</strong> {RDM_TOS_META.system}</p>
          <p><strong>Estado:</strong> {RDM_TOS_META.status}</p>
          <p>{RDM_TOS_META.identity}</p>
          <p className="text-primary font-medium">{RDM_TOS_META.insight}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {RDM_STRUCTURAL_AXES.map((axis) => (
          <Card key={axis.title}>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><MapPinned className="h-4 w-4 text-primary" />{axis.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{axis.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Brain className="h-4 w-4 text-primary" />Motor narrativo funcional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de experiencia" />
                </SelectTrigger>
                <SelectContent>
                  {EXPERIENCE_OPTIONS.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={availableTime} onValueChange={setAvailableTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Tiempo disponible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="120">120 min</SelectItem>
                  <SelectItem value="180">180 min</SelectItem>
                  <SelectItem value="240">240 min</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border border-border p-4 bg-muted/30 space-y-2">
              <p className="text-sm text-muted-foreground">Ruta recomendada</p>
              <p className="font-semibold">{profile.sequence.join(" → ")}</p>
              <p className="text-sm">{profile.narrative}</p>
              <Badge variant="secondary">score: {score}</Badge>
            </div>

            <Button className="w-full" variant="default">Generar experiencia narrativa</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Code2 className="h-4 w-4 text-primary" />Blueprint API + IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p><strong>Stack:</strong> {RDM_API_BLUEPRINT.stack.join(" · ")}</p>
            <p><strong>Places:</strong> {RDM_API_BLUEPRINT.endpoints.places.join(" | ")}</p>
            <p><strong>Routes:</strong> {RDM_API_BLUEPRINT.endpoints.routes.join(" | ")}</p>
            <p><strong>Events:</strong> {RDM_API_BLUEPRINT.endpoints.events.join(" | ")}</p>
            <p><strong>IA:</strong> {RDM_API_BLUEPRINT.endpoints.ai.join(" | ")}</p>
            <div className="rounded-md bg-black/90 text-green-400 p-3 font-mono text-xs overflow-x-auto">
              {RDM_API_BLUEPRINT.recommendationFormula}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-base">Capas ontológicas</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {RDM_FOUNDATIONAL_LAYERS.map((layer) => <Badge key={layer} variant="outline" className="mr-2 mb-2">{layer}</Badge>)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Sistema simbólico</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {RDM_SYMBOLIC_SYSTEM.map((item) => (
              <p key={item.symbol} className="text-sm"><strong>{item.symbol}:</strong> {item.meaning}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Nodos operativos</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {RDM_CORE_NODES.map((node) => <Badge key={node} variant="secondary" className="mr-2 mb-2">{node}</Badge>)}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Database className="h-4 w-4 text-primary" />Export Lovable-ready</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">Configuración serializable para consumir desde Lovable o pipelines de despliegue.</p>
          <pre className="text-xs rounded-lg bg-muted p-4 overflow-x-auto">
            {JSON.stringify(RDM_LOVABLE_EXPORT, null, 2)}
          </pre>
          <div className="text-xs text-muted-foreground flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" />Integración funcional y desplegable con estructura semántica v2.5.</div>
        </CardContent>
      </Card>
    </section>
  );
}
