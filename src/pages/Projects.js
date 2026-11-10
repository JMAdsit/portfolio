import { Row, Col } from "react-bootstrap";
import PromoCard from "../components/PromoCard";

function Projects() {

    return (
        <div className="content">
            <title>Jeremiah Adsit | Projects</title>
            <Row>
                <Col xs={12} md={6}>
                    <PromoCard 
                    // imageUrl={} 
                    textBody={"Bup bup"} />
                </Col>
                <Col xs={12} md={6}>
                    <PromoCard 
                    // imageUrl={} 
                    textBody={"Bup bup"} />
                </Col>
                <Col xs={12} md={6}>
                    <PromoCard 
                    // imageUrl={} 
                    textBody={"Bup bup"} />
                </Col>
            </Row>
        </div>
    );
}

export default Projects;