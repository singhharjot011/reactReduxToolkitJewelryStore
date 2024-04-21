import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WorldIcon from "../icons/WorldIcon";
import Stars from "../stars/Stars";

function ReviewItem({
  title,
  review,
  productCode,
  customerName,
  customerRating,
  location,
  index,
}) {
  const { products } = useSelector((state) => state.products);
  const curProduct = products.filter((i) => i.productCode === productCode);

  return (
    <div
      className={`flex w-full flex-col items-center justify-center sm:w-3/4 ${index % 2 === 0 ? "self-start" : "self-end"} rounded-lg p-1 md:p-4 lg:w-2/3`}
    >
      <article className="bg-grey mx-auto flex flex-col overflow-hidden rounded-xl border border-yellow-500 md:flex-row ">
        <div className="flex space-x-2  space-y-4 p-2 md:flex-col md:space-x-0 md:p-4">
          <div className="flex w-max items-center space-x-2 text-stone-500 md:flex-col md:space-x-0 md:space-y-1 ">
            <p>{customerName}</p>
            <p className="text-xs">
              <time>March 3, 2023</time>
            </p>
            <p className="flex text-xs">
              <WorldIcon height={"15px"} /> {location}
            </p>
          </div>
          <Stars rating={customerRating} />
          <Link to={`/product/${curProduct[0].productCode}`}>
            <img className="h-12 w-12 cursor-pointer" src={curProduct[0].img} />
          </Link>
        </div>
        <div className="flex flex-col p-1 md:p-4">
          <h3 className="text-sm font-semibold md:text-lg">{title}</h3>
          <span className="text-xs md:text-sm ">
            Product: {curProduct[0].productName}| Prdouct Code: {productCode} |
            <span className="text-xs text-yellow-500 ">
              &nbsp; Verified Purchase
            </span>
          </span>
          <p className="mb-2 line-clamp-2 text-xs text-gray-500 md:line-clamp-none md:text-base dark:text-gray-400">
            {review}
          </p>
          <a
            href="https://www.google.com"
            target="main"
            className=" block w-max text-sm font-medium text-yellow-500 hover:underline "
          >
            Read more
          </a>
        </div>
      </article>
    </div>
  );
}

export default ReviewItem;
