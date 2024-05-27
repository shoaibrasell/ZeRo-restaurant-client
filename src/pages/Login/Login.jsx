import React, { useContext, useEffect, useRef, useState } from "react";
import {loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha, } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email , password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };
  return (
    <>
    <Helmet>
    <title>ZeRo | Login</title>
    </Helmet>
    </>
  );
};

export default Login;
