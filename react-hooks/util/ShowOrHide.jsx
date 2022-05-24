import { useState } from "react";


const ShowOrHide = () => {
  const [shows, setShow] = useState(true);

  const toggleShows = () => {
    return setShow(!shows);
  }

  return (
    <>
      <button onClick={toggleShows}>
        {shows ? "Hide Element" : "Show Element"}
      </button>
      {shows && <div>Showing Element</div>}
    </>
  )
}

export default ShowOrHide;