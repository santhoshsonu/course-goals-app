import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

import './CourseInput.css';


const CourseInput = props => {
    const [goalValue, setGoalValue] = useState('');

    const goalInputChangeHandler = (event) => {
        setGoalValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(goalValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
