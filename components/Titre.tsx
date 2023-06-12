import React from 'react'

interface ITitreProps {
  children: React.ReactNode
  className?: string
  margin?: 'small' | 'large'
}

const Titre: React.FC<ITitreProps> = ({ children, className, margin = 'large' }: ITitreProps) =>
  <h2 className={`${className} relative font-black text-xl md:text-5xl after:content-['.'] after:text-main after:text-text-xl md:after:text-6xl ${margin === 'large' ? 'mb-9 md:mb-24' : 'mb-2 md:mb-8'}`}>{children}</h2>

export default Titre