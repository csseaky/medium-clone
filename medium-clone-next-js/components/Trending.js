import React from "react";

const Trending = () => {
  return (
    <div className="trending-container">
      <div className="trending-wrapper">
        <div className="trending-text-and-logo">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            className="ix z"
          >
            <path fill="#fff" d="M0 .8h28v28H0z"></path>
            <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
              <path fill="#fff" d="M4 4.8h20v20H4z"></path>
              <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
              <path
                d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                stroke="#000"
                strokeLinecap="round"
              ></path>
            </g>
            <defs>
              <clipPath id="trending_svg__clip0">
                <path
                  fill="#fff"
                  transform="translate(4 4.8)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <h4>TRENDING ON MEDIUM</h4>
        </div>
        <div className="posts">
          <ShortPost />
          <ShortPost />
          <ShortPost />
          <ShortPost />
          <ShortPost />
          <ShortPost />
        </div>
      </div>
    </div>
  );
};

export default Trending;

const ShortPost = () => {
  return (
    <div className="short-post">
      <h4>01</h4>
      <div>
        <div className="short-post-title-and-avatar">
          <img
            src="https://miro.medium.com/fit/c/20/20/1*j3YqKZ2cbnGn-XNFZs0ulQ.png"
            alt=""
          />
          <h6>Rowan Kavner in Dodger Insider</h6>
        </div>
        <p className="short-post-title">
          Injury Updates: Bellinger has slight hairline fracture in leg
        </p>
        <p className="short-post-date">Apr 17 · 2 min read</p>
      </div>
    </div>
  );
};
