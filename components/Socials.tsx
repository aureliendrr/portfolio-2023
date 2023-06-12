import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import RoundedButton from './RoundedButton';

interface ISocialsProps { }

const Socials: React.FC<ISocialsProps> = ({ }: ISocialsProps) => {
  return (
    <div className='flex items-center gap-2'>
      <RoundedButton link='https://github.com/aureliendrr'><AiFillGithub size={24} /></RoundedButton>
      <RoundedButton link='https://twitter.com/aureldupro'><AiOutlineTwitter size={24} /></RoundedButton>
      <RoundedButton link='https://www.instagram.com/aureldrr.pro/'><AiFillInstagram size={24} /></RoundedButton>
      <RoundedButton link='https://www.linkedin.com/in/aureliendrr/'><AiFillLinkedin size={24} /></RoundedButton>
    </div>
  )
}

export default Socials;