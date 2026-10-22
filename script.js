//Checking leave request
let availableLeaveDays = 1;
let requestedLeaveDays = 0;


if (requestedLeaveDays === 0) {
    console.log("Please review your leave application");
}
    else if (requestedLeaveDays > availableLeaveDays) {
        console.log("Leave not Approved");
    }   
    else if (requestedLeaveDays <= availableLeaveDays) {
        console.log("Leave is approved");
    }
    else (console.log("Thanks "));
