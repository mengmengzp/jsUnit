import React from 'react';

const Blink = () => {
    const url = 'https://www.baidu.com';
    const text = '百度一下，你就知道';
    return <a href = {url}>{text}</a>
};

export default Blink;