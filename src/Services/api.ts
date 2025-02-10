import { Task } from "../Entities/Task";

export const taskServices = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
    const data = await response.json();
    return data;
  },
};
