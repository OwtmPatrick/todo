import {FC} from 'react';
import {Todo as TodoType} from '../../types';
import {Todo} from '../Todo';

import styles from './styles.module.css';

interface TodosList {
  title: string;
  todos: TodoType[];
}

export const TodosList: FC<TodosList> = ({title, todos}) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <div>
      <p className={styles.title}>
        {title} - {todos.length}
      </p>

      <ul className={styles.list}>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};
