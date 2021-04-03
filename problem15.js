// in this array we save the possible variations
let variations = [];
let rightLimits = [];
let bottomLimits = [];

// in this function we find the possible variations
function findVariations(length) {
    findRightLimits(length);
    findBottomLimits(length);
    // we have always to test if the path was already taken before
    while (true) {
        let newVariation = [];
        lete point
        const points = findPoints(length);
        for (let i = 1; i < points; i++) {
            newVariation.push(i);
            // if the recent number is not a limit then let the coincidence decide
            if ( !rightLimits.includes(i) && !bottomLimits.includes(i)) {
                if (rightOrBottom() === 1) {

                }
            }
            else if ( !rightLimits.includes(i) && bottomLimits.includes(i)) {

            }
        }
    }
}

// this function gives back the amount of points in the square
function findPoints(length) {
    return ((length - 1) * (length - 1) + length * 2 * 2);
}

// this function gives back the numbers for the limits on the right
function findRightLimits(length) {
    let points = findPoints(length);
    for (let i = length+1; i <= points; i += length+1) {
        rightLimits.push(i);
    }
}

// this func gives back the numbers for the limits on the bottom
function findBottomLimits(length) {
    let points = findPoints(length);
    for (let i = points; i > points - 4; i--) {
        bottomLimits.push(i);
    }
}

// this func decides whether to go a step to the right or to the bottom
function rightOrBottom() {
    return Math.round(Math.random());
}

// here we execute the starting function
findVariations(3);

/*

POINTS
For n equals the length then this formula gives out how much points there are:
(n-1) * (n-1) + n * 4 + 2

DOWN
+ (length + 1)

RIGHT
+ 1

 */