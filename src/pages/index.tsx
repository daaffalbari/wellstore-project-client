import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../../components/organisms/Navbar';
import MainBanner from '../../components/organisms/MainBanner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />

      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br />
            Easy to Win the Game
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon1)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="-12" y="23" width="67" height="73">
                      <path d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z" fill="#4D17E2" />
                    </mask>
                    <g mask="url(#mask1)">
                      <path d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z" fill="#695DE9" />
                      <path d="M37 55H-4" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M23 64L-4 64"
                        stroke="#B7B0F4"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="23" y="13" width="52" height="34" rx="13" fill="#5C52C7" />
                    </g>
                    <rect x="27" y="16" width="41" height="27" rx="13" fill="#2B2467" />
                    <circle cx="47.5" cy="29.5" r="5.5" stroke="white" strokeWidth="4" />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">1. Start</p>
                <p className="text-lg color-palette-1 mb-0">
                  Pilih salah satu game
                  <br />
                  yang ingin kamu top up
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon2"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon2)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect x="-14" y="16" width="62" height="82" rx="16" fill="#695DE9" />
                    <path d="M32 36H5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M27 45L9 45"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect x="56" y="37" width="49" height="75" rx="16" fill="#2B2467" />
                    <path d="M97 50H70" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M92 59L74 59"
                      stroke="#6B63AC"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">2. Fill Up</p>
                <p className="text-lg color-palette-1 mb-0">
                  Top up sesuai dengan
                  <br />
                  nominal yang sudah tersedia
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon3"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon3)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect x="13" y="25" width="54" height="61" rx="16" fill="#695DE9" />
                    <path
                      d="M50 46L50 68"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 54L40 68"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 60L30 68"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="40" cy="26" r="14" fill="#2B2467" />
                    <path
                      d="M39.0489 18.927C39.3483 18.0057 40.6517 18.0057 40.9511 18.9271L42.0206 22.2188C42.1545 22.6309 42.5385 22.9098 42.9717 22.9098H46.4329C47.4016 22.9098 47.8044 24.1494 47.0207 24.7188L44.2205 26.7533C43.87 27.0079 43.7234 27.4593 43.8572 27.8713L44.9268 31.1631C45.2261 32.0844 44.1717 32.8506 43.388 32.2812L40.5878 30.2467C40.2373 29.9921 39.7627 29.9921 39.4122 30.2467L36.612 32.2812C35.8283 32.8506 34.7739 32.0844 35.0732 31.1631L36.1428 27.8713C36.2766 27.4593 36.13 27.0079 35.7795 26.7533L32.9793 24.7188C32.1956 24.1494 32.5984 22.9098 33.5671 22.9098H37.0283C37.4615 22.9098 37.8455 22.6309 37.9794 22.2188L39.0489 18.927Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">3. Be a Winner</p>
                <p className="text-lg color-palette-1 mb-0">
                  Siap digunakan untuk
                  <br />
                  improve permainan kamu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br />
            Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  {/* <img src="img/Thumbnail-1.png" width="205" height="270" alt="" /> */}
                  <Image src="/img/Thumbnail-1.png" width={205} height={270} alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Super Mechs</p>
                      <p className="fw-light text-white m-0">Mobile</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  {/* <img src="img/Thumbnail-2.png" width="205" height="270" alt="" /> */}
                  <Image src="/img/Thumbnail-2.png" width={205} height={270} alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Call of Duty: Modern</p>
                      <p className="fw-light text-white m-0">Mobile</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <Image src="/img/Thumbnail-3.png" width={205} height={270} alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Mobile Legends</p>
                      <p className="fw-light text-white m-0">Mobile</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <Image src="/img/Thumbnail-4.png" width={205} height={270} alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Clash of Clans</p>
                      <p className="fw-light text-white m-0">Mobile</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  {/* <img src="img/Thumbnail-5.png" width="205" height="270" alt="" /> */}
                  <Image src="/img/Thumbnail-5.png" width={205} height={270} alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M48.8309 6.33404C41.7479 -5.30296 31.0779 2.79304 31.0779 2.79304C30.3859 3.31604 29.1099 3.74604 28.2429 3.74804L25.3849 3.75004C24.5179 3.75104 23.2419 3.32104 22.5509 2.79804C22.5509 2.79804 11.8799 -5.29996 4.79595 6.33704C-2.28605 17.97 0.567947 30.639 0.567947 30.639C1.06795 33.741 2.71595 35.811 5.82595 35.551C8.92695 35.292 15.6579 27.197 15.6579 27.197C16.2139 26.53 17.3789 25.985 18.2439 25.985L35.3779 25.982C36.2439 25.982 37.4079 26.527 37.9629 27.194C37.9629 27.194 44.6949 35.289 47.8009 35.548C50.9069 35.808 52.5589 33.736 53.0559 30.636C53.0549 30.636 55.9139 17.969 48.8309 6.33404ZM20.3739 15.806H16.6999V19.347C16.6999 19.347 15.9219 19.941 14.7179 19.926C13.5159 19.908 12.9719 19.278 12.9719 19.278V15.807H9.50195C9.50195 15.807 9.06895 15.363 8.95295 14.194C8.83895 13.025 9.43195 12.08 9.43195 12.08H13.1069V8.40604C13.1069 8.40604 13.8629 8.00104 14.9499 8.03204C16.0379 8.06604 16.8349 8.47504 16.8349 8.47504L16.8199 12.079H20.2899C20.2899 12.079 20.8959 12.857 20.9459 13.797C20.9959 14.738 20.3739 15.806 20.3739 15.806ZM37.2259 19.842C35.6169 19.842 34.3199 18.541 34.3199 16.934C34.3199 15.324 35.6169 14.026 37.2259 14.026C38.8279 14.026 40.1349 15.324 40.1349 16.934C40.1349 18.542 38.8279 19.842 37.2259 19.842ZM37.2259 11.841C35.6169 11.841 34.3199 10.541 34.3199 8.93404C34.3199 7.32404 35.6169 6.02604 37.2259 6.02604C38.8279 6.02604 40.1349 7.32404 40.1349 8.93404C40.1349 10.542 38.8279 11.841 37.2259 11.841ZM44.4679 16.136C42.8589 16.136 41.5619 14.836 41.5619 13.228C41.5619 11.619 42.8589 10.32 44.4679 10.32C46.0699 10.32 47.3769 11.619 47.3769 13.228C47.3769 14.836 46.0699 16.136 44.4679 16.136Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Valorant</p>
                      <p className="fw-light text-white m-0">Desktop</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">290M+</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Players Top Up</p>
            </div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">12.500</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Games Available</p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">99,9%</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Happy Players</p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">4.7</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Rating Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
              {/* <img src="img/Header-9.png" width="612" height="452" className="img-fluid" alt="" /> */}
              <Image src="/img/Header-9.png" width={612} height={452} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Win the battle.
                  <br />
                  Be the Champion.
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  Kami menyediakan jutaan cara untuk
                  <br className="d-sm-block d-none" />
                  membantu players menjadi
                  <br className="d-sm-block d-none" />
                  pemenang sejati
                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <a className="btn btn-read text-lg rounded-pill" href="#" role="button">
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="" className="mb-30">
                  <svg
                    width="90"
                    height="55"
                    viewBox="0 0 90 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="90" height="55" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_528_133" transform="matrix(0.00154321 0 0 0.00252525 -0.00617284 0)" />
                      </pattern>
                      <image
                        id="image0_528_133"
                        width="656"
                        height="396"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApAAAAGMCAYAAABtSZItAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3U9sU2f6B/rvYychaLgQBpJjuBPDwlIrKKgsfrETdlfQoomdAE26KxQWVBoYuKvbMLBpBVParvg3UjsSXPjprkKB5JgRFLbQhBnNAgZWlYjtojZIzLBEFPu9OulMp7QBbOf8ed/zfr0Z/X4953m+z+e11EdufCwDXZVRJWoIfFHAFoF17cAHnbZMyzkpQAEKUIACvgoIcE4GU6VVNSV3fK3MYhTQXeD//jXwf/1K95TMRwEKUIACFNBOIKGwWrxUBad8CMAB7RIyEAWCEuhsAT5fBiSDasC6FKAABShAgVgKHHazcnBmgRyGSj52yl8DsjKWo3IoCswmMLwQeGcRbShAAQpQgAIUqE9gqr2EzOjbUp1ZIGc+hez65h1I7Wx99/MqCsRE4EQKSLfGZBiOQQEKUIACFAhQIIFt7v/I/3odflwgvf9jIFW+rBTeDLA1S1NAL4G++cDIUr0yMQ0FKEABClBAMwEBroxnZdN/Yj2zQA4697I1JCc0y8w4FAhWwFsgvUWSLwpQgAIUoAAFZhVI1JAb65XJWRdI7/9ZcCpHAbWXfhSwRmBFK3A8Zc24HJQCFKAABSjQkIDCMTcn+356zzOfQHr/YHPHvY7qvOTXAJY0VJwXU8BgAdm2CGpoocETMDoFKEABClAgEIGHyTZkLq6TRy9cIGc+hUyVfweFk4HEYFEK6CjQIsBny4BOPtdHx+NhJgpQgAIUiEhAsNvtkT/9vPsvPoH8zwV5p3JdoPoiisu2FAhfwHuwuPeAcb4oQAEKUIACFIACbhSzsn42iucukP1OaUMCcpV+FLBK4MNO4PV2q0bmsBSgAAUoQIHZBGo1bLzUK9caWiC9iwtO+RSAHWSlgDUCr7YBnzjWjMtBKUABClCAArMKCE67PbLzeTrP/QTSu2Fw+f3uWvWp9ws1beSlgDUC7y0G+hdYMy4HpQAFKEABCvxM4ElCkBnrkUpTC+TMp5CpyvtQ6ghpKWCNwILED7+T7f0vXxSgAAUoQAH7BEbcrHz8orFf+Ankf27MO+VbAqyxz48TWyuQXwDsWmzt+BycAhSgAAXsFFAKt4s5Wfuy6etbILumtogkzr+sGP85BWIl8KkDvMK/3ojVmXIYClCAAhR4oYCqYmuxTy68jKmuBdIrMtBVGVWihl5WkP+cArERWNcOfNAZm3E4CAUoQAEKUOBFAgKcG8/KcD1KdS+Qg6nSqpqSO/UU5TUUiI2A91xI7/mQfFGAAhSgAAViLpBQWD2Wk7v1jFn3AukVKzjlQwAO1FOY11AgFgKdLT98oYY/UBOL4+QQFKAABSjwXIHDblYO1uvT0AI5DJV87JS9x/qsrLcBr6OA8QLDC4F3Fhk/BgegAAUoQAEKPEdgqr2EzOjbUq1XqKEFcuZTyK5v3oHUztbbgNdRIBYCJ1JAujUWo3AIClCAAhSgwDMCCWxz/0f+txGVhhdIr/hAqnxZKbzZSCNeSwGjBfrmAyNLjR6B4SlAAQpQgAI/FxDgynhWNjUq09QCOejcy9aQnGi0Ga+ngNEC3gLpLZJ8UYACFKAABWIikKghN9Yrk42O09QC6TUpOJWjgNrbaENeTwFjBVa0AsdTxsZncApQgAIUoMAzAgrH3Jzsa0al6QVyc8e9juq85NcAljTTmPdQwEQB2bYIamihidGZmQIUoAAFKPBTgYfJNmQurpNHzbA0vUDOfAqZKv8OCiebacx7KGCkQIsAny0DOvlcHyPPj6EpQAEKUOAHAcFut0f+1CzHnBZIr2neqVwXqL5mA/A+Chgn4D1Y3HvAOF8UoAAFKEABAwUUcKOYlfVziT7nBbLfKW1IQK7OJQTvpYBxAh92Aq+3GxebgSlAAQpQgAK1GjZe6pVrc5GY8wLpNS845VMAdswlCO+lgFECr7YBnzhGRWZYClCAAhSgAASn3R7ZOVcJXxbIweX3u2vVp94v1LTNNRDvp4AxAu8tBvoXGBOXQSlAAQpQwHqBJwlBZqxHKnOV8GWBnPkUMlV5H0odmWsg3k8BYwQWJH74nWzvf/miAAUoQAEK6C8w4mblYz9i+rZAemHyTvmWAGv8CMYaFDBCIL8A2LXYiKgMSQEKUIAC9goohdvFnKz1S8DfBbJraotI4rxf4ViHAkYIfOoAr/CvN4w4K4akAAUoYKmAqmJrsU8u+DW+rwukF2qgqzKqRA35FZB1KKC9wLp24INO7WMyIAUoQAEK2CkgwLnxrAz7Ob3vC+RgqrSqpuSOnyFZiwLaC3jPhfSeD8kXBShAAQpQQDOBhMLqsZzc9TOW7wukF67glA8BOOBnUNaigNYCnS0/fKGGP1Cj9TExHAUoQAELBQ67WTno99yBLJDDUMnHTtl7rM9KvwOzHgW0FRheCLyzSNt4DEYBClCAAtYJTLWXkBl9W6p+Tx7IAjnzKWTXN+9Aamf9Dsx6FNBa4EQKSLdqHZHhKEABClDAEoEEtrn/I/8bxLSBLZBe2IFU+bJSeDOI4KxJAS0F+uYDI0u1jMZQFKAABShgj4AAV8azsimoiQNdIAede9kakhNBhWddCmgpsH8p0Dtfy2gMRQEKUIACdggkasiN9cpkUNMGukB6oQtO5Sig9gY1AOtSQDuBFa3A8ZR2sRiIAhSgAAUsEVA45uZkX5DTBr5Abu6411Gdl/wawJIgB2FtCugkINsWQQ0t1CkSs1CAAhSggB0CD5NtyFxcJ4+CHDfwBXLmU8hU+XdQOBnkIKxNAa0EWgT4bBnQyef6aHUuDEMBClAg7gKC3W6P/CnoMUNZIL0h8k7lukD1BT0Q61NAGwHvweLeA8b5ogAFKEABCoQgoIAbxaysD6EVQlsg+53ShgTkahhDsQcFtBH4sBN4vV2bOAxCAQpQgALxFajVsPFSr1wLY8LQFkhvmIJTPgVgRxiDsQcFtBB4tQ34xNEiCkNQgAIUoECMBQSn3R7ZGdaEoS6Qg8vvd9eqT71fqGkLa0D2oUDkAu8tBvoXRB6DAShAAQpQILYCTxKCzFiPVMKaMNQFcuZTyFTlfSh1JKwB2YcCkQssSPzwO9ne//JFAQpQgAIU8F9gxM3Kx/6XfX7F0BdIL0reKd8SYE2Yg7IXBSIVyC8Adi2ONAKbU4ACFKBA/ASUwu1iTtaGPVk0C2TX1BaRxPmwh2U/CkQq8KkDvMK/3oj0DNicAhSgQMwEFLC1mJULYY8VyQLpDTnQVRlVoobCHpj9KBCZwLp24IPOyNqzMQUoQAEKxEtAgHPjWRmOYqrIFsjBVGlVTcmdKIZmTwpEJuA9F9J7PiRfFKAABShAgTkKJBRWj+Xk7hzLNHV7ZAukl7bglA8BONBUct5EARMFOlt++EINf6DGxNNjZgpQgAI6CRx2s3IwqkCRLpDDUMnHTtl7rM/KqADYlwKhCwwvBN5ZFHpbNqQABShAgdgITLWXkBl9W6pRTRTpAjnzKWTXN+9AamejAmBfCkQicCIFpFsjac2mFKAABShguEAC29z/kf+NcorIF0hv+IFU+bJSeDNKCPamQKgCffOBkaWhtmQzClCAAhQwX0CAK+NZ2RT1JFoskIPOvWwNyYmoMdifAqEK7F8K9M4PtSWbUYACFKCA2QKJGnJjvTIZ9RRaLJAeQsGpHAXU3qhB2J8CoQmsaAWOp0Jrx0YUoAAFKGC4gMIxNyf7dJhCmwVyc8e9juq85NcAlugAwwwUCENAti2CGloYRiv2oAAFKEABswUeJtuQubhOHukwhjYL5MynkKny76BwUgcYZqBAKAItAny2DOjkc31C8WYTClCAAqYKCHa7PfInXeJrtUB6KHmncl2g+nQBYg4KBC7gPVjce8A4XxSgAAUoQIFZBBRwo5iV9TrhaLdA9julDQnIVZ2QmIUCgQt82Am83h54GzagAAUoQAHzBGo1bLzUK9d0Sq7dAunhFJzyKQA7dIJiFgoEKvBqG/CJE2gLFqcABShAAQMFBKfdHtmpW3ItF8jB5fe7a9Wn3i/UtOkGxjwUCEzgvcVA/4LAyrMwBShAAQoYJ/AkIciM9UhFt+RaLpAzn0KmKu9DqSO6gTEPBQITWJD44Xeyvf/liwIUoAAFKACMuFn5WEcIbRdIDyvvlG8JsEZHOGaiQCAC+QXArsWBlGZRClCAAhQwR0Ap3C7mZK2uifVeILumtogkzuuKx1wUCETgUwd4hX+9EYgti1KAAhQwREABW4tZuaBrXK0XSA9toKsyqkQN6QrIXBTwXWBdO/BBp+9lWZACFKAABcwQEODceFaGdU6r/QI5mCqtqim5ozMis1HAdwHvuZDe8yH5ogAFKEAB6wQSCqvHcnJX58G1XyA9vIJTPgTggM6QzEYBXwU6W374Qg1/oMZXVhajAAUoYIDAYTcrB3XPacQCOQyVfOyUvcf6rNQdlPko4JvA8ELgnUW+lWMhClCAAhTQXmCqvYTM6NtS1T2pEQukh5jvKm0TkTO6gzIfBXwVOJEC0q2+lmQxClCAAhTQU0AB24tZOatnumdTGbNAerEHUuXLSuFNE2CZkQK+CPTNB0aW+lKKRShAAQpQQF8BAa6MZ2WTvgkNXiAHnXvZGpITpuAyJwV8Edi/FOid70spFqEABShAAT0FEjXkxnplUs90v0xl1CeQXvyCUzkKqL2mADMnBeYssKIVOJ6acxkWoAAFKEABTQUUjrk52adpulljGbdAbu6411Gdl/wawBKToJmVAnMRkG2LoIYWzqUE76UABShAAT0FHibbkLm4Th7pGW/2VMYtkDOfQqbKv4PCSZOgmZUCcxJoEeCzZUAnn+szJ0feTAEKUEA3AcFut0f+pFusl+UxcoH0hso7lesC1feyAfnPKRAbAe/B4t4DxvmiAAUoQIFYCCjgRjEr600cxtgFst8pbUhArpqIzswUaFrgw07g9famb+eNFKAABSigj0Ctho2XeuWaPonqT2LsAumNWHDKpwDsqH9cXkkBwwVebQM+cQwfgvEpQAEKUACC026P7DRVwugFcnD5/e5a9an3CzVtph4Ac1OgYYH3FgP9Cxq+jTdQgAIUoIA2Ak8SgsxYj1S0SdRgEKMXyJlPIVOV96HUkQbn5uUUMFdgQeKH38n2/pcvClCAAhQwUWDEzcrHJgb/T2bjF0hvkLxTviXAGpMPgtkp0JBAfgGwa3FDt/BiClCAAhSIXkAp3C7mZG30SeaWIB4LZNfUFpHE+blR8G4KGCbwqQO8wr/eMOzUGJcCFLBcQAFbi1m5YDpDLBZI7xAGuiqjStSQ6QfC/BSoW2BdO/BBZ92X80IKUIACFIhWQIBz41kZjjaFP91js0AOpkqrakru+MPCKhQwRMB7LqT3fEi+KEABClBAe4GEwuqxnNzVPmgdAWOzQHqzFpzyIQAH6pibl1AgHgKdLT98oYY/UBOP8+QUFKBAnAUOu1k5GJcBY7VADkMlHztl77E+K+NyQJyDAi8VGF4IvLPopZfxAgpQgAIUiExgqr2EzOjbUo0sgc+NY7VAejb5rtI2ETnjsxPLUUBvgRMpIN2qd0amowAFKGCpgAK2F7NyNk7jx26B9A5nIFW+rBTejNNBcRYKvFCgbz4wspRIFKAABSigmYAAV8azskmzWHOOE8sFctCpZGtQE3PWYQEKmCSwfynQO9+kxMxKAQpQIPYCiRpyY70yGbdBY7lAeodUcCpHAbU3bgfGeSjwXIEVrcDxFIEoQAEKUEAXAYVjbk726RLHzxyxXSA3d9zrqM5Lfg1giZ9grEUBnQVk2yKooYU6R2Q2ClCAArYIPEy2IXNxnTyK48CxXSBnPoVMlX8HhZNxPDjORIFZBVoE+GwZ0Mnn+vAdQgEKUCBSAcFut0f+FGmGAJvHeoH03PJO5bpA9QVoyNIU0EvAe7C494BxvihAAQpQIBIBBdwoZmV9JM1Dahr7BbLfKW1IQK6G5Mk2FNBD4MNO4PV2PbIwBQUoQAHLBGo1bLzUK9fiPHbsF0jv8ApO+RSAHXE+SM5GgWcEXm0DPnGIQgEKUIACYQsITrs9sjPstmH3s2KBHFx+v7tWfer9Qk1b2MDsR4HIBN5bDPQviKw9G1OAAhSwUOBJQpAZ65FK3Ge3YoGc+RQyVXkfSh2J+4FyPgr8KLAg8cPvZHv/yxcFKEABCoQhMOJm5eMwGkXdw5oF0oPOO+VbAqyJGp39KRCaQH4BsGtxaO3YiAIUoICtAkrhdjEna22Z364Fsmtqi0jivC2HyzkpMCPwqQO8wr/e4LuBAhSgQJACCthazMqFIHvoVNuqBdKDH+iqjCpRQzodArNQIFCBde3AB52BtmBxClCAAjYLCHBuPCvDNhlYt0AOpkqrakru2HTInJUCM8+F9J4PyRcFKEABCvgukFBYPZaTu74X1rigdQukdxYFp3wIwAGNz4XRKOCvQGfLD1+o4Q/U+OvKahSgAAWAw25WDtoGYeUCOQyVfOyUvcf6rLTtwDmvxQLDC4F3FlkMwNEpQAEK+C4w1V5CZvRtqfpeWfOCVi6Q3pnku0rbROSM5ufDeBTwV+BECki3+luT1ShAAQpYKqCA7cWsnLVxfGsXSO+wB1Lly0rhTRsPnjNbKtA3HxhZaunwHJsCFKCAfwICXBnPyib/KppVyeoFctCpZGtQE2YdGdNSYI4C+5cCvfPnWIS3U4ACFLBbIFFDbqxXJm1VsHqB9A694FSOAmqvrW8Azm2hwIpW4HjKwsE5MgUoQAGfBBSOuTnZ51M1I8tYv0Bu7rjXUZ2X/BrAEiNPkKEp0ISAbFsENbSwiTt5CwUoQAHrBR4m25C5uE4e2Sxh/QI58ylkqvw7KJy0+Y3A2S0TaBHgs2VAJ5/rY9nJc1wKUGCuAoLdbo/8aa5lTL+fC+S/TzDvVK4LVJ/pB8r8FKhbwHuwuPeAcb4oQAEKUKAuAQXcKGZlfV0Xx/wiLpD/PuB+p7QhAbka8/PmeBR4VuDDTuD1dqpQgAIUoEAdArUaNl7qlWt1XBr7S7hA/uSIC075FIAdsT91DkiB/wi82gZ84tCDAhSgAAVeJiA47fbIzpddZss/5wL5k5MeXH6/u1Z96v1CTZstbwDOSQG8txjoX0AIClCAAhR4vsCThCAz1iMVIv0gwAXyZ++EQqryPpQ6wjcIBawRWJD44Xeyvf/liwIUoAAFZhMYcbPyMWn+K8AFcpZ3Q94p3xJgDd8oFLBGIL8A2LXYmnE5KAUoQIF6BZTC7WJO1tZ7vS3XcYGcbYHsmtoikjhvy5uAc1JgRuBTB3iFf73BdwMFKECBnwooYGsxKxeo8qwAF8jnvCMGuiqjStQQ3zAUsEZgXTvwQac143JQClCAAi8TEODceFaGX3adjf+cC+RzTn0wVVpVU3LHxjcFZ7ZYwHsupPd8SL4oQAEKUAAJhdVjOblLil8KcIF8wbui4JQPATjANw4FrBHobPnhCzX8gRprjpyDUoACzxU47GblIH1mF+AC+YJ3xjBU8rFT9h7rs5JvIApYIzC8EHhnkTXjclAKUIACswhMtZeQGX1bqtThAtnUeyDfVdomImeaupk3UcBUgRMpIN1qanrmpgAFKDAnAQVsL2bl7JyKxPxmfgJZxwEPpMqXlcKbdVzKSygQD4G++cDI0njMwikoQAEKNCAgwJXxrGxq4BYrL+UCWcexDzqVbA1qoo5LeQkF4iOwfynQOz8+83ASClCAAnUIJGrIjfXKZB2XWn0JF8g6j7/gVI4Cam+dl/MyCpgvsKIVOJ4yfw5OQAEKUKBeAYVjbk721Xu5zddxgazz9Dd33Ouozkt+DWBJnbfwMgoYLyDbFkENLTR+Dg5AAQpQoA6Bh8k2ZC6uk0d1XGv9JVwgG3gLFFLl30HhZAO38FIKmC3QIsBny4BOPtfH7INkegpQ4KUCgt1uj/zppdfxghkBLpANvhHyTuW6QPU1eBsvp4C5At6Dxb0HjPNFAQpQIKYCCrhRzMr6mI4XyFhcIBtk7XdKGxKQqw3exsspYLbAh53A6+1mz8D0FKAABZ4jUKth46VeuUag+gW4QNZv9eOVBad8CsCOJm7lLRQwU+DVNuATx8zsTE0BClDgRQKC026P7CRSYwJcIBvzmrl6cPn97lr1qfcLNW1N3M5bKGCkgLy3GKp/gZHZGZoCFKDAcwSeJASZsR6pUKgxAS6QjXn991PIVOV9KHWkydt5GwXME1iQAP68DPhVwrzsTEwBClBgdoERNysfE6dxAS6QjZv9eEfeKd8SYM0cSvBWCpglkF8A7FpsVmampQAFKDCLgFK4XczJWuI0J8AFsjm3mbvyXVNbRBLn51CCt1LAPIFPHeAV/vWGeQfHxBSgwE8FFLC1mJULVGlOgAtkc24/3jXQVRlVoobmWIa3U8AcgXXtwAed5uRlUgpQgAI/ExDg3HhWhgnTvAAXyObtZu4cTJVW1ZTcmWMZ3k4BswS850J6z4fkiwIUoICBAgmF1WM5uWtgdG0ic4H04SgKTvkQgAM+lGIJCpgh0NkCfL4M4A/UmHFeTEkBCvxU4LCblYMkmZsAF8i5+c3cPQyVfOyUvcf6rPShHEtQwAyB4YXAO4vMyMqUFKAABX4QmGovITP6tlQJMjcBLpBz8/vx7nxXaZuInPGpHMtQwAyBEykg3WpGVqakAAWsF1DA9mJWzloP4QMAF0gfEP9TYiBVvqwU3vSxJEtRQG+BvvnAyFK9MzIdBShAAQACXBnPyiZi+CPABdIfx5kqg04lW4Oa8LEkS1FAf4H9S4He+frnZEIKUMBqgUQNubFembQawcfhuUD6iOmVKjiVo4Da63NZlqOAvgIrWoHjKX3zMRkFKEABwTG3R/YRwj8BLpD+Wc5U2txxr6M6L/k1gCU+l2Y5CmgrINsWQQ0t1DYfg1GAAlYLPEy2IXNxnTyyWsHn4blA+gw68ylkqvw7KJwMoDRLUkBPgRYBPlsGdPK5PnoeEFNRwGIBwW63R/5ksUAgo3OBDIQVyDuV6wLVF1B5lqWAfgLeg8W9B4zzRQEKUEATAQXcKGZlvSZxYhWDC2RAx9nvlDYkIFcDKs+yFNBT4MNO4PV2PbMxFQUoYJ1ArYaNl3rlmnWDhzAwF8gAkQtO+RSAHQG2YGkK6CXwahvwiaNXJqahAAXsFBCcdntkp53DBz81F8gAjQeX3++uVZ96v1DTFmAblqaAVgLy3mKo/gVaZWIYClDAOoEnCUFmrEcq1k0e0sBcIAOGLqQq70OpIwG3YXkK6COwIAH8eRnwq4Q+mZiEAhSwTWDEzcrHtg0d5rxcIEPQzjvlWwKsCaEVW1BAD4H8AmDXYj2yMAUFKGCVgFK4XczJWquGjmBYLpAhoOe7praIJM6H0IotKKCPwKcO8Ar/ekOfA2ESCtghoICtxaxcsGPa6KbkAhmS/UBXZVSJGgqpHdtQIHqBde3AB53R52ACClDAGgEBzo1nZdiagSMclAtkSPiDqdKqmpI7IbVjGwroIeA9F9J7PiRfFKAABUIQSCisHsvJ3RBaWd+CC2SIb4GCUz4E4ECILdmKAtEKdLYAny8D+AM10Z4Du1PADoHDblYO2jFq9FNygQzxDIahko+dsvdYn5UhtmUrCkQrMLwQeGdRtBnYnQIUiLvAVHsJmdG3pRr3QXWZjwtkyCeR7yptE5EzIbdlOwpEK3AiBaRbo83A7hSgQGwFFLC9mJWzsR1Qw8G4QEZwKAOp8mWl8GYErdmSAtEI9M0HRpZG05tdKUCBWAsIcGU8K5tiPaSGw3GBjOBQBp1KtgY1EUFrtqRAdAL7lwK986Prz84UoEAsBRI15MZ6ZTKWw2k8FBfIiA6n4FSOAmpvRO3ZlgLhC6xoBY6nwu/LjhSgQHwFBMfcHtkX3wH1nYwLZERns7njXkd1XvJrAEsiisC2FAhdQLYtghpaGHpfNqQABWIp8DDZhszFdfIoltNpPhQXyAgPqJAq/w4KJyOMwNYUCFegRYDPlgGdfK5PuPDsRoEYCgh2uz3ypxhOZsRIXCAjPqa8U7kuUH0Rx2B7CoQn4D1Y3HvAOF8UoAAFmhRQwI1iVtY3eTtv80GAC6QPiHMp0e+UNiQgV+dSg/dSwDiBDzuB19uNi83AFKCAHgK1GjZe6pVreqSxMwUXSA3OveCUTwHYoUEURqBAOAKvtgGfOOH0YhcKUCBeAoLTbo/sjNdQ5k3DBVKDMxtcfr+7Vn3q/UJNmwZxGIECoQjIe4uh+heE0otNKECB2Ag8SQgyYz1Sic1Ehg7CBVKTgyukKu9DqSOaxGEMCgQvsCAB/HkZ8KtE8L3YgQIUiIvAiJuVj+MyjMlzcIHU6PTyTvmWAGs0isQoFAhWIL8A2LU42B6sTgEKxEJAKdwu5mRtLIaJwRBcIDU6xHzX1BaRxHmNIjEKBYIX+NQBXuFfbwQPzQ4UMFtAAVuLWblg9hTxSc8FUrOzHOiqjCpRQ5rFYhwKBCewrh34oDO4+qxMAQoYLyDAufGsDBs/SIwG4AKp2WEOpkqrakruaBaLcSgQrID3XEjv+ZB8UYACFJhFIKGweiwnd4mjjwAXSH3O4sckBad8CMABDaMxEgWCEehsAT5fBvAHaoLxZVUKmC1w2M3KQbNHiF96LpAanukwVPKxU/F+J3ulhvEYiQLBCAwvBN5ZFExtVqUABUwVmGovITP6tlRNHSCuublAanqy+a7SNhE5o2k8xqJAMAInUkC6NZjarEoBChgnoIDtxaycNS64BYG5QGp8yAOp8mWl8KbGERmNAv4K9M0HRpb6W5PVKEABIwUEuDKelU1GhrcgNBdIjQ950Klka1ATGkdkNAr4L7B/KdA73/+6rEgBChglkKghN9Yrk0aFtigsF0jND7vgVI4Caq/mMRmPAv4JrGgFjqf8q8dKFKCAeQKCY26P7DMvuD2JuUBqftabO+51VOclvS/ULNE8KuNRwDcB2bYIamihb/VYiAIUMErgYbINmYvfjuxoAAAgAElEQVTr5JFRqS0LywXSgAPPp6Z2i0qcMCAqI1LAH4EWAT5bBnTyuT7+gLIKBcwRUAp7ijk5aU5iO5NygTTk3PNO5bpA9RkSlzEpMHcB78Hi3gPG+aIABawRUMCNYlbWWzOwwYNygTTk8Pqd0oYE5KohcRmTAv4IfNgJvN7uTy1WoQAFtBeo1bDxUq9c0z4oA4ILpEFvgoJTPgVgh0GRGZUCcxN4tQ34xJlbDd5NAQqYISA47fbITjPCMiUXSIPeA4PL73fXqk+/BqTNoNiMSoE5Cch7i6H6F8ypBm+mAAW0F3iSEGTGeqSifVIGnBHgAmnYG6GQqrwPpY4YFptxKdC8wIIE8OdlwK8SzdfgnRSggO4CI25WPtY9JPP9V4ALpIHvhrxTviXAGgOjMzIFmhPILwB2LW7uXt5FAQpoLaAUbhdzslbrkAz3CwEukAa+KfJdU1tEEucNjM7IFGhe4FMHeIV/vdE8IO+kgJ4CCthazMoFPdMx1fMEuEAa+t4Y6KqMKlFDhsZnbAo0LrCuHfigs/H7eAcFKKCtgADnxrMyrG1ABnuuABdIQ98cg6nSqpqSO4bGZ2wKNCfgPRfSez4kXxSgQCwEEgqrx3JyNxbDWDYEF0iDD7zglA8BOGDwCIxOgcYEOluAz5cB/IGaxtx4NQX0FDjsZuWgntGY6mUCXCBfJqTxPx+GSj52Kt7vZK/UOCajUcBfgeGFwDuL/K3JahSgQNgCU+0lZEbflmrYjdnPHwEukP44RlYl31XaJiJnIgvAxhSIQuBECki3RtGZPSlAAR8EFLC9mJWzPpRiiYgEuEBGBO9n24FU+bJSeNPPmqxFAa0F+uYDI0u1jshwFKDA7AICXBnPyib6mC3ABdLs85tJP+hUsjWoiRiMwhEoUL/A/qVA7/z6r+eVFKCAFgKJGnJjvTKpRRiGaFqAC2TTdHrdWHAqRwG1V69UTEOBAAVWtALHUwE2YGkKUMB3AcExt0f2+V6XBUMX4AIZOnkwDTd33Ouozkt6X6hZEkwHVqWAfgKybRHU0EL9gjERBSgwm8DDZBsyF9fJI/KYL8AF0vwz/HGCfGpqt6jEiRiNxFEo8GKBFgE+WwZ08rk+fKtQQHcBpbCnmJOTuudkvvoEuEDW52TMVXmncl2g+owJzKAUmKuA92Bx7wHjfFGAAtoKKOBGMSvrtQ3IYA0LcIFsmEzvG/qd0oYE5KreKZmOAj4LfNgJvN7uc1GWowAF/BKo1bDxUq9c86se60QvwAUy+jPwPUHBKZ8CsMP3wixIAV0FXm0DPnF0TcdcFLBbQHDa7ZGddiPEb3oukPE7Uwwuv99dqz79GpC2GI7HkSgwq4C8txiqfwF1KEABvQSeJASZsR6p6BWLaeYqwAVyroKa3l9IVd6HUkc0jcdYFPBfYEEC+PMy4FcJ/2uzIgUo0KzAiJuVj5u9mffpK8AFUt+zmXOyvFO+JcCaORdiAQqYIpBfAOxabEpa5qRArAWUwu1iTtbGekiLh+MCGePDz3dNbRFJnI/xiByNAr8U+NQBXuFfb/CtQYGoBRSwtZiVC1HnYP9gBLhABuOqTdWBrsqoEjWkTSAGoUDQAuvagQ86g+7C+hSgwAsEBDg3npVhIsVXgAtkfM92ZrLBVGlVTcmdmI/J8SjwrID3XEjv+ZB8UYACkQgkFFaP5eRuJM3ZNBQBLpChMEfbpOCUDwE4EG0KdqdAiAKdLcDnywD+QE2I6GxFgR8FDrtZOUiPeAtwgYz3+c5MNwyVfOxUvN/JXmnBuByRAj8IDC8E3llEDQpQIFyBqfYSMqNvSzXctuwWtgAXyLDFI+qX7yptE5EzEbVnWwpEI3AiBaRbo+nNrhSwUEAB24tZOWvh6NaNzAXSoiMfSJUvK4U3LRqZo9ou0DcfGFlquwLnp0AoAgJcGc/KplCasUnkAlwgIz+C8AIMOpVsDWoivI7sRAENBPYvBXrnaxCEESgQb4FEDbmxXpmM95Sc7j8CXCAtey8UnMpRQO21bGyOa7PAilbgeMpmAc5OgeAFBMfcHtkXfCN20EWAC6QuJxFSjs0d9zqq85LeF2qWhNSSbSgQvcC2RcDQwuhzMAEF4inwMNmGzMV18iie43Gq2QS4QFr4vsinpnaLSpywcHSObKtAiwCfLQM6+VwfW98CnDs4AaWwp5iTk8F1YGUdBbhA6ngqIWTKO5XrAtUXQiu2oIAeAt6Dxb0HjPNFAQr4JqCAG8WsrPetIAsZI8AF0pij8jdov1PakIBc9bcqq1FAc4EPO4HX2zUPyXgUMEegVsPGS71yzZzETOqXABdIvyQNrFNwyqcA7DAwOiNToDmBV9uAT5zm7uVdFKDAswKC026P7CSLnQJcIO0895mpB5ff765Vn34NSJvFDBzdMgF5bzFU/wLLpua4FPBd4ElCkBnrkYrvlVnQCAEukEYcU3AhC6nK+1DqSHAdWJkCmgksSAB/Xgb8KqFZMMahgFECI25WPjYqMcP6KsAF0ldOM4vlnfItAdaYmZ6pKdCEQH4BsGtxEzfyFgpQQCncLuZkLSXsFuACaff5z0yf75raIpI4TwoKWCXwqQO8wr/esOrMOawvAgrYWszKBV+KsYixAlwgjT06f4MPdFVGlaghf6uyGgU0FljXDnzQqXFARqOAfgICnBvPyrB+yZgobAEukGGLa9pvMFVaVVNyR9N4jEWBYAS850J6z4fkiwIUqEsgobB6LCd367qYF8VagAtkrI+3seEKTvkQgAON3cWrKWCwQGcL8PkygD9QY/AhMnqIAofdrBwMsR9baSzABVLjwwk72jBU8rFT8X4ne2XYvdmPApEJDC8E3lkUWXs2poAhAlPtJWRG35aqIXkZM2ABLpABA5tWPt9V2iYiZ0zLzbwUmJPAiRSQbp1TCd5MgTgLKGB7MStn4zwjZ2tMgAtkY15WXD2QKl9WCm9aMSyHpIAn0DcfGFlKCwpQYBYBAa6MZ2UTcSjwUwEukHw//EJg0Klka1ATpKGAVQL7lwK9860amcNSoB6BRA25sV6ZrOdaXmOPABdIe866oUkLTuUooPY2dBMvpoDJAitageMpkydgdgr4LyA45vbIPv8Ls6LpAlwgTT/BgPJv7rjXUZ2X9L5QsySgFixLAf0Eti0Chhbql4uJKBCNwMNkGzIX18mjaNqzq84CXCB1Pp2Is+VTU7tFJU5EHIPtKRCeQIsAny0DOvlcn/DQ2UlXAaWwp5iTk7rmY65oBbhARuuvffe8U7kuUH3aB2VACvgl4D1Y3HvAOF8UsFhAATeKWVlvMQFHf4kAF0i+RV4o0O+UNiQgV8lEAasEPuwEXm+3amQOS4GfCtRq2HipV65RhQLPE+ACyffGSwUKTvkUgB0vvZAXUCAuAq+2AZ84cZmGc1CgMQHBabdHdjZ2E6+2TYALpG0n3sS8g8vvd9eqT78GpK2J23kLBYwUkPcWQ/UvMDI7Q1NgDgJPEoLMWI9U5lCDt1ogwAXSgkP2Y8RCqvI+lDriRy3WoIARAv9H4hH+v//Ti9phRF6GpIA/AiNuVj72pxSrxFmAC2ScT9fn2fJO+ZYAa3wuy3IU0FRA7cV42st2TNOAjEUBXwWU4HaxR9b6WpTFYivABTK2R+v/YPmuyhYRdd7/yqxIAd0EZMKd7u71UhUm1VcAcrolZB4K+C2ggK3FrFzwuy7rxVOAC2Q8zzWwqQa6KqNK1FBgDViYAhoIeL8FX3yQ/tKLkp9Qb4jgigaxGIECgQkIcG48K8OBNWDh2AlwgYzdkQY70GCqtKqm5E6wXVidAhEKKJxxH6Tf/WmCwqT6fwFsjzAVW1MgUIGEwuqxnNwNtAmLx0qAC2SsjjOcYQpO+RCAA+F0YxcKhCrwtJpoyfzl2+Wln3b97d/ViuT38H7asyXUNGxGgXAEDrtZORhOK3aJiwAXyLicZIhzDEMlHzsV71+mK0Nsy1YUCEPggDud/uNsjQqT6g8ADocRgj0oEKLAVHsJmdG3pRpiT7aKgQAXyBgcYhQj5LtK20TkTBS92ZMCAQnccafTr72odmFS/QPA6oD6sywFQhdQwPZiVs6G3pgNjRfgAmn8EUY3wECqfNn7skF0CdiZAj4KqNqQ+2DlFy9cICfUWxCc87ErS1EgMgEBroxnZVNkAdjYaAEukEYfX7ThB51KtgY1EW0KdqeADwIi593vut+qp1LhpvoCClvruZbXUEBngUQNubFemdQ5I7PpK8AFUt+zMSJZwakcBdReI8IyJAWeI1AD1lyaTnv/efqlr/6/qtcSNdx+6YW8gAI6CwiOuT2yT+eIzKa3ABdIvc9H+3SbO+51VOclvS/ULNE+LANSYFYBdcSdXrG/EZzChPoIgpFG7uG1FNBI4GGyDZmL6+SRRpkYxTABLpCGHZiOcfOpqd2iEid0zMZMFHiJQHnZdHfmc8j3jUjt+ptq/bY681ifmd865IsCJgkohT3FnJw0KTOz6ifABVK/MzEy0YBTua6g+owMz9D2Cgh2uN+lvYeEN/wqfKXeRQKnG76RN1AgQgEBboxnZX2EEdg6JgJcIGNykFGP0e+UNiQgV6POwf4UaEDgqjudfqOB639xaeGm+hIKG+dSg/dSIEyBWg0bL/XKtTB7slc8BbhAxvNcI5mq4JRPAdgRSXM2pUCDAkrV+ooPVn7V4G3PXJ6fVL3eJzpzqcF7KRCagOC02yM7Q+vHRrEW4AIZ6+MNd7jB5fe7a9WnXwPSFm5ndqNAYwICOTE+3f37xu6a/eqBSXVcAXv8qMUaFAhQ4ElCkBnrkUqAPVjaIgEukBYddhijFlKV96HUkTB6sQcFmhT415NWyVz5pvufTd7/zG1v3lC/bkvOfKFmsR/1WIMCAQmMuFn5OKDaLGuhABdICw896JHzTvmWAGuC7sP6FGhOQO11p1ccb+7e2e8qTCrv08xjftZkLQr4JaAEt4s9staveqxDAU+ACyTfB74L5LsqW0TUed8LsyAF5iwgE+50d++cy8xSoDCpvL+nzAVRmzUpMBcBBWwtZuXCXGrwXgr8XIALJN8TgQgMdFVGlaihQIqzKAWaFPB+u734IP1lk7e/8Lb8hHpDBFeCqM2aFGhWQIBz41kZbvZ+3keB5wlwgeR7IxCBwVRpVU3JnUCKsygFmhFQOOM+SL/bzK313lOYVN4zJbfXez2vo0DQAgmF1WM5uRt0H9a3T4ALpH1nHtrEBad8CMCB0BqyEQWeL/C0mmjJ/OXb5aUgkX77d7Ui+f3MF2paguzD2hSoU+Cwm5WDdV7LyyjQkAAXyIa4eHEjAsNQycdOxfuX6cpG7uO1FAhA4IA7nf5jAHV/UbIwqf4A4HAYvdiDAi8QmGovITP6tlSpRIEgBLhABqHKmj8K5LtK20TkDEkoEKHAHXc6/VqY/QuT6h8AVofZk70o8FMBBWwvZuUsVSgQlAAXyKBkWfdHgYFU+bL35QWSUCASAVUbch+s/CLM3oUJ9RYE58LsyV4U+I+AAFfGs7KJIhQIUoALZJC6rD0jMOhUsjWoCXJQIHQBkfPud91vhd4XQOGm+gIKW6PozZ52CyRqyI31yqTdCpw+aAEukEELs/6MQMGpHAXUXnJQIEyBGrDm0nTa+8/Job/6/6peS9RwO/TGbGi3gOCY2yP77Ebg9GEIcIEMQ5k9sLnjXkd1XtL7Qs0SclAgHAF1xJ1esT+cXrN3KUyojyAYiTIDe1sl8DDZhszFdfLIqqk5bCQCXCAjYbezaT41tVtU4oSd03PqkAXKy6a7M59Dvg+57zPtdv1NtX5bnXmsTzrKHOxth4BS2FPMyUk7puWUUQtwgYz6BCzrP+BUriuoPsvG5rhhCwh2uN+lvYd6R/4qfKXeRQKnIw/CALEWEODGeFbWx3pIDqeVABdIrY4j/mH6ndKGBORq/CflhBEKXHWn029E2P8XrQs31ZdQ2KhTJmaJl0Ctho2XeuVavKbiNDoLcIHU+XRimq3glE8B2BHT8ThWxAJK1fqKD1Z+FXGMZ9rnJ1Wv9wmRTpmYJUYCgtNuj+yM0UQcxQABLpAGHFLcIg4uv99dqz79GpC2uM3GeaIVEMiJ8enu30ebYvbuA5PquAL26JiNmYwWeJIQZMZ6pGL0FAxvnAAXSOOOLB6BC6nK+1DqSDym4RSaCPzrSatkrnzT/U9N8jwT480b6tdtyZkv1CzWMR8zGSsw4mblY2PTM7ixAlwgjT0684PnnfItAdaYPwkn0ENA7XWnVxzXI8vsKQqTyvt09JjOGZnNHAEluF3skbXmJGbSOAlwgYzTaRo2S76rskVEnTcsNuNqKSAT7nR3r5bRfhaqMKm8v8/MmZCVGfUWUMDWYlYu6J2S6eIqwAUyridryFwDXZVRJWrIkLiMqamA91vrxQfpLzWN90ys/IR6QwRXTMjKjPoKCHBuPCvD+iZksrgLcIGM+wlrPt9gqrSqpuSO5jEZT2cBhTPug/S7Okf8ebbCpPKeUbndpMzMqpdAQmH1WE7u6pWKaWwS4AJp02lrOmvBKR8CcEDTeIylt8DTaqIl85dvl5f0jvlsut/+Xa1Ifj/zhZoWk3IzqzYCh92sHNQmDYNYKcAF0spj12voYajkY6fi/ct0pV7JmMYAgQPudPqPBuT8RcTCpPoDgMMmZmfmSAWm2kvIjL4t1UhTsLn1AlwgrX8L6AGQ7yptE5EzeqRhCkME7rjT6dcMyTprzMKk+geA1SbPwOzhCihgezErZ8Ptym4U+KUAF0i+K7QRGEiVL3tfhtAmEIPoLaBqQ+6DlV/oHfLF6QoT6i0Izpk8A7OHJyDAlfGsbAqvIztR4PkCXCD57tBGYNCpZGtQE9oEYhB9BUTOu991v6VvwPqTFW6qL6Cwtf47eKWtAokacmO9Mmnr/JxbLwEukHqdh/VpCk7lKKD2Wg9BgBcK1IA1l6bT3n/+Nf7V/1f1WqKG28YPwgGCFRAcc3tkX7BNWJ0C9QtwgazfileGILC5415HdV7S+0LNkhDasYWRAuqIO71iv5HRnxO6MKE+gmAkTjNxFl8FHibbkLm4Th75WpXFKDAHAS6Qc8DjrcEI5FNTu0UlTgRTnVUNFygvm+7OfA753vA5nom/62+q9dvqzGN90nGai7P4I6AU9hRzctKfaqxCAX8EuED648gqPgsMOJXrCqrP57IsZ7qAYIf7Xdp7CHfsXoWv1LtI4HTsBuNAcxIQ4MZ4VtbPqQhvpkAAAlwgA0BlybkL9DulDQnI1blXYoUYCVx1p9NvxGieX4xSuKm+hMLGOM/I2RoTqNWw8VKvXGvsLl5NgeAFuEAGb8wOTQoUnPIpADuavJ23xUxAqVpf8cHKr2I21jPj5CdVr/eJU5xn5GwNCAhOuz2ys4E7eCkFQhPgAhkaNRs1KjC4/H53rfr0a0DaGr2X18dLQCAnxqe7fx+vqWafZmBSHVfAHhtm5YwvFHiSEGTGeqRCJwroKMAFUsdTYaYfBfJOaUQgH5HEaoF/PWmVzJVvuv9pg8KbN9Sv25IzX6hZbMO8nHF2AaWwv5iTI/ShgK4CXCB1PRnm+skSWb4lwBqS2Cqg9rrTK47bNH1hUnmfth6zaWbO+l8BJbhd7JG1NKGAzgJcIHU+HWabEch3VbaIqPPksFFAJtzp7l4bJy9MKu/vPXM2zm77zArYWszKBdsdOL/eAlwg9T4fpvu3wEBXZVSJGiKIXQLeb6MXH6S/tGvqH6bNT6g3RHDFxtltnlmAc+NZGbbZgLObIcAF0oxzsj7lYKq0qqbkjvUQNgEonHEfpN+1aeSfz1qYVN4zL7fbbGDb7AmF1WM5uWvb3JzXPAEukOadmbWJC075EIAD1gLYNfjTaqIl85dvl5fsGvvZaX/7d7Ui+f3MF2pabHawaPbDblYOWjQvRzVYgAukwYdnW/RhqORjp+L9y3SlbbNbOO8Bdzr9Rwvn/sXIhUn1BwCHaRF7gan2EjKjb0s19pNywFgIcIGMxTHaM0S+q7RNRM7YM7GVk95xp9OvWTn5c4YuTKp/AFhNk/gKKGB7MStn4zshJ4ubABfIuJ2oBfMMpMqXvS9XWDCqnSOq2pD7YOUXdg4/+9SFCfUWBOdoEk8BAa6MZ2VTPKfjVHEV4AIZ15ON8VyDTiVbg5qI8Yj2jiZy3v2u+y17AZ4/eeGm+gIKW2kTP4FEDbmxXpmM32ScKM4CXCDjfLoxnq3gVI4Cam+MR7RytBqw5tJ02vvPtXz9TKD/r+q1RA23CRMzAcExt0f2xWwqjmOBABdICw45jiNu7rjXUZ2X9L5QsySO89k5kzriTq/Yb+fs9U1dmFAfQTBS39W8ygCBh8k2ZC6uk0cGZGVECjwjwAWSbwhjBfKpqd2iEieMHYDBfypQXjbdnfkc8j1Zni+w62+q9dvqzGN90nQyX0Ap7Cnm5KT5k3ACGwW4QNp46jGaecCpXFdQfTEayc5RBDvc79LeQ7P5eolA4Sv1LhI4TSizBQS4MZ6V9WZPwfQ2C3CBtPn0YzB7v1PakIBcjcEoNo9w1Z1Ov2EzQKOzF26qL6GwsdH7eL0+ArUaNl7qlWv6JGISCjQmwAWyMS9eraFAwSmfArBDw2iMVIeAUom+4oPffFXHpbzk3wL5SdXrfYJFEEMFBKfdHtlpaHrGpsCMABdIvhGMFxhcfr+7Vq16fxfWZvwwlg0gkBPj092/t2xsX8YdmFTHFbDHl2IsEqbAk4QgM9YjlTCbshcF/BbgAum3KOtFIpB3SiMC+SiS5mzarMC/nrRK5so33f9stoDN9715Q/26LTnzhZrFNjuYNrtS2F/MyRHTcjMvBX4uwAWS74nYCOSd8i0B1sRmoNgPova60yuOx37MAAcsTCrv09tjAbZgaR8FlOB2sUfW+liSpSgQmQAXyMjo2dhvgXxXZYuIOu93XdYLQkAm3Onu3iAq21azMKm8vx/N2Ta3ifMqYGsxKxdMzM7MFOAnkHwPxFpgoKsyqkQNxXrIGAzn/ZZ58UH6yxiMEvkI+Qn1hgiuRB6EAV4oIMC58awMk4kCcRHgJ5BxOUnOMSMwmCqtqim5Qw6NBRTOuA/S72qc0LhohUnlPUNzu3HBLQqcUFg9lpO7Fo3MUWMuwAUy5gds43gFp3wIwAEbZzdg5qfVREvmL98uLxmQ1ZiIv/27WpH8fuYLNS3GhLYr6GE3KwftGpnTxl2AC2TcT9jC+Yahko+divcv05UWjq/7yAfc6fQfdQ9pYr7CpPoDgMMmZo955qn2EjKjb0s15nNyPMsEuEBaduC2jJvvKm0TkTO2zGvInHfc6fRrhmQ1MmZhUv0DwGojw8c0tAK2F7NyNqbjcSyLBbhAWnz4cR99IFW+7H1ZI+5zGjOfqg25D1Z+YUxeA4MWJtRbEJwzMHosIwtwZTwrm2I5HIeyXoALpPVvgfgCDDqVbA1qIr4TGjSZyHn3u+63DEpsbNTCTfUFFLYaO0CMgidqyI31ymSMRuIoFPhRgAsk3wyxFig4laOA2hvrIQ0YrgasuTSd9v7zKl8BC/T/Vb2WqOF2wG1Y/mUCgmNuj+x72WX85xQwVYALpKknx9x1CWzuuNdRnZf0vlCzpK4beFEAAuqIO71ifwCFWfI5AoUJ9REEIwSKTOBhsg2Zi+vkUWQJ2JgCAQtwgQwYmOWjF8inpnaLSpyIPomVCcrLprszn0O+t3L6iIbe9TfV+m115rE+6YgiWN1WKewp5uSk1QgcPvYCXCBjf8Qc0BMYcCrXFVQfNUIWEOxwv0t7D7nmK2SBwlfqXSRwOuS21rcT4MZ4VtZbD0GA2AtwgYz9EXNAT6DfKW1IQK5SI1SBq+50+o1QO7LZMwKFm+pLKGwkS3gCtRo2XuqVa+F1ZCcKRCPABTIad3aNQKDglE8B2BFBaytbKpXoKz74zVdWDq/J0PlJ1et9IqZJnPjHEJx2e2Rn/AflhBQAuEDyXWCNwODy+921atX7u7A2a4aOaFCBnBif7v59RO3Z9icCA5PquAL2ECVwgScJQWasRyqBd2IDCmggwAVSg0NghPAE8k5pRCAfhdfRyk7/etIqmSvfdP/Tyuk1G/rNG+rXbcmZL9Qs1ixarOIohf3FnByJ1VAchgIvEOACybeHdQJ5p3xLgDXWDR7awGqvO73ieGjt2OilAoVJ5X0afOylF/KCpgSU4HaxR9Y2dTNvooChAlwgDT04xm5eIN9V2SKizjdfgXc+X0Am3OnuXgrpJ1CYVN7fo+b0S2Z+IgVsLWblgvmTcAIK1C/ABbJ+K14ZI4GBrsqoEjUUo5G0GMX77fHig/SXWoRhiGcE8hPqDRFcIYu/AgKcG8/KsL9VWY0C+gtwgdT/jJgwAIHBVGlVTcmdAErbW1LhjPsg/a69APpPXphU3jM5t+uf1JyECYXVYzm5a05iJqWAPwJcIP1xZBUDBQpO+RCAAwZG1zHy02qiJfOXb5eXdAzHTD8I/PbvakXy+5kv1LTQxBeBw25WDvpSiUUoYJgAF0jDDoxx/RMYhko+direv0xX+lfV2koH3On0H62d3qDBC5PqDwAOGxRZ16hT7SVkRt+Wqq4BmYsCQQpwgQxSl7W1F8h3lbaJyBntg+od8I47nX5N74hM91OBwqT6B4DVVGleQAHbi1k523wF3kkBswW4QJp9fkzvg8BAqnzZ+/KHD6XsLKFqQ+6DlV/YObyZUxcm1FsQnDMzffSpBbgynpVN0SdhAgpEJ8AFMjp7dtZEYNCpZGtQE5rEMSuGyHn3u+63zArNtJ5A4ab6AgpbqdG4QKKG3FivTDZ+J++gQHwEuEDG5yw5yRwECk7lKKD2zqGElbfWgDWXptPefw7lyzCB/r+q1xI13DYsdvRxBcfcHtkXfRAmoEC0Alwgo/Vnd00ENnfc66jOS3pfqFmiSSQDYqgj7vSK/QYEZcTnCBQm1EcQjBCoboGHyTZkLq6TR3XfwQHv7vIAAA5DSURBVAspEFMBLpAxPViO1bhAPjW1W1TiRON3WnlHedl0d+ZzyPdWTh+ToXf9TbV+W515rE86JiMFOoZS2FPMyclAm7A4BQwR4AJpyEExZjgCA07luoLqC6ebwV0EO9zv0t5DqfkyXKBwU70LhdOGjxF4fAFujGdlfeCN2IAChghwgTTkoBgzHIF+p7QhAbkaTjdju1x1p9NvGJuewX8hULipvoTCRtI8X6BWw8ZLvXKNRhSgwA8CXCD5TqDAzwQKTvkUgB2EmV1AqURf8cFvvqJPfATyk6rX+4QtPhP5PIngtNsjO32uynIUMFqAC6TRx8fwQQgMLr/fXatWvb8Lawuivsk1ReHk+IP0HpNnYPbZBQYm1Akl2E2fXwg8SQgyYz1SoQ0FKPBfAS6QfDdQYBaBvFMaEchHxHlG4F/trZIZ/ab7n3SJn8DwDfXrx8mZL9Qsjt90zU+kFPYXc3Kk+Qq8kwLxFOACGc9z5VQ+COSd8i0B1vhQKiYl1F53esXxmAzDMWYRKEyq3wM4RpwfBJTgdrFH1tKDAhT4pQAXSL4rKPAcgXxXZYuIOk8gT0Am3OnuXlrEX6Awqby/b83Ff9KXT6iArcWsXHj5lbyCAvYJcIG078w5cQMCA12VUSVqqIFbYnmp91vhxQfpL2M5HId6RiA/od4QwRXbWQQ4N56VYdsdOD8FnifABZLvDQq8QGAwVVpVU3LHaiSFM+6D9LtWG1g2fGFSec/43G7Z2M+Mm1BYPZaTuzYbcHYKvEiACyTfHxR4iUDBKR8CcMBSqKfVREvmL98uL1k6v5Vj//bvakXy+5kv1LRYCQAcdrNy0NLZOTYF6hLgAlkXEy+yWWAYKvnYqXj/Ml1pocMBdzr9Rwvntn7kwqT6A4DDFkJMtfcgMypStXB2jkyBugW4QNZNxQttFsh3lbaJyBnLDO640+nXLJuZ4/5EoDCp/gFgtU0oCthezMpZm2bmrBRoRoALZDNqvMdKgYFU+bL3ZRJrhle1IffByi+smZeD/kKgMKHeguCcLTQCXBnPyiZb5uWcFJiLABfIuejxXqsEBp1KtgY1YcXQIufd77rfsmJWDvlCgcJN9QUUttrAlKghN9YrkzbMyhkpMFcBLpBzFeT9VgkUnMpRQO2N+9A1YM2l6bT3ny/5slyg/6/qtUQNt2PPIDjm9si+2M/JASngkwAXSJ8gWcYOgc0d9zqq85LeF2qWxHdidcSdXrE/vvNxskYFChPqIwhGGr3PoOsfJtuQubhOHhmUmVEpEKkAF8hI+dncRIF8amq3qMQJE7PXkbm8bLo78znk+zqu5SWWCOz6m2r9tjrzWJ90HEdWCnuKOTkZx9k4EwWCEuACGZQs68ZaYMCpXFdQfbEbUrDD/S7tPUSaLwo8I1C4qd6Fwum4sQhwYzwr6+M2F+ehQNACXCCDFmb9WAr0O6UNCcjVmA131Z1OvxGzmTiOjwKFm+pLKGz0sWTkpWo1bLzUK9ciD8IAFDBMgAukYQfGuPoIFJzyKQA79Ek0tyRKJfqKD37z1dyq8O44C+QnVa/3iV1sZhScdntkZ2zm4SAUCFGAC2SI2GwVL4HB5fe7a9Wq93dhbaZPJgonxx+k95g+B/MHLzAwoU4owe7gOwXe4UlCkBnrkUrgndiAAjEU4AIZw0PlSOEJ5J3SiEA+Cq9jIJ3+1d4qmdFvuv8ZSHUWjZXA8A3168fJmS/ULDZ5MKWwv5iTIybPwOwUiFKAC2SU+uwdC4G8U74lwBpzh1F73ekVx83Nz+RhCxQm1e8BHAu7r1/9lOB2sUfW+lWPdShgowAXSBtPnTP7KpDvqmwRUed9LRpaMZlwp7t7Q2vHRrERKEwq7+9lcyYOpICtxaxcMDE7M1NAFwEukLqcBHMYLTDQVRlVooZMG8L7be/ig/SXpuVm3ugF8hPqDRFciT5JYwkEODeeleHG7uLVFKDAzwW4QPI9QQEfBAZTpVU1JXd8KBVeCYUz7oP0u+E1ZKe4CRQmlffM0O0mzZVQWD2Wk7smZWZWCugowAVSx1NhJiMFCk75EIADhoR/Wk20ZP7y7fKSIXkZU0OB3/5drUh+P/OFmhYN480W6bCblYOGZGVMCmgtwAVS6+NhOJMEhqGSj52K9y/TlQbkPuBOp/9oQE5G1FygMKn+AOCw5jG9eFPtPciMilQNyMqIFNBegAuk9kfEgCYJ5LtK20TkjOaZ77jT6dc0z8h4BgkUJtU/AKzWObICthezclbnjMxGAZMEuECadFrMaoTAQKp82ftyirZhVW3IfbDyC23zMZhxAoUJ9RYE53QNLsCV8axs0jUfc1HARAEukCaeGjNrLTDoVLI1qAktQ4qcd7/rfkvLbAxltEDhpvoCClt1HCJRQ26sVyZ1zMZMFDBVgAukqSfH3FoLFJzKUUDt1S1kDVhzaTrt/edGvijgq0D/X9VriRpu+1rUj2KCY26P7POjFGtQgAL/FeACyXcDBQIQ2Nxxr6M6L+l9oWZJAOWbLKmOuNMr9jd5M2+jwEsFChPqIwhGXnpheBc8TLYhc3GdPAqvJTtRwA4BLpB2nDOnjEAgn5raLSpxIoLWs7UsL5vuznwO+V6TPIwRQ4Fdf1Ot31ZnHuuT1mE8pbCnmJOTOmRhBgrETYALZNxOlPNoJTDgVK4rqL7IQwl2uN+lvYc+80WBQAUKN9W7UDgdaJM6igtwYzwr6+u4lJdQgAJNCHCBbAKNt1CgXoF+p7QhAbla7/UBXXfVnU6/EVBtlqXALwQKN9WXUNgYJU2tho2XeuValBnYmwJxFuACGefT5WxaCBSc8ikAO6IKo1Sir/jgN19F1Z997RPIT6pe7xPAyCYXnHZ7ZGdk/dmYAhYIcIG04JA5YrQCg8vvd9eqVe/vwtrCTiIKJ8cfpPeE3Zf9KDAwoU4owe4IJJ4kBJmxHqlE0JstKWCNABdIa46ag0YpkHdKIwL5KOQM/2pvlczoN93/DLkv21EAwzfUrx8nZ75QszhMDqWwv5iTI2H2ZC8K2CjABdLGU+fMkQjknfItAdaE11ztdadXHA+vHztR4FmBwqT6PYBjYbkowe1ij6wNqx/7UMBmAS6QNp8+Zw9VIN9V2SKizofTVCbc6e7ecHqxCwWeL1CYVN7f3+bCMFLA1mJWLoTRiz0oYLsAF0jb3wGcP1SBga7KqBI1FHRT77e4iw/SXwbdh/Up8DKB/IR6QwRXXnbdXP+5AOfGszI81zq8nwIUqE+AC2R9TryKAr4IDKZKq2pK7vhS7HlFFM64D9LvBtqDxSnQgEBhUnnPIN3ewC0NX5pQWD2Wk7sN38gbKECBpgS4QDbFxpso0LxAwSkfAnCg+QovvPNpNdGS+cu3y0sB1WdZCjQs8Nu/qxXJ72e+UNPS8M313XDYzcrB+i7lVRSggB8CXCD9UGQNCjQgMAyVfOxUvH+ZrmzgtnovPeBOp/9Y78W8jgJhCRQm1R8AHA6g31R7DzKjItUAarMkBSjwHAEukHxrUCACgXxXaZuInPG59R13Ov2azzVZjgK+CRQm1T8ArPatIAAFbC9m5ayfNVmLAhR4uQAXyJcb8QoKBCIwkCpf9r7s4ltxVRtyH6z8wrd6LEQBnwUKE+otCM75VVaAK+NZ2eRXPdahAAXqF+ACWb8Vr6SArwKDTiVbg5rwpajIefe77rd8qcUiFAhQoHBTfQGFrX60SNSQG+uVST9qsQYFKNCYABfIxrx4NQV8FSg4laOA2jvXojVgzaXptPefB/migNYC/X9VryVquD3nkIJjbo/sm3MdFqAABZoS4ALZFBtvooA/Aps77nVU5yW9L9Qsab6iOuJOr9jf/P28kwLhChQm1EcQjMyh68NkGzIX18mjOdTgrRSgwBwEuEDOAY+3UsAPgXyqvFsUTjRXS8rLpn+T+RzyfXP38y4KhC+w62+q9dvqzGN90s10Vwp7ijk52cy9vIcCFPBHgAukP46sQoE5CQw4lesKqq/hIoId7ndp7yHNfFHAKIHCTfUuFE43GlqAG+NZWd/ofbyeAhTwV4ALpL+erEaBpgT6ndKGBORqgzdfdafTbzR4Dy+ngDYChZvqSyhsbCRQrYaNl3rlWiP38FoKUMB/AS6Q/puyIgWaEig45VMAdtR7s1KJvuKD33xV7/W8jgK6CeQnVa/3iWLduQSn3R7ZWff1vJACFAhMgAtkYLQsTIHGBAaX3++uVave34W1vexOUTg5/iC952XX8Z9TQHeBgQl1Qgl215HzSUKQGeuRSh3X8hIKUCBgAS6QAQOzPAUaEcg7pRGBfPSSe/7V3iqZ0W+6/9lIbV5LAR0Fhm+oXz9OznyhZvGL8imF/cWcHNFxBmaigI0CXCBtPHXOrLVA3infEmDN80Oqve70iuNaD8FwFGhAoDCpfg/g2PNuUYLbxR5Z20BJXkoBCgQswAUyYGCWp0CjAvmuyhYRdX72+2TCne7ubbQmr6eA7gKFSeX9PW9utpwK2FrMygXdZ2A+CtgkwAXSptPmrMYIDHRVRpWooZ8H9n47u/gg/aUxgzAoBeoUyE+oN0Rw5eeXC3BuPCvDdZbhZRSgQEgCXCBDgmYbCjQiMJgqraopufPMPQpn3Afpdxupw2spYJJAYVJ5zzTd/tPMCYXVYzm5a9IczEoBGwS4QNpwypzRSIGCUz4E4MC/wz+tJloyf/l2ecnIYRiaAnUI/PbvakXy+5kv1LT8+/LDblYO1nErL6EABUIW4AIZMjjbUaBegWGo5GOn4v3LdKW3SLrT6T/Wey+vo4CpAoVJ9QcAhwFMtfcgMypSNXUW5qZAnAW4QMb5dDmb8QL5rtI2Efl/3On0a8YPwwEoUKdAYVL9QwGfFLNyts5beBkFKBCywP8P70zHYK41CFEAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  WellStore membantu gamers
                  <br />
                  untuk menjadi Gamers sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2023. All Rights Reserved.</p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          About Us
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          Press Release
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          Terms of Use
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          Privacy & Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          Unlock Rewards
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="" className="text-lg color-palette-1 text-decoration-none">
                          Live Chatting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a href="mailto: hi@store.gg" className="text-lg color-palette-1 text-decoration-none">
                          @wellstore
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="mailto: team@store.gg" className="text-lg color-palette-1 text-decoration-none">
                          well.store@gmail.com
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Dipatiukur 12, Bandung
                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="tel: 02111229090" className="text-lg color-palette-1 text-decoration-none">
                          081267140932
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
