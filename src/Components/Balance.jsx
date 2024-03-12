import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Balance = ({balance, users, onUpdateBal, onTransaction }) => {
  const [amt, setAmt] = useState(0);
  const [sub, setSubAmt] = useState(0);
  const { username } = useParams();

  //Load balance from localStorage on coponent mount
  useEffect(() => {
    setAmt(0);
    setSubAmt(0);
  }, [username]);

  const handleAddBal = () => {
      const newBal = balance + parseFloat(amt);
      onUpdateBal(newBal); //new amt set in Balance
      alert(`$${amt} Credited`);
      setAmt(0);
  };

  const handleTransaction = () => {
    if (sub > balance) {
      alert("Transaction unsuccessful. Insufficient Balance..");
    } else {
        const receiverUsrnm = prompt("Enter receiver's username: ");
        if(!receiverUsrnm){
            alert("Receiver not found!");
            return;
        }
        const senderNewBal = users[username].balance - parseFloat(sub);
        const receiverNewBal = users[username].balance + parseFloat(sub);
        onTransaction(username, receiverUsrnm, parseFloat(sub));
        onUpdateBal(username, senderNewBal);
        onUpdateBal(receiverUsrnm, receiverNewBal);
        alert(`$${sub} Transferred to ${receiverUsrnm}`);
        localStorage.setItem("balance", newBal);
        setSubAmt(0);
      }
  };

  return (
    <div className="bg-green-900 rounded-md p-5">
      <h2 className="text-2xl font-semibold mb-5">Balance: ${balance}</h2>
      <form className="text-lg text-center p-2">
        <input
          type="number"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
          placeholder="Enter amount"
          className="px-4 py-2 text-green-300 bg-transparent w-full outline-none border-b-2 rounded"
        />
        <button
          onClick={handleAddBal}
          className="px-4 py-2 my-3 bg-green-950 rounded"
        >
          Add Balance
        </button>
      </form>
      <div className="text-lg text-center ">
        <input
          type="number"
          value={sub}
          onChange={(e) => setSubAmt(e.target.value)}
          placeholder="Enter Transaction amount"
          className="px-4 text-green-300 py-2 bg-transparent w-full outline-none border-b-2 rounded"
        />
        <button
          onClick={handleTransaction}
          className="px-4 py-2 my-3 bg-green-950 rounded"
        >
          Transfer Money
        </button>
      </div>
    </div>
  );
};
