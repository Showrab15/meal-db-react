import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import Meal from './components/Meal/Meal'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
     
<Header></Header>
<Meal></Meal>
    </div>
  )
}

export default App
