import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

interface CourseGoalListProps {
    items: {
        text: string;
        id: string;
    }[];
    onDeleteItem: (id: string) => null | void;
}

const CourseGoalList = (props: CourseGoalListProps) => {
    return (
        <ul className='goal-list'>
            {props.items.map((goal) => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
