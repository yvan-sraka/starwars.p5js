let stars = []
let speed = 0.1

function randomStar() {
    return {
        origin: {x: 640 * Math.random(), y: 480 * Math.random()},
        color: 255 * Math.random(),
        length: 1,
    }
}

function setup() {
    createCanvas(640, 480)
    frameRate(60)
    background('rgb(0,0,0)')
    for (let i = 0; i < 1000; ++i) {
        stars.push(randomStar())
    }
}

function draw() {
    background('rgba(0,0,0,0.5)')
    for (let i = 0; i < stars.length; ++i) {
        const angle = Math.atan2(stars[i].origin.y - (480 / 2),
                                stars[i].origin.x - (640 / 2))
        // const angle = 2 * Math.PI * Math.random()
        const dest = {
            x: stars[i].origin.x + Math.cos(angle) * stars[i].length,
            y: stars[i].origin.y + Math.sin(angle) * stars[i].length,
        }
        stroke(stars[i].color);
        line(stars[i].origin.x, stars[i].origin.y, dest.x, dest.y)
        stars[i].origin = {
            x: 0.01 * dest.x + 0.99 * stars[i].origin.x,
            y: 0.01 * dest.y + 0.99 * stars[i].origin.y,
        }
        stars[i].length = stars[i].length + speed
        // if (stars[i].origin.x < 0 || stars[i].origin.x > 640
        //  || stars[i].origin.y < 0 || stars[i].origin.y > 480)
        //     stars[i] = randomStar()
    }
    speed *= 1.1
}