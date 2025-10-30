import { PersonelBlock } from './PersonelBlock/PersonelBlock';
import Container from '@/components/shared/container/Container';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { allDoctorsQuery } from '@/lib/queries';

export const Personel = async () => {
  // download personel from sanity
  const doctors = await fetchSanityDataServer(allDoctorsQuery);
  return (
    <div id="personel" className="pt-[40px] pb-[31px]">
      <Container>
        <h2 className="text-[30px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[25px]">
          Наші майстри потурбуються про вашу красу!
        </h2>
        <div className="hidden">logo</div>
        <p className="text-[13px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium mb-[30px]">
          В центрі естетичної медицини зібрались спеціалісти, об'єднані спільною
          мрією. Мрією про косметологію, яка зберігає молодість та здоров'я
          клієнтів.
        </p>
        <PersonelBlock doctors={doctors} />
      </Container>
    </div>
  );
};
