// It's the constants block of Traffic Lights simulator
LEFTUPXY = [    //coordinates of left up corner of TrLight
    100,        // 0
    100,        // 1
    100,        // 2
    100,        // 3
    50,         // 4
];

ATTITUDE = [        // horizontal or vertical attitude of the traffic lights
    'horizont',     // 0 - horizontal attitude
    'vertical',     // 1 - vertical attitude
];

TYPE = [
    '3x',   // 0 - for cars
    '2x',   // 1 - for pedestrians
];

COLORS = [
    'red',          // 0
    'yellow',       // 1
    'green',        // 2
    'grey',         // 3
    'LightGrey',    // 4
    'black',        // 5
    'white',        // 6
];

COORD = [
    0,
    250,
    350,
];

ARCS_BLENDS = [            // points for ARC-building (arc blends above the lights)
    1.1*Math.PI,    // 0 - begin point for vertical light line num==3
    1.9*Math.PI,    // 1 - end point for vertical light line num==3
    0.1*Math.PI,    // 2 - begin point for vertical light line num==1
    0.9*Math.PI,    // 3 - end point for vertical light line num==1
    0.6*Math.PI,    // 2 - begin point for horizontal light line num==2
    1.4*Math.PI,    // 3 - end point for horizontal light line num==2
    1.6*Math.PI,    // 4 - begin point for horizontal light line num==4
    0.4*Math.PI,    // 5 - end point for horizontal light line num==4
];

DELTA = [
    20, // 0 - deltaX for vertical or deltaY for horizontal
    14, // 1 - deltaY for vertical or deltaX for horizontal
    40, // 2 - rectangle X wide for vertical or Y wide for horizontal
    82, // 3 - rectangle Y wide fpr vertical or X wide for horizontal
];

FREEZ = [
    5000,   // freez time for red and green lights
    2000,   // freez time for yellow light
    500,    // freez time for blinking of lights
]

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

