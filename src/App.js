/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import AddCmts from "./components/AddComts/AddCmts";
import CardComent from "./components/CardComent/CardComent";

import data from "./data.json";

function App () {
    const [comts, setComts] = useState(data);
    console.log(comts);
    return (
        <div className="App">
            {comts.comments.map(item => <CardComent key={item.id} comment={item}/>)}
            <AddCmts user={comts.currentUser}/>
        </div>
    );
}

export default App;
