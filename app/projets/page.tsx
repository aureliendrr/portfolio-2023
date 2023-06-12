import ProjectCard from "@/widgets/ProjectCard";
import Titre from "@/components/Titre";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <>
      <Titre className="pt-32">Tous les projets</Titre>
      <div className="mb-16 flex flex-col gap-3 justify-between items-center md:flex-row md:flex-wrap">
        {projects.map((p, index) => <ProjectCard key={index} title={p.title} link={`/projets/${p.id}`} year={p.year} categories={p.categories} image={p.cover} />)}
      </div>
    </>
  );
}