import { data } from "../../.data/data";

export default function handler(req, res) {
	const { dataId } = req.query;

	switch (req.method) {
		case "GET":
			return res.status(200).json(data);

		case "POST":
			const dataRes = req.body.data;

			const newData = {
				id: Date.now(),
				name: dataRes.name,
				number: dataRes.number,
				city: dataRes.city,
			};

			data.push(newData);

			return res.status(201).json(data);
			
	
		default:
			return;
	}
}
