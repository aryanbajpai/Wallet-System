import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import img from "./Images/images.png";
import { Balance } from "./Balance";

export const Dashboard = () => {
  const { username } = useParams();
  const [user, setUser] = useState({ nm: "", username: "", email: "", ph:""});
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = storedUsers.find( (u) => u.username === username);
    if(currentUser){
       setUser(currentUser);
       setBalance(currentUser.balance || 0);
    }
  }, [username]);

  const updateBal = (newBal) => {
    setBalance(newBal);
    //Update balance in localStorage
    localStorage.setItem('users', JSON.stringify(
        JSON.parse(localStorage.getItem('users')).map( u => {
          if (u.username === username) {
            return { ...u, balance: newBal };
          }
          return u;
        })
    ));
  };

  const handleTransaction = (amt) => {
    if (amt > balance) {
      alert("Transaction unsuccessful. Insufficient Balance.");
    } else {
      const receiverUsername = prompt("Enter receiver's username:");
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const senderIndex = storedUsers.findIndex(user => user.username === username);
      const receiverIndex = storedUsers.findIndex(user => user.username === receiverUsername);
      
      if (receiverIndex === -1) {
        alert("Receiver not found.");
        return;
      }
  
      const senderNewBal = balance - parseFloat(amt);
      const receiverNewBal = storedUsers[receiverIndex].balance + parseFloat(amt);
      if (senderNewBal < 0) {
        alert("Transaction unsuccessful. Insufficient Balance.");
        return;
      }
  
      // Update balance for the sender and receiver
      storedUsers[senderIndex].balance = senderNewBal;
      storedUsers[receiverIndex].balance = receiverNewBal;
      
      // Update local storage with the modified user data
      localStorage.setItem("users", JSON.stringify(storedUsers));
  
      // Update the state to reflect the changes
      setBalance(senderNewBal);
  
      alert(`$${amt} Transferred to ${receiverUsername}`);
    }
  };
  
  

  return (
    <div className="lg:grid grid-cols-[72%_minmax(28%,_1fr)] h-full">
      <div className="w-full h-[100%] border-r-2 p-2">
        <h1 className="mx-4 my-2 text-[42px] font-bold">NAME : {user.nm}</h1>
        <div className="h-auto lg:flex gap-10 m-7">
          <img src={img} className="rounded pb-2" />
          <div className="text-xl lg:w-[79.5%] flex gap-4 my-auto border-2 border-black p-5 rounded-lg bg-green-900">
            <div className="text-green-300 font-semibold">
              <p className="my-2">USERNAME </p>
              <p className="my-2">E-MAIL </p>
              <p className="my-2">CONTACT No. </p>
              <p className="my-2">
                BALANCE
              </p>
            </div>
            <div className="font-semibold">
              <p className="my-2"> : {user.username} </p>
              <p className="my-2"> : {user.email} </p>
              <p className="my-2"> : {user.ph} </p>
              <p className="my-2"> : ${balance}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 h-[90%]">
        <h2 className="text-center text-3xl font-bold mb-5 border-b-2 border-black rounded">DASHBOARD</h2>
        <Balance balance={balance} onUpdateBal={updateBal} onTransaction={handleTransaction} />
      </div>
    </div>
  );
};
