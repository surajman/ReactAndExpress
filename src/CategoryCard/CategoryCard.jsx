import React from 'react';
import Button from 'react-bootstrap/Button';
import './CategoryCard.css';

const CategoryCard = (category) => {
    return(
        <div className="category">
            {category.name} books
            <Button href={`/books?category=${category.id}`} variant="info">Explore</Button>
        </div>
    );
};

export default CategoryCard;