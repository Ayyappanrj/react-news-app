import React, { useState } from "react";
import Header from "../../Components/Main/Header";
import Footer from "../../Components/Main/Footer";
import BreadCrumb from "../../Components/Main/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { ApiEndPoints } from "../../Constants/ApiEndPoints";
import { instance } from "../../Services/Service";
import { toast } from 'react-toastify';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validate = () => {
        setEmailError("");
        setPasswordError("");
        if (!email) {
            setEmailError("Email ID cannot be empty");
        }
        if (!password) {
            setPasswordError("Password cannot be blank");
        }
        
        if (emailError || passwordError) {
            return false;
        } 
        return true;
    }
 
    const handleSubmit = () => {
        const isValid = validate();
        if(isValid) {
            let formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            }
            instance.post(ApiEndPoints.loginUser, formData, config)
            .then((res: any) => {
                console.log(res)
                if (res.status === 200) {
                    toast.success(res?.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });
                    navigate("/home");
                    localStorage.setItem(
                      "INNOSCRIPTA_LOGIN",
                      JSON.stringify(res?.access_token)
                    );
                } else {
                    toast.error(res?.data?.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });
                }
            }).catch((err: any) => {
                toast.error(err?.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            });
        }
    }

    const handleChange = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name == "email") {
            setEmail(value);
        } else if(name == "password") {
            setPassword(value);
        }
    }

    return (
    <>
        <BreadCrumb pagename="Sign In" link="signin" />

        <div className="login-form-area">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7 col-md-10">
        <div className="login-form">

        <div className="login-heading">
        <span>Login</span>
        <p>Enter Login details to get access</p>
        </div>

        <div className="input-box">
        <div className="single-input-fields">
        <label>Username or Email Address</label>
        <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} value={email} />
        { emailError != "" && <p className="error">{emailError}</p> }
        </div>
        <div className="single-input-fields">
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} value={password} />
        { passwordError != "" && <p className="error">{passwordError}</p> }
        </div>
        <div className="single-input-fields login-check">
        <input type="checkbox" id="fruit1" name="keep-log" />
        <label htmlFor="fruit1">Keep me logged in</label>
        <Link to="/signin" className="f-right">Forgot Password?</Link>
        </div>
        </div>

        <div className="login-footer">
        <p>Don’t have an account? <Link to="/signup">Sign Up</Link> here</p>
        <button className="btn" onClick={handleSubmit}>Login</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
    )
}

export default SignIn;