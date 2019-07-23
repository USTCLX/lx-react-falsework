import tools from '../common';

const add = (...params) => {
    return params.reduce((acc, cur) => {
        return acc + cur;
    });
};

console.log('asnyc');

tools.push(add);

export default add;
