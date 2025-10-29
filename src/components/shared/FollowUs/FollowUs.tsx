import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
} from '@/constants/constants';
import { InstagramIcon, InstagramIconFilled } from '../icons/InstagramIcon';
import { FacebookIcon, FacebookIconFilled } from '../icons/FacebookIcon';
import { LinkedinIcon, LinkedinIconFilled } from '../icons/LinkedinIcon';

interface FollowUsProps {
  className?: string;
  variant?: 'bordered' | 'normal';
}

export const FollowUs = ({ className, variant = 'normal' }: FollowUsProps) => {
  const styles = {
    bordered: 'border border-white',
    normal: '',
  };

  return (
    <div className={className}>
      <h3 className="text-[20px] font-semibold leading-[100%] tracking-[-0.05em] text-white mb-[15px]">
        Слідкуйте за нами:
      </h3>
      <ul className="flex gap-[15px]">
        <li className={`w-[40px] h-[40px] rounded-full ${styles[variant]}`}>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center"
          >
            <span className="sr-only">Linkedin</span>
            {variant === 'bordered' ? (
              <LinkedinIconFilled className="text-white" />
            ) : (
              <LinkedinIcon className="text-white" />
            )}
          </a>
        </li>
        <li className={`w-[40px] h-[40px] rounded-full ${styles[variant]}`}>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center"
          >
            <span className="sr-only">Facebook</span>
            {variant === 'bordered' ? (
              <FacebookIconFilled className="text-white" />
            ) : (
              <FacebookIcon className="text-white" />
            )}
          </a>
        </li>
        <li className={`w-[40px] h-[40px] rounded-full ${styles[variant]}`}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center"
          >
            <span className="sr-only">Instagram</span>
            {variant === 'bordered' ? (
              <InstagramIconFilled className="text-white" />
            ) : (
              <InstagramIcon className="text-white" />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
};
