import { createContext, ReactNode, useEffect, useState } from "react";
import { Task } from "../Entities/Task";
import { taskServices } from "../Services/api";

export interface TextContextData {
  tasks: Task[];
  createTask: (attibutes: Omit<Task, "id">) => Promise<Task>;
  updateTask: (
    id: number,
    attibutes: Partial<Omit<Task, "id">>
  ) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

export const TasksContext = createContext({} as TextContextData);

interface TasksContextProviderProps {
  children: ReactNode;
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    taskServices.fetchTasks().then((data) => setTasks(data));
  }, []);

  const createTask = async (attributes: Omit<Task, "id">) => {
    const task = await taskServices.createTask(attributes);
    setTasks((current) => [...current, task]);
    return task;
  };

  const updateTask = async (
    id: number,
    attibutes: Partial<Omit<Task, "id">>
  ) => {};

  const deleteTask = async (id: number) => {};

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, updateTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
