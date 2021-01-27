// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { makeLabelArray, makeSeenArray, makeCaughtArray } from '../results/munge-utils.js';


const test = QUnit.test;

const data = [{ name: 'wartortle', _id: '5cef3501ef6005a77cd4fd20', seen: 3, caught: 0 },
{ name: 'wartortle', _id: '5cef3501ef6005a77cd4fd20', seen: 3, caught: 0 },
{ name: 'caterpie', _id: '5cef3501ef6005a77cd4fd23', seen: 4, caught: 0 },
{ name: 'weedle', _id: '5cef3501ef6005a77cd4fd26', seen: 4, caught: 0 },
{ name: 'charmeleon', _id: '5cef3501ef6005a77cd4fd1b', seen: 1, caught: 0 },
{ name: 'beedrill', _id: '5cef3501ef6005a77cd4fd25', seen: 2, caught: 1 },
{ name: 'metapod', _id: '5cef3501ef6005a77cd4fd24', seen: 2, caught: 1 },
{ name: 'charmander', _id: '5cef3501ef6005a77cd4fd1a', seen: 3, caught: 0 },
{ name: 'kakuna', _id: '5cef3501ef6005a77cd4fd27', seen: 2, caught: 0 },
{ name: 'blastoise', _id: '5cef3501ef6005a77cd4fd21', seen: 1, caught: 1 },
{ name: 'bulbasaur', _id: '5cef3501ef6005a77cd4fd17', seen: 2, caught: 2 },
{ name: 'pidgey', _id: '5cef3501ef6005a77cd4fd29', seen: 2, caught: 0 },
{ name: 'ivysaur', _id: '5cef3501ef6005a77cd4fd19', seen: 1, caught: 0 }];

test('makelabelArray should take in array of objects and return array of names ', (expect) => {

    const expected = ['wartortle', 'wartortle', 'caterpie', 'weedle', 'charmeleon', 'beedrill', 'metapod', 'charmander', 'kakuna', 'blastoise', 'bulbasaur', 'pidgey', 'ivysaur'];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeLabelArray(data);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('makeSeenArray should take in array of objects and return array of numbers ', (expect) => {

    const expected = [3, 3, 4, 4, 1, 2, 2, 3, 2, 1, 2, 2, 1];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeSeenArray(data);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('makeCaughtArray should take in array of objects and return array of numbers ', (expect) => {

    const expected = [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 2, 0, 0];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCaughtArray(data);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
