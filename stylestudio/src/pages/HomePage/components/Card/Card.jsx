import "../Carousel/Carousel.css";
export function Card(props) {
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
  );
}

export function UpdatesCard(props) {
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">WEBSITE UPDATES</div>
      <div class="card-body">
        <h5 class="card-title">CSS Calculator hot feature fix</h5>
        <p class="card-text">
          The CSS calculator has been updated with a hot new feature, select
          your indent space before calculating your score, this feature has been
          added upon popular request from everyone
        </p>
      </div>
      <div class="card-footer text-muted">Updated 4 days ago.....</div>
    </div>
  );
}

export function TopVotedCard(props) {
  const {
    username,
    date_created,
    Title,
    description,
    likes,
    dislikes,
    id,
    comment,
    date_updated,
    profile_picture,
    user_id,
    code,
    category,
  } = props["cardData"];
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">TOP RATED POST</div>
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">{description}</p>
      </div>
      <div class="card-footer text-muted">
        Posted by: {username} on the {date_created}
      </div>
    </div>
  );
}

export function TopResourceCard(props) {
  const {
    click_count,
    resource_catefory_id,
    resource_description,
    resource_id,
    resource_link,
  } = props["cardData"];
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">MOST USED RESOURCE</div>
      <div class="card-body">
        <h5 class="card-title"> {resource_description}</h5>
        <p className="card-text">{resource_link}</p>
        <a
          style={{ color: "black" }}
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
        >
          {" "}
          Go to Website
        </a>
      </div>
      <div class="card-footer text-muted">
        {click_count} clicks and counting ....
      </div>
    </div>
  );
}

export function TopQuestionsCard(props) {
  const {
    username,
    date_created,
    Title,
    description,
    likes,
    dislikes,
    id,
    comment,
    date_updated,
    profile_picture,
    user_id,
    code,
    category,
  } = props["cardData"];
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">TOP RATED QUESTION</div>
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text ">{description}</p>
      </div>
      <div class="card-footer text-muted">
        {" "}
        {likes} likes | {comment} comments
      </div>
    </div>
  );
}
