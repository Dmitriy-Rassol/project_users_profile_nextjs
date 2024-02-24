'use client';
import { useState, createContext, useEffect } from "react";
import {Sidenav} from '@/components/Sidenav';
import {SortingContextType, SortingValues} from '@/interfaces/sortingContext.interface';

const defaultSortingContext: SortingContextType = {
    sorting: 'default',
    setSorting: () => {}
}

export const SortingContext = createContext<SortingContextType>(defaultSortingContext)

export default function ContextLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sorting, setSorting] = useState<SortingValues>('default');

  return (
    <SortingContext.Provider value={{ sorting, setSorting }}>
      <div className="main-layout">
        <div className="sidenav">
          <Sidenav setSorting={setSorting}/>
        </div>
        <div className="context">{children}</div>
      </div>
    </SortingContext.Provider>
  )
}
