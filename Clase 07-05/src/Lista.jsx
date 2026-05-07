export default function lista(){
  const [tasks, setTasks] =useState ([])
  const [tasks, setTasks] =useState ("")
  const handleAgregar = () => {
    setTasks ([... tasks, {id: Date.now (), tarea: task}] )
    console.log (tasks)
  } 
  const handleChange = (e) => {
    setTask (e.target.value)
  }
  
  return (
    <div>
        Lista 
        <input type="text" onChange={e => handleChange (e)} />
        <button onClick={handleAgregar}>Agregar</button>
        {
            tasks.map (task => <p key={task.id}>{task.tarea}</p>)
        }
    </div>
  )
}
