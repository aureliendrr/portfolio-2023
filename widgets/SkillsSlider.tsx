import React from "react";
import SkillCard from "@/components/SkillCard";
import skills from "@/data/skills.json";

export const SkillsSlider = () => {



  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-20 overflow-hidden">
      <h3 className="text-xl font-semibold">Mes différentes compétences</h3>
      <div className="py-4 px-2 justify-center gap-6 flex w-full flex-wrap">
        {skills.map((skill, index) => <SkillCard key={index} title={skill.title} image={skill.image} />)}
      </div>
    </div>
  );
}