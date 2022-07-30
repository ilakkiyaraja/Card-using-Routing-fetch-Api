import "./App.css";
import React from "react";
import "antd/dist/antd.css";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Layout from "./Layout";
import Createpost from "./Createpost";

import { Routes, Route } from "react-router-dom";

import "antd/dist/antd.css";

import Users from "./Users";
import Posts from "./Posts";

import Userprofile from "./Userprofile";
import Postprofile from "./Postprofile";
import Createuser from "./Createuser";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Userprofile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Postprofile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createuser" element={<Createuser />} />
        <Route path="/createpost" element={<Createpost />} />

        <Route element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
