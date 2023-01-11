import React from "react";

function ForumComments({ allComments, id }) {
  const commentsForPost = allComments.filter((el) => el.post_id === id);
  console.log(commentsForPost);

  return <div></div>;
}

export default ForumComments;
