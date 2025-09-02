import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ max = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1 justify-between">
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(-1)}
            className="focus:outline-none"
          >
            <FaStar
              className={`text-5xl transition ${
                (hovered || rating) >= starValue ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;