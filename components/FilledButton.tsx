import React, { ButtonHTMLAttributes } from 'react'

interface IFilledButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const FilledButton: React.FC<IFilledButtonProps> = ({ children, className }: IFilledButtonProps) => {

  return (
    <button className={`rounded-lg px-5 py-4 flex justify-center items-center text-lg font-semibold bg-main text-white hover:bg-main/80 ${className ? className : ""}`}>
      {children}
    </button>
  )
}

export default FilledButton