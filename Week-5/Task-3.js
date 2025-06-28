const getPlanetName = (planetId) => {
    return new Promise((resolve, reject) => {
        fetch('https://swapi.dev/api/planets/' + planetId)
            .then(response => {
                if(response.status !== 200) {
                    throw new Error('Cannot fetch planet data');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    });
};

getPlanetName(4);

// API Certiciate Invalid ???