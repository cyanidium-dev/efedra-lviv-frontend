import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
} from '@/constants/constants';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

interface FollowUsProps {
  className?: string;
  variant?: 'bordered' | 'normal';
}

export const FollowUs = ({ className, variant = 'normal' }: FollowUsProps) => {
  const styles = {
    bordered: 'border border-white border-opacity-50',
    normal: '',
  };

  return (
    <div className={className}>
      <h3 className="text-[20px] font-semibold leading-[100%] tracking-[-0.05em] text-white mb-[15px]">
        Слідкуйте за нами:
      </h3>
      <ul className="flex gap-[15px]">
        <li className="w-[40px] h-[40px] border border-white rounded-full">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center"
          >
            <span className="sr-only">Linkedin</span>
            <LinkedinIcon className="text-white w-4 h-auto" />
          </a>
        </li>
        <li className="w-[40px] h-[40px] border border-white rounded-full">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="text-white h-4 w-auto" />
          </a>
        </li>
        <li className="w-[40px] h-[40px] border border-white rounded-full">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="text-white w-[17.4px] h-auto" />
          </a>
        </li>
      </ul>
    </div>
  );
};
