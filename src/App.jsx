// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import React, {useState} from 'react';
// // let todo_obj ={
// // text :
// // completed :
// // }
// const App = () => {
//   // const [todos, setTodo] = useState(false);
//   // const[likes, setLikes] = useState(100);
//   // const handleLike() =>
//     let[todo, setTodo] = useState({
//       text : " ",
//       completed: false
//     });
//     let[todos , setTodos] = useState ([])
//     const handleChange = (e) =>{
//     setTodo({
//       ...todo,
//       text: e.target.value,
//     })
//     console.log(e.target.value)}
//   return (
//     <>
//    <input type="text" value={todo.text} onChange={handleChange} />
//     </input><><button onClick =(submitHandler)> Add Todo </button>
//     </>
//     // <div>
      
//     // </div>
//   )
// }

// //export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// BY COPILOT
// import React, { useState } from 'react';

// const App = () => {
//   const [todo, setTodo] = useState({
//     text: '',
//     completed: false,
//   });

//   const [todos, setTodos] = useState([]);

//   const handleChange = (e) => {
//     setTodo({
//       ...todo,
//       text: e.target.value,
//     });
//   };

//   const submitHandler = () => {
//     if (todo.text.trim() === '') return;
//     setTodos([...todos, todo]);
//     setTodo({ text: '', completed: false });
//   };

//   return (
//     <>
//       <h1>Todo App</h1>
//       <input
//         type="text"
//         value={todo.text}
//         onChange={handleChange}
//         placeholder="Enter a task"
//       />
//       <button onClick={submitHandler}>Add Todo</button>
//       <ul>
//         {todos.map((item, index) => (
//           <li key={index}>
//             {item.text} {item.completed ? '(Done)' : ''}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
// ES7+ React/Redux/React-Native snippets
// rafce + tab

// import React from 'react'
//todo = {
//}
const App = () => {

  let [todo , setTodo] = useState({
    text : "",
    completed:false
  });
  let [todos , setTodos] = useState([])

  useEffect(()=> {
    let data = localStorage.getItem("todos");
    data = JSON.parse(data);
    setTodos(data);//string needs to be parsed in json form
  }, [])

  useEffect(()=>{
    let str = JSON.stringify(todos);
    localStorage.setItem("todos", str);
  }, [todos])
  const handleChange = (e) => {
    setTodo({
      ...todo,
      text: e.target.value,
    })
    console.log(todo.text)
  }

  const submitHandler = (e) => {
    const newTodo = [...todos, todo]
    setTodos(newTodo)
    setTodo({
      ...todo,
      text: ""
    })
    
        console.log(newTodo)
  }
  return (
    <>
      <input type="text" value={todo.text} onChange={handleChange} />
      <button onClick={submitHandler}>Add Todo</button>

      <div className='container'>
        {todos.map((todo) => {
          return <div key={Math.random()}>
            <h2>{todo.text}</h2>
            <h3>completed: {todo.completed ? "true" : "false"}</h3>
            </div>
        })}
      </div>
    </>

)
}

// export default App
// this is test



const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  button: {
    fontSize: "20px",
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  resetButton: {
    fontSize: "16px",
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;