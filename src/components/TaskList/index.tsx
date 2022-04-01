import { useTaskContext } from '../../context/TaskContext';
import { List } from '../../type';
import Task from '../Task';
interface Props {
  bgColor?: string;
  list: List;
}

const TaskList: React.FC<Props> = ({ list }) => {
  const { tasks } = useTaskContext();

  return (
    <div
      className={`w-full ${
        list.bg_color || 'bg-teal-500'
      } rounded-md shadow-md pb-3 flex flex-col`}
      style={{ height: 'calc(100vh - 100px)' }}
    >
      <div className='p-3 border-2 border-solid border-gray-300'>
        <h1 className='text-center text-xl font-semibold text-white'>
          {list.title}
        </h1>
      </div>

      <div className='h-4'></div>

      <div className='flex flex-col gap-3 px-3 py-0 overflow-auto'>
        {tasks
          .filter((t) => t.list_id === list.id)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
