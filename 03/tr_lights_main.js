// It's the main block of Traffic Lights simulator
// I'll use HTML CANVAS vithout any libraries
// Michael Yudenko 14.01.2023
let x=0, y=0;
let trLights = [];
let arcBegin=0, arcEnd=0;
let xX=0, yY=0;
let deltaX=0, deltaY=0;
let i=0, j=0, ii=0, jj=0, pox=0;
let goStop = false;
let timerId;

const canvas = document.getElementById("maincanvas");

function step00() {     // clear the lights!
    for (i=0;i<4;i++) {     
        trLights[i].tr_Builder(false, false, false);
    }
}

function go01() {   // function for start of work traffic light algorithm
    //13.01.2023 - it works
    console.log('GO! subprogram');
    goStop = true;
    step00();
    console.log('goStop=', goStop);
    pox = 0;
    workTrLight2();    
}

function go02() { // 13.01.2023 - it works
    console.log('STOP! subprogram');
    goStop = false;
    step00();
    clearTimeout(timerId);
    console.log("goStop = ", goStop);
}

function workTrLight2() { //13.01.2023 - it works, blinking west-east / north-south
    // func for working cycle of traffic lights
    console.log('workTrLight2 begun to work!');
    if (goStop) {
        timerId = setTimeout(function workFunc1() {
            switch(pox) {
            case 1:
                console.log("north-south way go");
                for (i=0;i<4;i=i+2) {
                    trLights[i].tr_Builder(false, false, true);
                }
                for (i=1;i<4;i=i+2) {
                    trLights[i].tr_Builder(true, false, false);
                }
                pox = 0;
                break;
            case 0:
                console.log("west-east way go");
                for (i=0;i<4;i=i+2) {
                    trLights[i].tr_Builder(true, false, false);
                }
                for (i=1;i<4;i=i+2) {
                    trLights[i].tr_Builder(false, false, true);
                }
                pox = 1;
                break;
            }
            timerId = setTimeout(workFunc1, 5000);
        }, 50);
    }
}

if (canvas.getContext) {    //////////////////////////////////////////////////
    const ctx = canvas.getContext("2d");

    function tr_ligtsGenerator() {  // make 6 traffic lights with basic paramrters
        for (i=1;i<=6;i++) {
            let trLigt = new Tr_Light(i, 0, 0, ATTITUDE[1], TYPE[0], ctx);
            trLights.push(trLigt);
            switch(i) {
                case 1: {
                    trLights[i-1].leftUpX = 200;
                    trLights[i-1].leftUpY = 140;
                    break;
                }
                case 2: {
                    trLights[i-1].leftUpX = 380;
                    trLights[i-1].leftUpY = 200;
                    trLights[i-1].attitude = ATTITUDE[0];   //horizontal
                    break;
                }
                case 3: {
                    trLights[i-1].leftUpX = 360;
                    trLights[i-1].leftUpY = 380;
                    break;
                }
                case 4: {
                    trLights[i-1].leftUpX = 140;
                    trLights[i-1].leftUpY = 360;
                    trLights[i-1].attitude = ATTITUDE[0];   //horizontal
                    break;
                }
                case 5: {
                    trLights[i-1].leftUpX = 200;
                    trLights[i-1].leftUpY = 100;
                    trLights[i-1].types = TYPE[1];
                    break;
                }
                case 6: {
                    trLights[i-1].leftUpX = 200;
                    trLights[i-1].leftUpY = 370;
                    trLights[i-1].types = TYPE[1];
                    break;
                }
            }
        }        
        console.log(trLights);
    }
    tr_ligtsGenerator();
    
    
    function drawField() {  // Function for drawing the green field
        ctx.fillStyle = "YellowGreen";
        ctx.fillRect(0,0,600,600);
        ctx.fill(); 
    }
    drawField();
        
    function drawRoads() {  // Function for drawing the crossroad - finished done       
        ctx.beginPath(); ///////////////////
        ctx.lineWidth = "3";
        ctx.strokeStyle = COLORS[3]; // "grey"
        ctx.fillStyle = COLORS[4];   // "LightGrey"
            ctx.moveTo(250,-10);      
            ctx.lineTo(250,200);
            ctx.arcTo(250, 250, 200, 250, 50);
            ctx.lineTo(-10,250);
            ctx.lineTo(-10,350);
            ctx.lineTo(200,350);
            ctx.arcTo(250, 350, 250, 400, 50);
            ctx.lineTo(250, 610);
            ctx.lineTo(350, 610);
            ctx.lineTo(350, 400);
            ctx.arcTo(350, 350, 400, 350, 50);
            ctx.lineTo(610, 350);
            ctx.lineTo(610, 250);
            ctx.lineTo(400, 250);
            ctx.arcTo(350, 250, 350, 200, 50);
            ctx.lineTo(350, -10);
            ctx.lineTo(250, -10);
        ctx.fill();
        ctx.stroke();        
        ctx.beginPath(); ////////////////////
        ctx.lineWidth = "3";
        ctx.strokeStyle = COLORS[6]; // "white"
            ctx.moveTo(297, 0);     //
            ctx.lineTo(297, 230);
            ctx.moveTo(303, 0);
            ctx.lineTo(303, 230);
            ctx.moveTo(600, 297);   //
            ctx.lineTo(370, 297);
            ctx.moveTo(600, 303);
            ctx.lineTo(370, 303);
            ctx.moveTo(297, 600);   //
            ctx.lineTo(297, 370);
            ctx.moveTo(303, 600);
            ctx.lineTo(303, 370);
            ctx.moveTo(0, 297);     //
            ctx.lineTo(230, 297);
            ctx.moveTo(0, 303);
            ctx.lineTo(230, 303);            
        ctx.stroke();
        ctx.beginPath(); ////////////////////
        ctx.lineWidth = "6";
        ctx.strokeStyle = COLORS[6]; // "white"
            ctx.moveTo(230, 295);   // left
            ctx.lineTo(230, 340);
            ctx.moveTo(370, 305);   // right
            ctx.lineTo(370, 260);
            ctx.moveTo(305, 230);   // up
            ctx.lineTo(260, 230);
            ctx.moveTo(295, 370);   // bottom
            ctx.lineTo(340, 370);
        ctx.stroke();
        ctx.beginPath(); ////////////////////
        ctx.lineWidth = "3";
        ctx.strokeStyle = COLORS[1]; // "yellow"
            ctx.rect(250, 250, 100, 100);            
            for (x=0; x<=5; x++) {
                //console.log(x);
                ctx.moveTo(250+x*20, 250);
                ctx.lineTo(250, 250+x*20);
                ctx.lineTo(350-x*20, 350);
                ctx.lineTo(350, 350-x*20);
                ctx.lineTo(250+x*20, 250);                
            }
        ctx.stroke();
    }    
    drawRoads();

}

