import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import TeachersStore from "./store/TeachersStore";
import NewsStore from "./store/NewsStore";



export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        teachers: new TeachersStore(),
        news: new NewsStore()
    }}>
        <App />
    </Context.Provider>,


  document.getElementById('root')
);


reportWebVitals();
