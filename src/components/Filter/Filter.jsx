import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { getStateFilter } from '../../redux/contacts/contactsSelector';

const Filter = () => {
  const value = useSelector(getStateFilter);

  const dispatch = useDispatch();
  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        className={s.input}
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;