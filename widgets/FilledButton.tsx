import React, { ButtonHTMLAttributes } from 'react'
import Link from "next/link";

interface IFilledButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  children?: React.ReactNode;
  className?: string;
}

const FilledButton: React.FC<IFilledButtonProps> = ({ link, children, className }: IFilledButtonProps) => {

  if (link) return (
    <Link href={link} className={`rounded-lg px-5 py-4 flex justify-center items-center text-lg font-semibold bg-main text-white hover:bg-main/80 ${className ? className : ""}`}>{children}</Link>
  )
  else return (
    <button className={`rounded-lg px-5 py-4 flex justify-center items-center text-lg font-semibold bg-main text-white hover:bg-main/80 ${className ? className : ""}`}>{children}</button>
  )
}

export default FilledButton