import {defineStore} from 'pinia';
import {DocumentPlusIcon, FolderIcon, FolderPlusIcon, HashtagIcon, TagIcon} from '@heroicons/vue/24/outline'

export const useTickerStore = defineStore({
    id: 'ticker', state: () => ({
        isLoad: true,
        tickers: [
            {"name": "S&P 500", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Nasdaq", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Crude oil", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 10Yr", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Euro", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Dow Jones", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Russell 2000", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Gold", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Silver", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Bitcoin", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Silver", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Nikkei 225", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "DAX", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "FTSE 100", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Hang Seng", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Shanghai", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "VIX", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 30Yr", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 2Yr", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 5Yr", "price": '3,972.61', "percent": '+1.89%'}
        ]
    })
});
export const useSearchStore = defineStore({
    id: 'search', state: () => ({
        isLoad: false,
        level: 1,
        active_category: 'Economy',
        categories: [
            {id: 0, name: "Economy"},
            {id: 1, name: "Politics"},
            {id: 2, name: "Fashion"},
            {id: 3, name: "Sport"},
            {id: 4, name: "Travel"},
            {id: 5, name: "Technology"},
            {id: 6, name: "Science"},
            {id: 7, name: "Entertainment"},
            {id: 8, name: "Lifestyle"},
            {id: 9, name: "Health"},
            {id: 10, name: "Food"},
            {id: 11, name: "Education"},
            {id: 12, name: "Business"},
            {id: 13, name: "Finance"},
            {id: 14, name: "Environment"},
            {id: 15, name: "Culture"},
            {id: 16, name: "Crypto"},
            {id: 17, name: "Art"}
        ],
        searchOptions: [
            {
                id: 0,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'I slipped from top floor',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 1,
                icon: DocumentPlusIcon,
                name: 'Oil Jumps 40%',
                viewType: true,
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 2,
                viewType: true,
                icon: FolderPlusIcon,
                name: 'Russia Attacks Ukraine',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 3,
                viewType: true,
                icon: HashtagIcon,
                name: 'Alcohol is banned by law',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 4,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'Rushi Sunak becames PM',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 5,
                viewType: true,
                icon: FolderIcon,
                name: 'Recession is coming',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 6,
                viewType: true,
                icon: TagIcon,
                name: 'Olympics postponed to next year',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 8,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'Elon Musk bought twitter',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 9,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'Structure revamped twitter',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            }, {
                id: 10,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'I got no gun in front of dangerous animals',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
            },
        ],
        nodes: [
            {
                id: 0,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'I slipped from top floor',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 1,
                icon: DocumentPlusIcon,
                name: 'Oil Jumps 40%',
                viewType: true,
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 2,
                viewType: true,
                icon: FolderPlusIcon,
                name: 'Russia Attacks Ukraine',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 3,
                viewType: true,
                icon: HashtagIcon,
                name: 'Alcohol is banned by law',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 4,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'Rushi Sunak becames PM',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 5,
                viewType: true,
                icon: FolderIcon,
                name: 'Recession is coming',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 6,
                viewType: true,
                icon: TagIcon,
                name: 'Olympics postponed to next year',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 8,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'Elon Musk bought twitter',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 9,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'Structure revamped twitter',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            }, {
                id: 10,
                viewType: true,
                icon: DocumentPlusIcon,
                name: 'I got no gun in front of dangerous animals',
                position: {x: 0, y: 0},
                type: 'teleportable',
                level: 0,
                parent_id: null
            },
        ],
        edges: [],

        currentEdges: [],
        currentNodes: [],
    }),

    getters: {
        //new logic
        getNodeById: (state) => {
            return (id) => {
                var data = [];
                state.nodes.map((item) => {
                    if (parseInt(item.parent_id) == parseInt(id)) {
                        data.push(item);
                    }
                });
                return data;
            };
        },

        getLevel: (state) => {
            return state.level;
        },

        getEventById: (state) => {
            return (id) => state.searchOptions.find((option) => option.id === parseInt(id))
        },

        getSearchResultById: (state) => {
            return (id) => state.searchOptions.find((option) => parseInt(option.id) === parseInt(id))
        },

        getNode: (state) => {
            return (id) => state.nodes.find((option) => parseInt(option.id) === parseInt(id))
        },

        getNodeLength: (state) => {
            return (id) => {
                var data = [];
                state.nodes.map((item) => {
                    if (parseInt(item.parent_id) == parseInt(id)) {
                        data.push(item);
                    }
                });
                return data.length;
            };
        },

        getNodeLengthAll: (state) => {
            return () => {
                return state.nodes.length + state.searchOptions.length;
            };
        },

        getNodes: (state) => {
            return (id) => {
                var data = [// state.searchOptions.find((option) => parseInt(option.id) === parseInt(id))
                ];
                state.nodes.map((item) => {
                    if (parseInt(item.option_id) == parseInt(id) && (item.level <= state.level)) {
                        data.push(item);
                    }
                });

                return data;
            }
        },

        getEdges: (state) => {
            return (id) => {
                var data = [];
                state.edges.map((item) => {
                    if (parseInt(item.option_id) == parseInt(id) && (item.level <= state.level)) {
                        data.push(item);
                    }
                });
                return data;
            };
        },

        getLastNodes: (state) => {
            return (id) => {
                var data = [];
                state.nodes.map((item) => {
                    if (parseInt(item.parent_id) == parseInt(id)) {
                        data.push(item);
                    }
                });

                return data;
            }
        },

    },
    actions: {
        setNode(data) {
            this.nodes.push(data);
        },
        setEdge(data) {
            this.edges.push(data);
        },
        setCurrentEdge(data) {
            this.state.currentEdges = data;
        },
        setCurrentNode(data) {
            this.state.currentNodes = data;
        }
    },
    persist: {
        enabled: true
    }

})
