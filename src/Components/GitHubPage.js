import {useSelector} from "react-redux";


const GitHubPage = () => {
  const page = useSelector((state) => state.users.page);
  const user = useSelector((state) => state.users.user);

  return (
    <div className="h-full w-full absolute">

      <iframe
        src={page}
        className="w-full h-[80%]"/>
      <div className="bg-red-300 h-[20%] text-center">
        <p>watchers: {user.watchers}</p>
        <p>forks: {user.forks}</p>
      </div>
    </div>
  )
}
export default GitHubPage;