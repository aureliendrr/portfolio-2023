import Link from "next/link";
import React, { FC } from "react";

import Divider from "../components/Divider";
import RoundedButton from "@/components/RoundedButton";

import { BsFillMoonFill } from 'react-icons/bs';
import { ImSearch } from 'react-icons/im';

interface INavBarProps { }

const NavbarElements: Array<{
  title: string;
  href: string;
}> =
  [
    {
      title: 'Accueil',
      href: '/'
    },
    {
      title: 'Projets',
      href: '/#projets'
    },
    {
      title: 'À propos',
      href: '/#a-propos'
    },
    {
      title: 'Contact',
      href: '/#contact'
    }
  ];

const NavBar: FC = ({ }: INavBarProps) => {

  return (
    <nav className="bg-light-gray w-full fixed z-50">
      <ul className="flex justify-between items-center mx-48 py-6 text-second">
        <li className="font-semibold"><Link href="/">@aureliendrr/</Link></li>
        <ul className="flex items-center gap-6 font-medium">
          {NavbarElements.map((element, index) => {
            return (
              <li key={index}>
                <Link href={element.href} className="hover:text-main">
                  {element.title}
                </Link>
              </li>
            );
          })}
          <Divider type="vertical" />
          <li className="flex items-center gap-2">
            <RoundedButton><ImSearch size={20} /></RoundedButton>
            <RoundedButton><BsFillMoonFill size={20} /></RoundedButton>
            <RoundedButton className="font-bold text-lg">FR</RoundedButton>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default NavBar;