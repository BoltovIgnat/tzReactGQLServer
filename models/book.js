const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    authorId: String,
});

module.exports = mongoose.model('Book', bookSchema)

/*mutation ($title: String!, $description: String!, $authorId: ID!) {
    addBook(title: $title, description: $description, authorId: $authorId) {
        title
        description
        author {
            name
            surname
        }
        }
    }*/