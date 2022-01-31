////******Experiments with classes *////////Tic-tacto game///////
////******Built by Yudenko Michael, desember 2021 *////////
////******Dinished 12.12.2021 */
let rectUpLeftXY = [10, 205, 400]; //array of coordinates of Left Right corner of Buttons (din't use yet)
let rectCentertY = [10, 205, 400]; //array of coordinates of Centres of Buttons (didn't use yet)
let colrs = ['Silver', 'Gray', 'LightSteelBlue', 'DarkSlateGray', 'DarkOliveGreen', 'pink', 'red']; 
/* array of main Colors for all figures
            0. backlground-canvas color
            1. defolt-fill for Buttons color
            2. defolt-border for Buttons color
            3. mouseDowned Buttons color
            4. mouseMoving above Buttons color - (didn't use)
            5. winLine Buttons color
            6. winLine line color */
let coordMsX = 0;
let coordMsY = 0;
let counter = 0; //variable for counting of clicks above Buttons
let ppBut = {};  // variable for bigButton(i) names remembering, for automatization drawing

class BigButton { //the main class of Buttons with all complex of events and 
    constructor(pUpLeftX, pUpLeftY, pCenterX, pCenterY, filler, bordColr, mouseMov, mouseDowned, XO) {
        this.pUpLeftX = pUpLeftX;       //coordinate of left right corner of Button's rectangle
        this.pUpLeftY = pUpLeftY;
        this.pCenterX = pCenterX;       //coordinate of center of Button's rectangle
        this.pCenterY = pCenterY;
        this.filler = filler;           //filling rectangle's color
        this.bordColr = bordColr;       //border rectangle's color from (var colrs)
        this.mouseMov = mouseMov;       //is mouse moving above Button (true/false)
        this.mouseDowned = mouseDowned; //is mouse was pressed above Button (true/false)
        this.XO = XO;                   //select X or O will above the Button
    }
    bBuilder() {
        fill(this.filler);
        if (!this.mouseMov) {
            stroke(this.bordColr);
            //this.filler = this.filler;
            this.filler = colrs[4];
        } else {
            stroke(colrs[6]);
            //this.filler = colrs[4];
        }

        if (this.mouseDowned) { //You need think about that algorithm of drawing mouse-pressed condition
            this.filler = colrs[1];
        } else {this.filler = colrs[2];}

        //fill(this.filler);

        rect(this.pUpLeftX, this.pUpLeftY, 185, 185, 5);
        if (this.XO == 1) {     //drawing CROSS
            stroke('black');
            strokeWeight(10);
            line((this.pCenterX-30),(this.pCenterY-50),(this.pCenterX+30),(this.pCenterY+50));
            line((this.pCenterX+30),(this.pCenterY-50),(this.pCenterX-30),(this.pCenterY+50));
            strokeWeight(1);
        }
        if (this.XO == 2) {     //drawing OU
            stroke('black');
            strokeWeight(10);
            ellipse(this.pCenterX,this.pCenterY,75,100);
            strokeWeight(1);
        }        
    }
}

let bigButton1 = new BigButton(10, 10, 102, 102, colrs[2], colrs[3], false, false, 0);   //1--
let bigButton2 = new BigButton(205, 10, 297, 102, colrs[2], colrs[3], false, false, 0);  //-2-
let bigButton3 = new BigButton(400, 10, 492, 102, colrs[2], colrs[3], false, false, 0);  //--3
let bigButton4 = new BigButton(10, 205, 102, 297, colrs[2], colrs[3], false, false, 0);  //4--
let bigButton5 = new BigButton(205, 205, 297, 297, colrs[2], colrs[3], false, false, 0); //-5-   
let bigButton6 = new BigButton(400, 205, 492, 297, colrs[2], colrs[3], false, false, 0); //--6
let bigButton7 = new BigButton(10, 400, 102, 492, colrs[2], colrs[3], false, false, 0);  //7--
let bigButton8 = new BigButton(205, 400, 297, 492, colrs[2], colrs[3], false, false, 0); //-8-
let bigButton9 = new BigButton(400, 400, 492, 492, colrs[2], colrs[3], false, false, 0); //--9

function findMsMoving(coordMsX, coordMsY) { //Recognize mouse moving above the Buttons
    if ((coordMsX>=10 && coordMsX<=195) && (coordMsY>=10 && coordMsY<=195)) {   //1--
        bigButton1.mouseMov = true;
        //bigButton1.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton1.mouseMov = false;
        //bigButton1.filler = colrs[2];
    }
    if ((coordMsX>=205 && coordMsX<=390) && (coordMsY>=10 && coordMsY<=195)) {  //-2-
        bigButton2.mouseMov = true;
        //bigButton2.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton2.mouseMov = false;
        //bigButton2.filler = colrs[2];
    }
    if ((coordMsX>=400 && coordMsX<=585) && (coordMsY>=10 && coordMsY<=195)) {  //--3
        bigButton3.mouseMov = true;
        //bigButton3.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton3.mouseMov = false;
        //bigButton3.filler = colrs[2];
    }
    if (((coordMsX>=10 && coordMsX<=195)) && (coordMsY>=205 && coordMsY<=390)) {  //4--
        bigButton4.mouseMov = true;
        //bigButton4.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton4.mouseMov = false;
        //bigButton4.filler = colrs[2];
    }
    if (((coordMsX>=205 && coordMsX<=390)) && (coordMsY>=205 && coordMsY<=390)) {  //-5-
        bigButton5.mouseMov = true;
        //bigButton5.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton5.mouseMov = false;
        //bigButton5.filler = colrs[2];
    }
    if (((coordMsX>=400 && coordMsX<=585)) && (coordMsY>=205 && coordMsY<=390)) {  //--6
        bigButton6.mouseMov = true;
        //bigButton6.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton6.mouseMov = false;
        //bigButton6.filler = colrs[2];
    }
    if (((coordMsX>=10 && coordMsX<=195)) && (coordMsY>=400 && coordMsY<=585)) {  //7--
        bigButton7.mouseMov = true;
        //bigButton7.filler = colrs[4];
        //console.log(coordMsX, coordMsY);
    } else {
        bigButton7.mouseMov = false;
        //bigButton7.filler = colrs[2];
    }
    if (((coordMsX>=205 && coordMsX<=390)) && (coordMsY>=400 && coordMsY<=585)) {  //-8-
        bigButton8.mouseMov = true;
        //bigButton8.filler = colrs[4];
           
    } else {
        bigButton8.mouseMov = false;
        //bigButton8.filler = colrs[2];
    }
    if (((coordMsX>=400 && coordMsX<=585)) && (coordMsY>=400 && coordMsY<=585)) {  //--9
        bigButton9.mouseMov = true;
        //bigButton9.filler = colrs[4];    
        
    } else {
        bigButton9.mouseMov = false;
        //bigButton9.filler = colrs[2];
    }


         
}


function setup() { ////////////////////////////////////////////////////////////////////
    createCanvas(595, 595);
    //console.log(rectUpLeftX[2]);

    function clearField() {                     //clearing the field with Buttons
        console.log('clearing the field');
        bigButton1.mouseDowned = false;
        bigButton1.XO = 0;
        bigButton2.mouseDowned = false;
        bigButton2.XO = 0;
        bigButton3.mouseDowned = false;
        bigButton3.XO = 0;
        bigButton4.mouseDowned = false;
        bigButton4.XO = 0;
        bigButton5.mouseDowned = false;
        bigButton5.XO = 0;
        bigButton6.mouseDowned = false;
        bigButton6.XO = 0;
        bigButton7.mouseDowned = false;
        bigButton7.XO = 0;
        bigButton8.mouseDowned = false;
        bigButton8.XO = 0;
        bigButton9.mouseDowned = false;
        bigButton9.XO = 0;
        counter = 0;
    }

    function mousClick() {
        //console.log(coordMsX, coordMsY);
        counter = counter + 1;
        if (counter>0 && counter<=9) {
            ppBut.mouseDowned = true;
            if (counter%2 == 0) {
                ppBut.XO = 2;
            }
            if (counter%2 != 0) {
                ppBut.XO = 1;
            }
            //ppBut.filler = colrs[1];
            //console.log('counter = ' + counter);
            console.log(ppBut.filler + ' ' + ppBut.mouseDowned);
        } else {
            clearField();
        }
    } 

    addEventListener("click", function() {          // listener for mouse click
        if (bigButton1.mouseMov) {
            ppBut = bigButton1;
            mousClick();
            console.log('you pressed button 1');
        }
        if (bigButton2.mouseMov) {
            ppBut = bigButton2;
            mousClick();
            console.log('you pressed button 2');
        }
        if (bigButton3.mouseMov) {
            ppBut = bigButton3;
            mousClick();
            console.log('you pressed button 3');
        }
        if (bigButton4.mouseMov) {
            ppBut = bigButton4;
            mousClick();
            console.log('you pressed button 4');
        }
        if (bigButton5.mouseMov) {
            ppBut = bigButton5;
            mousClick();
            console.log('you pressed button 5');
        }
        if (bigButton6.mouseMov) {
            ppBut = bigButton6;
            mousClick();
            console.log('you pressed button 6');
        }
        if (bigButton7.mouseMov) {
            ppBut = bigButton7;
            mousClick();
            console.log('you pressed button 7');
        }
        if (bigButton8.mouseMov) {
            ppBut = bigButton8;
            mousClick();
            console.log('you pressed button 8');
        }
        if (bigButton9.mouseMov) {
            ppBut = bigButton9;
            mousClick();            
            console.log('you pressed button 9');
        }
      });

      

}

function draw() { /////////////////////////////////////////////////////////////////////
    background(colrs[1]);

    bigButton1.bBuilder();
    bigButton2.bBuilder();
    bigButton3.bBuilder();
    bigButton4.bBuilder();
    bigButton5.bBuilder();
    bigButton6.bBuilder();
    bigButton7.bBuilder();
    bigButton8.bBuilder();
    bigButton9.bBuilder();

    function tratata() {
        if (ppBut.mouseDowned) {ppBut.filler = colrs[1];}
        //console.log("tratata " + ppBut);
        console.log('tratata ' + counter);
    }

    function WinLines() {
        //console.log('winLine ' + counter);
        
            if ((bigButton1.XO > 0) && (bigButton2.XO > 0) && (bigButton3.XO > 0)) {
                if ((bigButton1.XO == bigButton2.XO) && (bigButton2.XO == bigButton3.XO)) {
                    console.log('winLine1-3 ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton1.pCenterX-25, bigButton1.pCenterY, bigButton3.pCenterX+25, bigButton3.pCenterY);
                    bigButton1.filler = colrs[5]; 
                    bigButton2.filler = colrs[5];
                    bigButton3.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            }            
            if ((bigButton4.XO > 0) && (bigButton5.XO > 0) && (bigButton6.XO > 0)) {
                if ((bigButton4.XO == bigButton5.XO) && (bigButton5.XO == bigButton6.XO)) {
                    console.log('winLine4-6 ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton4.pCenterX-25, bigButton4.pCenterY, bigButton6.pCenterX+25, bigButton6.pCenterY);
                    bigButton4.filler = colrs[5]; 
                    bigButton5.filler = colrs[5];
                    bigButton6.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);
            }
            if ((bigButton7.XO > 0) && (bigButton8.XO > 0) && (bigButton9.XO > 0)) {
                if ((bigButton7.XO == bigButton8.XO) && (bigButton8.XO == bigButton9.XO)) {
                    console.log('winLine7-9 ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton7.pCenterX-25, bigButton7.pCenterY, bigButton9.pCenterX+25, bigButton9.pCenterY);
                    bigButton7.filler = colrs[5]; 
                    bigButton8.filler = colrs[5];
                    bigButton9.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            }     
            if ((bigButton1.XO > 0) && (bigButton4.XO > 0) && (bigButton7.XO > 0)) {
                if ((bigButton1.XO == bigButton4.XO) && (bigButton4.XO == bigButton7.XO)) {
                    console.log('winLine1-7 ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton1.pCenterX, bigButton1.pCenterY-25, bigButton7.pCenterX, bigButton7.pCenterY+25);
                    bigButton1.filler = colrs[5]; 
                    bigButton4.filler = colrs[5];
                    bigButton7.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            } 
            if ((bigButton2.XO > 0) && (bigButton5.XO > 0) && (bigButton8.XO > 0)) {
                if ((bigButton2.XO == bigButton5.XO) && (bigButton5.XO == bigButton8.XO)) {
                    console.log('winLine2-8 ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton2.pCenterX, bigButton2.pCenterY-25, bigButton8.pCenterX, bigButton8.pCenterY+25);
                    bigButton2.filler = colrs[5]; 
                    bigButton5.filler = colrs[5];
                    bigButton8.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            } 
            if ((bigButton3.XO > 0) && (bigButton6.XO > 0) && (bigButton9.XO > 0)) {
                if ((bigButton3.XO == bigButton6.XO) && (bigButton6.XO == bigButton9.XO)) {
                    console.log('winLine3-9 ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton3.pCenterX, bigButton3.pCenterY-25, bigButton9.pCenterX, bigButton9.pCenterY+25);
                    bigButton3.filler = colrs[5]; 
                    bigButton6.filler = colrs[5];
                    bigButton9.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            } 
            if ((bigButton1.XO > 0) && (bigButton5.XO > 0) && (bigButton9.XO > 0)) {
                if ((bigButton1.XO == bigButton5.XO) && (bigButton5.XO == bigButton9.XO)) {
                    console.log('winLine1-9 diag ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton1.pCenterX-25, bigButton1.pCenterY-25, bigButton9.pCenterX+25, bigButton9.pCenterY+25);
                    bigButton1.filler = colrs[5]; 
                    bigButton5.filler = colrs[5];
                    bigButton9.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            } 
            if ((bigButton3.XO > 0) && (bigButton5.XO > 0) && (bigButton7.XO > 0)) {
                if ((bigButton3.XO == bigButton5.XO) && (bigButton5.XO == bigButton7.XO)) {
                    console.log('winLine3-7 diag ' + counter);
                    stroke(colrs[6]);
                    strokeWeight(10);
                    line(bigButton3.pCenterX+25, bigButton3.pCenterY-25, bigButton7.pCenterX-25, bigButton7.pCenterY+25);
                    bigButton3.filler = colrs[5]; 
                    bigButton5.filler = colrs[5];
                    bigButton7.filler = colrs[5];
                    counter = 9;
                }
                strokeWeight(1);                
            }             
    }

    /* bigButton1.bBuilder();
    bigButton2.bBuilder();
    bigButton3.bBuilder();
    bigButton4.bBuilder();
    bigButton5.bBuilder();
    bigButton6.bBuilder();
    bigButton7.bBuilder();
    bigButton8.bBuilder();
    bigButton9.bBuilder(); */

    if (MouseEvent) {
        coordMsX = mouseX;
        coordMsY = mouseY;
        findMsMoving(coordMsX, coordMsY);
        //if (MouseEvent = MouseClicked) {
            //console.log('mouse-click!!!');
        }

    tratata();

    if ((counter => 5) && (counter <= 9) && (counter !=0)) {
        WinLines();
    }
    
    

    

}
