import {useState} from "react";
import {getCats} from "../../lib/api";

export const useCats = (initialCats = []) => {
  const [state, setCats] = useState({
    initialCats: initialCats,
    cats: initialCats,
    totalCount: initialCats.length
  });

  const filterValues = (value) => state.initialCats.filter(cat => new Date(cat.createdAt).getFullYear() >= value);

  const handleChange = async ({numberOfCats}) => {
    const value = numberOfCats.value;
    if (value < 1) {
      return;
    }
    const cats = await getCats(value);

    if (!cats || cats.status !== 200) {
      return;
    }
    const catRes = cats.data;

    setCats({
      ...state,
      initialCats: Array.isArray(catRes) ? cats.data : [cats.data],
      cats: catRes,
      totalCount: Array.isArray(catRes) ? catRes.length : 1
    })
  };

  const handleFilter = (target) => {
    const value = target.current.value;
    if (!value) {
      setCats({...state})
    }
    const newCats = filterValues(value);
    setCats({...state, cats: newCats, totalCount: state.initialCats.length})
  };

  return {
    cats: state.cats,
    setCats: handleChange,
    filterCats: handleFilter,
    totalCount: state.totalCount
  }
}