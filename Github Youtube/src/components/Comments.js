import "./Comments.css";
import React from "react";

const Comments = (props) => {
  let userComment = "";
  console.log(props.comments[0]);
  const comments = props.comments.map((comment) => {
    console.log(comment.snippet.topLevelComment.snippet);
    const {
      authorDisplayName,
      textDisplay,
      publishedAt,
    } = comment.snippet.topLevelComment.snippet;
    console.log(authorDisplayName, textDisplay, publishedAt);
  });
  return (
    <div>
      <div className="ui comment">
        {props.comments.map((comment) => {
          const {
            authorDisplayName,
            textDisplay,
            publishedAt,
            authorProfileImageUrl,
          } = comment.snippet.topLevelComment.snippet;
          return (
            <div>
              <div class="comment">
                <a class="avatar">
                  <img src={authorProfileImageUrl} />
                </a>
                <div class="content">
                  <a class="author">{authorDisplayName}</a>
                  <div class="text">{textDisplay}</div>
                  <div class="metadata">
                    <div class="date">{publishedAt}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="metadata">
          <div class="date">2 days ago</div>
          <div class="rating">
            <i class="star icon"></i>5 stars
          </div>
        </div>
        <div class="text">
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </div>
      </div>
      {comments}
    </div>
  );
};

export default Comments;
