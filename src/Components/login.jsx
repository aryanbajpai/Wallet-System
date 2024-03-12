import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [logData, setLogData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData( (preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users)
    const findUser = users.find(
      (user) => user.username === logData.username && user.password === logData.password
    );

    if (findUser) {
        alert("Logged In SUCCESSFULLY...");
        navigate(`/dashboard/${logData.username}`);
    } else {
        alert("Invalid Username or Password...");
    }
  };

  return (
    <div className="h-screen overflow-hidden">
        <div className="border rounded-md bg-green-900 p-3 w-[500px] m-auto my-[13%] lg:my-[6%]">
      <h2 className="text-center text-2xl font-bold">LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="py-5 px-3 m-auto">
          <label className="text-lg font-semibold">Username : </label>
          <input
            type="text"
            name="username"
            value={logData.username}
            onChange={handleChange}
            placeholder="Enter your Username"
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="py-5 px-3 m-auto">
          <label className="text-lg font-semibold">Password : </label>
          <input
            type="password"
            name="password"
            value={logData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="text-center px-3 py-2">
          <input
            type="submit"
            className="border px-3 py-2 rounded bg-white cursor-pointer text-green-700 text-xl font-semibold"
            value={"Login"}
          />
        </div>
      </form>
      
      <div className="text-center">
          <p>
            Don't have an account?{' '}
            <Link to='/register' className='underline hover:text-green-400'>
                Register here
            </Link>
          </p>
      </div>
    </div>
    </div>
  );
};
