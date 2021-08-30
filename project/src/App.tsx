import {useState} from 'react'
import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'


export function App() {
  const [ativo, setAtivo] = useState(false)

  return (
    <main className={!ativo ? "main light" : "main dark" }>
      <Header ativo={ativo} setAtivo={setAtivo}/>
      <TaskList ativo={ativo} setAtivo={setAtivo}/>
    </main>
  )
}