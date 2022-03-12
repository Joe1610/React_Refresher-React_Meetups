import { useContext } from "react";

import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MeetupItem.module.css";

function MeetupItem({ id, image, title, address, description }) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorite({
        id,
        title,
        description,
        image,
        address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
