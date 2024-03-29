import { PuzzleItem } from '../util/types';
import {
  tutorial1,
  tutorial2,
  tutorial3,
  chick,
  chicken,
  cow,
  cat,
  chef,
  dog,
  duck,
  farmer,
  fox,
  goat,
  goose,
  house,
  pig,
  rock,
  sheep,
  shrub,
  axe,
  bacon,
  beanstalk,
  beat,
  carrot,
  corn,
  hatchet,
  meat,
  pail,
  peas,
  pepper,
  pickaxe,
  plum,
  potato,
  reeds,
  sickle,
  tomato,
  wheat,
  balloon,
  banana,
  batter,
  battery,
  bean,
  beastblood,
  beastbone,
  beasthide,
  beastmeat,
  belt,
  berry,
  birdhouse,
  blanket,
  bugzapper,
  bug,
  butter,
  butterflynet,
  chopsticks,
  cinnamon,
  clam,
  clay,
  cloth,
  coconut,
  coffeebeans,
  cotton,
  crab,
  cupcake,
  diamond,
  dough,
  egg,
  fur,
  fish,
  flour,
  flower,
  fruitsalad,
  glass,
  glue,
  grass,
  hammer,
  hardcandy,
  herbs,
  icecream,
  integratedcircuit,
  junkparts,
  knife,
  lace,
  lemon,
  magicalpowder,
  markers,
  melon,
  milk,
  mug,
  nails,
  octopus,
  paint,
  photoframe,
  picnicbasket,
  pie,
  ramen,
  ricebowl,
  rope,
  salt,
  scissors,
  seashell,
  shinystone,
  silk,
  stew,
  stickers,
  string,
  sugar,
  sugarcane,
  teabag,
  tropicaljuice,
  umbrella,
  uselesspoo,
  vanilla,
  water,
  wood,
} from './nonograms';

export const puzzles: Record<string, Record<string, PuzzleItem>> = {
  tutorial: {
    tutorial1: {
      id: 'tutorial1',
      name: 'The Line',
      grid: tutorial1,
      image: '/art/tutorial/line.svg',
      requires: 0,
    },
    tutorial2: {
      id: 'tutorial2',
      name: 'The Square',
      grid: tutorial2,
      image: '/art/tutorial/square.svg',
      requires: 1,
    },
    tutorial3: {
      id: 'tutorial3',
      name: 'Happy Face',
      grid: tutorial3,
      image: '/art/tutorial/happy.svg',
      requires: 2,
    },
  },
  farm: {
    chick: {
      id: 'chick',
      name: 'Chick',
      grid: chick,
      image: '/art/8x8/farm/chick.png',
      requires: 3,
    },
    chicken: {
      id: 'chicken',
      name: 'Chicken',
      grid: chicken,
      image: '/art/8x8/farm/chicken.png',
      requires: 3,
    },
    cow: {
      id: 'cow',
      name: 'cow',
      grid: cow,
      image: '/art/8x8/farm/cow.png',
      requires: 3,
    },
    cat: {
      id: 'cat',
      name: 'cat',
      grid: cat,
      image: '/art/8x8/farm/cat.png',
      requires: 4,
    },
    chef: {
      id: 'chef',
      name: 'chef',
      grid: chef,
      image: '/art/8x8/farm/chef.png',
      requires: 4,
    },
    dog: {
      id: 'dog',
      name: 'dog',
      grid: dog,
      image: '/art/8x8/farm/dog.png',
      requires: 4,
    },
    duck: {
      id: 'duck',
      name: 'duck',
      grid: duck,
      image: '/art/8x8/farm/duck.png',
      requires: 5,
    },
    farmer: {
      id: 'farmer',
      name: 'farmer',
      grid: farmer,
      image: '/art/8x8/farm/farmer.png',
      requires: 5,
    },
    fox: {
      id: 'fox',
      name: 'fox',
      grid: fox,
      image: '/art/8x8/farm/fox.png',
      requires: 6,
    },
    goat: {
      id: 'goat',
      name: 'goat',
      grid: goat,
      image: '/art/8x8/farm/goat.png',
      requires: 7,
    },
    goose: {
      id: 'goose',
      name: 'goose',
      grid: goose,
      image: '/art/8x8/farm/goose.png',
      requires: 8,
    },
    house: {
      id: 'house',
      name: 'house',
      grid: house,
      image: '/art/8x8/farm/house.png',
      requires: 8,
    },
    pig: {
      id: 'pig',
      name: 'pig',
      grid: pig,
      image: '/art/8x8/farm/pig.png',
      requires: 9,
    },
    rock: {
      id: 'rock',
      name: 'rock',
      grid: rock,
      image: '/art/8x8/farm/rock.png',
      requires: 10,
    },
    sheep: {
      id: 'sheep',
      name: 'sheep',
      grid: sheep,
      image: '/art/8x8/farm/sheep.png',
      requires: 10,
    },
    shrub: {
      id: 'shrub',
      name: 'shrub',
      grid: shrub,
      image: '/art/8x8/farm/shrub.png',
      requires: 10,
    },
    axe: {
      id: 'axe',
      name: 'axe',
      grid: axe,
      image: '/art/8x8/farm/axe.png',
      requires: 10,
    },
    bacon: {
      id: 'bacon',
      name: 'bacon',
      grid: bacon,
      image: '/art/8x8/farm/bacon.png',
      requires: 5,
    },
    beanstalk: {
      id: 'beanstalk',
      name: 'beanstalk',
      grid: beanstalk,
      image: '/art/8x8/farm/beanstalk.png',
      requires: 6,
    },
    beat: {
      id: 'beat',
      name: 'beat',
      grid: beat,
      image: '/art/8x8/farm/beat.png',
      requires: 12,
    },
    carrot: {
      id: 'carrot',
      name: 'carrot',
      grid: carrot,
      image: '/art/8x8/farm/carrot.png',
      requires: 13,
    },
    corn: {
      id: 'corn',
      name: 'corn',
      grid: corn,
      image: '/art/8x8/farm/corn.png',
      requires: 14,
    },
    hatchet: {
      id: 'hatchet',
      name: 'hatchet',
      grid: hatchet,
      image: '/art/8x8/farm/hatchet.png',
      requires: 15,
    },
    meat: {
      id: 'meat',
      name: 'meat',
      grid: meat,
      image: '/art/8x8/farm/meat.png',
      requires: 16,
    },
    pail: {
      id: 'pail',
      name: 'pail',
      grid: pail,
      image: '/art/8x8/farm/pail.png',
      requires: 17,
    },
    peas: {
      id: 'peas',
      name: 'peas',
      grid: peas,
      image: '/art/8x8/farm/peas.png',
      requires: 18,
    },
    pepper: {
      id: 'pepper',
      name: 'pepper',
      grid: pepper,
      image: '/art/8x8/farm/pepper.png',
      requires: 19,
    },
    pickaxe: {
      id: 'pickaxe',
      name: 'pickaxe',
      grid: pickaxe,
      image: '/art/8x8/farm/pickaxe.png',
      requires: 20,
    },
    plum: {
      id: 'plum',
      name: 'plum',
      grid: plum,
      image: '/art/8x8/farm/plum.png',
      requires: 21,
    },
    potato: {
      id: 'potato',
      name: 'potato',
      grid: potato,
      image: '/art/8x8/farm/potato.png',
      requires: 22,
    },
    reeds: {
      id: 'reeds',
      name: 'reeds',
      grid: reeds,
      image: '/art/8x8/farm/reeds.png',
      requires: 23,
    },
    sickle: {
      id: 'sickle',
      name: 'sickle',
      grid: sickle,
      image: '/art/8x8/farm/sickle.png',
      requires: 24,
    },
    tomato: {
      id: 'tomato',
      name: 'tomato',
      grid: tomato,
      image: '/art/8x8/farm/tomato.png',
      requires: 25,
    },
    wheat: {
      id: 'wheat',
      name: 'wheat',
      grid: wheat,
      image: '/art/8x8/farm/wheat.png',
      requires: 26,
    },
  },
  assorted: {
    balloon: {
      id: 'balloon',
      name: 'balloon',
      grid: balloon,
      image: '/art/16x16/assorted/balloon.png',
      requires: 5,
    },
    banana: {
      id: 'banana',
      name: 'banana',
      grid: banana,
      image: '/art/16x16/assorted/banana.png',
      requires: 9,
    },
    batter: {
      id: 'batter',
      name: 'batter',
      grid: batter,
      image: '/art/16x16/assorted/batter.png',
      requires: 13,
    },
    battery: {
      id: 'battery',
      name: 'battery',
      grid: battery,
      image: '/art/16x16/assorted/battery.png',
      requires: 17,
    },
    bean: {
      id: 'bean',
      name: 'bean',
      grid: bean,
      image: '/art/16x16/assorted/bean.png',
      requires: 21,
    },
    beastblood: {
      id: 'beastblood',
      name: 'beastblood',
      grid: beastblood,
      image: '/art/16x16/assorted/beastblood.png',
      requires: 25,
    },
    beastbone: {
      id: 'beastbone',
      name: 'beastbone',
      grid: beastbone,
      image: '/art/16x16/assorted/beastbone.png',
      requires: 29,
    },
    beasthide: {
      id: 'beasthide',
      name: 'beasthide',
      grid: beasthide,
      image: '/art/16x16/assorted/beasthide.png',
      requires: 33,
    },
    beastmeat: {
      id: 'beastmeat',
      name: 'beastmeat',
      grid: beastmeat,
      image: '/art/16x16/assorted/beastmeat.png',
      requires: 37,
    },
    belt: {
      id: 'belt',
      name: 'belt',
      grid: belt,
      image: '/art/16x16/assorted/belt.png',
      requires: 41,
    },
    berry: {
      id: 'berry',
      name: 'berry',
      grid: berry,
      image: '/art/16x16/assorted/berry.png',
      requires: 45,
    },
    birdhouse: {
      id: 'birdhouse',
      name: 'birdhouse',
      grid: birdhouse,
      image: '/art/16x16/assorted/birdhouse.png',
      requires: 6,
    },
    blanket: {
      id: 'blanket',
      name: 'blanket',
      grid: blanket,
      image: '/art/16x16/assorted/blanket.png',
      requires: 10,
    },
    bugzapper: {
      id: 'bugzapper',
      name: 'bugzapper',
      grid: bugzapper,
      image: '/art/16x16/assorted/bugzapper.png',
      requires: 14,
    },
    bug: {
      id: 'bug',
      name: 'bug',
      grid: bug,
      image: '/art/16x16/assorted/bug.png',
      requires: 18,
    },
    butter: {
      id: 'butter',
      name: 'butter',
      grid: butter,
      image: '/art/16x16/assorted/butter.png',
      requires: 22,
    },
    butterflynet: {
      id: 'butterflynet',
      name: 'butterflynet',
      grid: butterflynet,
      image: '/art/16x16/assorted/butterflynet.png',
      requires: 26,
    },
    chopsticks: {
      id: 'chopsticks',
      name: 'chopsticks',
      grid: chopsticks,
      image: '/art/16x16/assorted/chopsticks.png',
      requires: 30,
    },
    cinnamon: {
      id: 'cinnamon',
      name: 'cinnamon',
      grid: cinnamon,
      image: '/art/16x16/assorted/cinnamon.png',
      requires: 34,
    },
    clam: {
      id: 'clam',
      name: 'clam',
      grid: clam,
      image: '/art/16x16/assorted/clam.png',
      requires: 38,
    },
    clay: {
      id: 'clay',
      name: 'clay',
      grid: clay,
      image: '/art/16x16/assorted/clay.png',
      requires: 42,
    },
    cloth: {
      id: 'cloth',
      name: 'cloth',
      grid: cloth,
      image: '/art/16x16/assorted/cloth.png',
      requires: 46,
    },
    coconut: {
      id: 'coconut',
      name: 'coconut',
      grid: coconut,
      image: '/art/16x16/assorted/coconut.png',
      requires: 7,
    },
    coffeebeans: {
      id: 'coffeebeans',
      name: 'coffeebeans',
      grid: coffeebeans,
      image: '/art/16x16/assorted/coffeebeans.png',
      requires: 11,
    },
    cotton: {
      id: 'cotton',
      name: 'cotton',
      grid: cotton,
      image: '/art/16x16/assorted/cotton.png',
      requires: 15,
    },
    crab: {
      id: 'crab',
      name: 'crab',
      grid: crab,
      image: '/art/16x16/assorted/crab.png',
      requires: 19,
    },
    cupcake: {
      id: 'cupcake',
      name: 'cupcake',
      grid: cupcake,
      image: '/art/16x16/assorted/cupcake.png',
      requires: 23,
    },
    diamond: {
      id: 'diamond',
      name: 'diamond',
      grid: diamond,
      image: '/art/16x16/assorted/diamond.png',
      requires: 27,
    },
    dough: {
      id: 'dough',
      name: 'dough',
      grid: dough,
      image: '/art/16x16/assorted/dough.png',
      requires: 31,
    },
    egg: {
      id: 'egg',
      name: 'egg',
      grid: egg,
      image: '/art/16x16/assorted/egg.png',
      requires: 35,
    },
    fur: {
      id: 'fur',
      name: 'fur',
      grid: fur,
      image: '/art/16x16/assorted/fur.png',
      requires: 39,
    },
    fish: {
      id: 'fish',
      name: 'fish',
      grid: fish,
      image: '/art/16x16/assorted/fish.png',
      requires: 43,
    },
    flour: {
      id: 'flour',
      name: 'flour',
      grid: flour,
      image: '/art/16x16/assorted/flour.png',
      requires: 47,
    },
    flower: {
      id: 'flower',
      name: 'flower',
      grid: flower,
      image: '/art/16x16/assorted/flower.png',
      requires: 8,
    },
    fruitsalad: {
      id: 'fruitsalad',
      name: 'fruitsalad',
      grid: fruitsalad,
      image: '/art/16x16/assorted/fruitsalad.png',
      requires: 12,
    },
    glass: {
      id: 'glass',
      name: 'glass',
      grid: glass,
      image: '/art/16x16/assorted/glass.png',
      requires: 16,
    },
    glue: {
      id: 'glue',
      name: 'glue',
      grid: glue,
      image: '/art/16x16/assorted/glue.png',
      requires: 20,
    },
    grass: {
      id: 'grass',
      name: 'grass',
      grid: grass,
      image: '/art/16x16/assorted/grass.png',
      requires: 24,
    },
    hammer: {
      id: 'hammer',
      name: 'hammer',
      grid: hammer,
      image: '/art/16x16/assorted/hammer.png',
      requires: 28,
    },
    hardcandy: {
      id: 'hardcandy',
      name: 'hardcandy',
      grid: hardcandy,
      image: '/art/16x16/assorted/hardcandy.png',
      requires: 32,
    },
    herbs: {
      id: 'herbs',
      name: 'herbs',
      grid: herbs,
      image: '/art/16x16/assorted/herbs.png',
      requires: 36,
    },
    icecream: {
      id: 'icecream',
      name: 'icecream',
      grid: icecream,
      image: '/art/16x16/assorted/icecream.png',
      requires: 40,
    },
    integratedcircuit: {
      id: 'integratedcircuit',
      name: 'integratedcircuit',
      grid: integratedcircuit,
      image: '/art/16x16/assorted/integratedcircuit.png',
      requires: 44,
    },
    junkparts: {
      id: 'junkparts',
      name: 'junkparts',
      grid: junkparts,
      image: '/art/16x16/assorted/junkparts.png',
      requires: 48,
    },

    knife: {
      id: 'knife',
      name: 'knife',
      grid: knife,
      image: '/art/16x16/assorted/knife.png',
      requires: 10,
    },
    lace: {
      id: 'lace',
      name: 'lace',
      grid: lace,
      image: '/art/16x16/assorted/lace.png',
      requires: 13,
    },
    lemon: {
      id: 'lemon',
      name: 'lemon',
      grid: lemon,
      image: '/art/16x16/assorted/lemon.png',
      requires: 16,
    },
    magicalpowder: {
      id: 'magicalpowder',
      name: 'magicalpowder',
      grid: magicalpowder,
      image: '/art/16x16/assorted/magicalpowder.png',
      requires: 19,
    },
    markers: {
      id: 'markers',
      name: 'markers',
      grid: markers,
      image: '/art/16x16/assorted/markers.png',
      requires: 22,
    },
    melon: {
      id: 'melon',
      name: 'melon',
      grid: melon,
      image: '/art/16x16/assorted/melon.png',
      requires: 25,
    },
    milk: {
      id: 'milk',
      name: 'milk',
      grid: milk,
      image: '/art/16x16/assorted/milk.png',
      requires: 28,
    },
    mug: {
      id: 'mug',
      name: 'mug',
      grid: mug,
      image: '/art/16x16/assorted/mug.png',
      requires: 31,
    },
    nails: {
      id: 'nails',
      name: 'nails',
      grid: nails,
      image: '/art/16x16/assorted/nails.png',
      requires: 34,
    },
    octopus: {
      id: 'octopus',
      name: 'octopus',
      grid: octopus,
      image: '/art/16x16/assorted/octopus.png',
      requires: 37,
    },
    paint: {
      id: 'paint',
      name: 'paint',
      grid: paint,
      image: '/art/16x16/assorted/paint.png',
      requires: 40,
    },
    photoframe: {
      id: 'photoframe',
      name: 'photoframe',
      grid: photoframe,
      image: '/art/16x16/assorted/photoframe.png',
      requires: 43,
    },
    picnicbasket: {
      id: 'picnicbasket',
      name: 'picnicbasket',
      grid: picnicbasket,
      image: '/art/16x16/assorted/picnicbasket.png',
      requires: 46,
    },
    pie: {
      id: 'pie',
      name: 'pie',
      grid: pie,
      image: '/art/16x16/assorted/pie.png',
      requires: 49,
    },
    ramen: {
      id: 'ramen',
      name: 'ramen',
      grid: ramen,
      image: '/art/16x16/assorted/ramen.png',
      requires: 15,
    },
    ricebowl: {
      id: 'ricebowl',
      name: 'ricebowl',
      grid: ricebowl,
      image: '/art/16x16/assorted/ricebowl.png',
      requires: 20,
    },
    rope: {
      id: 'rope',
      name: 'rope',
      grid: rope,
      image: '/art/16x16/assorted/rope.png',
      requires: 25,
    },
    salt: {
      id: 'salt',
      name: 'salt',
      grid: salt,
      image: '/art/16x16/assorted/salt.png',
      requires: 30,
    },
    scissors: {
      id: 'scissors',
      name: 'scissors',
      grid: scissors,
      image: '/art/16x16/assorted/scissors.png',
      requires: 35,
    },
    seashell: {
      id: 'seashell',
      name: 'seashell',
      grid: seashell,
      image: '/art/16x16/assorted/seashell.png',
      requires: 40,
    },
    shinystone: {
      id: 'shinystone',
      name: 'shinystone',
      grid: shinystone,
      image: '/art/16x16/assorted/shinystone.png',
      requires: 45,
    },
    silk: {
      id: 'silk',
      name: 'silk',
      grid: silk,
      image: '/art/16x16/assorted/silk.png',
      requires: 50,
    },
    stew: {
      id: 'stew',
      name: 'stew',
      grid: stew,
      image: '/art/16x16/assorted/stew.png',
      requires: 12,
    },
    stickers: {
      id: 'stickers',
      name: 'stickers',
      grid: stickers,
      image: '/art/16x16/assorted/stickers.png',
      requires: 14,
    },
    string: {
      id: 'string',
      name: 'string',
      grid: string,
      image: '/art/16x16/assorted/string.png',
      requires: 16,
    },
    sugar: {
      id: 'sugar',
      name: 'sugar',
      grid: sugar,
      image: '/art/16x16/assorted/sugar.png',
      requires: 18,
    },
    sugarcane: {
      id: 'sugarcane',
      name: 'sugarcane',
      grid: sugarcane,
      image: '/art/16x16/assorted/sugarcane.png',
      requires: 20,
    },
    teabag: {
      id: 'teabag',
      name: 'teabag',
      grid: teabag,
      image: '/art/16x16/assorted/teabag.png',
      requires: 22,
    },
    tropicaljuice: {
      id: 'tropicaljuice',
      name: 'tropicaljuice',
      grid: tropicaljuice,
      image: '/art/16x16/assorted/tropicaljuice.png',
      requires: 24,
    },
    umbrella: {
      id: 'umbrella',
      name: 'umbrella',
      grid: umbrella,
      image: '/art/16x16/assorted/umbrella.png',
      requires: 26,
    },
    uselesspoo: {
      id: 'uselesspoo',
      name: 'uselesspoo',
      grid: uselesspoo,
      image: '/art/16x16/assorted/uselesspoo.png',
      requires: 28,
    },
    vanilla: {
      id: 'vanilla',
      name: 'vanilla',
      grid: vanilla,
      image: '/art/16x16/assorted/vanilla.png',
      requires: 30,
    },
    water: {
      id: 'water',
      name: 'water',
      grid: water,
      image: '/art/16x16/assorted/water.png',
      requires: 32,
    },
    wood: {
      id: 'wood',
      name: 'wood',
      grid: wood,
      image: '/art/16x16/assorted/wood.png',
      requires: 34,
    },
  },
};

export const hasPuzzle = (id: string): boolean => {
  const puzzle = Object.values(puzzles).flatMap((p) => Object.values(p));
  return puzzle.some((p) => p.id === id);
};

export const findPuzzle = (id: string): PuzzleItem => {
  // puzzles should have unique id's even between themes.
  const puzzle = Object.values(puzzles).flatMap((p) => Object.values(p));
  const found = puzzle.find((p) => p.id === id);
  if (!found) throw new Error(`Puzzle ${id} not found`);
  return found;
};

export const listPuzzles = (): PuzzleItem[] => {
  const p = Object.values(puzzles).flatMap((p) => Object.values(p));
  // sort by requirements
  p.sort((a, b) => a.requires - b.requires);
  return p;
};
