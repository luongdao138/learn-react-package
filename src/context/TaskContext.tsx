import _ from 'lodash';
import { createContext, useContext, useState } from 'react';
import { mockLists, mockTasks } from '../data';
import { DnDItem, ObjectList } from '../type';

interface ContextType {
  lists: ObjectList;
  moveItem: (dndInfo: DnDItem) => void;
}

const convertToObjectList = (): ObjectList => {
  let result: ObjectList = {};

  _.forEach(mockLists, (list) => {
    const newList = {
      title: list.title,
      items: mockTasks.filter((t) => t.list_id === list.id),
      bg_color: list.bg_color,
    };

    result[list.id] = newList;
  });

  return result;
};

const TaskContext = createContext<ContextType>({} as ContextType);

const TaskProvider: React.FC = ({ children }) => {
  // const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [lists, setLists] = useState<ObjectList>(convertToObjectList());
  const moveItem = (dndInfo: DnDItem) => {
    const { item_from_index, item_to_index, list__from_id, list_to_id } =
      dndInfo;

    if (list__from_id === list_to_id) {
      // drag and drop within a list
      const list = lists[list__from_id];
      const listItems = list.items;

      let newListItems = _.clone(listItems);
      const [removedItem] = newListItems.splice(item_from_index, 1);
      newListItems.splice(item_to_index, 0, removedItem);

      setLists({
        ...lists,
        [list__from_id]: {
          ...list,
          items: newListItems,
        },
      });
    } else {
      const from_list = lists[list__from_id];
      const to_list = lists[list_to_id];

      let newFromListItems = _.clone(from_list.items);
      let newToListItems = _.clone(to_list.items);

      const [removedItem] = newFromListItems.splice(item_from_index, 1);
      newToListItems.splice(item_to_index, 0, removedItem);
      setLists({
        ...lists,
        [list__from_id]: {
          ...from_list,
          items: newFromListItems,
        },
        [list_to_id]: {
          ...to_list,
          items: newToListItems,
        },
      });
    }
  };

  return (
    <TaskContext.Provider value={{ lists, moveItem }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
export default TaskProvider;
