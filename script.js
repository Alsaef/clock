let day = 7;

switch (new Date().getDay()) {
    default:
        day = 'not found';
        break;
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday'
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thuseday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
}
console.log(day);
document.getElementById("week").innerHTML = day;