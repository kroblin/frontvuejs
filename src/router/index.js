import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home";
import Categories from "../views/Categories";
import CategorieMessages from "../views/CategorieMessages"
import AdminHome from "../views/admin/AdminHome";
import AdminCategorie from "../views/admin/categorie/AdminCategorie";
import AddCategorie from "../views/admin/categorie/AddCategorie";
import AddMessage from "../views/admin/message/AddMessage";
import UpdateMessage from "../views/admin/message/UpdateMessage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
        children: [
            {
                path: ':id',
                name: 'categorie_messages',
                component: CategorieMessages
            }
        ]
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminHome,
        children: [
            {
                path: ':id',
                name: 'admin_categorie',
                component: AdminCategorie,
            },
            {
                path: '/add-categorie',
                name: 'add_categorie',
                component: AddCategorie
            },
            {
                path: ':id/add-message',
                name: 'add_message',
                component: AddMessage
            },
            {
                path: ':id/update-message',
                name: 'update_message',
                component: UpdateMessage
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router