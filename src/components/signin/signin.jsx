import React, {Fragment} from "react"
import './signin.css'
import logo from "../../bootstrap-logo.svg" //pemanggilan image yg file svg, bisa langsung diimport
import { Button } from '../../components/Button'

export const SignIn = () => {
  return(
    // Catatan convert ke html jsx
    /**
     * 1. class menjadi className
     * 2. beberapa element yang butuh closing tag (img, input, hr, br)
     * 3. jsx tidak bisa membaca 2 element sekaligus, harus dibungkus
     * 4. for diganti htmlFor
     */
    <Fragment>
    <div className="body text-center">
      <main className="form-signin">
        <form>
          {/* Komentar */}
          <img className="mb-4" src={logo} alt="" width="72" height="57"/>
          <h1 className="h3 mfwb-3 -normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>

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
           
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          {/*reusable component*/}
          <Button title={"Submit"}/> 
          {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button> */}
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </div>
    <div className="div kedua">

    </div>
    </Fragment>
  )
}