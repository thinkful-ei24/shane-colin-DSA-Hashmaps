//make function that takes a list and integer as arguments
//iterate over the list

input --> flight time --> 180
input --> movie_length -> [150, 100, 30, 60, 80, 100]

output --> true if 2 movies, otherwise false

first_movie = 150
second_movie = 180 - flightTime

look for the second movie in a hashmap
if it is there, retrieve it and return true

if it is not there, add that to the hashmap

function movieSelection(flight_time, movie_length) {
  let first_movie, second_movie = 0;
  let movieDatabase = new Map();
  for(let 1=0, i < movie_lengths; i++) {
    first_movie = length[i]; //120
    second_movie = flight_time - first_movie; //60

    if(movieDatabase.has(second_movie)){
      return true
    }
  movieDatabase.set(first_movie);
  }
  return false;
}
