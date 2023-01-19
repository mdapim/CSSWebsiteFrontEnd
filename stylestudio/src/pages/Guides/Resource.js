import "./Resources.css";
import Card from "react-bootstrap/Card";
export function Resource({ title, links, sendClick }) {
  const mapLinks = (resources) => {
    const resourceJSX = resources.map((resource) => {
      return (
        <div style={{ marginLeft: "90px" }}>
          <Card.Link
            id="resource-link"
            target="_blank"
            href={resource.resource_link}
            onClick={() => sendClick(resource.resource_id)}
          >
            {resource.resource_description}
          </Card.Link>
          <hr
            style={{
              borderColor: "white",
              borderWidth: "1px",
              opacity: "0.6",
              borderRadius: "25px",
              width: "900px",
            }}
          />
        </div>
      );
    });
    return resourceJSX;
  };
  return (
    <div className="content">
      <Card bg="dark" border="" className="m-2">
        <Card.Body>
          <Card.Title className="title, guides-font">{title}</Card.Title>
          <hr
            style={{
              borderColor: "white",
              borderWidth: "2px",
              opacity: "0.7",
              borderRadius: "25px",
            }}
          />
          {mapLinks(links)}
        </Card.Body>
      </Card>
      <ul></ul>
    </div>
  );
}
