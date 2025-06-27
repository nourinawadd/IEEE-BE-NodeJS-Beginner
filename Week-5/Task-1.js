// XMLHttpRequest Example

const xmlRequest = () => {

    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            resolve(request.responseText);
        }
        else if (request.readyState === 4) {
            reject(new Error('Error fetching data'));
        }
    })

    request.open('GET', 'http://numbersapi.com/42');
    request.send();
    });
};

xmlRequest()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });

// Fetch Example

const fetchRequest = () => {
    return fetch('http://numbersapi.com/43').then(response => {
        if(response.status !== 200) {
            throw new Error('Cannot fetch data');
        }
        return response.text();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err.message);
    });
};

fetchRequest();