
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <section className={css.section}> 
      `<h1>Contacts</h1>`
        <label className={css.labelFilter}>
          Find contact by Name
          <input className={css.inputFilter} type="text" value={filter} onChange={handleFilterChange}></input>
        </label>
        </section>
    </>
  );
};

export default SearchBox;