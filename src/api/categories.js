import axios from 'axios';

const BASE_URL = 'http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/categories';

async function getCategories () {
    return await axios.get(BASE_URL)
}

async function getCategorie (id) {
    return await axios.get(BASE_URL+'/'+id)
}
async function deleteCategorie (id) {
    return await axios.delete(BASE_URL+'/'+id)
}

async function addCategorie (name, color) {
    return await axios.post(BASE_URL, {
        "name": name,
        "color": color
    })
}

async function updateCategorie (id, name, color) {
    return await axios.patch(BASE_URL+'/'+id, {
        "name": name,
        "color": color
    });
}

export {getCategories, getCategorie, deleteCategorie, addCategorie, updateCategorie}