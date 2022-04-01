import { Task } from '../../type';
interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div
      className={`w-full p-3 rounded shadow-md bg-orange-400 text-white cursor-grab`}
    >
      <div className='flex justify-between items-center mb-3'>
        <span className='font-medium'>{task.title}</span>
        <span className='p-1 bg-cyan-600 rounded text-xs font-bold uppercase'>
          {task.category}
        </span>
      </div>
      <p className='text-center'>{task.details}</p>
    </div>
  );
};

export default TaskItem;
