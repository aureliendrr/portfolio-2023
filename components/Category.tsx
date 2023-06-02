import React from "react";

interface ICategoryProps {
  children: React.ReactNode;
}

const Category: React.FC<ICategoryProps> = ({ children }: ICategoryProps) => {
  return (
    <p className="uppercase text-second text-xs font-light bg-gray py-1 px-2 rounded-2xl">{children}</p>
  )
}

export default Category;