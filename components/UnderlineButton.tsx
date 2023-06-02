import React, { ButtonHTMLAttributes } from 'react'
import { RiArrowRightFill, RiArrowRightDownFill, RiArrowRightUpFill } from 'react-icons/ri'

interface IUnderlineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon: 'right' | 'upward' | 'downward';
  className?: string;
}

const UnderlineButton: React.FC<IUnderlineButtonProps> = ({ children, icon, className }: IUnderlineButtonProps) => {

  return (
    <button className={`flex justify-center items-center text-lg font-medium gap-4 border-b-2 border-b-gray hover:border-b-main ${className ? className : ""}`}>
      {children}
      {icon === 'right' ? <RiArrowRightFill /> : null}
      {icon === 'downward' ? <RiArrowRightDownFill /> : null}
      {icon === 'upward' ? <RiArrowRightUpFill /> : null}
    </button>
  )
}

export default UnderlineButton