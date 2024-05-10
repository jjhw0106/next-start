"use client";

import React, { Children, ReactNode, useState } from "react";

type onClickType = (clickedPage: React.SetStateAction<number>) => void;
interface PageMoveProps {
  pageCursor: number[];
  onClick: onClickType
}

export default function PageMove({pageCursor, onClick}: PageMoveProps) {
  return (
    <div className="flex items-center min-w-[350px] mt-10 mx-auto">
      {
        pageCursor.map((page)=>(
          <button key={page} onClick={()=>{onClick(page)}}>
            {page}
          </button>)
        )
      }
    </div>
  )
}