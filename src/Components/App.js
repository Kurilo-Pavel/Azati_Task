import Search from "./Search";
import Field from "./Field";
import Checkbox from "./Checkbox";
import {useDispatch} from "react-redux";
import {targetHTML, targetJava, targetJS, targetPHP, targetRepeat} from "./store/usersSlice";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GitHubPage from "./GitHubPage";

function App() {
  const dispatch = useDispatch();
  return (
    <Router>
      <Routes>
        <Route path="/azati" element={<GitHubPage/>}/>

        <Route path="/azati_task" element={

          <div className="text-center">
            <Search/>
            <Checkbox label="No repeat"
                      onChange={(e) => {
                        dispatch(targetRepeat(e.target.checked))
                      }}
            />
            <Checkbox label="Java"
                      onChange={(e) => {
                        dispatch(targetJava(e.target.checked ? "Java" : false))
                      }}/>
            <Checkbox label="HTML"
                      onChange={(e) => {
                        dispatch(targetHTML(e.target.checked ? "HTML" : false))
                      }}/>
            <Checkbox label="PHP"
                      onChange={(e) => {
                        dispatch(targetPHP(e.target.checked ? "PHP" : false))
                      }}/>
            <Checkbox label="JavaScript"
                      onChange={(e) => {
                        dispatch(targetJS(e.target.checked ? "JavaScript" : false))
                      }}/>
            <Field/>
          </div>}/>
      </Routes>
    </Router>
  );
}

export default App;
