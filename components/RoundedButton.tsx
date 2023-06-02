import React, { ButtonHTMLAttributes } from 'react'

interface IRoundedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const RoundedButton: React.FC<IRoundedButtonProps> = ({ children, className }: IRoundedButtonProps) => {

  return (
    <button className={`rounded-full w-10 h-10 flex justify-center items-center bg-gray text-second hover:bg-main hover:text-white ${className ? className : ""}`}>
      {children}
    </button>
  )
}

export default RoundedButton