import './AddressBook.css';
import {useEffect, useState} from "react";
import {GetUsers} from "../services/users";

export interface UserData {
    gender: string;
    name: Name;
    dob: any;
    cell: string;
    picture: Picture;
    email: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Name {
    title: string;
    first: string;
    last:  string;
}

const AddressBook : React.FunctionComponent= () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [showError, setError] = useState<boolean>(false);

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
      <h1 className="text-5xl">Address Book</h1>
        <br/>
      { showError ? <h2>Something's wrong at the server. Please try later</h2> : null}
        <div className={"grid grid-cols-5 gap-5"}>
            {users.map((user: UserData,index)=> {
                return (
                    <div className={"bg-sky-500/10"}>
                        <img src={user.picture.medium} alt=""/>
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

