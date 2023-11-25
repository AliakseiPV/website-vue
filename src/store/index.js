import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		slider: [],
		articles: [],
		rooms: [],
		projects: [],
		posts: [],
	},
	mutations: {
		SET_SLIDER_STATE(state, slider) {
			state.slider = slider
		},
		SET_ARTICLES_STATE(state, articles) {
			state.articles = articles
		},
		SET_ROOMS_STATE(state, rooms) {
			state.rooms = rooms
		},
		SET_PROJECTS_STATE(state, projects) {
			state.projects = projects
		},
		SET_POSTS_STATE(state, posts) {
			state.posts = posts
		}
	},
	actions: {
		fetchSlider({ commit }) {
			commit('SET_SLIDER_STATE', [
				{
					id: 0,
					img: require('../assets/project-details-slide01.jpg'),
				},
				{
					id: 1,
					img: require('../assets/project-details-slide01.jpg'),
				},
				{
					id: 2,
					img: require('../assets/project-details-slide01.jpg'),
				}
			])
		},
		fetchArticle({ commit }) {
			commit('SET_ARTICLES_STATE', [
				{
					id: 0,
					img: require('../assets/homepage-design01.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022'
				},
				{
					id: 1,
					img: require('../assets/homepage-design02.jpg'),
					designRoom: 'Living Design',
					title: 'Low Cost Latest Invented Interior Designing Ideas.',
					date: '22 December,2022'
				},
				{
					id: 2,
					img: require('../assets/homepage-design03.jpg'),
					designRoom: 'Interior Design',
					title: 'Best For Any Office & Business Interior Solution',
					date: '25 December,2022'
				},
				{
					id: 3,
					img: require('../assets/news-design01.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022'
				},
				{
					id: 4,
					img: require('../assets/news-design02.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Low Cost Latest Invented Interior Designing Ideas.',
					date: '22 December,2022'
				},
				{
					id: 5,
					img: require('../assets/news-design03.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Best For Any Office & Business Interior Solution',
					date: '25 December,2022'
				},
			])
		},
		fetchRoom({ commit }) {
			commit('SET_ROOMS_STATE',
				[
					{
						id: 0,
						tag: 'Bed Room',
						img: require('../assets/bedroom01.jpg'),
						liked: true,
						header: 'Minimal Bedroom',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 1,
						tag: 'Bed Room',
						img: require('../assets/bedroom02.jpg'),
						liked: false,
						header: 'Minimal Bedroom',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 2,
						tag: 'Bed Room',
						img: require('../assets/bedroom03.jpg'),
						liked: false,
						header: 'Classic Minimal Bedroom',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 3,
						tag: 'Bed Room',
						img: require('../assets/bedroom04.jpg'),
						liked: true,
						header: 'Modern Bedroom',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 4,
						tag: 'Bed Room',
						img: require('../assets/bedroom05.jpg'),
						liked: true,
						header: 'Minimal Bedroom table',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 5,
						tag: 'Bed Room',
						img: require('../assets/bedroom06.jpg'),
						liked: false,
						header: 'Desk',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 6,
						tag: 'Bed Room',
						img: require('../assets/bedroom07.jpg'),
						liked: false,
						header: 'Modern Bedroom',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 7,
						tag: 'Bed Room',
						img: require('../assets/bedroom08.jpg'),
						liked: true,
						header: 'Modern Bedroom',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 8,
						tag: 'Kitchen',
						img: require('../assets/homepage-kitchen01.jpg'),
						liked: true,
						header: 'Minimal Kitchen',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 9,
						tag: 'Kitchen',
						img: require('../assets/homepage-kitchen02.jpg'),
						liked: false,
						header: 'Minimal Kitchen',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 10,
						tag: 'Kitchen',
						img: require('../assets/homepage-kitchen03.jpg'),
						liked: false,
						header: 'Classic Minimal Kitchen',
						categories: ['Decor', 'Artchitecture']
					},
					{
						id: 11,
						tag: 'Kitchen',
						img: require('../assets/homepage-kitchen04.jpg'),
						liked: true,
						header: 'Modern Kitchen',
						categories: ['Decor', 'Artchitecture']
					},
				]
			)
		},
		fetchProject({ commit }) {
			commit('SET_PROJECTS_STATE', [
				{
					id: 0,
					img: require('../assets/homepage-kitchen01.jpg'),
					title: 'Modern Kitchen',
					info: 'Decor / Artchitecture'
				},
				{
					id: 1,
					img: require('../assets/homepage-kitchen02.jpg'),
					title: 'Modern Kitchen',
					info: 'Decor / Artchitecture'
				},
				{
					id: 2,
					img: require('../assets/homepage-kitchen03.jpg'),
					title: 'Modern Kitchen',
					info: 'Decor / Artchitecture'
				},
				{
					id: 3,
					img: require('../assets/homepage-kitchen04.jpg'),
					title: 'Modern Kitchen',
					info: 'Decor / Artchitecture'
				}
			])
		},
		fetchPosts({ commit }) {
			commit('SET_POSTS_STATE',
				[
					{
						id: 0,
						tag: 'Kitchen',
						firstTitle: 'Let’s Get Solution for Building Construction Work',
						secondTitle: 'Design sprints are great',
						firstImg: require('../assets/blog-kitchen1.jpg'),
						secondImg: require('../assets/blog-kitchen2.jpg'),
						date: '26 December,2022',
						text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
						text2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
						text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						text4: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						listItem1: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						listItem2: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						listItem3: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
					},
					{
						id: 1,
						tag: 'Bedroom',
						firstTitle: 'Let’s Get Solution for Building Construction Work',
						secondTitle: 'Design sprints are great',
						firstImg: require('../assets/homepage-hero.jpg'),
						secondImg: require('../assets/blog-kitchen1.jpg'),
						date: '22 January,2022',
						text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
						text2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
						text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						text4: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						listItem1: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						listItem2: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
						listItem3: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
					}
				]
			)
		}
	},
	getters: {
		slider(state) {
			return state.slider
		},
		articles(state) {
			return state.articles
		},
		rooms(state) {
			return state.rooms
		},
		projects(state) {
			return state.projects
		},
		posts(state) {
			return state.posts
		}
	}
});