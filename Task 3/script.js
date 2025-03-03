function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
    }
}
