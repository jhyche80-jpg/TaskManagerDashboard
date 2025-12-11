import  { useState, useEffect } from 'react';
import RenderList from '../RenderList/RenderList';
import "./Dashboard.css"
import TaskCounter from '../TaskCounter/taskCounter';
import type { Task, TaskCat } from '../types';
import { BarChart, Piechart } from '../Charts/Charts';
import { motion } from "framer-motion";
import { useTheme } from '../Theme/Theme';
export default function Dashboard() {

  // theme 
  const { theme, toggleTheme } = useTheme();

  // Content switcher 
  const [contentType, setContentType] = useState< "task"| "home">('home')
  // Load saved tasks from localStorage if available
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Running total of all tasks ever added
  const [totalTasks, setTotalTasks] = useState<number>(() => {
    const savedTotal = localStorage.getItem("totalTasks");
    return savedTotal ? parseInt(savedTotal) : 0;
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save running total to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("totalTasks", totalTasks.toString());
  }, [totalTasks]);

  // Counts for current tasks
  const totalPending = tasks.filter(t => t.status === "pending").length;
  const totalCompleted = tasks.filter(t => t.status === "completed").length;
  const totalInProgress = tasks.filter(t => t.status === "in-progress").length;
  const TaskIntotal = totalCompleted + totalInProgress + totalPending
  const taskSchool = tasks.filter(t => t.category === "school").length
  const taskWork = tasks.filter(t => t.category === "work").length
  const taskPersonal = tasks.filter(t => t.category === "personal").length
  const taskFitness = tasks.filter(t => t.category === "fitness").length
  const taskFinance = tasks.filter(t => t.category === "finance").length
  const taskOther = tasks.filter(t => t.category === "other").length


  // chart data  
  const chartLabelsBar = ["Pending", "In Progress", "Completed"]
  const chartValuesBar = [totalPending, totalInProgress, totalCompleted]

  const piChartLabel:TaskCat[] = ["school", 'work', 'personal', 'fitness', 'finance', 'other']
  const piChartValue = [taskSchool, taskWork, taskPersonal, taskFitness, taskFinance, taskOther]
  return (


    <motion.div className='list'

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>
      <h1>Task Manager</h1>
      <button className='BtnMode' onClick={toggleTheme}>{theme==="light"? 'Dark mode':'Light mode'}</button>
      <div className='Switcher'>

        <button className='dashButton' onClick={(() => setContentType("home"))}>Home</button>
        <button className='dashButton' id="DashBtn2" onClick={(() => setContentType('task'))} > Task</button>
      </div>
      {contentType=== 'home' && (<div >
        <TaskCounter
          TaskTotal={TaskIntotal}            // running total
          TaskCompleted={totalCompleted}    // current completed
          TaskInProgress={totalInProgress}  // current in-progress
          TaskPending={totalPending}        // current pending
          TaskTotalCompleted={totalTasks}
        />

        <div className='Charts'>
          <div id='BarChart'>
            <BarChart labels={chartLabelsBar} values={chartValuesBar} />
          </div>
          <div id="pieChart">
            <Piechart labels={piChartLabel} values={piChartValue} />
          </div>
        </div>

      </div>)}

      {contentType==="task"&&
      (<div>
        <RenderList
          tasks={tasks}
          setTasks={setTasks}
          incrementTotal={() => setTotalTasks(prev => prev + 1)} // increment running total
        />
      </div>)}


    </motion.div>
  );
}