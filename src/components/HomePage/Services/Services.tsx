import Container from '@/components/shared/container/Container';
import { ServiceCard } from './ServiceCard';
import { allServicesQuery } from '@/lib/queries';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { Service } from '@/types/service';
import { ServicesSwiper } from './ServicesSwiper';

export const Services = async () => {
  // download services from sanity
  const services = await fetchSanityDataServer(allServicesQuery);

  return (
    <div id="services" className="py-[50px]">
      <Container>
        <h2 className="text-[30px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[30px]">
          Наші послуги
        </h2>
        <ul className="max-w-[296px] hidden">
          {services.map((service: Service, index: number) => (
            <li key={service.slug}>
              <ServiceCard
                title={service.title}
                number={index + 1}
                categoryImageUrl={service.categoryImage.asset.url}
              />
            </li>
          ))}
        </ul>
        <ServicesSwiper services={services} />
      </Container>
    </div>
  );
};
