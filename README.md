# Task Management Dashboard

needs to be done 
Search function
light and dark mode 
task reordering 

 ## Table of contents 
  1. [Overview](#Overview)
      1. [Features](#Features) 
      2. [Usage](#Usage)
  2. [Problem](#problem)     
      1. [Problem Breakdown/ Goal](#problem-breakdown-goal)
      2. [Questions and Answer](#questions--answers)
      3. [Input?](#input-)
      4. [Output?](#output-)
      5. [Step by step Plan](#step-by-step-process-what-will-i-need-to-do)
  3. [What I did step by step](#what-i-did-in-detail)
  4. [Trouble Shooting ](#troubleshooting)
  5. [Reflection](#reflection)
  6. [References](#references)
      1. [Programs Used ](#programs-i-used) 
---
## Project Overview 
In this assessment, you will apply the skills you have developed throughout your React training to build a functional, real-world dashboard application. This project will test your understanding of React components, state management, TypeScript integration, form handling, and component composition.

---
## Problem 
### Problem Breakdown!/ Goal

1. Initialize project → install dependencies
2. Organize folder structure
3. Plan components & data structures
4. Implement TypeScript interfaces
5. Build components (TaskForm, TaskList, TaskItem, TaskFilter, Dashboard)
6. Add utilities for filtering, sorting, validation
7. Implement localStorage persistence 
8. Enhance UI 
9. Test functionality & responsive layout
10. Document & submit GitHub repo + reflection


- Dashboard (Parent)
-  ├── TaskForm   → adds tasks
 - ├── TaskFilter → filters tasks
 - └── TaskList
    -   └── TaskItem → single task row/card

---

### Questions + Answers  
Ex: How do I get input?
    How do I check it’s valid?
    How do I display something back?

  1. How does a dashboard look?
      - Display for the ammounnt of project in total, ended projects , running projects and pending projects 
      - A week breakdown of the ammount of task  based on due dates. 
      - reminder for a single upcoming task 
      - a display of about 5 projects 
      - project Progress 
  
  2. What can I use to make an interface for dashboard? 
      - task
      - categories(type of task(school,work, personal, fitness , other finance), priority, date, ) 
      -  completion status
      - task completion tracking that track even deleted task
      - data interface 
      - Filter interface 
      - Task interface 
      - task Props 
      - taks list props 
      - task form props ( get task data here! and pass it to the parent component on submit)
      - filter Interface 
      - chart datA inrterface

  3. How shuld I structure the tabs of the dashboard?
      - Task with all the task needed to be done
      - taks Breakdoown 
      - breakdown rate of task 
  
  4. What should I do to make the application more dashboard like ? 
        - I think I should  have a dashboard that show task, the ammount of task and percentage of task done 
        - I should also challenge myself and try animating a scroll bar based on the percentage of task completed and done. 
  5. How can I make a graph on js that complies data 
        - To use Chart.js in a TypeScript React project, you first need to install both chart.js and react-chartjs-2. In your .tsx file, you import the necessary Chart.js modules, such as CategoryScale, LinearScale, BarElement, Title, Tooltip, and Legend, and register them using ChartJS.register(), since Chart.js 3+ requires explicit registration of components. Next, you define the chart data and options, specifying labels, datasets, and configuration like responsive layout, title, and legend position, making sure to use TypeScript-friendly syntax such as as const where needed. You then render the chart using the <Bar> component from react-chartjs-2, passing the defined data and options as props. Finally, this chart component can be included in your dashboard or parent component, and the chart can be dynamically updated by populating the datasets and labels from your application state, allowing you to visualize data such as task counts or status distributions.
  6.  What is the util file used for ?
        - The utils folder contains reusable helper functions such as task filtering, sorting, form validation, date formatting, and any data-processing logic that supports the components without being directly tied to the UI.
  7. how does the functions interact with the tsx files 
    ```ts
export function addNumbers(a: number, b: number): number {
  return a + b;
}

export function multiplyNumbers(a: number, b: number): number {
  return a * b;
}
```

- it should then go to the code like :
```tsx

import React, { useState } from "react";
import { addNumbers, multiplyNumbers } from "../utils/mathUtils";

export default function Calculator() {
  const [result, setResult] = useState<number>(0);

  const handleAdd = () => {
    const value = addNumbers(5, 3); // calling the util function
    setResult(value);
  };

  const handleMultiply = () => {
    const value = multiplyNumbers(5, 3);
    setResult(value);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <p>Result: {result}</p>

      <button onClick={handleAdd}>Add 5 + 3</button>
      <button onClick={handleMultiply}>Multiply 5 * 3</button>
    </div>
  );
}
```
8. How do i use the motion package ? 
``` npm install motion ```
then you can import motion by 
``` 
import {motion} from "motion/react"
```
after that you can then use motion as a method like Math.floor()
but in stead you are tying it to an element <motion.div> then to animate you set the inital prop  
```
<motion.div inital={{oppacity:0}} animmate= {{opacity:1}} transition={{duration: 2}}>
```
in the snippet above you see that initally the animation will be invisible and then go to visibile in 2 seconds ( timme is measured in seconds)
to make it settle into the page ypu utilize position

```
<motion.div inital={{oppacity:0}} animmate= {{opacity:1,y:40}} transition={{duration: 2, y:0}}>
```
The y that I added contiols the y axis and if it is positive it will rise however if it is negative it will fall. to the positionm it is supposed to be in. 
9. How can I use local storage in the task manager.
- It will go whereever the main task state lives(dashboard). It will also save task everytime they change andgit comm load when app starts  
---
### Input ?
- Task
- Description of the task
- category of the task 
- priority
- Completion status when task is rendered 
- deletion button 
- filter task 
- time
---
### Output ??
- Chart of data 
- Ammount of task needed to be done 
- the ammount of task pending 
- the total ammount of task
- list of every task as well. 
- Ammount of task completed 
- Reminder for the task closest to being over due.
#### Optional
- Project analytics that shows a week breakdown of projects that need to be done. 
- Add animations for maybe 
      - when switiching slides 
      - when you add a task 
---
### Step-by-Step Process (What will I need to do)  

1. Initialize Your Project
2. Plan the project 
    1. Decide on the components 
        - Dashboard (partner container)
        - taskForm( add task)
        - Taskfilter (filter task)
        - TaskList(displays the task)
        - Task Item ( indivisual task)
    2. Define data interfaces 
    3. Plan state Managment 
3. Create typescript Interfaces 
4.  Build the core components and add validation 
5.  Implementt Utilities 
6. Add data Persisitance 
7. Add charts 
8. Testing 
9. enhance the UI

---
## What I did in detail 
In this section you should say what you did and why and if you made refinements as well. 
1. Made the prework for the readme before I coded a single line.
2. Made the interfaces I would use 
    - I used basically the same types as a previous project just adding one 
3. Started at the lowest component, the TaskItem . 
4. Made the task list which took the information in the task item and brings it into a table component 
5. Made a render function that will take an input (later made into its own function)and then will show an output of the task displayed in the table.
6. Made the filter for the code 
7. I then went to the dashboard and brought the render function there
8. In the dashboard , I made collected data on how the task based on their status.
9.   I then edit the function in the render list to take a function of increment total so you know how many task you have or used to have. 
10. Added another component  hat will display a chart then made a pie and bar chart that  shows charts of the information. 
11. I then added styling to the page , adding hover state and animation to the page
12. Made a color change to the table based on their priority and status.
13. Added more animation to the page that will show the input as an input
14. Added on to the filter component to bring in the categorys and separates it as well 
15. Made a content switcher.  
---
## Troubleshooting 
    Ask: “What should happen right now?”
    Ask: “What’s actually happening?”
    Test your assumptions step by step.
### Problems 
Problems  will arise every time you code knowing the problem is key to understanding it !


1.  In my code when i was trying to push the information from the task Items to the list I ran into a type issue which would later break the code.
2. The code isnt displaying anything after i attempted to add a chart to the page 

---
### Solutions
 Finding out how to fix those problems will be important!

1. It was in fact a type issue and it was because I imported the wrong type into the doccument at first after importing the right type the code went back to working, 
2. I once again had a mapping problem and another problem with installing the motion and charts properly
. 
---
## Reflection
My approach to this lab was to start with the smallest, most specific components and gradually work my way up to the broader ones. I began by building the table responsible for rendering tasks, since it acts as the foundation for how the data is displayed. Once that component worked correctly, I moved upward through each related component, ensuring that props were passed correctly and that state flowed in the right direction. This bottom-up method made it easier to isolate bugs and keep each part manageable.

One of the biggest challenges I faced was getting the charts to work. This was my first time implementing chart components, so I didn’t have much prior experience to rely on. Because charts depend heavily on the data structure and how the component is configured, even a small mistake could trigger runtime errors. I had to revisit the documentation and external resources several times to understand how to shape the data and wire everything together correctly.

Along the way, I also ran into several other issues. For example, my filters weren’t working at first because the filter state didn’t include all the required fields, which caused the logic to fail silently. I also struggled with animations not working the way I expected, mainly because I wasn't using AnimatePresence, so exit animations never triggered. Styling became another challenge, especially when my table unexpectedly switched to a column layout after I accidentally applied display: flex directly to the <td> elements. Fixing that required restructuring the layout and keeping flexbox inside a wrapper instead of on the table cells themselves.

Overall, these problems forced me to slow down, debug more intentionally, and look deeper into how each part of React state, props, layout, and external libraries worked together. Even though it took extra time, it helped me understand the components and their interactions much more clearly. 
---
## References 
- https://blog.logrocket.com/using-chart-js-react/?utm_source.com
- https://dribbble.com/shots/25241984-Task-Management-Dashboard
- https://dev.to/martinpersson/visualizing-data-in-react-a-guide-to-beautiful-charts-with-react-chartsjs-2-ifi
- https://www.youtube.com/watch?v=9-fO_2xTpgY 
- https://blog.logrocket.com/using-localstorage-react-hooks/  : for the local storage. 
- https://www.chartjs.org/docs/latest/
---

### Programs I used 
- Charts.js 
- Typescript 
- React 
- HTML
---
### Websites I used





