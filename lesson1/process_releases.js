// Write a Function named processReleaseData that processes the following movie release data:
let newReleases = [
  {
    'id': 0,//70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// The Function should generate an Array of Objects that contain only the id and title key/value pairs. You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:
// Keep only releases that have both id and title property present.
// Keep only the id and title data for each release.

/*
In: array of objects
each object can have properties id and title
Out: array of objects
object only has properties id and title

- iterate through objects
- check if object has both id and title
    if it does add/select this object
- map those objects to objects with only id and title
- return mapped object

*/

function processReleaseData(data) {
  return data.filter(release => {
    // select the releases with both id and title properties
    return (release.id || release.id === 0) && release.title
  }).map(release => {
    // map each release to an object with only id and title
    return {id: release.id, title: release.title}
  });
}

console.log( processReleaseData(newReleases) );


// handling ids that could be 0
// would return a falsy value. could check if it is truthy or if it is equal to 0
