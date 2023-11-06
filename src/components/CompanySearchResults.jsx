import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import FavouriteButton from "./FavouritesButton";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>{" "}
          <Button
            className="d-flex align-items-center mb-3"
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVOURITES", // il tipo è a vostra scelta, ricordatevelo e dategli un nome "parlante"!
                payload: params.company, // aggiungo anche come payload il libro da mettere nel carrello, altrimenti
                // come farebbe il reducer a capire quale dei libri è quello giusto? :(
              });
            }}
          >
            <span className="me-2">ADD COMPANY TO FAVOURITES</span>
          </Button>
          <FavouriteButton></FavouriteButton>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
