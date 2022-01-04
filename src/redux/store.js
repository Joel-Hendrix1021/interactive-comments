import { createStore } from "redux";

import data from "../data.json";
import reducer from "./reducer";

const initialState = {
    currentUser: data.currentUser,
    comments: data.comments
};

function configureStore (state = initialState) {
    return createStore(reducer, initialState);
}

export default configureStore;
