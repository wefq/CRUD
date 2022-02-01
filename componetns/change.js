const Change = () => {
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

export default Change;
