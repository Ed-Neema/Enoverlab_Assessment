import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  // updates state and local storage
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
   function loadSavedTasks() {
     const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
     if (saved) {
       setTasks(JSON.parse(saved));
     }
   }
   useEffect(() => {
     loadSavedTasks();
   }, []);
  // function to add tasks
  function addTask(taskTitle, taskDescription) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),//function from browsers to generate unique ids
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  }
  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }
   function deleteTaskById(taskId) {
     const newTasks = tasks.filter((task) => task.id !== taskId);
     setTasksAndSave(newTasks);
   }
  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  );
}

export default App;
