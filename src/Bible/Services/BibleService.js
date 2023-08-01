const books = [
    ["Genesis", 50],
    ["Exodus", 40],
    ["Leviticus", 27],
    ["Numbers", 36],
    ["Deuteronomy", 34],
    ["Joshua", 24],
    ["Judges", 21],
    ["Ruth", 4],
    ["1 Samuel", 31],
    ["2 Samuel", 24],
    ["1 Kings", 22],
    ["2 Kings", 25],
    ["1 Chronicles", 29],
    ["2 Chronicles", 36],
    ["Ezra", 10],
    ["Nehemiah", 13],
    ["Esther", 10],
    ["Job", 42],
    ["Psalms", 150],
    ["Proverbs", 31],
    ["Ecclesiastes", 12],
    ["Song of Solomon", 8],
    ["Isaiah", 66],
    ["Jeremiah", 52],
    ["Lamentations", 5],
    ["Ezekiel", 48],
    ["Daniel", 12],
    ["Hosea", 14],
    ["Joel", 3],
    ["Amos", 9],
    ["Obadiah", 1],
    ["Jonah", 4],
    ["Micah", 7],
    ["Nahum", 3],
    ["Habakkuk", 3],
    ["Zephaniah", 3],
    ["Haggai", 2],
    ["Zechariah", 14],
    ["Malachi", 4],
    ["Matthew", 28],
    ["Mark", 16],
    ["Luke", 24],
    ["John", 21],
    ["Acts", 28],
    ["Romans", 16],
    ["1 Corinthians", 16],
    ["2 Corinthians", 13],
    ["Galatians", 6],
    ["Ephesians", 6],
    ["Philippians", 4],
    ["Colossians", 4],
    ["1 Thessalonians", 5],
    ["2 Thessalonians", 3],
    ["1 Timothy", 6],
    ["2 Timothy", 4],
    ["Titus", 3],
    ["Philemon", 1],
    ["Hebrews", 13],
    ["James", 5],
    ["1 Peter", 5],
    ["2 Peter", 3],
    ["1 John", 5],
    ["2 John", 1],
    ["3 John", 1],
    ["Jude", 1],
    ["Revelation", 22],
];
const availableBibleVersions = [
    {
        label: "King James Bible (1762)",
        value: "KJB1762",
        copyright: "",
        ot: true,
        nt: true
    },
    {
        label: "King James Bible (1900)",
        value: "KJB1900",
        copyright: "",
        ot: true,
        nt: true
    },
    {
        label: "Reina Valera Gómez (2010)",
        value: "RVG2010",
        copyright: "Copyright © 2004, 2010 Dr. Humberto Gómez Caballero",
        ot: true,
        nt: true
    },
    {
        label: "Masoretic Text (1524-1525)",
        value: "MT1525",
        copyright: "",
        ot: true,
        nt: false
    },
    {
        label: "Textus Receptus (1881, 1894)",
        value: "TR1881",
        copyright: "",
        ot: false,
        nt: true
    },
]
const oldTestamentBooks = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalms',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
];
const newTestamentBooks = [
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation',
];

export { oldTestamentBooks, newTestamentBooks, books, availableBibleVersions }