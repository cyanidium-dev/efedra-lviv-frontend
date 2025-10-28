import { PersonelCard } from './PersonelCard';
export const PersonelBlock = () => {
  // download personel from sanity
  return (
    <div>
      <ul>
        <li>
          <PersonelCard />
        </li>
        <li>
          <PersonelCard />
        </li>
        <li>
          <PersonelCard />
        </li>
      </ul>
    </div>
  );
};
