let role = "Employee";
let access;

switch (role) {
    case "Employee":
        message = "You have access to dietary services.";
        break;
        
    case "Enrolled Member":
        message = "You have access to dietary services and one-on-one interaction with a dietician.";
        break;
        
    case "Subscriber":
        message = "You have partial access to dietary services.";
        break;
        
    default:
        message = "You need to enroll first"
}

console.log("Welcome " + role + " " + message)