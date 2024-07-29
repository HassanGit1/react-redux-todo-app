import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-gray-800 font-black text-3xl my-6'>Using React Redux-ToolKit</h1>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
