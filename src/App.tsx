import { Box, Flex, Heading } from "@radix-ui/themes";
import { CreateTaskForm } from "./Components/CreateTaskForm";
import { TaskBoard } from "./Components/TaskBoard";
import { TasksContextProvider } from "./Context/TasksContext";

function App() {
  return (
    <TasksContextProvider>
      <Box maxWidth="80rem" mx="auto">
        <Box height="4rem">
          <Flex align="center" gap="4" height="100%">
            <Heading as="h1" size="8" weight="light">
              Task Board
            </Heading>
            <CreateTaskForm />
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" mb={"4"}>
            Quadro de tarefas
          </Heading>
          <TaskBoard></TaskBoard>
        </Box>
      </Box>
    </TasksContextProvider>
  );
}

export default App;
