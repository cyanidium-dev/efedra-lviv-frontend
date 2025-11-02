import { PersonelBlock } from './PersonelBlock/PersonelBlock';
import Container from '@/components/shared/container/Container';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { allDoctorsQuery } from '@/lib/queries';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

export const Personel = async () => {
  // download personel from sanity
  const doctors = await fetchSanityDataServer(allDoctorsQuery);
  return (
    <div id="personel" className="pt-[40px] pb-[31px]">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[30px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[25px] uppercase whitespace-pre-wrap"
        >
          {`Наші  майстри потурбуються про вашу красу!`}
        </motion.h2>
        <div className="hidden">logo</div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[13px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium mb-[40px]"
        >
          В центрі естетичної медицини зібрались спеціалісти, об'єднані спільною
          мрією. Мрією про косметологію, яка зберігає молодість та здоров'я
          клієнтів.
        </motion.p>

        <PersonelBlock doctors={doctors} />
      </Container>
    </div>
  );
};
