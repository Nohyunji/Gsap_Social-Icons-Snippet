import React, { useEffect } from "react";
import { gsap, Power1, Expo } from "gsap";

import "./App.css";

function App() {
  let plusBox = null;

  useEffect(() => {
    var quadrantItems = document.querySelectorAll(".quadrant__item");

    plusBox = gsap.timeline({ paused: true });

    plusBox.timeScale(1.6);
    plusBox.to(
      ".cube",
      0.4,
      { rotation: 45, width: "120px", height: "120px", ease: Expo.easeOut },
      "first"
    );
    plusBox.to(
      ".plus .plus-vertical",
      0.3,
      { height: "0", backgroundColor: "#f45c41", ease: Power1.easeIn },
      "first"
    );
    plusBox.to(
      ".plus .plus-horizontal",
      0.3,
      { width: "0", backgroundColor: "#f45c41", ease: Power1.easeIn },
      "first"
    );
    plusBox.to(".cube", 0, { backgroundColor: "transparent" });
    plusBox.to(quadrantItems[0], 0.15, { x: -5, y: -5 }, "seperate");
    plusBox.to(".arrow-up", 0.2, { opacity: 0.6, y: 0 }, "seperate+=0.2");
    plusBox.to(quadrantItems[1], 0.15, { x: 5, y: -5 }, "seperate");
    plusBox.to(".arrow-right", 0.2, { opacity: 0.6, x: 0 }, "seperate+=0.2");
    plusBox.to(quadrantItems[3], 0.15, { x: 5, y: 5 }, "seperate");
    plusBox.to(".arrow-down", 0.2, { opacity: 0.6, y: 0 }, "seperate+=0.2");
    plusBox.to(quadrantItems[2], 0.15, { x: -5, y: 5 }, "seperate");
    plusBox.to(".arrow-left", 0.2, { opacity: 0.6, x: 0 }, "seperate+=0.2");
  }, []);

  const play = (e) => {
    plusBox.play();
  };

  const reverse = () => {
    plusBox.reverse();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="cube" onMouseEnter={play} onMouseLeave={reverse}>
            <div className="plus">
              <div className="plus-horizontal"></div>
              <div className="plus-vertical"></div>
            </div>
            <div className="quadrant">
              <div className="quadrant__item">
                <div className="quadrant__item__content">
                  <svg
                    enable-background="new 0 0 32 32"
                    height="26px"
                    id="Layer_1"
                    version="1.0"
                    viewBox="0 0 32 32"
                    width="26px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="arrow-up"
                  >
                    <path
                      d="M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563  c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z"
                      fill="#973928"
                    />
                  </svg>
                </div>
              </div>
              <div className="quadrant__item">
                <div className="quadrant__item__content">
                  <svg
                    enable-background="new 0 0 32 32"
                    height="28px"
                    id="Layer_1"
                    version="1.0"
                    viewBox="0 0 32 32"
                    width="28px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    class="arrow-right"
                  >
                    <path
                      d="M15.996,0.007C7.162,0.007,0,7.168,0,16.004c0,6.551,3.938,12.177,9.575,14.65  c-0.045-1.118-0.008-2.459,0.278-3.672c0.308-1.301,2.058-8.719,2.058-8.719s-0.512-1.021-0.512-2.529  c0-2.369,1.376-4.14,3.087-4.14c1.454,0,2.157,1.091,2.157,2.4c0,1.462-0.934,3.65-1.412,5.676c-0.401,1.696,0.852,3.08,2.522,3.08  c3.031,0,5.072-3.891,5.072-8.504c0-3.505-2.361-6.128-6.655-6.128c-4.852,0-7.874,3.617-7.874,7.659  c0,1.394,0.411,2.377,1.054,3.138c0.297,0.35,0.338,0.489,0.229,0.891c-0.074,0.296-0.25,1.003-0.324,1.283  c-0.107,0.407-0.434,0.551-0.801,0.4c-2.235-0.91-3.275-3.358-3.275-6.11c0-4.543,3.831-9.993,11.433-9.993  c6.106,0,10.128,4.42,10.128,9.164c0,6.275-3.491,10.963-8.633,10.963c-1.728,0-3.353-0.934-3.907-1.992c0,0-0.93,3.686-1.125,4.396  c-0.34,1.231-1.004,2.466-1.61,3.427C12.901,31.769,14.421,32,15.996,32c8.834,0,15.995-7.16,15.995-15.996  S24.83,0.007,15.996,0.007z"
                      fill="#973928"
                    />
                  </svg>
                </div>
              </div>
              <div className="quadrant__item">
                <div className="quadrant__item__content">
                  <svg
                    enable-background="new 0 0 32 32"
                    height="28px"
                    id="Layer_1"
                    version="1.0"
                    viewBox="0 0 32 32"
                    width="28px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    class="arrow-right"
                  >
                    <path
                      d="M15.996,0.007C7.162,0.007,0,7.168,0,16.004c0,6.551,3.938,12.177,9.575,14.65  c-0.045-1.118-0.008-2.459,0.278-3.672c0.308-1.301,2.058-8.719,2.058-8.719s-0.512-1.021-0.512-2.529  c0-2.369,1.376-4.14,3.087-4.14c1.454,0,2.157,1.091,2.157,2.4c0,1.462-0.934,3.65-1.412,5.676c-0.401,1.696,0.852,3.08,2.522,3.08  c3.031,0,5.072-3.891,5.072-8.504c0-3.505-2.361-6.128-6.655-6.128c-4.852,0-7.874,3.617-7.874,7.659  c0,1.394,0.411,2.377,1.054,3.138c0.297,0.35,0.338,0.489,0.229,0.891c-0.074,0.296-0.25,1.003-0.324,1.283  c-0.107,0.407-0.434,0.551-0.801,0.4c-2.235-0.91-3.275-3.358-3.275-6.11c0-4.543,3.831-9.993,11.433-9.993  c6.106,0,10.128,4.42,10.128,9.164c0,6.275-3.491,10.963-8.633,10.963c-1.728,0-3.353-0.934-3.907-1.992c0,0-0.93,3.686-1.125,4.396  c-0.34,1.231-1.004,2.466-1.61,3.427C12.901,31.769,14.421,32,15.996,32c8.834,0,15.995-7.16,15.995-15.996  S24.83,0.007,15.996,0.007z"
                      fill="#973928"
                    />
                  </svg>
                </div>
              </div>
              <div className="quadrant__item">
                <div className="quadrant__item__content">
                  <svg
                    baseProfile="tiny"
                    height="42px"
                    id="Layer_1"
                    version="1.2"
                    viewBox="0 0 24 24"
                    width="42px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="arrow-down"
                  >
                    <path
                      d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z"
                      fill="#973928"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
