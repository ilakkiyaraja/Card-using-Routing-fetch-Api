import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import User from "./User";
import Createuser from "./Createuser";
import { useNavigate } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://gorest.co.in/public/v2/users`, {
      headers: {
        Authorization:
          "Bearer 5926e500ffec8fc2a39506e1c0505b8fe747159f6b782c1d71c2ee4adc6316c0",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  return (
    <div>
      <div>
        <button
          className="float-right p-2 rounded bg-blue-800 text-xl text-white mr-10"
          onClick={() => {
            navigate("/createuser");
          }}
        >
          Add User
        </button>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3xl:grid-cols-3 gap-5">
        {data.map((user) => (
          <User data={user} />
        ))}
      </div>
    </div>
  );
}
export default Users;
