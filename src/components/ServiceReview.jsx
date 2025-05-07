import React, { useState } from 'react';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        review: '',
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.review && formData.rating) {
            setReviews(prev => [...prev, formData]);
            setFormData({ review: '', rating: '' }); 
        }
    };

    return (
        <div className="my-10 flex flex-col md:flex-row justify-center gap-10 px-4">
            
            <div className="card w-full max-w-md bg-base-100 shadow-2xl py-8 px-6">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-3xl font-semibold text-center mb-6">Submit Your Review</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Review</span>
                        </label>
                        <input
                            type="text"
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                            className="input input-bordered"
                            placeholder="Write your thoughts"
                            required
                        />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-medium">Rating (1-5)</span>
                        </label>
                        <input
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            className="input input-bordered"
                            placeholder="Give Rating"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-neutral w-full">Submit Review</button>
                    </div>
                </form>
            </div>

            
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">User Reviews</h2>
                {reviews.length === 0 ? (
                    <p className="text-center text-gray-500">No reviews yet.</p>
                ) : (
                    <div className="space-y-4">
                        {reviews.map((r, i) => (
                            <div key={i} className="bg-base-200 p-4 rounded-lg shadow">
                                <p className="font-medium">📝 {r.review}</p>
                                <p className="text-sm text-gray-600">⭐ Rating: {r.rating}/5</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewSection;
