//import logo from './logo.svg';
import { GlobalStyle } from './Components/Style/GlobalStyles.js';
import { AddTask } from './Components/Addtask/Addtask';
import { TaskList } from './Components/Tasklist/Tasklist';
import { useTasks } from './Components/Hooks/useTasks';
import { useEditTask } from './Components/Hooks/useEditTask';


function App() {
  const Tasks = useTasks();
  const EditTask = useEditTask();
  return (
    <>
    <GlobalStyle/>
      <div className="App">
        <AddTask { ...Tasks } { ...EditTask }/>
        <TaskList { ...Tasks } { ...EditTask }/>
    </div>
    </>
  );
}

export default App;
