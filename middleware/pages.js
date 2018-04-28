export default (context) => {
	context.store.commit('setPage', context.route.name)
}
