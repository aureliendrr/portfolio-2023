import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react'
import { RiArrowRightFill, RiArrowRightDownFill, RiArrowRightUpFill } from 'react-icons/ri'

interface IUnderlineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  children: React.ReactNode;
  icon: 'right' | 'upward' | 'downward';
  className?: string;
}

const UnderlineButton: React.FC<IUnderlineButtonProps> = ({ link, children, icon, className }: IUnderlineButtonProps) => {

  if (link) return (
    <Link href={link} className={`flex justify-center items-center text-lg font-medium gap-4 border-b-2 border-b-gray hover:border-b-main ${className ? className : ""}`}>
      {children}
      {icon === 'right' ? <RiArrowRightFill /> : null}
      {icon === 'downward' ? <RiArrowRightDownFill /> : null}
      {icon === 'upward' ? <RiArrowRightUpFill /> : null}
    </Link>
  )
  else return (
    <button className={`flex justify-center items-center text-lg font-medium gap-4 border-b-2 border-b-gray hover:border-b-main ${className ? className : ""}`}>
      {children}
      {icon === 'right' ? <RiArrowRightFill /> : null}
      {icon === 'downward' ? <RiArrowRightDownFill /> : null}
      {icon === 'upward' ? <RiArrowRightUpFill /> : null}
    </button>
  )
}

export default UnderlineButton