/*
    callback function is a required parameter - we must know 
    what to do with our data before we call the function.
*/
function noPromise(input, callback) {
    setTimeout(() => {
        callback(`No Promise: ${input}`);
    }, 1000);
}

/*
    no callback function is required - we can call the function
    and then decide what to do with the data AFTER we call the
    function (either using .then chaining or async/await)
*/
function promise(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise: ${input}`);
        }, 1000);
    });
}

/*
    this is the same as the promise function above, except it
    will reject instead of resolve.
*/
function promiseWithException(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Promise Error: ${input}`));
            // You can also do "reject(`Promise Error: ${input}`);"
        }, 1000);
    });
}

(async () => {
    /* no promise - all of these will run at the same time */

    // noPromise('Hello World', console.log);
    // noPromise('Hello World', console.log);
    // noPromise('Hello World', console.log);
    // noPromise('Hello World', console.log);



    /* promises - the promises will run one after the other */

    /* Example 1: chaining - very messy and can get out of hand quickly: callback hell */
    /* Without using "await", the promise chain runs, but the "console.log('test')" line will not wait for the promise to finish */
    // promise('Hello World')
    //     .then(console.log)
    //     .then(() =>
    //         promise('Hello World 2')
    //             .then(console.log)
    //     )
    //     .finally(() => console.log('Done!'))
    //     .catch(console.error);

    // console.log('test')


    /* Example 2: async/await - much cleaner and easier to read */
    /* However, when using "await", the "awaited" promises must run in order before the "console.log('test')" can run */
    // try {
    //     const data = await promise('Hello World');
    //     console.log(data);
    //     const data2 = await promise('Hello World 2');
    //     console.log(data2);
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     console.log('Done!');
    // }

    // console.log('test')


    /* Example 3: async/await with error handling */
    // try {
    //     const data = await promiseWithException('Hello World');
    //     console.log(data);

    //     // this will not run because the promise above rejected
    //     const data2 = await promiseWithException('Hello World 2');
    //     console.log(data2);
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     console.log('Done!'); // this will run regardless of whether the promise resolved or rejected
    // }


    /* Example 4: async/await - no await, what happens? */
    // try {
    //     const data = promise('Hello World');
    //     console.log(data);

    //     // immediately prints out "Promise { <pending> }", but the process only ends after promise resolves
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     console.log('Done!');
    // }
})();