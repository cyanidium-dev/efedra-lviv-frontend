import Image from 'next/image';

interface PersonelCardProps {
  name: string;
  position: string;
  photoUrl: string;
}

export const PersonelCard = ({
  name,
  position,
  photoUrl,
}: PersonelCardProps) => {
  return (
    <div className="relative p-[10px] w-[256px] h-[319px] flex items-end rounded-[10px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-[-10]">
        <Image src={photoUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="w-full text-center p-[15px] bg-white rounded-[10px]">
        <p className="text-[16px] leading-[100%] tracking-[-0.03em] text-black font-medium uppercase">
          {name}
        </p>
        <p className="text-[13px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium">
          {position}
        </p>
      </div>
    </div>
  );
};
