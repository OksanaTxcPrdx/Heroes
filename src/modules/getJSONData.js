const getHeroesData = function (dataPath) {

     return fetch(dataPath)
    .then(response => response.json())
    .then(commits => {
    return commits
    });
    }
export default getHeroesData;