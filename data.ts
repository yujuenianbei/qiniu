// Sample data structure for a list of items
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Initial data set
export const initialItems: Item[] = [
  { id: 1, name: 'Apple', description: 'A red apple', price: 0.50 },
  { id: 2, name: 'Banana', description: 'A yellow banana', price: 0.30 },
  { id: 3, name: 'Orange', description: 'A juicy orange', price: 0.75 },
];