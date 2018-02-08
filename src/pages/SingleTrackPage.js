import React from 'react';

const SingleTrackPage = () => (
  <div>
    <section className="section">
      <div className="container">
        <h1 className="title">Single Track Page!</h1>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-reply" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-retweet" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-heart" />
                  </span>
                </a>
              </div>
            </nav>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag">Category</span>
                  <span className="tag is-info">JavaScript</span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag">Concept</span>
                  <span className="tag is-info">Recursion</span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag">Followers</span>
                  <span className="tag is-info">255</span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag">Resources</span>
                  <span className="tag is-info">23</span>
                </div>
              </div>
            </div>
          </div>
          <div className="media-right">
            <p className="image margin-bottom-24">
              <img
                alt="track"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </p>
          </div>
        </article>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <nav className="panel">
          <p className="panel-heading">Resources</p>
          <p className="panel-tabs">
            <a className="is-active">all</a>
            <a>article</a>
            <a>tutorial</a>
            <a>video</a>
          </p>
          <a className="panel-block is-active">
            <span className="panel-icon">
              <i className="fa fa-file-video-o" aria-hidden="true" />
            </span>
            A Complete Guide to Learning Recursion
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-file-video-o" aria-hidden="true" />
            </span>
            A Complete Guide to Learning Recursion Pt. 2
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-file-code-o" aria-hidden="true" />
            </span>
            Learn Recursion by Example
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-file-video-o" aria-hidden="true" />
            </span>
            A Complete Guide to Learning Recursion
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-file" aria-hidden="true" />
            </span>
            A Complete Guide to Learning Recursion
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-file-video-o" aria-hidden="true" />
            </span>
            A Complete Guide to Learning Recursion
          </a>
        </nav>
      </div>
    </section>
  </div>
);

export default SingleTrackPage;
