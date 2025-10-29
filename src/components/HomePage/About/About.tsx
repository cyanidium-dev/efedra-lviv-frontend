import Container from '@/components/shared/container/Container';
import CheckmarkIcon from '@/components/shared/icons/CheckmarkIcon';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="bg-white py-[40px] rounded-t-[15px]">
      <Container className="relative">
        <h2 className="text-[28px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[25px]">
          Чому нас обирає більшість
        </h2>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center p-[10px] max-w-[261px] bg-green-light rounded-[10px] p-[10px]">
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Працюємо тільки з сертифікованими препаратами
            </p>
          </li>
          <li className="flex items-center p-[10px] max-w-[201px] bg-green-light rounded-[10px] p-[10px]">
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Сучасні апарати останнього покоління.
            </p>
          </li>
          <li className="flex items-center p-[10px] max-w-[189px] bg-green-light rounded-[10px] p-[10px]">
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Затишна атмосфера і конфіденційність.
            </p>
          </li>
          <li className="flex items-center p-[10px] max-w-[189px] bg-green-light rounded-[10px] p-[10px]">
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Лікарі з досвідом понад 10 років.
            </p>
          </li>
          <li className="flex items-center p-[10px] max-w-[220px] bg-green-light rounded-[10px] p-[10px]">
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Індивідуальні протоколи під кожне завдання.
            </p>
          </li>
        </ul>
        <div className="flex justify-center items-center absolute top-[110px] right-[-148px]">
          <div className="flex relative justify-center items-center w-[266px] h-[266px] border border-[#546A504D] rounded-full">
            <div className="flex relative justify-center items-center w-[205px] h-[205px] border border-[#546A504D] rounded-full">
              <Image
                src="/images/homePage/about/center.jpg"
                alt="About"
                width={153}
                height={153}
                className="rounded-full"
              />
              <Image
                src="/images/homePage/hero/cta2.jpg"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute top-[135px] left-0"
              />
            </div>
            <Image
              src="/images/homePage/hero/cta1.jpg"
              alt="About"
              width={26}
              height={26}
              className="rounded-full absolute top-[81px] left-[-9px]"
            />
            <Image
              src="/images/homePage/hero/cta3.jpg"
              alt="About"
              width={26}
              height={26}
              className="rounded-full absolute top-0 left-[85px]"
            />
            <Image
              src="/images/homePage/hero/cta4.jpg"
              alt="About"
              width={26}
              height={26}
              className="rounded-full absolute bottom-[-8px] left-[99px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
