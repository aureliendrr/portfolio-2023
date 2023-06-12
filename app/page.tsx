import FilledButton from "@/widgets/FilledButton";
import { TbTriangleInvertedFilled } from "react-icons/tb"
import Titre from "@/components/Titre";
import ProjectCard from "@/widgets/ProjectCard";
import Link from "next/link";
import Socials from "@/components/Socials";
import { Contact } from "@/widgets/Contact";
import Divider from "@/components/Divider";
import { SkillsSlider } from "@/widgets/SkillsSlider";
import projects from "@/data/projects.json";

export default function Home() {

  return (
    <>
      {/* HERO SECTION */}
      <section id="accueil" className="relative flex h-screen justify-center items-center flex-col gap-4">
        <h2 className="font-extrabold text-6xl md:text-8xl">Hey !</h2>
        <h1 className="text-3xl md:text-5xl">Moi, c&apos;est <span className="font-bold">Aurélien</span></h1>
        <p className="font-semibold hidden md:block"><span className="text-white p-[6px] bg-second rounded-lg">Ctrl</span> + <span className="text-white p-[6px] bg-second rounded-lg">K</span> pour rechercher</p>
        <FilledButton link="#contact">Travaillons ensemble !</FilledButton>
        <Link href="#projets"><TbTriangleInvertedFilled size={20} className="animate-bounce absolute bottom-7 text-second"></TbTriangleInvertedFilled></Link>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projets" className="pt-20 md:mb-36 flex flex-col">
        <Titre>Mes derniers projets</Titre>
        <div className="mb-16 flex flex-col gap-3 justify-between items-center md:flex-row md:flex-wrap">
          {projects.slice(0, 4).map((p, index) => <ProjectCard key={index} title={p.title} link={`/projets/${p.id}`} year={p.year} categories={p.categories} image={p.cover} />)}
        </div>
        <FilledButton link="/projets" className="mx-auto">Voir plus de projets</FilledButton>
      </section>

      {/* ABOUT SECTION */}
      <section id="a-propos" className="pt-20 md:mb-36">
        <Titre>A propos</Titre>
        <div className="flex flex-col gap-4">
          <p>Moi c’est <span className="text-main ">Aurélien Durier</span> ! Jeune passionné par l’informatique et le web.</p>
          <p>J’ai récemment obtenu ma Licence Informatique à l’Université de Rennes 1 après un DUT MMI<br />
            (Métiers du Multimédia et de l’Internet) à l’IUT de Laval.<br />
            Je me dirige maintenant dans la dernière ligne droite de mon parcours scolaire :<br />
            Le Master Ingénierie Logicielle à l’Université de Rennes 1.</p>
          <p>Je suis toujours intéressé à travailler sur de nouveaux projets avec de nouvelles personnes.<br />
            N'hésitez pas à me <Link href={"/#contact"} className="text-main">Contacter</Link>.</p>
          <Socials />
        </div>
        <SkillsSlider />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="pt-20">
        <Titre>Contact</Titre>
        <div className="flex flex-col justify-between gap-7 lg:flex-row">
          <div className="flex flex-col gap-7">
            <p>Un Projet ? Besoin d’informations ?<br />
              N’hésitez pas a me contacter par mail,<br />
              via mes réseaux sociaux ou le formulaire ci contre.</p>
            <Socials />
            <FilledButton className="self-start">adurier.pro@gmail.com</FilledButton>
          </div>
          <Divider type="horizontal" className="md:hidden" />
          <Contact />
        </div>
      </section>
    </>
  )
}
