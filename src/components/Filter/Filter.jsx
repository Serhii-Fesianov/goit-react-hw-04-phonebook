import s from './Filter.module.css';
export const Filter = ({ handleChangeFilter }) => {
  return (
    <div className={s.wrapperFilter}>
      <p className={s.styleFindNameText}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        className={s.styleInputFilter}
      />
    </div>
  );
};
