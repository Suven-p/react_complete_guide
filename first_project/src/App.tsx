import React from 'react';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import Users, { UserInterface } from './components/Users/Users';

function App() {
    const [users, setUsers] = useState(Array<UserInterface>());
    const addNewUserHandler = (name: string, age: string) => {
        setUsers((oldState: UserInterface[]) => {
            return [...oldState, { name, age, id: Math.random().toString() }];
        });
    };
    const deleteHandler = (id: string) => {
        setUsers((prevState) =>
            prevState.filter((element) => element.id !== id)
        );
    };

    return (
        <div style={{ margin: '30px 0px' }}>
            <UserInput onAddNewUser={addNewUserHandler} />
            <Users users={users} onDelete={deleteHandler} />
        </div>
    );
}

export default App;
