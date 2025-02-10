import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";

export const useTasks = () => {
  return useContext(TasksContext);
};
