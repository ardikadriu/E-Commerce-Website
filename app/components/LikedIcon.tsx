import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikedIcon = () => {
  const [like, setLike] = useState(false);
  function handleLike() {
    setLike((prev) => !prev);
  }
  return (
    <div>
      <span onClick={handleLike} className="hover:cursor-pointer">
        {like ? (
          <FaHeart size={25} className="text-red-600" />
        ) : (
          <FaRegHeart size={25} />
        )}
      </span>
    </div>
  );
};

export default LikedIcon;
