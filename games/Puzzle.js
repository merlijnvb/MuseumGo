let ImageURLS = ["../images/kunst1.jpg","../images/kunst2.jpg","../images/kunst3.jpg","../images/vanabbeblueprint.jpg","../images/MuseumGoLogo2.png","../images/MuseumGoLogopng.png"];
let loc = {};
let size = 2;
let score = 0;
let id_old;

let cnt = 0;
let random = Math.floor(Math.random() * ImageURLS.length);

function win(){
    cnt = 0;
    score = 0;
    const container = document.getElementById('puzzle_canvas');
    container.innerHTML = '';
    const WinIMG = document.createElement('div');
    const WinTXT = document.createElement('div');
    WinIMG.id = 'WinIMG';
    WinTXT.id = 'WinTXT';

    WinIMG.style.backgroundImage = `url(${ImageURLS[random]})`;
    WinTXT.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

    container.appendChild(WinIMG);
    container.appendChild(WinTXT);
}

function createPuzzle(PuzzleSize=2){
    const container = document.getElementById('puzzle_canvas');
    let ImageURL = ImageURLS[random];
    document.getElementById("puzzle_title").innerText = "Recreate: " + ImageURL.slice(ImageURL.indexOf("images/")+7,ImageURL.indexOf(".",3));
    container.innerHTML = '';
    const new_width = container.clientWidth / PuzzleSize;
    const new_height = container.clientHeight / PuzzleSize;

    for (let i = 0; i < PuzzleSize**2; i++){
        const piece = document.createElement('div');
        let top = Math.floor(i/PuzzleSize)*new_height;
        let left = i%PuzzleSize*new_width;
        piece.classList.add('puzzle-piece');
        piece.setAttribute('id',`cel${i}`);
        piece.addEventListener('mousedown', startDrag);
        piece.addEventListener('mouseup', stopDrag);

        piece.style.backgroundImage = `url(${ImageURL})`;
        piece.style.backgroundSize = `${container.clientWidth}px ${container.clientHeight}px`;
        piece.style.backgroundPosition = `${i%PuzzleSize * -new_width}px ${Math.floor(i/PuzzleSize) * -new_height}px`;
        piece.style.width = `${new_width}px`;
        piece.style.height = `${new_height}px`;
        piece.style.top = top + 'px';
        piece.style.left = left + 'px';

        loc[i] = [top,left];
        container.appendChild(piece);
    }
}
function hussle(PuzzleSize=2){
    const pieces = document.getElementsByClassName('puzzle-piece');


    for (let j = 0; j < PuzzleSize**2;j++){
        let x,y;
        switch (Math.round(Math.random())){
            case 0:
                x = Math.random() * -30 - 30;
                y = Math.random() * 100 - 10;
                break;
            case 1:
                x = Math.random() * 30 + 110;
                y = Math.random() * 100 - 10;
                break;
        }
        pieces[j].style.left = `${x}%`;
        pieces[j].style.top = `${y}%`;
    }
}
function startDrag(e) {
    console.log(score,cnt);
    this.style.zIndex = 1;
    this.style.cursor = 'grabbing';
    this.dx = e.clientX - this.offsetLeft;
    this.dy = e.clientY - this.offsetTop;
    this.moveHandler = movePiece.bind(this);
    document.addEventListener('mousemove', this.moveHandler);

    if (this.id.slice(-1) != id_old){cnt = 0;}
    else{cnt++;}
}
function movePiece(e) {
    this.style.left = e.clientX - this.dx + 'px';
    this.style.top = e.clientY - this.dy + 'px';
}
function stopDrag() {
    this.style.zIndex = 0;
    this.style.cursor = 'grab';
    document.removeEventListener('mousemove', this.moveHandler);
    const id = this.id.slice(-1);
    const id_x = loc[id][1];
    const id_y = loc[id][0];
    const id_left = this.style.left.slice(0,-2);
    const id_top = this.style.top.slice(0,-2);

    if((Math.abs(id_x - id_left) < 10) && (Math.abs(id_y - id_top) < 10)){
        this.style.left = `${id_x}px`;
        this.style.top = `${id_y}px`;
        if (cnt == 0){
            score++;
        }
        cnt++;
    }else{
        cnt = 0;
    }
    if (score == size**2){
        win();
    }

    id_old = id;
    console.log(score,cnt);
}

function nextPUZ(){
    random = Math.floor(Math.random() * ImageURLS.length);
    createPuzzle();
    hussle();
    target();
}
function prevPUZ(){
    random = Math.floor(Math.random() * ImageURLS.length);
    createPuzzle();
    hussle();
    target();
}


