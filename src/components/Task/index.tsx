import { Task } from '../../type';
import { Draggable } from 'react-beautiful-dnd';
interface Props {
  task: Task;
  task_index: number;
}

const TaskItem: React.FC<Props> = ({ task, task_index }) => {
  return (
    <Draggable draggableId={task.id} index={task_index}>
      {(provided, snapshot) => (
        <div
          className={`w-full p-3 rounded shadow-md bg-orange-400 text-white cursor-grab select-none `}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
        >
          <div className='flex justify-between items-center mb-3'>
            <span className='font-medium'>{task.title}</span>
            <span className='p-1 bg-cyan-600 rounded text-xs font-bold uppercase'>
              {task.category}
            </span>
          </div>
          <p className='text-center'>{task.details}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
