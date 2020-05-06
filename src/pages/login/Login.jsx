import React from 'react';
import axios from 'commons/axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Login(props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async data => {
        console.log(data);        //獲取表單數據

        // 登入邏輯
        try{
            const { email, password } = data
            const res = await axios.post('/auth/login', { email, password });
            const jwToken = res.data;
            console.log(jwToken);
            global.auth.setToken(jwToken);
            toast.success('Login success')
            props.history.push('/');   //跳轉到首頁
        } catch (error) {
            console.log(error.response.data);
            const message = error.response.data.message;
            toast.error(message);
        }
    };

    return(
        <div className="login-wrapper">
            <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
                <div class="field">
                    <label className="label">信箱</label>
                    <div className="control">
                        <input
                            className={`input ${errors.email && 'is-danger'}`}  //若無輸入
                            type="input"
                            placeholder="Email"
                            name="email"
                            ref={register({
                                required: '必填',
                                pattern: {
                                    value: /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                                    message: '無效信箱'
                                }
                            })}
                        />
                        {
                            errors.email &&<p className="helper has-text-danger">
                                {errors.email.message}
                            </p>
                        }
                    </div>
                </div>
            <div class="field">
                <label className="label">密碼</label>
                <div className="control">
                    <input
                        className={`input ${errors.password && 'is-danger'}`}  //若無輸入
                        type="password"
                        placeholder="Password"
                        name="password"
                        ref={register({
                            required: '必填',
                                minLength: {
                                    value: 3,
                                    message: '密碼不小於3位數'
                                }
                        })}
                    />
                    {
                            errors.password &&<p className="helper has-text-danger">
                                {errors.password.message}
                            </p>
                        }
                </div>
            </div>
            <div  className="control">
                <button className="button is-fullwidth is-primary">Login</button>
            </div>
        </form>
    </div>  
    )
}


