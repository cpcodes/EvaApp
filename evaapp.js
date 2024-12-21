function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function submitNames() {
    let names = document.getElementById("names").value;
    console.log("Entered names: " + names);

    if (names === "") {
        document.getElementById("errorMessage").innerHTML = "You must enter at least one name.";
        return;
    }

    let nameList = names.split(',').map(name => name.trim());
    console.log("Names count: " + nameList.length);

    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let weeklyAssignments = assignDailyChores(nameList, daysOfWeek);
    assignWeeklyChores(nameList, weeklyAssignments);

    console.log(weeklyAssignments);
    displayAssignments(weeklyAssignments);

    // Show the root div and the chores message
    document.getElementById("root").style.display = "block";
}

function displayAssignments(assignments) {
    let table = "<table border='1'><tr><th>Name</th>";
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let day of daysOfWeek) {
        table += `<th>${day}</th>`;
    }
    table += "</tr>";

    for (let name in assignments["Monday"]) {
        table += `<tr><td>${name}</td>`;
        for (let day of daysOfWeek) {
            table += "<td>";
            if (assignments[day][name]) {
                for (let chore of assignments[day][name]) {
                    table += `${chore[0]}<br>`;
                }
            }
            table += "</td>";
        }
        table += "</tr>";
    }

    table += "</table>";
    document.getElementById("root").innerHTML = table;
}

function assignChores(names, chores) {
    let assignments = {};
    let shuffledChores = chores.slice(); // Copy the chores array
    shuffledChores.sort(() => Math.random() - 0.5); // Shuffle the chores array

    let nameIndex = 0;
    for (let i = 0; i < shuffledChores.length; i++) {
        let name = names[nameIndex];
        if (!assignments[name]) {
            assignments[name] = [];
        }
        assignments[name].push(shuffledChores[i]);
        nameIndex = (nameIndex + 1) % names.length;
    }

    return assignments;
}

function assignDailyChores(nameList, daysOfWeek) {
    let assignments = {};
    for (let day of daysOfWeek) {
        assignments[day] = assignChores(nameList, choices);
    }
    return assignments;
}

function assignWeeklyChores(nameList, weeklyAssignments) {
    let saturdayAssignments = assignChores(nameList, weeklychoices);
    for (let name in saturdayAssignments) {
        if (!weeklyAssignments["Saturday"][name]) {
            weeklyAssignments["Saturday"][name] = [];
        }
        weeklyAssignments["Saturday"][name] = weeklyAssignments["Saturday"][name].concat(saturdayAssignments[name]);
    }
}

// let choice = getRandomInt(choices.length);
// console.log("Number of elements in array: " + choices.length)
// console.log("choice: " + choice)
// // result += choice + ": " + choices[choice];
// let result = (choices[choice]);
// // console.log(result);
// //const html = ""
// // document.getElementById("root").style.color = "black";
// document.getElementById("output").innerHTML = result[0];
// document.getElementById("image").src = result[1];

