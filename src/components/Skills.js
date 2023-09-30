import reactLogo from '../assets/img/react-logo.png'
import htmlLogo from '../assets/img/html-logo.png'
import javascriptLogo from '../assets/img/JavaScript-logo.png'
import tsLogo from '../assets/img/ts-logo.png'
import cssLogo from '../assets/img/css-logo.png'
import nextjsLogo from '../assets/img/nextjs-logo.png'
import angularLogo from '../assets/img/angular-logo.png'
import expressLogo from '../assets/img/ex-logo.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Programming Language</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlLogo} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={javascriptLogo} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={tsLogo} alt="Image" />
                                <h5>TypeScript ( basic )</h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                        <br></br>
                        <br></br>
                        <p>Framework</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={nextjsLogo} alt="Image" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={angularLogo} alt="Image" />
                                <h5>Angular ( basic )</h5>
                            </div>
                            <div className="item">
                                <img src={expressLogo} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                        </Carousel>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
