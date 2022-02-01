import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Table.module.css";

const EditRow = ({ data, dataUpdate, setEditRowId, id }) => {
	const [dataChange, setDataChange] = useState(data);

	const saveData = async (dataId) => {
		const newData = { ...dataChange };

		const res = await fetch(`api/${dataId}`, {
			method: "PUT",
			body: JSON.stringify({ newData }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res
			.json()
			.then(() => {
				dataUpdate();
				setEditRowId("");
			})
			.catch((error) => console.log(error));
	};

	return (
		<tr>
			<td className={styles.iconsTd}>
				<FontAwesomeIcon
					className={`${styles.icons} ${styles.update}`}
					icon={faSave}
					onClick={() => {
						saveData(data.id);
					}}
				/>
			</td>

			{Object.keys(data).map((item, index) =>
				!(index === 0) ? (
					<td key={index}>
						<input type="text" value={dataChange[item]} onChange={(e) => setDataChange({ ...dataChange, [item]: e.target.value })} />
					</td>
				) : null
			)}
		</tr>
	);
};
export default EditRow;
