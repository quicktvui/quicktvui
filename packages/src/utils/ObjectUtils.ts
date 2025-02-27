export function transformValuesToKeys(obj, parentKey = '') {
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                    const currentKey = parentKey ? `${parentKey}.${key}` : `${key}`;
                    result[key] = transformValuesToKeys(value, currentKey);
                } else {
                    const currentKey = parentKey ? '${' + `${parentKey}.${key}` + '}' : '${' + `${key}` + '}';
                    result[key] = currentKey;
                }
            }
        }
        return result;
    }
    return obj;
}

// 测试
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            u: 10
        },
    },
    e: [4, {f: 5}, 6],
    d: {
        c: 5,
        f: [4, {k: 5, g: [10, {l: 5}]}, 6],
    }
};

const transformedObj = transformValuesToKeys(obj);
console.log(JSON.stringify(transformedObj, null, 2));