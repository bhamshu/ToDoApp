import React from 'react';
import './Main.css';
import { MainFooter } from '../MainFooter/MainFooter';
import { ToDoList } from '../ToDo/ToDoList';

const Main = () => (
    <>
        <ToDoList />
        <MainFooter />
    </>);

export default Main;