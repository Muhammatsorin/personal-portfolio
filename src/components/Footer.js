import { Container, Row, Col } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {

  return (
    <footer className="footer" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} xs={12}>
            <div className="footer-header">
              <h1 style={{color: 'black' , fontWeight: '900'}}>Contact</h1>
              <div className="contact-icon-wrap">
                <div className="contact-icon">
                  <AiOutlineMail style={{fontSize: '30px' , color: 'black'}}></AiOutlineMail>
                  <p>Email :</p>
                </div>
                <p style={{margin: 0}}>Muhammatsorin.hawae@gmail.com</p>
              </div>
              <br></br>
              <div className="contact-icon-wrap">
                <div className="contact-icon">
                  <AiOutlinePhone style={{fontSize: '30px' , color: 'black'}}></AiOutlinePhone>
                  <p>Phone :</p>
                </div>
                <p style={{margin: '0 0 50px 0'}}>Phone : 098 - 0293887</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
