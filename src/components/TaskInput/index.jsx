import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import TaskList from '../TaskList'

const getLocalStorage = () => {

    //Retrieving task from the Local Storage
    const todos = JSON.parse(localStorage.getItem("tasks"))
    if(todos && todos.length > 0){
      return todos
    }
    else return []
  }

const TaskInput = () => {
    const [task, setTask] = useState('')
    const [allTask, setAllTask] = useState(getLocalStorage())
    const {register, handleSubmit} = useForm()

    // Submitting Input
    const onSubmit = (data, e) => {
        e.preventDefault()
        setTask(data.task)
    }
    
    // Adding the Tasks
    useEffect(() => {
        if(task !== '') setAllTask(prev =>  [{id: Date.now(), todo: task, completed: false}, ...prev])
    }, [task])

    //Setting the task in the Local Storage
    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTask))
      }, [allTask])


  return (
    <section className='task-sec'>
        <h1 className='head'>MY TODO</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"
        {...register('task')}
        className='task-input'/>
        <button className='add-btn' type='submit'>ADD</button>
        </form>

        {/* Displaying the list of tasks */}
        <section className='list'>
            {allTask.map(task => (
                <TaskList
                allTask = {allTask}
                setAllTask = {setAllTask}
                task = {task} />
            ))}
        </section>
    </section>
  )
}

export default TaskInput