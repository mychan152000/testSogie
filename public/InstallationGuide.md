# Hướng dẫn cài env cho unit testing
- ## *Tải NodeJS*
- ## *Pull code từ github về:*
    -  `npm init -y`\
        *Muốn config thì bỏ '-y'*
    - `npm install -D jest`\
        *Cài package jest để test*
    - Vào file ***package.json*** đổi như sau:\
    -       "scripts": {
                "test": "jest"
            }
    
- ## *Viết Test:*
    - Tạo file thực hiện function.
        > ví dụ: findResult()
    - Tạo file test với tên theo cú pháp:
        >`tên_function.test.js`
    - Code x 3.14 theo mẫu này:
        ```js
            const findResult = 
            { 
                convertAndCompare: (bin_choices) 
                => parseInt(bin_choices,2).toString()
            }

            module.exports = findResult;
    - Test theo mẫu này: 
    ```js
        const functions = require('./findResult');
        //10101000010000

        test('Test with 10101000010000', () =>
        {
            expect(functions.convertAndCompare('10101000010000')).toBe('10768');
        });```

- ## *Chạy ~~bug~~ test*:
    `npm test`
