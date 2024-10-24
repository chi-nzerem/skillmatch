import React, { useEffect } from "react";
import fetchData from "../helper/fetchData";
import { Link } from "react-router-dom";

const Home = () => {
  //example of api request
  const apiRequest = async () => {
    var email = "example@gmail.com";
    var password = "1234";
    const apiUrl = import.meta.env.VITE_API_URL + "/user/signup";
    const data = await fetchData(apiUrl, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
      });
    console.log(data);
    };

  useEffect(() => {
    apiRequest();
  }, []);

  return (
          <div>
          <div className=" text-9xl text-[red]  "> Home Page</div>
          <Link to="/landing">landing</Link>

          </div>
        );
};

export default Home;
