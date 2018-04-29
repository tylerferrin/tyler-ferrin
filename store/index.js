import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
	page: '',
	projects: [],
	currentProjectIndex: null,
	allProjectUrls: [],
	isProjects: false,
	description: {}
})

export const mutations = {
	setPage (state, page) {
		state.page = page
	},
	setProjects (state, projects) {
		state.projects = projects
	},
	setDescription (state, desc) {
		state.description = desc
	},
	toggleIndexComponents (state, isProjects) {
		state.isProjects = isProjects
	},
	setAllProjectsUrls (state, allProjectUrls) {
		state.allProjectUrls = allProjectUrls
	},
	setCurrentProjectIndex (state, currentProjectIndex) {
		state.currentProjectIndex = currentProjectIndex
	}
}

export const actions = {
	async nuxtServerInit ({commit}) {
	return client.getEntries()
	.then( response => {
		let filteredResponse = _.map(response.items, item => Object.assign({}, item.fields, item.sys.contentType.sys))

		let projects = _.filter(filteredResponse, item => {
			return item.id === 'project'
		})

		let allProjectUrls = _.map(projects, project => {
			return project.title.split(' ').join('-').toLowerCase()
		})

		let description = _.filter(filteredResponse, item => {
			return item.id === 'description'
		})[0]


		commit('setProjects', projects)
		commit('setAllProjectsUrls', allProjectUrls)
		commit('setDescription', description)
	})
	}
}
