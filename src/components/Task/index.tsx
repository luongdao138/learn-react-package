import { useDrag } from 'react-dnd';
import { ItemTypes, Task } from '../../type';

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: {
      type: ItemTypes.CARD,
      item_id: task.id,
      from_list: task.list_id,
    },
  });

  return (
    <div
      ref={dragRef}
      className={`w-full p-3 rounded shadow-md bg-orange-400 text-white cursor-grab ${
        !isDragging ? 'opacity-100' : 'opacity-50'
      }`}
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
