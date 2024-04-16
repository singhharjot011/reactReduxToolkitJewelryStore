import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../products/productSlice";

function CategoryCard({ category }) {
  const imgUrl =
    category === "Necklace"
      ? "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : category === "Ring"
        ? "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : category === "Earrings"
          ? "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : "https://images.unsplash.com/photo-1597006354775-2955b15ec026?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );

  return (
    <>
      <div
        className={
          selectedCategory === category
            ? "w-1/5 scale-105  cursor-pointer rounded-xl duration-300"
            : "w-1/5 cursor-pointer duration-300 hover:scale-105"
        }
        id="categories"
        onClick={() =>
          selectedCategory === category
            ? dispatch(selectCategory(""))
            : dispatch(selectCategory(category))
        }
      >
        <div className="flex h-full flex-col p-2 ">
          <div className="relative flex h-full w-full justify-center">
            {selectedCategory === category && (
              <span className="absolute top-52 hidden text-sm font-bold md:text-lg lg:block lg:text-3xl">
                {category}
              </span>
            )}

            <img
              src={imgUrl}
              alt="category"
              className={
                selectedCategory === category
                  ? "rounded-xl object-cover opacity-60"
                  : "rounded-xl object-cover"
              }
            ></img>
          </div>
          <div
            className="flex flex-col items-center justify-center p-2  text-sm
md:text-lg lg:text-3xl"
          >
            <span>{category}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
