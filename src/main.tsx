import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pl";
dayjs.extend(relativeTime);
dayjs.locale("pl");

ReactDOM.render(<App />, document.getElementById("root"));
