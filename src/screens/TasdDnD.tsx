import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TaskList from '../components/TaskList';
import { useTaskContext } from '../context/TaskContext';
import { DnDItem } from '../type';

const TaskDnD = () => {
  const { lists, moveItem } = useTaskContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const dndInfo: DnDItem = {
      item_from_index: result.source.index,
      item_to_index: result.destination?.index,
      item_id: result.draggableId,
      list__from_id: result.source.droppableId,
      list_to_id: result.destination.droppableId,
    };

    moveItem(dndInfo);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='bg-main w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center'>
        <div className='w-full max-w-2xl mx-auto px-5 grid grid-cols-2 gap-6'>
          {Object.entries(lists).map(([key, value]) => (
            <TaskList key={key} list_id={key} list_info={value} />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default TaskDnD;
