 
 (function(){ 
  emailjs.init("9RtIYVhrOB4Ivkv79"); 
})();


   
  // ---------------------------
  // Product dataset
  // ---------------------------
  const PRODUCTS = [

  // ---------------- Dubai Perfumes ----------------
  { id: 'd1', title: "Khamram 30ml", category:'dubai', price: 90, img:"images/100ml.jpg" },
  { id: 'd2', title: "Khamram 50ml", category:'dubai', price: 150, img:"images/100ml 2.jpg" },
  { id: 'd3', title: "Khamram 100ml", category:'dubai', price: 250, img:"images/100ml3.jpg" },

  { id: 'd4', title: "Khamrah Qahwe 30ml", category:'dubai', price: 90, img:"images/100ml4.jpg" },
  { id: 'd5', title: "Khamrah Qahwe 50ml", category:'dubai', price: 150, img:"images/100ml.jpg" },
  { id: 'd6', title: "Khamrah Qahwe 100ml", category:'dubai', price: 250, img:"images/100ml 2.jpg" },

  { id: 'd7', title: "Badee Al Oud 30ml", category:'dubai', price: 90, img:"images/100ml3.jpg" },
  { id: 'd8', title: "Badee Al Oud 50ml", category:'dubai', price: 150, img:"images/100ml4.jpg" },
  { id: 'd9', title: "Badee Al Oud 100ml", category:'dubai', price: 250, img:"images/100ml.jpg" },

  { id: 'd10', title: "Sublime 30ml", category:'dubai', price: 90, img:"images/100ml 2.jpg" },
  { id: 'd11', title: "Sublime 50ml", category:'dubai', price: 150, img:"images/100ml3.jpg" },
  { id: 'd12', title: "Sublime 100ml", category:'dubai', price: 250, img:"images/100ml4.jpg" },

  { id: 'd13', title: "Yar Pink 30ml", category:'dubai', price: 90, img:"images/100ml.jpg" },
  { id: 'd14', title: "Yar Pink 50ml", category:'dubai', price: 150, img:"images/100ml 2.jpg" },
  { id: 'd15', title: "Yar Pink 100ml", category:'dubai', price: 250, img:"images/100ml3.jpg" },

  { id: 'd16', title: "Royal Rasisi 30ml", category:'dubai', price: 90, img:"images/100ml4.jpg" },
  { id: 'd17', title: "Royal Rasisi 50ml", category:'dubai', price: 150, img:"images/100ml.jpg" },
  { id: 'd18', title: "Royal Rasisi 100ml", category:'dubai', price: 250, img:"images/100ml 2.jpg" },

  { id: 'd19', title: "Rasisi Hawas 30ml", category:'dubai', price: 90, img:"images/100ml4.jpg" },
  { id: 'd20', title: "Rasisi Hawas 50ml", category:'dubai', price: 150, img:"images/100ml3.jpg" },
  { id: 'd21', title: "Rasisi Hawas 100ml", category:'dubai', price: 250, img:"images/100ml.jpg" },

  { id: 'd22', title: "Mousouf Aswad 30ml", category:'dubai', price: 90, img:"images/100ml 2.jpg" },
  { id: 'd23', title: "Mousouf Aswad 50ml", category:'dubai', price: 150, img:"images/100ml4.jpg" },
  { id: 'd24', title: "Mousouf Aswad 100ml", category:'dubai', price: 250, img:"images/100ml3.jpg" },

  // ---------------- Top G Perfumes ----------------
  { id: 't1', title: "Adventus Creed 30ml", category:'topg', price: 90, img:"images/100ml4.jpg" },
  { id: 't2', title: "Adventus Creed 50ml", category:'topg', price: 150, img:"images/100ml 2.jpg" },
  { id: 't3', title: "Adventus Creed 100ml", category:'topg', price: 250, img:"images/100ml.jpg" },

  { id: 't4', title: "Creed Silver Mountain 30ml", category:'topg', price: 90, img:"images/100ml3.jpg" },
  { id: 't5', title: "Creed Silver Mountain 50ml", category:'topg', price: 150, img:"images/100ml4.jpg" },
  { id: 't6', title: "Creed Silver Mountain 100ml", category:'topg', price: 250, img:"images/100ml 2.jpg" },

  { id: 't7', title: "Barrakat Rouge 540 30ml", category:'topg', price: 90, img:"images/100ml.jpg" },
  { id: 't8', title: "Barrakat Rouge 540 50ml", category:'topg', price: 150, img:"images/100ml3.jpg" },
  { id: 't9', title: "Barrakat Rouge 540 100ml", category:'topg', price: 250, img:"images/100ml4.jpg" },

  { id: 't10', title: "Satin Oud 30ml", category:'topg', price: 90, img:"images/100ml 2.jpg" },
  { id: 't11', title: "Satin Oud 50ml", category:'topg', price: 150, img:"images/100ml4.jpg" },
  { id: 't12', title: "Satin Oud 100ml", category:'topg', price: 250, img:"images/100ml3.jpg" },

  { id: 't13', title: "Oud of Greatness 30ml", category:'topg', price: 90, img:"images/100ml.jpg" },
  { id: 't14', title: "Oud of Greatness 50ml", category:'topg', price: 150, img:"images/100ml4.jpg" },
  { id: 't15', title: "Oud of Greatness 100ml", category:'topg', price: 250, img:"images/100ml 2.jpg" },

  { id: 't16', title: "J P G Ultra Male 30ml", category:'topg', price: 90, img:"images/100ml3.jpg" },
  { id: 't17', title: "J P G Ultra Male 50ml", category:'topg', price: 150, img:"images/100ml4.jpg" },
  { id: 't18', title: "J P G Ultra Male 100ml", category:'topg', price: 250, img:"images/100ml 2.jpg" },

  // ---------------- Premium Ladies Perfumes ----------------
{ id: 'l1', title: "Far Away 30ml", category:'ladies', price: 90, img:"images/100ml.jpg" },
{ id: 'l2', title: "Far Away 50ml", category:'ladies', price: 150, img:"images/100ml4.jpg" },
{ id: 'l3', title: "Far Away 100ml", category:'ladies', price: 250, img:"images/100ml3.jpg" },

{ id: 'l4', title: "Hypnotic Poison 30ml", category:'ladies', price: 90, img:"images/100ml 2.jpg" },
{ id: 'l5', title: "Hypnotic Poison 50ml", category:'ladies', price: 150, img:"images/100ml4.jpg" },
{ id: 'l6', title: "Hypnotic Poison 100ml", category:'ladies', price: 250, img:"images/100ml3.jpg" },

{ id: 'l7', title: "Tommy Girl 30ml", category:'ladies', price: 90, img:"images/100ml.jpg" },
{ id: 'l8', title: "Tommy Girl 50ml", category:'ladies', price: 150, img:"images/100ml 2.jpg" },
{ id: 'l9', title: "Tommy Girl 100ml", category:'ladies', price: 250, img:"images/100ml4.jpg" },

{ id: 'l10', title: "La Veste Bella 30ml", category:'ladies', price: 90, img:"images/100ml.jpg" },
{ id: 'l11', title: "La Veste Bella 50ml", category:'ladies', price: 150, img:"images/100ml3.jpg" },
{ id: 'l12', title: "La Veste Bella 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpgl" },

{ id: 'l13', title: "Alien 30ml", category:'ladies', price: 90, img:"images/100ml4.jpg" },
{ id: 'l14', title: "Alien 50ml", category:'ladies', price: 150, img:"images/100ml4.jpg" },
{ id: 'l15', title: "Alien 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l16', title: "Good Girl 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l17', title: "Good Girl 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l18', title: "Good Girl 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l19', title: "Coco mademoiselle 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l20', title: "Coco mademoiselle 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l21', title: "Coco mademoiselle 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l22', title: " Be delicious 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l23', title: " Be delicious 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l24', title: " Be delicious 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l25', title: " Eros 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l26', title: " Eros 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l27', title: " Eros 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l28', title: " Jimmy Choo 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l29', title: " Jimmy Choo 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l30', title: " Jimmy Choo 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l31', title: " White Oud ladies 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l32', title: " White Oud ladies 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l33', title: " White Oud ladies 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l34', title: " Black Opium 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l35', title: " Black Opium 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l36', title: " Black Opium 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },
 
{ id: 'l37', title: " Issey Miyake ladies 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l38', title: " Issey Miyake ladies 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l39', title: " Issey Mikaye ladies 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },
 
{ id: 'l40', title: " Fantasy 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l41', title: " Fantasy 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l42', title: " Fantasy 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },
 
{ id: 'l43', title: " Chanel no5 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l44', title: " Chanel no5 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l45', title: " Chanel no5 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l46', title: " Guccci Rush 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l47', title: " Gucci Rush 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l48', title: " Gucci Rush 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l49', title: " Light Blue ladies 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l50', title: " Light Blue ladies 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l51', title: " Light Blue ladies 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l52', title: " Tar Pink 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l53', title: " Tar Pink 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l54', title: " Tar Pink 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l55', title: " Lady Love 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l56', title: " Lady Love 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l57', title: " Lady Love 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l58', title: " Bombshell Victoria 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l59', title: " Bombshell Victoria 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l60', title: " Bombshell Victoria 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l61', title: " Victoria Blue 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l62', title: " Victoria Blue 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l63', title: " Victoria Blue 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l64', title: " Weedend 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l65', title: " Weedend 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l66', title: " Weedend 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l67', title: " Tom Ford Sher 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l68', title: " Tom Ford Sher 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l69', title: " Tom Ford Sher 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l70', title: " Sublime 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l71', title: " Sublime 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l72', title: " Sublime 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },

{ id: 'l73', title: " Gucci Bloom 30ml", category:'ladies', price: 90, img:"images/100ml3.jpg" },
{ id: 'l74', title: " Gucci Bloom 50ml", category:'ladies', price: 150, img:"images/100ml.jpg" },
{ id: 'l75', title: " Gucci Bloom 100ml", category:'ladies', price: 250, img:"images/100ml 2.jpg" },


// ---------------- Premium Men Perfumes ----------------
{ id: 'm1', title: "Wanted 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm2', title: "Wanted 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm3', title: "Wanted 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm4', title: "Cool Water 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm5', title: "Cool Water 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm6', title: "Cool Water 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm7', title: "Sauvage Elixer 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm8', title: "Sauvage Elixer 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm9', title: "Sauvage Elixer 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm10', title: "Acqua Di Gio 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm11', title: "Acqua Di Gio 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm12', title: "Acqua Di Gio 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm13', title: "Profumo 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm14', title: "Profumo 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm15', title: "Profumo 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm16', title: "Invictus Men 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm17', title: "Invictus Men 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm18', title: "Invictus Men 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm19', title: "White Musk 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm20', title: "White Musk 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm21', title: "White Musk 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm22', title: "Chanel Blue Men 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm23', title: "Chanel Blue Men 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm24', title: "Chanel Blue Men 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm25', title: "Sauvage 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm26', title: "Sauvage 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm27', title: "Sauvage 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm28', title: "Intense Oud 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm29', title: "Intense Oud 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm30', title: "Intense Oud 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm31', title: "Spice Bomb Oud Wood 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm32', title: "Spice Bomb Oud Wood 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm33', title: "Spice Bomb Oud Wood 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm34', title: "Boss Bottled Oud 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm35', title: "Boss Bottled Oud 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm36', title: "Boss Bottled Oud 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm37', title: "Saffron 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm38', title: "Saffron 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm39', title: "Saffron 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm40', title: "One Million 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm41', title: "One Million 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm42', title: "One Million 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm43', title: "Armani Black Code 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm44', title: "Armani Black Code 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm45', title: "Armani Black Code 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm46', title: "Boss Orange 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm47', title: "Boss Orange 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm48', title: "Boss Orange 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm49', title: "Issey Miyake Men 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm50', title: "Issey Miyake Men 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm51', title: "Issey Miyake Men 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm52', title: "Dolce Gabbana Men 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm53', title: "Dolce Gabbana Men 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm54', title: "Dolce Gabbana Men 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm55', title: "Blue Men 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm56', title: "Blue Men 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm57', title: "Blue Men 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm58', title: "Dunhill Desire Blue 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm59', title: "Dunhill Desire Blue 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm60', title: "Dunhill Desire Blue 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm61', title: "Gucci Guilty 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm62', title: "Gucci Guilty 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm63', title: "Gucci Guilty 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm64', title: "Givenchy Blue 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm65', title: "Givenchy Blue 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm66', title: "Givenchy Blue 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm67', title: "Boss Energize 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm68', title: "Boss Energize 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm69', title: "Boss Energize 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm70', title: "Lacoste White 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm71', title: "Lacoste White 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm72', title: "Lacoste White 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm73', title: "Versace Dylan Blue 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm74', title: "Versace Dylan Blue 50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm75', title: "Versace Dylan Blue 100ml", category:'men', price: 250, img:"images/100ml3.jpg" },

{ id: 'm76', title: "Stronger With You 30ml", category:'men', price: 90, img:"images/100ml3.jpg" },
{ id: 'm77', title: "Stronger With You  50ml", category:'men', price: 150, img:"images/100ml3.jpg" },
{ id: 'm78', title: "Stronger With You  100ml", category:'men', price: 250, img:"images/100ml3.jpg" },


// ---------------- Gadgets ----------------
{ id: 'g1', title: "Charging Cable  (cp-cp)", category:'gadgets', price: 150, img:"images/100ml3.jpg" },
{ id: 'g2', title: "Charging Cable (cp-usb)", category:'gadgets', price: 150, img:"images/100ml3.jpg" },
{ id: 'g3', title: "Charging Cable (I-Phone)", category:'gadgets', price: 150, img:"images/100ml3.jpg" },

{ id: 'g4', title: "Adapter (cp-cp)", category:'gadgets', price: 150, img:"images/100ml3.jpg" },
{ id: 'g5', title: "Adapter (cp-usb)", category:'gadgets', price: 150, img:"images/100ml3.jpg" },
{ id: 'g6', title: "Adapter (I-Phone)", category:'gadgets', price: 150, img:"images/100ml3.jpg" },


{ id: 'g7', title: "Screen Protector", category: 'gadgets', price: 100, img:"images/100ml3.jpg"},
{ id: 'g8', title: "Privacy Screen Protector", category: 'gadgets', price: 100, img:"images/100ml3.jpg"},
{ id: 'g9', title: "Tempered Glass Screen Protector", category: 'gadgets', price: 100, img:"images/100ml3.jpg"},

{ id: 'g10', title: "Flip Phone Cover", category: 'gadgets', price: 150, img:"images/100ml3.jpg"},
{ id: 'g11', title: "Silicone Phone Case", category: 'gadgets', price: 100, img:"images/100ml3.jpg"},
{ id: 'g12', title: "Clear Phone Case", category: 'gadgets', price: 100, img:"images/100ml3.jpg"},

{ id: 'g13', title: "Wireless Hairclipper", category: 'gadgets', price: 190, img:"images/100ml3.jpg"},
{ id: 'g14', title: "Polaroids (50)", category: 'polaroids', price: 250, img:"images/100ml3.jpg"},
{ id: 'g13', title: "Polaroids (5)", category: 'polaroids', price: 35, img:"images/100ml3.jpg"},
{ id: 'g14', title: "Polaroids (10)", category: 'polaroids', price: 65, img:"images/100ml3.jpg"},
{ id: 'g15', title: "Polaroids (20)", category: 'polaroids', price: 105, img:"images/100ml3.jpg"},
];

const productGrid = document.getElementById('productGrid'); // make sure your product container has this id

function displayProducts(products) {
  productGrid.innerHTML = ''; // clear existing
  products.forEach(p => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" alt="${p.title}">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">R${p.price}</p>
          </div>
        </div>
      </div>
    `;
    productGrid.innerHTML += card;
  });
}

// Mapping sidebar categories to product array categories
const categoryMap = {
  all: 'all',
  perfumes: ['dubai','topg','ladies','men'],
  gadgets: ['gadgets'],
  gifts: ['gifts'],   // add gifts if you have products later
  biltong: ['biltong'] // add biltong products later
};

// Display all products on page load
displayProducts(PRODUCTS);

// Sidebar click filtering
(document.querySelectorAll('.category-link')).forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const cat = link.getAttribute('data-cat');
    if(cat === 'all'){
      displayProducts(PRODUCTS);
    } else {
      const mappedCats = categoryMap[cat];
      const filtered = PRODUCTS.filter(p => mappedCats.includes(p.category));
      displayProducts(filtered);
    }
  });
});


  // ---------------------------
  // State
  // ---------------------------
  let cart = [];
  let currentCategory = 'dubai';
  let maxPrice = 2500;
  let searchQuery = '';

  // ---------------------------
  // DOM references
  // ---------------------------
  const grid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInputGrid');
  const searchForm = document.getElementById('searchFormGrid');
  const categoryLinks = document.querySelectorAll('.category-link');
  const priceFilter = document.getElementById('priceFilter');
  const priceMaxLabel = document.getElementById('priceMax');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const closeCart = document.getElementById('closeCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // ---------------------------
  // Render products
  // ---------------------------
  function renderProducts(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
      grid.innerHTML = '<p class="text-center text-muted mt-4">No products found.</p>';
      return;
    }

window.onload = () => displayProducts()
    list.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <div class="product-card p-2 text-center h-100">
          <img src="${p.img}" alt="${p.title}" class="img-fluid mb-2">
          <h6 class="mb-1">${p.title}</h6>
          <div class="price mb-2">R${p.price}</div>
          <button class="btn btn-sm btn-dark" onclick="addToCart('${p.title}')">Add to Cart</button>
        </div>
      `;
      grid.appendChild(col);
    });
  }
  // ---------------------------
  // Filters
  // ---------------------------
  function applyFilters() {
    let results = PRODUCTS.filter(p =>
      (currentCategory === 'all' || p.category === currentCategory) &&
      p.price <= maxPrice &&
      p.title.toLowerCase().includes(searchQuery)
    );
    renderProducts(results);
  }

  (document.querySelectorAll('.category-link')).forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      currentCategory = link.dataset.cat;
      applyFilters();
    });
  });

  priceFilter.addEventListener('input',()=>{
    maxPrice = parseInt(priceFilter.value);
    priceMaxLabel.textContent = 'R'+maxPrice;
    applyFilters();
  });

  searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    searchQuery = searchInput.value.toLowerCase();
    applyFilters();
  });
 