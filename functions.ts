import { NameApiService } from "./nameApiService";
import { DatabaseMock } from "./util";

export const sumOfArray = (numbers: number[]): number => {
  // 空配列が渡された場合は0を返却
  if (numbers.length === 0) return 0;
  return numbers.reduce((a: number, b: number): number => a + b);
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

export const asyncSumOfArraySometimesZero = (
  numbers: number[],
  database: DatabaseMock
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      // const database = new DatabaseMock(); // fixme: この関数をテストするには、DatabaseMockの使い方を変える必要がありそう！ヒント：依存性の注入
      database.save(numbers);
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

export const getFirstNameThrowIfLong = async (
  maxNameLength: number,
  nameApiService: NameApiService
): Promise<string> => {
  // const nameApiService = new NameApiService(); // fixme: この関数をテストするには、NameApiServiceの使い方を変える必要がありそう！ヒント：依存性の注入
  const firstName = await nameApiService.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};

// 課題4
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodo = async (id: number): Promise<Todo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await response.json();
};

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return await response.json();
};

export const createTodo = async (todo: Todo): Promise<number> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data.id;
};