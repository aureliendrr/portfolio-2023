import Link from "next/link";
import React, { FC } from "react";

import links from '@/data/links.json'
import Socials from "@/components/Socials";

interface IFooterProps { }

const Footer: FC = ({ }: IFooterProps) => {
  return (
    <footer className="mx-2 lg:mx-16 xl:mx-48 mt-20 md:mt-44">
      <div className="flex flex-col items-center justify-between mb-16 gap-8 md:items-start md:gap-0 md:flex-row ">
        <p className="font-semibold text-xl">@aureliendrr</p>
        <div className="flex flex-col items-center gap-8 md:items-start md:gap-10 lg:gap-20 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="font-semibold text-lg mb-2 md:mb-4">Site</h4>
            {links.map((element, index) => {
              return (
                <Link key={index} href={element.href} className="hover:text-main text-second dark:text-white dark:hover:text-main text-lg">
                  {element.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="font-semibold text-lg mb-2 md:mb-4">Legal</h4>
            <Link href={"/politique-de-confidentialite"} className="hover:text-main text-second dark:text-white dark:hover:text-main text-lg">Politique de confidentialité</Link>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="font-semibold text-lg mb-2 md:mb-4">Réseaux sociaux</h4>
            <Socials />
          </div>
        </div>
      </div>
      <p className="text-center text-second dark:text-white font-medium">@ 2023 Aurélien Durier. Tous droits réservés</p>
    </footer>
  )
}

export default Footer;