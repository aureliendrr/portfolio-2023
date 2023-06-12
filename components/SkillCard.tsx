import React from "react";

interface ISkillCardProps {
  title: string;
  image: string;
}

const SkillCard: React.FC<ISkillCardProps> = ({ title, image }: ISkillCardProps) => {
  return (
    <div className="flex flex-col bg-light-gray text-black dark:bg-light-black dark:text-white justify-between items-center w-28 h-36 p-3 card-shadow rounded-2xl md:p-5 md:w-40 md:h-44 md:gap-3">
      <img src={image} alt={title} className="w-full h-20 md:h-24" />
      <p>{title}</p>
    </div>
  )
}

export default SkillCard;