const delayPromise = require('../index');

test('delayPromise 测试 被执行', () => {
    expect.assertions(1);
    const callback = jest.fn().mockReturnValue(1);
    return expect(delayPromise(callback)).resolves.toBe(1);
});