import ContactForm from "../components/ContactForm";
import { Card, Row, Col } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";

function ContactMe () {

    return (
        <div className="content">
            <title>Jeremiah Adsit | Contact</title>
            <Row>
                <Col xs={12} md={6}>
                    <Card className="card my-3 m-auto">
                        <div className="card-header">
                            <h2 className="card-title text-center">
                                {"Contact Me"}
                            </h2>
                        </div>
                                <ContactForm />
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="card my-3 m-auto">
                        <div className="card-header">
                            <h2 className="card-title text-center">
                                {"Contact Info"}
                            </h2>
                        </div>
                        <div className="contactInfo">
                            <a 
                            href="mailto:jeremiah.adsit@gmail.com">
                                <TfiEmail /> jeremiah.adsit@gmail.com
                            </a>
                            <a 
                            href="https://www.linkedin.com/in/jeremiah-adsit/">
                                <FaLinkedin /> Linkedin
                            </a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ContactMe;