document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems,{
        coverTrigger:false,
        constrainWidth:false,
        closeOnClick:false
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems,{});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems,{});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{});
});


//ACCORDIAN
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function setPin(){
    var pin=document.getElementById("pinValue");
    // console.log(pin.value);
    if(pin.value=="true") pin.value="false";
    else pin.value="true";
    console.log(pin.value);
}
function setArchive(){
    var archive=document.getElementById("archiveValue");
    if(archive.value=="true") archive.value=false;
    else archive.value=true;
    console.log(archive.value);
}

function initColorPicker(){
    var canvasEl = document.getElementById('colorCanvas');
    var noteColor = document.getElementById('noteboxcolor');
    var canvasContext = canvasEl.getContext('2d');
    var image = new Image(250, 250);
    console.log(image);
    image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height); 
    image.src = "/images/myColorPickerImage.png";

    canvasEl.onclick = function(mouseEvent) 
    {
    var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
    var rgba = imgData.data;

    noteColor.value=("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")");
    console.log(noteColor.value);
    }
}