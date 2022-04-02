import { Droppable } from 'react-beautiful-dnd';
import { ObjectList } from '../../type';
import Task from '../Task';
interface Props {
  list_id: string;
  list_info: ObjectList[string];
}

const TaskList: React.FC<Props> = ({ list_id, list_info }) => {
  return (
    <div
      className={`w-full ${
        list_info.bg_color || 'bg-teal-500'
      } rounded-md shadow-md pb-3 flex flex-col`}
      style={{
        height: 'calc(100vh - 100px)',
      }}
    >
      <div className='p-3 border-2 border-solid border-gray-300'>
        <h1 className='text-center text-xl font-semibold text-white'>
          {list_info.title}
        </h1>
      </div>

      <div className='h-4'></div>
      <Droppable droppableId={list_id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex flex-grow flex-col gap-3 px-3 py-0 overflow-auto ${
              snapshot.isDraggingOver && !snapshot.draggingFromThisWith
                ? 'opacity-70'
                : ''
            }`}
          >
            {list_info.items.map((task, index) => (
              <Task key={task.id} task={task} task_index={index} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
