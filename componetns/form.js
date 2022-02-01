import { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";

const Form = ({ formSubmit }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [city, setCity] = useState("");

	const clearInputs = () => {
		setName("");
		setNumber("");
		setCity("");
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const data = { name: name, number: number, city: city };
		const res = await fetch("api/hello", {
			method: "POST",
			body: JSON.stringify({ data }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(() => {
				clearInputs();
				formSubmit();
			})
			.catch((error) => {
				console.log(error)
			});
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Name</label>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

			<label>Number</label>
			<input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />

			<label htmlFor="">City</label>
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

			<input type="submit" value="Add" />
		</form>
	);
};

export default Form;
