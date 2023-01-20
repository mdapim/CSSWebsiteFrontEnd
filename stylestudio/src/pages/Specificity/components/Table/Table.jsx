import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const CustomizedTable = (props) => {
  const { values } = props;
  const applyColorStyling = (value) => {
    if (value.toString().includes("color")) {
      return true;
    }
  };

  const getColorFromStyling = (value) => {
    let foundColor = "";
    value.forEach((item) => {
      if (item.toString().includes("color")) {
        let indexColon = item.toString().indexOf(":");
        let indexSemiColon = item.toString().indexOf(";");
        foundColor = item.toString().slice(indexColon + 1, indexSemiColon);
      }
    });
    return foundColor;
  };

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
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-${index.toString()}`}>
                  <div>
                    <strong>{values[0][index]}</strong>
                    <div>
                      {values[2][item].map((item) => {
                        return <p>{item}</p>;
                      })}
                    </div>
                  </div>
                </Tooltip>
              }
            >
              <tr
                style={
                  applyColorStyling(values[2][item])
                    ? {
                        borderLeft: ` 1mm solid ${getColorFromStyling(
                          values[2][item]
                        )}`,
                        borderRight: ` 1mm solid ${getColorFromStyling(
                          values[2][item]
                        )}`,
                      }
                    : {
                        border: "none",
                      }
                }
              >
                {console.log(
                  "checking colour ",
                  getColorFromStyling(values[2][item])
                )}
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
