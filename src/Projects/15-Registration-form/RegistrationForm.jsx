import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Alert from "../components/Alert";

function RegistrationForm() {
  let inputName = useRef(null);
  let inputEmail = useRef(null);
  let inputPassword = useRef(null);

  const handleNameChange = (e) => {
    setValues({ ...values, user_name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.user_name) {
      inputName.current.focus();
    } else if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.password) {
      inputPassword.current.focus();
    }
    if (values.user_name && values.email && values.password ) {
      setValid(true)
    }
    setSubmit(true);
  };

  const [values, setValues] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false)

  useEffect(() => {
    inputName.current.focus();
  }, []);

  return (
    <div className="m-auto flex justify-center self-center">
      { submit && valid ? (<div className="flex p-auto flex-col m-auto justify-center self-center"><Alert
        type={"bg-green-500 mt-8 rounded-2xl text-3xl text-white p-4"}
        message={"Registration was successfull"}
        delay={true}
        delayTime={5000}
      />

      <Title text={`Welcome ${values.user_name} `} classes={"text-center text-6xl my-16"} /></div>)
      :

      <div className="flex flex-col p-4 justify-between self-center">
        <Title text={"RegistrationForm"} />
        <form className="flex flex-col gap-8 text-2xl" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              ref={inputName}
              value={values.user_name}
              placeholder="Enter your name"
              onChange={handleNameChange}
            />
            {submit && !values.user_name ? (
              <label className="text-sm text-red-600">
                Please enter your name
              </label>
            ) : null}
          </div>
          <div>
            <input
              type="email"
              ref={inputEmail}
              value={values.email}
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
            {submit && !values.email ? (
              <label className="text-sm text-red-600">
                Please enter your email
              </label>
            ) : null}
          </div>
          <div>
            <input
              type="password"
              ref={inputPassword}
              value={values.password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
            {submit && !values.password ? (
              <label className="text-sm text-red-600">
                Please enter your password
              </label>
            ) : null}
          </div>
          <Button btnClass={"bg-purple-400 p-4 rounded-2xl"} text="Register" />
        </form>
      </div>}
    </div>
  );
}

export default RegistrationForm;
