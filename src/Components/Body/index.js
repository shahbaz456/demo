import React from "react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./body.css";

import { ToastContainer, toast } from "react-toastify";
const api_key = "?api_key=960a2cf27538aaa362a94e274d44861d";
function Body() {
  const getcode = async () => {
    try {
      const result = await fetch("https://reqres.in/api/users?delay=3", {
        method: "GET",
      });
      const response = await result.json();

      console.log("api result=", response);
      return response;
    } catch (error) {
      console.log("err :::: ", error);
    }
  };
  const [userdata, setuserdata] = useState();
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setisLoading(true);
      let response = await getcode();
      console.log("get code res :: ", response);
      setuserdata(response?.data);
      console.log(response?.data);
      setisLoading(false);
      localStorage.setItem("userdata", JSON.stringify(response));
      let data = JSON.parse(localStorage.getItem("userdata"));
      console.log("getting data::", data);
      sessionStorage.setItem("sessionuserdata", JSON.stringify(response));

      Cookies.set("name", "shah", { expires: 7 });
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3>Top Users</h3>
      <div className="card">
        {userdata &&
          userdata.map((element) => (
            <div className="mycard">
              <img className="picture" src={element.avatar} alt="avatar" />
              <p>Email: {element.email}</p>
              <p>First Name: {element.first_name}</p>
              <p>Last Name: {element.last_name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Body;
