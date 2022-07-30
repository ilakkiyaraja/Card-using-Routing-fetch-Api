import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

function User(props) {
  return (
    <div>
      <Link to={`/users/${props.data.id}`}>
        <li className="list-none">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="rounded-full w-1/3  mx-auto mt-2  "
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              alt="imahe"
            ></img>

            <div className="px-6 py-4">
              <div className="font-bold text-center text-2xl italic hover: text-rose-400">
                {props.data.id}
              </div>
              <div className="  text -2xl font-light text-center font-serif text-cyan-600 ">
                {props.data.name}
              </div>
              <div className=" text-center font-light text-1xl font-serif text-cyan-600">
                {props.data.email}
              </div>
              <div className=" text-center font-light text-1xl font-serif text-cyan-600">
                {props.data.gender}
              </div>
              <div className=" text-center font-light text-1xl font-serif text-cyan-600">
                {props.data.status}
              </div>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}
export default User;
