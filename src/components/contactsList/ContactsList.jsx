import Contact from '../contact';
import { nanoid } from 'nanoid';
import css from './contactList.module.css';
const ContactsList = ({ contacts, onDelete }) => {
  console.log('contact', contacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={nanoid()} onDelete={onDelete} data={contact} />
      ))}
    </ul>
  );
};
export default ContactsList;
