import Container from '@/components/shared/container/Container';
import { ServiceCard } from './ServiceCard';
import { allServicesQuery } from '@/lib/queries';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { Service } from '@/types/service';
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
} from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

export const Services = async () => {
  // download services from sanity
  const services = await fetchSanityDataServer(allServicesQuery);
  return (
    <div id="services" className="py-[50px]">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[30px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[30px] uppercase"
        >
          Наші послуги
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
          className="flex flex-wrap items-center justify-center gap-[10px]"
        >
          {services.map((service: Service, index: number) => (
            <motion.li
              key={service.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
            >
              <ServiceCard
                title={service.title}
                number={index + 1}
                categoryImageUrl={service.categoryImage.asset.url}
              />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </div>
  );
};
