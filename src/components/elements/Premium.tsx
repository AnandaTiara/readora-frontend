import React from 'react';
import { Link } from 'react-router-dom';
import { PiStarFourFill } from 'react-icons/pi';

const Premium: React.FC = () => {
  return (
    <div className="flex justify-center mt-5">
      <p className="font-AileronRegular text-lg text-base-black flex items-center gap-2 text-center">
        <PiStarFourFill className="text-accent-500 text-xl" />
        <span>
          Get unlimited access to the best of Readora for less than Rp 39.000/month.{' '}
          <Link to="/PremiumPage" className="underline text-accent-500 ml-1">
            Become a Premium User
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Premium;
