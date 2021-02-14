import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from '@components/navigation'
import { Col, Row } from 'reactstrap'
export default function About() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Row>
          <Col xs={12}>
            <h1>About Page</h1>
          </Col>
        </Row>
      </div>
    </>
  )
}