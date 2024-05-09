"use client";

interface PaginationProps<T> {
  perPage: number;
  currentPage: number;
  items: T[];
  onClick;
}

export default function Pagination({perPage, currentPage, items, onClick}: PaginationProps<any>) {
  const totalPages = items.length/perPage;
  const pageCursor = Array.from({length: totalPages}, (_, i)=>i+1);
  
  return <main className="w-full flex justify-center">
    <div className="flex items-center min-w-[350px] mt-10 mx-auto">
      {
        pageCursor.map((page)=>(
          <button key={page} onClick={()=>{onClick(page)}}>
              {page}
          </button>))
      }
    </div>
  </main>
}