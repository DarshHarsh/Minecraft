var canvas = new fabric.Canvas('myCanvas');

player_X = 10;
player_Y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(player_object);
    });
}
function new_imge(get_Img) {
    fabric.Image.fromURL(get_Img, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift is presed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keypressed == '77') {
        console.log("m and shift is presed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '87') {
        new_imge('wall.jpg');
        console.log("w");
    }
    if (keypressed == '84') {
        new_imge('trunk.jpg');
        console.log("t");
    }
    if (keypressed == '89') {
        new_imge('yellow_wall.jpg');
        console.log("y");
    }
    if (keypressed == '85') {
        new_imge('unique.png');
        console.log("u");
    }
    if (keypressed == '82') {
        new_imge('roof.jpg');
        console.log("r");
    }
    if (keypressed == '76') {
        new_imge('light_green.png');
        console.log("l");
    }
    if (keypressed == '71') {
        new_imge('ground.png');
        console.log("g");
    }
    if (keypressed == '68') {
        new_imge('dark_green.png');
        console.log("d");
    }
    if (keypressed == '67') {
        new_imge('cloud.jpg');
        console.log("c");
    }
    function up() {
        if (player_Y >= 0) {
            player_Y = player_Y - block_image_height;
            console.log("block_image_height=" + block_image_height);
            console.log("player_X=" + player_X);
            console.log("player_Y=" + player_Y);
            canvas.remove(player_object);
            player_update();
        }

    }
    function down() {
        if (player_Y <= 500) {
            player_Y = player_Y + block_image_height;
            console.log("block_image_height=" + block_image_height);
            console.log("player_X=" + player_X);
            console.log("player_Y=" + player_Y);
            canvas.remove(player_object);
            player_update();
        }

    }
    function left() {
        if (player_X >= 0) {
            player_X = player_X - block_image_width;
            console.log("block_image_width=" + block_image_width);
            console.log("player_X=" + player_X);
            console.log("player_Y=" + player_Y);
            canvas.remove(player_object);
            player_update();
        }

    }
    function right() {
        if (player_X <= 800) {
            player_X = player_X + block_image_width;
            console.log("block_image_width=" + block_image_width);
            console.log("player_X=" + player_X);
            console.log("player_Y=" + player_Y);
            canvas.remove(player_object);
            player_update();
        }

    }
}
