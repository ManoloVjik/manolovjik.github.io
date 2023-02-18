// Main program of The Taken (15) game
console.log('Hello!!! It is The MAIN CODE');

let i = 0, j = 0, ii = 1, jj = 1, yy = 1;
let coordX = 0, coordY = 0;
let num = 0;
let colrNumButton = 0;
let buttons = [];
let item = buttons;
let gameTab = GAME_TABLE;
let coordMsX = 0, coordMsY = 0;
let digits = 0;
let zeroX = 0, zeroY = 0;
let thisX = 0, thisY = 0, thisX1 = 0, thisY1 = 0, thisX2 = 0, thisY2 = 0;
let rePlace = false, zeRO = false, comPare = false;
let stepStep = 0, stepQounty = 0;
let gameValues = {
    steps: 0,
    wins: 0,
}
//////////////////////////////////////////////////////

// Rewrite values on the screen
function updateAccount(key, value) {            //steps 0
    let element = document.getElementById(key); //
    if (element) {
        //console.log('It is updateAccaunt function!');
        element.textContent = value; //
    }
}

// Proxing access to the gameValues keys
let account = new Proxy(gameValues, {
    set: function (target, key, value) {
        //console.log('It is proxy is working');
        target[key] = value;
        updateAccount(key, value);
        return true;
    }
});

function newGame00() {
    //alert('new_game_01_begins');
    gameTab = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,0,15],
    ];
    account.steps = 0;
    //account.wins = 0;
    stepQounty = 0; 
}

function newGame01() {
    //alert('new_game_01_begins');
    gameTab = [
        [1,9,5,6],
        [2,13,4,14],
        [3,11,0,15],
        [10,8,7,12],
    ];
    account.steps = 0;
    //account.wins = 0;
    stepQounty = 0; 
}
function newGame02() {
    //alert('new_game_02_begins');
    gameTab = [
        [1,6,3,8],
        [4,11,5,13],
        [2,14,0,15],
        [10,7,9,12],
    ];
    account.steps = 0;
    //account.wins = 0;
    stepQounty = 0; 
}
function newGame03() {
    //alert('new_game_03_begins');
    gameTab = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,0,15],
    ];
    account.steps = 0;
    //account.wins = 0;
    stepQounty = 0; 
}
//////////////////////////////////////////////////////

function buildButtonsArray() {  //subprogram for create button-objects and Array of button-objects
    for (i=0;i<4;i++) {        // will be run only once
        coordX = SIZES[3]*(i+1)+SIZES[1]*(i);
        for (j=0;j<4;j++) {            
            coordY = SIZES[3]*(j+1)+SIZES[2]*(j);
            num = i*4 + j;
            if (gameTab[i][j]>0) {
                digits = gameTab[i][j];                
                colrNumButton = COLRS[5];
            } else {
                digits = 0;
                //console.log(j,i,digits);
                colrNumButton = COLRS[1];
            }
            let button = new BigButton(num,coordX,coordY,digits,i,j,colrNumButton,COLRS[2],false,false);  //create 16 new objects of BigButtons class
            buttons.push(button);   //push every new object, which created into FOR-cycle to one Array of buttons[]
            button = 0;
            //console.log(i,j,digits);
        }
        
    }
    //console.log(buttons);
}
buildButtonsArray(); 

function zeroFinder() {   // Finder of Zero value in gameTab array and return of coordinates of ZERO in gameTab array!!!    
    for (iii=0;iii<4;iii++) {
        for (jjj=0;jjj<4;jjj++) {
            if (gameTab[iii][jjj] == 0) {                
                zeroX = iii;
                zeroY = jjj;
            } 
        }
    }   
    zeRO = true;
}

function thisButtonXYFinder() { // Finder of coordinates of THIS BUTTON and return of coordinates of ZERO in gameTab array!!!
    for (item of buttons) {        
        item.bMouseMoveFinder();    // this.mouseMov = false/false
        item.bMouseDowned();        // bMouseDowned = false/true depends if MouseMove under the Button is true and 'click'
        if (item.mouseDowned) {
            //console.log('you pressed button',item.digits,item.hereX,item.hereY);
            thisX = item.hereX;
            thisY = item.hereY;
            //return;
        } 
    }
}

function buildButtonsCells() {  // draw the game field with 16 cells for the game bones
                                // will be run from draw-block
    
    for (i=0;i<4;i++) {
        for (j=0;j<4;j++) {
            //console.log('fffff');
            buttons[4*i+j].digits = gameTab[i][j];
            buttons[4*i+j].bBuilder();
        }
    }       
}

function replaceReady() {   // identify of ready for replace this button and zero button
    if (thisX == zeroX && thisY == zeroY) {
        rePlace = false;
        return;
    }
    
    if (((thisX1 == thisX2) && (((thisY1-thisY2) == 1) || ((thisY1-thisY2) == -1))) || ((thisY1 == thisY2) && (((thisX1-thisX2) == 1) || ((thisX1-thisX2) == -1)))) {
        //console.log('its could be REPLACED','X1-X2=',thisX1-thisX2,'Y1-Y2=',thisY1-thisY2,'zeRO=',zeRO);
        //console.log(thisY-zeroY);
        rePlace = true;
    } else rePlace = false;

    if (comPare) {
        //alert(`You complete the game round and WIN!!! \n You have done ${stepQounty} steps.`);
        account.wins=account.wins + 1;        
               
        comPare = false;
        alert(`You complete the game round and WIN!!! \n You have done ${stepQounty-1} steps.`);
        stepQounty = 0; 
        newGame00();
    } 
}

function campareWin() {    // check up of win situation with compare matrixes
    if ((JSON.stringify(gameTab) == JSON.stringify(WIN_WIN1)) || (JSON.stringify(gameTab) == JSON.stringify(WIN_WIN2))) {
        comPare = true;
    } else comPare = false;    
}

function setup() { ////////////////////////////////////////////////////////////////////
    let cnd = createCanvas(SIZES[0]*SIZES[1]+(SIZES[0]+1)*SIZES[3], SIZES[0]*SIZES[2]+(SIZES[0]+1)*SIZES[3]);
    //create Main canvas 530x530 for drawing 

    //textFont(inconsolata); // parameteres of the Text on the Buttons
    textSize(SIZES[1]/2);
    textAlign(CENTER, CENTER);
    //console.table(gameTab);

    comPare = false;

    canvas.addEventListener("click", function() {
        //console.log('event listenet begun');        
        //console.log(stepStep);
        stepStep = stepStep + 1;
        stepQounty = stepQounty + 1;
        
        //console.log(stepStep);

        zeroFinder();
        
        if (stepStep == 1) {    // STEP 2
            //console.log('stepStep',stepStep);
            thisButtonXYFinder();
            thisX2 = thisX;
            thisY2 = thisY;
            thisX1 = zeroX;
            thisY1 = zeroY;       

            replaceReady();

            if (rePlace && zeRO) {
                //gameTab[zeroX][zeroY] = gameTab[thisX2][thisY2];
                gameTab[thisX1][thisY1] = gameTab[thisX2][thisY2];
                gameTab[thisX2][thisY2] = 0;
            }

            stepStep=0; // don't forget rechange stepStep for every two clicks on the board!!!
            //zeroFinder();            
            //console.log('this',thisX2,thisY2,'zero',zeroX,zeroY);
            buttons[thisX2*4+thisY2].mouseDowned = false;
            buttons[thisX2*4+thisY2].mouseMov = false;
            //buttons[zeroY*4 + zeroX].mouseDowned = false;
            zeRO = false;
        }            
        
        //compare two arrays!!! 
        campareWin();
        //console.log(stepQounty);
        account.steps = stepQounty;

    });    
}    

function draw() { /////////////////////////////////////////////////////////////////////
    if (!comPare) {
        background(COLRS[1]);
    } else background(COLRS[6]);       
    
    buildButtonsCells(); // draw the game field with 16 cells for the game bones  

}