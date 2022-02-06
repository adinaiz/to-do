import Card from '../UI/Card';
import classes from './ToDos.module.css'

const ToDos = ({info, onChangeData}) => {

	const checkedHandler = (e) => {
		const checkedData = info.map((user) => {
			if (user.id === e.target.id) {
				user.completed = !user.completed
			}
			return user
		})
		onChangeData([...checkedData])
	}

    let user = <h2>no schedule</h2>
    if (info.length > 0) {
    return info.map((user) => (
    <Card className={classes.info} >
            <ul key={user.id}>
                <li > 
                    <input 
                    type='checkbox' 
                    className={classes.myCheck} 
                    id={user.id}
                    checked={user.completed}
					onChange={checkedHandler}
                        />
                    <label className={user.completed ? classes.end : classes.start}>
						{user.value}
					</label>
                    <label className={classes.date}>{user.date}</label>
                </li>  
            </ul>
        </Card>
    ))
}
return <div>{user}</div>
}

export default ToDos;