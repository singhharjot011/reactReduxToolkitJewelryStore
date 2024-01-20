import Header from "./Header";

function CommonHeader({ likedProductsCodes, cartProductsCodes }) {
  return (
    <>
      <Header
        likedProductsCodes={likedProductsCodes}
        cartProductsCodes={cartProductsCodes}
        bgClass="bg-biege"
      />
    </>
  );
}

export default CommonHeader;
