import React, { useContext, useState } from "react";
import { button } from "./Profile";
import { MainContext } from "../../hooks/context/mainContext";

const label = "text-[1.2rem]";
const input =
  "border-2 border-blue-600 hover:border-blue-900 focus:border-blue-900 rounded-[6px] focus:ring-0 focus:outline-none";
const divfeld = "flex justify-between";

const Register = () => {
  const [userState, userDispatch] = useContext(MainContext);
  const [userData, setUserData] = useState({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
  });

  const handleRegister = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userDispatch({ type: "REGISTER", payload: {user: {...userData} } });
  };

  return (
    <div className="">
      <form
        className="border-2 flex flex-col gap-5 w-125 py-5 px-10 shadow-lg shadow-gray-700"
        action="Register"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className={divfeld}>
          <label className={label} htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={input}
            onChange={handleRegister}
          />
        </div>
        <div className={divfeld}>
          <label className={label} htmlFor="firstName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={input}
            onChange={handleRegister}
          />
        </div>
        <div className={divfeld}>
          <label className={label} htmlFor="firstName">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            required
            className={input}
            onChange={handleRegister}
          />
        </div>
        <div className={divfeld}>
          <label className={label} htmlFor="firstName">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={input}
            onChange={handleRegister}
          />
        </div>
        <div className={divfeld}>
          <label className={label} htmlFor="firstName">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className={input}
            onChange={handleRegister}
          />
        </div>
        <button className={`${button} self-end`} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
