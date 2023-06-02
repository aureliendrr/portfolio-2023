import React from 'react'

interface IDividerProps {
  type: 'vertical' | 'horizontal'
}

const Divider: React.FC<IDividerProps> = ({ type }: IDividerProps) =>
  <hr className={`${type === 'horizontal' ? "h-[2px] w-full" : "min-h-[20px] h-full w-[2px] mx-2"} border-none bg-second opacity-100 rounded`} />

export default Divider