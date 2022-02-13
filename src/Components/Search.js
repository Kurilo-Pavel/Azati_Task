import {useDispatch} from "react-redux";
import {getUsers} from "./store/usersSlice";

const Search = () => {
  const dispatch = useDispatch();

  return <div className="h-20">
    <input type="text"
           className="border border-gray-300 w-1/3 italic px-3 py-1 align-middle top-1/2 relative translate-y-[-50%]"
           onChange={(e) => {
             return e.target.value ? dispatch(getUsers(e.target.value)) : null
           }}/>


  </div>
}
export default Search;