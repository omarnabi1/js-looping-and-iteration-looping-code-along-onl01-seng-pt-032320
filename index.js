function writeCards(people,event){
    let thankYouCards = [];
    for(let i = 0; i < people.length; i++){
       thankYouCards.push( `Thank you, ${people[i]}, for the wonderful ${event} gift!` );
    }
    return thankYouCards;
}





function countDown(time){
    while(time > 0){
        console.log(time)
        time--;
    }
    console.log(time)
}
