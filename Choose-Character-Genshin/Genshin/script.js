function verificar(){
    var fgen = document.getElementsByName('radgen')
    var fvisio = ducument.getElemntsByName('radvisio')
    var gen = ''
    var res = document.getElementById("res")
    var img = document.createElement('img')
    img.setAttribute('id','foto')
        if(fgen[0].checked){
            gen = 'Boy'
            if(fvisio[0].checked){
                //Pyro
                //img.setAttribute('src','')
            }else if (fvisio[1].checked){
                //Anemo
                //img.setAttribute('src','')
            }else if(fvisio[2].checked){
                //Cryo
                //img.setAttribute('src','')
            }
        }else if(fgen[1].checked){
            gen = 'Girl'
            if(fvisio[0].checked){
                //Pyro
                //img.setAttribute('src','')
            }else if (fvisio[1].checked){
                //Anemo
                //img.setAttribute('src','')
            }else if(fvisio[2].checked){
                //Cryo
                //img.setAttribute('src','')
        } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) 
    }    

    
}
