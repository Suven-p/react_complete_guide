import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

interface CourseInputProps {
    onAddGoal: (newGoal: string) => any;
}

interface FormControlProps {
    invalid: boolean;
}

const FormControl = styled.div<FormControlProps>`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.invalid ? '#ff0000' : '#000000')};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid ? '#ff0000' : '#ccc')};
        background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;

const CourseInput = (props: CourseInputProps) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event: React.SyntheticEvent) => {
        const newValue = (event.target as HTMLInputElement).value;
        setEnteredValue(newValue);
        if (newValue.length > 0) {
            setIsValid(true);
        }
    };

    const formSubmitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        setEnteredValue('');
        props.onAddGoal(enteredValue);
    };

    // const invalidInputStyle = {
    //     borderColor: '#FF0000',
    //     background: 'salmon',
    // };
    // const validInputStyle: typeof invalidInputStyle = {
    //     borderColor: '#000000',
    //     background: 'transparent',
    // };
    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input
                    type='text'
                    onChange={goalInputChangeHandler}
                    value={enteredValue}
                />
            </FormControl>
            <Button type='submit'>Add Goal</Button>
        </form>
    );
};

export default CourseInput;
