const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema ({
    fio: String,
    surname: String,
    name: String,
    patronymic: String,
    yearLife: String,
    bookId: String,
});

module.exports = mongoose.model('Author', authorSchema)

/*mutation ($fio: String!, $surname: String, $name: String, $patronymic: String, $yearLife: String!) {
        addAuthor(fio: $fio, surname: $surname, name: $name, patronymic: $patronymic, yearLife: $yearLife) {
            fio
            surname
            name
            patronymic
    		yearLife
        }
    }*/ 