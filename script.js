/* Add any JavaScript you need to this file. */
var library = [
  {
    name: 'FIFA 21',
    id: 1,
    publisher: 'EA Sports',
    platform: 'PS4',
    cost: 39.99
  },
  {
    name: 'Red Dead Redemption ',
    id: 2,
    publisher: 'Rockstar Games',
    platform: 'Xbox, PS4',
    cost: 39.99
  },
  {
    name: 'NBA 2K14',
    id: 3,
    publisher: '2K Games',
    platform: 'PS4',
    cost: 5.29
  },
  {
    name: 'The Witcher® 3: Wild Hunt',
    id: 4,
    publisher: 'CD Projekt',
    platform: 'PC, PS4, Xbox',
    cost: 55.99
  },
  {
    name: 'SONIC MANIA',
    id: 5,
    publisher: 'Sega',
    platform: 'PS4',
    cost: 28.19
  },
  {
    name: 'Stardew Valley',
    id: 6,
    publisher: 'Chucklefish Games',
    platform: 'PC, PS4, Xbox',
    cost: 16.99
  },
  {
    name: 'Pokémon Lets Go, Pikachu',
    id: 7,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 79.99
  },
  {
    name: 'DRAGON BALL Z KAKAROT',
    id: 8,
    publisher: 'BANDAI NAMCO Entertainment',
    platform: 'PS4',
    cost: 42.29
  },
  {
    name: 'Just Dance® 2021',
    id: 9,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 39.97
  },
  {
    name: 'Ring Fit Adventure',
    id: 10,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 99.99
  },
  {
    name: 'Jumanji',
    id: 11,
    publisher: 'Nintendo',
    platform: 'Switch',
    cost: 54.62
  }
];

window.onload = function() {
  var allgames = document.getElementById('allgames');
  var pc = document.getElementById('pc');
  var playstation = document.getElementById('playstation');
  var xbox = document.getElementById('xbox');
  var nswitch = document.getElementById('switch');

  function loadAllGames(e = library) {
    for (let i = 0; i < library.length; i++) {
      var gameWrapper = document.querySelector('#wrapper');
      let createDiv = document.createElement('div');
      let imageNode = document.createElement('img');
      let createTitle = document.createElement('h3');
      let createPlatform = document.createElement('p');
      let createCost = document.createElement('p');
      let gamePlatform = document.createTextNode('Platform: ' + e[i].platform);
      let gameTitle = document.createTextNode(e[i].name);
      let gameCost = document.createTextNode('$' + e[i].cost);
      createDiv.classList.add('game');
      createDiv.id = e[i].id.toString();
      imageNode.src = 'images/game/' + e[i].id.toString() + '.jpg';
      imageNode.alt = e[i].name + ' box art';

      createTitle.appendChild(gameTitle);
      createPlatform.appendChild(gamePlatform);
      createCost.appendChild(gameCost);

      createDiv.appendChild(imageNode);
      createDiv.appendChild(createTitle);
      createDiv.appendChild(createPlatform);
      createDiv.appendChild(createCost);
      gameWrapper.insertBefore(createDiv, gameWrapper.childNodes[0]);
    }
  }

  allgames.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
    }
    allgames.classList.add('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.remove('currentselection');
  };

  pc.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('PC')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.add('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.remove('currentselection');
  };

  playstation.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('PS4')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.add('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.remove('currentselection');
  };

  xbox.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('Xbox')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.add('currentselection');
    nswitch.classList.remove('currentselection');
  };

  nswitch.onclick = function() {
    for (let i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].platform.includes('Switch')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    allgames.classList.remove('currentselection');
    pc.classList.remove('currentselection');
    playstation.classList.remove('currentselection');
    xbox.classList.remove('currentselection');
    nswitch.classList.add('currentselection');
  };

  loadAllGames();
};
