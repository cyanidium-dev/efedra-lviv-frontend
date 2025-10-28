import { ServiceCard } from './ServiceCard';

export const Services = () => {
  // download services from sanity
  return (
    <div>
      <h2>Наші послуги</h2>
      <ul>
        <li>
          <ServiceCard />
        </li>
        <li>
          <ServiceCard />
        </li>
        <li>
          <ServiceCard />
        </li>
      </ul>
    </div>
  );
};
