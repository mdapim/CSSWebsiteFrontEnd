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
          The Css calculator has been updated with a hot new feature, select
          your indent space before calculating your score, this feature has been
          added upon popular request from everyone
        </p>
      </div>
      <div class="card-footer text-muted">Updated 4 days ago.....</div>
    </div>
  );
}

export function TopVotedCard(props) {
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">TOP RATED POST</div>
      <div class="card-body">
        <h5 class="card-title">
          We Punched an Asteroid, and the Science Results are In
        </h5>
        <p class="card-text">
          NASA completed its DART (Double Asteroid Redirection Test) mission, a
          groundbreaking effort to study the feasibility of deflecting asteroids
          that could potentially 21323213 trajectory. You can read more about
          what happened during the mission here.
        </p>
      </div>
      <div class="card-footer text-muted">
        Posted by: cal123 on the 23rd Janurary
      </div>
    </div>
  );
}

export function TopSearchCard(props) {
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">MOST USED RESOURCE</div>
      <div class="card-body">
        <h5 class="card-title"> A Complete Guide to Flexbox</h5>
        <p class="card-text">
          Our comprehensive guide to CSS flexbox layout. This complete guide
          explains everything about flexbox, focusing on all the different
          possible properties for the parent element (the flex container) and
          the child elements (the flex items). It also includes history, demos,
          patterns, and a browser support chart.
        </p>
        <a
          style={{ color: "black" }}
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
        >
          {" "}
          Go to Website
        </a>
      </div>
      <div class="card-footer text-muted">456 clicks and counting ....</div>
    </div>
  );
}

export function TopQuestionsCard(props) {
  return (
    <div class="card text-center" style={{ margin: "100", height: "400px" }}>
      <div class="card-header">TOP RATED QUESTION</div>
      <div class="card-body">
        <h5 class="card-title">Is there a CSS parent selector?</h5>
        <p class="card-text">
          3265 The Selectors Level 4 Working Draft includes a :has()
          pseudo-class that will provide this capability. It will be similar to
          the jQuery implementation, but is currently not supported by Firefox.
          li:has As of 2022, Firefox is the only browser not supporting it by
          default. In the meantime, you'll have to resort to JavaScript in
          Firefox if you need to select a parent element with full cross-browser
          support.
        </p>
      </div>
      <div class="card-footer text-muted"> 612 ratings</div>
    </div>
  );
}
