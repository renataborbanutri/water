function calculateBaseRequirement(age, weight, sex) {
    var base;

    // Adjust base water requirement by age
    if (age < 18) {
        base = weight * 0.035; // higher water per kg for children
    } else if (age >= 18 && age <= 50) {
        base = weight * 0.033; // standard adult recommendation
    } else {
        base = weight * 0.030; // slightly less for older adults
    }

    // Adjust further based on sex
    if (sex === 'female') {
        base *= 0.9; // adjust base intake by sex if necessary
    }

    return base;
}

function calculateActivityAddition(activity) {
    var addition = 0;
    switch (activity) {
        case 'low':
            addition = 0.2;
            break;
        case 'moderate':
            addition = 0.5;
            break;
        case 'high':
            addition = 1.0;
            break;
    }
    return addition;
}
