
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={css.labelFilter}>
      Find contact by Name
      <input className={css.inputFilter} type="text" value={filter} onChange={handleFilterChange}></input>
    </label>
  );
};

export default SearchBox;