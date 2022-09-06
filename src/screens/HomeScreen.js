import React from 'react';
import { Container } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from '../css-test-2022/images/banner.jpg';
import news1 from '../css-test-2022/images/news-1.jpg';
import news2 from '../css-test-2022/images/news-2.jpg';
import news3 from '../css-test-2022/images/news-3.jpg';
import arrow from '../css-test-2022/icons/arrow-forward-outline.svg';
import Youtube from '../css-test-2022/images/youtube.jpg';
import Artist from '../css-test-2022/images/artist.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import { data } from '../artistList';

export default function HomeScreen() {
  const displayImage = () => {
    const image = document.querySelector('.artist-image');
    image.classList.toggle('is-Called');
  };
  const hideImage = () => {
    const image = document.querySelector('.artist-image');
    image.classList.toggle('is-Called');
  };

  return (
    <Container className="site-container">
      <article className="banner article-main">
        <AliceCarousel
          autoPlay="true"
          autoPlayStrategy="none"
          autoPlayInterval="2500"
          infinite="true"
          disableButtonsControls="true"
        >
          <div className="sliderContainer">
            <img className="sliderImg" src={Banner} alt="Banner" />
            <span className="font-face-bold title">
              <Link className="banner-link" to="#">
                Anselm Kiefer: Walhalla
              </Link>
            </span>
            <span>Until 12 February 2017, London</span>
          </div>
          <div className="sliderContainer">
            <img className="sliderImg" src={Banner} alt="Banner" />
            <span className="font-face-bold title">
              <Link className="banner-link" to="#">
                Anselm Kiefer: Walhalla //second slide
              </Link>
            </span>
            <span>Until 12 February 2017, London</span>
          </div>
          <div className="sliderContainer">
            <img className="sliderImg" src={Banner} alt="Banner" />
            <span className="font-face-bold title">
              <Link className="banner-link" to="#">
                Anselm Kiefer: Walhalla //third slide
              </Link>
            </span>
            <span>Until 12 February 2017, London</span>
          </div>
        </AliceCarousel>
      </article>
      <article className="n-e">
        <div className="article-head">
          <span className="font-face-bold title">News & Events</span>
          <span>
            <Link className="banner-link" to="#">
              View All
            </Link>
          </span>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="article-main">
          <div className="news1">
            <a href="#">
              <div className="combined-hover">
                <img src={news1} alt="news1" />
                <span className="font-face-bold title">
                  Exhibition: He Xiangyu monograph released by Distanz
                </span>
              </div>
            </a>
            <span>From March 2016</span>
            <span>
              He Xiangyu and Liu Wei are among 74 international artists from 33
              countries chosen to feature in the Yinchuan Biennale 2016
            </span>
          </div>
          <div className="news2">
            <a href="#">
              <div className="combined-hover">
                <img src={news2} alt="news2" />
                <span className="font-face-bold title">
                  Exhibition: Runa Islam at SFMOMA, San Francisco
                </span>
              </div>
            </a>
            <span>From March 2016</span>
            <span>
              'Verso', SFMOMA's solo presentation of Bangladeshi-born British
              artist Runa Islam, features the US premiere of Cabinet of
              Prototypes (2009-10)
            </span>
          </div>
          <div className="news3">
            <a href="#">
              <div className="combined-hover">
                <img src={news3} alt="news3" />
                <span className="font-face-bold title">
                  Preview: White Cube Mason's Yard
                </span>
              </div>
            </a>
            <span>19 January 2017, 6 to 8pm</span>
            <span>
              Join us at Mason's Yard, London for the preview of the new Park
              Seo-Bo exhibition curated by Katharine Kostyál. Curated by
              Katharine Kostyál
            </span>
          </div>
        </div>
      </article>
      <article className="channel">
        <div className="article-head">
          <span className="font-face-bold title">Channel</span>
          <span>
            <Link className="banner-link" to="#">
              View All
            </Link>
          </span>
          <img src={arrow} alt="arrow" />
        </div>
        <a href="#">
          <embed className="youtube" src={Youtube} alt="Video from Youtube" />
        </a>
        <div className="article-main">
          <div>
            <span className="font-face-bold title">
              Anselm Kiefer in conversation with Tim Marlow in the Auditorium
            </span>
          </div>
          <div>
            <span style={{ fontSize: '19px' }}>
              In this film Anselm Kiefer discusses his work and his exhibition
              'Walhalla' at White Cube Bermondsey with Tim Marlow.
            </span>
          </div>
        </div>
      </article>
      <article className="artists">
        <div className="article-head">
          <span className="font-face-bold title">Artists</span>
        </div>
        <div className="article-main artist-list">
          <ul>
            {data.artistSet1.map((x) => (
              <li>
                <Link
                  className="artist-link"
                  to="#"
                  onMouseEnter={displayImage}
                  onMouseLeave={hideImage}
                >
                  {x.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {data.artistSet2.map((x) => (
              <li>
                <Link
                  className="artist-link"
                  to="#"
                  onMouseEnter={displayImage}
                  onMouseLeave={hideImage}
                >
                  {x.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {data.artistSet3.map((x) => (
              <li>
                <Link
                  className="artist-link"
                  to="#"
                  onMouseEnter={displayImage}
                  onMouseLeave={hideImage}
                >
                  {x.name}
                </Link>
              </li>
            ))}
          </ul>
          <img className="artist-image" src={Artist} alt="Artist_Image" />
        </div>
      </article>
    </Container>
  );
}
