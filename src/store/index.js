import Vue from 'vue'
import Vuex from 'vuex'
import {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
} from "@/utils/localStorage";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isSmallScreen: null,
	},
	mutations: {
		setScreen(state, info) {
			state.isSmallScreen = info;
			setLocalStorage({
				name: "isSmallScreen",
				content: info
			})
		},
		LoadInfo(state) {
			state.isSmallScreen = getLocalStorage({name: "isSmallScreen"})
		},
		DelInfo(state) {
			state.isSmallScreen = null;
			removeLocalStorage("isSmallScreen")
		}
	},
	actions: {},
	modules: {},
	getters: {}
})