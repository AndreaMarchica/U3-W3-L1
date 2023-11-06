import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const FavouriteList = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3" sm={12}>
          <h1 className="display-4">Your Favourites</h1>
          <ul style={{ listStyle: "none" }}>
            {favourites.map((jobs, i) => (
              <li key={i} className="my-4">
                <Button
                  className="me-5"
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: i,
                    });
                  }}
                >
                  DELETE
                </Button>
                {jobs}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default FavouriteList;
