export default {
    mutations: {
        openWindowFavorites(state){
            state.showWindowFavorites = true;
        },
        closeWindowFavorites(state){
            state.showWindowFavorites = false;
        },
        addItemFavorite(state){
            state.array.push({})
        },
        deleteItemInFavorite(state, index){
            state.array.splice(index, 1);
        }
    },
    state: {    
        showWindowFavorites: false,
        array: [
                {   
                    id: 0,
                    hoverEffectBtnScore: false,
                    hoverEffectBtnDeleteInFavorites: false,
                },
            ]
    },
    getters: {
        conclusionWindowFavorites(state){
            return state.showWindowFavorites;
        },
        conclusionFavorites(state){
            return state.array;
        }
    }
}