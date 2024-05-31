const Museum_lib = {
        // place name: [lat, lon]
        // [4] [5] [6]
        // [2/3] [7] [8/9]
        // [1] [entrance] [10]
        'entrance': [145, 23],
        'room1': [230, 23],
        'room2': [240, 65],
        'room3': [240, 100],
        'room4':[230, 130],
        'room5':[145, 130],
        'room6':[65, 130],
        'room7':[145,70],
        'room8':[55, 100],
        'room9':[55, 65],
        'room10':[65, 23]
};

let Museum_crowd = {};
let max_crowd = 100;

function crowd(size){return  Math.round(Math.random() * size/2);}

for(let key in Museum_lib){
    let room_crowd = crowd(max_crowd);
    max_crowd = max_crowd - room_crowd;
    if(key == Object.keys(Museum_lib).slice(-1)){room_crowd = max_crowd;}

    Museum_crowd[key] = room_crowd;
}

const rows = document.getElementsByTagName("table")[0];

console.log(rows);