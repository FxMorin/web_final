var nm1 = [];
var nm2 = [];
var sliderValue = 25;
window.onload = function(){
  nm1 = ["Aggressive","Agitated","Agony","Aggressive","Ancient","Angel","Angry","Animated","Anxious","Arachnid","Autumn","Avian","Bacterial","Banshee","Beer","Black","Boar","Brain","Brittle","Buzzing","Canine","Cat","Cave","Chicken","Chilling","Cold","Collapsing","Contagious","Cow","Crazy","Creeping","Crippling","Crumbling","Crying","Crystal","Curable","Deadly","Death's","Deathbell","Decaying","Delirious","Demon","Desert","Desolation","Deteriorating","Devil's","Dog","Dragon","Dream","Dreaming","Duck","Dwarf","Dying","Elastic","Elephant","Enlarged","Ethereal","Exhausting","Explosive","Fading","Failing","Fall","Falling","Fatal","Feline","Fickle","Fiery","Fisherman's","Flower","Forceful","Forest","Frenzied","Frost","Frozen","Ghastly","Ghost","Goblin","Golden","Goose","Grave","Green","Growing","Guttural","Happy","Harmless","Heaven's","Hell","Hellish","Hiccup","Hopeless","Horse","Hostile","Hot","Humming","Hyper","Icy","Immobilizing","Impossible","Incurable","Intense","Iron","Ironbark","Island","Jumping","Jungle","King's","Lady","Laughing","Lifeless","Limp","Lion","Lizard","Man","Marsh","Memory","Mild","Milk","Mortal","Mountain","Mouse","Necrotic","Nervous","Numb","Numbing","Ogre","Orange","Pale","Paralyzing","Peaceful","Permanent","Pestilent","Petrifying","Phantom","Pig","Pink","Pygmy","Queen's","Quiet","Quivering","Rabbit","Rabid","Rasping","Rat","Red","Restless","Rickety","Rock","Rodent","Rooster","Rotting","Running","Sage","Screaming","Sedated","Serpent","Shadow","Shaking","Shaky","Sheep","Shivering","Shriveling","Silent","Silver","Sinister","Sleep","Smiling","Snake","Sniffling","Soft","Soul","Spastic","Spider","Spine","Spirit","Spring","Steel","Sterile","Stiff","Stiffening","Stimulated","Stinging","Stomach","Stranger's","Stressed","Stressful","Stunned","Summer","Swamp","Swine","Temporary","Terrifying","Thorny","Ticklish","Tiring","Tomb","Tranquil","Tree","Trembling","Trivial","Twitching","Ugly","Undead","Vein","Violet","Volatile","Warping","Water","Weak","Weakening","Whispering","Wicked","Wild","Winter","Wired","Witch","Withering","Wizard","Wolf","Wooden","Worn","Wraith","Yellow","Zombie"];
  nm2 = ["Ache","Aching","Acne","Allergy","Amnesia","Anemia","Anthrax","Anxiety","Arthritis","Asthma","Baldness","Blight","Blindness","Blisters","Body","Bones","Bronchitis","Cancer","Cannibalism","Chills","Chlamydia","Cholera","Cold","Cough","Cramps","Deafness","Death","Decay","Deficiency","Dehydration","Delirium","Delusion","Delusions","Depression","Diphtheria","Disease","Dysfunctions","Ears","Ebola","Epilepsy","Euphoria","Eye","Eyes","Fatigue","Feet","Fever","Finger","Flu","Foot","Gangrene","Gonorrhea","Hallucinations","Hands","Head","Heart","Hepatitis","Herpes","Illness","Infection","Infertility","Inflammation","Influenza","Insanity","Insomnia","Intolerance","Irritation","Leprosy","Lupus","Malaria","Measles","Meningitis","Migraine","Mouth","Mutation","Nausea","Nose","Panic","Paralysis","Paranoia","Parasite","Plague","Pneumonia","Poisoning","Pox","Rabies","Rage","Rash","Salmonella","Scarring","Schizophrenia","Scurvy","Shock","Skin","Sleep Disorder","Sneeze","Soreness","Sores","Spasms","Stiffness","Stomach","Swelling","Syndrome","Syphilis","Tetanus","Throat","Tongue","Tumor","Ulcers","Vampirism","Virus","Warts"];
  let products = document.getElementById("products");
  for (let i = 0; i < 10; i++){
    var cost = Math.floor(Math.random()*999);
    virusName = nm1[Math.floor(Math.random()*nm1.length)]+" "+nm2[Math.floor(Math.random()*nm2.length)];
    var severity = (Math.random()*100);
    products.innerHTML += "<div><iframe src='virus.html'></iframe><div class='product-title'><b>"+virusName+"</b></div><span>Cost: $"+cost+"k</span><button>Buy</button><div style='width:100%'><div class='severity2'>Severity:</div><div class='severity'><div style='border-radius:12px;background-color:hsla("+(100-severity)+", 100%, 40%, 1);width:"+severity+"%;height:100%;'></div></div></div></div>";
  }
  var slider = document.getElementById("amount");
  var output = document.getElementById("amountValue");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
    sliderValue = this.value;
  }
};
function customReset(){
  let products = document.getElementById("products");
  products.innerHTML = "";
  for (let i = 0; i < sliderValue; i++){
    var cost = Math.floor(Math.random()*999);
    virusName = nm1[Math.floor(Math.random()*nm1.length)]+" "+nm2[Math.floor(Math.random()*nm2.length)];
    var severity = (Math.random()*100);
    products.innerHTML += "<div><iframe src='virus.html'></iframe><div class='product-title'><b>"+virusName+"</b></div><span>Cost: $"+cost+"k</span><button>Buy</button><div style='width:100%'><div class='severity2'>Severity:</div><div class='severity'><div style='border-radius:12px;background-color:hsla("+(100-severity)+", 100%, 40%, 1);width:"+severity+"%;height:100%;'></div></div></div></div>";
  }
}
