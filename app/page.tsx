import FilledButton from "@/components/FilledButton";
import { TbTriangleInvertedFilled } from "react-icons/tb"
import Titre from "@/components/Titre";
import ProjectCard from "@/components/ProjectCard";
import { useRef } from "react";
import Link from "next/link";
import Socials from "@/components/Socials";

export default function Home() {

  return (
    <>
      {/* HERO SECTION */}
      <section id="accueil" className="relative flex h-screen justify-center items-center flex-col gap-4">
        <h2 className="font-extrabold text-8xl">Hey !</h2>
        <h1 className="text-5xl">Moi, c'est <span className="font-bold">Aurélien</span></h1>
        <p className="font-semibold"><span className="text-white p-[6px] bg-second rounded-lg">Ctrl</span> + <span className="text-white p-[6px] bg-second rounded-lg">K</span> pour rechercher</p>
        <FilledButton>Travaillons ensemble !</FilledButton>
        <Link href="#projets"><TbTriangleInvertedFilled size={20} className="animate-bounce absolute bottom-7 text-second"></TbTriangleInvertedFilled></Link>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projets" className="mb-56">
        <Titre>Mes derniers projets</Titre>
        <div className="mt-36 mb-16 flex justify-between items-center">
          <ProjectCard title="8ravo" link="/project/8ravo" year="2022" categories={["Develoment", "Backend", "PHP", "JS"]} image="/projects/8ravo.png" />
          <ProjectCard title="Siera Pouance" link="/project/siera-pouance" year="2022" categories={["Develoment", "WordPress Custom", "PHP"]} image="/projects/siera-pouance.png" />
          <ProjectCard title="Stopngocar" link="/project/stopngocar" year="2022" categories={["Develoment", "Backend", "PHP"]} image="/projects/stopngocar.png" />
          <ProjectCard title="Tendance & Bois" link="/project/tendance-bois" year="2022" categories={["Develoment", "Backend", "PHP"]} image="/projects/tendance-bois.png" />
        </div>
        <FilledButton className="mx-auto">Voir plus de projets</FilledButton>
      </section>

      {/* ABOUT SECTION */}
      <section id="a-propos" className="mb-56">
        <Titre>A propos</Titre>
        <div className="mt-20 flex justify-between">
          <div className="flex flex-col gap-4">
            <p>Moi c’est <span className="text-main ">Aurélien Durier</span> ! Jeune passionné par l’informatique et le web.</p>
            <p>J’ai récemment obtenu ma Licence Informatique à l’Université de Rennes après un DUT MMI<br />
              (Métiers du Multimédia et de l’Internet) à l’IUT de Laval.<br />
              Je me dirige maintenant dans la dernière ligne droite de mon parcours scolaire :<br />
              Le Master Ingénierie Logicielle à l’Université de Rennes.</p>
            <p>Je suis toujours intéressé à travailler sur de nouveaux projets avec de nouvelles personnes.<br />
              N'hésitez pas à consulter mon profil freelance sur <span className="text-main ">Malt</span> ou à me <span className="text-main ">Contacter</span>.</p>
            <Socials />
          </div>
          {/*
            <div className="flex flex-col items-center gap-3">
              <span className="rounded-full bg-main w-2 h-2"></span>
              <span className="h-[100px] w-[1px] bg-second"></span>
            </div>
          */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-10">
              <p className="after:absolute after:bg-main after:right-[-24px] after:top-2 after:w-2 after:h-2 after:rounded-full relative">2023 - 2025</p>
              <p className="before:absolute before:bg-second before:">Master Ingénierie Logicielle<br />
                Université de Rennes 1<br />
                Alternance chez ZenPark</p>
            </div>
            <div className="flex gap-10">
              <p className="after:absolute after:bg-second after:right-[-24px] after:top-2 after:w-2 after:h-2 after:rounded-full relative">2022 - 2023</p>
              <p>Licence Informatique<br />
                Université de Rennes 1</p>
            </div>
            <div className="flex gap-10">
              <p className="after:absolute after:bg-second after:right-[-24px] after:top-2 after:w-2 after:h-2 after:rounded-full relative">2020 - 2022</p>
              <p>DUT MMI<br />
                IUT de Laval</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <Titre>Contact</Titre>
      </section>
    </>
  )
}
