import { createStore } from "redux";

import data from "../data.json";
import reducer from "./reducer";

const initialState = {
    data,
    showModal: false,
    showAddCmts: false
};

function configureStore (state = initialState) {
    return createStore(reducer, initialState);
}

export default configureStore;
