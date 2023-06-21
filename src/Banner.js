import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log("see here the list of movies", movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url('https://wallpapercave.com/wp/wp3321103.jpg')`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.origional_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Play List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview,
            150
          )}
        </h1>
      </div>
      {/* <p>    
         `This is a test description! You may now can do for the occasion for
          watch movies and anywhere and any time so many people can watch and
          enjoy those moments with theire coluges and friend's. npm install -g firebase-tools


const firebaseConfig = {
  apiKey: "AIzaSyAigMgh6Y0eYU7N9vjRk4xtHrnEY9fQY30",
  authDomain: "netflix-b7614.firebaseapp.com",
  projectId: "netflix-b7614",
  storageBucket: "netflix-b7614.appspot.com",
  messagingSenderId: "530464234374",
  appId: "1:530464234374:web:c843981abf69bb7f91ea07"
};`
</p> */}
      <div className="banner--fadebottom" />
    </header>
  );
};

export default Banner;
