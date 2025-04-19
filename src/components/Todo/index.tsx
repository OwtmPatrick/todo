import {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {finishTodo, unFinishTodo, removeTodo} from '../../store/todos';
import trashIcon from '../../assets/trash.svg';
import {Todo as TodoType} from '../../types';
import {Modal} from '../Modal';
import styles from './styles.module.css';

export const Todo: FC<TodoType> = ({id, title, completed}) => {
  const dispatch = useDispatch();
  const [showModal, setShowmodal] = useState(false);
  const onChange = () => dispatch(completed ? unFinishTodo(id) : finishTodo(id));
  const onRemove = () => dispatch(removeTodo(id));

  const toggleModal = () => setShowmodal(!showModal);

  return (
    <>
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

        <button type="button" className={styles.btn} onClick={toggleModal}>
          <img src={trashIcon} alt="trash icon" />
        </button>
      </li>
      {showModal && (
        <Modal
          title="Удаление TODO"
          onClose={toggleModal}
          text={`Вы дествительно хоите удалить ${title}?`}
          onConfirm={onRemove}
          onCancel={toggleModal}
        />
      )}
    </>
  );
};
