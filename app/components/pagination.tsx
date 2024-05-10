"use client";

import React, { Children, ReactNode, useState } from "react";
import PageMove from "./page-move";

interface ListProps<T> {
  perPage: number
  items: T[],
  setShowItems: any;
  children?: React.ReactNode;
}

export default function Pagination({perPage, items, children, setShowItems}: ListProps<any>) {
  const [currentPage, setCurrentPage] = useState(1);
  const startIdx = (currentPage-1) * perPage;
  const showItems = items.slice(startIdx, startIdx+perPage);
  const totalPages = items.length/perPage;
  const pageCursor = Array.from({length: totalPages}, (_, i)=>i+1);

  function onClick(clickedPage: React.SetStateAction<number>) {
    setShowItems(showItems);
    setCurrentPage(clickedPage);
  }

  return (
    <div>
      {children}
      <PageMove pageCursor={pageCursor} onClick={onClick}></PageMove>
    </div>
  )
}