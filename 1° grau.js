
function resolver(){
    v001 = document.getElementById("001")
    v001 = parseInt(v001.value)

    v002 = document.getElementById("002")
    v002 = v002.value
    v003 = document.getElementById("003")
    v003 = v003.value
    v004 = document.getElementById("004")
    v004 = v004.value

    var sub1 = v002 - v001
    var sub2 = v003 - v002
    var sub3 = v004 - v003
    if(sub1 === sub2){
        var an1 = (v004 - 1)
        console.log(an1)
        var an2 = an1 * sub1
        console.log(an2)
        var an3 = an2 + v001
        console.log(an3)
        var equacaot = v001 + " + (" + v004 +" - 1)." + sub1
        console.log(equacaot)
        document.getElementById("ecu").innerHTML = equacaot
        var equacaot1 = v001 + " + " + an1 +"." + sub1
        console.log(equacaot1)
        document.getElementById("ecu1").innerHTML = equacaot1
        var equacaot2 = v001 + " + " + an2
        console.log(equacaot2)
        document.getElementById("ecu2").innerHTML = equacaot2
        var equacaot3 = an3
        console.log(equacaot3)
        document.getElementById("ecu3").innerHTML = equacaot3
        var equacao = equacaot + '\n' + equacaot1 + '\n' + equacaot2 + '\n' + equacaot3
        console.log(equacao)
    }
    else {
        alert('Equação invalida, verifique:\n -se é mesmo uma PA\n -se os valores digitados estão corretos\nE tente novamente :)')
    }

}