import {DocumentPlusIcon, FolderIcon, FolderPlusIcon, HashtagIcon, TagIcon} from '@heroicons/vue/24/outline'

// number format print consequence level
export const getNumberWithOrdinal = (n) => {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// search field option with icons
export const searchOptions = [
    {
        id: 0,
        viewType: true,
        icon: DocumentPlusIcon,
        name: 'I slipped from top floor',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 1,
        icon: DocumentPlusIcon,
        name: 'Oil Jumps 40%',
        viewType: true,
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 2,
        viewType: true,
        icon: FolderPlusIcon,
        name: 'Russia Attacks Ukraine',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 3,
        viewType: true,
        icon: HashtagIcon,
        name: 'Alcohol is banned by law',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 4,
        viewType: true,
        icon: DocumentPlusIcon,
        name: 'Rushi Sunak becames PM',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 5,
        viewType: true,
        icon: FolderIcon,
        name: 'Recession is coming',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 6,
        viewType: true,
        icon: TagIcon,
        name: 'Olympics postponed to next year',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 8,
        viewType: true,
        icon: DocumentPlusIcon,
        name: 'Elon Musk bought twitter',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 9,
        viewType: true,
        icon: DocumentPlusIcon,
        name: 'Structure revamped twitter',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    }, {
        id: 10,
        viewType: true,
        icon: DocumentPlusIcon,
        name: 'I got no gun in front of dangerous animals',
        position: {x: 0, y: 0},
        category: 'Economy',
        level: 0,
        parent_id: null
    },
];



