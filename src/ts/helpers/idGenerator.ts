function* idGenerator() {
    let i = 1;
    while (true) {
        yield i;
        i = i + 1;
    }
}

export const getTodoId = idGenerator();
export const getRingtoneId = idGenerator();
