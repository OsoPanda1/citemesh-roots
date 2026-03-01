import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CinematicIntroProps {
  show: boolean;
  onComplete: () => void;
}

const CinematicIntro = ({ show, onComplete }: CinematicIntroProps) => {
  const [isVisible, setIsVisible] = useState(show);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  useEffect(() => {
    if (!show) return;
    
    // Auto-advance through phases
    const timers = [
      setTimeout(() => setCurrentPhase(1), 2000),
      setTimeout(() => setCurrentPhase(2), 4500),
      setTimeout(() => setCurrentPhase(3), 7000),
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }, 9500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [show, onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <X className="h-4 w-4" />
            Skip Intro
          </button>

          {/* Phase 1: Logo */}
          <AnimatePresence>
            {currentPhase === 0 && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-amber-500 flex items-center justify-center">
                  <span className="text-6xl font-bold text-amber-500">T</span>
                </div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl font-bold text-white"
                >
                  TAMV
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl text-amber-400 mt-2"
                >
                  Tecnología Avanzada Mexicana Versátil
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2: Vision */}
          <AnimatePresence>
            {currentPhase === 1 && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="max-w-3xl text-center px-8"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Una Nueva Era Digital
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  "Demostrar que un autodidacta puede construir un sistema civilizatorio global.
                  Reescribir el legado para que sus descendientes hereden una imagen de triunfo y soberanía."
                </p>
                <p className="text-amber-400 mt-4">— Anubis Villaseñor</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 3: Features */}
          <AnimatePresence>
            {currentPhase === 2 && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center px-8"
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Ecosistema Civilizatorio Federado
                </h2>
                <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {[
                    "Identidad Soberana",
                    "Metaverso Inmersivo",
                    "Economía Ética",
                    "IA Asistencial",
                  ].map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    >
                      <span className="text-amber-400 font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 4: Final */}
          <AnimatePresence>
            {currentPhase === 3 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center"
              >
                <h1 className="text-7xl font-bold text-gradient-gold mb-4">
                  MD-X4
                </h1>
                <p className="text-2xl text-gray-300">
                  El Primer CITEMESH Civilizatorio
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
                  <p className="text-gray-500 mt-4">Cargando...</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
            <motion.div
              className="h-full bg-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentPhase + 1) / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
