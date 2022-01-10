
var currDate = new Date();
var hours = currDate.getHours();
var greetingMessage;

if (hours < 12)
    greetingMessage = 'Good Morning,';
else if (hours >= 12 && hours <= 17)
    greetingMessage = 'Good Noon,';
else if (hours >= 17 && hours <= 24)
    greetingMessage = 'Good Evening,';


