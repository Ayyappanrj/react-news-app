import React, { useState } from "react";
import Header from "../../Components/Main/Header";
import Footer from "../../Components/Main/Footer";
import BreadCrumb from "../../Components/Main/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { ApiEndPoints } from "../../Constants/ApiEndPoints";
import { instance } from "../../Services/Service";
import { toast } from 'react-toastify';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const navigate = useNavigate();

    const validate = () => {
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setPasswordConfirmError("");
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{8,})");
        var mailformat = /(^\w.*@\w+\.\w)/;
        if (!name) {
            setNameError("Email ID cannot be empty");
        }
        if (!email) {
            setEmailError("Email ID cannot be empty");
        }
        else if(mailformat.test(email) === false) 
        {
            setEmailError("Enter Valid Email");
        }
        if (!password) {
            setPasswordError("Password cannot be blank");
        }
        else if(password.length < 8) {
            setPasswordError("Password should be 8 characters");
        }
        else if(!strongRegex.test(password)) {
            setPasswordError("Use special character, number and capital letter");
        }
        if(password != confirmPassword) {
            console.log(password, confirmPassword, 'data')
            setPasswordConfirmError("Password and Confirm password does not match");
        }
        
        if (nameError || emailError || passwordError || passwordConfirmError) {
            return false;
        } 
        return true;
    }
 
    const handleSubmit = () => {
        const isValid = validate();
        if(isValid) {
            let formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', confirmPassword);
            const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            }
            instance.post(ApiEndPoints.registerUser, formData, config)
            .then((res: any) => {
                if (res.status === 201) {
                    navigate("/signin");
                    toast.success(res?.data?.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });
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
        if(name == "name") {
            setName(value);
        } else if(name == "email") {
            setEmail(value);
        } else if(name == "password") {
            setPassword(value);
        } else if(name == "confirmpassword") {
            setConfirmPassword(value);
        }
    }

    return (
        <>
            <BreadCrumb pagename="Sign Up" link="signup" />
            <div className="register-form-area">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="register-form text-center">

            <div className="register-heading">
            <span>Sign Up</span>
            <p>Create your account to get full access</p>
            </div>

            <div className="input-box">
                <div className="single-input-fields">
                    <label>User name</label>
                    <input type="text" name="name" placeholder="Enter full name" onChange={handleChange} value={name} />
                    { nameError != "" && <p className="error">{nameError}</p> }
                </div>
                <div className="single-input-fields">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} value={email} />
                    { emailError != "" && <p className="error">{emailError}</p> }
                </div>
                <div className="single-input-fields">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} value={password} />
                    { passwordError != "" && <p className="error">{passwordError}</p> }
                </div>
                <div className="single-input-fields">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} value={confirmPassword} />
                    { passwordConfirmError != "" && <p className="error">{passwordConfirmError}</p> }
                </div>
            </div>

            <div className="register-footer">
            <p> Already have an account? <Link to="/signin"> Login</Link> here</p>
            <button className="btn" onClick={handleSubmit}>Sign Up</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default SignUp;