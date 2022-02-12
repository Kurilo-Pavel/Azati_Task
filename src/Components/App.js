import Seach from "./Seach";
import Field from "./Field";
import Checkbox from "./Checkbox";
import {useDispatch} from "react-redux";
import {targetHTML, targetJava, targetJS, targetPHP, targetRepeat} from "./store/usersSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <Seach/>
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
    </div>
  );
}

export default App;
