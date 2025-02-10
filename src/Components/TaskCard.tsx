import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Task, TaskPriority, TaskStatus } from "../Entities/Task";
import { useTasks } from "../hooks/useTasks";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();

  const handleUpdate = () => {
    if (task.status === "todo") {
      updateTask(task.id, { status: "doing" });
    } else if (task.status === "doing") {
      updateTask(task.id, { status: "done" });
    }
  };

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
        {task.status !== "done" && (
          <Button color={getActionColor(task.status)} onClick={handleUpdate}>
            {getActionText(task.status)}
          </Button>
        )}
        <Button color="red" onClick={() => deleteTask(task.id)}>
          Excluir
        </Button>
      </Flex>
    </Card>
  );
};
