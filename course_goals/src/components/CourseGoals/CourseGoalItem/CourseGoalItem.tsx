import React from 'react';

import './CourseGoalItem.css';

interface CourseGoalItemProps {
    id: string;
    onDelete: (id: string) => any;
    children: React.ReactNode;
}
const CourseGoalItem = (props: CourseGoalItemProps) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (
        <li className='goal-item' onClick={deleteHandler}>
            {props.children}
        </li>
    );
};

export default CourseGoalItem;
