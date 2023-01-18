import "./Resources.css";
import Card from "react-bootstrap/Card";
export function Resource({ title, links, sendClick }) {
  const mapLinks = (resources) => {
    const resourceJSX = resources.map((resource) => {
      return (
        <div>
          <Card.Link
            id="resource-link"
            target="_blank"
            href={resource.resource_link}
            onClick={() => sendClick(resource.resource_id)}
          >
            {resource.resource_description}
          </Card.Link>
        </div>
      );
    });
    return resourceJSX;
  };
  return (
    <div className="content">
      <Card bg="dark" border="info" className="m-2">
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          {mapLinks(links)}
        </Card.Body>
      </Card>
      <ul></ul>
    </div>
  );
}
