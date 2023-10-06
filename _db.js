let games = [
    { id: '1', title: 'Mario Kart', platform: ['Switch']},
    { id: '2', title: 'FIFA', platform: ['PS4']},
    { id: '3', title: 'Fortnite', platform: ['Xbox', 'PC', 'PS4']},
    { id: '4', title: 'Crash Bandicoot', platform: ['PS2']},
    { id: '5', title: 'Tony Hawks', platform: ['PS2']},
    { id: '6', title: 'Colly Macrae Rally', platform: ['PS2', 'PS4']},
]

let authors = [
    { id: '1', name: 'Mario', verified: true },
    { id: '2', name: 'Peach', verified: true },
    { id: '3', name: 'Yoshi', verified: false },
]

let reviews = [
        {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
        {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
        {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
        {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
        {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
        {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
        {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'},
]

export default { games, authors, reviews }