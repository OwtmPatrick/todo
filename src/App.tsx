import {useSelector} from 'react-redux';
import {AddTodoForm} from './components/AddTodoForm';
import {todosSelector} from './store/selectors';
import {TodosList} from './components/TodosList';
import styles from './styles.module.css';

function App() {
  const {current: currentTodos, finished: finishedTodos} = useSelector(todosSelector);

  return (
    <main className={styles.container}>
      <AddTodoForm />
      <TodosList title="Список дел" todos={currentTodos} />
      <TodosList title="Завершено" todos={finishedTodos} />
    </main>
  );
}

export default App;
