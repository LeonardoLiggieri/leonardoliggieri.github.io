document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    
    
    
    var intro = document.getElementById('nav');
intro.className = ('header-nav-ne');
    
    var cont = document.getElementById('mainn');
    cont.className = ('main-ne');
    
    var foo = document.getElementById('footeer');
    foo.className = ('foooter');
    
    var fotoicon = document.getElementById('fotoperfil');
    fotoicon.className = ('header-div-foto-ne');
    
    var headerr = document.getElementById('headerr');
    headerr.className = ('header-ne');
    
    var bodyy = document.getElementById('bodyy');
    bodyy.className = ('body-ne');
    
    
    
}

