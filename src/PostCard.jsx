import { useState } from "react";
import PropTypes from "prop-types";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      className={`rounded-lg p-6 shadow transition-colors hover:shadow-md ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => setClicked((currentClicked) => !currentClicked)}
    >
      <h2 className="mb-3 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </article>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
