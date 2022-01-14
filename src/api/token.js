import axios from "axios";
import router from "../router";

axios({url: 'http://localhost/lpdev/annebicque/apivuejs/public/index.php/authentication_token', data: {email:email, password:password}, method: 'POST' }) //username et password proviennent du formulaire
    .then(resp => {
        const token = resp.data.token
        const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
        localStorage.setItem('user', userData) // store the user in localstorage
        localStorage.setItem('user-token', token) // store the token in localstorage
        router.push('/')
    })
    .catch(err => {
        localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
    })