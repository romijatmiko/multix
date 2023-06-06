const books = [
	{ id: 1, title: "Buku 1", author: "Penulis 1" },
	{ id: 2, title: "Buku 2", author: "Penulis 2" },
	{ id: 3, title: "Buku 3", author: "Penulis 3" },
];

export default function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json(books);
	} else if (req.method === "POST") {
		const { title, author } = req.body;
		const newBook = { id: books.length + 1, title, author };
		books.push(newBook);
		res.status(201).json(newBook);
	} else {
		res.status(405).end(); // Method Not Allowed
	}
}
