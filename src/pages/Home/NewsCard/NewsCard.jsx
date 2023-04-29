import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { _id, image_url, details, title, author, total_view, rating } = news
  return (
    <Card>
      <Card.Header className='d-flex align-items-center'>
        <Card.Img style={{ 'height': '40px', 'width': '40px' }} variant="top" className='rounded-circle' src={author.img} />
        <div className='ps-2 flex-grow-1'>
          <p className='m-0'>{author?.name}</p>
          <p>{moment(author?.published_date).format('dddd, MMMM, YYYY')}</p>
        </div>
        <div>
          <FaBookmark></FaBookmark> <FaShareAlt ></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 100 ? <>{details.slice(0, 100)}.... <Link to={`/news/${_id}`}>read more </Link></> : <p>{details}</p>}

        </Card.Text>
        <Card.Footer >
          <div className="d-flex justify-between">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar className='text-warning' />}
              placeholderSymbol={<FaStar className='text-warning' />}
              fullSymbol={<FaStar />}
            />
            <div className="d-flex align-items-center">
              <FaEye></FaEye>{total_view}
            </div>
          </div>



        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;