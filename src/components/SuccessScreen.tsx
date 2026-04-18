import { motion } from 'motion/react';

export default function SuccessScreen() {
  return (
    <div className="success-screen">
      <motion.div
        className="success-backdrop"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      >
        <h1 className="success-text">Bravo, vous avez réussi</h1>
        <p className="success-subtitle">Porte déverrouillée</p>
        <motion.div
          className="success-badge"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🎉
        </motion.div>
      </motion.div>
    </div>
  );
}
