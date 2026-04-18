import { motion } from 'motion/react';

interface DoorProps {
  isOpen: boolean;
}

const WOOD_GRAIN_POSITIONS = [80, 200, 340, 420, 580, 660, 780, 880];

export default function Door({ isOpen }: DoorProps) {
  return (
    <motion.div
      className="door-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        className="door-svg-fullscreen"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="doorGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#5C4A36', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#6B5B47', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#7A6A56', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="doorGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#7A6A56', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#6B5B47', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5C4A36', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.6 }} />
            <stop offset="60%" style={{ stopColor: '#FFD700', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="doorLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFF8DC', stopOpacity: 0.9 }} />
            <stop offset="40%" style={{ stopColor: '#FFD700', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
          </radialGradient>
          <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#DAA520', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="doorShadow">
            <feDropShadow dx="3" dy="3" stdDeviation="6" floodOpacity="0.5" />
          </filter>
          <filter id="goldBlur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <linearGradient id="panelInset" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7A6A56', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#5C4A36', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#3E3028', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        {/* Light behind door - visible when opened */}
        <motion.circle
          cx="500"
          cy="500"
          r="400"
          fill="url(#doorLight)"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Left Door Panel */}
        <motion.g
          animate={{ x: isOpen ? -300 : 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        >
          <rect x="0" y="0" width="500" height="1000" fill="url(#doorGradientLeft)" />

          {/* Wood grain lines */}
          {WOOD_GRAIN_POSITIONS.map((y, i) => (
            <line key={`lwg-${i}`} x1="10" y1={y} x2="490" y2={y + (i % 2 === 0 ? 3 : -2)}
              stroke="#5C4A36" strokeWidth="1" opacity="0.25" />
          ))}

          {/* Panel insets with inner shadow */}
          <rect x="50" y="150" width="400" height="300" fill="url(#panelInset)" rx="4" />
          <rect x="50" y="150" width="400" height="300" fill="none"
            stroke="#4A3A2C" strokeWidth="6" opacity="0.7" rx="4" />
          <rect x="54" y="154" width="392" height="292" fill="none"
            stroke="#8B7B6F" strokeWidth="1" opacity="0.3" rx="3" />

          <rect x="50" y="550" width="400" height="300" fill="url(#panelInset)" rx="4" />
          <rect x="50" y="550" width="400" height="300" fill="none"
            stroke="#4A3A2C" strokeWidth="6" opacity="0.7" rx="4" />
          <rect x="54" y="554" width="392" height="292" fill="none"
            stroke="#8B7B6F" strokeWidth="1" opacity="0.3" rx="3" />

          {/* Corner bolts */}
          <circle cx="70" cy="170" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="430" cy="170" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="70" cy="430" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="430" cy="430" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="70" cy="570" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="430" cy="570" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="70" cy="830" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="430" cy="830" r="6" fill="url(#boltGradient)" opacity="0.7" />

          {/* Left door handle - ornate */}
          <circle cx="430" cy="500" r="28" fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.4" />
          <circle cx="430" cy="500" r="22" fill="#FFD700" stroke="#B8860B" strokeWidth="3" filter="url(#doorShadow)" />
          <circle cx="430" cy="500" r="10" fill="#B8860B" opacity="0.5" />
        </motion.g>

        {/* Right Door Panel */}
        <motion.g
          animate={{ x: isOpen ? 300 : 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        >
          <rect x="500" y="0" width="500" height="1000" fill="url(#doorGradientRight)" />

          {/* Wood grain lines */}
          {WOOD_GRAIN_POSITIONS.map((y, i) => (
            <line key={`rwg-${i}`} x1="510" y1={y + (i % 2 === 0 ? -1 : 4)} x2="990" y2={y}
              stroke="#5C4A36" strokeWidth="1" opacity="0.25" />
          ))}

          {/* Panel insets */}
          <rect x="550" y="150" width="400" height="300" fill="url(#panelInset)" rx="4" />
          <rect x="550" y="150" width="400" height="300" fill="none"
            stroke="#4A3A2C" strokeWidth="6" opacity="0.7" rx="4" />
          <rect x="554" y="154" width="392" height="292" fill="none"
            stroke="#8B7B6F" strokeWidth="1" opacity="0.3" rx="3" />

          <rect x="550" y="550" width="400" height="300" fill="url(#panelInset)" rx="4" />
          <rect x="550" y="550" width="400" height="300" fill="none"
            stroke="#4A3A2C" strokeWidth="6" opacity="0.7" rx="4" />
          <rect x="554" y="554" width="392" height="292" fill="none"
            stroke="#8B7B6F" strokeWidth="1" opacity="0.3" rx="3" />

          {/* Corner bolts */}
          <circle cx="570" cy="170" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="930" cy="170" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="570" cy="430" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="930" cy="430" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="570" cy="570" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="930" cy="570" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="570" cy="830" r="6" fill="url(#boltGradient)" opacity="0.7" />
          <circle cx="930" cy="830" r="6" fill="url(#boltGradient)" opacity="0.7" />

          {/* Right door handle - ornate */}
          <circle cx="570" cy="500" r="28" fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.4" />
          <circle cx="570" cy="500" r="22" fill="#FFD700" stroke="#B8860B" strokeWidth="3" filter="url(#doorShadow)" />
          <circle cx="570" cy="500" r="10" fill="#B8860B" opacity="0.5" />
        </motion.g>

        {/* Center Lock Mechanism */}
        <motion.g
          animate={
            isOpen
              ? { scale: 1.5, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={
            isOpen
              ? { duration: 0.5, delay: 0.3 }
              : { duration: 0.3 }
          }
        >
          {/* Gold glow behind lock */}
          <circle cx="500" cy="500" r="110" fill="url(#goldGlow)" />

          {/* Outer rotating circle with tick marks */}
          <motion.g
            animate={isOpen ? { rotate: 360 } : { rotate: 0 }}
            transition={isOpen ? { duration: 0.8, ease: 'easeInOut' } : { duration: 0 }}
            style={{ transformOrigin: '500px 500px' }}
          >
            <circle cx="500" cy="500" r="80" fill="none" stroke="#FFD700" strokeWidth="4" />
            <circle cx="500" cy="500" r="76" fill="none" stroke="#B8860B" strokeWidth="1" opacity="0.4" />
            {/* Tick marks around outer ring */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 500 + Math.cos(angle) * 70;
              const y1 = 500 + Math.sin(angle) * 70;
              const x2 = 500 + Math.cos(angle) * 78;
              const y2 = 500 + Math.sin(angle) * 78;
              return <line key={`tick-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD700" strokeWidth="2" opacity="0.6" />;
            })}
          </motion.g>

          {/* Inner golden disc */}
          <circle cx="500" cy="500" r="50" fill="#FFD700" opacity="0.85" filter="url(#doorShadow)" />
          <circle cx="500" cy="500" r="50" fill="none" stroke="#B8860B" strokeWidth="3" />
          <circle cx="500" cy="500" r="38" fill="none" stroke="#DAA520" strokeWidth="1.5" opacity="0.6" />

          {/* Keyhole */}
          <circle cx="500" cy="492" r="8" fill="#3E3028" />
          <rect x="496" y="496" width="8" height="20" rx="2" fill="#3E3028" />
        </motion.g>

        {/* Door seam */}
        <line x1="500" y1="0" x2="500" y2="1000" stroke="#3E3028" strokeWidth="3" opacity="0.5" />

        {/* Door frame edges */}
        <rect x="0" y="0" width="1000" height="1000" fill="none" stroke="#3E3028" strokeWidth="16" />
      </svg>
    </motion.div>
  );
}
