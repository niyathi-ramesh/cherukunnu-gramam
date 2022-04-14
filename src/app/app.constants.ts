export const navList = [
  {
    name: 'home',
    displayName: 'Home',
    url: '',
  },
  {
    name: 'about',
    displayName: 'About',
    url: 'about',
    children: [
      {
        name: 'historyCulture',
        displayName: 'History and Culture',
        url: 'history-culture',
      },
      {
        name: 'whoIsWho',
        displayName: "Who's Who",
        url: 'who-is-who',
      },
      {
        name: 'mapOfVillage',
        displayName: 'Map of Village',
        url: 'map-of-village',
      },
      {
        name: 'demography',
        displayName: 'Demography',
        url: 'demography',
      },
    ],
  },
  {
    name: 'gallery',
    displayName: 'Gallery',
    url: 'gallery',
  },
  {
    name: 'directory',
    displayName: 'Directory',
    url: 'directory',
  },
  {
    name: 'tourism',
    displayName: 'Tourism',
    url: 'tourism',
  },
];
