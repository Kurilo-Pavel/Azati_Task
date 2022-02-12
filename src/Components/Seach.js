import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getUsers} from "./store/usersSlice";

const Seach = () => {
  const dispatch = useDispatch();

  return <>
    <input type="text"
           onChange={(e) => {
             dispatch(getUsers(e.target.value))
           }}/>
  </>
}
export default Seach;