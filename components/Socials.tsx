import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import RoundedButton from './RoundedButton';

interface ISocialsProps { }

const Socials: React.FC<ISocialsProps> = ({ }: ISocialsProps) => {
  return (
    <div className='flex items-center gap-2'>
      <RoundedButton><AiFillGithub size={24} /></RoundedButton>
      <RoundedButton><AiOutlineTwitter size={24} /></RoundedButton>
      <RoundedButton><AiFillInstagram size={24} /></RoundedButton>
      <RoundedButton><AiFillLinkedin size={24} /></RoundedButton>
    </div>
  )
}

export default Socials;