import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Task, TaskPriority, TaskStatus } from "../Entities/Task";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getActionText = (status: TaskStatus) => {
    const actionsText = {
      todo: "Iniciar",
      doing: "Concluir",
      done: "Arquivar",
    };
    return actionsText[status];
  };

  const getActionColor = (status: TaskStatus) => {
    const actionColor: { [key: string]: "indigo" | "green" | "bronze" } = {
      todo: "indigo",
      doing: "green",
      done: "bronze",
    };
    return actionColor[status];
  };

  const getPriorityColor = (priority: TaskPriority) => {
    const priorityColors: { [key: string]: "sky" | "amber" | "red" } = {
      low: "sky",
      medium: "amber",
      high: "red",
    };
    return priorityColors[priority];
  };
  return (
    <Card>
      <Flex align={"center"} gap={"4"}>
        <Heading as="h3" size={"3"} weight={"bold"}>
          {task.title}
        </Heading>
        <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
      </Flex>
      <Text as="p" my={"4"}>
        {task.description}
      </Text>
      <Flex gap={"2"}>
        <Button color={getActionColor(task.status)}>
          {getActionText(task.status)}
        </Button>
        <Button color="red">Excluir</Button>
      </Flex>
    </Card>
  );
};
