/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AddCmts from "./components/AddComts/AddCmts";
import CardComent from "./components/CardComent/CardComent";
import Modal from "./components/modal/Modal";

import data from "./data.json";

function App () {
    const comts = useSelector((state) => state.data.comments);
    return (
        <div className="App">
            {comts.map(item => <CardComent key={item.id} comment={item}/>)}

            <AddCmts/>
        </div>
    );
}

export default App;
