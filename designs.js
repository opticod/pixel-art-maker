// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
let gridHeight = $('#inputHeight');
let gridWidth = $('#inputWidth');

let pixelCanvas = $('#pixelCanvas');
let colorPicker = $('#colorPicker');


function makeGrid() {

    while (pixelCanvas.children().length) {
        pixelCanvas.empty();
    }

    const fragment = document.createDocumentFragment();

    const canvasRows = gridHeight[0].value;
    const canvasCols = gridWidth[0].value;

    for (let r = 0; r < canvasRows; r++) {
        const singleRow = document.createElement('tr');

        for (let c = 0; c < canvasCols; c++) {
            singleRow.append(document.createElement('td'));
        }

        fragment.append(singleRow);
    }

    pixelCanvas.append(fragment);

    console.log(canvasRows + ' ' + canvasCols);
}

$('[type="submit"]').on('click', function(event) {
    event.preventDefault();
    makeGrid();
});

pixelCanvas.on('click', function(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = colorPicker[0].value;
    }
});
