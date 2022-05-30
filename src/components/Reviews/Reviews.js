import React, { useContext } from 'react';
import { AllContext } from '../../App';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css';



const Reviews = () => {

    const { reviews } = useContext(AllContext);

    const review = reviews.map(review => {
        return (
            <SingleReview
                key={review.id}
                {...review}
            ></SingleReview>
        )
    })

    return (
        <div className="row container mx-auto my-4">
            {review}
        </div>
    );
};

export default Reviews;