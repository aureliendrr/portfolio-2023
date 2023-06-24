import Image from "next/image";
import React from "react";
import Category from "../components/Category";
import UnderlineButton from "../components/UnderlineButton";

interface IProjectCardProps {
  title: string;
  year: string;
  categories: string[];
  image: string;
  link: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ title, year, categories, image, link }: IProjectCardProps) => {

  return (
    <div className="bg-light-gray dark:bg-light-black card-shadow rounded-2xl p-4 md:min-w-[350px] self-stretch flex flex-col justify-between gap-4 basis-0 grow">
      <div className="flex flex-col gap-4">
        <div className="w-full h-52 relative rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill sizes="100" priority className="object-cover" />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-second/80 dark:text-white/80 text-base font-normal">{year}</p>
        </div>
        <div className="flex justify-start items-center gap-2 flex-wrap">
          {categories.map((category, index) => (
            <Category key={index}>{category}</Category>
          ))}
        </div>
      </div>
      <UnderlineButton link={link} icon="upward" className="self-start">En savoir plus</UnderlineButton>
    </div>
  )
}

export default ProjectCard;