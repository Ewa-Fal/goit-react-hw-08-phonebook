import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContacts } from '../../redux/contacts/contactsOperations';
import s from './ContactList.module.css';
import { contactsAfterFilter } from '../../redux/contacts/contactsSelector';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const ContactList = () => {
  const contacts = useSelector(contactsAfterFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2 className={s.title}>Contacts: {contacts.length}</h2>
      <ul className={`${s.list}`}>
        {contacts.map(el => (
          <li key={el.id} className={s.item}>
            <p className={s.text}>
              {el.name}: <span className={s.num}>{el.number}</span>
            </p>
            <IconButton
              aria-label="delete"
              type="button"
              onClick={() => dispatch(removeContacts(el.id))}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;