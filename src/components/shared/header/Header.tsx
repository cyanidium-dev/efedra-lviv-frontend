'use client';
import { useState } from 'react';
import Link from 'next/link';
import Container from '../container/Container';
import LogoIcon from '../icons/LogoIcon';
import BurgerMenu from './burgerMenu/BurgerMenu';
import * as motion from 'motion/react-client';
import { headerVariants } from '@/utils/animationVariants';
import clsx from 'clsx';

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
      className="fixed z-50 top-0 left-0 w-dvw py-[26px] bg-white"
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="relative z-60"
          onClick={() => setIsOpenBurgerMenu(false)}
        >
          <LogoIcon
            className={clsx(
              'w-[61px] xl:w-[120px] text-gray-dark h-auto xl:hover:text-beige focus-visible:text-beige transition duration-300 ease-in-out',
              isOpenBurgerMenu ? 'text-white' : ''
            )}
          />
        </Link>
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </motion.header>
  );
}
