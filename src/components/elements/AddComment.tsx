import React, { useState } from "react";
import { MdStar, MdStarBorder } from "react-icons/md";
import Input from "./Input";
import Button from "./Button";

interface RatingProps {
  maxStars?: number;
  onRate?: (rating: number) => void;
}

const RatingComponent: React.FC<RatingProps> = ({ maxStars = 5, onRate }) => {
  const [hover, setHover] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRate) onRate(index);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {/* Stars */}
      <div className="flex">
        {Array.from({ length: maxStars }, (_, i) => (
          <button
            key={i}
            className="text-neutral-700 hover:text-yellow-500 transition-colors cursor-pointer"
            onClick={() => handleClick(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
          >
            {i < (hover ?? rating) ? (
              <MdStar className="text-4xl" />
            ) : (
              <MdStarBorder className="text-4xl" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const AddComment: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-neutral-500 rounded-[32px] p-6 w-[24rem] lg:w-[43rem] flex flex-col items-center gap-4 shadow-md">
        {/* Judul */}
        <h2 className="mt-2 text-2xl font-WulkanDisplayBold text-primary-500">
          Klara and The Sun
        </h2>

        {/* Stars */}
        <RatingComponent
          onRate={(rating) => console.log("Rating diberikan:", rating)}
        />

        {/* Comment input */}
        <Input
          className="w-[20rem] lg:w-[37rem] rounded-lg px-4 py-4 text-sm"
          placeholder="Add a comment"
        ></Input>

        {/* Done button */}
        <div className="w-full flex justify-end mr-10">
          <Button className="px-8 py-4 bg-[#B2B2B5] text-[#191919] rounded-md hover:bg-gray-500 active:bg-gray-500">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
