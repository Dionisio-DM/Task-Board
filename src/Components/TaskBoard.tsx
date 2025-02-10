import { Badge, Flex, Grid } from "@radix-ui/themes";
import { Task } from "../Entities/Task";
import { TaskCard } from "./TaskCard";

export const TaskBoard: React.FC = () => {
  const tasksTodo: Task[] = [
    {
      id: 2,
      title: "Reunião com a equipe",
      description:
        "Reunião para discutir o progresso do projeto e próximos passos.",
      status: "todo",
      priority: "high",
    },
  ];
  const tasksInProress: Task[] = [
    {
      id: 1,
      title: "Enviar relatório",
      description: "Enviar o relatório mensal para o departamento financeiro.",
      status: "doing",
      priority: "high",
    },
  ];
  const tasksDone: Task[] = [
    {
      id: 3,
      title: "Atualizar o site",
      description:
        "Fazer atualizações no site da empresa com novas informações.",
      status: "done",
      priority: "medium",
    },
  ];
  return (
    <Grid columns={"3"} gap={"4"} minWidth={"64rem"}>
      <Flex direction={"column"} gap={"4"}>
        <Badge size={"3"} color="gray">
          Para Fazer (2)
        </Badge>
        {tasksTodo.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </Flex>
      <Flex direction={"column"} gap={"4"}>
        <Badge size={"3"} color="yellow">
          Em Progresso (2)
        </Badge>

        {tasksInProress.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </Flex>
      <Flex direction={"column"} gap={"4"}>
        <Badge size={"3"} color="grass">
          Concluída (2)
        </Badge>

        {tasksDone.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </Flex>
    </Grid>
  );
};
