import getData from './modules/getJSONData';
import second from './modules/showCards';

let heroesDataPath = '/dbHeroes.json';

getData(heroesDataPath)
.then(data => second(data));
