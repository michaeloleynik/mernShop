import React, {useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import classes from './styles/AuthPage.module.css';

export const AuthPage = () => {
  const {loading, error, request} = useHttp();

  const [form, setForm] = useState({email: '', password: ''});

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log(data.message);
    } catch (e) {}
    
  }
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Mern Shop</h1>

        <div className={classes.Card + " card red lighten-1"}>
          <div className="card-content white-text">
            <span className="card-title">Authification</span>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input 
                name="email"
                id="email" 
                type="email"
                value={form.email} 
                className={classes.labelInput + " validate"} 
                onChange={changeHandler}
              />

              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row white-text">
            <div className="input-field col s12">
              <input
                name="password" 
                id="password"
                type="password"
                value={form.password} 
                className={classes.labelInput + " validate"} 
                onChange={changeHandler}
              />

              <label htmlFor="password">Password</label>
            </div>
          </div>
      
          <div className="card-action">
            <button 
              className={classes.firstBtn + " btn cyan lighten-2 black-text"}
            >
              Login
            </button>

            <button 
              className="btn cyan lighten-2 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}