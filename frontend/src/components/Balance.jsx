import React, { useEffect, useState } from 'react'

export const Balance = () => {
    const authHeader = window.localStorage.getItem('Authorization')
    const headers = {
        'Authorization':authHeader
    }
    const [balance,setBalance] =useState("");
    useEffect(() => {
        // Corrected syntax here
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/v1/account/balance', { headers });
            setBalance(response.data.balance);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, []); 
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}