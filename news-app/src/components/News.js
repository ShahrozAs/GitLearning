// import React, { Component } from "react";
// import NewsItems from "./NewsItems";
// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       page: 1,
//       totalResults: 0,
//       loading: false,
//     };
//     document.title=`${this.capitalizeFirstLetter(props.category) } - NewsMonkey`;
//   }

//   capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   async updateCode() {
//     props.setProgress(10)
//     this.setState({
//       loading: true,
//     });
//     const response = await fetch(
//       `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsapi}&page=${this.state.page}&pageSize=${props.pageSize}`
//     );
//     props.setProgress(30)
//     const json = await response.json();
//     props.setProgress(70)
//     this.setState({
//       articles: json.articles,
//       totalResults: json.totalResults,
//       loading: false,
//     });
//     props.setProgress(100)
//   }

//   async componentDidMount() {
//     this.updateCode();
//   }

//   handlePrev = async () => {
//     this.setState({
//       page: this.state.page - 1,
//     });
//     this.updateCode();
//   };

//   handleNext = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//     this.updateCode();
//   };

//   fetchMoreData=async()=>{
//     this.setState({
//       page: this.state.page + 1,
//     });
//     const response = await fetch(
//       `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsapi}&page=${this.state.page}&pageSize=${props.pageSize}`
//     );
//     const json = await response.json();
//     this.setState({
//       articles: this.state.articles.concat(json.articles) ,
//       totalResults: json.totalResults,
//       loading: false,
//     });
//   }

//   render() {
//     return (
//       <>

//           <h1 className="d-flex justify-content-center">
//             NewsMonkey - Top {this.capitalizeFirstLetter(props.category)}{" "}
//             Headlines
//           </h1>
//           {this.state.loading && <Spinner />}

//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length!==this.state.totalResults}
//             loader={<Spinner/>}

//           >
//            <div className="container">
//            <div className="row">
//             {this.state.articles.map((elements) => {
//               return (
//                 <div className="col-md-4 my-3">
//                   <NewsItems
//                     title={elements.title}
//                     description={elements.description}
//                     urlToImage={elements.urlToImage}
//                     url={elements.url}
//                     author={elements.author}
//                     publishedAt={elements.publishedAt}
//                     source={elements.source.name}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//            </div>

//           </InfiniteScroll>

//           {/* <div class="d-flex justify-content-between">
//             <button
//               type="button"
//               disabled={this.state.page <= 1}
//               onClick={this.handlePrev}
//               className="btn btn-dark"
//             >
//               {" "}
//               &larr;Previous
//             </button>
//             <button
//               type="button"
//               disabled={
//                 this.state.page + 1 >
//                 Math.ceil(this.state.totalResults / props.pageSize)
//               }
//               onClick={this.handleNext}
//               className="btn btn-dark"
//             >
//               Next &rarr;
//             </button>
//           </div> */}

//       </>
//     );
//   }
// }

// export default News;

import React from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

const News = (props) => {
  // document.title=`${capitalizeFirstLetter(props.category) } - NewsMonkey`;
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [loading, setloading] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateCode = async () => {
    props.setProgress(10);
    setloading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsapi}&page=${page}&pageSize=${props.pageSize}`
    );
    props.setProgress(30);
    const json = await response.json();
    props.setProgress(70);
    setarticles(json.articles);
    settotalResults(json.totalResults);
    setloading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateCode();
  }, []);

  const fetchMoreData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsapi}&page=${page+1}&pageSize=${props.pageSize}`
      );
      setpage(page + 1);
    const json = await response.json();

    setarticles(articles.concat(json.articles));
    settotalResults(json.totalResults);
    setloading(false);
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((elements) => {
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
    </>
  );
};

export default News;
