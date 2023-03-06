import {defineStore} from "pinia";

export const useArrowsStore = defineStore({
    id: 'arrows', state: () => ({
        'arrows': {}
    }),
    actions: {
        setArrows (id, arrow) {
            this.arrows[id] = arrow;
        },
        removeArrow (id) {
            this.arrows[id].arrow.remove();
            delete this.arrows[id];
        },
        removeArrows () {
            Object.values(this.arrows).forEach(arrow => {
                arrow.arrow.remove();
            });
            this.arrows = {};
        }
    },
    getters: {
        getArrows: (state) => {
            return state.arrows;
        }
    }
});