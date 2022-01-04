/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import "./App.css";
import AddCmts from "./components/AddComts/AddCmts";
import CardComent from "./components/CardComent/CardComent";

function App () {
    const comts = useSelector((state) => state.comments);
    console.log(comts);

    return (
        <div className="App">
            {comts.map(item => <CardComent key={item.id} comment={item}/>)}
            <AddCmts/>
        </div>
    );
}

export default App;
