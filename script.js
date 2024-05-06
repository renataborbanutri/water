function calculateWaterIntake() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var sex = document.getElementById('sex').value;
    var activity = document.getElementById('activity').value;

    var waterIntake = calculateBaseRequirement(age, weight, sex) + calculateActivityAddition(activity);

    document.getElementById('result').innerHTML = `Recommended daily water intake: ${waterIntake} liters.`;
}

function calculateBaseRequirement(age, weight, sex) {
    // Example calculation
    var base = weight * 0.033;
    if (sex === 'female') {
        base *= 0.9;
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
