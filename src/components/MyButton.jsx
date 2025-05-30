import React from "react";
import Admin from './Admin';
import LoginForm from './LoginForm';

export default function MyButton(props) {
   
    return (
        <>  <div>
            <button onClick={props.onClick}>
                Clicked {props.count} times </button>
        </div>
        </>
    )
}
