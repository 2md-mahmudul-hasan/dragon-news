import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

  const CategoryNews = useLoaderData()
  return (
    <div>
      {
        CategoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
      }
    </div>
  );
};

export default Category;