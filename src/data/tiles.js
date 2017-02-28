
const tiles = [
    {
        id:1,
        img: '1.jpg',
        name: 'Seizoen 1',
        category: 1,
        wind:1
    },
    {
        id:2,
        img: '2.jpg',
        name: 'Seizoen 2',
        category: 1,
        wind:2
    },
    {
        id:3,
        img: '3.jpg',
        name: 'Seizoen 3',
        category: 1,
        wind:3
    },
    {
        id:4,
        img: '4.jpg',
        name: 'Seizoen 4',
        category: 1,
        wind:4
    },
    {
        id:5,
        img: '5.jpg',
        name: 'Bloem 1',
        category: 1,
        wind:1
    },
    {
        id:6,
        img: '6.jpg',
        name: 'Bloem 2',
        category: 1,
        wind:2
    },
    {
        id:7,
        img: '7.jpg',
        name: 'Bloem 3',
        category: 1,
        wind:3
    },
    {
        id:8,
        img: '8.jpg',
        name: 'Bloem 4',
        category: 1,
        wind:4
    },
    {
        id:9,
        img: '9.jpg',
        name: 'Draak wit',
        category: 2,
        wind:false
    },
    {
        id:10,
        img: '10.jpg',
        name: 'Draak rood',
        category: 2,
        wind:false
    },
    {
        id:11,
        img: '11.jpg',
        name: 'Draak groen',
        category: 2,
        wind:false
    },
    {
        id:12,
        img: '12.jpg',
        name: 'Wind oost',
        category: 3,
        wind:1
    },
    {
        id:13,
        img: '13.jpg',
        name: 'Wind zuid',
        category: 3,
        wind:2
    },
    {
        id:14,
        img: '14.jpg',
        name: 'Wind west',
        category: 3,
        wind:3
    },
    {
        id:15,
        img: '15.jpg',
        name: 'Wind noord',
        category: 3,
        wind:4
    },
    {
        id:16,
        img: '16.jpg',
        name: 'Ballen 1',
        category: 4,
        wind: false
    },
    {
        id:17,
        img: '17.jpg',
        name: 'Ballen 2',
        category: 4,
        wind: false
    },
    {
        id:18,
        img: '18.jpg',
        name: 'Ballen 3',
        category: 4,
        wind: false
    },
    {
        id:19,
        img: '19.jpg',
        name: 'Ballen 4',
        category: 4,
        wind: false
    },
    {
        id:20,
        img: '20.jpg',
        name: 'Ballen 5',
        category: 4,
        wind: false
    },
    {
        id:21,
        img: '21.jpg',
        name: 'Ballen 6',
        category: 4,
        wind: false
    },
    {
        id:22,
        img: '22.jpg',
        name: 'Ballen 7',
        category: 4,
        wind: false
    },
    {
        id:23,
        img: '23.jpg',
        name: 'Ballen 8',
        category: 4,
        wind: false
    },
    {
        id:24,
        img: '24.jpg',
        name: 'Ballen 9',
        category: 4,
        wind: false
    },
    {
        id:25,
        img: '25.jpg',
        name: 'Tekens 1',
        category: 5,
        wind: false
    },
    {
        id:26,
        img: '26.jpg',
        name: 'Tekens 2',
        category: 5,
        wind: false
    },
    {
        id:27,
        img: '27.jpg',
        name: 'Tekens 3',
        category:5,
        wind: false
    },
    {
        id:28,
        img: '28.jpg',
        name: 'Tekens 4',
        category: 5,
        wind: false
    },
    {
        id:29,
        img: '29.jpg',
        name: 'Tekens 5',
        category: 5,
        wind: false
    },
    {
        id:30,
        img: '30.jpg',
        name: 'Tekens 6',
        category: 5,
        wind: false
    },
    {
        id:31,
        img: '31.jpg',
        name: 'Tekens 7',
        category: 5,
        wind: false
    },
    {
        id:32,
        img: '32.jpg',
        name: 'Tekens 8',
        category: 5,
        wind: false
    },
    {
        id:33,
        img: '33.jpg',
        name: 'Tekens 9',
        category: 5,
        wind: false
    },
    {
        id:34,
        img: '34.jpg',
        name: 'Bamboe 1',
        category: 6,
        wind: false
    },
    {
        id:35,
        img: '35.jpg',
        name: 'Bamboe 2',
        category: 6,
        wind: false
    },
    {
        id:36,
        img: '36.jpg',
        name: 'Bamboe 3',
        category:6,
        wind: false
    },
    {
        id:37,
        img: '37.jpg',
        name: 'Bamboe 4',
        category: 6,
        wind: false
    },
    {
        id:38,
        img: '38.jpg',
        name: 'Bamboe 5',
        category: 6,
        wind: false
    },
    {
        id:39,
        img: '39.jpg',
        name: 'Bamboe 6',
        category: 6,
        wind: false
    },
    {
        id:40,
        img: '40.jpg',
        name: 'Bamboe 7',
        category: 6,
        wind: false
    },
    {
        id:41,
        img: '41.jpg',
        name: 'Bamboe 8',
        category: 6,
        wind: false
    },
    {
        id:42,
        img: '42.jpg',
        name: 'Bamboe 9',
        category: 6,
        wind: false
    },




];

const categories = [
    {
        id: 1,
        name: 'Plaatjes'
    },
    {
        id: 2,
        name: 'Draken'
    },
    {
        id: 3,
        name: 'Winden'
    },
    {
        id: 4,
        name: 'Ballen'
    },
    {
        id: 5,
        name: 'Tekens'
    },
    {
        id: 6,
        name: 'Bamboe'
    },

];

const winds = [
    {
        id: 1,
        name: 'Oost'
    },
    {
        id: 2,
        name: 'Zuid'
    },
    {
        id: 3,
        name: 'West'
    },
    {
        id: 4,
        name: 'Noord'
    }
];

export function getTiles() {
    return tiles;
}

export function getTileById(id) {
    tiles.forEach(function(tile) {
        if (tile.id === id) {
            return tile;
        }
    })
}

export function getCategories() {
    return categories;
}

export function getCategoryById(id) {
    categories.forEach(function(category) {
        if (category.id === id) {
            return category;
        }
    })
}

export function getWinds() {
    return winds;
}

export function getWindById(id) {
    winds.forEach(function(wind) {
        if (wind.id === id) {
            return wind;
        }
    })
}