import React from "react";

interface ICategoryProps {
  children: React.ReactNode;
}

const Category: React.FC<ICategoryProps> = ({ children }: ICategoryProps) => {
  return (
    <p className="uppercase text-second dark:text-white text-xs font-normal bg-gray dark:bg-second py-1 px-2 rounded-2xl">{children}</p>
  )
}

export default Category;