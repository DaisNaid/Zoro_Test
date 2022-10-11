import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from '../fonts/images/banner.jpg';
import art from '../fonts/images/artist.jpg';

export default function HomeScreen() {
  return (
    <Container className="site-container">
      <div className="banner">
        <img src={banner} alt="banner" />
        <div className="banner-text">
          <h1 className="font-face-bold">Careers at Zoro</h1>
          <span>Join the Talented Team That's Driving Our Success!</span>
        </div>
      </div>
      <article className="about">
        <span>
          Zoro.com is an eCommerce company that sells business supplies,
          equipment, and tools-but we're much more than just a website. We're a
          team of great people who win and lose together (we prefer winning!).
        </span>
        <span>
          Since 2011, Zoro's incredible team has been working to help our
          customers get everything they need to make their businesses go. We've
          grown super quickly in just a few years, recently surpassing 400 team
          members and reaching annual revenue of over $500 million. Add to that
          our award-winning culture-we were named a Great Place to Work for
          2019-20, among other accolades-and we think Zoro is a pretty amazing
          launchpad for career growth and development.
        </span>
        <span>
          At Zoro, we pride ourselves on making sure our team members are taken
          care of-while also building a culture where our employees can bring
          their authentic selves to work and have a little bit of fun in the
          process.
        </span>
        <a href="https://www.zoro.com/careers/">
          <Button className="career-btn">View Our Open Positions</Button>
        </a>
      </article>
      <article className="core-values">
        <div className="value-explanation">
          <h1 className="font-face-bold">Our Core Values</h1>
          <span>
            These are the values that keep us focused on what really matters. We
            developed them with input from team members across the company-and
            we live them out every day, keeping them in mind as we tackle each
            new project, meeting and initiative.
          </span>
        </div>
        <div className="atZoro">
          <h2>At Zoro, We...</h2>
          <section className="valueList">
            <div className="column">
              <div className="row">
                <img src={art} alt="dummyImage" />
                <div className="listText">
                  <span className="font-face-bold">
                    Win & Lose Together (We prefer winning!)
                  </span>
                  <span>
                    We celebrate our accomplishments and learn from our
                    failures.
                  </span>
                </div>
              </div>
              <div className="row">
                <img src={art} alt="dummyImage" />
                <div className="listText">
                  <span className="font-face-bold">Take Ownership</span>
                  <span>
                    We all are empoweredand accountable to take risks and find a
                    better way.
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <img src={art} alt="dummyImage" />
                <div className="listText">
                  <span className="font-face-bold">Are Transparent</span>
                  <span>We are open, honest, and candid with each other.</span>
                </div>
              </div>
              <div className="row fix">
                <img src={art} alt="dummyImage" />
                <div className="listText">
                  <span className="font-face-bold">
                    Aspire to Be Customer-Obsessed
                  </span>
                  <span>
                    Our customers are{' '}
                    <span style={{ fontWeight: 'bold' }}>everything</span> to
                    us.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Container>
  );
}
