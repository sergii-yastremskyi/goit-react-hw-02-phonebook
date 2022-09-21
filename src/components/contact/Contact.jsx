const Contact = ({ data, onDelete }) => {
  return (
    <li>
      {data.name}:{data.number}
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
