function check(){
    var fgen = document.getElementsByName('radgen')
    var fvisio = document.getElementsByName('radvisio')
    var gen = ''
    var vision = ''
    var limpar = document.getElementById('apagar')
    var res = document.getElementById("res")
    var img = document.createElement('img')
    img.setAttribute('id','foto')
        if(fgen[0].checked){
            gen = 'Male'
            
            if(fvisio[0].checked){
                vision = 'Pyro'
                //Pyro
                img.setAttribute('src','imagens/bennett.png')
                document.body.style.background = 'red'
            }else if(fvisio[1].checked){
                vision = 'Anemo'
                img.setAttribute('src','imagens/andarilho.png')
                document.body.style.background = '#18dbbb'
            }else if (fvisio[2].checked){
                vision = 'Cryo'
                img.setAttribute('src','imagens/freminet.png')
                document.body.style.background = '#3fc4d9'
            }else if(fvisio[3].checked){
                vision = 'Geo'
                img.setAttribute('src','imagens/itto.png')
                document.body.style.background = '#d18726'
            }else if(fvisio[4].checked){    
                vision = 'Dendro'
                img.setAttribute('src','imagens/alhaitham.png')
                document.body.style.background = '#10cc26'
            }else if (fvisio[5].checked){
                vision = 'Eletro'
                document.body.style.background = '#660cab'
                img.setAttribute('src','imagens/cyno.png')
            }else if (fvisio[6].checked){
                vision = 'Hydro'
                img.setAttribute('src','imagens/neuvillette.png')
                document.body.style.background = '#0b2b9d'
            }
        }else if(fgen[1].checked){
            gen = 'Female'
            if(fvisio[0].checked){
                vision = 'Pyro'
                //Pyro
                img.setAttribute('src','imagens/yoimiya.png')
                document.body.style.background = 'red'
            }else if(fvisio[1].checked){
                vision = 'Anemo'
                img.setAttribute('src','imagens/faruzan.png')
                document.body.style.background = '#18dbbb'
            }else if (fvisio[2].checked){
                vision = 'Cryo'
                img.setAttribute('src','imagens/ganyu.png')
                document.body.style.background = '#3fc4d9'
            }else if(fvisio[3].checked){
                vision = 'Geo'
                img.setAttribute('src','imagens/ningguang.png')
                document.body.style.background = '#d18726'
            }else if(fvisio[4].checked){    
                vision = 'Dendro'
                img.setAttribute('src','imagens/nahida.png')
                document.body.style.background = '#10cc26'
            }else if (fvisio[5].checked){
                vision = 'Eletro'
                document.body.style.background = '#660cab'
                img.setAttribute('src','imagens/yae.png')
            }else if (fvisio[6].checked){
                vision = 'Hydro'
                img.setAttribute('src','imagens/sangonomiya.png')
                document.body.style.background = '#0b2b9d'
            }
        }
    limpar.remove()    
    res.style.textAlign = 'center'
    res.innerHTML = `You're ${gen} with a ${vision} vision  !`
    res.appendChild(img)
}

    

