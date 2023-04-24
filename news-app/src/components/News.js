import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category) } - NewsMonkey`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateCode() {
    this.props.setProgress(10)
    this.setState({
      loading: true,
    });
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c5e5ec518bc4fe29c8f9469a9bd9d1c&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.props.setProgress(30)
    const json = await response.json();
    this.props.setProgress(70)
    this.setState({
      articles: json.articles,
      totalResults: json.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateCode();
  }

  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateCode();
  };

  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateCode();
  };

  fetchMoreData=async()=>{
    this.setState({
      page: this.state.page + 1,
    });
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c5e5ec518bc4fe29c8f9469a9bd9d1c&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    const json = await response.json();
    this.setState({
      articles: this.state.articles.concat(json.articles) ,
      totalResults: json.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <>
      
        
          <h1 className="d-flex justify-content-center">
            NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spinner/>}
            
          >
           <div className="container">
           <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-md-4 my-3">
                  <NewsItems
                    title={elements.title}
                    description={elements.description}
                    urlToImage={elements.urlToImage}
                    url={elements.url}
                    author={elements.author}
                    publishedAt={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
          </div>
           </div>


          </InfiniteScroll>

        
          {/* <div class="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.handlePrev}
              className="btn btn-dark"
            >
              {" "}
              &larr;Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNext}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div> */}
        
      
      </>
    );
  }
}

export default News;
