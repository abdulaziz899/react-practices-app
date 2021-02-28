
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Users/Cart/Cart';
import Users from './components/Users/Users';
import FakeData from './fakeData/FakeData.json'
function App() {
  const [users, setUsers]=useState([]);
  const [addUser,setAddUser]=useState([])
  useEffect(() => {
    setUsers(FakeData)
    console.log(FakeData);
  }, [])
  const handleAddUser=(user)=>{
    setAddUser([...addUser,user])
    console.log(addUser);
  }
  return (
    <div className="App">
      <div className="UsersContainer">
        <div className="users">
          {
            users.map(user=><div className="userDetails">
              <h1>total user :{users.length}</h1>
              <Users user={user} handleAddUser={handleAddUser} key={user.id}></Users>
              </div>)
          }
        </div>
        <div className="cartDetails">
          <Cart addUser={addUser}></Cart>
        </div>
      </div>
      
    </div>
  );
}

export default App;
