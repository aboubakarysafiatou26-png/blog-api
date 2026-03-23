const express = require('express');
const app = express();

app.use(express.json());

let articles = [];
let id = 1;

app.post('/api/articles', (req, res) => {
    const { titre, contenu, auteur } = req.body;

    if (!titre || !auteur) {
        return res.status(400).json({ message: "Titre et auteur obligatoires" });
    }

    const article = {
        id: id++,
        titre,
        contenu,
        auteur,
        date: new Date()
    };

    articles.push(article);
    res.status(201).json(article);
});

app.get('/api/articles', (req, res) => {
    res.json(articles);
});

app.listen(3000, () => {
    console.log("Serveur lancé");
});
