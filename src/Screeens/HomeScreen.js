import React from "react";
import "./HomeScreen.css";
import Nav from "../Partials/Nav";
import Banner from "../UI/Banner";
import Row from "../Partials/Row";
import requests from "../api/Requests";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGIONAL'S"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
       <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title=" ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="DOCCUMENTARIES "
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
