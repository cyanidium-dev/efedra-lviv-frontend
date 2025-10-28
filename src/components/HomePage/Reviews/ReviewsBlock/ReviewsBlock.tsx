import { ReviewsCard } from './ReviewsCard';

export const ReviewsBlock = () => {
  return (
    <div>
      <ul>
        <li>
          <ReviewsCard />
        </li>
        <li>
          <ReviewsCard />
        </li>
        <li>
          <ReviewsCard />
        </li>
      </ul>
    </div>
  );
};
