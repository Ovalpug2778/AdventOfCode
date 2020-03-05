//overall fuel needed
var totalFuel = 0;

//masses to be used
var masses = [100838, 70586, 129092, 133687, 51902, 91959, 73695, 71153, 50852, 145099, 57991, 55193, 97743, 103917, 74780, 113182, 83240, 88356, 70842, 144241, 100991, 90785, 112136, 89888, 136043, 133453, 59090, 109367, 111573, 135955, 133316, 53477, 89519, 51718, 107878, 58592, 147245, 60447, 79962, 51147, 147450, 143355, 130754, 148938, 95062, 85690, 56427, 120009, 128688, 138762, 75391, 52662, 128880, 75215, 109784, 55228, 77516, 107163, 78238, 134656, 66162, 128898, 67369, 56016, 103459, 142756, 111404, 106646, 97241, 128541, 63654, 139371, 103863, 100227, 95993, 148117, 120668, 136733, 89537, 99839, 105850, 81280, 52713, 61371, 109398, 132355, 114002, 85078, 88181, 131713, 122780, 58651, 114289, 125508, 60643, 51632, 108135, 94637, 119975, 62991]

//loop through the masses and get the fuel needed for each run, and then adding that fuel to the fuel total, console.log is included so that the result can be seen, and for debugging purposes.
for (let i = 0; i < masses.length; i++) {
    var fuel = Math.floor((masses[i]/3))-2;
    console.log(fuel);
    // To account for the fuel's fuel, the fuel goes through a similar mass calculation, and adding the needed fuel, repeating until the fuel's fuel is 0 or below, making sure to not add negative fuel.
    while (fuel>0) {
        totalFuel+=fuel;
        fuel=(Math.floor((fuel/3))-2);
        console.log(fuel);
    }
    console.log(totalFuel);
}
//Display the final total on the page.
document.getElementById("main").innerHTML=(totalFuel);