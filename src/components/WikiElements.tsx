import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "gold" | "cyan";
}

export function InfoCard({ title, description, icon: Icon, variant = "gold" }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`rounded-lg border p-5 bg-card/80 backdrop-blur-sm ${
        variant === "gold" ? "border-glow-gold" : "border-glow-cyan"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-md ${
          variant === "gold" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
        }`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-primary inline-block" />
        {title}
      </h2>
      {children}
    </section>
  );
}
