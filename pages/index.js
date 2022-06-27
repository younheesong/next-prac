import { useEffect, useState } from "react";
import Seo from "../components/Seo";
const API_KEY = "01fef168465088515b14e07aa8f32453";
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);
  return (
    <div>
      <Seo title={"home"} />
      {movies.map((movie) => (
        <div key={movie.id}>
          <h4> {movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
