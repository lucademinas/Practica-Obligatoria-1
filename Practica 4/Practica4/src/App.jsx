import { useState } from 'react'
import './App.css'
import NewTask from './components/newTask/NewTask';
import TaskList from './components/taskList/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    const newTask = {
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const handleStatusTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);

  }

  return (
    <div>
      <h1>Manejo de tareas personales</h1>
      <NewTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onStatusTask={handleStatusTask}
        onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App
