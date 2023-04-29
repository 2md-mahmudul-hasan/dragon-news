import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import Editor from './EditorsInsight/Editor';

const News = () => {
  const news = useLoaderData()
  const { image_url, details, title, category_id } = news
  return (
    <Card>
      <Card.Header className='d-flex align-items-center'>
        <Card.Title>{title}</Card.Title>
        <div className='ps-2 flex-grow-1'>
          <Card.Img variant="top" src={image_url} />
        </div>

      </Card.Header>
      <Card.Body>


        <Card.Text>
          {details}
        </Card.Text>
        <Card.Footer >

          <Link to={`/category/${category_id}`}>All category news </Link>

        </Card.Footer>
      </Card.Body>
      <div>
        <Editor></Editor>
      </div>
    </Card>
  );
};

export default News;