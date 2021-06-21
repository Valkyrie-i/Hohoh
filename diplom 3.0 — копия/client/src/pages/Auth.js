import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import style from './Auth.module.css'
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration,login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isRegistration = location.pathname === REGISTRATION_ROUTE
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')

    const click = async () =>{
        try {
            let data
            if(isRegistration){
                data = await registration(email,password,name,surname)

            } else{
                data = await login(email,password)

            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            {isRegistration ?
                <form>
                    <h2>Имя</h2>
                    <input placeholder='Введите имя' value={name} onChange={e => setName(e.target.value)}/>
                    <h2>Фамилия</h2>
                    <input placeholder='Введите фамилию' value={surname} onChange={e => setSurname(e.target.value)}/>
                    <h2>Email</h2>
                    <input placeholder='Введите email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h2>Пароль</h2>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Введите пароль'/>
                </form>
                :
                <form>
                    <h2>Email</h2>
                    <input placeholder='Введите email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h2>Пароль</h2>
                    <input type='password' placeholder='Введите пароль' value={password} onChange={e => setPassword(e.target.value)}/>
                </form>
            }
            {isRegistration ?
                <Button variant={"outline-success"} onClick={click}>Зарегистрироваться</Button>
                :
                <Button variant={"outline-success"} onClick={click}>Войти</Button>
            }
            <div className={style.link}> {
                isRegistration ?
                    <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                      :

                    <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Создайте!</NavLink></div>
            }
            </div>
        </Container>

    );
});

export default Auth;