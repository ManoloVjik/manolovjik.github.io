//constants for Taken (15) game project
console.log('Hello!!! It is The CONSTANTS');

const COLRS = [
    'LightGrey',          // 0-1 - background color & defolt color of Buttons
    'Silver',             // 1-2 - color for the Button when it is mouse clicked
    'LightSlateGray',     // 2-3 -
    'Green',              // 3-4 -
    'Red',                // 4-5 - color for the Button's border under mouse cursor
    'Pink',               // 5-6 -
    "Yellow",             // 6-7 - color for Button with mouse-downed  
];

const SIZES = [
    4,               // 0 - vertical and horizontal dimention of the game field
    120,             // 1 - size Button of X
    120,             // 2 - size Button of Y
    10               // 3 - empty interval betveen outer border and Buttons, and betveen Buttons
];

const DIGITS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; //array of digits for drawing on the Buttons

const GAME_TABLE = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,0,15],
];

const WIN_WIN1= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,0],
];

const WIN_WIN2= [
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [4,8,12,0],
];