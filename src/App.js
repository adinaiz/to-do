import React, {useState, useEffect} from 'react';
import './App.css';
import AddToDo from './components/Users/AddToDo';
import ToDos from './components/Users/ToDos';

function App() {
  const [info, setInfo] = useState([])
  const  addUserHandler = (info) => {
    setInfo((prevState) => [info, ...prevState]);
  };

 //poluchaet iz localStorage dannye s pomow'yu useEffect() s obnovlennymi dannymi
  //rabotaet odin raz posle ocenki i rendera
  useEffect (() => {
    const raw = localStorage.getItem('info') || []
    setInfo(JSON.parse(raw))
  }, []) 

  //otpravlyaet dannye v localStorage
  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(info)) //srabotaet pri izmenenii
  }, [info]) 

  return (
    <div className="App">
      <AddToDo onAddUser={addUserHandler}/>
      <ToDos info={info} onChangeData={setInfo}/>
    </div>
  );
}

export default App;
