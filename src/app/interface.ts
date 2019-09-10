export interface Todo {
  id: number;
  description: string;
  category: number;
  content: string;
}

export enum Category {
  'Do Now!!',
  'Do Tomorrow!',
  'Do Soon..',
  'Only When Extra Time.'
}
