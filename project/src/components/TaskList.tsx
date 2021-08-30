import { useState } from 'react'
import '../styles/tasklist.scss'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface IDarkMode {
  ativo: boolean;
  setAtivo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskList(props: IDarkMode) {
  const {ativo, setAtivo} = props

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if(newTaskTitle.length === 0) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks(oldState => [...oldState, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    const changedTaskStatus = tasks.map(task =>
      task.id === id 
        ? {...task, isComplete: !task.isComplete} 
        : task
    )
    setTasks(changedTaskStatus)    
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  return (
    <section className={!ativo ? "task-list container light" : "task-list container dark" }>
      <header className="task-listHeader">
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main className={!ativo ? "mainTaskList  light" : "mainTaskList dark" }>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}