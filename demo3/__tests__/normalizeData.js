jest.mock('../getData');

const normalizeData = require('../normalizeData');
const getData = require('../getData');
getData.mockReturnValue({
    name: 'xx'
})
test('normalizeData.js 测试', () => {
    const status = normalizeData().status;
    expect(status).toBe(0);
});

test('normalizeData.js 测试', () => {
    const status = normalizeData().data;
    expect(status).toEqual({
        name: 'xx'
    });
});