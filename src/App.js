// for classes
// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
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
  return (
    <div className="container">
     <Header  />
     <Tasks tasks={tasks}/>
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
