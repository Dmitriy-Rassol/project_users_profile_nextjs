import { MouseEvent, ReactNode } from "react";
import "./sidenav.scss";
import { Button } from "../Button";
import { SortingValues } from "@/interfaces/sortingContext.interface";

interface SidenavProps {
  setSorting: (sorting: SortingValues) => void;
}

export const Sidenav: React.FC<SidenavProps> = ({ setSorting }) => {
  const handleSortByCity = () => {
    setSorting("city");
  };

  const handleSortByCompany = () => {
    setSorting("company");
  };

  return (
    <div>
      <h3 className="sidenav-title">Сортировка</h3>

      <Button disabled={false} handleClick={handleSortByCity}>
        По городу
      </Button>
      <Button disabled={false} handleClick={handleSortByCompany}>
        По компании
      </Button>
    </div>
  );
};