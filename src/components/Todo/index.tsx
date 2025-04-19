import {FC} from 'react';
// import {useDispatch} from 'react-redux';
// import {addTodo} from '../../store/todos';
import trashIcon from '../../assets/trash.svg';
import {Todo as TodoType} from '../../types';
import styles from './styles.module.css';

export const Todo: FC<TodoType> = ({id, title, completed}) => {
  const onChange = () => {
    console.log('id', id);
  };

  return (
    <li className={styles.container}>
      <label className={`${styles.label} ${completed ? styles.labelCompleted : ''}`}>
        {title}
        <div>
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={onChange}
            defaultChecked={completed}
          />
          <span className={styles.checkboxIcon}></span>
        </div>
      </label>

      <button type="button" className={styles.btn}>
        <img src={trashIcon} alt="trash icon" />
      </button>
    </li>
  );
};
