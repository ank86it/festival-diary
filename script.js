const STORAGE = {
  theme: "mummiji.theme",
  font: "mummiji.fontScale",
  reader: "mummiji.readerScale",
  language: "mummiji.language",
  reminder: "mummiji.reminder",
  checklist: "mummiji.checklist",
  bookmarks: "mummiji.bookmarks"
};

const poojaByDay = {
  Sunday: {
    god: "Lord Surya",
    symbol: "☀️",
    offering: "Offer water, red flowers and a peaceful morning prayer.",
    mantra: "ॐ सूर्याय नमः",
    tasks: ["Offer water to Surya Dev", "Light a ghee deepak", "Chant Gayatri Mantra", "Read Aditya Hridayam"]
  },
  Monday: {
    god: "Lord Shiva",
    symbol: "🕉️",
    offering: "Offer water, bilva leaves and white flowers.",
    mantra: "ॐ नमः शिवाय",
    tasks: ["Do jal abhishek", "Offer bilva leaves", "Chant Om Namah Shivaya 108 times", "Read Shiv Chalisa"]
  },
  Tuesday: {
    god: "Lord Hanuman",
    symbol: "🚩",
    offering: "Offer sindoor, boondi prasad and sincere devotion.",
    mantra: "ॐ हनुमते नमः",
    tasks: ["Read Hanuman Chalisa", "Offer sindoor", "Offer boondi prasad", "Chant Bajrang Baan"]
  },
  Wednesday: {
    god: "Lord Ganesh",
    symbol: "🐘",
    offering: "Offer durva grass, modak and a prayer for wisdom.",
    mantra: "ॐ गं गणपतये नमः",
    tasks: ["Offer durva grass", "Offer modak", "Read Ganesh Chalisa", "Do Ganesh Aarti"]
  },
  Thursday: {
    god: "Sai Baba / Vishnu",
    symbol: "🌼",
    offering: "Offer yellow flowers, banana and gratitude.",
    mantra: "ॐ नमो भगवते वासुदेवाय",
    tasks: ["Offer yellow flowers", "Offer banana", "Read Vishnu Sahasranamam", "Do Sai Aarti"]
  },
  Friday: {
    god: "Maa Lakshmi",
    symbol: "🪷",
    offering: "Offer kheer, lotus flowers and a ghee lamp.",
    mantra: "ॐ श्रीं महालक्ष्म्यै नमः",
    tasks: ["Light a ghee lamp", "Offer kheer bhog", "Read Lakshmi Chalisa", "Chant Kanakdhara Stotram"]
  },
  Saturday: {
    god: "Lord Shani and Hanuman",
    symbol: "🪔",
    offering: "Offer mustard oil lamp, black sesame and Hanuman Chalisa.",
    mantra: "ॐ शं शनैश्चराय नमः",
    tasks: ["Light mustard oil lamp", "Read Hanuman Chalisa", "Offer black sesame", "Read Shani Chalisa"]
  }
};

const fallbackFestivals = [
  {
    "name": "Makarsankranti / Pongal",
    "date": "2026-01-14",
    "day": "Wednesday",
    "type": "festival",
    "icon": "☀️",
    "description": "A harvest festival for gratitude, new beginnings and offering thanks to Surya Dev.",
    "steps": [
      "Offer water to Surya Dev",
      "Prepare til-gud or pongal",
      "Donate food or warm clothes",
      "Pray for family wellbeing"
    ]
  },
  {
    "name": "Vasant Panchami",
    "date": "2026-01-23",
    "day": "Friday",
    "type": "festival",
    "icon": "🌼",
    "description": "A day dedicated to Maa Saraswati, learning, music and fresh spring energy.",
    "steps": [
      "Wear or offer yellow",
      "Pray to Maa Saraswati",
      "Keep books near the pooja place",
      "Chant Saraswati mantra"
    ]
  },
  {
    "name": "Thaipusam",
    "date": "2026-02-01",
    "day": "Sunday",
    "type": "festival",
    "icon": "🪔",
    "description": "A devotional day associated with Lord Murugan and sincere vows.",
    "steps": [
      "Light a deepak",
      "Offer fruits and flowers",
      "Chant Murugan mantra",
      "Keep thoughts pure"
    ]
  },
  {
    "name": "Maha Shivaratri",
    "date": "2026-02-15",
    "day": "Sunday",
    "type": "festival",
    "icon": "🕉️",
    "description": "The great night of Lord Shiva, observed with abhishek, fasting and mantra jap.",
    "steps": [
      "Do jal abhishek",
      "Offer bilva leaves",
      "Chant Om Namah Shivaya",
      "Read Shiv Chalisa"
    ]
  },
  {
    "name": "Holika Dahan",
    "date": "2026-03-03",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🔥",
    "description": "A sacred evening remembering the victory of devotion and goodness.",
    "steps": [
      "Offer prayer before Holika",
      "Remember Prahlad's devotion",
      "Pray for protection",
      "Share sweets with family"
    ]
  },
  {
    "name": "Holi",
    "date": "2026-03-04",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🎨",
    "description": "A joyful festival of colors, forgiveness and family celebration.",
    "steps": [
      "Offer morning prayer",
      "Apply gulal respectfully",
      "Share sweets",
      "Visit family"
    ]
  },
  {
    "name": "Ugadi / Gudi Padwa / Telugu New Year",
    "date": "2026-03-19",
    "day": "Thursday",
    "type": "festival",
    "icon": "🌿",
    "description": "A regional New Year celebration for prosperity, cleanliness and fresh starts.",
    "steps": [
      "Clean the pooja space",
      "Light a deepak",
      "Offer seasonal food",
      "Pray for a blessed year"
    ]
  },
  {
    "name": "Ramanavami",
    "date": "2026-03-27",
    "day": "Friday",
    "type": "festival",
    "icon": "🏹",
    "description": "The birth celebration of Lord Rama, observed with bhajan and Ram naam.",
    "steps": [
      "Chant Shri Ram Jai Ram",
      "Read Ramayana verses",
      "Offer fruits",
      "Do aarti"
    ]
  },
  {
    "name": "Hanuman Jayanti",
    "date": "2026-04-02",
    "day": "Thursday",
    "type": "festival",
    "icon": "🚩",
    "description": "A devotional day celebrating Lord Hanuman's strength, humility and service.",
    "steps": [
      "Read Hanuman Chalisa",
      "Offer sindoor",
      "Offer boondi or fruits",
      "Chant Hanuman mantra"
    ]
  },
  {
    "name": "Vaisakhi / Baisakhi / Vishu",
    "date": "2026-04-14",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🌾",
    "description": "A harvest and New Year celebration marked with gratitude and joy.",
    "steps": [
      "Offer grains or fruits",
      "Light a deepak",
      "Thank the divine for abundance",
      "Share food"
    ]
  },
  {
    "name": "Tamil New Year",
    "date": "2026-04-14",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🌸",
    "description": "Tamil New Year, celebrated with prayer, auspicious food and family blessings.",
    "steps": [
      "Prepare the pooja thali",
      "Offer flowers and fruits",
      "Pray for prosperity",
      "Take blessings from elders"
    ]
  },
  {
    "name": "Bengali New Year / Bihu",
    "date": "2026-04-15",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🌺",
    "description": "A New Year celebration of renewal, culture, harvest and family joy.",
    "steps": [
      "Light a deepak",
      "Offer sweets",
      "Pray for new beginnings",
      "Share blessings with family"
    ]
  },
  {
    "name": "Akshaya Tritiya",
    "date": "2026-04-19",
    "day": "Sunday",
    "type": "festival",
    "icon": "🪙",
    "description": "An auspicious day for prosperity, charity and sacred beginnings.",
    "steps": [
      "Worship Lakshmi Narayan",
      "Offer yellow flowers",
      "Donate food",
      "Begin a good deed"
    ]
  },
  {
    "name": "Savitri Pooja",
    "date": "2026-05-16",
    "day": "Saturday",
    "type": "vrat",
    "icon": "🌳",
    "description": "A vrat observed for family wellbeing, strength and marital blessings.",
    "steps": [
      "Offer water near a sacred tree",
      "Pray for family health",
      "Listen to Savitri katha",
      "Take blessings from elders"
    ]
  },
  {
    "name": "Puri Rath Yatra",
    "date": "2026-07-16",
    "day": "Thursday",
    "type": "festival",
    "icon": "🛕",
    "description": "The chariot festival of Lord Jagannath, Balabhadra and Subhadra.",
    "steps": [
      "Chant Jai Jagannath",
      "Offer fruits",
      "Read Jagannath bhajan",
      "Serve prasad"
    ]
  },
  {
    "name": "Guru Purnima",
    "date": "2026-07-29",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🪔",
    "description": "A day to remember gurus, elders and all sources of wisdom with gratitude.",
    "steps": [
      "Light a deepak",
      "Offer flowers to Guru",
      "Take blessings from elders",
      "Donate food or clothes"
    ]
  },
  {
    "name": "Nag Panchami",
    "date": "2026-08-17",
    "day": "Monday",
    "type": "festival",
    "icon": "🐍",
    "description": "A traditional day of reverence for Nag Devta and protection from harm.",
    "steps": [
      "Offer milk symbolically",
      "Pray to Nag Devta",
      "Avoid digging soil",
      "Keep the home peaceful"
    ]
  },
  {
    "name": "Onam",
    "date": "2026-08-26",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🌼",
    "description": "A joyful harvest festival of abundance, welcome and family meals.",
    "steps": [
      "Decorate with flowers",
      "Offer seasonal food",
      "Pray for prosperity",
      "Share a family meal"
    ]
  },
  {
    "name": "Raksha Bandhan",
    "date": "2026-08-28",
    "day": "Friday",
    "type": "festival",
    "icon": "🌸",
    "description": "A joyful family festival celebrating protection, affection and sibling blessings.",
    "steps": [
      "Prepare aarti thali",
      "Tie rakhi with tilak",
      "Offer sweets",
      "Pray for family wellbeing"
    ]
  },
  {
    "name": "Varalakshmi Vrat",
    "date": "2026-08-28",
    "day": "Friday",
    "type": "vrat",
    "icon": "🪷",
    "description": "A vrat dedicated to Maa Lakshmi for prosperity, grace and family happiness.",
    "steps": [
      "Clean the pooja space",
      "Offer lotus or flowers",
      "Read Lakshmi aarti",
      "Offer sweet prasad"
    ]
  },
  {
    "name": "Krishna Janmashtami",
    "date": "2026-09-04",
    "day": "Friday",
    "type": "festival",
    "icon": "🪈",
    "description": "The birth celebration of Lord Krishna, filled with bhajan, fasting and joy.",
    "steps": [
      "Decorate Bal Gopal",
      "Offer makhan mishri",
      "Chant Krishna naam",
      "Do midnight prayer if possible"
    ]
  },
  {
    "name": "Ganesh Chaturthi",
    "date": "2026-09-14",
    "day": "Monday",
    "type": "festival",
    "icon": "🐘",
    "description": "A day to welcome Lord Ganesh, remover of obstacles and giver of wisdom.",
    "steps": [
      "Offer durva grass",
      "Offer modak",
      "Read Ganesh aarti",
      "Pray before new work"
    ]
  },
  {
    "name": "Vishwakarma Puja",
    "date": "2026-09-17",
    "day": "Thursday",
    "type": "festival",
    "icon": "🛠️",
    "description": "A day to honor tools, work, skill and divine craftsmanship.",
    "steps": [
      "Clean tools and work area",
      "Offer flowers",
      "Pray for safe work",
      "Share prasad"
    ]
  },
  {
    "name": "Mahalaya Amavasya",
    "date": "2026-10-10",
    "day": "Saturday",
    "type": "vrat",
    "icon": "🌑",
    "description": "A quiet day for remembrance, gratitude to ancestors and prayer.",
    "steps": [
      "Light a sesame oil lamp",
      "Offer water in remembrance",
      "Donate food",
      "Keep thoughts pure"
    ]
  },
  {
    "name": "Navaratri begins",
    "date": "2026-10-11",
    "day": "Sunday",
    "type": "festival",
    "icon": "🌺",
    "description": "The beginning of nine devotional nights worshipping Maa Durga.",
    "steps": [
      "Clean the pooja space",
      "Light a deepak",
      "Read Durga Chalisa",
      "Offer red flowers"
    ]
  },
  {
    "name": "Navaratri ends / Maha Navami",
    "date": "2026-10-19",
    "day": "Monday",
    "type": "festival",
    "icon": "🌺",
    "description": "The concluding Navaratri worship day, marked with devotion to Maa Durga.",
    "steps": [
      "Offer halwa or fruits",
      "Read Durga aarti",
      "Pray for strength",
      "Share prasad"
    ]
  },
  {
    "name": "Maha Navami",
    "date": "2026-10-19",
    "day": "Monday",
    "type": "festival",
    "icon": "🌺",
    "description": "A sacred Navaratri day for worshipping Maa Durga with devotion and gratitude.",
    "steps": [
      "Light a deepak",
      "Offer red flowers",
      "Read Durga Chalisa",
      "Share prasad"
    ]
  },
  {
    "name": "Dusshera",
    "date": "2026-10-20",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🏹",
    "description": "A festival celebrating the victory of dharma and goodness.",
    "steps": [
      "Pray to Lord Rama",
      "Remember victory of truth",
      "Offer sweets",
      "Begin one good habit"
    ]
  },
  {
    "name": "Sharad Purnima",
    "date": "2026-10-25",
    "day": "Sunday",
    "type": "vrat",
    "icon": "🌕",
    "description": "A full moon night associated with cool moonlight, devotion and kheer offering.",
    "steps": [
      "Offer kheer",
      "Pray under moonlight if possible",
      "Chant peaceful mantras",
      "Share prasad"
    ]
  },
  {
    "name": "Karwa Chauth",
    "date": "2026-10-29",
    "day": "Thursday",
    "type": "vrat",
    "icon": "🌙",
    "description": "A vrat observed with prayer for marital wellbeing and long life.",
    "steps": [
      "Prepare pooja thali",
      "Listen to vrat katha",
      "Offer water to Chandra",
      "Take family blessings"
    ]
  },
  {
    "name": "Dhan Teras",
    "date": "2026-11-06",
    "day": "Friday",
    "type": "festival",
    "icon": "🪙",
    "description": "An auspicious Diwali season day for health, wealth and Lakshmi worship.",
    "steps": [
      "Light diyas",
      "Pray to Dhanvantari",
      "Offer sweets",
      "Clean the entrance"
    ]
  },
  {
    "name": "Diwali",
    "date": "2026-11-08",
    "day": "Sunday",
    "type": "festival",
    "icon": "🪔",
    "description": "Festival of lights, Lakshmi pooja, cleanliness, gratitude and family joy.",
    "steps": [
      "Clean pooja space",
      "Do Lakshmi Ganesh pooja",
      "Light diyas",
      "Share sweets"
    ]
  },
  {
    "name": "Bhai Dooj",
    "date": "2026-11-11",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🌸",
    "description": "A family festival celebrating affection and blessings between siblings.",
    "steps": [
      "Prepare tilak thali",
      "Offer sweets",
      "Do aarti",
      "Pray for family protection"
    ]
  },
  {
    "name": "Chhath Puja",
    "date": "2026-11-15",
    "day": "Sunday",
    "type": "festival",
    "icon": "☀️",
    "description": "A sacred worship of Surya Dev and Chhathi Maiya with discipline and gratitude.",
    "steps": [
      "Offer arghya to Surya",
      "Keep pooja items clean",
      "Offer fruits",
      "Pray for health and prosperity"
    ]
  },
  {
    "name": "Kartik Poornima",
    "date": "2026-11-24",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🌕",
    "description": "An auspicious full moon day for lighting lamps, charity and prayer.",
    "steps": [
      "Light diyas",
      "Offer flowers",
      "Donate food",
      "Chant Vishnu mantra"
    ]
  },
  {
    "name": "Dhanu Sankranti",
    "date": "2026-12-16",
    "day": "Wednesday",
    "type": "festival",
    "icon": "☀️",
    "description": "A Sankranti day for Surya worship, charity and spiritual discipline.",
    "steps": [
      "Offer water to Surya",
      "Donate food",
      "Light a deepak",
      "Pray for steady progress"
    ]
  },
  {
    "name": "Geeta Jayanti",
    "date": "2026-12-20",
    "day": "Sunday",
    "type": "festival",
    "icon": "📖",
    "description": "A day to remember the wisdom of the Bhagavad Gita.",
    "steps": [
      "Read a Gita shloka",
      "Offer flowers to Krishna",
      "Chant Hare Krishna",
      "Practice one teaching"
    ]
  },
  {
    "name": "Makarsankranti / Pongal",
    "date": "2027-01-15",
    "day": "Friday",
    "type": "festival",
    "icon": "☀️",
    "description": "A harvest festival for gratitude, new beginnings and offering thanks to Surya Dev.",
    "steps": [
      "Offer water to Surya Dev",
      "Prepare til-gud or pongal",
      "Donate food or warm clothes",
      "Pray for family wellbeing"
    ]
  },
  {
    "name": "Thaipusam",
    "date": "2027-01-22",
    "day": "Friday",
    "type": "festival",
    "icon": "🪔",
    "description": "A devotional day associated with Lord Murugan and sincere vows.",
    "steps": [
      "Light a deepak",
      "Offer fruits and flowers",
      "Chant Murugan mantra",
      "Keep thoughts pure"
    ]
  },
  {
    "name": "Vasant Panchami",
    "date": "2027-02-11",
    "day": "Thursday",
    "type": "festival",
    "icon": "🌼",
    "description": "A day dedicated to Maa Saraswati, learning, music and fresh spring energy.",
    "steps": [
      "Wear or offer yellow",
      "Pray to Maa Saraswati",
      "Keep books near the pooja place",
      "Chant Saraswati mantra"
    ]
  },
  {
    "name": "Maha Shivaratri",
    "date": "2027-03-06",
    "day": "Saturday",
    "type": "festival",
    "icon": "🕉️",
    "description": "The great night of Lord Shiva, observed with abhishek, fasting and mantra jap.",
    "steps": [
      "Do jal abhishek",
      "Offer bilva leaves",
      "Chant Om Namah Shivaya",
      "Read Shiv Chalisa"
    ]
  },
  {
    "name": "Holika Dahan",
    "date": "2027-03-21",
    "day": "Sunday",
    "type": "festival",
    "icon": "🔥",
    "description": "A sacred evening remembering the victory of devotion and goodness.",
    "steps": [
      "Offer prayer before Holika",
      "Remember Prahlad's devotion",
      "Pray for protection",
      "Share sweets with family"
    ]
  },
  {
    "name": "Holi",
    "date": "2027-03-22",
    "day": "Monday",
    "type": "festival",
    "icon": "🎨",
    "description": "A joyful festival of colors, forgiveness and family celebration.",
    "steps": [
      "Offer morning prayer",
      "Apply gulal respectfully",
      "Share sweets",
      "Visit family"
    ]
  },
  {
    "name": "Ugadi / Gudi Padwa / Telugu New Year",
    "date": "2027-04-07",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🌿",
    "description": "A regional New Year celebration for prosperity, cleanliness and fresh starts.",
    "steps": [
      "Clean the pooja space",
      "Light a deepak",
      "Offer seasonal food",
      "Pray for a blessed year"
    ]
  },
  {
    "name": "Tamil New Year",
    "date": "2027-04-14",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🌸",
    "description": "Tamil New Year, celebrated with prayer, auspicious food and family blessings.",
    "steps": [
      "Prepare the pooja thali",
      "Offer flowers and fruits",
      "Pray for prosperity",
      "Take blessings from elders"
    ]
  },
  {
    "name": "Vaisakhi / Baisakhi / Vishu",
    "date": "2027-04-14",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🌾",
    "description": "A harvest and New Year celebration marked with gratitude and joy.",
    "steps": [
      "Offer grains or fruits",
      "Light a deepak",
      "Thank the divine for abundance",
      "Share food"
    ]
  },
  {
    "name": "Bengali New Year / Bihu",
    "date": "2027-04-15",
    "day": "Thursday",
    "type": "festival",
    "icon": "🌺",
    "description": "A New Year celebration of renewal, culture, harvest and family joy.",
    "steps": [
      "Light a deepak",
      "Offer sweets",
      "Pray for new beginnings",
      "Share blessings with family"
    ]
  },
  {
    "name": "Ramanavami",
    "date": "2027-04-15",
    "day": "Thursday",
    "type": "festival",
    "icon": "🏹",
    "description": "The birth celebration of Lord Rama, observed with bhajan and Ram naam.",
    "steps": [
      "Chant Shri Ram Jai Ram",
      "Read Ramayana verses",
      "Offer fruits",
      "Do aarti"
    ]
  },
  {
    "name": "Hanuman Jayanti",
    "date": "2027-04-20",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🚩",
    "description": "A devotional day celebrating Lord Hanuman's strength, humility and service.",
    "steps": [
      "Read Hanuman Chalisa",
      "Offer sindoor",
      "Offer boondi or fruits",
      "Chant Hanuman mantra"
    ]
  },
  {
    "name": "Akshaya Tritiya",
    "date": "2027-05-09",
    "day": "Sunday",
    "type": "festival",
    "icon": "🪙",
    "description": "An auspicious day for prosperity, charity and sacred beginnings.",
    "steps": [
      "Worship Lakshmi Narayan",
      "Offer yellow flowers",
      "Donate food",
      "Begin a good deed"
    ]
  },
  {
    "name": "Savitri Pooja",
    "date": "2027-06-04",
    "day": "Friday",
    "type": "vrat",
    "icon": "🌳",
    "description": "A vrat observed for family wellbeing, strength and marital blessings.",
    "steps": [
      "Offer water near a sacred tree",
      "Pray for family health",
      "Listen to Savitri katha",
      "Take blessings from elders"
    ]
  },
  {
    "name": "Puri Rath Yatra",
    "date": "2027-07-05",
    "day": "Monday",
    "type": "festival",
    "icon": "🛕",
    "description": "The chariot festival of Lord Jagannath, Balabhadra and Subhadra.",
    "steps": [
      "Chant Jai Jagannath",
      "Offer fruits",
      "Read Jagannath bhajan",
      "Serve prasad"
    ]
  },
  {
    "name": "Guru Purnima",
    "date": "2027-07-18",
    "day": "Sunday",
    "type": "festival",
    "icon": "🪔",
    "description": "A day to remember gurus, elders and all sources of wisdom with gratitude.",
    "steps": [
      "Light a deepak",
      "Offer flowers to Guru",
      "Take blessings from elders",
      "Donate food or clothes"
    ]
  },
  {
    "name": "Nag Panchami",
    "date": "2027-08-06",
    "day": "Friday",
    "type": "festival",
    "icon": "🐍",
    "description": "A traditional day of reverence for Nag Devta and protection from harm.",
    "steps": [
      "Offer milk symbolically",
      "Pray to Nag Devta",
      "Avoid digging soil",
      "Keep the home peaceful"
    ]
  },
  {
    "name": "Varalakshmi Vrat",
    "date": "2027-08-13",
    "day": "Friday",
    "type": "vrat",
    "icon": "🪷",
    "description": "A vrat dedicated to Maa Lakshmi for prosperity, grace and family happiness.",
    "steps": [
      "Clean the pooja space",
      "Offer lotus or flowers",
      "Read Lakshmi aarti",
      "Offer sweet prasad"
    ]
  },
  {
    "name": "Raksha Bandhan",
    "date": "2027-08-17",
    "day": "Tuesday",
    "type": "festival",
    "icon": "🌸",
    "description": "A joyful family festival celebrating protection, affection and sibling blessings.",
    "steps": [
      "Prepare aarti thali",
      "Tie rakhi with tilak",
      "Offer sweets",
      "Pray for family wellbeing"
    ]
  },
  {
    "name": "Krishna Janmashtami",
    "date": "2027-08-25",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🪈",
    "description": "The birth celebration of Lord Krishna, filled with bhajan, fasting and joy.",
    "steps": [
      "Decorate Bal Gopal",
      "Offer makhan mishri",
      "Chant Krishna naam",
      "Do midnight prayer if possible"
    ]
  },
  {
    "name": "Ganesh Chaturthi",
    "date": "2027-09-04",
    "day": "Saturday",
    "type": "festival",
    "icon": "🐘",
    "description": "A day to welcome Lord Ganesh, remover of obstacles and giver of wisdom.",
    "steps": [
      "Offer durva grass",
      "Offer modak",
      "Read Ganesh aarti",
      "Pray before new work"
    ]
  },
  {
    "name": "Onam",
    "date": "2027-09-12",
    "day": "Sunday",
    "type": "festival",
    "icon": "🌼",
    "description": "A joyful harvest festival of abundance, welcome and family meals.",
    "steps": [
      "Decorate with flowers",
      "Offer seasonal food",
      "Pray for prosperity",
      "Share a family meal"
    ]
  },
  {
    "name": "Vishwakarma Puja",
    "date": "2027-09-17",
    "day": "Friday",
    "type": "festival",
    "icon": "🛠️",
    "description": "A day to honor tools, work, skill and divine craftsmanship.",
    "steps": [
      "Clean tools and work area",
      "Offer flowers",
      "Pray for safe work",
      "Share prasad"
    ]
  },
  {
    "name": "Mahalaya Amavasya",
    "date": "2027-09-29",
    "day": "Wednesday",
    "type": "vrat",
    "icon": "🌑",
    "description": "A quiet day for remembrance, gratitude to ancestors and prayer.",
    "steps": [
      "Light a sesame oil lamp",
      "Offer water in remembrance",
      "Donate food",
      "Keep thoughts pure"
    ]
  },
  {
    "name": "Navaratri begins",
    "date": "2027-09-30",
    "day": "Thursday",
    "type": "festival",
    "icon": "🌺",
    "description": "The beginning of nine devotional nights worshipping Maa Durga.",
    "steps": [
      "Clean the pooja space",
      "Light a deepak",
      "Read Durga Chalisa",
      "Offer red flowers"
    ]
  },
  {
    "name": "Maha Navami",
    "date": "2027-10-08",
    "day": "Friday",
    "type": "festival",
    "icon": "🌺",
    "description": "A sacred Navaratri day for worshipping Maa Durga with devotion and gratitude.",
    "steps": [
      "Light a deepak",
      "Offer red flowers",
      "Read Durga Chalisa",
      "Share prasad"
    ]
  },
  {
    "name": "Navaratri ends",
    "date": "2027-10-09",
    "day": "Saturday",
    "type": "festival",
    "icon": "🌺",
    "description": "The closing day of Navaratri devotion and Durga worship.",
    "steps": [
      "Offer halwa or fruits",
      "Read Durga aarti",
      "Pray for strength",
      "Share prasad"
    ]
  },
  {
    "name": "Dusshera",
    "date": "2027-10-09",
    "day": "Saturday",
    "type": "festival",
    "icon": "🏹",
    "description": "A festival celebrating the victory of dharma and goodness.",
    "steps": [
      "Pray to Lord Rama",
      "Remember victory of truth",
      "Offer sweets",
      "Begin one good habit"
    ]
  },
  {
    "name": "Sharad Purnima",
    "date": "2027-10-14",
    "day": "Thursday",
    "type": "vrat",
    "icon": "🌕",
    "description": "A full moon night associated with cool moonlight, devotion and kheer offering.",
    "steps": [
      "Offer kheer",
      "Pray under moonlight if possible",
      "Chant peaceful mantras",
      "Share prasad"
    ]
  },
  {
    "name": "Karwa Chauth",
    "date": "2027-10-18",
    "day": "Monday",
    "type": "vrat",
    "icon": "🌙",
    "description": "A vrat observed with prayer for marital wellbeing and long life.",
    "steps": [
      "Prepare pooja thali",
      "Listen to vrat katha",
      "Offer water to Chandra",
      "Take family blessings"
    ]
  },
  {
    "name": "Dhan Teras",
    "date": "2027-10-27",
    "day": "Wednesday",
    "type": "festival",
    "icon": "🪙",
    "description": "An auspicious Diwali season day for health, wealth and Lakshmi worship.",
    "steps": [
      "Light diyas",
      "Pray to Dhanvantari",
      "Offer sweets",
      "Clean the entrance"
    ]
  },
  {
    "name": "Diwali",
    "date": "2027-10-29",
    "day": "Friday",
    "type": "festival",
    "icon": "🪔",
    "description": "Festival of lights, Lakshmi pooja, cleanliness, gratitude and family joy.",
    "steps": [
      "Clean pooja space",
      "Do Lakshmi Ganesh pooja",
      "Light diyas",
      "Share sweets"
    ]
  },
  {
    "name": "Bhai Dooj",
    "date": "2027-10-31",
    "day": "Sunday",
    "type": "festival",
    "icon": "🌸",
    "description": "A family festival celebrating affection and blessings between siblings.",
    "steps": [
      "Prepare tilak thali",
      "Offer sweets",
      "Do aarti",
      "Pray for family protection"
    ]
  },
  {
    "name": "Chhath Puja",
    "date": "2027-11-04",
    "day": "Thursday",
    "type": "festival",
    "icon": "☀️",
    "description": "A sacred worship of Surya Dev and Chhathi Maiya with discipline and gratitude.",
    "steps": [
      "Offer arghya to Surya",
      "Keep pooja items clean",
      "Offer fruits",
      "Pray for health and prosperity"
    ]
  },
  {
    "name": "Kartik Poornima",
    "date": "2027-11-14",
    "day": "Sunday",
    "type": "festival",
    "icon": "🌕",
    "description": "An auspicious full moon day for lighting lamps, charity and prayer.",
    "steps": [
      "Light diyas",
      "Offer flowers",
      "Donate food",
      "Chant Vishnu mantra"
    ]
  },
  {
    "name": "Geeta Jayanti",
    "date": "2027-12-09",
    "day": "Thursday",
    "type": "festival",
    "icon": "📖",
    "description": "A day to remember the wisdom of the Bhagavad Gita.",
    "steps": [
      "Read a Gita shloka",
      "Offer flowers to Krishna",
      "Chant Hare Krishna",
      "Practice one teaching"
    ]
  },
  {
    "name": "Dhanu Sankranti",
    "date": "2027-12-16",
    "day": "Thursday",
    "type": "festival",
    "icon": "☀️",
    "description": "A Sankranti day for Surya worship, charity and spiritual discipline.",
    "steps": [
      "Offer water to Surya",
      "Donate food",
      "Light a deepak",
      "Pray for steady progress"
    ]
  }
];

const readingData = {
  Shiv: {
    icon: "🕉️",
    Chalisa: "श्री गणेश गिरिजा सुवन, मंगल मूल सुजान।\nकहत अयोध्यादास तुम, देहु अभय वरदान।\n\nजय गिरिजा पति दीन दयाला। सदा करत संतन्ह प्रतिपाला।\nभाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के।",
    Aarti: "ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव, अर्धांगी धारा।",
    Mantra: "ॐ नमः शिवाय\n\nChant slowly with calm breathing.",
    Stotram: "करचरण कृतं वाक्कायजं कर्मजं वा।\nश्रवणनयनजं वा मानसं वापराधम्।"
  },
  Ganesh: {
    icon: "🐘",
    Chalisa: "जय गणपति सदगुण सदन, कविवर बदन कृपाल।\nविघ्न हरण मंगल करण, जय जय गिरिजालाल।",
    Aarti: "जय गणेश जय गणेश, जय गणेश देवा।\nमाता जाकी पार्वती, पिता महादेवा।",
    Mantra: "ॐ गं गणपतये नमः",
    Stotram: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा।"
  },
  Hanuman: {
    icon: "🚩",
    Chalisa: "॥ श्री हनुमान चालीसा ॥\n\nदोहा\n\nश्री गुरु चरन सरोज रज,\nनिज मन मुकुरु सुधारि ।\nबरनऊँ रघुबर बिमल जसु,\nजो दायकु फल चारि ॥\n\nबुद्धिहीन तनु जानिके,\nसुमिरौं पवन-कुमार ।\nबल बुद्धि विद्या देहु मोहिं,\nहरहु कलेश विकार ॥\n\nचौपाई\n\nजय हनुमान ज्ञान गुन सागर ।\nजय कपीस तिहुँ लोक उजागर ॥१॥\n\nराम दूत अतुलित बल धामा ।\nअंजनि पुत्र पवनसुत नामा ॥२॥\n\nमहाबीर विक्रम बजरंगी ।\nकुमति निवार सुमति के संगी ॥३॥\n\nकंचन बरन बिराज सुबेसा ।\nकानन कुण्डल कुंचित केसा ॥४॥\n\nहाथ बज्र औ ध्वजा बिराजै ।\nकाँधे मूँज जनेऊ साजै ॥५॥\n\nशंकर सुवन केसरी नन्दन ।\nतेज प्रताप महा जग वन्दन ॥६॥\n\nविद्यावान गुनी अति चातुर ।\nराम काज करिबे को आतुर ॥७॥\n\nप्रभु चरित्र सुनिबे को रसिया ।\nराम लखन सीता मन बसिया ॥८॥\n\nसूक्ष्म रूप धरि सियहिं दिखावा ।\nविकट रूप धरि लंक जरावा ॥९॥\n\nभीम रूप धरि असुर सँहारे ।\nरामचन्द्र के काज सँवारे ॥१०॥\n\nलाय सजीवन लखन जियाये ।\nश्रीरघुबीर हरषि उर लाये ॥११॥\n\nसहस बदन तुम्हरो जस गावैं ।\nअस कहि श्रीपति कण्ठ लगावैं ॥१२॥\n\nसनकादिक ब्रह्मादि मुनीसा ।\nनारद सारद सहित अहीसा ॥१३॥\n\nजम कुबेर दिगपाल जहाँ ते ।\nकवि कोविद कहि सके कहाँ ते ॥१४॥\n\nतुम उपकार सुग्रीवहिं कीन्हा ।\nराम मिलाय राज पद दीन्हा ॥१५॥\n\nतुम्हरो मंत्र विभीषण माना ।\nलंकेश्वर भए सब जग जाना ॥१६॥\n\nयुग सहस्र योजन पर भानू ।\nलील्यो ताहि मधुर फल जानू ॥१७॥\n\nप्रभु मुद्रिका मेलि मुख माहीं ।\nजलधि लाँघि गये अचरज नाहीं ॥१८॥\n\nदुर्गम काज जगत के जेते ।\nसुगम अनुग्रह तुम्हरे तेते ॥१९॥\n\nराम दुआरे तुम रखवारे ।\nहोत न आज्ञा बिनु पैसारे ॥२०॥\n\nसब सुख लहै तुम्हारी सरना ।\nतुम रक्षक काहू को डरना ॥२१॥\n\nआपन तेज सम्हारो आपै ।\nतीनों लोक हाँक ते काँपै ॥२२॥\n\nभूत पिशाच निकट नहिं आवै ।\nमहाबीर जब नाम सुनावै ॥२३॥\n\nनासै रोग हरै सब पीरा ।\nजपत निरंतर हनुमत बीरा ॥२४॥\n\nसंकट तें हनुमान छुड़ावै ।\nमन क्रम बचन ध्यान जो लावै ॥२५॥\n\nसब पर राम तपस्वी राजा ।\nतिन के काज सकल तुम साजा ॥२६॥\n\nऔर मनोरथ जो कोई लावै ।\nसोइ अमित जीवन फल पावै ॥२७॥\n\nचारों जुग परताप तुम्हारा ।\nहै परसिद्ध जगत उजियारा ॥२८॥\n\nसाधु संत के तुम रखवारे ।\nअसुर निकंदन राम दुलारे ॥२९॥\n\nअष्ट सिद्धि नौ निधि के दाता ।\nअस बर दीन जानकी माता ॥३०॥\n\nराम रसायन तुम्हरे पासा ।\nसदा रहो रघुपति के दासा ॥३१॥\n\nतुम्हरे भजन राम को पावै ।\nजनम जनम के दुख बिसरावै ॥३२॥\n\nअंत काल रघुवर पुर जाई ।\nजहाँ जन्म हरिभक्त कहाई ॥३३॥\n\nऔर देवता चित्त न धरई ।\nहनुमत सेइ सर्व सुख करई ॥३४॥\n\nसंकट कटै मिटै सब पीरा ।\nजो सुमिरै हनुमत बलबीरा ॥३५॥\n\nजय जय जय हनुमान गोसाईं ।\nकृपा करहु गुरुदेव की नाईं ॥३६॥\n\nजो शत बार पाठ कर कोई ।\nछूटहि बंदि महा सुख होई ॥३७॥\n\nजो यह पढ़ै हनुमान चालीसा ।\nहोय सिद्धि साखी गौरीसा ॥३८॥\n\nतुलसीदास सदा हरि चेरा ।\nकीजै नाथ हृदय महँ डेरा ॥३९॥\n\nदोहा\n\nपवनतनय संकट हरन,\nमंगल मूरति रूप ।\nराम लखन सीता सहित,\nहृदय बसहु सुर भूप ॥",
    Aarti: "आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की।",
    Mantra: "ॐ हनुमते नमः",
    Stotram: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।"
  },
  Durga: {
    icon: "🌺",
    Chalisa: "नमो नमो दुर्गे सुख करनी।\nनमो नमो अम्बे दुख हरनी।",
    Aarti: "जय अम्बे गौरी, मैया जय श्यामा गौरी।\nतुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी।",
    Mantra: "ॐ दुं दुर्गायै नमः",
    Stotram: "या देवी सर्वभूतेषु शक्ति रूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः।"
  },
  Lakshmi: {
    icon: "🪷",
    Chalisa: "मातु लक्ष्मी करि कृपा, करो हृदय में वास।\nमनोकामना सिद्ध करि, पुरवहु मेरी आस।",
    Aarti: "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।\nतुमको निशदिन सेवत, हर विष्णु विधाता।",
    Mantra: "ॐ श्रीं महालक्ष्म्यै नमः",
    Stotram: "नमस्तेस्तु महामाये श्रीपीठे सुरपूजिते।\nशंखचक्रगदाहस्ते महालक्ष्मि नमोस्तुते।"
  },
  "Sai Baba": {
    icon: "🌼",
    Chalisa: "पहले साईं के चरणों में, अपना शीश नवाऊं मैं।\nकैसे शिर्डी साईं आए, सारा हाल सुनाऊं मैं।",
    Aarti: "आरती श्री साईं गुरु वर की।\nपरमानन्द सदा सुरवर की।",
    Mantra: "ॐ साईं राम",
    Stotram: "सबका मालिक एक।\nश्रद्धा और सबुरी।"
  }
};

const quotes = [
  "Karma is worship when done with love.",
  "A peaceful home begins with a peaceful prayer.",
  "Small daily devotion becomes lifelong strength.",
  "Gratitude is the quietest form of pooja."
];

const hindiQuotes = [
  "प्रेम से किया गया कर्म ही पूजा है।",
  "शांत प्रार्थना से घर में शांति आती है।",
  "रोज की छोटी भक्ति जीवन भर की शक्ति बनती है।",
  "कृतज्ञता पूजा का सबसे शांत रूप है।"
];

const poojaHindi = {
  Sunday: {
    god: "भगवान सूर्य",
    offering: "जल, लाल फूल और शांत सुबह की प्रार्थना अर्पित करें।",
    tasks: ["सूर्य देव को जल अर्पित करें", "घी का दीपक जलाएं", "गायत्री मंत्र का जाप करें", "आदित्य हृदय स्तोत्र पढ़ें"]
  },
  Monday: {
    god: "भगवान शिव",
    offering: "जल, बिल्व पत्र और सफेद फूल अर्पित करें।",
    tasks: ["जल अभिषेक करें", "बिल्व पत्र अर्पित करें", "ॐ नमः शिवाय 108 बार जपें", "शिव चालीसा पढ़ें"]
  },
  Tuesday: {
    god: "भगवान हनुमान",
    offering: "सिंदूर, बूंदी प्रसाद और सच्ची भक्ति अर्पित करें।",
    tasks: ["हनुमान चालीसा पढ़ें", "सिंदूर अर्पित करें", "बूंदी प्रसाद चढ़ाएं", "बजरंग बाण का पाठ करें"]
  },
  Wednesday: {
    god: "भगवान गणेश",
    offering: "दूर्वा, मोदक और बुद्धि के लिए प्रार्थना अर्पित करें।",
    tasks: ["दूर्वा अर्पित करें", "मोदक चढ़ाएं", "गणेश चालीसा पढ़ें", "गणेश आरती करें"]
  },
  Thursday: {
    god: "साईं बाबा / भगवान विष्णु",
    offering: "पीले फूल, केला और कृतज्ञता अर्पित करें।",
    tasks: ["पीले फूल अर्पित करें", "केला चढ़ाएं", "विष्णु सहस्रनाम पढ़ें", "साईं आरती करें"]
  },
  Friday: {
    god: "मां लक्ष्मी",
    offering: "खीर, कमल के फूल और घी का दीपक अर्पित करें।",
    tasks: ["घी का दीपक जलाएं", "खीर का भोग लगाएं", "लक्ष्मी चालीसा पढ़ें", "कनकधारा स्तोत्र जपें"]
  },
  Saturday: {
    god: "भगवान शनि और हनुमान",
    offering: "सरसों के तेल का दीपक, काले तिल और हनुमान चालीसा अर्पित करें।",
    tasks: ["सरसों के तेल का दीपक जलाएं", "हनुमान चालीसा पढ़ें", "काले तिल अर्पित करें", "शनि चालीसा पढ़ें"]
  }
};

const staticHindiText = {
  "Skip to content": "मुख्य सामग्री पर जाएं",
  "Jai Mata Di": "जय माता दी",
  "Loading today's date": "आज की तारीख लोड हो रही है",
  "Today": "आज",
  "Today's God": "आज के भगवान",
  "Your pooja details will appear here.": "आज की पूजा की जानकारी यहां दिखाई देगी।",
  "Morning Pooja": "सुबह की पूजा",
  "Today's checklist": "आज की सूची",
  "Mantra": "मंत्र",
  "Daily mantra": "दैनिक मंत्र",
  "Upcoming": "आगामी",
  "Festivals": "त्योहार",
  "View all": "सभी देखें",
  "Quick Access": "त्वरित पहुंच",
  "Begin with one tap": "एक टैप में शुरू करें",
  "Chalisa": "चालीसा",
  "Daily path": "दैनिक पाठ",
  "Aarti": "आरती",
  "Evening prayer": "शाम की प्रार्थना",
  "Mantras": "मंत्र",
  "Peaceful jap": "शांत जाप",
  "Bhajans": "भजन",
  "Devotional songs": "भक्ति गीत",
  "Fasts": "व्रत",
  "Vrat dates": "व्रत तिथियां",
  "Details": "विवरण",
  "Calendar": "कैलेंडर",
  "This month": "यह महीना",
  "Open": "खोलें",
  "Daily Quote": "दैनिक विचार",
  "A peaceful thought": "शांत विचार",
  "Reminder": "याद दिलाना",
  "Today's reminder": "आज का रिमाइंडर",
  "Home": "होम",
  "Read": "पाठ",
  "Settings": "सेटिंग्स",
  "Hindu Calendar": "हिंदू कैलेंडर",
  "Monthly pooja calendar": "मासिक पूजा कैलेंडर",
  "Year": "वर्ष",
  "Month": "महीना",
  "Today highlighted": "आज हाइलाइट है",
  "This Month": "इस महीने",
  "Festival dates": "त्योहार की तिथियां",
  "Panchang API and notification support can be added here later.": "पंचांग API और नोटिफिकेशन सुविधा बाद में यहां जोड़ी जा सकती है।",
  "Chalisa, Aarti and Mantras": "चालीसा, आरती और मंत्र",
  "Dark": "डार्क",
  "Save": "सेव",
  "Saved": "सेव किया",
  "Select a path": "पाठ चुनें",
  "Vrat and festival guide": "व्रत और त्योहार गाइड",
  "Next Festival": "अगला त्योहार",
  "Loading": "लोड हो रहा है",
  "Please wait": "कृपया प्रतीक्षा करें",
  "Festival details": "त्योहार विवरण",
  "Simple pooja": "सरल पूजा",
  "Comfort and reading": "सुविधा और पाठ",
  "Appearance": "दिखावट",
  "Display settings": "डिस्प्ले सेटिंग्स",
  "Dark mode": "डार्क मोड",
  "Comfortable for evening aarti": "शाम की आरती के लिए आरामदायक",
  "Text size": "टेक्स्ट आकार",
  "Choose larger letters for easy reading": "आसान पढ़ने के लिए बड़े अक्षर चुनें",
  "Language": "भाषा",
  "Interface preference": "इंटरफेस पसंद",
  "English": "अंग्रेज़ी",
  "Hindi": "हिंदी",
  "Bookmarks": "बुकमार्क",
  "Saved readings": "सेव किए गए पाठ",
  "No saved readings yet.": "अभी कोई पाठ सेव नहीं है।",
  "Have a blessed day": "आपका दिन मंगलमय हो",
  "May the morning pooja bring peace, health and joy to the whole family.": "सुबह की पूजा पूरे परिवार में शांति, स्वास्थ्य और आनंद लाए।"
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  applySavedSettings();
  markActiveNav();
  bindGlobalControls();

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "calendar") initCalendarPage();
  if (page === "read") initReadPage();
  if (page === "festival") initFestivalPage();
  if (page === "settings") initSettingsPage();
  applyLanguage();
}

function applySavedSettings() {
  document.body.classList.toggle("dark", localStorage.getItem(STORAGE.theme) === "dark");
  document.documentElement.style.setProperty("--font-scale", localStorage.getItem(STORAGE.font) || "1");
  document.documentElement.style.setProperty("--reader-scale", localStorage.getItem(STORAGE.reader) || "1");
  document.documentElement.lang = isHindi() ? "hi" : "en";
}

function bindGlobalControls() {
  const themeButton = document.getElementById("homeThemeToggle");
  if (themeButton) themeButton.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem(STORAGE.theme, isDark ? "dark" : "light");
  const setting = document.getElementById("darkModeSetting");
  if (setting) setting.checked = isDark;
}

function markActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === page);
  });
}

function isHindi() {
  return localStorage.getItem(STORAGE.language) === "hindi";
}

function appLocale() {
  return isHindi() ? "hi-IN" : "en-IN";
}

function translateText(text) {
  return isHindi() ? (staticHindiText[text] || text) : text;
}

function applyLanguage() {
  document.documentElement.lang = isHindi() ? "hi" : "en";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const icon = link.querySelector("span")?.outerHTML || "";
    const label = {
      home: "Home",
      calendar: "Calendar",
      read: "Read",
      festival: "Festivals",
      settings: "Settings"
    }[link.dataset.nav];
    if (label) link.innerHTML = `${icon}${translateText(label)}`;
  });

  document.querySelectorAll("body *").forEach((element) => {
    if (element.matches("script, style, option")) return;
    if (element.children.length) return;
    const original = element.dataset.enText || element.textContent.trim();
    if (!original) return;
    element.dataset.enText = original;
    const translated = translateText(original);
    element.textContent = translated;
  });

  document.querySelectorAll("option").forEach((option) => {
    const original = option.dataset.enText || option.textContent.trim();
    option.dataset.enText = original;
    option.textContent = translateText(original);
  });

  const reminder = document.getElementById("dailyReminder");
  if (reminder) {
    reminder.placeholder = isHindi() ? "उदाहरण: स्नान के बाद तुलसी पत्र अर्पित करें" : "Example: Offer tulsi leaves after bath";
  }
}

function initHome() {
  const now = new Date();
  const dayName = weekdayKey(now);
  const pooja = poojaByDay[dayName];
  const poojaDisplay = getPoojaForLanguage(dayName);

  setText("homeGreeting", getGreeting(now));
  setText("todayDate", formatLongDate(now));
  setText("todayDay", weekday(now));
  setText("todayGodTitle", poojaDisplay.god);
  setText("todayOffering", poojaDisplay.offering);
  setText("todaySymbol", pooja.symbol);
  setText("todayMantra", pooja.mantra);
  setText("dailyQuote", (isHindi() ? hindiQuotes : quotes)[now.getDate() % quotes.length]);

  updateClock();
  setInterval(updateClock, 30000);
  renderChecklist(dayName, poojaDisplay.tasks);
  renderMiniCalendar("miniCalendar", 14);
  renderHomeFestivals();

  const reminder = document.getElementById("dailyReminder");
  if (reminder) {
    reminder.value = localStorage.getItem(STORAGE.reminder) || "";
    reminder.addEventListener("input", () => localStorage.setItem(STORAGE.reminder, reminder.value));
  }
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
  setText("homeGreeting", getGreeting(now));
  setText("liveTime", time);
}

function getGreeting(date) {
  const hour = date.getHours();
  if (isHindi()) {
    if (hour < 5) return "शुभ रात्रि मम्मी";
    if (hour < 12) return "सुप्रभात मम्मी";
    if (hour < 17) return "शुभ दोपहर मम्मी";
    if (hour < 21) return "शुभ संध्या मम्मी";
    return "शुभ रात्रि मम्मी";
  }
  if (hour < 5) return "Peaceful Night Mummy";
  if (hour < 12) return "Good Morning Mummy";
  if (hour < 17) return "Good Afternoon Mummy";
  if (hour < 21) return "Good Evening Mummy";
  return "Shubh Ratri Mummy";
}

function getPoojaForLanguage(dayName) {
  if (!isHindi()) return poojaByDay[dayName];
  return { ...poojaByDay[dayName], ...poojaHindi[dayName] };
}

function renderChecklist(dayName, tasks) {
  const container = document.getElementById("todayChecklist");
  if (!container) return;

  const key = `${STORAGE.checklist}.${new Date().toISOString().slice(0, 10)}.${dayName}`;
  const done = JSON.parse(localStorage.getItem(key) || "[]");

  container.innerHTML = tasks.map((task, index) => `
    <label class="check-item">
      <input type="checkbox" data-index="${index}" ${done.includes(index) ? "checked" : ""}>
      <span>${task}</span>
    </label>
  `).join("");

  const updateCount = () => {
    const checked = [...container.querySelectorAll("input:checked")].map((input) => Number(input.dataset.index));
    localStorage.setItem(key, JSON.stringify(checked));
    setText("checkCount", `${checked.length}/${tasks.length}`);
  };

  container.addEventListener("change", updateCount);
  updateCount();
}

async function getFestivals() {
  try {
    const response = await fetch("data/festivals.json");
    if (!response.ok) throw new Error("Festival data unavailable");
    return await response.json();
  } catch {
    return fallbackFestivals;
  }
}

async function renderHomeFestivals() {
  const festivals = await getFestivals();
  const upcoming = getUpcomingFestivals(festivals).slice(0, 3);
  const container = document.getElementById("homeFestivals");
  if (!container) return;
  container.innerHTML = upcoming.map(festivalItemMarkup).join("");
}

function festivalItemMarkup(festival) {
  return `
    <div class="festival-item">
      <div><strong>${festival.icon} ${festival.name}</strong><small>${formatDate(festival.date)}</small></div>
      <span class="soft-pill">${daysUntil(festival.date)} ${isHindi() ? "दिन" : "days"}</span>
    </div>
  `;
}

function initCalendarPage() {
  let selectedDate = new Date();
  const monthSelect = document.getElementById("monthSelect");
  const yearSelect = document.getElementById("yearSelect");
  const monthNames = Array.from({ length: 12 }, (_, index) => new Date(2026, index, 1).toLocaleString(appLocale(), { month: "long" }));

  if (monthSelect) {
    monthSelect.innerHTML = monthNames.map((month, index) => `<option value="${index}">${month}</option>`).join("");
  }

  if (yearSelect) {
    const currentYear = selectedDate.getFullYear();
    const years = [];
    for (let year = currentYear - 1; year <= Math.max(2027, currentYear + 4); year += 1) years.push(year);
    yearSelect.innerHTML = years.map((year) => `<option value="${year}">${year}</option>`).join("");
  }

  const renderSelectedMonth = () => {
    setText("calendarTitle", selectedDate.toLocaleString(appLocale(), { month: "long" }));
    setText("calendarYear", String(selectedDate.getFullYear()));
    if (monthSelect) monthSelect.value = String(selectedDate.getMonth());
    if (yearSelect) yearSelect.value = String(selectedDate.getFullYear());
    renderFullCalendar(selectedDate);
    renderMonthFestivals(selectedDate);
  };

  monthSelect?.addEventListener("change", () => {
    selectedDate = new Date(Number(yearSelect.value), Number(monthSelect.value), 1);
    renderSelectedMonth();
  });

  yearSelect?.addEventListener("change", () => {
    selectedDate = new Date(Number(yearSelect.value), Number(monthSelect.value), 1);
    renderSelectedMonth();
  });

  document.getElementById("prevMonth")?.addEventListener("click", () => {
    selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
    renderSelectedMonth();
  });

  document.getElementById("nextMonth")?.addEventListener("click", () => {
    selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
    renderSelectedMonth();
  });

  renderSelectedMonth();
}

async function renderMonthFestivals(date) {
  const festivals = await getFestivals();
  const monthFestivals = festivals.filter((festival) => {
    const festivalDate = parseLocalDate(festival.date);
    return festivalDate.getMonth() === date.getMonth() && festivalDate.getFullYear() === date.getFullYear();
  });
  const container = document.getElementById("monthFestivals");
  if (!container) return;
  container.innerHTML = monthFestivals.length ? monthFestivals.map(festivalItemMarkup).join("") : `<p>${isHindi() ? "इस महीने के लिए कोई त्योहार तिथि सेव नहीं है।" : "No festival dates saved for this month."}</p>`;
}

async function renderFullCalendar(date) {
  const festivals = await getFestivals();
  renderCalendar("calendarGrid", date, 42, festivals);
}

async function renderMiniCalendar(id, cells) {
  const festivals = await getFestivals();
  renderCalendar(id, new Date(), cells, festivals);
}

function renderCalendar(id, date, cellCount, festivals) {
  const container = document.getElementById(id);
  if (!container) return;

  const labels = (isHindi() ? ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
    .map((day) => `<div class="calendar-label">${day}</div>`);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const todayKey = toDateKey(new Date());
  const showFestivalNames = id === "calendarGrid";
  const festivalsByDay = festivals
    .filter((festival) => {
      const festivalDate = parseLocalDate(festival.date);
      return festivalDate.getMonth() === date.getMonth() && festivalDate.getFullYear() === date.getFullYear();
    })
    .reduce((days, festival) => {
      const day = parseLocalDate(festival.date).getDate();
      days[day] = days[day] || [];
      days[day].push(festival);
      return days;
    }, {});

  const cells = [];
  for (let i = 0; i < cellCount; i += 1) {
    const dayNumber = i - firstDay + 1;
    if (dayNumber < 1 || dayNumber > daysInMonth) {
      cells.push('<div class="calendar-day empty" aria-hidden="true"></div>');
      continue;
    }
    const cellDate = new Date(date.getFullYear(), date.getMonth(), dayNumber);
    const classes = ["calendar-day"];
    const dayFestivals = festivalsByDay[dayNumber] || [];
    if (toDateKey(cellDate) === todayKey) classes.push("today");
    if (dayFestivals.length) classes.push("festival");
    const festivalNames = dayFestivals.map((festival) => festival.name).join(", ");
    const festivalLabel = showFestivalNames && festivalNames
      ? `<small class="calendar-festival-name">${escapeHtml(festivalNames)}</small>`
      : "";
    const ariaLabel = festivalNames ? `${formatDate(toDateKey(cellDate))}, ${festivalNames}` : formatDate(toDateKey(cellDate));
    cells.push(`
      <div class="${classes.join(" ")}" aria-label="${escapeHtml(ariaLabel)}">
        <span class="calendar-date-number">${dayNumber}</span>
        ${festivalLabel}
      </div>
    `);
  }

  container.innerHTML = [...labels, ...cells].join("");
}

function initReadPage() {
  const categories = Object.keys(readingData);
  const types = ["Chalisa", "Aarti", "Mantra", "Stotram"];
  let activeCategory = categories[0];
  let activeType = normalizeType(new URLSearchParams(location.search).get("type")) || "Chalisa";

  const categoryStrip = document.getElementById("categoryStrip");
  const contentTabs = document.getElementById("contentTabs");

  const renderButtons = () => {
    categoryStrip.innerHTML = categories.map((category) => `
      <button class="category-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
        ${readingData[category].icon} ${category}
      </button>
    `).join("");
    contentTabs.innerHTML = types.map((type) => `
      <button class="tab-button ${type === activeType ? "active" : ""}" type="button" data-type="${type}">${type}</button>
    `).join("");
  };

  const renderReading = () => {
    const text = readingData[activeCategory][activeType];
    setText("readingType", activeType);
    setText("readingTitle", `${activeCategory} ${activeType}`);
    setText("readingText", text);
    updateBookmarkButton(activeCategory, activeType);
  };

  categoryStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderButtons();
    renderReading();
  });

  contentTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-type]");
    if (!button) return;
    activeType = button.dataset.type;
    renderButtons();
    renderReading();
  });

  document.getElementById("readerTheme").addEventListener("click", toggleTheme);
  document.getElementById("decreaseReader").addEventListener("click", () => adjustScale(STORAGE.reader, -0.1, "--reader-scale", 0.9, 1.5));
  document.getElementById("increaseReader").addEventListener("click", () => adjustScale(STORAGE.reader, 0.1, "--reader-scale", 0.9, 1.5));
  document.getElementById("bookmarkButton").addEventListener("click", () => toggleBookmark(activeCategory, activeType));
  document.getElementById("scrollTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  addEventListener("scroll", () => document.getElementById("scrollTop").classList.toggle("show", scrollY > 500));

  renderButtons();
  renderReading();
}

function normalizeType(type) {
  if (!type) return "";
  const found = ["Chalisa", "Aarti", "Mantra", "Bhajan", "Stotram"].find((item) => item.toLowerCase() === type.toLowerCase());
  return found === "Bhajan" ? "Aarti" : found;
}

function updateBookmarkButton(category, type) {
  const button = document.getElementById("bookmarkButton");
  if (!button) return;
  const bookmarks = getBookmarks();
  const exists = bookmarks.some((item) => item.category === category && item.type === type);
  button.textContent = exists
    ? `♥ ${isHindi() ? "सेव किया" : "Saved"}`
    : `♡ ${isHindi() ? "सेव" : "Save"}`;
}

function toggleBookmark(category, type) {
  const bookmarks = getBookmarks();
  const exists = bookmarks.some((item) => item.category === category && item.type === type);
  const next = exists ? bookmarks.filter((item) => item.category !== category || item.type !== type) : [...bookmarks, { category, type }];
  localStorage.setItem(STORAGE.bookmarks, JSON.stringify(next));
  updateBookmarkButton(category, type);
}

function getBookmarks() {
  return JSON.parse(localStorage.getItem(STORAGE.bookmarks) || "[]");
}

async function initFestivalPage() {
  const festivals = await getFestivals();
  const upcoming = getUpcomingFestivals(festivals);
  const next = upcoming[0] || festivals[0];

  setText("nextFestivalTitle", `${next.icon} ${next.name}`);
  setText("nextFestivalDate", formatDate(next.date));
  setText("festivalCountdown", `${daysUntil(next.date)} ${isHindi() ? "दिन" : "days"}`);

  const grid = document.getElementById("festivalGrid");
  grid.innerHTML = festivals.map((festival, index) => `
    <button class="festival-card" type="button" data-index="${index}">
      <span>${festival.icon}</span>
      <strong>${festival.name}</strong>
      <small>${formatDate(festival.date)}</small>
    </button>
  `).join("");

  grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-index]");
    if (!card) return;
    openFestivalModal(festivals[Number(card.dataset.index)]);
  });
  document.getElementById("modalClose").addEventListener("click", closeFestivalModal);
  document.getElementById("festivalModal").addEventListener("click", (event) => {
    if (event.target.id === "festivalModal") closeFestivalModal();
  });
}

function openFestivalModal(festival) {
  setText("modalDate", formatDate(festival.date));
  setText("modalTitle", `${festival.icon} ${festival.name}`);
  setText("modalDescription", festival.description);
  document.getElementById("modalSteps").innerHTML = festival.steps.map((step) => `<li>${step}</li>`).join("");
  document.getElementById("festivalModal").hidden = false;
}

function closeFestivalModal() {
  document.getElementById("festivalModal").hidden = true;
}

function initSettingsPage() {
  const darkMode = document.getElementById("darkModeSetting");
  const language = document.getElementById("languageSetting");

  darkMode.checked = document.body.classList.contains("dark");
  darkMode.addEventListener("change", toggleTheme);
  language.value = localStorage.getItem(STORAGE.language) || "english";
  language.addEventListener("change", () => {
    localStorage.setItem(STORAGE.language, language.value);
    applyLanguage();
    renderSavedReadings();
  });

  document.getElementById("fontMinus").addEventListener("click", () => adjustScale(STORAGE.font, -0.1, "--font-scale", 0.9, 1.25));
  document.getElementById("fontPlus").addEventListener("click", () => adjustScale(STORAGE.font, 0.1, "--font-scale", 0.9, 1.25));
  renderSavedReadings();
}

function renderSavedReadings() {
  const container = document.getElementById("savedReadings");
  if (!container) return;
  const bookmarks = getBookmarks();
  container.innerHTML = bookmarks.length
    ? bookmarks.map((item) => `<a href="read.html?type=${item.type.toLowerCase()}">${item.category} ${item.type}</a>`).join("")
    : (isHindi() ? "अभी कोई पाठ सेव नहीं है।" : "No saved readings yet.");
}

function adjustScale(storageKey, delta, cssVar, min, max) {
  const current = Number(localStorage.getItem(storageKey) || "1");
  const next = Math.min(max, Math.max(min, Number((current + delta).toFixed(2))));
  localStorage.setItem(storageKey, String(next));
  document.documentElement.style.setProperty(cssVar, String(next));
}

function getUpcomingFestivals(festivals) {
  const today = startOfDay(new Date());
  return festivals
    .filter((festival) => parseLocalDate(festival.date) >= today)
    .sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date));
}

function daysUntil(dateKey) {
  const today = startOfDay(new Date());
  const target = parseLocalDate(dateKey);
  return Math.max(0, Math.ceil((target - today) / 86400000));
}

function weekday(date) {
  return date.toLocaleDateString(appLocale(), { weekday: "long" });
}

function weekdayKey(date) {
  return date.toLocaleDateString("en-IN", { weekday: "long" });
}

function formatLongDate(date) {
  return date.toLocaleDateString(appLocale(), { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function formatDate(dateKey) {
  return parseLocalDate(dateKey).toLocaleDateString(appLocale(), { day: "numeric", month: "long", year: "numeric" });
}

function parseLocalDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}
