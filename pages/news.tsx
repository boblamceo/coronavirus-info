import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import NewsCard from '../components/NewsCard';
import moment from 'moment'
import {NextPage} from 'next'

interface Props {
  newsData: Array<{
    source: {id: string | null, name: string};
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string
  }>
}

const NewsPage: NextPage<Props> = ({newsData}) => {
  console.log(newsData)
  
  return (  <Grid container style={{display: 'flex', justifyContent: 'space-evenly'}}>
  {newsData?.map(({ url, title, source: { name }, content, publishedAt }) => {
    // @ts-ignore
const date = moment(publishedAt)._d
    return (
      <a href={url} style={{   display: 'inline', textAlign: 'center' }} key={Math.floor(Math.random()*100000000000)}>
            <NewsCard title={title} content={content} date={date} source={name}/>
            <br />
      </a>
    )
  })}
  </Grid>)
};

NewsPage.getInitialProps = async () => {
const newsData = await axios
  .get('http://newsapi.org/v2/everything?q=coronavirus&from=function%20getFullYear()%20{%20[native%20code]%20}-function%20getMonth()%20{%20[native%20code]%20}-function%20getDate()%20{%20[native%20code]%20}&sortBy=publishedAt&language=en&apiKey=889fa0ba853e4b8394713d2c0cf908cb')
  .then((response) => {
      return response.data.articles;
  })
  .catch((error) => {
      console.log('error: ', error);
  });

  return {
    newsData
  }
}

export default NewsPage