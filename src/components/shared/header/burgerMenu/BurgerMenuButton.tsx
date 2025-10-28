'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}

export default function BurgerMenuButton({
  isHeaderMenuOpened = false,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className={clsx(
        'lg:hidden group relative z-[60] w-8 h-8 px-[8px] py-[13px] outline-none bg-beige-secondary rounded-full transition duration-300 ease-in-out',
        isHeaderMenuOpened ? 'rotate-45 border-r-1 border-l-1 border-beige' : ''
      )}
    >
      <div className="w-full h-full relative">
        {/* Верхня лінія */}
        <motion.span
          className="absolute w-full h-[1px] rounded-md bg-black"
          initial={{
            top: '0',
            left: '0',
          }}
          animate={
            isHeaderMenuOpened
              ? { rotate: '90deg', top: '1.6px' }
              : { rotate: '0deg', top: '0' }
          }
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />

        {/* Нижня лінія */}
        <motion.span
          className="absolute w-full h-[1px] rounded-md bg-black"
          initial={{
            top: '4px',
            left: '0',
          }}
          animate={
            isHeaderMenuOpened
              ? {
                  rotate: '-180deg',
                  top: '1.6px',
                }
              : {
                  rotate: '0deg',
                  top: '4px',
                }
          }
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </button>
  );
}
