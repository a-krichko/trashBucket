let randBody = ["ухо", "плечо", "голова", "нога"];
let randAdj = ["кривое", "косое", "тупое", "смешное"];
let randAn = ["собака", "кот", "корова", "лошадь"];
let randAnP = ["лапа", "хвост", "морда", "рога", "тушка"];
let randPhrase = ["У тебя", randBody[Math.floor(Math.random()*randBody.length)],
    "еще более", randAdj[Math.floor(Math.random()*randAdj.length)] + ",", "чем",
    randAnP[Math.floor(Math.random()*randAnP.length)],"у",
    randAn[Math.floor(Math.random()*randAn.length)]];
console.log(randPhrase.join(" "));
console.log(randPhrase.join(" "));

