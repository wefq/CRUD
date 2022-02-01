import {useState} from 'react'
import styles from "../styles/Table.module.css";
import Row from "./row";

const Table = ({ data, dataUpdate }) => {
	const [editRowId, setEditRowId] = useState();

	const keysArray = [];

	for (let key in data[0]) {
		key !== "id" ? keysArray.push(key.charAt(0).toUpperCase() + key.slice(1)) : '';
	}

	return (
		<form>
			<table className={styles.table}>
				<thead>
					<tr>
						<th></th>
						{keysArray.map((key, index) => (
							<th key={index} scope="col" className={styles.th}>
								{key}
							</th>
						))}
					</tr>
				</thead>

				<tbody className={styles.tbody}>
					<Row data={data} dataUpdate={dataUpdate} editRowId={editRowId} setEditRowId={setEditRowId} />
				</tbody>
			</table>
		</form>
	);
};

export default Table;
