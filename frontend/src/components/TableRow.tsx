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
    objectData.push(
      <td key={value}>{props.item[value] ? props.item[value] : "-"}</td>
    );
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
