import css from './contact.module.css';
const Contact = ({ data, onDelete }) => {
  return (
    <li>
      <span className={css.name}>{data.name}:</span>
      <span className={css.number}>{data.number}</span>
      <button
        id={data.id}
        onClick={e => onDelete(data.id)}
        type="button"
        className=""
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
