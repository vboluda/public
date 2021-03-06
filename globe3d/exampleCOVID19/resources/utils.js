
function showLabel(obj, px, py) {
    var texto = [
        'Country: ' + obj.properties.name,
        'COVID19 Cases: ' + (!obj.cases ? 'no data' : obj.cases),
        'COVID19 Deaths: ' + (!obj.data.deaths ? 'no data' : obj.data.deaths),
        'COVID19 Recovered: ' + (!obj.data.recovered ? 'no data' : obj.data.recovered),
        'COVID19 Active: ' + (!obj.data.active ? 'no data' : obj.data.active),
    ];
    if (obj.nombre == "indefined") {
        texto = ['NO DATA'];
    }
    var canvas = makeTextSprite(texto, {fontsize: 18,
        borderThickness: 5,
        borderColor: {r: 130, g: 94, b: 53, a: 1},
        backgroundColor: {r: 240, g: 182, b: 116, a: 0.7},
        textColor: {r: 130, g: 94, b: 53, a: 1}
    });
    canvas.style.position = "absolute";
    canvas.style.top = "" + py + "px";
    canvas.style.left = "" + px + "px";
    canvas.zIndex = 8;
    return canvas;
}



function controlDialog() {
    this.modal = document.getElementById('myModal');
    var _this=this;
// Get the button that opens the modal
    this.btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    this.span = document.getElementsByClassName("close")[0];


//    this.btn.onclick = function () {
//         _this.modal.style.display = "block";
//    }

// When the user clicks on <span> (x), close the modal
    // this.span.onclick = function () {
    //      _this.modal.style.display = "none";
    //      _this.whenClose();
    // }

    this.modal.onclick=function(){
        _this.modal.style.display = "none";
        _this.whenClose();
    }

// When the user clicks anywhere outside of the modal, close it
    this.whenClose=function(){};
    window.onclick = function (event) {
        if (event.target == modal) {
             _this.modal.style.display = "none";
              _this.whenClose();
        }
    }
    
    
    this.show=function(){
        this.modal.style.display = "block";
       
    }

    return this;
}