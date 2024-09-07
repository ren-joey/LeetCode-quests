const solutions = require('../src/quests/solutions');

describe(`
    ==================================================================
    252. Meeting Rooms
    ==================================================================
    `, () => {


    test(JSON.stringify([]), () => {
        const schedule = [];
        expect(solutions.meetingRooms(schedule)).toBe(true);
    });


    test(JSON.stringify([[0, 3], [9, 20], [5, 6]]), () => {
        const schedule = [[0, 3], [9, 20], [5, 6]];
        expect(solutions.meetingRooms(schedule)).toBe(true);
    });

    test(JSON.stringify([[0, 5], [9, 20], [5, 6]]), () => {
        const schedule = [[0, 5], [9, 20], [5, 6]];
        expect(solutions.meetingRooms(schedule)).toBe(false);
    });
});



describe(`
    ==================================================================
    208. Implement Trie (Prefix Tree)
    ==================================================================
    `, () => {

    const command = [
        ['Trie','insert','search','search','startsWith','insert','search'],
        [[],['apple'],['apple'],['app'],['app'],['app'],['app']],
        [undefined,undefined,true,false,true,undefined,true]
    ];

    test('case', () => {
        const t = new solutions.Trie();
        for (let i = 1; i < command.length; i += 1) {
            let method = command[0][i];
            let property = command[1][i][0];
            let expected = command[2][i];
            expect(t[method](property)).toBe(expected);
        }
    });
});


