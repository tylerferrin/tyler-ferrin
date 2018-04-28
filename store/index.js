import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
	page: '',
	projects: [],
	currentProjectIndex: null,
})

export const mutations = {
	setPage (state, page) {
		state.page = page
	}
}

export const actions = {
	async nuxtServerInit ({commit}) {
		console.log(client)
	// return client.getEntries()
	// .then( response => {
	// 	console.log(response)
	// 	let filteredResponse = _.map(response.items, item => Object.assign({}, item.fields, item.sys.contentType.sys))
	//
	// 	// separate gifs & sentences from filteredResponse var
	// 	let gifs = _.filter(filteredResponse, item => item.id === 'project')
	// 	let sentences = _.filter(filteredResponse, item => item.id === 'sentence')
	//
	// 	// further clean up gif objects
	// 	let filteredGifs = _.map(gifs, item => Object.assign({}, item.gif.fields.file))
	// 	commit('setGifs', filteredGifs)
	// 	commit('setSentences', sentences)
	// })
	}
}
