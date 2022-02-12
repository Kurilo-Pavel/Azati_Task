import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {useEffect} from "react";

const Field = () => {
  const users = useSelector((state) => state.users.users)
  console.log(users)

  if(users){console.log(users.items[0].id)}



  return <>
    {users ? users.items.map(user => {
      return (
        <div key={uuidv4()}>{user.id}</div>)
    }) : null}
  </>
}
export default Field;