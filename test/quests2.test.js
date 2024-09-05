const solutions = require('../src/quests/solutions')

describe(`
    ==================================================================
    252. Meeting Rooms
    ==================================================================
    `, () => {


  test(JSON.stringify([]), () => {
    const schedule = []
    expect(solutions.meetingRooms(schedule)).toBe(true)
  })


  test(JSON.stringify([[0, 3], [9, 20], [5, 6]]), () => {
    const schedule = [[0, 3], [9, 20], [5, 6]]
    expect(solutions.meetingRooms(schedule)).toBe(true)
  })

  test(JSON.stringify([[0, 5], [9, 20], [5, 6]]), () => {
    const schedule = [[0, 5], [9, 20], [5, 6]]
    expect(solutions.meetingRooms(schedule)).toBe(false)
  })
})