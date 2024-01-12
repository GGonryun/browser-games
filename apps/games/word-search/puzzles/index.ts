export type Puzzle = {
  theme: string;
  words: string[];
  size: number;
};

export const puzzles: Puzzle[] = [
  {
    theme: 'Letter A',
    size: 4,
    words: ['ACE', 'AIR', 'AIM', 'ARE', 'ART', 'APE', 'ARM'],
  },
  {
    theme: 'Letter B',
    size: 4,
    words: ['BEE', 'TREE', 'SEE', 'TRY', 'FLY'],
  },
  {
    theme: 'Animals 1',
    size: 5,
    words: ['CAT', 'DOG', 'RAT', 'BAT', 'HAT', 'MAT'],
  },
  {
    theme: "Rhymes with 'OR'",
    size: 5,
    words: ['DOOR', 'FLOOR', 'POOR', 'BOAR', 'ROAR'],
  },
  {
    theme: 'Body Parts 1',
    size: 5,
    words: ['EAR', 'TOE', 'EYE', 'LIP', 'ARM', 'LEG'],
  },
  {
    theme: 'Letter F',
    size: 6,
    words: ['FAR', 'FAME', 'FREE', 'FIRE'],
  },
  {
    theme: 'Letter G',
    size: 6,
    words: ['GUN', 'GUM', 'GEM', 'GAP', 'GAL', 'GOD', 'GAS', 'GAG'],
  },
  {
    theme: 'Fruits 1',
    size: 10,
    words: [
      'APPLE',
      'BANANA',
      'CHERRY',
      'GRAPE',
      'ORANGE',
      'PEAR',
      'MELON',
      'AVOCADO',
      'KIWI',
    ],
  },
  {
    theme: 'Fish 1',
    size: 11,
    words: [
      'TROUT',
      'SALMON',
      'BASS',
      'PERCH',
      'COD',
      'TUNA',
      'PIKE',
      'CARP',
      'EEL',
      'GOLDFISH',
      'CATFISH',
      'SWORDFISH',
    ],
  },
  {
    theme: 'Car Parts 1',
    size: 11,
    words: [
      'ENGINE',
      'BRAKE',
      'WHEEL',
      'STEERING',
      'BATTERY',
      'LIGHTS',
      'RADIO',
      'WIPERS',
      'MIRROR',
      'GEARBOX',
    ],
  },
  {
    theme: 'Desserts 1',
    size: 12,
    words: [
      'PIE',
      'CAKE',
      'CANDY',
      'COOKIE',
      'BROWNIE',
      'PUDDING',
      'CUPCAKE',
      'DONUT',
      'CUSTARD',
      'FUDGE',
      'BISCUIT',
    ],
  },
  {
    theme: 'Musical Instruments 1',
    size: 12,
    words: [
      'BANJO',
      'BASS',
      'CELLO',
      'CLARINET',
      'DRUM',
      'FLUTE',
      'GUITAR',
      'HARP',
      'HORN',
      'PIANO',
    ],
  },
  {
    theme: 'Insects 1',
    size: 12,
    words: [
      'BEETLE',
      'BUTTERFLY',
      'CENTIPEDE',
      'DRAGONFLY',
      'EARWIG',
      'FIREANT',
      'FLEA',
      'FLY',
      'LADYBUG',
      'LOCUST',
      'MANTIS',
      'MOSQUITO',
      'MOTH',
    ],
  },
  {
    theme: 'Flowers 1',
    size: 13,
    words: [
      'ROSE',
      'TULIP',
      'DAISY',
      'LILY',
      'VIOLET',
      'DAFFODIL',
      'ORCHID',
      'LAVENDER',
      'LILAC',
      'SUNFLOWER',
      'WISTERIA',
      'HYDRANGEA',
    ],
  },
  {
    theme: 'Insects 2',
    size: 12,
    words: [
      'SCORPION',
      'SPIDER',
      'TARANTULA',
      'WASP',
      'WORM',
      'ANT',
      'APHID',
      'BEE',
      'CICADA',
      'CRICKET',
      'HORNET',
      'LICE',
      'BEDBUG',
    ],
  },
  {
    theme: 'Dairy 1',
    size: 12,
    words: [
      'BUTTER',
      'CHEESE',
      'CREAM',
      'EGGS',
      'MILK',
      'YOGURT',
      'CUSTARD',
      'COTTAGE',
      'MOZZARELLA',
      'PARMESAN',
    ],
  },
  {
    theme: "Rhymes with 'AT'",
    size: 12,
    words: [
      'CHAT',
      'FLAT',
      'THAT',
      'BRAT',
      'SLAT',
      'SCAT',
      'SPAT',
      // LONGER WORDS
      'COMBAT',
      'DIPLOMAT',
      'FORMAT',
      'CONCAT',
      'DEBATE',
      'RELATE',
      'CREATE',
      'ESTATE',
    ],
  },

  {
    theme: 'Flowers 2',
    size: 13,
    words: [
      'MARIGOLD',
      'PEONY',
      'PETUNIA',
      'PANSY',
      'ASTER',
      'BEGONIA',
      'CARNATION',
      'DAHLIA',
      'HYACINTH',
      'IRIS',
      'JASMINE',
      'LARKSPUR',
      'MAGNOLIA',
      'ZINNIA',
    ],
  },
  {
    theme: 'Vehicles 1',
    size: 12,
    words: [
      'CAR',
      'BUS',
      'VAN',
      'TRUCK',
      'TRAIN',
      'BIKE',
      'SHIP',
      'PLANE',
      'TAXI',
      'BOAT',
      'JEEP',
      'SCOOTER',
    ],
  },
  {
    theme: 'Body Parts 2',
    size: 13,
    words: [
      'HEAD',
      'NECK',
      'BACK',
      'SHOULDER',
      'ARM',
      'LEG',
      'FOOT',
      'HAND',
      'THUMB',
      'CHEST',
      'HIP',
      'KNEE',
    ],
  },
  {
    theme: 'Vegetables 1',
    size: 13,
    words: [
      'CARROT',
      'CORN',
      'CUCUMBER',
      'ONION',
      'PEA',
      'POTATO',
      'TOMATO',
      'BEAN',
      'LETTUCE',
      'PEPPER',
      'RADISH',
      'SPINACH',
    ],
  },
  {
    theme: "Rhymes with 'ING'",
    size: 13,
    words: [
      'RING',
      'SING',
      'KING',
      'THING',
      'WING',
      'BRING',
      'FLING',
      'CLING',
      'STING',
      'SWING',
      'BLING',
      'SLING',
    ],
  },
  {
    theme: 'Planets',
    size: 11,
    words: [
      'MERCURY',
      'VENUS',
      'EARTH',
      'MARS',
      'JUPITER',
      'SATURN',
      'URANUS',
      'NEPTUNE',
      'PLUTO',
    ],
  },
  {
    theme: 'Days of the Week',
    size: 11,
    words: [
      'SUNDAY',
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
      'FUNDAY',
    ],
  },
  {
    theme: 'Spooky Words',
    size: 13,
    words: [
      'BLOOD',
      'BONES',
      'DEATH',
      'GHOST',
      'GRAVE',
      'HAUNT',
      'SCARY',
      'SKELETON',
      'SKULL',
      'TOMB',
      'VAMPIRE',
      'WITCH',
      'ZOMBIE',
    ],
  },
  {
    theme: 'eSports',
    size: 13,
    words: [
      'DOTA',
      'FORTNITE',
      'OVERWATCH',
      'CSGO',
      'APEX',
      'HEARTHSTONE',
      'SMITE',
      'ROCKET',
      'LEAGUE',
      'CALL',
      'DUTY',
      'VALORANT',
    ],
  },
  {
    theme: 'Famous Artists',
    size: 13,
    words: [
      'PICASSO',
      'MICHELANGELO',
      'MONET',
      'VAN',
      'GOGH',
      'REMBRANDT',
      'WARHOL',
      'DA',
      'VINCI',
      'POLLOCK',
      'DALI',
      'KANDINSKY',
      'CEZANNE',
    ],
  },
  {
    theme: 'Basketball Teams',
    size: 13,
    words: [
      'BULLS',
      'CELTICS',
      'KNICKS',
      'LAKERS',
      'NETS',
      'PISTONS',
      'ROCKETS',
      'SPURS',
      'SUNS',
      'WARRIORS',
      'WIZARDS',
      'BUCKS',
      'CLIPPERS',
    ],
  },
  {
    theme: 'Weather',
    size: 13,
    words: [
      'RAIN',
      'SUN',
      'SNOW',
      'WIND',
      'CLOUD',
      'STORM',
      'HAIL',
      'FOG',
      'SLEET',
      'THUNDER',
      'LIGHTNING',
      'TORNADO',
      'HURRICANE',
    ],
  },
  {
    theme: 'Spices',
    size: 13,
    words: [
      'CINNAMON',
      'CLOVE',
      'GINGER',
      'NUTMEG',
      'PEPPER',
      'SAFFRON',
      'TURMERIC',
      'ALLSPICE',
      'ANISE',
      'BASIL',
      'CARDAMOM',
      'CUMIN',
      'CORIANDER',
    ],
  },
  {
    theme: 'Pokemon 1',
    size: 14,
    words: [
      'PIKACHU',
      'CHARIZARD',
      'BULBASAUR',
      'SQUIRTLE',
      'EEVEE',
      'MEW',
      'MEWTWO',
      'CHARMANDER',
      'JIGGLYPUFF',
      'SNORLAX',
      'MAGIKARP',
      'GYARADOS',
      'ONIX',
    ],
  },
  {
    theme: 'States 1',
    size: 14,
    words: [
      'ALABAMA',
      'CALIFORNIA',
      'FLORIDA',
      'ILLINOIS',
      'KENTUCKY',
      'MASSACHUSETTS',
      'MISSOURI',
      'OHIO',
      'OKLAHOMA',
      'OREGON',
      'TENNESSEE',
      'TEXAS',
      'WYOMING',
    ],
  },
  {
    theme: 'Palindromes',
    size: 13,
    words: [
      'LEVEL',
      'RACECAR',
      'RADAR',
      'KAYAK',
      'MADAM',
      'REFER',
      'ROTATOR',
      'SAGAS',
      'SOLOS',
      'TENET',
      'WOW',
      'DEED',
      'EYE',
    ],
  },
  {
    theme: 'Parts of a Computer',
    size: 13,
    words: [
      'CPU',
      'RAM',
      'GPU',
      'HARD',
      'DRIVE',
      'MOTHERBOARD',
      'POWER',
      'SUPPLY',
      'FAN',
      'CASE',
      'MONITOR',
      'KEYBOARD',
      'MOUSE',
    ],
  },

  {
    theme: 'Christmas',
    size: 12,
    words: [
      'TREE',
      'STAR',
      'LIGHTS',
      'PRESENTS',
      'SANTA',
      'ELVES',
      'REINDEER',
      'SLEIGH',
      'CANDY',
      'CANE',
      'STOCKING',
      'ORNAMENT',
    ],
  },
  {
    theme: "Rhymes with 'OW'",
    size: 10,
    words: [
      'BOW',
      'COW',
      'NOW',
      'WOW',
      'BROW',
      'CHOW',
      'CLOW',
      'CROW',
      'AVOW',
      'ALLOW',
      'ENDOW',
      'FALLOW',
      'GALLOW',
    ],
  },
  {
    theme: 'Famous Authors',
    size: 13,
    words: [
      'AUSTEN',
      'DICKENS',
      'ORWELL',
      'TOLKIEN',
      'TWAIN',
      'STEINBECK',
      'HUXLEY',
      'SHELLEY',
      'HAWTHORNE',
      'POE',
      'BRONTE',
      'SALINGER',
      'HUGO',
    ],
  },
  {
    theme: 'Friendship',
    size: 12,
    words: [
      'BOND',
      'TRUST',
      'CARE',
      'HELP',
      'LISTEN',
      'SHARE',
      'HONEST',
      'KIND',
      'LOYAL',
      'RESPECT',
      'SUPPORT',
      'LOVE',
    ],
  },
  {
    theme: 'Camping',
    size: 12,
    words: [
      'TENT',
      'FIRE',
      'SLEEPING',
      'BAG',
      'FLASHLIGHT',
      'KNIFE',
      'HAMMOCK',
      'COOLER',
      'STOVE',
      'TARP',
      'MATCHES',
      'ROPE',
    ],
  },
  {
    theme: 'Pets',
    size: 12,
    words: [
      'CAT',
      'DOG',
      'BIRD',
      'FISH',
      'RABBIT',
      'HAMSTER',
      'LIZARD',
      'FERRET',
      'TURTLE',
      'SNAKE',
      'GUINEA',
      'PIG',
    ],
  },
  {
    theme: 'Complex Words 1',
    size: 14,
    words: [
      'COMPLEX',
      'DIFFICULT',
      'ABSTRACT',
      'CHALLENGING',
      'CONFUSING',
      'COMPLICATED',
      'CONVOLUTED',
      'INTRICATE',
      'INVOLVED',
      'PERPLEXING',
      'TRICKY',
    ],
  },
  {
    theme: 'Gemstones',
    size: 12,
    words: [
      'DIAMOND',
      'EMERALD',
      'RUBY',
      'SAPPHIRE',
      'TOPAZ',
      'AMETHYST',
      'OPAL',
      'PEARL',
      'JADE',
      'QUARTZ',
      'AGATE',
      'GARNET',
    ],
  },
  {
    theme: 'Winter',
    size: 12,
    words: [
      'SNOW',
      'ICE',
      'COLD',
      'FROST',
      'FREEZE',
      'WIND',
      'BLIZZARD',
      'SLEET',
      'SLUSH',
      'SNOWMAN',
      'SNOWBALL',
      'MITTEN',
    ],
  },
  {
    theme: 'At The Beach',
    size: 12,
    words: [
      'SAND',
      'SHELL',
      'WAVE',
      'SUN',
      'OCEAN',
      'TIDE',
      'SWIM',
      'TOWEL',
      'UMBRELLA',
      'SUNSCREEN',
      'SUNGLASSES',
      'CRAB',
    ],
  },
  {
    theme: 'At The Library',
    size: 12,
    words: [
      'BOOK',
      'READ',
      'QUIET',
      'STUDY',
      'SHELF',
      'LIBRARIAN',
      'COMPUTER',
      'CARD',
      'DESK',
      'CHAIR',
      'MAGAZINE',
      'NEWSPAPER',
    ],
  },
  {
    theme: 'Disc Golf',
    size: 12,
    words: [
      'DISC',
      'GOLF',
      'BASKET',
      'TEE',
      'FAIRWAY',
      'PUTT',
      'DRIVE',
      'DISCRAFT',
      'INNOVA',
      'DYNAMIC',
      'LATITUDE',
      'WESTSIDE',
    ],
  },
  {
    theme: 'Social Events',
    size: 12,
    words: [
      'PARTY',
      'WEDDING',
      'DINNER',
      'DANCE',
      'RECEPTION',
      'CELEBRATION',
      'GATHERING',
      'FESTIVAL',
      'CONCERT',
      'REUNION',
      'GALA',
      'PICNIC',
    ],
  },
  {
    theme: "Earth's Layers",
    size: 14,
    words: [
      'CRUST',
      'MANTLE',
      'OUTER',
      'CORE',
      'INNER',
      'LITHOSPHERE',
      'ASTHENOSPHERE',
      'MESOSPHERE',
      'TROPOSPHERE',
      'STRATOSPHERE',
      'IONOSPHERE',
      'EXOSPHERE',
    ],
  },
  {
    theme: 'States 2',
    size: 12,
    words: [
      'ALASKA',
      'COLORADO',
      'GEORGIA',
      'INDIANA',
      'LOUISIANA',
      'MICHIGAN',
      'MONTANA',
      'RHODE',
      'ISLAND',
      'UTAH',
      'VERMONT',
      'WASHINGTON',
    ],
  },

  {
    theme: 'Dinosaurs',
    size: 13,
    words: [
      'TRICERATOPS',
      'BRONTOSAURUS',
      'STEGOSAURUS',
      'VELOCIRAPTOR',
      'PTERODACTYL',
      'TYRANNOSAURUS',
      'APATOSAURUS',
      'SPINOSAURUS',
      'IGUANODON',
    ],
  },
  {
    theme: 'On Sale',
    size: 12,
    words: [
      'SALE',
      'DISCOUNT',
      'CLEARANCE',
      'COUPON',
      'BARGAIN',
      'MARKDOWN',
      'REDUCTION',
      'LIQUIDATION',
      'SPECIAL',
      'OFFER',
      'DEAL',
      'STEAL',
    ],
  },
  {
    theme: 'Charity',
    size: 12,
    words: [
      'DONATE',
      'GIVE',
      'HELP',
      'SUPPORT',
      'VOLUNTEER',
      'CONTRIBUTE',
      'FUNDRAISE',
      'SPONSOR',
      'AID',
      'ASSIST',
      'RELIEF',
      'SERVICE',
    ],
  },
  {
    theme: 'Months of the Year',
    size: 12,
    words: [
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ],
  },
  {
    theme: 'Holidays',
    size: 14,
    words: [
      'CHRISTMAS',
      'EASTER',
      'THANKSGIVING',
      'HALLOWEEN',
      'VALENTINE',
      'PATRICK',
      'INDEPENDENCE',
      'MEMORIAL',
      'LABOR',
    ],
  },
  {
    theme: 'Shapes',
    size: 12,
    words: [
      'CIRCLE',
      'SQUARE',
      'TRIANGLE',
      'RECTANGLE',
      'OVAL',
      'HEXAGON',
      'PENTAGON',
      'DIAMOND',
      'STAR',
      'CUBE',
      'PYRAMID',
      'CONE',
    ],
  },
  {
    theme: 'Colors',
    size: 12,
    words: [
      'RED',
      'ORANGE',
      'YELLOW',
      'GREEN',
      'BLUE',
      'PURPLE',
      'PINK',
      'BROWN',
      'BLACK',
      'WHITE',
      'GRAY',
      'TAN',
    ],
  },
  {
    theme: 'Numbers',
    size: 12,
    words: [
      'ONE',
      'TWO',
      'THREE',
      'FOUR',
      'FIVE',
      'SIX',
      'SEVEN',
      'EIGHT',
      'NINE',
      'TEN',
      'ELEVEN',
      'TWELVE',
    ],
  },
  {
    theme: 'Weather 2',
    size: 12,
    words: [
      'RAINBOW',
      'SUNSHINE',
      'SNOWFLAKE',
      'BLIZZARD',
      'HURRICANE',
      'TORNADO',
      'THUNDER',
      'LIGHTNING',
      'CLOUDY',
      'SLEET',
      'SUNSET',
      'FOG',
    ],
  },
  {
    theme: 'Animals 2',
    size: 12,
    words: [
      'BEAR',
      'TIGER',
      'LION',
      'ELEPHANT',
      'MONKEY',
      'GIRAFFE',
      'HIPPO',
      'RHINO',
      'CROCODILE',
      'KANGAROO',
      'PENGUIN',
      'ZEBRA',
    ],
  },
  {
    theme: 'Famous Scientists',
    size: 12,
    words: [
      'EINSTEIN',
      'NEWTON',
      'DARWIN',
      'CURIE',
      'GALILEO',
      'HAWKING',
      'TESLA',
      'EDISON',
      'BOHR',
      'PASCAL',
      'BRAHE',
      'GALVANI',
      'HUYGENS',
      'KEPLER',
    ],
  },
  {
    theme: 'Spring',
    size: 14,
    words: [
      'BLOOM',
      'BLOSSOM',
      'BREEZE',
      'BUTTERFLY',
      'CHICK',
      'EASTER',
      'EGG',
      'FLOWER',
      'GRASS',
      'HATCH',
      'LAMB',
      'LEAF',
      'MARCH',
      'MELT',
      'SUNSHINE',
    ],
  },
  {
    theme: 'At The Supermarket',
    size: 12,
    words: [
      'CART',
      'CASHIER',
      'CHECKOUT',
      'COUPON',
      'DEPARTMENT',
      'DISCOUNT',
      'GROCERY',
      'MARKET',
      'PRODUCE',
      'SALE',
      'SHOPPING',
      'STORE',
    ],
  },
  {
    theme: 'Geography',
    size: 12,
    words: [
      'ATLAS',
      'COUNTRY',
      'EARTH',
      'GLOBE',
      'ISLAND',
      'MAP',
      'NATION',
      'OCEAN',
      'PLANET',
      'STATE',
      'WORLD',
      'CONTINENT',
    ],
  },
  {
    theme: 'Wild West',
    size: 12,
    words: [
      'BANDIT',
      'COWBOY',
      'GUN',
      'HORSE',
      'INDIAN',
      'OUTLAW',
      'PONY',
      'RANCH',
      'RODEO',
      'SALOON',
      'SHERIFF',
      'STAGECOACH',
    ],
  },
  {
    theme: 'Human Inventions 1',
    size: 12,
    words: [
      'WHEEL',
      'FIRE',
      'PAPER',
      'GLASS',
      'COMPUTER',
      'CAR',
      'PLANE',
      'PHONE',
      'LIGHT',
      'BULB',
      'CAMERA',
      'BATTERY',
    ],
  },
  {
    theme: 'Social Studies',
    size: 12,
    words: [
      'CITIZEN',
      'CIVICS',
      'CULTURE',
      'ECONOMICS',
      'GEOGRAPHY',
      'GOVERNMENT',
      'HISTORY',
      'POLITICS',
      'RIGHTS',
      'SOCIETY',
      'STATE',
      'WORLD',
    ],
  },
  {
    theme: 'Bees!',
    size: 12,
    words: [
      'BEES',
      'HONEY',
      'HIVE',
      'QUEEN',
      'WORKER',
      'DRONE',
      'POLLEN',
      'NECTAR',
      'FLOWER',
      'STINGER',
      'COMB',
      'BUZZ',
    ],
  },
  {
    theme: 'Creatures of the Deep',
    size: 12,
    words: [
      'SQUID',
      'OCTOPUS',
      'SHARK',
      'JELLYFISH',
      'WHALE',
      'DOLPHIN',
      'LOBSTER',
      'CRAB',
      'SEAL',
      'EEL',
      'STARFISH',
      'CORAL',
    ],
  },

  {
    theme: 'States 4',
    size: 14,
    words: [
      'ARKANSAS',
      'DELAWARE',
      'IDAHO',
      'KANSAS',
      'MARYLAND',
      'MISSISSIPPI',
      'NEVADA',
      'HAWAII',
      'IOWA',
      'MAINE',
      'WISCONSIN',
      'PENNSYLVANIA',
    ],
  },
  {
    theme: 'Summer',
    size: 12,
    words: [
      'SUN',
      'SUNSCREEN',
      'SUNGLASSES',
      'SAND',
      'BEACH',
      'SWIM',
      'POOL',
      'VACATION',
      'ICE',
      'CREAM',
      'LEMONADE',
      'BBQ',
    ],
  },
  {
    theme: 'Deep Space',
    size: 12,
    words: [
      'SUN',
      'MOON',
      'STAR',
      'PLANET',
      'GALAXY',
      'COMET',
      'ASTEROID',
      'METEOR',
      'MILKY',
      'WAY',
      'SOLAR',
      'SYSTEM',
    ],
  },

  {
    theme: 'States 3',
    size: 14,
    words: [
      'ARIZONA',
      'CONNECTICUT',
      'MINNESOTA',
      'NEBRASKA',
      'NORTH',
      'SOUTH',
      'CAROLINA',
      'DAKOTA',
      'WEST',
      'VIRGINIA',
      'NEW',
      'HAMPSHIRE',
      'JERSEY',
      'MEXICO',
      'YORK',
    ],
  },
  {
    theme: 'Human Inventions 2',
    size: 12,
    words: [
      'MUSIC',
      'TELEVISION',
      'RADIO',
      'ROBOT',
      'MOTOR',
      'ENGINE',
      'BICYCLE',
      'CLOCK',
      'MONEY',
      'GUN',
      'ROCKET',
      'LASER',
    ],
  },
  {
    theme: 'At the Amusement Park',
    size: 12,
    words: [
      'ROLLER',
      'COASTER',
      'FERRIS',
      'WHEEL',
      'TICKET',
      'BOOTH',
      'CAROUSEL',
      'COTTON',
      'CANDY',
      'GAMES',
      'MERRY',
      'GO',
      'ROUND',
    ],
  },
  {
    theme: 'Species of Penguin',
    size: 12,
    words: [
      'ADELIE',
      'CHINSTRAP',
      'EMPEROR',
      'GENTOO',
      'KING',
      'MACARONI',
      'ROYAL',
      'SOUTHERN',
      'ROCKHOPPER',
      'FIORDLAND',
      'HUMBOLDT',
      'LITTLE',
    ],
  },
  {
    theme: 'Harry Potter',
    size: 12,
    words: [
      'HARRY',
      'POTTER',
      'DUMBLEDORE',
      'SNAPE',
      'VOLDEMORT',
      'HERMIONE',
      'GRANGER',
      'RON',
      'WEASLEY',
      'DRACO',
      'MALFOY',
      'HAGRID',
    ],
  },
  {
    theme: 'Lord of the Rings',
    size: 12,
    words: [
      'FRODO',
      'BAGGINS',
      'SAMWISE',
      'GAMGEE',
      'GANDALF',
      'ARAGORN',
      'LEGOLAS',
      'GIMLI',
      'BOROMIR',
      'MERRY',
      'PIPPIN',
      'SARUMAN',
    ],
  },
  {
    theme: 'Star Wars',
    size: 12,
    words: [
      'LUKE',
      'SKYWALKER',
      'HAN',
      'SOLO',
      'LEIA',
      'ORGANA',
      'CHEWBACCA',
      'R2D2',
      'C3PO',
      'YODA',
      'DARTH',
      'VADER',
      'OBIWAN',
      'KENOBI',
    ],
  },
  {
    theme: 'Magic: the Gathering',
    size: 13,
    words: [
      'ISLAND',
      'SWAMP',
      'FOREST',
      'MOUNTAIN',
      'PLAINS',
      'SPELL',
      'CREATURE',
      'ENCHANTMENT',
      'SORCERY',
      'INSTANT',
      'ARTIFACT',
      'LAND',
      'GRAVEYARD',
      'LIBRARY',
    ],
  },
];