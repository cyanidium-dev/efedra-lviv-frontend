'use client';
import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import CallBackModal from '../modals/CallBackModal';
import * as motion from 'motion/react-client';
import { ctaVariants } from '@/utils/animationVariants';

interface CallbackProps {
  buttonText: string;
  buttonClassName?: string;
}

export default function Callback({
  buttonText,
  buttonClassName = '',
}: CallbackProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <MainButton
        onClick={() => setIsModalShown(true)}
        className={buttonClassName}
      >
        {buttonText}
      </MainButton>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </>
  );
}
