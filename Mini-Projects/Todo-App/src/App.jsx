import { useEffect, useState } from 'react';
import './index.css'
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [filters, setFilters] = useState("all");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  function updateTodos() {
    setCount((count) => count + 1)
    if (!todo.trim()) return;
    const newTodo = { id: count + 1, content: todo, isCompleted: false };
    setTodos((todos) => [...todos, newTodo]);

    setTodo('')
  }

  function deleteTodo(index) {
    setTodos((todos) => todos.filter((ele, idx) => idx !== index));
  }
  function clearSelected() {
    setTodos((todos) => todos.filter((ele) => !ele.isCompleted));
  }
  const showFilters = todos.filter((todo) => {
    if (filters === 'done') return todo.isCompleted;
    else if (filters === 'active') return !todo.isCompleted;
    return true;
  })

  function update(id) {
    setTodos((prev) =>
      prev.map((todo, idx) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const activeCount = todos.filter(todo => !todo.isCompleted).length;

  const doneCount = todos.filter(todo => todo.isCompleted).length;
  return (
    <>
      <div className="main-container">
        <h1>My Todos</h1>

        <div>
          <input
            value={todo}
            placeholder="What needs to be done?"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={updateTodos}>Add</button>
        </div>
        <div>
          <button onClick={() => setFilters("all")} >All</button>
          <button onClick={() => setFilters("active")}>Active</button>
          <button onClick={() => setFilters("done")}>Done</button>
        </div>
        <div>
          {showFilters.map((todo, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => update(todo.id)}
                />

                <p>{todo.content}</p>
                <button onClick={() => deleteTodo(todo)}>X</button>
              </div>
            );
          })}
        </div>
        <div>
          <p> {filters === "all" && todos.length}
            {filters === "active" && activeCount}
            {filters === "done" && doneCount}
            {" "}tasks</p>
          <button onClick={clearSelected}>clear</button>
        </div>
      </div>
    </>
  );
}

export default App;



























// import { useState } from 'react';

// function App() {
//   const [todo, setTodo] = useState('');
//   const [todos, setTodos] = useState([]);
//   const[todoId,setTodoId]=useState(0);
//   const [filter,setFilter]=useState('all')

//   function updateTodo(){
//     if(todo===''){alert("Please enter todo")
// return}
//       setTodoId((count)=>count+1);
//     const newTodo={content: todo,id:todoId,isCompleted:false};
//     setTodos((todos)=>[...todos,newTodo]);
//     setTodo("")
//   }

// const filteredTodos=todos.filter((todo)=>{
//     if(filter==='active') return  !todo.isCompleted;
//     else if(filter==='done') return todo.isCompleted;
//     return todo;
// }
// )
// function changeCompleted(id){
//     setTodos((todos)=>todos.map((todo)=>
//     todo.id===id ?{ ...todo,isCompleted : true} :todo
//     ))
// }

// function deleteDone(){
//   setTodos((todos)=>todos.filter((todo)=>!todo.isCompleted))
// }

// const activeLength=todos.filter((todo)=>!todo.isCompleted).length
// const completedLength=todos.filter((todo)=>todo.isCompleted).length

//   return (
//     <>
//       <div>
//         <input placeholder="Enter your todo" value={todo} onChange={(e)=>setTodo(()=>e.target.value)}/>
//         <button onClick={updateTodo}>add</button>

//         <div>
//           <button  onClick={()=>setFilter('all')}>All</button>
//           <button onClick={()=>setFilter('active')}>Active </button>
//           <button onClick={()=>setFilter('done')}>Done</button>
//         </div>
//       </div>

//       <div>
//         {filteredTodos.map((todo, index) => (
//           <div ket={index}>
//             <input type="checkbox" checked={todo.isCompleted}  onChange={()=>changeCompleted(todo.id)}/>
//             <p>{todo.content}</p>
//             <button>X</button>
//           </div>
//         ))}
//       </div>

//       <div>
//         <p>{filter==='all' &&  todos.length } {filter==='active' &&activeLength }{filter==='done' && completedLength}{" "}</p>
//         <button onClick={deleteDone}>clear</button>
//       </div>
//     </>
//   );
// }
// export default App;
