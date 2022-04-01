import { createContext, useContext, useState } from 'react';
import { Task, List, DnDItem } from '../type';
import { v4 as uuidv4 } from 'uuid';

interface ContextType {
  tasks: Task[];
  lists: List[];
  moveItem: (dndInfo: DnDItem) => void;
}

const mockLists: List[] = [
  {
    id: '1',
    title: 'In progress',
    bg_color: 'bg-teal-500',
  },
  {
    id: '2',
    title: 'Done',
    bg_color: 'bg-blue-400',
  },
];

const mockTasks: Task[] = [
  {
    id: uuidv4(),
    category: 'Chores',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    list_id: '1',
    title: 'Go to school 1',
  },
  {
    id: uuidv4(),
    category: 'Chores',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    list_id: '2',
    title: 'Go to school 2',
  },
  {
    id: uuidv4(),
    category: 'Chores',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    list_id: '1',
    title: 'Go to school 3',
  },
  {
    id: uuidv4(),
    category: 'Chores',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    list_id: '1',
    title: 'Go to school 4',
  },
  {
    id: uuidv4(),
    category: 'Chores',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    list_id: '2',
    title: 'Go to school 5',
  },
];

const TaskContext = createContext<ContextType>({} as ContextType);

const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [lists, setLists] = useState<List[]>(mockLists);

  const moveItem = (dndInfo: DnDItem) => {
    const { from_list, item_id, to_list } = dndInfo;
    if (from_list === to_list) return;

    let newTasks: Task[] = [...tasks].map((task) =>
      task.id === item_id ? { ...task, list_id: to_list } : task
    );
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, lists, moveItem }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
export default TaskProvider;
