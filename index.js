console.log('Digita o nome do Herói');
let nickname = 'Maya magic';
console.log('Bem vinda ' + nickname);
let XP = 7000;

if ( XP < 1000){ 
nivel = 'Ferro';
}
 else if ( XP >= 1001 && XP <=2000){ 
nivel = 'Bronze';
}
else if ( XP >= 2001 && XP <=5000){ 
nivel = 'Prata';
}
else if ( XP >= 6001 && XP <=7000){ 
nivel = 'Ouro';
}
else if ( XP >= 7001 && XP <=8000){ 
nivel = 'Platina';
}
else if ( XP >= 8001 && XP <=9000){ 
nivel = 'Ascendente';
}
else if ( XP >= 9001 && XP <=10000){ 
nivel = 'Imortal';
}
else {
nivel = 'Radiante';
}

console.log('A pontuação dos seus XPs revela seu nível. De acordo com sua jogatina ' +nickname,'está no nível de ' +nivel ,'contendo ' +XP);