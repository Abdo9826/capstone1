const speaker = [
  {
    id: 1,
    name: 'Yochai Benkler',
    Title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
    image: 'yochai.PNG',
  },
  {
    id: 2,
    name: 'SohYeong Noh',
    Title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'SoYeong.PNG',
  },
  {
    id: 3,
    name: 'Lila Tretikov',
    Title: 'Executive Director of the Wikimedia foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundatinn, the nonprofit organization that operates Wikipeda',
    image: 'Lila.PNG',
  },
  {
    id: 4,
    name: 'Kilnam Chou',
    Title: '',
    description: 'Kilnam Chou helped bring the Internet to Asia and is an outspoken advocate for the open web and com-mons.',
    image: 'Kilnam.PNG',
  },
  {
    id: 5,
    name: 'Julia Leda',
    Title: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and partcipation of youth through online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parlament in July',
    image: 'Julia.PNG',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    Title: 'CEO of creative commmons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Moxilla Foundation such as the open source move-ment.',
    image: 'Ryan.PNG',
  },
];
const Mainpage = speaker.map((section) => ` <div class="person gap">
<img src="images/${section.image}" alt="">
<div class="details">
    <h3 class="h3pers">${section.name}</h3>
    <h4>${section.Title}</h4>
    <hr>
    <p class="ppers">${section.description}</p>
</div>
</div>

`).join('');

const speakers = document.querySelector('.speakers');
speakers.innerHTML += Mainpage;
