import React, { useState, useEffect } from 'react'
import { Appbar } from '../components/Appbar.jsx'
import { Balance } from '../components/Balance.jsx'
import { Users } from '../components/Users.jsx'
import axios from 'axios'

export const Dashboard = () => {

  const [balance, setBalance] = useState("")

  const userbalance = async () => {
    try {
      const response = await axios.get("http://localhost:3000/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      console.log(response);

      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }

  useEffect(() => {
    userbalance();
  }, []);

  return (
    <>
      <Appbar />
      <Balance value={balance} />
      <Users />
    </>
  )
}

export default Dashboard;
