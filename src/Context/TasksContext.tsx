import { createContext, ReactNode, useEffect, useState } from "react";
import { Task } from "../Entities/Task";
import { taskServices } from "../Services/api";

export interface TextContextData {
  tasks: Task[];
  createTask: (attibutes: Omit<Task, "id">) => Promise<Task>;
  updateTask: (
    id: string,
    attibutes: Partial<Omit<Task, "id">>
  ) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
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
    id: string,
    attibutes: Partial<Omit<Task, "id">>
  ) => {
    await taskServices.updateTask(id, attibutes);

    setTasks((currentState) => {
      const updatedTask = [...currentState];
      const taskIndex = updatedTask.findIndex((task) => task.id === id);
      Object.assign(updatedTask[taskIndex], attibutes);
      return updatedTask;
    });
  };

  const deleteTask = async (id: string) => {
    await taskServices.deleteTask(id);

    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, updateTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
