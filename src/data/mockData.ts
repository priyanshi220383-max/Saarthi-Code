import { EmotionOption, StoryItem, GuideProfile, GuideReel, StoryCollection, SoloMatchUser, BadgeItem, ComicJournal, TripPlan } from '../types';

export const EMOTIONS: EmotionOption[] = [
  {
    id: 'Awed',
    label: 'Awed',
    subtext: 'Breathtaking architecture & grand history',
    icon: 'auto_awesome',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    color: '#942e02'
  },
  {
    id: 'Spooked',
    label: 'Spooked',
    subtext: 'Cursed ruins, haunted forts & eerie folklore',
    icon: 'dark_mode',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#3d2645'
  },
  {
    id: 'Enlightened',
    label: 'Enlightened',
    subtext: 'Ancient rituals, temples & sacred lakes',
    icon: 'self_improvement',
    image: 'https://images.unsplash.com/photo-1600871215197-c68059ada01a?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#735c00'
  },
  {
    id: 'Connected',
    label: 'Connected',
    subtext: 'Artisan guilds, village homestays & folk lore',
    icon: 'diversity_3',
    image: 'https://images.unsplash.com/photo-1681731030450-197c0ece5c3e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#b5451b'
  },
  {
    id: 'Adventurous',
    label: 'Adventurous',
    subtext: 'Desert forts, sacred groves & hidden step-tunnels',
    icon: 'explore',
    image: 'https://plus.unsplash.com/premium_photo-1661953630194-4bef71f0440d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#2e5a44'
  },
  {
    id: 'Nostalgic',
    label: 'Nostalgic',
    subtext: 'Old royal recipes, heritage havelis & timeless alleys',
    icon: 'history_edu',
    image: 'https://images.unsplash.com/photo-1712516906996-dfdbca4c3ba1?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#695c51'
  }
];

// Every story below is set in Rajasthan. The three that used to be set in
export const STORIES: StoryItem[] = [
  {
    id: 'chand-baori',
    title: 'The Geometry of Silence: Descent into Chand Baori',
    subtitle: 'A 1,000-year-old subterranean labyrinth designed to trap water, shade, and eternity.',
    location: 'Abhaneri, Rajasthan',
    state: 'Rajasthan',
    category: 'historical',
    emotionTags: ['Awed', 'Spooked'],
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    rating: 4.95,
    reviewsCount: 142,
    duration: '3.5 Hours',
    groupSize: 'Max 6 Explorers',
    languages: ['English', 'Hindi', 'Marwari'],
    price: 120,
    authorGuide: {
      name: 'Elias Thorne',
      title: 'Architectural Historian & 15-Yr Heritage Guide',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      badge: 'Master Storyteller',
      rating: 4.98
    },
    dropCapStory: {
      dropLetter: 'B',
      firstParagraph: 'eneath the arid Thar dust in the tiny forgotten village of Abhaneri lies an inverted pyramid of 3,500 narrow steps. Built in the 9th century by King Chanda of the Nikumbha Dynasty, Chand Baori was engineered not merely for survival, but as a temple of water where the air cools by five degrees for every tier you descend.',
      secondParagraph: 'Local folklore whispers that spirits built the steps in a single moonless night so no mortal could retrieve a fallen coin. As shadows shift across the symmetrical stone steps, you realize you are standing at the intersection of celestial mathematics and subterranean devotion.',
      quote: '"To descend here is to shed the noise of the surface world, step by mathematical step."'
    },
    sights: [
      {
        title: 'The 3,500 Steps',
        description: 'Perfect geometric terraces plunging 13 stories into emerald depths.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Royal Pavilion & Jharokhas',
        description: 'Multi-tiered royal suites carved with sculptures of Ganesha and Mahishasuramardini.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'The Dark Waters',
        description: 'The sacred pool reflecting centuries of monsoons and celestial star alignments.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80'
      }
    ],
    timeline: [
      {
        time: '08:30 AM',
        title: 'Arrival at Abhaneri Village Gate',
        description: 'Morning chai with local potters and briefing on 9th-century hydro-engineering.',
        icon: 'local_cafe'
      },
      {
        time: '09:15 AM',
        title: 'The First Glimpse from Above',
        description: 'Deciphering the optical illusions of the step symmetry under early sun rays.',
        icon: 'visibility'
      },
      {
        time: '10:30 AM',
        title: 'The Subterranean Walk',
        description: 'Descending to the mid-tier pavilion to examine sacred stone inscriptions.',
        icon: 'stairs'
      },
      {
        time: '11:45 AM',
        title: 'Harshat Mata Temple & Village Folk Tales',
        description: 'Visiting the adjacent 10th-century ruins with traditional elder oral storytellers.',
        icon: 'temple_hindu'
      }
    ],
    inclusions: [
      'Certified Heritage Historian accompaniment',
      'Exclusive architectural blueprint & magnifying loupe',
      'Artisanal masala chai & organic saffron sweets',
      'All monument entry permissions & conservation permits'
    ],
    audioPreviewUrl: 'https://cdn.freesound.org/previews/518/518428_6142149-lq.mp3'
  },
  {
    id: 'bhangarh-ruins',
    title: 'The Whispers of the Abandoned Palace: Bhangarh',
    subtitle: 'The 16th-century royal capital cursed before sundown, preserved in stony silence.',
    location: 'Alwar, Rajasthan',
    state: 'Rajasthan',
    category: 'haunted',
    emotionTags: ['Spooked', 'Adventurous'],
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
    rating: 4.88,
    reviewsCount: 98,
    duration: '4 Hours',
    groupSize: 'Max 8 Explorers',
    languages: ['English', 'Hindi'],
    price: 95,
    authorGuide: {
      name: 'Maya Lin',
      title: 'Folklore Anthropologist & Desert Explorer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      badge: 'Verified Explorer',
      rating: 4.95
    },
    dropCapStory: {
      dropLetter: 'S',
      firstParagraph: 'tanding at the foot of the Aravalli hills, the royal city of Bhangarh was founded in 1573. It was once a vibrant metropolis of banyan-shaded bazaars, perfumeries, and seven-tiered palaces until a sorcerer\'s unrequited love and royal curse brought its overnight desertion.',
      secondParagraph: 'The Archaeological Survey of India forbids anyone to remain within the fort after sunset. By daylight, however, the ruined havelis whisper forgotten songs through the desert breeze.',
      quote: '"The ruins don\'t hold ghosts; they hold memories too grand for modern walls."'
    },
    sights: [
      {
        title: 'The Johari Bazaar Ruin',
        description: 'Cobblestone streets of ancient gem merchants overgrown with desert banyans.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Gopinath Temple Sanctuary',
        description: 'Exquisite yellow sandstone carvings that survived undisturbed for four centuries.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'The Sorcerer\'s Chhatri',
        description: 'The hill-crest pavilion overlooking the entire abandoned capital.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=80'
      }
    ],
    timeline: [
      {
        time: '02:00 PM',
        title: 'Gates of Bhangarh Entrance',
        description: 'Meeting Maya at the Hanuman temple gate with folklore manuscripts.',
        icon: 'meeting_room'
      },
      {
        time: '03:30 PM',
        title: 'Walking the Lost Street of Perfumers',
        description: 'Reading original court poetry detailing ancient trade routes.',
        icon: 'menu_book'
      },
      {
        time: '05:00 PM',
        title: 'Sunset at Gopinath Temple',
        description: 'Golden hour photography before dusk gates close strictly.',
        icon: 'wb_twilight'
      }
    ],
    inclusions: [
      'Folklore Anthropologist guide',
      'Safety escort with high-lumen torches',
      'Heritage map parchment keepsake',
      'Transportation from Alwar'
    ]
  },
  {
    id: 'jodhpur-blue-city',
    title: 'Secrets of the Blue City: Indigo & Brahmin Guilds',
    subtitle: 'Weaving through the sapphire-painted alleys of Mehrangarh\'s medieval foothills.',
    location: 'Jodhpur, Rajasthan',
    state: 'Rajasthan',
    category: 'historical',
    emotionTags: ['Nostalgic', 'Connected', 'Awed'],
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85',
    rating: 4.97,
    reviewsCount: 210,
    duration: '3 Hours',
    groupSize: 'Max 6 Explorers',
    languages: ['English', 'Hindi', 'French'],
    price: 85,
    authorGuide: {
      name: 'Rajesh Kumar',
      title: '7th-Gen Blue City Resident & Historian',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      badge: 'Guild Elder',
      rating: 4.96
    },
    dropCapStory: {
      dropLetter: 'I',
      firstParagraph: 'n the shadow of Mehrangarh Fort lies Navchokiya, a maze where every wall is dipped in copper sulfate and limestone blue. The color repels the desert heat, deters mosquitoes, and marks the homes of the royal astrologers.',
      secondParagraph: 'Walking these twisting stepped corridors with Rajesh, you meet 4th-generation tie-and-dye masters and drink saffron-spiced lassi prepared in earthen urns.',
      quote: '"Every blue door opens to a family whose ancestors cooked for the Maharajas."'
    },
    sights: [
      {
        title: 'Navchokiya Secret Terraces',
        description: 'Rooftop vistas with uninterrupted panoramic views of the colossal fort wall.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Toorji Ka Jhalra Stepwell',
        description: 'Vibrant restored 1740s water reservoir filled with local divers.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'The Spice Merchant Guild',
        description: 'Mathania chili and wild desert cumin grinding stone mills.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=80'
      }
    ],
    timeline: [
      {
        time: '07:30 AM',
        title: 'Clock Tower Gathering',
        description: 'Starting with traditional Mishrilal saffron makhaniya lassi.',
        icon: 'local_cafe'
      },
      {
        time: '08:45 AM',
        title: 'The Indigo Alleys Walk',
        description: 'Discovering hidden stepwells and 200-year-old door carvings.',
        icon: 'directions_walk'
      },
      {
        time: '10:00 AM',
        title: 'Tea on a Brahmin Terrace',
        description: 'Enjoying freshly fried kachoris overlooking the azure cityscape.',
        icon: 'deck'
      }
    ],
    inclusions: [
      'Local 7th-gen guide companionship',
      'Artisanal tasting of 3 royal snacks',
      'Handcrafted miniature blue pottery tile souvenir'
    ]
  },
  {
    // Converted from the Meghalaya "living-root-bridges" story.
    id: 'khejarli-bishnoi-grove',
    title: 'Roots of the Desert: The Bishnoi Martyrs of Khejarli',
    subtitle: 'A sacred grove of Khejri trees where 363 villagers gave their lives to stop the axe.',
    location: 'Khejarli, Jodhpur, Rajasthan',
    state: 'Rajasthan',
    category: 'nature',
    emotionTags: ['Adventurous', 'Enlightened', 'Awed'],
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
    rating: 4.92,
    reviewsCount: 87,
    duration: '4 Hours',
    groupSize: 'Max 6 Explorers',
    languages: ['English', 'Hindi', 'Marwari'],
    price: 100,
    authorGuide: {
      name: 'Maya Lin',
      title: 'Desert Ecologist & Folklore Anthropologist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      badge: 'Eco Pioneer',
      rating: 4.95
    },
    dropCapStory: {
      dropLetter: 'I',
      firstParagraph: 'n 1730, when the Maharaja of Jodhpur\'s men arrived at Khejarli to fell the village\'s sacred Khejri trees for palace lime kilns, a Bishnoi woman named Amrita Devi wrapped her arms around a trunk and refused to move. She and her three daughters were killed first; 359 more villagers followed, each embracing a tree in turn.',
      secondParagraph: 'The Maharaja, stunned by the sacrifice, halted the felling and decreed the grove protected forever. Today the shaded canopy still stands, and blackbuck and chinkara graze undisturbed beneath the same trees the Bishnois died to save.',
      quote: '"Sar santey rukh rahe to bhi sasto jaan" - "If a tree is saved even at the cost of a head, it is still a cheap deal."'
    },
    sights: [
      {
        title: 'The Martyrs\' Memorial Chhatris',
        description: 'Small sandstone cenotaphs marking where each of the 363 Bishnois fell defending the trees.',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'The Sacred Khejri Canopy',
        description: 'Centuries-old Khejri trees, still community-protected under Bishnoi ecological law.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Bishnoi Wildlife Commons',
        description: 'Open desert scrub where blackbuck and chinkara wander freely, fed by hand each morning.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80'
      }
    ],
    timeline: [
      {
        time: '07:00 AM',
        title: 'Meeting the Bishnoi Elders',
        description: 'Tea in a mud-and-mirror Bishnoi courtyard, hearing the oral history of 1730.',
        icon: 'diversity_3'
      },
      {
        time: '08:30 AM',
        title: 'Walking the Memorial Grove',
        description: 'Tracing the line of chhatris and learning the ecological code the Bishnois still live by.',
        icon: 'park'
      },
      {
        time: '10:00 AM',
        title: 'Tracking Blackbuck at First Light',
        description: 'A quiet desert walk with community rangers to spot protected antelope herds.',
        icon: 'visibility'
      }
    ],
    inclusions: [
      'Certified desert ecologist & folklore guide',
      'Bishnoi community welcome tea',
      'Wildlife tracking with local rangers',
      'Community conservation levy'
    ]
  },
  {
    // Converted from the Kerala "kerala-backwaters" story.
    id: 'pushkar-sacred-lake',
    title: 'Sacred Waters of Pushkar: The Only Brahma Temple on Earth',
    subtitle: '52 ghats, a lotus-born lake, and the sole temple to the creator god in the world.',
    location: 'Pushkar, Ajmer, Rajasthan',
    state: 'Rajasthan',
    category: 'spiritual',
    emotionTags: ['Nostalgic', 'Enlightened', 'Connected'],
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85',
    rating: 4.94,
    reviewsCount: 176,
    duration: '3.5 Hours',
    groupSize: 'Max 6 Explorers',
    languages: ['English', 'Hindi', 'Sanskrit basics'],
    price: 110,
    authorGuide: {
      name: 'Elias Thorne',
      title: 'Sacred Geography & Pilgrimage Historian',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      badge: 'Master Storyteller',
      rating: 4.98
    },
    dropCapStory: {
      dropLetter: 'L',
      firstParagraph: 'egend holds that a lotus petal slipped from Brahma\'s hand as he searched the earth for a place to perform a great yajna, and where it fell, a lake sprang up amid the desert. Pushkar became the only place on the subcontinent where a temple would ever be built to the creator god himself.',
      secondParagraph: 'Fifty-two ghats ring the water, each gifted by a different royal house, and at dawn the lake fills with floating marigolds and the low murmur of Sanskrit hymns carried across the Aravalli sand.',
      quote: '"Here, even the desert learned to hold water sacred."'
    },
    sights: [
      {
        title: 'The 52 Sacred Ghats',
        description: 'Marble steps built by kingdoms across India, each with its own ritual and legend.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Brahma Temple Sanctum',
        description: 'The world\'s primary temple to Brahma, marked by its distinctive red spire and hansa motif.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'The Rose Garden Bazaars',
        description: 'Old lanes famous for Pushkari rosewater, rose-petal gulkand, and silver jewellery stalls.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80'
      }
    ],
    timeline: [
      {
        time: '06:00 AM',
        title: 'Dawn Walk Along the Ghats',
        description: 'Watching the sunrise puja rituals and learning the meaning of each ghat\'s legend.',
        icon: 'wb_sunny'
      },
      {
        time: '07:30 AM',
        title: 'Brahma Temple Darshan',
        description: 'Entering the sanctum with a pilgrimage historian explaining its rare iconography.',
        icon: 'temple_hindu'
      },
      {
        time: '09:00 AM',
        title: 'Rosewater Bazaar & Silver Lanes',
        description: 'Tasting fresh gulkand and browsing centuries-old silversmith workshops.',
        icon: 'storefront'
      }
    ],
    inclusions: [
      'Sacred geography & pilgrimage historian guide',
      'Priest-led ghat blessing ceremony',
      'Rosewater and gulkand tasting',
      'Temple entry coordination'
    ]
  },
  {
    // Converted from the Delhi "old-delhi-culinary" story.
    id: 'jaipur-street-food',
    title: 'Street Food Chronicles of the Pink City',
    subtitle: 'From royal Rajput kitchens to hidden halwai lanes in the walled city of Jaipur.',
    location: 'Jaipur, Rajasthan',
    state: 'Rajasthan',
    category: 'culinary',
    emotionTags: ['Nostalgic', 'Connected', 'Adventurous'],
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
    rating: 4.96,
    reviewsCount: 268,
    duration: '3.5 Hours',
    groupSize: 'Max 8 Explorers',
    languages: ['English', 'Hindi', 'Marwari'],
    price: 75,
    authorGuide: {
      name: 'Rajesh Kumar',
      title: 'Pink City Culinary Chronicler',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      badge: 'Culinary Master',
      rating: 4.96
    },
    dropCapStory: {
      dropLetter: 'W',
      firstParagraph: 'hen Maharaja Sawai Jai Singh II planned his new capital in 1727, he laid its bazaars out on a precise Vastu grid, each lane assigned to a single trade. Three centuries later, the walled city\'s halwai families still guard recipes handed down since the Rajput courts.',
      secondParagraph: 'Bite into a piping pyaaz kachori at dawn, watch ghewar being fried in copper vats and drowned in rabri, and end the walk with a full dal-baati-churma thali eaten the old way, with ghee poured tableside.',
      quote: '"In Jaipur, every lane still cooks for a court that no longer exists."'
    },
    sights: [
      {
        title: 'Johari Bazaar Sweet Lane',
        description: 'Jaipur\'s oldest sweet shops, famous for ghewar, feeni, and saffron mawa kachori.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Chandpole Kachori Stalls',
        description: 'Century-old stalls frying pyaaz and mawa kachori in the same brass karahis.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'The Halwai Family Sweet Kitchen',
        description: 'A working haveli kitchen where fourth-generation halwais prepare rabri over slow coal fires.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80'
      }
    ],
    timeline: [
      {
        time: '04:00 PM',
        title: 'Tripolia Gate Meet-Up',
        description: 'Starting with warm pyaaz kachori and a briefing on Jaipur\'s walled-city grid.',
        icon: 'meeting_room'
      },
      {
        time: '05:15 PM',
        title: 'Johari Bazaar Sweet Walk',
        description: 'Tasting ghewar, feeni and rabri straight from copper vats.',
        icon: 'bakery_dining'
      },
      {
        time: '06:45 PM',
        title: 'Dal-Baati-Churma Thali Finale',
        description: 'A full Rajasthani thali served in a haveli courtyard as the city lights come on.',
        icon: 'restaurant_menu'
      }
    ],
    inclusions: [
      '8 authentic culinary tasting courses',
      'Heritage cycle-rickshaw ride through the walled city',
      'Purified mineral water & herbal digestive paan',
      'Custom recipe booklet handwritten by halwai families'
    ]
  }
];

export const GUIDES: GuideProfile[] = [
  {
    id: 'elias-thorne',
    name: 'Elias Thorne',
    title: 'Architectural Historian & 15-Yr Heritage Guide',
    location: 'Jaipur, Abhaneri & Pushkar, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 4.98,
    reviewsCount: 312,
    experienceYears: 15,
    languages: ['English', 'Hindi', 'Marwari', 'German'],
    specialty: 'Medieval Stepwells, Rajput Fort Architecture & Sacred Geography',
    bio: 'Specialist in 9th to 16th-century subterranean structures and celestial astronomy, with a second focus on Rajasthan\'s pilgrimage geography. Elias has authored two monographs on Rajasthani stepwells and leads immersive, poetic narrative walks.',
    badges: ['Master Storyteller', 'Women Safety Certified', 'Top Rated 2025', 'First Aid Certified'],
    pricePerDay: 150,
    reelCount: 4,
    hasReel: true,
    reels: [
      {
        id: 'reel-1',
        guideId: 'elias-thorne',
        guideName: 'Elias Thorne',
        guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        title: 'Why Chand Baori Drops 5 Degrees Every 10 Steps',
        location: 'Abhaneri, Rajasthan',
        quote: '"The ancient architects captured the winter wind and trapped it in stone shadows."',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=85',
        likes: 1842,
        tags: ['#Rajasthan', '#Stepwells', '#Architecture', '#Heritage'],
        duration: '0:45'
      },
      {
        id: 'reel-2',
        guideId: 'elias-thorne',
        guideName: 'Elias Thorne',
        guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        title: 'Decoding the Jharokha Carvings of Amber Palace',
        location: 'Amer, Jaipur',
        quote: '"Queens watched royal processions through 953 stone lattices without being seen."',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85',
        likes: 2430,
        tags: ['#Jaipur', '#AmberFort', '#Rajputana'],
        duration: '1:10'
      }
    ]
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    title: 'Desert Ecologist & Folklore Anthropologist',
    location: 'Alwar & Jodhpur, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    reviewsCount: 189,
    experienceYears: 8,
    languages: ['English', 'Hindi', 'Marwari', 'Mandarin'],
    specialty: 'Sacred Desert Groves, Bishnoi Ecology & Rajasthani Folklore',
    bio: 'Ecologist who has spent years living alongside Bishnoi communities documenting their centuries-old code of desert conservation. Maya curates slow, sustainable expeditions through Rajasthan\'s sacred groves and abandoned royal ruins.',
    badges: ['Eco Pioneer', 'Solo Women Friendly', 'Wilderness Responder'],
    pricePerDay: 135,
    reelCount: 3,
    hasReel: true,
    reels: [
      {
        id: 'reel-3',
        guideId: 'maya-lin',
        guideName: 'Maya Lin',
        guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        title: 'The Village That Died for Its Trees',
        location: 'Khejarli, Jodhpur, Rajasthan',
        quote: '"363 Bishnois embraced the trees so the desert would still have shade."',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=85',
        likes: 3120,
        tags: ['#Rajasthan', '#Bishnoi', '#Ecology', '#Khejarli'],
        duration: '0:58'
      }
    ]
  },
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    title: '7th-Gen Blue City Historian & Certified Guide',
    location: 'Jodhpur & Jaipur, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 4.96,
    reviewsCount: 420,
    experienceYears: 12,
    languages: ['English', 'Hindi', 'Urdu', 'Marwari'],
    specialty: 'Rajput Culinary Arts & Blue City Guilds',
    bio: 'Born in a 250-year-old blue haveli near Mehrangarh Fort. Rajesh unlocks private royal recipe books and hidden artisan workshops across Jodhpur and Jaipur that tourists never find on maps.',
    badges: ['Guild Elder', 'Culinary Master', 'Govt Certified'],
    pricePerDay: 120,
    reelCount: 5,
    hasReel: true,
    reels: [
      {
        id: 'reel-4',
        guideId: 'rajesh-kumar',
        guideName: 'Rajesh Kumar',
        guideAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        title: 'The Real Reason Jodhpur\'s Houses are Painted Indigo',
        location: 'Jodhpur, Rajasthan',
        quote: '"It wasn\'t just religion-it was chemistry: copper sulfate keeping scorpions away."',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=85',
        likes: 2780,
        tags: ['#Jodhpur', '#BlueCity', '#HeritageSecrets'],
        duration: '0:50'
      }
    ]
  }
];

export const REELS: GuideReel[] = GUIDES.flatMap(g => g.reels);

// Three themed collections, each pairing an original Rajasthan story with
// one of the newly-converted ones.
export const COLLECTIONS: StoryCollection[] = [
  {
    id: 'sacred-waters-of-rajasthan',
    title: 'Sacred Waters of the Desert',
    subtitle: 'Stepwells built for monsoons & a lake born from Brahma\'s lotus',
    tagline: 'Where a desert kingdom learned to worship every drop of water.',
    coverImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=85',
    storyCount: 6,
    tags: ['Spiritual', 'Architecture', 'Rajasthan'],
    stories: ['pushkar-sacred-lake', 'chand-baori']
  },
  {
    id: 'street-food-guild-trails',
    title: 'Street Food & Guild Trails',
    subtitle: 'From Pink City kachori lanes to Blue City lassi terraces',
    tagline: 'Three centuries of royal recipes, still cooked the old way.',
    coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=85',
    storyCount: 8,
    tags: ['Culinary', 'Heritage', 'Rajasthan'],
    stories: ['jaipur-street-food', 'jodhpur-blue-city']
  },
  {
    id: 'echoes-of-the-thar',
    title: 'Echoes of the Thar',
    subtitle: 'A cursed royal capital & a grove villagers died to protect',
    tagline: 'The desert remembers every sacrifice made for it.',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85',
    storyCount: 5,
    tags: ['Folklore', 'Nature', 'Rajasthan'],
    stories: ['bhangarh-ruins', 'khejarli-bishnoi-grove']
  }
];

export const SOLO_MATCHES: SoloMatchUser[] = [
  {
    id: 'solo-1',
    name: 'Aanya Sharma',
    age: 27,
    location: 'Mumbai, India',
    currentCity: 'Jaipur (Near Stepwell)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    isVerified: true,
    isWomenSafetyVerified: true,
    mutualStories: ['The Geometry of Silence', 'Secrets of the Blue City'],
    interests: ['Heritage Architecture', 'Film Photography', 'Local Chai'],
    travelStyle: 'Slow Explorer • Sketcher',
    matchScore: 96,
    distanceKm: 0.8
  },
  {
    id: 'solo-2',
    name: 'Chloe Laurent',
    age: 29,
    location: 'Lyon, France',
    currentCity: 'Jaipur (C-Scheme)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    isVerified: true,
    isWomenSafetyVerified: true,
    mutualStories: ['Sacred Waters of Pushkar', 'Roots of the Desert'],
    interests: ['Botanical Sketches', 'Street Markets', 'Pottery'],
    travelStyle: 'Solo Female Backpacker',
    matchScore: 91,
    distanceKm: 1.4
  },
  {
    id: 'solo-3',
    name: 'Vikram Joshi',
    age: 31,
    location: 'Bengaluru, India',
    currentCity: 'Amer, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    isVerified: true,
    isWomenSafetyVerified: false,
    mutualStories: ['Whispers of Bhangarh', 'Street Food Chronicles'],
    interests: ['Night Astrophotography', 'Mythology', 'Trekking'],
    travelStyle: 'History Buff',
    matchScore: 84,
    distanceKm: 3.2
  }
];

// One badge per story, plus a couple of generic solo-travel badges.
export const BADGES: BadgeItem[] = [
  {
    id: 'stepwell-sage',
    name: 'Stepwell Sage',
    category: 'Architecture',
    icon: 'stairs',
    color: '#942e02',
    description: 'Explored the geometric depths of Chand Baori and mastered Rajasthan\'s water heritage.',
    unlockedAt: 'Unlocked Today • Abhaneri',
    isUnlocked: true,
    rarity: 'Rare'
  },
  {
    id: 'brave-soloist',
    name: 'Brave Soloist',
    category: 'Solo Travel',
    icon: 'verified_user',
    color: '#2e5a44',
    description: 'Completed a verified solo cultural mission with active safety check-ins.',
    unlockedAt: 'Unlocked Today • Jaipur',
    isUnlocked: true,
    rarity: 'Legendary'
  },
  {
    id: 'heritage-hunter',
    name: 'Heritage Hunter',
    category: 'Storyteller',
    icon: 'auto_stories',
    color: '#735c00',
    description: 'Listened to 5 oral folklore accounts directly from Jodhpur\'s guild elders in Navchokiya.',
    unlockedAt: 'Unlocked Yesterday • Navchokiya',
    isUnlocked: true,
    rarity: 'Common'
  },
  {
    id: 'curse-breaker',
    name: 'Curse Breaker',
    category: 'Adventure',
    icon: 'castle',
    color: '#3d2645',
    description: 'Walked the abandoned lanes of Bhangarh and left before the sunset curfew.',
    isUnlocked: false,
    rarity: 'Legendary'
  },
  {
    id: 'desert-guardian',
    name: 'Desert Guardian',
    category: 'Ecology',
    icon: 'park',
    color: '#2e5a44',
    description: 'Walked the Khejarli grove and honored the 363 Bishnoi martyrs who died protecting its trees.',
    isUnlocked: false,
    rarity: 'Legendary'
  },
  {
    id: 'temple-pilgrim',
    name: 'Temple Pilgrim',
    category: 'Spiritual',
    icon: 'temple_hindu',
    color: '#735c00',
    description: 'Received blessings at Pushkar\'s 52 ghats and darshan at the world\'s only Brahma temple.',
    isUnlocked: false,
    rarity: 'Rare'
  },
  {
    id: 'royal-feast-taster',
    name: 'Royal Feast Taster',
    category: 'Culinary',
    icon: 'soup_kitchen',
    color: '#b5451b',
    description: 'Sampled kachori, ghewar and thali across Jaipur\'s Johari Bazaar and Jodhpur\'s guild terraces.',
    isUnlocked: false,
    rarity: 'Rare'
  }
];

export const SAMPLE_COMIC_JOURNAL: ComicJournal = {
  id: 'journal-abhaneri-1',
  tripTitle: 'A Story Written in Stone: Chand Baori Descent',
  date: 'October 14, 2025',
  location: 'Abhaneri, Rajasthan',
  travelerName: 'Elena Rostova',
  badgesEarned: [BADGES[0], BADGES[1], BADGES[2]],
  guideQuote: '"To descend here is to shed the noise of the surface world, step by mathematical step." - Elias Thorne',
  personalNotes: 'The morning light cast razor-sharp shadows across the 3,500 steps. In the mid-tier royal pavilion, Elias shared how the king designed cool breezes across the stone chambers.',
  panels: [
    {
      panelNumber: 1,
      title: 'Chapter I: The Inverted Mirage',
      caption: 'Abhaneri awoke under a dusty golden haze as we arrived at the ancient stone gateway.',
      dialogue: 'Look down. The labyrinth was made to reflect both the stars and the thirsty soul.',
      speaker: 'Elias Thorne',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      timeOfDay: '08:45 AM • Sunbreak'
    },
    {
      panelNumber: 2,
      title: 'Chapter II: The 3,500 Steps',
      caption: 'Every step forms a flawless geometric rhyme. The temperature dropped noticeaby.',
      dialogue: 'Can you feel the air cooling? Five degrees for every ten steps.',
      speaker: 'Elena (Traveler)',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
      timeOfDay: '10:15 AM • Subterranean Descent'
    },
    {
      panelNumber: 3,
      title: 'Chapter III: The Royal Jharokhas',
      caption: 'Intricate sculptures of Ganesha and Mahishasuramardini stand sentinel over the quiet water.',
      dialogue: 'Here the queens spent the hottest desert months listening to monsoon songs.',
      speaker: 'Elias Thorne',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
      timeOfDay: '11:30 AM • Royal Pavilions'
    },
    {
      panelNumber: 4,
      title: 'Chapter IV: Chai & Village Lore',
      caption: 'We ended the walk in the potter\'s courtyard, sipping saffron tea from fresh terracotta cups.',
      dialogue: 'A story lived is a memory etched in stone forever.',
      speaker: 'Village Elder',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
      timeOfDay: '01:00 PM • Courtyard Farewell'
    }
  ]
};

// Six-day trip covering all six Rajasthan stories, routed roughly
// Jaipur -> Abhaneri -> Alwar -> Pushkar -> Jodhpur -> Khejarli.
export const INITIAL_TRIP_PLAN: TripPlan = {
  id: 'trip-royal-rajasthan-stories',
  title: 'The Royal Narrative: A 6-Day Journey through Rajasthan',
  region: 'Jaipur, Abhaneri, Alwar, Pushkar & Jodhpur, Rajasthan',
  durationDays: 6,
  companion: 'solo',
  pace: 'moderate',
  budgetLevel: 'balanced',
  womensSafetyMode: true,
  startDate: 'Nov 12, 2025',
  endDate: 'Nov 17, 2025',
  days: [
    {
      dayNumber: 1,
      title: 'Street Food Chronicles of the Pink City',
      location: 'Jaipur',
      guideName: 'Rajesh Kumar',
      guideAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      price: 75,
      description: 'Arrival in Jaipur followed by an evening kachori-to-thali walk through the walled city\'s halwai lanes.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
      time: '04:00 PM - 07:30 PM',
      includedActivity: 'Johari Bazaar Sweet Walk & Thali Finale'
    },
    {
      dayNumber: 2,
      title: 'Descent into Chand Baori & Abhaneri',
      location: 'Abhaneri Village',
      guideName: 'Elias Thorne',
      guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      price: 150,
      description: 'Subterranean geometry exploration of the 9th-century stepwell, Harshat Mata temple carvings, and village potter tea session.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      time: '08:30 AM - 02:00 PM',
      includedActivity: 'Private Stepwell Descent & Blueprint Study'
    },
    {
      dayNumber: 3,
      title: 'The Whispers of Bhangarh',
      location: 'Alwar / Bhangarh Ruins',
      guideName: 'Maya Lin',
      guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      price: 95,
      description: 'Afternoon walk through the cursed royal capital, its bazaar ruins and Gopinath Temple carvings, finishing before the strict sunset curfew.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
      time: '02:00 PM - 05:30 PM',
      includedActivity: 'Guided Ruins Walk & Folklore Session'
    },
    {
      dayNumber: 4,
      title: 'Sacred Waters of Pushkar',
      location: 'Pushkar, Ajmer',
      guideName: 'Elias Thorne',
      guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      price: 110,
      description: 'Dawn walk along the 52 ghats, darshan at the world\'s only Brahma temple, and a stroll through the rosewater bazaars.',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
      time: '06:00 AM - 09:30 AM',
      includedActivity: 'Ghat Blessing Ceremony & Temple Darshan'
    },
    {
      dayNumber: 5,
      title: 'The Indigo Alleys of the Blue City',
      location: 'Jodhpur / Navchokiya',
      guideName: 'Rajesh Kumar',
      guideAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      price: 120,
      description: 'Morning walk through the azure labyrinth, meeting traditional bandhani textile artisans, and rooftop saffron lassi tasting.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
      time: '08:00 AM - 12:30 PM',
      includedActivity: 'Brahmin Guild Terrace Tea & Textile Demo'
    },
    {
      dayNumber: 6,
      title: 'Roots of the Desert: Khejarli',
      location: 'Khejarli, Jodhpur',
      guideName: 'Maya Lin',
      guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      price: 100,
      description: 'A morning with Bishnoi elders, the memorial grove of the 1730 martyrs, and a quiet blackbuck-tracking walk before departure.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
      time: '07:00 AM - 11:00 AM',
      includedActivity: 'Memorial Grove Walk & Wildlife Tracking'
    }
  ],
  pricing: {
    guideFee: 650,
    heritageStays: 480,
    storyCab: 130,
    heritagePasses: 60,
    taxRate: 0.12,
    total: 1478.40
  }
}