const bookCategories = {
    "categories": [
        {
            "id": 1,
            "name": "chemistry",
            "subCategories": [
                {
                    "id": "1.1",
                    "name": "chemistry 1.1"
                },
                {
                    "id": "1.2",
                    "name": "chemistry 1.2"
                },
                {
                    "id": "1.3",
                    "name": "chemistry 1.3"
                },
                {
                    "id": "1.4",
                    "name": "chemistry 1.4"
                }
            ]
        },
        {
            "id": 2,
            "name": "Mathematics",
            "subCategories": [
                {
                    "id": "2.1",
                    "name": "Mathematics 2.1"
                },
                {
                    "id": "2.2",
                    "name": "Mathematics 2.2"
                },
                {
                    "id": "2.3",
                    "name": "Mathematics 2.3"
                },
                {
                    "id": "2.4",
                    "name": "Mathematics 2.4"
                }
            ]
        },
        {
            "id": 3,
            "name": "Physics",
            "subCategories": [
                {
                    "id": "3.1",
                    "name": "Physics 3.1"
                },
                {
                    "id": "3.2",
                    "name": "Physics 3.2"
                },
                {
                    "id": "3.3",
                    "name": "Physics 4.1"
                },
                {
                    "id": "3.4",
                    "name": "Physics 3.4"
                }
            ]
        }
    ]
}

const bookList = [
    {
        id: 1.1,
        name: 'Let us C',
        author: 'Yashvan Kanetkar',
        category: 'Computer',
        edition: 10,
        copies: 102
    },
    {
        id: 1.2,
        name: 'YDJS',
        author: 'author 2',
        category: 'Javascript',
        edition: 2,
        copies: 125
    },
    {
        id: 2.1,
        name: 'Physics1',
        author: 'author 4',
        category: 'physics',
        edition: 02,
        copies: 95
    },
    {
        id: 3.1,
        name: 'Chemistry2',
        author: 'author 5',
        category: 'Chemistry',
        edition: 6,
        copies: 32
    },
    {
        id: 4.4,
        name: 'Mathematics1',
        author: 'R.D. Sharma',
        category: 'Mathematics',
        edition: 7,
        copies: 18
    },
    {
        id: 7.3,
        name: 'No Name',
        author: 'No author',
        category: 'Faltu',
        edition: 00,
        copies: 500
    }
];

module.exports = {bookCategories, bookList};