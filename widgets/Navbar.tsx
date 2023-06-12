import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Divider from "../components/Divider";
import RoundedButton from "@/components/RoundedButton";

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ImSearch } from 'react-icons/im';

import links from '@/data/links.json'

import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import Search from "./Search";

interface INavBarProps { }

const NavBar: FC = ({ }: INavBarProps) => {

  const { theme, setTheme } = useTheme();
  const [menuState, setMenuState] = useState<boolean>(false);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  useEffect(() => {
    if (searchVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [searchVisible])

  return (
    <>
      {searchVisible ? <Search setter={setSearchVisible} /> : null}
      <nav className="bg-light-gray dark:bg-black w-full fixed z-40">
        <ul className="flex justify-between items-center mx-2 lg:mx-16 xl:mx-48 py-6 text-second dark:text-white">
          <li className="font-semibold"><Link href="/">@aureliendrr/</Link></li>
          <RoundedButton onClick={() => setMenuState(!menuState)} className="z-40 md:hidden">{menuState ? <ImCross /> : <GiHamburgerMenu />}</RoundedButton>
          <ul className={`${menuState ? "translate-x-0" : "translate-x-full"} transition-transform flex flex-col items-center justify-center gap-8 fixed inset-0 bg-light-gray dark:bg-black font-medium md:translate-x-0 md:relative md:flex-row md:gap-6`}>
            {links.map((element, index) => {
              return (
                <li key={index} onClick={() => setMenuState(false)}>
                  <Link href={element.href} className="hover:text-main">
                    {element.title}
                  </Link>
                </li>
              );
            })}
            <Divider type="vertical" className="hidden md:block" />
            <li className="flex items-center gap-6 md:gap-2">
              <RoundedButton onClick={() => setSearchVisible(!searchVisible)}>
                <ImSearch size={20} />
              </RoundedButton>
              <RoundedButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <BsFillSunFill size={20} /> : <BsFillMoonFill size={20} />}
              </RoundedButton>
              <RoundedButton className="font-bold text-lg">FR</RoundedButton>
            </li>
          </ul>
        </ul>
      </nav>
    </>

  )
}

export default NavBar;