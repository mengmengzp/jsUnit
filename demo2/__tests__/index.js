const {delay, delayPromise} = require('../index');
test('callback被执行', done => {
    expect.assertions(1);
    const callback = () => {
        console.log('callback expect');
        expect(true).toBe(true);
        done();
    };
    delay(callback);
});

test('delayPromise 测试 被执行', () => {
    expect.assertions(1);
    const callback = () => 1;
    return expect(delayPromise(callback)).resolves.toBe(1);
});

test('delayPromise async 测试 被执行', async () => {
    expect.assertions(1);
    const callback = () => 1;
    const res = await delayPromise(callback);
    expect(res).toBe(1);
})