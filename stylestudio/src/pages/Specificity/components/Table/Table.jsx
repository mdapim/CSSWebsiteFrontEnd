import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const CustomisedTable = (props) => {
  const { values } = props;

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {values[0].map((item, index) => {
          console.log(item);
          return (
            <OverlayTrigger
              key={"item"}
              placement={"item"}
              overlay={
                <Tooltip id={`tooltip-${"item"}`}>
                  Tooltip on <strong>{"item"}</strong>.
                </Tooltip>
              }
            >
              <th scope="row">{index + 1}</th>
              {/* <td>{values[0][index]}</td>
                <td>{values[1][index]}</td> */}
            </OverlayTrigger>
          );
        })}
        {/* <tr>
          <th scope="row">index</th>
          <td>desc</td>
          <td>value</td>
        </tr> */}
      </tbody>
    </table>
  );
};
