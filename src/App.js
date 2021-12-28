/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Comment from "./components/coment/Comment";

import data from "./data.json";

function App () {
    const [comts, setComts] = useState(data);
    console.log(comts);
    return (
        <div className="App">
            {comts.comments.map(item => <Comment key={item.id} comment={item}/>)}
        </div>
    );
}

export default App;
