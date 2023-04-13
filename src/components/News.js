import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
 
    const capitalizeFirstLatter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const updateNews = async() => {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      //let data = []
      let parsedData = await data.json();
      props.setProgress(50);
      setArticles(articles => parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(70);
      props.setProgress(100);
    }
    
    useEffect(() => {
      document.title = `${capitalizeFirstLatter(props.category)} - NewsMonkey`;
      updateNews();
      // eslint-disable-next-line
    }, []);
    

    const fetchMoreData = async() => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      let data = await fetch(url);
      //let data = []
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      
    }

    // handlePrevClick = async () => {
    //     await this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     await this.setState({ page: this.state.page + 1 });
    //     this.updateNews()
    // }

    return (
      <>
        <h1 style={{margin: '40px', marginTop: '100px'}} >Top Headlines on {capitalizeFirstLatter(props.category)}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
                { articles.map((element, index)=>{
                  return (<div className="col-md-4" key={index}>
                  <NewsItem title={element.title} discription={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>)
                })
                }   
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News