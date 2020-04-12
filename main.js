window.onload = function(){
  var nm1 = ["Abscessus", "Accessio", "Agonia", "Ambustio","Aneurisma", "Angina", "Apoplexia", "Asthenia", "Ataxia", "Atrophia", "Calculus", "Cancrum", "Carbunculus", "Carcinoma", "Catarrhus" ,"Cholerica", "Chorea", "Colica","Commotio", "Contracture"];
  let products = document.getElementById("products");
  for (let i = 0; i < 20; i++){
    var cost = Math.floor(Math.random()*999);
    virusName = nm1[Math.floor(Math.random()*nm1.length)];
    products.innerHTML += "<div><iframe src='virus.html'></iframe><div><b>"+virusName+"</b></div><span>Cost: $"+cost+"k</span><button>Buy</button></div>";
  }
};
