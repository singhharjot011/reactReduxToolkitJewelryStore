import { getProductReviews, getReviews } from "../../services/apiStore";
import WorldIcon from "../icons/WorldIcon";
import Stars from "../stars/Stars";
import Tagline from "../Tagline";
import ReviewItem from "./ReviewItem";

const reviews = await getProductReviews();

function Reviews() {
  return (
    <>
      <Tagline
        tagline={"Global Love"}
        paragraph={
          "Experience the global embrace of our exquisite jewelry collection, cherished by hearts around the world."
        }
      />

      <div className="flex h-96 w-full space-x-2 p-4">
        <div className="flex w-1/3 items-center justify-center overflow-hidden rounded-lg">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww"
          />
        </div>
        <div className="flex w-1/3 items-center justify-center overflow-hidden rounded-lg">
          <img
            className="object-cover"
            src="https://plus.unsplash.com/premium_photo-1683140614394-5c9d18fdff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBtb2RlbCUyMHdlYXJpbmclMjBqZXdlbHJ5fGVufDB8fDB8fHww"
          />
        </div>
        <div className="flex w-1/3 items-center justify-center overflow-hidden rounded-lg">
          <img
            className="object-cover"
            src="https://plus.unsplash.com/premium_photo-1705908024118-aa9c8bea9619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhcHB5JTIwbW9kZWwlMjB3ZWFyaW5nJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </div>

      {reviews.map((rev, i) => (
        <ReviewItem
          title={rev.title}
          review={rev.review}
          productCode={rev.productCode}
          customerRating={rev.customerRating || 5}
          location={rev.location}
          customerName={rev.customerName}
          key={i}
          index={i}
        />
      ))}
    </>
  );
}

export default Reviews;
