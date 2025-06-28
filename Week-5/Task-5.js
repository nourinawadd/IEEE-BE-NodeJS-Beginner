// Using Promise Chainingg
new Promise((resolve, reject) => {
    setTimeout(() => { 
        console.log("Hey there!");
        resolve(); 
    }, 5000);
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            console.log("This code will help you understand");
            resolve();
        }, 4000);
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => { 
            console.log("Asynchronous Programming");
            resolve();
        }, 3000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => { 
            console.log("What The Callback Hell!!!");
            resolve();
        }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => { 
            console.log("I AM STUCK");
            resolve();
        }, 1000);
        });
    });
});

// Using Async/Await syntax
const delay = (message, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, time);
    });
};

const runMessages = async () => {
    await delay("Hey there!", 5000);
    await delay("This code will help you understand", 3000);
    await delay("Asynchronous Programming", 2000);
    await delay("What The Callback Hell!!!", 3000);
    await delay("I AM STUCK", 1000);
};

runMessages();
