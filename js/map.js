class Map {
    constructor(options) {
        this.w = 7200;
        this.h = 4800;
        this.friction = 0.99;
        this.gravity = 0.0;
        this.maxSpeed = 20;
        this.collideDamageSpeed = 6;
        this.bgimg = new Image();
        this.bgimg.src = "img/maps/forest.png";
        if (typeof options == 'object')
            for (const setting of Object.keys(options)) {
                if (this[setting] !== undefined)
                    this[setting] = options[setting];
            }
    }

    draw(character) {
        ctx.drawImage(this.bgimg, (character.x * -1) + game.window.w / 2, (character.y * -1) + game.window.h / 2, this.w, this.h);
        // ctx.drawImage(this.bgimg, (player.x * -1), (player.y * -1), this.w, this.h);
    }
    // draw(player) {

    // }
}

const tileset = {
    "tile001" : "img/tiles/tile001.png"
}

// const mapTiles = () => {
//     let mapT = []
//     for (let i = 0; i < ; i++) {
//         const element = array[i];
        
//     }
//     return
// }