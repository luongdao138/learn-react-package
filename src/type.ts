export enum ItemTypes {
  CARD = 'card',
}

export interface List {
  id: string;
  title: string;
  bg_color?: string;
}

export interface Task {
  id: string;
  title: string;
  category: string;
  details: string;
  // status: StatusType;
  list_id: string;
}

export interface ObjectList {
  [key: string]: {
    title: string;
    items: Task[];
    bg_color?: string;
  };
}

export interface DnDItem {
  item_id: string;
  item_from_index: number;
  item_to_index: number;
  list__from_id: string;
  list_to_id: string;
}
