import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react'

interface IRoundedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  children?: React.ReactNode;
  className?: string;
}

const RoundedButton: React.FC<IRoundedButtonProps> = ({ link, children, className, ...props }: IRoundedButtonProps) => {

  if (link) return (
    <Link href={link} className={`rounded-full w-10 h-10 flex justify-center items-center bg-gray text-second hover:bg-main hover:text-white ${className ? className : ""}`}>
      {children}
    </Link>
  )
  else return (
    <button className={`rounded-full w-10 h-10 flex justify-center items-center bg-gray text-second hover:bg-main hover:text-white ${className ? className : ""}`} {...props}>
      {children}
    </button>
  )
}

export default RoundedButton