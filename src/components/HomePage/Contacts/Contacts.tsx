import { ContactForm } from './ContactForm/ContactForm';
import { Map } from './Map';
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE,
} from '@/constants/constants';

export const Contacts = () => {
  // check address data
  return (
    <div>
      <h2>Наші контакти</h2>
      <address>
        <ul>
          <li>
            <p>Адреса</p>
            <p>{ADDRESS}</p>
          </li>
          <li>
            <p>Телефон</p>
            <a href={`tel:${PHONE}`}>{PHONE}</a>
          </li>
          <li>
            <p>Email</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>
      </address>
      <div>
        <h3 className="sr-only">Соціальні мережі</h3>
        <ul>
          <li>
            <a href={LINKEDIN_URL}>Linkedin</a>
          </li>
          <li>
            <a href={FACEBOOK_URL}>Facebook</a>
          </li>
          <li>
            <a href={INSTAGRAM_URL}>Instagram</a>
          </li>
        </ul>
      </div>
      <ContactForm />
      <Map />
    </div>
  );
};
