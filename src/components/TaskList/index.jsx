import React from 'react'

const TaskList = ({task, allTask, setAllTask}) => {

    const deleteTodo = (id) => {
        setAllTask(prev => prev.filter(prevTodo => prevTodo.id !== id))
    }

    const toggleComplete = (id) => {
        setAllTask(prev => prev.map(prevTodo => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    console.log(allTask);
  return (
    <section className={`${task.completed ? 'task-complete' : 'list-main'}`}>
        <div className='todo-check'>
        <input
        checked = {task.completed}
        onChange={() => toggleComplete(task.id)}
        type="checkbox" name="" id="" />
        <span>{task.todo}</span>
        </div>
        <span
        onClick={() => deleteTodo(task.id)}
        className='delete-todo'
        >Delete</span>
    </section>
  )
}

export default TaskList