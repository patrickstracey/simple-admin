import { useEffect, useState } from "react";
import { BaseInterface } from "../models/classroom.model";
import fetchData from "../services/fetchData";
import ConfirmationModal from "./ConfirmationModal";
import TableRow from "./TableRow";

const AdminTable: React.FC<{ tableData: string }> = (props) => {
  const displayTypes: string[] = ["string", "number"];
  const [tableObjects, setDataItems] = useState<BaseInterface[]>([]);
  const [headerValues, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<BaseInterface>();

  useEffect(() => {
    buildPage(props.tableData);
  }, [props.tableData]);

  function deleteItem() {
    setDataItems(tableObjects.filter((item) => item._id !== selectedItem._id));
    setConfirmation(false);
  }

  function deleteItemConfirm(singleItem: BaseInterface) {
    setSelectedItem(singleItem);
    setConfirmation(true);
  }

  async function buildPage(dataType: string) {
    setLoading(true);
    const res = await fetchData(dataType);
    setDataItems(res.collection);
    setHeaders(buildHeaders(res.collection));
    setLoading(false);
  }

  function buildHeaders(data: BaseInterface[]): string[] {
    const result: string[] = [];
    for (const key in data[0]) {
      if (displayTypes.includes(typeof data[0][key])) {
        result.push(key);
      }
    }
    return result;
  }

  if (loading === true) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1 className="table-title">{props.tableData}</h1>
      <table>
        <thead>
          <tr>
            {headerValues.map((value) => (
              <th key={value}>{value.replace("_", " ")}</th>
            ))}
            <th>actions</th>
          </tr>
        </thead>
        {tableObjects.length > 0 && (
          <tbody>
            {tableObjects.map((item) => (
              <TableRow
                key={item._id}
                values={headerValues}
                item={item}
                deleteItem={deleteItemConfirm}
              />
            ))}
          </tbody>
        )}
        {tableObjects.length === 0 && (
          <p>No results found for {props.tableData}.</p>
        )}
      </table>
      {confirmation && (
        <ConfirmationModal
          onCancel={() => setConfirmation(false)}
          onConfirm={deleteItem}
        />
      )}
    </div>
  );
};

export default AdminTable;
