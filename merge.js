'use strict';
const RECIPES = [
{"a":"hand","b":"made","word":"handmade","meaning":"Made by hand rather than by machine.","example":"She wore a beautiful handmade scarf."},
{"a":"hand","b":"craft","word":"handcraft","meaning":"An activity involving the making of decorative objects by hand.","example":"She learned traditional handcrafts at the community center."},
{"a":"hand","b":"shake","word":"handshake","meaning":"A greeting made by briefly gripping someone's hand.","example":"They sealed the business deal with a firm handshake."},
{"a":"hand","b":"book","word":"handbook","meaning":"A book giving instructions or reference material.","example":"Read the employee handbook before your first day."},
{"a":"air","b":"way","word":"airway","meaning":"A route used by commercial aircraft, or the passage through which air reaches the lungs.","example":"The paramedic checked to ensure the patient's airway was clear."},
{"a":"air","b":"mail","word":"airmail","meaning":"A system of transporting mail by aircraft.","example":"She sent the urgent letter via airmail."},
{"a":"air","b":"craft","word":"aircraft","meaning":"A vehicle that is able to fly through the air.","example":"The aircraft landed smoothly on the runway."},
{"a":"air","b":"time","word":"airtime","meaning":"The time during which a broadcast program or signal is being transmitted.","example":"The team received dedicated airtime during the evening news."},
{"a":"air","b":"port","word":"airport","meaning":"A complex of runways and buildings for civil aircraft.","example":"We arrived at the airport two hours before our flight."},
{"a":"air","b":"plane","word":"airplane","meaning":"A powered flying vehicle with fixed wings.","example":"The airplane flew high above the white clouds."},
{"a":"light","b":"house","word":"lighthouse","meaning":"A tower with a beacon light to guide ships at sea.","example":"The lighthouse beacon guided the boat through fog."},
{"a":"light","b":"weight","word":"lightweight","meaning":"Having relatively little weight.","example":"She bought a lightweight jacket for spring hiking."},
{"a":"sun","b":"shine","word":"sunshine","meaning":"Direct sunlight unbroken by clouds.","example":"Enjoy the warm sunshine while playing outside."},
{"a":"sun","b":"bath","word":"sunbath","meaning":"The act of sitting or lying in the sunshine to enjoy its warmth.","example":"She relaxed on the towel for an afternoon sunbath."},
{"a":"sun","b":"tan","word":"suntan","meaning":"A browning of the skin resulting from exposure to the sun.","example":"She got a golden suntan during her vacation."},
{"a":"sun","b":"flower","word":"sunflower","meaning":"A tall plant with a large yellow flower head.","example":"The sunflower grew taller than the garden fence."},
{"a":"sun","b":"burn","word":"sunburn","meaning":"Redness and soreness of the skin caused by overexposure to the sun.","example":"Apply lotion to soothe your sunburn."},
{"a":"sun","b":"hat","word":"sunhat","meaning":"A wide-brimmed hat worn for protection from the sun.","example":"She wore a straw sunhat at the beach."},
{"a":"sun","b":"light","word":"sunlight","meaning":"Light that comes directly from the sun.","example":"Sunlight filled the kitchen in the morning."},
{"a":"sun","b":"rise","word":"sunrise","meaning":"The time in the morning when the sun appears above the horizon.","example":"We woke up early to watch the sunrise over the lake."},
{"a":"sun","b":"set","word":"sunset","meaning":"The time in the evening when the sun disappears below the horizon.","example":"The sky turned orange and purple during the sunset."},
{"a":"rain","b":"proof","word":"rainproof","meaning":"Resistant to rain.","example":"She wore a rainproof jacket on her hike."},
{"a":"rain","b":"bow","word":"rainbow","meaning":"An arch of colors formed in the sky by the refraction of sunlight in rain.","example":"We saw a colorful rainbow after the summer shower."},
{"a":"rain","b":"coat","word":"raincoat","meaning":"A waterproof coat worn to protect the body from rain.","example":"Put on your raincoat before going outside in the storm."},
{"a":"rain","b":"drop","word":"raindrop","meaning":"A single drop of rain.","example":"A single raindrop fell onto her nose."},
{"a":"rain","b":"fall","word":"rainfall","meaning":"The quantity of rain falling within a given area in a given time.","example":"Heavy rainfall filled the garden pond."},
{"a":"rain","b":"storm","word":"rainstorm","meaning":"A storm with heavy rain.","example":"The sudden rainstorm sent everyone running for shelter."},
{"a":"cup","b":"cake","word":"cupcake","meaning":"A small cake designed to serve one person, baked in a small cup.","example":"I decorated my cupcake with rainbow sprinkles."},
{"a":"pan","b":"cake","word":"pancake","meaning":"A thin, flat cake of batter fried on both sides in a pan.","example":"Dad flipped a pancake high into the air."},
{"a":"butter","b":"fly","word":"butterfly","meaning":"An insect with two pairs of large, typically brightly colored wings.","example":"A blue butterfly fluttered over the garden flowers."},
{"a":"butter","b":"milk","word":"buttermilk","meaning":"The slightly sour liquid left after butter has been churned.","example":"She used buttermilk to make soft, fluffy biscuits."},
{"a":"tooth","b":"brush","word":"toothbrush","meaning":"A small brush with a long handle used for cleaning teeth.","example":"Remember to replace your toothbrush every few months."},
{"a":"tooth","b":"paste","word":"toothpaste","meaning":"A paste or gel used with a toothbrush to clean teeth.","example":"Squeeze a pea-sized amount of toothpaste onto the brush."},
{"a":"tooth","b":"pick","word":"toothpick","meaning":"A small stick of wood or plastic used to clean between teeth.","example":"He picked up a toothpick after finishing his sandwich."},
{"a":"note","b":"book","word":"notebook","meaning":"A book with blank pages for recording notes.","example":"She wrote down the new vocabulary words in her notebook."},
{"a":"note","b":"pad","word":"notepad","meaning":"A pad of paper bound together at the top for writing notes.","example":"Keep a notepad by the phone for quick messages."},
{"a":"snow","b":"man","word":"snowman","meaning":"A figure made of compressed snow shaped like a human.","example":"The children built a snowman with a carrot for a nose."},
{"a":"snow","b":"flake","word":"snowflake","meaning":"A single feathery ice crystal that falls as snow.","example":"Each snowflake has a unique and intricate pattern."},
{"a":"snow","b":"storm","word":"snowstorm","meaning":"A heavy fall of snow accompanied by high winds.","example":"The snowstorm covered the entire city in white."},
{"a":"snow","b":"ball","word":"snowball","meaning":"A ball of snow pressed together for throwing.","example":"We had a playful snowball fight in the yard."},
{"a":"snow","b":"board","word":"snowboard","meaning":"A broad board used for sliding down snow-covered slopes.","example":"He strapped his feet onto his snowboard."},
{"a":"basket","b":"ball","word":"basketball","meaning":"A team game played by throwing a ball through a netted hoop.","example":"We played a game of basketball in the gym."},
{"a":"foot","b":"ball","word":"football","meaning":"A team game played with an oval ball on a field.","example":"They practiced kicking the football across the field."},
{"a":"foot","b":"print","word":"footprint","meaning":"An impression of a foot on a soft surface.","example":"We followed the mysterious footprint in the mud."},
{"a":"foot","b":"step","word":"footstep","meaning":"A step taken by a person in walking, or the sound made by it.","example":"I heard a quiet footstep on the stairs."},
{"a":"foot","b":"rest","word":"footrest","meaning":"A support for resting the feet when sitting.","example":"He leaned back in the armchair and put his feet on the footrest."},
{"a":"fire","b":"fly","word":"firefly","meaning":"A soft-bodied beetle that produces light from its abdomen.","example":"A firefly glowed softly in the dark backyard."},
{"a":"fire","b":"place","word":"fireplace","meaning":"A structure made of brick or stone for holding an indoor fire.","example":"We gathered around the warm fireplace on a cold evening."},
{"a":"fire","b":"work","word":"firework","meaning":"An explosive device causing a spectacular visual display.","example":"The firework lit up the night sky with bright colors."},
{"a":"fire","b":"wood","word":"firewood","meaning":"Wood suitable for burning in a fire.","example":"We stacked the dry firewood beside the cabin."},
{"a":"fire","b":"proof","word":"fireproof","meaning":"Able to withstand fire or great heat.","example":"Important documents were kept in a fireproof safe."},
{"a":"fire","b":"fighter","word":"firefighter","meaning":"A person whose job is to extinguish fires.","example":"The brave firefighter rescued the cat from the tree."},
{"a":"sea","b":"horse","word":"seahorse","meaning":"A small marine fish with a head suggestive of a horse.","example":"The tiny seahorse wrapped its tail around a stem of seaweed."},
{"a":"sea","b":"shell","word":"seashell","meaning":"The hard protective outer layer of a marine mollusk.","example":"She found a smooth pink seashell on the beach."},
{"a":"sea","b":"weed","word":"seaweed","meaning":"Large algae growing in the ocean.","example":"Green seaweed drifted along the ocean waves."},
{"a":"sea","b":"gull","word":"seagull","meaning":"A water bird with long wings and webbed feet found near the sea.","example":"A hungry seagull swooped down to snatch a chip."},
{"a":"sea","b":"food","word":"seafood","meaning":"Fish or shellfish eaten as food.","example":"We enjoyed fresh seafood at the harbour restaurant."},
{"a":"sea","b":"port","word":"seaport","meaning":"A town or city with a harbour for sea-going ships.","example":"Ships from around the world docked at the busy seaport."},
{"a":"star","b":"fish","word":"starfish","meaning":"A marine creature with five or more radiating arms.","example":"An orange starfish rested on the wet rock."},
{"a":"star","b":"light","word":"starlight","meaning":"The light coming from stars in the night sky.","example":"The landscape was softly lit by pure starlight."},
{"a":"pop","b":"corn","word":"popcorn","meaning":"Corn kernels that puff up when heated.","example":"We ate freshly popped popcorn while watching the movie."},
{"a":"door","b":"bell","word":"doorbell","meaning":"A bell or chime sounded by a button outside an entrance door.","example":"The doorbell rang when the guests arrived."},
{"a":"door","b":"mat","word":"doormat","meaning":"A mat placed outside an exterior door for wiping shoes.","example":"Please wipe your boots on the doormat."},
{"a":"door","b":"way","word":"doorway","meaning":"An entrance to a building or room through a door.","example":"He stood in the doorway and waved goodbye."},
{"a":"door","b":"knob","word":"doorknob","meaning":"A handle used to open and close a door.","example":"Turn the brass doorknob to open the door."},
{"a":"door","b":"step","word":"doorstep","meaning":"A step leading up to the outer door of a building.","example":"The package was delivered right onto our doorstep."},
{"a":"mail","b":"box","word":"mailbox","meaning":"A private box into which mail is delivered.","example":"The mailman put a letter inside our mailbox."},
{"a":"mail","b":"man","word":"mailman","meaning":"A person who delivers mail to homes and businesses.","example":"The mailman greeted our dog every morning."},
{"a":"bed","b":"room","word":"bedroom","meaning":"A room used for sleeping.","example":"She kept her favorite books on the desk in her bedroom."},
{"a":"bed","b":"time","word":"bedtime","meaning":"The usual time when someone goes to sleep.","example":"It is almost bedtime, so brush your teeth."},
{"a":"bed","b":"sheet","word":"bedsheet","meaning":"A large rectangular piece of cloth used as bed covering.","example":"She spread a crisp white bedsheet across the mattress."},
{"a":"class","b":"room","word":"classroom","meaning":"A room in a school where students learn.","example":"The teacher decorated the classroom with bright posters."},
{"a":"class","b":"mate","word":"classmate","meaning":"A member of the same class in school.","example":"I worked with my classmate on the group project."},
{"a":"key","b":"board","word":"keyboard","meaning":"A set of keys used to operate a computer or typewriter.","example":"I used the keyboard to type my story."},
{"a":"key","b":"chain","word":"keychain","meaning":"A chain or ring for holding keys together.","example":"She attached her house key to a souvenir keychain."},
{"a":"back","b":"pack","word":"backpack","meaning":"A bag with shoulder straps carried on someone's back.","example":"Pack your lunch and books into your backpack."},
{"a":"back","b":"ground","word":"background","meaning":"The area or scenery behind the main object.","example":"The mountains formed a beautiful background for the photo."},
{"a":"back","b":"yard","word":"backyard","meaning":"A yard at the back of a house.","example":"The dog chased a squirrel around the backyard."},
{"a":"back","b":"bone","word":"backbone","meaning":"The spine or chief support of something.","example":"Good communication is the backbone of teamwork."},
{"a":"play","b":"ground","word":"playground","meaning":"An outdoor area provided for children to play in.","example":"The children ran straight to the swings on the playground."},
{"a":"play","b":"time","word":"playtime","meaning":"A time set aside for play and recreation.","example":"Playtime begins after everyone finishes reading."},
{"a":"play","b":"house","word":"playhouse","meaning":"A small house for children to play in.","example":"They built a wooden playhouse in the garden."},
{"a":"play","b":"mate","word":"playmate","meaning":"A friend with whom a child plays.","example":"She met her best playmate at the park."},
{"a":"play","b":"room","word":"playroom","meaning":"A room in a house set aside for children to play in.","example":"The toys were organized in bins across the playroom."},
{"a":"play","b":"list","word":"playlist","meaning":"A list of recorded songs or video tracks.","example":"We created an upbeat playlist for the road trip."},
{"a":"home","b":"work","word":"homework","meaning":"Schoolwork that a student completes at home.","example":"She completed her math homework before dinner."},
{"a":"home","b":"made","word":"homemade","meaning":"Made at home rather than bought in a store.","example":"Nothing tastes better than fresh homemade bread."},
{"a":"home","b":"town","word":"hometown","meaning":"The town or city where one was born or grew up.","example":"He returned to his hometown after many years."},
{"a":"home","b":"sick","word":"homesick","meaning":"Experiencing a longing for one's home during an absence.","example":"The camper felt homesick during her first night away."},
{"a":"week","b":"end","word":"weekend","meaning":"Saturday and Sunday, regarded as leisure days.","example":"We went camping over the long weekend."},
{"a":"news","b":"paper","word":"newspaper","meaning":"A printed publication containing news articles and reports.","example":"Grandpa reads the morning newspaper while drinking coffee."},
{"a":"news","b":"room","word":"newsroom","meaning":"An office where journalists prepare news for broadcast or publication.","example":"The newsroom hummed with energy as reporters worked on a breaking story."},
{"a":"water","b":"fall","word":"waterfall","meaning":"A cascade of water falling from a height in a river.","example":"Mist rose from the rushing waterfall."},
{"a":"water","b":"melon","word":"watermelon","meaning":"A large fruit with green skin and sweet red flesh.","example":"We ate sweet, juicy watermelon at the summer picnic."},
{"a":"water","b":"proof","word":"waterproof","meaning":"Impervious to water.","example":"Wear waterproof boots when stepping into puddles."},
{"a":"water","b":"front","word":"waterfront","meaning":"A part of a town that borders a body of water.","example":"We strolled along the harbor at the city waterfront."},
{"a":"water","b":"way","word":"waterway","meaning":"A river, canal, or other navigable route for travel by water.","example":"Barges carried goods down the busy inland waterway."},
{"a":"dragon","b":"fly","word":"dragonfly","meaning":"A fast-flying long-bodied insect with transparent wings.","example":"A dragonfly hovered over the quiet pond water."},
{"a":"egg","b":"plant","word":"eggplant","meaning":"A purple-skinned vegetable with soft white flesh.","example":"We roasted sliced eggplant with spices for dinner."},
{"a":"egg","b":"shell","word":"eggshell","meaning":"The hard exterior covering of an egg.","example":"Crack the eggshell carefully so pieces don't fall in."},
{"a":"ear","b":"ring","word":"earring","meaning":"A piece of jewelry worn on the ear.","example":"She wore a delicate silver earring shaped like a star."},
{"a":"ear","b":"worm","word":"earworm","meaning":"A catchy song or tune that runs continually through one's mind.","example":"That catchy chorus turned out to be a total earworm!"},
{"a":"ear","b":"drum","word":"eardrum","meaning":"A membrane inside the ear that vibrates in response to sound waves.","example":"Loud noises can damage your eardrum."},
{"a":"ear","b":"muff","word":"earmuff","meaning":"A pair of fabric pads worn over the ears to keep them warm.","example":"Wear your fuzzy earmuff on cold winter mornings."},
{"a":"ear","b":"phone","word":"earphone","meaning":"A device worn in or over the ear to listen to audio.","example":"He plugged in an earphone to listen to his audiobook."},
{"a":"bath","b":"room","word":"bathroom","meaning":"A room containing a toilet and sink.","example":"Wash your hands thoroughly in the bathroom before eating."},
{"a":"bath","b":"tub","word":"bathtub","meaning":"A tub in which to bathe.","example":"The child floated a yellow rubber duck in the bathtub."},
{"a":"side","b":"walk","word":"sidewalk","meaning":"A paved path for pedestrians at the side of a road.","example":"Walk on the sidewalk to stay safe from traffic."},
{"a":"side","b":"way","word":"sideway","meaning":"Directed toward or positioned at one side.","example":"She glanced in a sideway direction toward the door."},
{"a":"jelly","b":"fish","word":"jellyfish","meaning":"A sea animal with a soft, jelly-like body and stinging tentacles.","example":"A translucent jellyfish floated gracefully in the sea."},
{"a":"book","b":"worm","word":"bookworm","meaning":"A person who loves reading books.","example":"Being a true bookworm, he read three books over the weekend."},
{"a":"book","b":"mark","word":"bookmark","meaning":"A strip of material used to mark a place in a book.","example":"I placed a fabric bookmark between the pages."},
{"a":"book","b":"case","word":"bookcase","meaning":"A cabinet with shelves for storing books.","example":"The heavy wooden bookcase was filled with novels."},
{"a":"book","b":"shelf","word":"bookshelf","meaning":"A shelf on which books are kept.","example":"She picked a colorful story off the top bookshelf."},
{"a":"book","b":"store","word":"bookstore","meaning":"A shop where books are sold.","example":"We browsed the cozy neighborhood bookstore for hours."}
];
const BOARD_SIZE = 16, ROUND_SECONDS = 90, HINTS_START = 3;
const $ = id => document.getElementById(id);
const tileEls = [];
let board = [], selected = null, score = 0, made = 0, combo = 0, bestCombo = 0, hints = HINTS_START, secondsLeft = ROUND_SECONDS, timerId = null, running = false, started = false, revealed = false, lockBoard = false, history = [], collection = [], lastMergeAt = 0, highlighted = [], toastTimer = null;
const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const getKey = (a,b) => [a.toLowerCase(),b.toLowerCase()].sort().join('|');
const recipeMap = new Map();
const ingredientWords = new Set();
for (const r of RECIPES) { recipeMap.set(getKey(r.a,r.b), r); ingredientWords.add(r.a); ingredientWords.add(r.b); }
const RECIPE_PARTS = RECIPES.map(r => [r.a,r.b]);
function shuffle(arr) { for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }
function fmtTime(s){return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;}
function sayMessage(text,kind=''){const el=$('message');el.textContent=text;el.className='message'+(kind?' '+kind:'');}
function showToast(text){const el=$('toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1650);}
function getPersonalBest(){
  try { return Math.max(0, Number(localStorage.getItem('gurutakuWordMergeBest') || 0) || 0); }
  catch (_) { return 0; }
}
function updateStats(){
  $('score').textContent=score.toLocaleString();
  $('made').textContent=made;
  $('bestCombo').textContent=bestCombo+'×';
  $('timer').textContent=fmtTime(secondsLeft);
  $('timerStat').classList.toggle('low',running && secondsLeft<=15);
  $('hintCount').textContent=`(${hints})`;
  $('hintBtn').disabled=hints<=0||!running||lockBoard;
  $('shuffleBtn').disabled=!running||lockBoard;
  $('restartBtn').disabled=false;
  $('restartBtn').textContent=running?'↻ Restart':'▶ Start';
  $('roundLabel').textContent=running?'Merge away!':started?'Round over':'Ready to start';
  $('personalBest').textContent=getPersonalBest().toLocaleString();
  const uniqueCount = new Set(collection).size;
  $('collectionCount').textContent=`${uniqueCount} ${uniqueCount===1?'word':'words'}`;
}
function makeTile(word){
  return {id:`t${Date.now()}_${Math.random().toString(16).slice(2)}`,word,tone:Math.floor(Math.random()*6),empty:false};
}
function initBoard(){
  // Seed the board with eight complete recipe pairs, guaranteeing some possible merges.
  const recipeDeck=shuffle([...RECIPES]);
  const tiles=[];
  for(let i=0;i<8;i++){const r=recipeDeck[i];tiles.push(r.a,r.b);}
  shuffle(tiles);
  board=tiles.map(makeTile);
  selected=null;highlighted=[];lockBoard=false;renderBoard();
}
function renderBoard(){
  const root=$('board');root.innerHTML='';tileEls.length=0;
  board.forEach((tile,index)=>{
    const isEmpty=!!tile.empty;
    const showWord=revealed && !isEmpty;
    const b=document.createElement('button');
    b.type='button';b.draggable=false;
    b.className=`tile tone-${tile.tone}${isEmpty?' empty':''}${!showWord&&!isEmpty?' concealed':''}`;
    b.dataset.index=String(index);
    b.setAttribute('aria-label',isEmpty?'Empty tile':showWord?`Word part ${tile.word}`:'Hidden word tile');
    b.disabled=!running||lockBoard||isEmpty;
    const sp=document.createElement('span');
    sp.textContent=isEmpty?'':showWord?tile.word.toUpperCase():'✦';
    b.append(sp);
    if(selected===index&&showWord){b.classList.add('selected');const mark=document.createElement('i');mark.className='selected-mark';mark.textContent='✓';mark.setAttribute('aria-hidden','true');b.append(mark);}
    if(revealed && highlighted.includes(index))b.classList.add('partner');
    root.appendChild(b);tileEls.push(b);
  });
}
// Cross-platform pointer drag-and-drop: mouse, touch, and stylus.
// Drag a source tile directly onto its partner. Tapping alone never selects a tile.
let dragState = null;
let audioContext = null;
let confettiCanvas = null, confettiContext = null, confettiParticles = [], confettiFrame = 0;

function ensureAudio() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!audioContext) audioContext = new AudioCtx();
  if (audioContext.state === 'suspended') {
    const resumed = audioContext.resume();
    if (resumed && typeof resumed.catch === 'function') resumed.catch(() => {});
  }
  return audioContext;
}
function playTone(frequency, delay, duration, type, volume, endFrequency = null) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const start = ctx.currentTime + delay;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, endFrequency), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + Math.min(0.018, duration * 0.25));
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.025);
}
function playChime() {
  // A short, bright ascending chime for a successful merge.
  playTone(659.25, 0, .22, 'sine', .14);
  playTone(783.99, .075, .24, 'sine', .13);
  playTone(1046.5, .15, .32, 'sine', .12);
  playTone(1318.5, .22, .36, 'triangle', .065);
}
function playBooboo() {
  // Two soft, descending bloops for an incorrect pair.
  playTone(330, 0, .13, 'triangle', .14, 230);
  playTone(245, .14, .16, 'triangle', .13, 165);
}
function ensureConfettiCanvas() {
  if (confettiCanvas) return;
  confettiCanvas = document.createElement('canvas');
  confettiCanvas.className = 'confetti-canvas';
  confettiCanvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(confettiCanvas);
  confettiContext = confettiCanvas.getContext('2d');
}
function resizeConfettiCanvas() {
  ensureConfettiCanvas();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  confettiCanvas.width = Math.round(window.innerWidth * dpr);
  confettiCanvas.height = Math.round(window.innerHeight * dpr);
  confettiCanvas.style.width = `${window.innerWidth}px`;
  confettiCanvas.style.height = `${window.innerHeight}px`;
  confettiContext.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function launchConfetti(indices) {
  resizeConfettiCanvas();
  const first = tileEls[indices[0]]?.getBoundingClientRect();
  const second = tileEls[indices[1]]?.getBoundingClientRect();
  const x = first && second ? (first.left + first.width / 2 + second.left + second.width / 2) / 2 : window.innerWidth / 2;
  const y = first && second ? (first.top + first.height / 2 + second.top + second.height / 2) / 2 : window.innerHeight / 3;
  const colors = ['#795cf0','#f06fa9','#ffbd45','#27bf91','#4fa8f7','#ff786b','#b8e34a'];
  const count = reducedMotion ? 22 : 82;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 6;
    confettiParticles.push({
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 2.2,
      gravity: .13 + Math.random() * .09, life: 42 + Math.random() * 32,
      width: 4 + Math.random() * 5, height: 5 + Math.random() * 7,
      rotation: Math.random() * Math.PI, spin: (Math.random() - .5) * .22,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  if (!confettiFrame) confettiFrame = requestAnimationFrame(animateConfetti);
}
function animateConfetti() {
  confettiFrame = 0;
  if (!confettiContext || !confettiCanvas) return;
  confettiContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiParticles = confettiParticles.filter(p => p.life > 0 && p.y < window.innerHeight + 30);
  for (const p of confettiParticles) {
    p.x += p.vx; p.y += p.vy; p.vy += p.gravity; p.rotation += p.spin; p.life -= 1;
    confettiContext.save();
    confettiContext.globalAlpha = Math.min(1, p.life / 12);
    confettiContext.translate(p.x, p.y);
    confettiContext.rotate(p.rotation);
    confettiContext.fillStyle = p.color;
    confettiContext.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
    confettiContext.restore();
  }
  if (confettiParticles.length) confettiFrame = requestAnimationFrame(animateConfetti);
  else confettiContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
function updateDragGhost(state, x, y) {
  if (!state.ghost) {
    state.ghost = state.source.cloneNode(true);
    state.ghost.classList.remove('drag-source', 'drag-over', 'selected', 'partner');
    state.ghost.classList.add('drag-ghost');
    state.ghost.disabled = false;
    const rect = state.source.getBoundingClientRect();
    state.ghost.style.width = `${rect.width}px`;
    state.ghost.style.height = `${rect.height}px`;
    document.body.appendChild(state.ghost);
    state.source.classList.add('drag-source');
  }
  state.ghost.style.left = `${x}px`;
  state.ghost.style.top = `${y}px`;
}
function onTilePointerDown(event) {
  const button = event.target.closest('button.tile');
  if (!button || !$('board').contains(button) || !running || lockBoard || button.disabled) return;
  if (event.button !== undefined && event.button !== 0) return;
  const index = Number(button.dataset.index);
  if (!Number.isInteger(index) || board[index]?.empty) return;
  event.preventDefault();
  ensureAudio(); // Initialize/resume audio directly from the user's gesture.
  dragState = { index, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false, source: button, ghost: null, hover: null };
  try { button.setPointerCapture?.(event.pointerId); } catch (_) {}
  document.addEventListener('pointermove', onTilePointerMove, { passive: false });
  document.addEventListener('pointerup', onTilePointerUp);
  document.addEventListener('pointercancel', onTilePointerCancel);
}
function onTilePointerMove(event) {
  const state = dragState;
  if (!state || event.pointerId !== state.pointerId) return;
  const distance = Math.hypot(event.clientX - state.startX, event.clientY - state.startY);
  if (!state.moved && distance < 5) return;
  event.preventDefault();
  state.moved = true;
  updateDragGhost(state, event.clientX, event.clientY);
  const under = document.elementFromPoint(event.clientX, event.clientY);
  const target = under?.closest?.('button.tile');
  const nextHover = target && $('board').contains(target) && target !== state.source && !target.disabled ? target : null;
  if (state.hover && state.hover !== nextHover) state.hover.classList.remove('drag-over');
  if (nextHover) nextHover.classList.add('drag-over');
  state.hover = nextHover;
}
function clearDragState() {
  if (!dragState) return;
  if (dragState.ghost) dragState.ghost.remove();
  dragState.source?.classList.remove('drag-source');
  if (dragState.hover) dragState.hover.classList.remove('drag-over');
  dragState = null;
  document.removeEventListener('pointermove', onTilePointerMove);
  document.removeEventListener('pointerup', onTilePointerUp);
  document.removeEventListener('pointercancel', onTilePointerCancel);
  $('board').querySelectorAll('.drag-source,.drag-over').forEach(el => el.classList.remove('drag-source','drag-over'));
}
function onTilePointerUp(event) {
  const state = dragState;
  if (!state || event.pointerId !== state.pointerId) return;
  const wasDragged = state.moved;
  let targetIndex = null;
  if (wasDragged) {
    const under = document.elementFromPoint(event.clientX, event.clientY);
    const target = under?.closest?.('button.tile');
    if (target && $('board').contains(target) && !target.disabled) targetIndex = Number(target.dataset.index);
  }
  const sourceIndex = state.index;
  clearDragState();
  if (!wasDragged) {
    sayMessage('Drag a word part onto another tile — tapping alone does not select it.');
    return;
  }
  if (targetIndex === null || targetIndex === sourceIndex) {
    sayMessage('Drop a word part onto another tile to try making a word.');
    return;
  }
  tryMergeDrop(sourceIndex, targetIndex);
}
function onTilePointerCancel(event) {
  if (dragState && event.pointerId === dragState.pointerId) clearDragState();
}
function tryMergeDrop(sourceIndex, targetIndex) {
  if (!running || lockBoard || sourceIndex === targetIndex) return;
  const a = board[sourceIndex]?.word;
  const b = board[targetIndex]?.word;
  if (!a || !b) return;
  const recipe = recipeMap.get(getKey(a, b));
  if (recipe) {
    doMerge(sourceIndex, targetIndex, recipe);
    return;
  }
  playBooboo();
  selected = null;
  highlighted = [];
  renderBoard();
  tileEls[sourceIndex]?.classList.add('wrong-drop');
  tileEls[targetIndex]?.classList.add('wrong-drop');
  setTimeout(() => tileEls.forEach(el => el?.classList.remove('wrong-drop')), 620);
  sayMessage(`🙈 ${a.toUpperCase()} + ${b.toUpperCase()} don't make one of our compound words. Try another pair!`, 'bad');
}
$('board').addEventListener('pointerdown', onTilePointerDown);
window.addEventListener('resize', () => { if (confettiCanvas) resizeConfettiCanvas(); });
function chooseSpawnPair(){const r=RECIPES[Math.floor(Math.random()*RECIPES.length)];return [r.a,r.b];}
function spawnPair(indices){const pair=chooseSpawnPair();for(let n=0;n<indices.length;n++){board[indices[n]]=makeTile(pair[n]);}}
function startTimer(){if(timerId)clearInterval(timerId);timerId=setInterval(()=>{if(!running)return;secondsLeft--;updateStats();if(secondsLeft<=0)endGame();},1000);}
function prepareRound(){
  if(timerId)clearInterval(timerId);
  timerId=null;
  if(dragState)clearDragState();
  score=0;made=0;combo=0;bestCombo=0;hints=HINTS_START;secondsLeft=ROUND_SECONDS;
  running=false;started=false;revealed=false;lockBoard=false;
  history=[];collection=[];lastMergeAt=0;selected=null;highlighted=[];
  initBoard();
  renderCollection();
  updateDefinition(null);
  $('instruction').innerHTML='<b>Words are hidden!</b> Press Start when you are ready. The 90-second countdown begins when the words are revealed.';
  sayMessage('Your tiles are ready. Press Start when you want the timer to begin.');
  updateStats();
}
function showReadyRound(){
  prepareRound();
  $('modalEmoji').textContent='🧩';
  $('modalTitle').textContent='Ready to merge?';
  $('modalText').textContent='Your word tiles are hidden. Press Start on the game board when you are ready to begin your 90-second challenge.';
  $('modalBtn').textContent='Let’s play! 🚀';
  $('overlay').classList.add('hidden');
}
function startGame(){
  if(running)return;
  running=true;started=true;revealed=true;lockBoard=false;selected=null;highlighted=[];
  renderBoard();
  $('instruction').innerHTML='<b>Drag one word part onto its matching partner</b> to make a compound word. Find pairs quickly to build your combo!';
  sayMessage('Go! Drag one word part onto another to make a real compound word.');
  updateStats();
  startTimer();
}
function doMerge(i,j,recipe){
  if(lockBoard)return;
  // Read the words from the source tiles before replacing them.
  const a=board[i]?.word;
  const b=board[j]?.word;
  if(!a || !b) return;
  lockBoard=true;selected=null;highlighted=[];
  playChime();
  launchConfetti([i,j]);
  const now=performance.now();combo=(now-lastMergeAt<=3500)?combo+1:1;lastMergeAt=now;bestCombo=Math.max(bestCombo,combo);made++;
  const points=(10+recipe.word.length)+(combo>1?(combo-1)*5:0);score+=points;
  history.push(recipe.word);collection.unshift(recipe.word);if(collection.length>42)collection.length=42;
  const aEl=tileEls[i],bEl=tileEls[j];if(aEl){aEl.classList.add('merging');aEl.setAttribute('aria-label',recipe.word);}if(bEl)bEl.classList.add('merging');
  $('defWord').textContent=recipe.word.toUpperCase();$('defText').textContent=`${recipe.meaning} Example: ${recipe.example}`;
  $('instruction').innerHTML=`<b>${a.toUpperCase()} + ${b.toUpperCase()} → ${recipe.word.toUpperCase()}</b> — ${escapeHtml(recipe.meaning)}`;
  sayMessage(`🎉 ${recipe.word.toUpperCase()}! +${points} points${combo>1?` · ${combo}× combo!`:''}`,'good');
  updateStats();renderCollection(true,recipe.word);
  let finished=false;
  const finish=()=>{
    if(finished)return;
    finished=true;
    // Always replace both merged positions with fresh, valid word-part tiles.
    // Unlock the board in a finally block so an unexpected render error cannot
    // leave every tile permanently disabled after the first merge.
    try{
      spawnPair([i,j]);
      reshuffleTiles();
      selected=null;
      highlighted=[];
      renderBoard();
    }catch(error){
      console.error('Could not refresh the word tiles:',error);
      board[i]=makeTile('sun');
      board[j]=makeTile('flower');
    }finally{
      lockBoard=false;
      // Re-render after unlocking so all remaining/fresh tiles are enabled.
      renderBoard();
      updateStats();
    }
  };
  setTimeout(finish,reducedMotion?80:350);
  // Recovery guard for devices that delay or interrupt the animation callback.
  setTimeout(()=>{if(lockBoard&&!finished)finish();},900);
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function renderCollection(animate=false,newWord=''){
  const root=$('collection');root.innerHTML='';const seen=new Set();
  for(const word of collection){if(seen.has(word))continue;seen.add(word);const r=RECIPES.find(x=>x.word===word);const chip=document.createElement('span');chip.className='word-chip'+(animate&&word===newWord?' new':'');chip.innerHTML=`${escapeHtml(word.toUpperCase())}<small>+${r?10+r.word.length:10}</small>`;chip.title=r?r.meaning:word;root.appendChild(chip);}
  if(!root.children.length)root.innerHTML='<div class="collection-empty">Your new compound words will appear here.</div>';
  const uniqueCount = new Set(collection).size; $('collectionCount').textContent=`${uniqueCount} ${uniqueCount===1?'word':'words'}`;
}
function updateDefinition(recipe){if(!recipe){$('defWord').textContent='Ready, word explorer?';$('defText').textContent='Merge two word parts to discover a compound word, its meaning, and an example.';return;}$('defWord').textContent=recipe.word.toUpperCase();$('defText').textContent=`${recipe.meaning} Example: ${recipe.example}`;}
function findAnyPair(){for(let i=0;i<board.length;i++){if(board[i].empty)continue;for(let j=i+1;j<board.length;j++){if(board[j].empty)continue;if(recipeMap.has(getKey(board[i].word,board[j].word)))return [i,j];}}return null;}
function useHint(){if(!running||hints<=0)return;const pair=findAnyPair();if(!pair){showToast('Try shuffling the tiles!');return;}hints--;selected=pair[0];highlighted=pair;renderBoard();sayMessage(`Hint: drag ${board[pair[0]].word.toUpperCase()} onto ${board[pair[1]].word.toUpperCase()} to make a word.`);updateStats();const first=tileEls[pair[0]],second=tileEls[pair[1]];if(first)first.scrollIntoView({block:'nearest',behavior:'smooth'});}
function shuffleBoard(){
  if(!running||lockBoard)return;
  reshuffleTiles();
  sayMessage('Tiles shuffled! Look for another compound word.');
}

function reshuffleTiles(){
  const words=shuffle(board.map(t=>t.word));
  board=board.map((t,i)=>({
    ...t,
    word:words[i],
    tone:Math.floor(Math.random()*6)
  }));
  selected=null;
  highlighted=[];
}
function endGame(){
  if(!running)return;
  running=false;lockBoard=false;selected=null;
  clearInterval(timerId);timerId=null;
  renderBoard();
  const oldBest=getPersonalBest();
  const isRecord=score>oldBest;
  if(isRecord){try{localStorage.setItem('gurutakuWordMergeBest',String(score));}catch(_) {}}
  updateStats();
  $('modalEmoji').textContent=score>=250?'🏆':score>=120?'🌟':'📚';
  $('modalTitle').textContent='Time’s up, word explorer!';
  $('modalText').textContent=`You made ${made} compound ${made===1?'word':'words'} and scored ${score} points. Your best combo was ${bestCombo}×.`;
  $('modalBtn').textContent='Play again! 🚀';
  const note=$('overlay').querySelector('.modal-note');
  note.innerHTML=`Personal best: <b>${getPersonalBest().toLocaleString()}</b>${isRecord?' · New personal best!':''}`;
  $('overlay').querySelector('.howto').innerHTML=`<b>Round recap</b><br>Compound words made: <b>${made}</b><br>Score: <b>${score}</b><br>Best combo: <b>${bestCombo}×</b>`;
  $('overlay').classList.remove('hidden');
}
$('hintBtn').addEventListener('click',useHint);
$('shuffleBtn').addEventListener('click',shuffleBoard);
$('restartBtn').addEventListener('click',()=>{
  if(running){
    // Restart always returns to a ready screen: timer stopped and words concealed.
    prepareRound();
    showToast('Round reset. Press Start when you are ready.');
  } else {
    startGame();
  }
});
$('modalBtn').addEventListener('click',showReadyRound);
// Initialize with a concealed board. The opening modal's Let's play button
// takes the player to the ready screen; only Start reveals words and starts time.
prepareRound();
$('overlay').querySelector('.modal-note').textContent='Drag and drop · Works on phones, tablets, and computers';
