function calculateWaterIntake() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var sex = document.getElementById('sex').value;
    var activity = document.getElementById('activity').value;

    var waterIntake = calculateBaseRequirement(age, weight, sex) + calculateActivityAddition(activity);

    document.getElementById('result').innerHTML = `Recommended daily water intake: ${waterIntake.toFixed(2)} liters.`;
}

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
        base *= 0.9; // reduce intake by 10% for females
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
