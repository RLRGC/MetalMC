function search (){
    
    let searchbar = document.getElementById("Username").value

    reply.innerHTML = "Player searched : " + searchbar ;

    if (searchbar = RLRGC){
        RLRGC.style.color = 'blue'; // Change la couleur de l'élement y en bleu
    }
}