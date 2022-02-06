import './AddToDo.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useState } from 'react'
import Modal from '../UI/Modal'
import { useReducer } from 'react'

const todoReducer = (prevState, action) => {
	switch (action.type) {
		case 'TASK_INPUT':
			return {
				value: action.value,
				date: new Date().toLocaleDateString(),
			}
		default:
			return prevState
	}
}
const AddToDo = ({onAddUser}) => {
    const [user, dispatchUser] = useReducer(todoReducer, {
		value: '',
		date: null,
	})
    const [error, setError] = useState(false);

    const userInputChangeHandler = (event) => {
        dispatchUser({
			type: 'TASK_INPUT',
			value: event.target.value,
		})
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(user.value.trim().length > 0 ){
            const currentUser = {
				...user,
				id: Math.random().toString(),
				completed: false,
			}
			onAddUser(currentUser)
		} else setError(true)
		dispatchUser({
			type: 'TASK_INPUT',
			value: '',
		})
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <h1>My ToDo-List</h1>
                    <input 
                    type="text" 
                    value={user.value}
                    onChange={userInputChangeHandler} 
                    placeholder='write down your plans'
/>
                    <Button type="submit">Add</Button>
                    {error && <Modal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler}
                    />}
                </form>
            </Card>
        </div>
    )
}

export default AddToDo;
