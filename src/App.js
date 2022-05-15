import React, { useState } from 'react';

import CourseInput from "./Components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";

import './App.css';


const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = (goalText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      let id = updatedGoals.map(goal => goal.id).sort((a, b) => a.localeCompare(b)).pop();
      id = id ? (+id.slice(1) + 1) : 1;
      const goal = {
        id: 'g' + id,
        text: goalText
      };
      updatedGoals.unshift(goal);
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId));
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  console.log(courseGoals);

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
