
function setup() {
    

    let canVas = createCanvas(800, 600);

    //canvas size
    canVas;

}

function draw() {

    var niceGreen = "#87f542";
    var skyBlue = "#42cef5";
    //stroke size and color
    strokeWeight(3.5);
    stroke(niceGreen);


    //backgroud color sky blue
    background(skyBlue);



    //these lines will only shows if moused is pressed
    //so there is no house when but only background unless mouse triggers

    if (mouseIsPressed){
    
    //chimney and purple
    fill(153, 66, 245);
    rect(250, 120, 30, 80);

    //house shape and pink color
    fill(245, 66, 158);
    square(200, 250, 300);
    //roof and taking pink color
    triangle(200, 250, 500, 250, 350, 100);

    //blue door
    fill("blue");
    rect(315, 440, 75, 110);

    //windows and niceGreen color
    fill(niceGreen)
    //circle window
    circle(250, 350, 25);
    //traingle window
    triangle(420, 375, 485, 375, 450, 325)
}

    //the arguements layout to tell users to click to reveal the house
    else {
    function sayNoHouse(noHouse, dude){
        console.log(noHouse + ", " + dude +"!")
    }
    sayNoHouse("Click to reveal the house", "Dude")

    }

}


