// working example of using the Wikipedia API
async function fetchRelatedArticles(title) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/related/${title}`;

    try {
        const promise = await fetch(url);
        const data = await promise.json();

        return data;
    }
    catch (error) {
        console.error(error);
    }
}

// chaining
async function fetchRelatedArticlesChaining(title) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/related/${title}`;

    return fetch(url)
        .then(promise => promise.json())
        .catch(console.error);
}

// exception handling
async function fetchRelatedArticlesException(title) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/related/${title}`;

    try {
        const promise = await fetch(url);
        const data = await promise.noMethodLikeThis();

        return data;
    }
    catch (error) {
        console.log("Error caught!")
        console.error(error);
    }
}

(async () => {
    // const data = await fetchRelatedArticles('JavaScript');
    // console.log(data);

    // const data = fetchRelatedArticles('JavaScript');
    // console.log(data); // Promise { <pending> }

    // const dataChaining = await fetchRelatedArticlesChaining('JavaScript');
    // console.log(dataChaining);

    // const dataException = await fetchRelatedArticlesException('JavaScript');
    // console.log(dataException); // undefined because of the error
})();