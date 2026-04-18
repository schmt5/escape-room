import { motion } from 'motion/react';

interface DoorProps {
  isOpen: boolean;
}

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
            <stop offset="0%" style={{ stopColor: '#6B5B47', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8B7B6F', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="doorGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#8B7B6F', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6B5B47', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="doorShadow">
            <feDropShadow dx="5" dy="5" stdDeviation="8" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Left Door Panel */}
        <motion.g
          animate={{
            x: isOpen ? -300 : 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: 'easeInOut',
          }}
        >
          <rect x="0" y="0" width="500" height="1000" fill="url(#doorGradientLeft)" />
          
          {/* Left door panels detail */}
          <rect
            x="50"
            y="150"
            width="400"
            height="300"
            fill="none"
            stroke="#5C4C3C"
            strokeWidth="8"
            opacity="0.6"
          />
          <rect
            x="50"
            y="550"
            width="400"
            height="300"
            fill="none"
            stroke="#5C4C3C"
            strokeWidth="8"
            opacity="0.6"
          />
          
          {/* Left door handle */}
          <circle cx="430" cy="500" r="25" fill="#FFD700" stroke="#B8860B" strokeWidth="3" />
          <line x1="460" y1="500" x2="510" y2="500" stroke="#B8860B" strokeWidth="2" />
        </motion.g>

        {/* Right Door Panel */}
        <motion.g
          animate={{
            x: isOpen ? 300 : 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: 'easeInOut',
          }}
        >
          <rect x="500" y="0" width="500" height="1000" fill="url(#doorGradientRight)" />
          
          {/* Right door panels detail */}
          <rect
            x="550"
            y="150"
            width="400"
            height="300"
            fill="none"
            stroke="#5C4C3C"
            strokeWidth="8"
            opacity="0.6"
          />
          <rect
            x="550"
            y="550"
            width="400"
            height="300"
            fill="none"
            stroke="#5C4C3C"
            strokeWidth="8"
            opacity="0.6"
          />
          
          {/* Right door handle */}
          <circle cx="570" cy="500" r="25" fill="#FFD700" stroke="#B8860B" strokeWidth="3" />
          <line x1="490" y1="500" x2="540" y2="500" stroke="#B8860B" strokeWidth="2" />
        </motion.g>

        {/* Center Circle - animates before doors open */}
        <motion.g
          animate={
            isOpen
              ? {
                  scale: 1.5,
                  opacity: 0,
                }
              : {
                  scale: 1,
                  opacity: 1,
                }
          }
          transition={
            isOpen
              ? {
                  duration: 0.5,
                  delay: 0.3,
                }
              : {
                  duration: 0.3,
                }
          }
        >
          {/* Outer rotating circle */}
          <motion.circle
            cx="500"
            cy="500"
            r="80"
            fill="none"
            stroke="#FFD700"
            strokeWidth="6"
            animate={
              isOpen
                ? { rotate: 360 }
                : { rotate: 0 }
            }
            transition={
              isOpen
                ? {
                    duration: 0.8,
                    ease: 'easeInOut',
                  }
                : {
                    duration: 0,
                  }
            }
            style={{ transformOrigin: '500px 500px' }}
          />
          
          {/* Inner circle with glow effect */}
          <circle
            cx="500"
            cy="500"
            r="50"
            fill="#FFD700"
            opacity="0.8"
            filter="url(#doorShadow)"
          />
          
          {/* Inner design */}
          <circle cx="500" cy="500" r="50" fill="none" stroke="#B8860B" strokeWidth="3" />
          <circle cx="500" cy="500" r="35" fill="none" stroke="#FFD700" strokeWidth="2" />
        </motion.g>

        {/* Vertical line (door seam) */}
        <line
          x1="500"
          y1="0"
          x2="500"
          y2="1000"
          stroke="#5C4C3C"
          strokeWidth="4"
          opacity="0.4"
        />
      </svg>
    </motion.div>
  );
}
