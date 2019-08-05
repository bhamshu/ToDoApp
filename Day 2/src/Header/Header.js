import React from 'react';
import './Header.css';

const Header = () => (<header className="header">
        <h1 >todos</h1>
        <input className="new-todo"
            placeholder="What needs to be done?"
        />
    </header>);

export default Header;