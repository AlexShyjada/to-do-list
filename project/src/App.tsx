import {useState} from 'react'
import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'


export function App() {
  const [ativo, setAtivo] = useState(false)

  return (
    <>
      <Header ativo={ativo} setAtivo={setAtivo}/>
      <TaskList />
    </>
  )
}