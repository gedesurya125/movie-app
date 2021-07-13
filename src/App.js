import { Fragment } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import './App.css';
import logo from './assets/img/Bootstrap_logo.svg.png'
function App() {


  const inputs =[
    {id: 'floatingInput', type:'email', placeholder:'name@example.com', htmlFor:'floatingInput', content: 'Email address'},
    {id: 'floatingPassword', type:'password', placeholder:'Password', htmlFor:'floatingPassword', content: 'Password'},
    {id: 'floatingUserName', type:'email', placeholder:'Username', htmlFor:'floatingUsername', content: 'Username'},
    {id: 'floatingAddress', type:'email', placeholder:'Address', htmlFor:'floatingAddress', content: 'Address'},

  ]

  const rendInput = inputs.map((input, index) => <Input key={index} {...input}/>);

  return (

    <Fragment>
      <div className="body text-center">
        <main className="form-signin">
          <form>
            {/* Komentar */}
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mfwb-3 -normal">Please sign in</h1>

            {/* <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div> */}

            {rendInput}

            {/**
           * Exercise
           * 1. Buat komponen form dengan props sesuai yang disebutkan di bawah
           * 
           * Props Dari Form yg Diperlukan
           * 1. props type (email, password)
           * 2. props id (floatingInput, floatinPassword)
           * 3. props placeholder (name@example.com, password)
           * 4. props htmlFor (floatingInput, floatinPassword)
           * 5. props konten ("Email Address", "Password")
           */}


            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            {/*reusable component*/}
            <Button title={"Submit"} />
            {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button> */}
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
      <div className="div kedua">

      </div>
    </Fragment>

  );
}

export default App;
