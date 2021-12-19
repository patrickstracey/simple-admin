import React from "react";
import { useState } from "react";
import { BaseInterface } from "../models/classroom.model";

const TableRow: React.FC<{
  item: BaseInterface;
  values: string[];
  deleteItem: (item: BaseInterface) => void;
}> = (props) => {
  const objectData = [];
  props.values.forEach((value) => {
    let cellData = "-";
    if (props.item[value]?._id) {
      cellData = props.item[value]?._id;
    } else if (props.item[value]) {
      cellData = props.item[value];
    }
    objectData.push(<td key={value}>{cellData}</td>);
  });

  return (
    <tr>
      {objectData}
      <td>
        <button
          className="delete"
          onClick={props.deleteItem.bind(null, props.item)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
