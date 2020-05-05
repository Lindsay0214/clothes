import React from 'react';


class Register extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();         //阻止默認行為
        console.log(this.state);        //獲取表單數據
        this.props.history.push('/');   //跳轉到首頁
    }

        handleChange = e => {
            console.log(e.target.value);
            console.log(e.target.name);
            this.setState({
                email: e.target.value   //受控組件 可以控制一定要大寫或字母之類
            });
        };

    render() {
        return (
        <div className="register-wrapper">
            <form className="box register-box" onSubmit={this.handleSubmit}>
                <div class="field">
                    <label className="label">註冊信箱</label>
                    <div className="control">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            <div class="field">
                <label className="label">密碼</label>
                <div className="control">
                    <input type="password" placeholder="Password" name="password" 
                    value={this.state.email}
                    onChange={this.handleChange}/>
                </div>
            </div>
            <div class="field">
                <label className="label">確認密碼</label>
                <div className="control">
                    <input type="password" placeholder="Password Check" name="password" 
                    value={this.state.email}
                    onChange={this.handleChange}/>
                </div>
            </div>
            <div  className="control">
                <button className="button is-fullwidth is-primary">Register</button>
            </div>
        </form>
    </div>            ); 
    }
}

export default Register;

