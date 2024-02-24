import {Dispatch, SetStateAction} from 'react';

export type SortingValues = 'default' | 'city' | 'company'
export interface SortingContextType {
    sorting: SortingValues;
    setSorting: Dispatch<SetStateAction<SortingValues>>
}