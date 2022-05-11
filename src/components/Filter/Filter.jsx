import propTypes from 'prop-types';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';

function Filter({ value, changeFilter }) {
  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </FilterLabel>
  );

}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  changeFilter: propTypes.func.isRequired,
}

export default Filter;
