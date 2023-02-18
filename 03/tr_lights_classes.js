// It's the classes block of Traffic Lights simulator
class Tr_Light {
    constructor (num, leftUpX, leftUpY, attitude, types, ctxx) {
        this.num = num;
        this.leftUpX = leftUpX;
        this.leftUpY = leftUpY;
        this.attitude = attitude; // 0 - horisontal attitude, 1 - vertical attitude
        this.types = types;
        this.ctxx = ctxx;
        let redd = false, yell = false, zell = false;
    }

    tr_Builder(red, yel, zel) {   // red, yel, zel
        //build a traffic light primitive
        //it depends of Type - for cars or for pedestrians
        //moveTo(this.leftUpX, this.leftUpY);
        //console.log('it is tr_Builder');   
        //console.log(this.num, red, yel, zel);

        switch (this.attitude) { // set basical coordinates and primitives depends of attitude
            case (ATTITUDE[1]): {
                //console.log('attitude vertical');
                if (this.num==1) {      // vertical opposite order
                    arcBegin = ARCS_BLENDS[2];
                    arcEnd = ARCS_BLENDS[3];
                } else {                // vertical straight order
                    arcBegin = ARCS_BLENDS[0];
                    arcEnd = ARCS_BLENDS[1];
                }
                xX = DELTA[2]; // 40
                yY = DELTA[3]; // 82
                deltaX = 20;
                deltaY = 14;
                break;
            }
            case (ATTITUDE[0]): {
                //console.log('attitude horisontal');
                if (this.num==4) {      // horizontal opposite order
                    arcBegin = ARCS_BLENDS[6];
                    arcEnd = ARCS_BLENDS[7];
                } else {                // horizontal straight order
                    arcBegin = ARCS_BLENDS[4];
                    arcEnd = ARCS_BLENDS[5];
                }
                xX = DELTA[3]; //82;
                yY = DELTA[2]; //40
                break;
            }
        }
        
        this.ctxx.beginPath(); //draw the grey box for the traffic-light
        this.ctxx.fillStyle = COLORS[3];
        this.ctxx.fillRect(this.leftUpX, this.leftUpY, xX, yY);
        this.ctxx.fill();

        this.ctxx.beginPath(); //draw 3 grey lights as a background
        this.ctxx.fillStyle = COLORS[4];        
        if (this.attitude==ATTITUDE[1]) {   // vertical
            for (ii=0;ii<3;ii++) {
                this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14+26*ii), 12, 0, 2*Math.PI);
            }
        }
        if (this.attitude==ATTITUDE[0]) {   // horizontal
            for (ii=0;ii<3;ii++) {
                this.ctxx.arc((this.leftUpX+14+26*ii), (this.leftUpY+20), 12, 0, 2*Math.PI);
            }
        }
        this.ctxx.fill();        
                
        this.ctxx.strokeStyle = COLORS[5]; //draw 3 sun-blind arcs above lights
        this.ctxx.lineWidth = 2;
        if (this.attitude==ATTITUDE[1]) {   // vertical
            for (ii=0;ii<3;ii++) {          // 
                this.ctxx.beginPath(); 
                this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14+26*ii), 13, arcBegin, arcEnd);
                this.ctxx.stroke();
            }
        }
        if (this.attitude==ATTITUDE[0]) {
            for (ii=0;ii<3;ii++) {
                this.ctxx.beginPath(); //draw 3 sun-blind arcs above lights
                this.ctxx.arc((this.leftUpX+14+26*ii), (this.leftUpY+20), 13, arcBegin, arcEnd);
                this.ctxx.stroke();
            }
        } 
        
        if (red) { // Draw colored lights ! (could be make a three subprogramm!!!)
            //console.log('red!');
            this.ctxx.beginPath();
            this.ctxx.fillStyle = COLORS[0];
            if (this.attitude==ATTITUDE[1]) {
                if (this.num==1) {
                    this.ctxx.arc((this.leftUpX+20), (this.leftUpY+66), 12, 0, 2*Math.PI);
                } else {
                    this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14), 12, 0, 2*Math.PI);
                }
            } 
            if (this.attitude==ATTITUDE[0]) {
                if (this.num==4) {
                    this.ctxx.arc((this.leftUpX+66), (this.leftUpY+20), 12, 0, 2*Math.PI);
                } else {
                    this.ctxx.arc((this.leftUpX+14), (this.leftUpY+20), 12, 0, 2*Math.PI);
                }
            }
            this.ctxx.fill();
        }

        if (yel) {
            this.ctxx.beginPath();
            this.ctxx.fillStyle = COLORS[1];
            if (this.attitude==ATTITUDE[1]) {
                this.ctxx.arc((this.leftUpX+20), (this.leftUpY+40), 12, 0, 2*Math.PI);
            } 
            if (this.attitude==ATTITUDE[0]) {
                this.ctxx.arc((this.leftUpX+40), (this.leftUpY+20), 12, 0, 2*Math.PI);
            }
            this.ctxx.fill();
        }

        if (zel) {
            this.ctxx.beginPath();
            this.ctxx.fillStyle = COLORS[2];
            //this.ctxx.arc((this.leftUpX+20), (this.leftUpY+66), 12, 0, 2*Math.PI);
            if (this.attitude==ATTITUDE[1]) {
                if (this.num==1) {
                    this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14), 12, 0, 2*Math.PI);
                } else {
                    this.ctxx.arc((this.leftUpX+20), (this.leftUpY+66), 12, 0, 2*Math.PI);
                }
            } 
            if (this.attitude==ATTITUDE[0]) {
                if (this.num==4) {
                    this.ctxx.arc((this.leftUpX+14), (this.leftUpY+20), 12, 0, 2*Math.PI);
                } else {
                    this.ctxx.arc((this.leftUpX+66), (this.leftUpY+20), 12, 0, 2*Math.PI);
                }
            }
            this.ctxx.fill();
        }
    }

    tr_Blinker() {
        // blink and reblink of lights 

    }
}