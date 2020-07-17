// problem 1
function feetToMile(ft) {

    if (ft < 0) {
        console.log("Feet can't be negative.");
        return -1;
    }

    let mile = ft * 0.000189394;
    return mile;
}
// ----------------------------------------------------------


// problem 2
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Amount of furniture can't be negative.");
        return -1;
    }

    else if (Number.isInteger(chair) &&
        Number.isInteger(table) &&
        Number.isInteger(bed)) {

        let totalWood = (chair * 1) + (table * 3) + (bed * 5);
        return totalWood;

    }

    console.log("Amount of furniture can't be a FRACTION.")
    return -1;

}

// ----------------------------------------------------------

// problem 3
function brickCalculator(floors) {
    let totalFeet = 0;

    if (floors < 0) {
        console.log("Number of floors can't be negative.");
        return -1;
    }

    if (!Number.isInteger(floors)) {
        console.log("Number of floors can't be a fraction.");
        return -1;
    }

    if (floors > 20) {
        totalFeet = (15 * 10) + (12 * 10) + (10 * (floors - 20));
    }

    else if (floors > 10) {
        totalFeet = (15 * 10) + (12 * (floors - 10));
    }

    else if (floors > 0) {
        totalFeet = 15 * (floors);
    }

    return (totalFeet * 1000);
}

// ----------------------------------------------------------

// problem 4
function tinyFriend(array) {
    let size = array.length;
    let nameSize = []; // for storing the size of each name
    let namesHavingMinLength = []; // for storing all those names, which has the minimum length 

    if (size == 0) {
        console.log("Empty Array.");
        return -1;
    }

    for (let index = 0; index < size; index++) {
        const sz = array[index].length;
        nameSize.push(sz);
    }

    let minNameLength = Math.min(...nameSize);

    // to find all the names of minimum length
    for (let index = 0; index < size; index++) {
        const element = array[index];

        if (minNameLength == element.length) {
            namesHavingMinLength.push(element);
        }

    }

    return namesHavingMinLength;

}


