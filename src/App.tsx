import './App.css'
import { Box } from '@mui/material';
import TodoCreateView from './Presentation/TodoCreateView';
import TodoListView from './Presentation/TodoListView';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TodoCreateView />
      <TodoListView />
    </Box>
  );
}

export default App
