import { MAP_URL } from '@/constants/constants';
import clsx from 'clsx';

export const Map = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('w-full', className)}>
      <h3 className="sr-only">Карта</h3>
      <iframe
        src={MAP_URL}
        width="100%"
        height="100%"
        style={{ border: 0, height: '100%', zoom: 0.5 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта розташування Efedra"
      />
    </div>
  );
};
