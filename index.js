let heroi = [
    {nome:"maria", xp:800},
    {nome:"pedro", xp:3500},
    {nome:"carlos", xp:9000}
];

for (let i=0;i<heroi.length; i++){
    let herois = heroi[i];
    let nivel = "";

    if(herois.xp < 1000){
        nivel = "ferro";
    }else if (herois.xp >= 1001 && herois.xp <= 2000){
        nivel = "bronze";
    }else if (herois.xp >= 2001 && herois.xp <= 5000) {
        nivel = "prata Ouro";
    }else if (herois.xp >= 5001 && herois.xp <= 8000) {
        nivel = "plantina Diamante"
    } else if (herois.xp >= 8001) {
        nivel = "ascendente";
    }
    console.log(`O heroi de nome ${herois.nome} esta no nivel ${nivel}`);
}