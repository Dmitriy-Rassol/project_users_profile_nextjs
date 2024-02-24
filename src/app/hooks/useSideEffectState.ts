import { useEffect, useState } from "react";
import { SortingValues } from "@/interfaces/sortingContext.interface";
import { User } from "@/interfaces/user.interface";

const sortingFunction = (
  array: User[],
  field: Exclude<SortingValues, "default">
) => {
  const originArray = [...array];
  const newArray = [...array];
  if (field === "company") {
    return newArray.sort((u1, u2) =>
      u1.company.name < u2.company.name ? -1 : 1
    );
  } else if (field === "city") {
    return newArray.sort((u1, u2) =>
      u1.address.city < u2.address.city ? -1 : 1
    );
  } else {
    return originArray;
  }
};

export function useSideEffectState(path: string, sorting?: SortingValues) {
  const [data, setData] = useState<unknown | unknown[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {      
        setData(data);
        console.log(data);
        
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Error");
      });
  }, []);

  useEffect(() => {
    if (Array.isArray(data) && sorting && sorting !== "default") {
      const newData = sortingFunction(data, sorting);

      setData(newData);
    }
  }, [sorting]);

  return {
    data,
    loading,
    error,
  };
}
