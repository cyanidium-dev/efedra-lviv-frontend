import { ContactForm } from './ContactForm/ContactForm';
import { Map } from './Map';
import { ADDRESS, CITY, EMAIL, PHONE } from '@/constants/constants';
import Container from '@/components/shared/container/Container';
import { FollowUs } from '@/components/shared/FollowUs/FollowUs';
import Image from 'next/image';
import { contactsPhoneRegex } from '@/regex/regex';

export const Contacts = () => {
  // check address data
  return (
    <div id="contacts" className="pt-[90px] pb-[80px]">
      <Container>
        <h2 className="text-[30px] leading-[100%] tracking-[-0.05em] text-black font-bold uppercase mb-[30px]">
          Наші контакти
        </h2>
        <Map className="rounded-[20px] mb-[30px] h-[167px]" />
        <address className="not-italic mb-[40px]">
          <ul className="flex flex-wrap gap-y-[25px] gap-x-[20px]">
            <li>
              <p className="text-[16px] leading-[100%] tracking-[-0.03em] text-black font-medium uppercase mb-[5px]">
                Адреса
              </p>
              <p className="text-[14px] leading-[17px] tracking-[-0.05em] text-black/50">
                {CITY}, {ADDRESS}
              </p>
            </li>
            <li>
              <p className="text-[16px] leading-[100%] tracking-[-0.03em] text-black font-medium uppercase mb-[5px]">
                Телефон
              </p>
              <a
                href={`tel:${PHONE}`}
                className="text-[14px] leading-[17px] tracking-[-0.05em] text-black/50"
              >
                {PHONE.replace(contactsPhoneRegex, '+38 ($1) $2 $3 $4')}
              </a>
            </li>
            <li>
              <p className="text-[16px] leading-[100%] tracking-[-0.03em] text-black font-medium uppercase mb-[5px]">
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[14px] leading-[17px] tracking-[-0.05em] text-black/50"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </address>
        <div className="relative rounded-[15px] overflow-hidden px-[14px] pb-[15px] pt-[82px] mb-[10px]">
          <Image
            src="/images/homePage/contacts/socialsBg.jpg"
            alt="Socials"
            width={100}
            height={100}
            className="w-full h-full object-cover absolute inset-0 z-[-10]"
          />
          <h3 className="sr-only">Соціальні мережі</h3>
          <FollowUs
            variant="bordered"
            textClassName="font-manrope text-[14px] leading-[110%] tracking-[-0.03em] text-white font-bold mb-[10px]"
          />
        </div>
        <ContactForm />
        <Map className="hidden lg:block" />
      </Container>
    </div>
  );
};
