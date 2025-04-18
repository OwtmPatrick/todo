// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import {useSelector} from 'react-redux';
import {AddTodoForm} from './components/AddTodoForm';
import {todosSelector} from './store/selectors';
import styles from './styles.module.css';

function App() {
  console.log(styles);
  const {current: currentTodos, finished: finishedTodods} = useSelector(todosSelector);

  console.log('currentTodos:', currentTodos);
  return (
    <main className={styles.container}>
      <AddTodoForm />
    </main>
  );
}

export default App;
