import { useDrop } from 'react-dnd';
import { useTaskContext } from '../../context/TaskContext';
import { DnDItem, DragItem, ItemTypes } from '../../type';

interface Props {
  list_id: string;
}

const BoxTarget: React.FC<Props> = ({ children, list_id }) => {
  const { moveItem } = useTaskContext();

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: DragItem) => {
      let dndInfo: DnDItem = { ...item, to_list: list_id };
      moveItem(dndInfo);
    },
  });

  return (
    <div
      ref={dropRef}
      className={`w-full flex-grow ${isOver ? 'bg-red-300' : 'bg-transparent'}`}
    >
      {children}
    </div>
  );
};

export default BoxTarget;
