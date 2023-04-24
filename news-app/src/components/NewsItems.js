import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, urlToImage, url, publishedAt, author, source } =
      this.props;
    return (
      <div>
        <div className="card my-3">
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "90%" }}
            >
              {source}
            </span>
          </div>

          <a href={url} rel="noreferrer" target="_blank">
            <img
              src={
                !urlToImage
                  ? "https://help.nextcloud.com/uploads/default/original/3X/e/0/e0d3dce7ac5527c8f6dfa1590c75a72dd951e540.png"
                  : urlToImage
              }
              className="card-img-top"
              alt="..."
            />
          </a>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div class="card-text my-1">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </div>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
