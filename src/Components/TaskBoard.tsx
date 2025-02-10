import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import { Task } from "../Entities/Task";
import { TaskCard } from "./TaskCard";
import { useTasks } from "../hooks/useTasks";

export const TaskBoard: React.FC = () => {
  const { tasks } = useTasks();

  const tasksTodo: Task[] =
    tasks.filter((task) => task.status === "todo") ?? [];
  const tasksInProress: Task[] =
    tasks.filter((task) => task.status === "doing") ?? [];
  const tasksDone: Task[] =
    tasks.filter((task) => task.status === "done") ?? [];

  return (
    <ScrollArea scrollbars="horizontal">
      <Grid columns={"3"} gap={"4"} minWidth={"64rem"}>
        <Flex direction={"column"} gap={"4"}>
          <Badge size={"3"} color="gray">
            Para Fazer ({tasksTodo.length})
          </Badge>
          {tasksTodo.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </Flex>
        <Flex direction={"column"} gap={"4"}>
          <Badge size={"3"} color="yellow">
            Em Progresso ({tasksInProress.length})
          </Badge>

          {tasksInProress.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </Flex>
        <Flex direction={"column"} gap={"4"}>
          <Badge size={"3"} color="grass">
            Concluída ({tasksDone.length})
          </Badge>

          {tasksDone.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </Flex>
      </Grid>
    </ScrollArea>
  );
};
