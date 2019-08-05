import React from 'react';

import Header from '../Header/Header';

import './App.css';
import FooterInfo from '../FooterInfo/FooterInfo';
import Main from '../Main/Main';

function ToDoApp() {
    return (<>
        <section className="todoapp">
            <Header />
            <Main />
        </section>
        <FooterInfo />
    </>)
}


export default ToDoApp;