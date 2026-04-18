import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CodeInputs from './CodeInputs';
import Door from './Door';
import SuccessScreen from './SuccessScreen';
import GoldParticles from './GoldParticles';
import './CodeVerificator.css';

const CORRECT_CODE = '47329';

export default function CodeVerificator() {
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);
  const vibrationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInputChange = (index: number, value: string) => {
    // Nur Zahlen erlauben (0-9)
    if (!/^\d?$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // Auto-focus auf nächstes Feld bei Eingabe
    if (value && index < 4) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      nextInput?.focus();
    }

    // Check code
    checkCode(newInputs);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Backspace: Focus auf vorheriges Feld
    if (e.key === 'Backspace' && inputs[index] === '' && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      prevInput?.focus();
    }

    // Enter: Submitting
    if (e.key === 'Enter') {
      checkCode(inputs);
    }
  };

  const checkCode = (currentInputs: string[]) => {
    const code = currentInputs.join('');
    
    // Check: alle 5 Felder gefüllt?
    if (code.length === 5) {
      if (code === CORRECT_CODE) {
        setIsCorrect(true);
        setShowError(false);
      } else {
        // Falscher Code: Shake-Animation + Vibration
        setIsCorrect(false);
        setShowError(true);
        triggerVibration();
        // Auto-reset nach 1s
        setTimeout(() => setShowError(false), 600);
      }
    }
  };

  const triggerVibration = () => {
    if (vibrationRef.current) clearTimeout(vibrationRef.current);

    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
  };

  return (
    <div className="verificator-container">
      {/* Door always in background */}
      <Door isOpen={isCorrect} />

      <motion.div
        className={`inputs-wrapper ${showError ? 'shake-error' : ''}`}
        animate={showError ? { x: [-10, 10, -10, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CodeInputs
          inputs={inputs}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          isDisabled={isCorrect}
        />
      </motion.div>

      <AnimatePresence>
        {isCorrect && (
          <>
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SuccessScreen />
            </motion.div>

            <motion.div
              key="particles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              <GoldParticles />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
