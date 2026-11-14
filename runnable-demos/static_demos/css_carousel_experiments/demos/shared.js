window.DEMO_ITEMS = [
  { title: 'GANESHA FORTUNE', badge: 'JP', theme: 'gold' },
  { title: 'FORTUNE GODS', badge: 'INOUT', theme: 'sand' },
  { title: 'THE GREAT ICESCAPE', badge: 'PG', theme: 'ocean' },
  { title: 'DRAGON BOUNTY', badge: 'TOP', theme: 'fire' },
  { title: 'JADE EMPEROR', badge: 'HOT', theme: 'jade' },
  { title: 'MOON PRINCESS', badge: 'NEW', theme: 'violet' },
  { title: 'LEAF LUCK', badge: 'RTG', theme: 'leaf' },
  { title: 'NIGHT PANTHER', badge: 'VIP', theme: 'night' },
  { title: 'PINK POP', badge: 'FUN', theme: 'pink' }
];

window.createGameCard = function createGameCard(item) {
  const card = document.createElement('article');
  card.className = `game-card theme-${item.theme}`;
  card.innerHTML = `
    <div class="cover">
      <span class="badge">${item.badge}</span>
    </div>
    <div class="card-body">
      <h3 class="title">${item.title}</h3>
      <button class="play" type="button">Play Now</button>
    </div>
  `;
  return card;
};

window.makeDots = function makeDots(count, active) {
  const dots = document.querySelector('.dots');
  if (!dots) return;
  dots.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    if (i === active) dot.className = 'active';
    dots.appendChild(dot);
  }
};
