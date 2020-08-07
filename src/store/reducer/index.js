// 合并reducers
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../history";
import students from "./student";
import counter from "./counter";

export default combineReducers({
  router: connectRouter(history),
  students,
  counter,
});
