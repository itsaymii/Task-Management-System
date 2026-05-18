import { useState, useEffect } from 'react'
import './App.css'
import TaskHeader from './components/TaskHeader'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const API_URL = 'http://localhost:8000/api/tasks/'

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      setTasks(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const addNewTask = async (e) => {
    e.preventDefault()
    if (!newTask.trim()) return

    try {
      setIsSubmitting(true)
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask, is_completed: false }),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const newTaskData = await response.json()
      setTasks([newTaskData, ...tasks])
      setNewTask('')
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleTaskCompletion = async (taskId, isCompleted) => {
    try {
      const response = await fetch(`${API_URL}${taskId}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_completed: !isCompleted }),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const updatedTask = await response.json()
      setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)))
    } catch (err) {
      setError(err.message)
    }
  }

  const updateTaskTitle = async (taskId) => {
    if (!editTitle.trim()) return
    try {
      const response = await fetch(`${API_URL}${taskId}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editTitle }),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const updatedTask = await response.json()
      setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)))
      setEditingTaskId(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`${API_URL}${taskId}/`, { method: 'DELETE' })
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      setTasks(tasks.filter((task) => task.id !== taskId))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#494c6b] antialiased relative overflow-x-hidden selection:bg-[#635bff]/10">
      
      <div className="absolute top-0 left-0 right-0 h-[440px] bg-gradient-to-br from-[#1e1b4b] via-[#4f46e5] to-[#0ea5e9] z-0 shadow-inner" />
      
      <div className="absolute top-[-100px] left-[15%] w-[600px] h-[450px] bg-[#d946ef] rounded-full blur-[130px] opacity-45 mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-[50px] right-[-5%] w-[400px] h-[350px] bg-[#38bdf8] rounded-full blur-[110px] opacity-40 mix-blend-screen pointer-events-none z-0" />

      <div className="absolute top-[340px] left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-[#f8fafc] z-0" />

      <div 
        className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 91, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 91, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#635bff]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Main Content Card Layout Wrapper */}
      <main className="relative z-10 mx-auto max-w-xl px-5 pt-16 sm:pt-28 pb-24">
        <div className="flex flex-col space-y-6">
          
          <TaskHeader />

          {error && (
            <div className="w-full rounded-2xl bg-rose-50 border border-rose-100 px-5 py-4 text-xs font-semibold text-rose-500 shadow-xl shadow-rose-500/[0.03] flex justify-between items-center transition-all">
              <span className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                {error}
              </span>
              <button onClick={() => setError(null)} className="text-base font-bold opacity-60 hover:opacity-100 transition-opacity">&times;</button>
            </div>
          )}

          <TaskForm
            newTask={newTask}
            onChangeNewTask={setNewTask}
            onAddTask={addNewTask}
            isSubmitting={isSubmitting}
          />

          <TaskList
            loading={loading}
            tasks={tasks}
            onToggleTaskCompletion={toggleTaskCompletion}
            onDeleteTask={deleteTask}
            editingTaskId={editingTaskId}
            setEditingTaskId={setEditingTaskId}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            onUpdateTaskTitle={updateTaskTitle}
          />
          
        </div>
      </main>
    </div>
  )
}

export default App