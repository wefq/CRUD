import { data } from "../../.data/data";

export default function handler(req, res) {
	const { dataId } = req.query;

	switch (req.method) {
		case "GET":
			const requestData = data.find((item) => item.id === parseInt(dataId));
			return res.status(200).json(requestData);

		case "PUT":
			const dataRes = req.body.newData;

			const updatedData = data.findIndex((item) => item.id === parseInt(dataId));

			const newData = {
				id: dataRes.id,
				name: dataRes.name,
				number: dataRes.number,
				city: dataRes.city,
			};

			data[updatedData] = newData;
			return res.status(201).json(newData);

		case "DELETE":
			const deletedData = data.find((item) => item.id === parseInt(dataId));

			const index = data.findIndex((item) => item.id === parseInt(dataId));

			data.splice(index, 1);

			return res.status(200).json(data);

		default:
			return;
	}
}
