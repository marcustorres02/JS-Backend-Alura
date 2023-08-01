var meuObj = new Object(),
    str = "minhaString",
    aleat = Math.random(),
    obj = new Object();

meuObj.tipo               = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str]               = "valor de String";
meuObj[aleat]             = "Numero Aleatorio";
meuObj[obj]               = "Objeto";
meuObj[""]                = "Mesmo uma string vazia";

console.log(meuObj);

