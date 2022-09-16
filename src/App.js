import { Checkbox } from "./components/Checkbox/Checkbox"
import { Routes, Route } from 'react-router-dom'
import { Intro } from "./components/Intro/Intro"


export const App = () => {
  return (
    <Routes>

      <Route path="/" element={ <Intro /> } />
      <Route path="/presupuesto" element={ <Checkbox /> } />

    </Routes>
  )
}
