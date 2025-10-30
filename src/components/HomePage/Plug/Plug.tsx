import LogoIcon from '@/components/shared/icons/LogoIcon';
import Image from 'next/image';
export const Plug = () => {
  return (
    <div>
      <ul className="flex items-center justify-center">
        <li className="bg-green text-white flex items-center justify-center h-[59px] w-full rounded-full">
          <LogoIcon className="w-[55px]" />
        </li>
        <li className="hidden lg:block"></li>
        <li className="relative text-[14px] leading-[100%] tracking-[-0.03em] text-white font-medium h-[59px] flex items-center justify-center w-full rounded-full overflow-hidden">
          <Image
            src="/images/homePage/plug/imageBg.jpg"
            alt="imageBg"
            width={100}
            height={100}
            className="object-cover w-full h-full absolute inset-0 z-[-10]"
          />
          НАМ
        </li>
        <li className="text-[14px] leading-[100%] tracking-[-0.03em] text-white font-medium bg-green h-[59px] flex items-center justify-center w-full rounded-full">
          Довіряють
        </li>
      </ul>
    </div>
  );
};
