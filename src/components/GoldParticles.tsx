import { motion } from 'motion/react';
import { useMemo } from 'react';

export default function GoldParticles() {
  const particles = useMemo(() => {
    const particleCount = Math.random() * 150 + 200; // 200-350 particles
    return Array.from({ length: Math.floor(particleCount) }, (_, i) => ({
      id: i,
      startX: Math.random() * 100, // 0-100% horizontal
      startY: -10,
      delay: Math.random() * 0.3, // Staggered start
      duration: Math.random() * 1.5 + 2.5, // 2.5-4 seconds
    }));
  }, []);

  const getRandomRotation = () => Math.random() * 360;
  const getRandomEndY = () => window.innerHeight + 100;

  return (
    <div className="gold-particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="gold-particle"
          initial={{
            left: `${particle.startX}%`,
            top: `${particle.startY}px`,
            opacity: 1,
            scale: Math.random() * 0.5 + 0.75, // 0.75-1.25
          }}
          animate={{
            top: `${getRandomEndY()}px`,
            opacity: 0,
            rotate: getRandomRotation(),
            x: (Math.random() - 0.5) * 100, // Slight horizontal drift
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}
