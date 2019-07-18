const add = (...params) => {
    return params.reduce((acc, cur) => {
        return acc + cur;
    });
};

export default add;
