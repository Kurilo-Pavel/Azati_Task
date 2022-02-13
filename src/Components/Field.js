import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import Loading from "./Loading";
import {Link} from "react-router-dom";
import {targetPage} from "./store/usersSlice";
import {targetUser} from "./store/usersSlice";

const Field = () => {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.loading);
  const repeat = useSelector((state) => state.users.repeat);
  const PHP = useSelector((state) => state.users.php);
  const HTML = useSelector((state) => state.users.html);
  const JavaScript = useSelector((state) => state.users.js);
  const Java = useSelector((state) => state.users.java);
  const dispatch = useDispatch();
  const noRepeat = () => {
    if (users) {
      const listUsers = [];
      const listLoginUsers = [];
      users.items.forEach((user) => {
        if (!listLoginUsers.includes(user.owner.login)) {
          listUsers.push(user)
          listLoginUsers.push(user.owner.login)
        }
      })
      return listUsers
    }
  }

  const listUsers = repeat ? noRepeat() : users.items

  return <div>
    {status === 'loading' ? <Loading/> : null}
    {users ? listUsers.map(user => {

      switch (user.language) {
        case PHP:
          break;
        case JavaScript:
          break;
        case Java:
          break;
        case HTML:
          break;
        default:
          return (<div key={uuidv4()}
                       className="border border-gray-400 w-[40%] h- inline-block m-2 box-border"
          >
            <img src={user.owner.avatar_url}
                 className="w-1/4 h-1/4 rounded-[50%] text-center left-1/2 relative translate-x-[-50%]"/>
            <Link to="/azati"
                  value={user.owner.html_url}
                  className="break-words hover:text-gray-500 hover:underline "
                  onClick={(e) => {
                    dispatch(targetPage(e.target.getAttribute('value')))
                    dispatch(targetUser(user))
                  }}
            >url: {user.owner.html_url}</Link>
            <p className="break-words">login: {user.owner.login}</p>
            <p className="break-words">name: {user.full_name}</p>
            <p>id: {user.owner.id}</p>
            <p>language: {user.language}</p>
          </div>)
      }
    }) : null}
  </div>
}
export default Field;