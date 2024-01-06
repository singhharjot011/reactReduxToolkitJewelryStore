export const CategoryCard = ({ category, onSelectCategory }) => {
  return (
    <>
      <div
        className="w-1/5 cursor-pointer hover:scale-105 duration-300 "
        id="categories"
        onClick={() => onSelectCategory(category)}
      >
        <div className="flex flex-col h-full p-2 ">
          <div className="flex h-full justify-center">
            <img
              src={
                category === "Necklace"
                  ? "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : category === "Ring"
                  ? "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : category === "Earrings"
                  ? "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : "https://images.unsplash.com/photo-1597006354775-2955b15ec026?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={category}
              className="rounded-xl object-cover"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center p-2 text-xl">
            <span>{category}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
