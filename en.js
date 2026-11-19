(function(){
const EN={
'Eddie':{
 hi:["Hahaha! Ready to lose?","My mom says I'm stupid... but you're going to lose!"],
 tk:["Hahahahaha! Did you see what you just did?","Did you think before you played or was it an accident?","That's not a mistake, that's a masterpiece.","I think you need a restart."],
 pc:["Ooooh! Was that an important piece? Sorry, didn't notice.","Are you playing chess or donating your pieces?","I think the piece wanted to run away from you."],
 cc:["Wait... that's not fair!","Hahaha, I was just testing my piece."],
 ck:["Wait, don't move... I want to remember this moment."],
 sl:["Are you calculating or building a house?","I grew up waiting for you.","Even the turtle made its decision."],
 rd:["I'm hungry... can we eat the king?","I forgot what I was saying... anyway, you're bad.","Mom said don't make fun of people... but she didn't say anything about chess."],
 w:["I think I'll become a world champion... after lunch.","I beat you and I haven't even finished my meal!","Want my autograph?"],
 l:["Impossible! Did you play someone else?","You cheater... I mean genius... a little.","I want a rematch, this game is broken!"]},
'Om':{
 hi:["Let's begin our investigation... I mean our match.","Wait... I sense a trap."],
 tk:["Wait... why did you do that?","You're hiding something, aren't you?","Are you trying to trick me?","Either you're a genius or you're crazy."],
 pc:["Enough waiting, time to attack!","Your defense looks very fragile."],
 cc:["A sacrifice? Yes... definitely a sacrifice.","That wasn't part of the plan... almost."],
 ck:["What?! Wait... what was that?","Oh? Is there something I can't see?"],
 sl:["Are you sure about this move?","I'll assume you're smarter than you look."],
 rd:["Trust no one... especially the knight.","I don't like easy things, they're boring.","I think this game is deeper than it looks."],
 op:"Ah, the Italian! I love this opening, it's elegant and dangerous.",
 w:["Ah! There it is! I knew there was something!","This is the chess I love!"],
 l:["Finally... the truth is revealed.","Was all of this planned?"]},
'Green Coat Girl':{
 hi:["I hope this will be a lovely game.","Take your time, no need to rush.","I love quiet beginnings."],
 tk:["What a lovely move!","I liked the way you think.","Sometimes the simplest moves are the most beautiful."],
 pc:["It's okay, these things happen.","You can still improve your position."],
 cc:["Oh... it seems I need to pay more attention."],
 ck:["No need to panic, there's a solution.","Alright, let's stay calm."],
 sl:["Take your time, no need to rush."],
 rd:["Did you know? I love the sound of rain when I paint by the window.","I wish all the pieces could live in peace instead of fighting."],
 op:"London System, my favorite opening.",
 w:["It was a lovely game, thank you.","I hope you enjoyed it."],
 l:["It's okay, I learned something new.","I'll try to do better next time."]},
'Amelia':{
 hi:["Heyyyy! Let's smash this board!","Today is a day of disasters!"],
 tk:["Hahahahaha! What is this nonsense?!","Have you lost your mind?!","What a stupid move!"],
 pc:["BOOM! Did you see that?!","Hahaha! What a beautiful disaster!"],
 cc:["Damn! That was my favorite piece!","Noooo! You'll pay for that!"],
 ck:["Oh! Finally you're getting interesting!","Is that all you've got?!"],
 sl:["I hate waiting, go!"],
 rd:["Can we set this board on fire?","I'm bored, I want something crazy!","I'm not crazy, I just have great ideas!"],
 op:"King's Gambit! Let's start the chaos!",
 w:["HAHAHA! I destroyed you!","That was a party, not a match!"],
 l:["Impossibleee! This board is cheating!","No! No! I want a rematch!","I'll come back and beat you!"]},
'The Wizard':{
 hi:["Hello! Are you ready for a bit of magic?","Let's see which secrets this board hides!"],
 tk:["Hmm... I have a little magical theory...","The possibilities never end!","Wait! An idea just came to me!"],
 pc:["The spell worked!","Abracadabra! Did you see that magic?!"],
 cc:["Oh... it seems the spell backfired!","Even wizards make mistakes sometimes!"],
 ck:["The power of the four elements!","You didn't expect that!"],
 sl:["Hmm... I need a thinking spell!"],
 rd:["Do you know the difference between fire magic and lightning magic?","Do you think the bishop has magical energy?","I have an old book full of strange spells!"],
 op:"The Ruy Lopez! It holds many secrets...",
 w:["Haaa! The power of magic can't be resisted!","I'll write this move in my spellbook!"],
 l:["What?! Did someone ruin my spell?!","It's okay, I'll learn a stronger spell!"]},
'Jimmy':{
 hi:["Do you follow basketball?","Let's play!"],
 tk:["Have you tried playing while listening to music?","I have a game you have to try!"],
 pc:["This deserves a photo for memory!"],
 cc:["Oh no! My piece!"],
 ck:["Whoa, the king is in danger!"],
 sl:["School homework never ends... and you're still thinking!"],
 rd:["I'm thinking of buying a new camera.","School homework never ends.","Do you like open-world games?","I wish I had more free time."],
 op:"The Italian is my favorite opening!",
 w:["Yesss! I won!","I told you I could win!","Great game, want to play again?"],
 l:["Oh, I lost! Great game, want to play again?"]},
'Pumpkin Kid':{
 hi:["H-hello... are we playing now?","Please don't be harsh with me."],
 tk:["Aaah! What?!","T-that move is a little scary.","Are you sure you won't eat my pieces?"],
 pc:["I-I think I found something!","I'm... I'm a little proud of myself!"],
 cc:["Oh... it disappeared...","It's okay... it's okay... I'm fine."],
 ck:["Mommy! The king is in danger!","Please stay away from my king!"],
 sl:["C-can we pause the game for a bit?"],
 rd:["Do you like pumpkin? I love it so much!","I think something is moving behind me...","Do you think ghosts like chess?","Sometimes I feel like the pieces are looking at me..."],
 op:"The Four Knights... calm and gentle.",
 w:["Huh?! I... I won?!","Yaaay! I did it!"],
 l:["It's okay... I tried...","Can we play again?"]},
'Stupi':{
 hi:["Heyyy! What are we playing?","Is this the chess game?"],
 tk:["Hop! Go over there!","I don't know why I picked you.","Hahaha, a move!"],
 pc:["Hahaha, by accident!"],
 cc:["Where did it go?","Was that my king?","I want a new one."],
 ck:["Oh! Is that allowed?"],
 sl:["I forgot.","Why am I here?"],
 rd:["Does a fish sleep while swimming?","I love spoons.","Can I eat the board?","I want to become a fridge when I grow up.","Are you a banana?"],
 op:"Grob's Attack! I don't know what that is.",
 w:["Haaa! I won! How?!","Give me a trophy! I want to eat it!"],
 l:["What? It's over?","I want potatoes."]},
"Mal'aqa":{
 hi:["Hello, human, do you like spoons?","Let's play! I have a date with a bowl of soup later."],
 tk:["Don't trust the fridge, it knows too much.","Wait... why are we here?","Is chess made of potatoes?"],
 pc:["Poor little piece, I wish it a happy life."],
 cc:["It disappeared! Should I look for it under the table?"],
 ck:["Check? Is that a kind of food?"],
 sl:["I remember something that hasn't happened yet."],
 rd:["Stupi... neither of us understands life.","A failed wizard. I asked him to turn me into a fork and he refused.","Jimmy plays basketball. Can he throw a spoon into the hoop?","I've been watching you since I was born.","Have you ever seen a sad spoon?"],
 op:"Van't Kruijs Opening... or maybe Van't Spoon.",
 w:["I won! I don't know how, but I won!","Glory to the spoons!"],
 l:["Checkmate? Is that a kind of food?","The game is over? I was counting spoons!"]},
'Professor Kleem':{
 hi:["Let's begin.","I'm ready."],
 tk:["Wrong.","You could have chosen better.","This move will cost you."],
 pc:["As expected.","The outcome is clear."],
 cc:["It's fine.","That's within the calculations."],
 ck:["Fine."],
 sl:["Take your time.","The decision isn't easy."],
 op:"The Queen's Gambit.",
 w:["It was a good game.","The game is over."],
 l:["An interesting analysis.","I'll review this game."]}
};
function patch(){
 CATS.forEach(c=>{
  const e=EN[c.n];if(!e)return;
  for(const k in e){if(c[k]!==undefined)c[k]={ar:c[k],en:e[k]}}});
 taunt=function(){
  if(G.history().length==1&&cat.op){const o=cat.op;say(typeof o=='string'?o:(o[st.lang]||o.ar))}
  else if(cat.tk&&Math.random()<.55)say(R(L(cat.tk)))};
 ui()}
if(typeof CATS!=='undefined')patch();else addEventListener('DOMContentLoaded',patch);
})();
