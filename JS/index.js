let john_mass = +prompt("Johnning Og'irligini Kiriting");
let john_height = +prompt("Johnning Bo'yini Kiriting");
let bob_mass = +prompt("Bobning Og'irligini Kiriting");
let bob_height = +prompt("Bobning Bo'yini Kiriting");
let bmi_john = john_mass / (john_height * john_height);
let bmi_bob = bob_mass / (bob_height * bob_height);

if (bmi_john > bmi_bob) {
    console.log(`Johnning BMI ${bmi_john.toFixed(0)} Bobning BMI ${bmi_bob.toFixed(0)}, Johnning BMI Bobnikidan ${bmi_john-bmi_bob.toFixed(0)} kattaroq`);
} else if (bmi_bob > bmi_john) {
    console.log(`Bobning BMI ${bmi_bob.toFixed(0)} Johnning BMI ${bmi_john.toFixed(0)}, Bobning BMI Johnnikidan ${bmi_bob-bmi_john.toFixed(0)} kattaroq`);
} 



