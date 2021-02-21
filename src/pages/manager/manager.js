import React from 'react';

export const Manager = ({user}) => {

    return (
        <div style={{"height":"70vh", "margin-top":"25vh", "text-align":"center"}}>
            <h1>Welcome to the manager page, {user.name} {user.lastname}.</h1>
            <h2>You're now logged in at Reuz. Enjoy our products ;)</h2>
        </div>
    )
}
export default Manager;