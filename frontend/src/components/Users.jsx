import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Users Component
export const Users = () => {
  const [users, setUsers] = useState([]); // List of users
  const [filter, setFilter] = useState(""); // Filter input
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
    

      if (!token) {
        navigate("/signin");
        return;
      }

      const response = await axios.get(`http://localhost:3000/user/bulk?filter=${filter}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const res = response.data.users; // Extract users from response
      console.log(res);
      

      // Check if the response is an array and contains users
      if (Array.isArray(res) && res.length > 0) {
        setUsers(res); // Set the fetched users in state
      } else {
        setUsers([]); // Clear the user list if no users are found
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filter]); 

  return (
    <div>
      <div className="text-2xl text-black-500 font-bold p-[30px]">Users</div>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-2 py-1 border rounded border-slate-200"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Update filter on input change
      />
      <div>
        {users && users.length > 0 ? (
          users.map((user) => (
            <User key={user._id} user={user} />
          ))
        ) : (
          <div>No users found.</div>
        )}
      </div>
    </div>
  );
};

// User Component to display individual users
function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName ? user.firstName[0] : "?"}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>{user.firstName} {user.lastName}</div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}

// Button Component
function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
}
