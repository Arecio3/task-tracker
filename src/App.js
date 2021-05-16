// for classes
// import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 11th at 3:33pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dentist Appointment',
        day: 'Feb 25th at 3:33pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Strip Club',
        day: 'Jul 4th at 12:00pm',
        reminder: true,
    }
    ])

    // Delete Task
    const  deleteTask = (id) => {
      console.log('deleeeete', id);
      setTasks(tasks.filter((task) => task.id !== id))
    }


    // Toggle Reminder
    const toggleReminder = (id) => {
      console.log(id);
      setTasks(tasks.map((task) => task.id === id ? {  ...task, reminder: !task.reminder}: task))
    }
  return (
    <div className="container">
     <Header  />
     <AddTask />
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ) : ("You don't have any Tasks!" )}
    </div>
  );
}

// if you wanna use classes
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
