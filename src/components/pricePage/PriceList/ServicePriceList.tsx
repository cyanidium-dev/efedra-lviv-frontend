import { PriceService } from '@/types/price';
import { twMerge } from 'tailwind-merge';

interface ServicePriceListProps {
  services: PriceService[];
  colorScheme: 'light-green' | 'black' | 'green';
  isOpen: boolean;
}

export default function ServicePriceList({
  services,
  colorScheme,
  isOpen,
}: ServicePriceListProps) {
  const openVariant = {
    open: 'border border-t-0 rounded-b-[32px] rounded-t-none mt-0',
    close: 'border rounded-[32px] mt-[6px]',
  };
  return (
    <>
      <div
        className={twMerge(
          `hidden md:grid md:grid-cols-[2.5fr_1.75fr_0.7fr] lg:grid-cols-[2.5fr_1.75fr_0.5fr] border-${colorScheme} `,
          openVariant[isOpen ? 'open' : 'close'] as string
        )}
      >
        <div className="pl-[46px] py-[18px] uppercase text-[12px] md:text-[14px] text-left">
          Назва послуги
        </div>
        <div className="py-[18px] uppercase text-[12px] md:text-[14px] text-center">
          Вартість (грн)
        </div>
        <div className="pr-[27px] py-[18px] uppercase text-[12px] md:text-[14px] text-center">
          Час (хв)
        </div>

        {services
          .filter(service => service?.title)
          .map((service, idx) => {
            return (
              <div key={idx} className={`contents`}>
                <div
                  key={`title-${idx}`}
                  className={twMerge(
                    `flex items-center pl-[46px] py-3 text-[12px] md:text-[14px] leading-[150%] text-left border-t-[0.5px] border-${colorScheme}`
                  )}
                >
                  {service.title}
                </div>
                <div
                  key={`price-${idx}`}
                  className={twMerge(
                    `flex items-center justify-center py-3 text-[12px] md:text-[14px] text-center border-t-[0.5px] border-${colorScheme}`
                  )}
                >
                  {service.price || <span>—</span>}
                </div>
                <div
                  key={`duration-${idx}`}
                  className={twMerge(`flex items-center justify-center pr-[27px] py-3 text-[12px] md:text-[14px] text-center border-t-[0.5px] border-${colorScheme}
                `)}
                >
                  {service.duration || <span>—</span>}
                </div>
              </div>
            );
          })}
      </div>

      <div
        className={twMerge(
          `md:hidden mt-[6px] border-${colorScheme} overflow-hidden`,
          openVariant[isOpen ? 'open' : 'close'] as string
        )}
      >
        {services
          .filter(service => service?.title)
          .map((service, idx) => {
            return (
              <div
                key={idx}
                className={`flex flex-col gap-2 px-3 py-4 text-sm border-t-[0.5px] border-${colorScheme} ${idx === 0 ? 'border-t-[0px]' : ''}`}
              >
                <p className="text-[12px] leading-[133%]">{service.title}</p>
                <div className="flex justify-between text-[12px] leading-[133%]">
                  <span>{service.price + ' грн' || '—'}</span>
                  <span>
                    {service.duration ? `${service.duration} хв` : '—'}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
