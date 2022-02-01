import { faBan, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Table.module.css";

const ReadRow = ({ data, dataUpdate, setEditRowId }) => {
	const deleteData = async (dataId) => {
		const res = await fetch(`/api/${dataId}`, {
			method: "DELETE",
		});
		const data = await res
			.json()
			.then(() => {
				dataUpdate();
			})
			.catch((error) => console.log(error));
	};

	const updateData = async (dataId) => {
		// const res = await fetch(`/api/${dataId}`, {
		// 	method: "GET",
		// });
		// const data = await res.json();
		setEditRowId(dataId);
	};

	return (
		<tr>
			<td className={styles.iconsTd}>
				<FontAwesomeIcon
					className={`${styles.icons} ${styles.update}`}
					icon={faPenNib}
					onClick={() => {
						updateData(data.id);
					}}
				/>{" "}
				<FontAwesomeIcon
					className={`${styles.icons} ${styles.delete}`}
					icon={faBan}
					onClick={() => {
						deleteData(data.id);
					}}
				/>
			</td>

			{Object.keys(data).map((item, index) =>
				!(index === 0) ? (
					<td key={index} className={styles.td}>
						{data[item]}
					</td>
				) : null
			)}
		</tr>
	);
};

export default ReadRow;
// !(key !== "id") ? null :
// {data.map((item, index) =>
// 	index === 0 ? null : (
// 		<td className={styles.td} key={index}>
// 			{item}
// 		</td>
// 	)
// )}
