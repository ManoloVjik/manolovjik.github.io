//Classes for the Taken (15) game
console.log('Hello!!! It is The CLASSES');

class BigButton { //the main class of Buttons with all complex of events and 
    constructor(num,pUpLeftX, pUpLeftY, digits, hereX, hereY, filler, bordColr, mouseMov, mouseDowned) {
        this.num = num;
        this.pUpLeftX = pUpLeftX;       // coordinate of left right corner of Button's rectangle
        this.pUpLeftY = pUpLeftY;
        this.digits = digits;           // number on the Button
        this.hereX = hereX;
        this.hereY = hereY;
        this.filler = filler;           // filling rectangle's color
        this.bordColr = bordColr;       // border rectangle's color from (var colrs)
        this.mouseMov = mouseMov;       // is mouse moving above Button (true/false)
        this.mouseDowned = mouseDowned; // is mouse was pressed above Button (true/false)
    }
    bBuilder() {
        fill(this.filler);
        
        if (!this.mouseMov) {   //the choise of the color for borders, when button is under mouse            
            stroke(this.bordColr);            
        } else { stroke(COLRS[4]); }

        if (this.mouseDowned) { //choise of the color for button, when mouse downed            
            fill(COLRS[0]);
        } 

        rect(this.pUpLeftX, this.pUpLeftY, SIZES[1], SIZES[2], 5);

        if (this.digits>0) {
            // here it's will be draw the Digit on the Button
            text((this.digits), this.pUpLeftX+SIZES[1]/2, this.pUpLeftY+SIZES[2]/2); 
            this.filler = COLRS[5];           
        } else this.filler = COLRS[1];

    }     
    
    bMouseMoveFinder() { //seek mouse cursor moving under the Button
        if ((mouseX>=this.pUpLeftX && mouseX<=(this.pUpLeftX+SIZES[1])) && ((mouseY>=this.pUpLeftY) && mouseY<=(this.pUpLeftY+SIZES[2]))) {
            //console.log(mouseX, mouseY, this.mouseMov);
            this.mouseMov = true;
            //console.log(this.digits);
        } else this.mouseMov = false;
        //console.log(this.digits,this.mouseMov);
    }       

    bMouseDowned() {
        //console.log('bMouseUnDowned is working');
        if (this.mouseMov) {
            //if this.mouseMov is TRUE and this.MouseDowned is TRUE - then listen MouseUnDowned
            //console.log('button',this.digits,this.hereX,this.hereY);
            this.mouseDowned = true;
        } else this.mouseDowned = false;
    }

    bStart() {        
        
        this.bMouseDowned_ThisAndZero();               

    }
}



