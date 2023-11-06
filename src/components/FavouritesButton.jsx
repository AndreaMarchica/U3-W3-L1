import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FavouriteButton = () => {
  return (
    <Link to="/favourites">
      <Button type="button" variant="primary">
        FAVOURITES
      </Button>
    </Link>
  );
};
export default FavouriteButton;
