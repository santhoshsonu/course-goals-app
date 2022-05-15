import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

import './CourseInput.css';


const CourseInput = props => {
    const [goalValue, setGoalValue] = useState('');
    const [isValidGoal, setIsValidGoal] = useState(true);

    const goalInputChangeHandler = (event) => {
        const value = event.target.value;
        setIsValidGoal(value.trim().length > 0);
        setGoalValue(value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (goalValue.trim().length === 0) {
            if (isValidGoal) { setIsValidGoal(false); }
            return;
        }
        props.onAddGoal(goalValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${isValidGoal ? '' : 'invalid'}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
