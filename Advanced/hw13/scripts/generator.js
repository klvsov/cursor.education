export const createIdGenerator = function*() {
    let i = 1;
    while(true) {
        yield i++;
    }
}

export const idGenerator = createIdGenerator();