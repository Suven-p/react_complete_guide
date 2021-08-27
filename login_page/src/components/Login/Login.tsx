import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import InputField from '../UI/InputField/InputField';

interface formReducerState {
    value: string;
    isValid: boolean;
}

interface formReducerAction {
    type: string;
    value?: string;
}

interface loginProps {}

type validatorFunc = (value: string) => any;
type useFormReducerType = (
    validator: validatorFunc
) => [formReducerState, React.Dispatch<formReducerAction>];

const useFormReducer: useFormReducerType = (validator) => {
    const reducerFunc = (
        state: formReducerState,
        action: formReducerAction
    ) => {
        switch (action.type) {
            case 'USER_INPUT': {
                if (action.value) {
                    console.error(
                        'Value not provided when using action "USER_INPUT" in useFormReducer'
                    );
                }
                return {
                    value: action.value || '',
                    isValid: validator(action.value || ''),
                };
            }
            case 'INPUT_BLUR': {
                return {
                    value: state.value,
                    isValid: validator(state.value),
                };
            }
            default: {
                console.error('Unhandled action in emailReducer: ', action);
                return state;
            }
        }
    };
    const [inputValue, dispatch] = useReducer(reducerFunc, {
        value: '',
        isValid: null,
    });
    return [inputValue, dispatch];
};

const Login = (props: loginProps) => {
    const ctx = useContext(AuthContext);
    const [emailState, dispatchEmail] = useFormReducer((value) =>
        value.includes('@')
    );
    const [passwordState, dispatchPassword] = useFormReducer(
        (value) => value.trim().length > 6
    );
    const [formIsValid, setFormIsValid] = useState(false);

    const { isValid: emailIsValid } = emailState as formReducerState;
    const { isValid: passwordIsValid } = passwordState;
    // If emailState.isValid and passwordState.isValid is not extracted, then
    // the entire emailState and passwordState would have to be dependency for useEffect
    // ie it would be run every time input values change instead of only when validity
    // changes
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event: React.SyntheticEvent) => {
        dispatchEmail({
            type: 'USER_INPUT',
            value: (event.target as HTMLInputElement).value,
        });
    };

    const passwordChangeHandler = (event: React.SyntheticEvent) => {
        dispatchPassword({
            type: 'USER_INPUT',
            value: (event.target as HTMLInputElement).value,
        });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <InputField
                    isValid={emailIsValid}
                    id='email'
                    type='email'
                    label='E-Mail'
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <InputField
                    isValid={passwordIsValid}
                    id='password'
                    type='password'
                    label='Password'
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button
                        type='submit'
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
