import React from "react";

const MorePosts = () => {
  return (
    <div className="more-posts-container">
      <div className="posts-lists">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="discover-more-section">
        <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
        <div className="buttons">
          <button className="tag-btn">Self</button>
          <button className="tag-btn">Relationships</button>
          <button className="tag-btn">Data Science</button>
          <button className="tag-btn">Programming</button>
          <button className="tag-btn">Productivity</button>
          <button className="tag-btn">Javascript</button>
          <button className="tag-btn">Machine Learning</button>
          <button className="tag-btn">Politics</button>
          <button className="tag-btn">Health</button>
        </div>
        <p className="discover-more-see-all-topics">See all topics</p>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className="post">
      <div className="post-content">
        <div className="post-title-and-svg">
          <img
            src="https://miro.medium.com/fit/c/20/20/1*8OIW1rabg1zNia0RjTm0KQ.png"
            alt=""
          />
          <p>Tim Denning in The Ascent</p>
        </div>
        <h5>
          Bitcoin Hitting $100,000 Doesn’t Matter. Many People Have Missed the
          Point.
        </h5>
        <p>
          I learned this: tricking yourself into thinking you’re getting richer
          is one of the biggest lies of current society.
        </p>
        <div className="post-metadata">
          <p> Feb 26 · 6 min read</p>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <path
              d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="post-image">
        <img
          src="https://miro.medium.com/fit/c/200/134/1*NOKmgmX9LJzkYgE80D2MSA.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MorePosts;
