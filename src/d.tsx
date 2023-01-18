export interface Form {
  title: string;
  text: string;
  isDone: boolean;
}

export interface Todo {
  id: string;
  title?: string;
  text?: string;
  isDone?: boolean;
}
