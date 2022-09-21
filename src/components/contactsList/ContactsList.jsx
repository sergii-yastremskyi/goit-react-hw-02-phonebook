import Contact from '../contact';
import { nanoid } from 'nanoid';
const ContactsList = ({ contacts, onDelete }) => {
  console.log('contact', contacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={nanoid()} onDelete={onDelete} data={contact} />
      ))}
    </ul>
  );
};
export default ContactsList;
