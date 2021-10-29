import { createRouter, createWebHistory } from "vue-router"

const routes = [
	// {
	// 	path: '*',
	// 	redirect: {name : 'Index'}
	// },
    {
		path: '/',
		name: ['index', 'logger'],
		component: () => import('../views/Logger.vue')
	},
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	component: () => import("../views/About.vue")
	// },
	{
		path: "/main",
		name: "Main",
		component: () => import("../views/Main.vue")
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;