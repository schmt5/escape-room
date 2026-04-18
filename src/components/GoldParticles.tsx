import { motion } from 'motion/react';
import { useMemo } from 'react';

type ParticleShape = 'circle' | 'large' | 'diamond';

export default function GoldParticles() {
  const particles = useMemo(() => {
    const particleCount = Math.random() * 100 + 180;
    const shapes: ParticleShape[] = ['circle', 'large', 'diamond'];
    return Array.from({ length: Math.floor(particleCount) }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: -10,
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 2.5,
      shape: shapes[i % 8 === 0 ? 1 : i % 5 === 0 ? 2 : 0],
      drift: (Math.random() - 0.5) * 150,
      scale: Math.random() * 0.5 + 0.6,
      rotation: Math.random() * 540,
    }));
  }, []);

  const getRandomEndY = () => window.innerHeight + 100;

  return (
    <div className="gold-particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`gold-particle${
            particle.shape === 'large' ? ' gold-particle--large' :
            particle.shape === 'diamond' ? ' gold-particle--diamond' : ''
          }`}
          initial={{
            left: `${particle.startX}%`,
            top: `${particle.startY}px`,
            opacity: 1,
            scale: particle.scale,
          }}
          animate={{
            top: `${getRandomEndY()}px`,
            opacity: 0,
            rotate: particle.rotation,
            x: particle.drift,
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
