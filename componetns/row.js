import { Fragment } from "react";
import ReadRow from "./readRow";
import EditRow from "./editRow";

const Row = ({ data, dataUpdate, editRowId, setEditRowId }) => {
	return <Fragment>{data.map((dataItem, index) => (editRowId === dataItem.id ? <EditRow data={dataItem} key={index} dataUpdate={dataUpdate} setEditRowId={setEditRowId}/> : <ReadRow data={dataItem} dataUpdate={dataUpdate} setEditRowId={setEditRowId} key={index} />))}</Fragment>;
};

export default Row;