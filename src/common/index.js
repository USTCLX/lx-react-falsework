const list = [];

export default {
    push: a => {
        console.log('push了');
        list.push(a);
    },
    pop: () => {
        return list.pop();
    },
};
