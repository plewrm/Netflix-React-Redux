import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./Row.css"
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from './constants/constants'
function Row(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlid] = useState('')
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlid(response.data.results[0])
      }
      else {
        console.log('Trailer not avialable')
      }
      console.log(response.data)
    })
  }

  return (
    <div className='row'>
      <h2 className='poster_title'>{props.title}</h2>
      <div className='row__posters'>
        {movies.map((item) =>
          <img onClick={() => handleMovie(item.id)}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${imageUrl}${props.isLargeRow ? item.poster_path : item.backdrop_path}`}
            alt={item.name}
            // className={props.isSmall ? 'smallPoster': 'poster'} 
            // src={`${imageUrl+obj.poster_path}`}
            // alt="posters"
             />
        )}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default Row




// import "./Row.css"
// import React, { useEffect, useState } from 'react'
// import axios from "./axios";
// import YouTube from 'react-youtube'
// import movieTrailer from "movie-trailer"
// const image_url = "http://image.tmdb.org/t/p/original/"
// const base_url = "https://api.themoviedb.org/3"
// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   // const KEY_URL = "daaba6bbe6610cf85d4f58cc1c6ac773"

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {

//       autoplay: 1,
//     },
//   }

//   // const handleClick = async (id) => {
//   //   try {
//   //     console.log(id);
//   //     const response = await axios.get(`/movie/${id}/videos?api_key=${KEY_URL}&language=en-US`);
//   //     if (response.data.results.length !== 0) {
//   //       setTrailerUrl(response.data.results[0]);
//   //     } else {
//   //       console.log('Trailer not available');
//   //     }
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   // Error in this function and error is No TMDB Movie found with that search query, try searching https://www.themoviedb.org/search?query= to verify one exists
//    const handleClick =(movie)=>{
//     if(trailerUrl){
//       setTrailerUrl("")
//     }else{
//       movieTrailer(movie?.name || "")
//       .then((url)=>{
//         const urlParams = new URLSearchParams (new URL(url).search);
//         setTrailerUrl(urlParams.get("v"));
//       })
//       .catch((error)=>console.log(error));
//     }
//    }

//   console.log(movies);

//   return (
//     <div className='row'>
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {movies.map(
//           (movie) =>
//           (
//             //   (isLargeRow && movie.poster_path)||
//             // (!isLargeRow && movie.backdrop_path)
//             // ) && (
//             <img
//               onClick={() => handleClick(movie)}
//               className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//               key={movie.id}
//               src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//               alt={movie.name} />
//           )
//         )}
//       </div>
//       {trailerUrl && <YouTube vedioId={trailerUrl} opts={opts} />}
//     </div>
//   )
// }

// export default Row





