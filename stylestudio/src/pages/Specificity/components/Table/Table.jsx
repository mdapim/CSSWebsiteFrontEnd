import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const CustomisedTable = (props) => {
  const { values } = props;

  return (
    <table className="table  table-hover table-sm table-responsive thead-dark">
      <caption>List of CSS objects ranked by specificity</caption>
      <thead>
        <tr>
          <th scope="col">#Ranking</th>
          <th scope="col">Description</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {values[0].map((item, index) => {
          return (
            <OverlayTrigger
              key={index.toString()}
              placement={"auto"}
              overlay={
                <Tooltip id={`tooltip-${index.toString()}`}>
                  <div>
                    <strong>{values[0][index]}</strong>
                    <p>
                      {values[2][item].map((item) => {
                        return <p>{item}</p>;
                      })}
                    </p>
                  </div>
                </Tooltip>
              }
            >
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{values[0][index]}</td>
                <td>{values[1][index]}</td>
              </tr>
            </OverlayTrigger>
          );
        })}
      </tbody>
    </table>
  );
};
