import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import Loading from "./Loading";

const Field = () => {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.loading);
  console.log(users)

  if(users){console.log(users.items[0].id)}

  return <div>
    {status === 'loading' ? <Loading/> : null}
    {users ? users.items.map(user => {
      return (
        <div key={uuidv4()}
        className="inline-block border border-gray-400 w-1/5"
        >{user.id}</div>)
    }) : null}
  </div>
}
export default Field;