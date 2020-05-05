import React from 'react';

export default function UserProfile(props) {

    const logout = () => {
        global.auth.logout();
        props.close('logout');
    };

    
    return (
        <div className="user-profile">
            <p className="title has-text-centered">Profile</p>
            <fieldset disabled>
                <div className="field">
                    <div className="control">
                        <label className="label">Nickname</label>
                        <input className="input" type="text" defaultValue={props.user.nickname}/>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Email</label>
                        <input className="input" type="text" defaultValue={props.user.email}/>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Type</label>
                        <input className="input" type="text" defaultValue={props.user.type === 1 ? '管理員' : '一般會員'}/>
                    </div>
                </div>
            </fieldset>


                <br />

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-danger" type="button" onClick={logout}>Logout</button>
                    </div>
                    <div className="control">
                        <button className="button" type="button" onClick={() => {props.close();}}>Cancel</button>
                    </div>
                </div>
        </div>
    );
};