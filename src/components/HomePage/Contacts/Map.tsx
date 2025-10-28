import { MAP_URL } from '@/constants/constants';

export const Map = () => {
  return (
    <div className="w-full">
      <h3 className="sr-only">Карта</h3>
      <iframe
        src={MAP_URL}
        width="100%"
        height="450"
        style={{ border: 0, minHeight: '450px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта розташування Efedra"
      />
    </div>
  );
};
