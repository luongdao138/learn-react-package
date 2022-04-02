import { List, Task } from './type';
import { v4 as uuidv4 } from 'uuid';

export const mockLists: List[] = [
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

export const mockTasks: Task[] = [
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
