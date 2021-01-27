export function makeLabelArray(arrayOfNames) {

    const nameArray = [];

    for (let item of arrayOfNames) {
        nameArray.push(item.name);
    }


    return nameArray;

}
export function makeSeenArray(arrayOfNames) {

    const seenArray = [];

    for (let item of arrayOfNames) {
        seenArray.push(item.seen);
    }


    return seenArray;

}
export function makeCaughtArray(arrayOfNames) {

    const caughtArray = [];

    for (let item of arrayOfNames) {
        caughtArray.push(item.caught);
    }


    return caughtArray;

}