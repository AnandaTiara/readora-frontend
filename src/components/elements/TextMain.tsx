import React from "react";

type TextMainProps = {
  title: string;
  description: string;
};

const TextMain: React.FC<TextMainProps> = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-4xl font-WulkanDisplayBold text-primary-500">
        {title}
      </h3>
      <p className="text-neutral-900 font-AileronRegular">{description}</p>
    </div>
  );
};

export default TextMain;
