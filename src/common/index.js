const list = [];

console.log('i am common');

export default {
    push: a => {
        list.push(a);
    },
    pop: () => {
        return list.pop();
    },
};
