'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LottieSplashScreen = dynamic(() => import('./LottieSplashScreen'), {
  ssr: false,
});

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const alreadyPlayed = sessionStorage.getItem('splashPlayed');

    if (alreadyPlayed) {
      return;
    }

    setShowSplash(true);

    const timer = setTimeout(() => {
      sessionStorage.setItem('splashPlayed', 'true');
      setShowSplash(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isMounted && <LottieSplashScreen visible={showSplash} />}
      {children}
    </>
  );
}
