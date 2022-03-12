import { useContext } from "react";

import FavoriteContext from "../store/favorites-context";
import MeetupList from "./../components/meetups/MeetupList";

function Favorites() {
  const favoriteContext = useContext(FavoriteContext);

  let content;

  if (!favoriteContext.totalFavorites) {
    content = <p> You got no favorites yet, Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteContext.favorites} />;
  }
  
  return (
    <section>
      <h1> My Favorites</h1>
      {content}
    </section>
  );
}
export default Favorites;
