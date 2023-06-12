import search from '@/data/search.json'
import { SetStateAction, useState } from 'react';
import { ImSearch, ImCross } from 'react-icons/im';
import Link from "next/link";

interface ISearchProps {
  setter: React.Dispatch<SetStateAction<boolean>>;
}

const Search: React.FC<ISearchProps> = ({ setter }: ISearchProps) => {
  const [query, setQuery] = useState("");

  function renderItems(): JSX.Element | JSX.Element[] {

    var result: {
      category: string;
      terms: {
        name: string,
        link: string
      }[]
    }[] = [];

    search.forEach((item) => {
      const filtered = item.terms.filter((item) => {
        return query.toLowerCase() === '' ? item : item.name.toLowerCase().includes(query.toLowerCase());
      });

      if (filtered.length > 0) {
        result.push({
          "category": item.category,
          "terms": item.terms.filter((item) => {
            return query.toLowerCase() === '' ? item : item.name.toLowerCase().includes(query.toLowerCase());
          })
        })
      }
    });

    return result.length > 0 ?
      <>
        {result.map((item) => <>
          <p className='px-4 py-2 font-semibold'>{item.category}</p>
          {
            item.terms.map((item, index) => <Link onClick={() => setter(false)} className='px-12 py-2 hover:bg-gray dark:hover:bg-black/30' key={index} href={item.link}>{item.name}</Link>)
          }
        </>)}
      </>
      : <p className='text-left px-12 py-2 opacity-50'>Aucun résultat.</p>
  }

  return (
    <div onClick={() => setter(false)} className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="h-[450px] w-[500px] bg-light-gray dark:bg-light-black rounded-lg overflow-y-scroll">
        <div className='flex items-center gap-4 p-4'>
          <ImSearch size={20} className='text-second dark:text-light-gray' />
          <input onChange={e => setQuery(e.target.value)} value={query} className='w-full focus:outline-none bg-light-gray dark:bg-light-black' placeholder='Rechercher...' />
          <button onClick={() => setter(false)}><ImCross size={16} className='text-second dark:text-light-gray' /></button>
        </div>
        <hr className='text-second opacity-30 dark:text-light-gray' />
        <div className='flex flex-col'>
          {renderItems()}
        </div>
      </div>
    </div>
  )
}

export default Search;