import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts-slice';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilterInput = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterInput}
      />
    </FilterLabel>
  );
}

export default Filter;
