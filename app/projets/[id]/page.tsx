import Carousel from '@/components/Carousel';
import Category from '@/components/Category';
import Titre from '@/components/Titre';
import projects from '@/data/projects.json'
import FilledButton from '@/widgets/FilledButton';
import Image from 'next/image';

interface IProjectProps {
  params: {
    id: string;
  }
}

export default function Project({ params }: IProjectProps) {

  const project = projects.find(p => p.id === params.id)
  if (!project) return null;

  return (
    <>
      <Titre className='pt-32'>{project.title}</Titre>
      <div className='flex flex-col items-center md:flex-row gap-8'>
        <Carousel className='w-full md:w-1/2 h-[350px] grow'>
          {project.images.map((image, index) => (
            <div key={index} className='relative w-full h-full flex-shrink-0'>
              <Image key={index} src={image} alt="" fill className='object-contain' />
            </div>
          ))}
        </Carousel>
        <div className='flex flex-col items-start w-full gap-4 md:w-1/2'>
          <div className='flex gap-2'>
            {project.categories.map((category, index) => (
              <Category key={index}>{category}</Category>
            ))}
          </div>
          <p>{project.description}</p>
          <FilledButton className='self-center md:self-start'>Voir le produit</FilledButton>
        </div>
      </div>
    </>
  );
}