function calculateWaterIntake() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var sex = document.getElementById('sex').value;
    var activity = document.getElementById('activity').value;

    if (!age || !weight) {
        console.error("Age and weight must be provided and must be numbers.");
        document.getElementById('result').innerHTML = "Please enter valid age and weight.";
        return;
    }

    var waterIntake = calculateBaseRequirement(age, weight, sex) + calculateActivityAddition(activity);
    console.log(`Age: ${age}, Weight: ${weight}, Sex: ${sex}, Activity: ${activity}, Water Intake: ${waterIntake}`);

    // Split the water intake into liters and milliliters
    var liters = Math.floor(waterIntake);
    var milliliters = Math.round((waterIntake - liters) * 1000);

    document.getElementById('result').innerHTML = `Recommended daily water intake: ${liters} liters and ${milliliters} milliliters.`;
}

function calculateBaseRequirement(age, weight, sex) {
    var base;

    // Convert string input to numbers
    age = parseInt(age, 10);
    weight = parseFloat(weight);

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
