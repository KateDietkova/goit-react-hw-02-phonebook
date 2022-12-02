import PropTypes from 'prop-types';
import { FilterStyled, LabelFilter } from './Filter.styled.js';

export const Filter = ({ onSearch, value }) => {
  return (
    <>
      <LabelFilter>
        Find contacts by name
        <FilterStyled type="text" value={value} onChange={onSearch} />
      </LabelFilter>
    </>
  );
};


Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};