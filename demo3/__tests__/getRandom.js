const getRandom = require('../getRandom');
// 每个测试用例执行前执行
let mockRandom = null;
beforeEach(() => {
    // 对Math的random方法进行监听
    mockRandom = jest.spyOn(Math, 'random');
});
// 每个测试用例执行后执行
afterEach(() => {
    mockRandom.mockRestore();
});

test('getRandom 小于10' ,() => {
    expect(getRandom()).toBeLessThan(10);
});


test('getRandom 大于等于0' ,() => {
    expect(getRandom()).toBeGreaterThanOrEqual(0);
});

test('Math.random 返回0.11，结果为1', () => {
    mockRandom.mockReturnValue(0.11);
    expect(getRandom()).toBe(1);
});

test('Math.random 返回1，结果为10', () => {
    mockRandom.mockReturnValue(1);
    expect(getRandom()).toBe(10);
})