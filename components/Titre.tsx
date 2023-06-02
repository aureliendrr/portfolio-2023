import React from 'react'

interface ITitreProps {
  children: React.ReactNode
}

const Titre: React.FC<ITitreProps> = ({ children }: ITitreProps) =>
  <h2 className="relative text-black font-black text-5xl after:content-['.'] after:text-main after:text-6xl">{children}</h2>

export default Titre