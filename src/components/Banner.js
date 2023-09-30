import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front End Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {
                ({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to My World</span>
                    <h1>{`Hi, I'm Sorin`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>I am a very ambitious software engineer looking for
                      established IT work. I'm ready to expand my work experience and learn new things and grow professionally.</p>
                  </div>
              }
            </TrackVisibility>
            <div className="pdf-button">
              <a href="Resume.pdf" download="Resume.pdf" style={{
                textDecorationLine: 'underline',
                textDecorationThickness: '20%',
                textDecorationColor: 'white',
                width: '200px'
                }}>
                <p>Download Resume</p>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {
                ({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{
                    marginTop: '25px'
                  }}>
                    <img src={headerImg} alt="Header Img" />
                  </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
