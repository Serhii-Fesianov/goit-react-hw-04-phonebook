import s from './ElementList.module.css';
export const ElementList = ({ contact, handleDeleteContacts }) => {
  return (
    <li className={s.styleElementList}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button
        type="button"
        onClick={() => handleDeleteContacts(contact.id)}
        className={s.styleButtonItem}
      >
        Delete
      </button>
    </li>
  );
};
