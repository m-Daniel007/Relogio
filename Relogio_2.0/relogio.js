
 function atualizarHora(){
    
    var hora = document.getElementById('hora')
    var agora = new Date()
    var horaAtual = modificaHorario(agora.getHours()) + ':' + modificaHorario(agora.getMinutes()) + ':' + modificaHorario(agora.getSeconds());
    hora.innerHTML = horaAtual;
    
   }
  
   function modificaHorario(num){
       if(num < 10){
           num = '0' + num;
        }

        return num;
        
   }
   function atualizaData(){
    var date = document.getElementById('data')
    var agora = new Date()
    dataAtual =  agora.getDate() + '/' + (agora.getMonth()+1) + '/' + agora.getUTCFullYear()
    date.innerHTML = dataAtual

   }


   function atualizazaSaudacao(){
       var turno = document.getElementById('saudacao')
       var agora = new Date()
      var turnoAtual = agora.getHours()
    if(turnoAtual >= 6 && turnoAtual<12){
        turno.innerHTML = 'Bom Dia !'
    }if(turnoAtual >= 12 && turnoAtual < 18){
        turno.innerHTML = 'Boa Tarde !'
    }else{
        turno.innerHTML = 'Boa Noite ! '
    }

 }

   atualizaData()
   atualizarHora()
   setInterval(atualizarHora,1000)
   atualizazaSaudacao()