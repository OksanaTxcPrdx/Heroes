import getData from './modules/getJSONData';
import second from './modules/secondModule';

let heroesDataPath = '/dbHeroes.json';

getData(heroesDataPath)
.then(data => console.log(data));
second();