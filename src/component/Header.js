import React from 'react';
import imaging from '../images/todo.jpg';

const Header = () => {
    return (
        <div className="header">
            <h1>Todos List</h1>
            <img src={imaging} alt="todo" className="image-css"/>
        </div>
    );
}

export default Header;