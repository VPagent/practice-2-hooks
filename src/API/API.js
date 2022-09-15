

export const requesterAPI = name => {
    return fetch(`https://swapi.py4e.com/api/people/?search=${name}`).then(
      resp => resp.json()
    );
  };