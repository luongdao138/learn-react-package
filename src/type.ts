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

export interface DragItem {
  item_id: string;
  from_list: string;
  type: ItemTypes;
}

export interface DnDItem extends DragItem {
  to_list: string;
}
