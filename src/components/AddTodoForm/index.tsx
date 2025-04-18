import {useForm, SubmitHandler} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/todos';
import plusIcon from '../../assets/plus.svg';
import styles from './styles.module.css';

type Form = {
  title: string;
};

export const AddTodoForm = () => {
  const {register, handleSubmit, watch, reset} = useForm<Form>();
  const dispatch = useDispatch();

  const title = watch('title');

  const onSubmit: SubmitHandler<Form> = ({title}) => {
    dispatch(addTodo(title));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.input} placeholder="Новая задача" {...register('title')} />

      <button type="submit" className={styles.btn} disabled={!title}>
        <img src={plusIcon} alt="plus icon" />
      </button>
    </form>
  );
};
