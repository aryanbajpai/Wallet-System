import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    nm: "",
    email: "",
    ph: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('users'));
      if(storedData) {
          setUserData(storedData);
          console.log(storedData);
      }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); //Default prevented from submission
    //newUser from the new values
    const newUser = {
      username: userData.username,
      nm: userData.nm,
      email: userData.email,
      ph: userData.ph,
      password: userData.password,
      balance: 0,
    };

    //parse LocalStorage
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];

    //Adding newUser to existing users
    const updateUsers = [...existingUser, newUser];

    //Update localStrg
    localStorage.setItem("users", JSON.stringify(updateUsers));

    //Check if user name or email already exists
    const isExistingUser = existingUser.some(
      (user) =>
        user.username === newUser.username ||
        user.email === newUser.email ||
        user.ph === newUser.ph
    );
    if(isExistingUser){
        alert('Username, email or Phone no. already exists.');
        return;
    }

    console.log("New Users Details: ", newUser);
    console.log(updateUsers);

    setUserData({ username: "", nm: "", email: "", ph: "", password: "" });
    alert("User registered Successfully...");
    setRedirect(true);
  };

  //Input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  if(redirect) {
      return <Navigate to="/login"/>;
  }

  return (
    <div className="border bg-green-900 p-3 w-auto md:w-[500px] px-2 md:px-0 m-auto mt-[15px]">
      <h2 className="text-center text-2xl font-bold">Be a part of PAISA</h2>

      <form onSubmit={handleSubmit}>
        <div className="py-2 px-3 m-auto">
          <label className="text-lg font-semibold">Name : </label>
          <input
            type="text"
            name="nm"
            value={userData.nm} //Bind user
            onChange={handleChange}
            placeholder="Enter your full name..."
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="py-2 px-3 m-auto">
          <label className="text-lg font-semibold">Username : </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="Enter your full name..."
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="py-2 px-3 m-auto">
          <label className="text-lg font-semibold">E-mail : </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your full name..."
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="py-2 px-3 m-auto">
          <label className="text-lg font-semibold">Contact No. : </label>
          <input
            type="tel"
            name="ph"
            value={userData.ph}
            onChange={handleChange}
            placeholder="Enter your full name..."
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="py-2 px-3 m-auto">
          <label className="text-lg font-semibold">Password : </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your full name..."
            className="w-full my-1 px-3 py-2 text-lg outline-none bg-transparent border-b-2 rounded font-semibold text-green-300 placeholder:text-gray-300"
          />
        </div>
        <div className="text-center px-3 py-2">
          {/* <Link to={"/dashboard"}> */}
          <input
            type="submit"
            //   onClick={handleSubmit}
            className="border px-3 py-2 rounded bg-white cursor-pointer text-green-700 text-lg font-semibold"
            value={"Register"}
          />
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};
