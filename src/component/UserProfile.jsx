import React from 'react';

export default function UserProfile(props) {

    const logout = () => {
        global.auth.logout();
        props.close('logout');
    }

    
    return (
        <div className="user-profile">
            <p className="title has-text-centered">Profile</p>
        </div>
    );
};