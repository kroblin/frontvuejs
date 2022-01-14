import axios from 'axios';

const BASE_URL = 'http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/messages';

async function getMessages () {
    return await axios.get(BASE_URL)
}

async function getMessage (id) {
    return await axios.get(BASE_URL+'/'+id)
}
async function deleteMessage (id) {
    return await axios.delete(BASE_URL+'/'+id)
}

async function addMessage (title, date, message, category) {
    return await axios.post(BASE_URL, {
        "title": title,
        "date": date,
        "message": message,
        "category": category
    });
}

async function updateMessage (id, title, message, categorie) {
    return await axios.patch(BASE_URL+'/'+id, {
        "title": title,
        "message": message,
        "category": categorie
    });
}

export {getMessages, getMessage, deleteMessage, addMessage, updateMessage}