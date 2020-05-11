import React from 'react';
import axios from 'commons/axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


export default function Register(props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async data => {
        console.log(data);        //獲取表單數據

        // 註冊邏輯
        try{
            const { nickname, email, password } = data
            const res = await axios.post('/auth/register', { nickname, email, password, type: 0 });
            const jwToken = res.data;
            console.log(jwToken);
            global.auth.setToken(jwToken);
            toast.success('Register success');
            props.history.push('/');   //跳轉到首頁
        } catch (error) {
            console.log(error.response.data);
            const message = error.response.data.message;
            toast.error(message);
        }
    }

        console.log(errors); //無正確輸入值

        return (
        <div className="register-wrapper">
            <a href="/"><p className="back-button footer-icon-topic">返回首頁</p></a>
            <form className="box register-box" onSubmit={handleSubmit(onSubmit)}>
                <div class="field">
                    <label className="label">用戶名稱</label>
                    <div className="control">
                        <input
                            className={`input ${errors.nickname && 'is-danger'}`}
                            type="input"
                            placeholder="User Name"
                            name="nickname"
                            ref={register({
                                required: '必填',
                                pattern: {
                                    value: /^[a-zA-Z][a-zA-Z0-9]{3,15}$/,
                                    message: '4-16位英數字組成，以字母開頭'
                                }
                            })}
                        />
                        {
                            errors.nickname &&<p className="helper has-text-danger">
                                {errors.nickname.message}
                            </p>
                        }
                    </div>
                </div>

                <div class="field">
                    <label className="label">註冊信箱</label>
                    <div className="control">
                        <input
                            className={`input ${errors.email && 'is-danger'}`}
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
                                    errors.password &&
                                    <p className="helper has-text-danger">
                                        {errors.password.message}
                                    </p>
                                }
                    </div>
                </div>
            
            <div  className="control">
                <button className="button is-fullwidth is-primary">Register</button>
            </div>
        </form>
    </div>

        );

                            };