import { Row, Col } from "react-bootstrap";
import referrals from "../content/ReferralText";
import PromoCard from "../components/PromoCard";

function Referrals () {

    return (
        <div className="content">
            <title>Jeremiah Adsit | Referrals</title>
            <Row>
                <Col xs={12} md={6}>
                    <PromoCard
                        title={referrals.cmurray.title}
                        textBody={referrals.cmurray.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
                <Col xs={12} md={6}>
                    <PromoCard
                        title={referrals.akrumsieg.title}
                        textBody={referrals.akrumsieg.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PromoCard 
                        title={referrals.bnichols.title}
                        textBody={referrals.bnichols.text}
                        insertedClasses={"referral-card"}
                    />
                </Col>
                <Col xs={12} md={6}>
                </Col>
            </Row>
        </div>
    );
}

export default Referrals;