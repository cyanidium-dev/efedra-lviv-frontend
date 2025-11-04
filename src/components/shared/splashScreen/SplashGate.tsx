'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const LottieSplashScreen = dynamic(() => import('./LottieSplashScreen'), {
  ssr: false,
});

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem('splashPlayed');

    const preSplash = document.getElementById('pre-splash');

    if (alreadyPlayed) {
      preSplash?.classList.add('hidden');
      setShowSplash(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('splashPlayed', 'true');
      preSplash?.classList.add('hidden');
      setShowSplash(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <div className="relative z-0">{children}</div>

      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-primary text-white"
          >
            <LottieSplashScreen visible />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
