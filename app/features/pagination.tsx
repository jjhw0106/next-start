// export const paginate = function(data) {
//   const page = 1;
//   const perPage = 4;
//   const startIdx = page*perPage;
//   const endIdx = startIdx + perPage;
//   const movieList = data.slice(startIdx, endIdx);

//   return movieList
// }
"use client";

interface PaginationProps<T> {
  perPage: number;
  currentPage: number;
  items: T[];
  onClick;
}

type Movie = {
  id: string;
  poster_path: string;
  title: string;
}

export function getCurrentPage(page) {
  console.log(page)
  return page;
}

export function getMoviesToShow({perPage, currentPage, items}: PaginationProps<Movie>): Movie[] {
  const startIdx = currentPage * perPage;
  const endIdx = startIdx + perPage;
  return items.slice(startIdx, endIdx);
}

export default function Pagination({perPage, currentPage, items, onClick}: PaginationProps<Movie>) {
  const totalPages = items.length/perPage;
  const pageCursor = Array.from({length: totalPages}, (_, i)=>i+1);
  
  return <main className="w-full flex justify-center">
    <div className="flex items-center min-w-[350px] mt-10 mx-auto">
      {
        pageCursor.map((page)=>(<button onClick={onClick}>{page}</button>))
      }
    </div>
  </main>
}
// export default async function Pagination({data}) {
//   const page = 1;
//   const perPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);
//   const startIdx = page*perPage;
//   const endIdx = startIdx + perPage;
//   const movieList = data.slice(startIdx, endIdx);
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
//       pageNumbers.push(i);
//   }z
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>페이지네이션 예제</h1>
//       <ul>
//           {data.map(item => (
//               <li key={item}>{item}</li>
//           ))}
//       </ul>
//       <nav>
//           <ul className='pagination'>
//               {pageNumbers.map(number => (
//                   <li key={number} className='page-item'>
//                       <a onClick={() => paginate(number)} href='#!' className='page-link'>
//                           {number}
//                       </a>
//                   </li>
//               ))}
//           </ul>
//       </nav>
//     </div>
//   )
// }