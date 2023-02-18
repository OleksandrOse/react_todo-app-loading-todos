import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todoapp__main">
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};