import './AddressBook.css';
import {useEffect, useState} from "react";
import {GetUsers} from "../services/users";

function AddressBook() {
  const [users, setUsers] = useState([]);
  const [showError, setError] = useState(false);

  useEffect(() => {
      GetUsers().then((response) => {
        setError(false);
        setUsers(response);
        console.log(users);
      }).catch((err) => {
        setError(true);
      });
  }, []);


  return (
    <div className="App">
      <h1>Address Book</h1>
      { showError ? <h2>Something's wrong at the server. Please try later</h2> : null}
        <div class={""}>
        
            {users.map((user,index)=> {
                return (
                    <div class={"rounded overflow-hidden shadow-lg"}>
                        <img
                            className="w-full"
                            src={user.picture.large} alt=""/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{user.name.title} {user.name.first} {user.name.last}</div>
                            <p className="text-gray-700 text-base">{user.gender}  ( {user.dob.age} )</p>
                            <p className="text-gray-700 text-base">{user.email}</p>
                            <p className="text-gray-700 text-base">{user.cell}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

  );
}

export default AddressBook;
