var all_images = [
"apple1.png",
"apple2.png",
"apple3.png",
"apple4.png",
"apple5.png",
"apple6.png",
"apple7.png",
"apple8.png",
"approach.png",
"avoid.png",
"ball1.png",
"ball2.png",
"ball3.png",
"ball4.png",
"banana1.png",
"banana2.png",
"banana3.png",
"banana4.png",
"banana5.png",
"banana6.png",
"banana7.png",
"banana8.png",
"banana9.png",
"bed1.png",
"bed2.png",
"bed3.png",
"bed4.png",
"bed5.png",
"bed6.png",
"bed7.png",
"bed8.png",
"boat1.png",
"boat2.png",
"boat3.png",
"boat4.png",
"boat5.png",
"boat6.png",
"boat7.png",
"boat8.png",
"bush1.png",
"bush2.png",
"bush3.png",
"bush4.png",
"bush5.png",
"bush6.png",
"bush7.png",
"bush8.png",
"cactus1.png",
"cactus2.png",
"cactus3.png",
"cactus4.png",
"cactus5.png",
"cactus6.png",
"cactus7.png",
"cactus8.png",
"cat1.png",
"cat2.png",
"cat3.png",
"cat4.png",
"cat5.png",
"cat6.png",
"cat7.png",
"cat8.png",
"chair1.png",
"chair2.png",
"chair3.png",
"chair4.png",
"chair5.png",
"chair6.png",
"chair7.png",
"chair8.png",
"coin.png",
"cow1.png",
"cow2.png",
"cow3.png",
"cow4.png",
"cow5.png",
"cow6.png",
"cow7.png",
"cow8.png",
"dog1.png",
"dog2.png",
"dog3.png",
"dog4.png",
"dog5.png",
"dog6.png",
"dog7.png",
"dog8.png",
"flower1.png",
"flower2.png",
"flower3.png",
"flower4.png",
"flower5.png",
"flower6.png",
"flower7.png",
"flower8.png",
"goat1.png",
"goat2.png",
"goat3.png",
"goat4.png",
"goat5.png",
"goat6.png",
"goat7.png",
"goat8.png",
"horse1.png",
"horse2.png",
"horse3.png",
"horse4.png",
"horse5.png",
"horse6.png",
"horse7.png",
"horse8.png",
"orange1.png",
"orange2.png",
"orange3.png",
"orange4.png",
"orange5.png",
"orange6.png",
"orange7.png",
"orange8.png",
"plane1.png",
"plane2.png",
"plane3.png",
"plane4.png",
"plane5.png",
"plane6.png",
"plane7.png",
"plane8.png",
"rabbit1.png",
"rabbit2.png",
"rabbit3.png",
"rabbit4.png",
"rabbit5.png",
"rabbit6.png",
"rabbit7.png",
"rabbit8.png",
"racket1.png",
"racket2.png",
"racket3.png",
"racket4.png",
"rodent1.png",
"rodent2.png",
"rodent3.png",
"rodent4.png",
"rodent5.png",
"rodent6.png",
"rodent7.png",
"rodent8.png",
"sheep1.png",
"sheep2.png",
"sheep3.png",
"sheep4.png",
"sheep5.png",
"sheep6.png",
"sheep7.png",
"sheep8.png",
"sofa1.png",
"sofa2.png",
"sofa3.png",
"sofa4.png",
"sofa5.png",
"sofa6.png",
"sofa7.png",
"sofa8.png",
"straw1.png",
"straw2.png",
"straw3.png",
"straw4.png",
"straw5.png",
"straw6.png",
"straw7.png",
"straw8.png",
"table1.png",
"table2.png",
"table3.png",
"table4.png",
"table5.png",
"table6.png",
"table7.png",
"table8.png",
"train1.png",
"train2.png",
"train3.png",
"train4.png",
"train6.png",
"train5.png",
"train7.png",
"train8.png",
"tree1.png",
"tree2.png",
"tree3.png",
"tree4.png",
"tree5.png",
"tree6.png",
"tree7.png",
"tree8.png",
"truck1.png",
"truck2.png",
"truck3.png",
"truck4.png",
"truck5.png",
"truck6.png",
"truck7.png",
"truck8.png",
"shark.png",
"replay.png",
"fish.png",
"turtle.png",
"tiger.png"];

var all_images = all_images.map(function (data) { return 'images/' + data; });

///////////
// AUDIO //
///////////

var animals_audio =
  [ "audio/farm_animals1.wav",
    "audio/farm_animals2.wav",
    "audio/farm_animals3.wav",
    "audio/farm_animals4.wav",
    "audio/farm_animals5.wav",
    "audio/farm_animals6.wav",
    "audio/farm_animals7.wav",
    "audio/farm_animals8.wav",
    "audio/farm_animals9.wav"];

var furniture_audio =
  [ "audio/furniture1.wav",
    "audio/furniture2.wav",
    "audio/furniture3.wav",
    "audio/furniture4.wav",
    "audio/furniture5.wav",
    "audio/furniture6.wav",
    "audio/furniture7.wav",
    "audio/furniture8.wav",
    "audio/furniture9.wav"];

var fruit_audio =
  [ "audio/fruit1.wav",
    "audio/fruit2.wav",
    "audio/fruit3.wav",
    "audio/fruit4.wav",
    "audio/fruit5.wav",
    "audio/fruit6.wav",
    "audio/fruit7.wav",
    "audio/fruit8.wav",
    "audio/fruit9.wav"];

var pets_audio =
  [ "audio/pets1.wav",
    "audio/pets2.wav",
    "audio/pets3.wav",
    "audio/pets4.wav",
    "audio/pets5.wav",
    "audio/pets6.wav",
    "audio/pets7.wav",
    "audio/pets8.wav",
    "audio/pets9.wav"];

var plants_audio =
  [ "audio/plants1.wav",
    "audio/plants2.wav",
    "audio/plants3.wav",
    "audio/plants4.wav",
    "audio/plants5.wav",
    "audio/plants6.wav",
    "audio/plants7.wav",
    "audio/plants8.wav",
    "audio/plants9.wav"];

var vehicles_audio =
  [ "audio/vehicles1.wav",
    "audio/vehicles2.wav",
    "audio/vehicles3.wav",
    "audio/vehicles4.wav",
    "audio/vehicles5.wav",
    "audio/vehicles6.wav",
    "audio/vehicles7.wav",
    "audio/vehicles8.wav",
    "audio/vehicles9.wav"];

var time_warning = "audio/time_warning.wav";
var five_points_win = "audio/five_points_win.wav";
var three_points_lose = "audio/three_points_loss.wav";
