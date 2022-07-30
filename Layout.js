import React from "react";
import { Link } from "react-router-dom";
import Icon, {
  HomeOutlined,
  UserSwitchOutlined,
  DatabaseOutlined,
  ContactsOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

function Layout(props) {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3  shadow w-20%">
        <div className="space-y-3">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <nav>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link
                    to="/"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <HomeOutlined style={{ fontSize: "25px" }} />
                    <span className="text-1xl font-bold">Home</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="/posts"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <DatabaseOutlined style={{ fontSize: "25px" }} />

                    <span className="text-1xl font-bold">Posts</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="/users"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <UserSwitchOutlined style={{ fontSize: "25px" }} />

                    <span className="text-1xl font-bold">Users</span>
                  </Link>
                </li>

                <li className="rounded-sm">
                  <Link
                    to="/About"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <WindowsOutlined style={{ fontSize: "25px" }} />

                    <span className="text-1xl font-bold">About</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="/Contact"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <ContactsOutlined style={{ fontSize: "25px" }} />

                    <span className="text-1xl font-bold">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-12  w-80%">{props.children}</div>
    </div>
  );
}

export default Layout;
