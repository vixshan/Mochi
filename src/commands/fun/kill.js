module.exports = async (client, interaction, args) => {
  const user = interaction.options.getUser('user')

  if (!user)
    return client.errUsage(
      { usage: 'hug [mention user]', type: 'editreply' },
      interaction
    )

  var kills = [
    ` after a long day, plops down on the couch with ${user} and turns on The Big Bang Theory. After a Sheldon Cooper joke, ${user} laughs uncontrollably as they die.`,
    `${interaction.user} Alt+F4'd ${user}.exe!`,
    `${interaction.user} attempted to play a flute, exploding the head of ${user}.`,
    `${interaction.user} blew his ear drums out listening to music too hard.`,
    `${interaction.user} challenges ${user} to a fist fight to the death. ${user} wins.`,
    `${interaction.user} cleaves the head of ${user} with a keyboard.`,
    `${interaction.user} crushes ${user} with a fridge.`,
    `${interaction.user} decapitates ${user} with a sword.`,
    `${interaction.user} drags ${user}s ears too hard and rips them off.`,
    `${interaction.user} drowns ${user} in a beer barrel.`,
    `${interaction.user} drowns ${user} in a tub of hot chocolate. *How was your last drink?*`,
    `${interaction.user} eviscerates ${user} with a rusty butter knife. Ouch!`,
    `${interaction.user} feeds toothpaste-filled oreos to ${user}, who were apparently allergic to fluorine. GGWP.`,
    `${interaction.user} fell in love with ${user} then broke his heart literally.`,
    `${interaction.user} fires a supersonic frozen turkey at ${user}, killing them instantly.`,
    `${interaction.user} forgot to leave the car door window open and ${user} dies from overheating`,
    `${interaction.user} forgot to zombie-proof ${user} lawn... Looks like zombies had a feast last night.`,
    `${interaction.user} gets ${user} to watch anime with them. ${user} couldn't handle it.`,
    `${interaction.user} grabs ${user} and shoves them into an auto-freeze machine with some juice and sets the temperature to 100 Kelvin, creating human ice pops.`,
    `${interaction.user} hired me to kill you, but I don't want to! ${user}`,
    `${interaction.user} hugs ${user} too hard..`,
    `${interaction.user} hulk smashes ${user} into a pulp.`,
    `${interaction.user} killed ${user} by ripping the skin off of their face and making a mask out of it.`,
    `${interaction.user} kills ${user} after hours of torture.`,
    `${interaction.user} kills ${user} with a candlestick in the study`,
    `${interaction.user} kills ${user} with kindness`,
    `${interaction.user} kills ${user} with their own foot.`,
    `${interaction.user} murders ${user} with an axe.`,
    `${interaction.user} pressed delete. It deleted ${user}`,
    `${interaction.user} pushes ${user} into the cold vacuum of space.`,
    `${interaction.user} runs ${user} over with a PT Cruiser.`,
    `${interaction.user} shoots ${user} in the head.`,
    `${interaction.user} shoots in ${user} mouth with rainbow laser, causing ${user} head to explode with rainbows and ${user} is reborn as unicorn. :unicorn:`,
    `${interaction.user} shot ${user} using the Starkiller Base!`,
    `${interaction.user} slips bleach into ${user}'s lemonade.`,
    `${interaction.user} strangles ${user}.`,
    `${interaction.user} straps ${user} to an ICBM and sends them to North Korea along with it.`,
    `${interaction.user} strikes ${user} with the killing curse... *Avada Kedavra!*`,
    `${interaction.user} tears off ${user}s lips after a kiss.`,
    `${interaction.user} thicc and collapses ${user}'s rib cage`,
    `${interaction.user} tries to shoot the broad side of a barn, misses and hits ${user} instead.`,
    `${interaction.user} turns on Goosebumps(2015 film) on the TV. ${user} being a scaredy-cat, dies of an heart attack.`,
    `${interaction.user} was so swag that ${user} died due to it. #Swag`,
    `${interaction.user}, are you sure you want to kill ${user}? They seem nice to me.`,
    `${user} accidentally clicked on a popup ad that reads \`Doctors hate us, see the one best trick for dying today!\``,
    `${user} accidentally tripped and died while getting up to write their suicide note.`,
    `${user} ate a piece of exotic butter. It was so amazing that it killed them.`,
    `${user} ate an apple and turned out it was made out of wax. Someone died from wax poisoning later that day.`,
    `${user} ate too many laxatives and drowned in their own shit. Ew.`,
    `${user} bleeds out after trying to get on \`Dumbest hillbilly moments\`.`,
    `${user} bought a fidget spinner and drowned in pussy.`,
    `${user} can't be killed, as they are a ghost.`,
    `${user} chokes in a trash can.`,
    `${user} chokes on a chicken bone.`,
    `${user} chokes on cheerios and dies. What an idiot...`,
    `${user} cranks up the music system only to realize the volume was at max and the song playing was Baby by Justin Beiber...`,
    `${user} cums in eye, goes blind, runs for help but ran straight onto train tracks and gets plowed by a train.`,
    `${user} decided it was a good idea to fight a tiger while smelling like meat. It did not end well.`,
    `${user} did not make a meme dank enough and was stoned.`,
    `${user} died after fapping 50 times in a row with no break.`,
    `${user} died after gaming for 90 hours straight without moving or eating.`,
    `${user} died after playing with an edgy razor blade fidget spinner.`,
    `${user} died after realizing how shitty their grammar was`,
    `${user} died after trying to out-meme Dank Memer.`,
    `${user} died an honorable death. Death by snoo snoo.`,
    `${user} died because RemindMeBot forgot to remind them to breathe`,
    `${user} died because they started playing with a fidget spinner but they realise its 2016 so you start fapping to the old witch in snow white and obama starts mowing their lawn and they jump out of the window and get ripped to pieces by Obama's lawn mower`,
    `${user} died due to ${interaction.user} being so stupid`,
    `${user} died due to eating WAY too many hotdogs in preparation for their date Friday night.`,
    `${user} died eating expired and infected raw fish with the filthiest rice in the world as sushi while being constantly stabbed in the scrotum with a 9inch nail sharp enough to stab through kevlar. The soy sauce was cat piss.`,
    `${user} died from a high salt intake`,
    `${user} died from a swift kick to the brain.`,
    `${user} died from a tragic amount of bad succ`,
    `${user} died from doing the ice bucket challenge.`,
    `${user} died from drinking too much water Huh, I guess it IS possible!.`,
    `${user} died from eating cactus needles.`,
    `${user} died from eating too much ass.`,
    `${user} died from eating too much bread :/`,
    `${user} died from ebola.`,
    `${user} died from meme underdose :/`,
    `${user} died from not eating enough ass.`,
    `${user} died from not whacking it enough. (There's a healthy balance, boys)`,
    `${user} died from reposting in the wrong neighborhood`,
    `${user} died from shitting for 36 hours straight.`,
    `${user} died from swallowing rocks too fast`,
    `${user} died from too many sunburns.`,
    `${user} died from whacking it too much. (There's a healthy balance, boys)`,
    `${user} died of oversucc`,
    `${user} died when testing a hydrogen bomb. There is nothing left to bury.`,
    `${user} died while listening to 'It's every day bro'`,
    `${user} died while playing hopscotch on *seemingly* deactivated land mines.`,
    `${user} died while trying to find the city of England`,
    `${user} died. OOF`,
    `${user} dies after swallowing a toothpick.`,
    `${user} dies at the hands of ${interaction.user}.`,
    `${user} dies because they used a bobby pin to lift their eyelashes`,
    `${user} dies because they were just too angry.`,
    `${user} dies by swearing on a Christian Minecraft server`,
    `${user} dies due to lack of friends.`,
    `${user} dies from bad succ.`,
    `${user} dies from dabbing too hard.`,
    `${user} dies from dabbing too hard`,
    `${user} dies from disrespecting wahmen.`,
    `${user} dies from just being a bad, un-likeable dude.`,
    `${user} dies from posting normie memes.`,
    `${user} dies from severe dislike of sand. It's coarse and rough and irritating it gets everywhere`,
    `${user} dies from watching the emoji movie and enjoying it.`,
    `${user} dies in a horrible accident, and it was engineered by ${interaction.user}.`,
    `${user} dies north of the wall and transforms into a white walker`,
    `${user} dies of AIDS.`,
    `${user} dies of dysentery.`,
    `${user} dies of natural causes.`,
    `${user} dies of starvation.`,
    `${user} dies on death row via lethal injection after murdering ${interaction.user} and their family.`,
    `${user} dies, but don't let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer’s table`,
    `${user} dies.`,
    `After a struggle, ${user} kills ${interaction.user}`,
    `${user} disappeared from the universe.`,
    `${user} drank some toxic soda before it was recalled.`,
    `${user} dropped a Nokia phone on their face and split their skull.`,
    `${user} drowned in their own tears.`,
    `${user} eats too much copypasta and explodes`,
    `${user} fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. :iphone:`,
    `${user} fell into a pit of angry feminists.`,
    `${user} gets hit by a car.`,
    `${user} gets stabbed by ${interaction.user}`,
    `${user} gets struck by lightning.`,
    `${user} goes genocide and Sans totally dunks ${user}!`,
    `${user} got into a knife fight with the pope. One of them is in hell now.`,
    `${user} got stepped on by an elephant.`,
    `${user} died from eating too much ass.`,
    `${user} has a stroke after a sad miserable existence. They are then devoured by their ample cats.`,
    `${user} has been found guilty, time for their execution!`,
    `${user} has some bad chinese food, and pays the ultimate price.`,
    `${user} is abducted by aliens, and the government kills them to cover it up.`,
    `${user} is dead at the hands of ${interaction.user}.`,
    `${user} is injected with chocolate syrup, which mutates them into a person made out of chocolate. While doing a part-time job at the Daycare, they are devoured by the hungry babies. :chocolate_bar:`,
    `${user} is killed by a rabbit with a vicious streak a mile wide`,
    `${user} is killed by their own stupidity.`,
    `${user} is killed in a robbery gone wrong.`,
    `${user} is not able to be killed. Oh, wait, no, ${interaction.user} kills them anyway.`,
    `${user} is so dumb that they choked on oxygen.`,
    `${user} is stuffed into a suit by Freddy on their night guard duty. Oh, not those animatronics again!`,
    `${user} is sucked into Minecraft. ${user}, being a noob at the so called Real-Life Minecraft faces the Game Over screen.`,
    `${user} killed themselves after seeing the normie memes that ${interaction.user} posts.`,
    `${user} kills themselves after realizing how dumb ${interaction.user} is.`,
    `${user} lives, despite ${interaction.user}'s murder attempt.`,
    `${user} loses the will to live`,
    `${user} presses a random button and is teleported to the height of 100m, allowing them to fall to their inevitable death. Moral of the story: Don't go around pressing random buttons.`,
    `${user} reads memes till they die.`,
    `${user} ripped his heart out..`,
    `${user} ripped their own heart out to show their love for ${interaction.user}.`,
    `${user} screams in terror as they accidentally spawn in the cthulhu while uttering random latin words. Cthulhu grabs ${user} by the right leg and takes them to his dimension yelling, \`Honey, Dinner's ready!\``,
    `${user} slipped in the bathroom and choked on the shower curtain.`,
    `${user} slips on a banana peel and falls down the stairs.`,
    `${user} spins a fidget spinner and when it stops he dies...`,
    `${user} steps on a george foreman and dies of waffle foot.`,
    `${user} takes an arrow to the knee. And everywhere else.`,
    `${user} talked back to mods and got destroyed by the ban hammer.`,
    `${user} tips his fedora too far and falls onto the tracks of an oncoming subway.`,
    `${user} tried to get crafty, but they accidentally cut themselves with the scissors.:scissors:`,
    `${user} tried to get famous on YouTube by live-streaming something dumb. Skydiving while chained to a fridge.`,
    `${user} tried to outrun a train, the train won.`,
    `${user} tried to pick out the holy grail. He chose... poorly.`,
    `${user} tried to play in the street...`,
    `${user} trips over his own shoe laces and dies.`,
    `${user} vocally opposed the Clintons and then suddenly disappeared.`,
    `${user} was a resident of Alderaan before Darth Vader destroyed the planet...`,
    `${user} was accused of stealing Neptune's crown...`,
    `${user} was charging their Samsung Galaxy Note 7...`,
    `${user} was eaten alive by ants`,
    `${user} was given a chance to synthesize element 119 (Ununennium) and have it named after them, but they messed up. R.I.P.`,
    `${user} was killed by ${interaction.user} with baby wipes.`,
    `${user} was murdered by ${interaction.user} and everyone knows it, but there is no proof.`,
    `${user} was scooped by ${interaction.user} and their innards are now Ennard.`,
    `${user} was teleported to the timeline where Jurassic World was real and they were eaten alive by the Indominus Rex.`,
    `${user} was thrown in the crusher of a trash truck by ${interaction.user}.`,
    `${user} was walking normally when out of the corner of their eye they saw someone do a bottle flip and dab causing ${user} to have a stroke.`,
    `${user} watched the Emoji Movie and died of sheer cringe.`,
    `${user} went on a ride with a lead balloon.`,
    `After getting pushed into the ocean by ${interaction.user}, ${user} is eaten by a shark.`,
    `After raid of roblox kids entered the server, ${user} died of cancer.`,
    `Aids, ${user} died from aids.`,
    `Calling upon the divine powers, ${interaction.user} smites ${user} and their heathen ways`,
    `In a sudden turn of events, I **don't** kill ${user}.`,
    `no u`,
    `Our lord and savior Gaben strikes ${user} with a lighting bolt.`,
    `Sorry, ${interaction.user}, I don't like killing people.`,
    `The bullet missed Harambe and hit ${user} instead. Yay for Harambe!`,
    `While performing colonoscopy on an elephant, ${user} gets their head stuck in the elephants rectum and chokes.`
  ]

  client.embed(
    {
      title: `🔫・Kill`,
      desc: `${kills[Math.floor(Math.random() * kills.length)]}`,
      type: 'editreply'
    },
    interaction
  )
}
