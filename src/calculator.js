function add(numbers) {
    if (numbers === '') return 0;

    let delimiter = ',';
    let input = numbers;

    input = input.replace(/['"]/g, '').trim();

    if (numbers.startsWith('//')) {
        const delimiterIndex = numbers.indexOf('\n');
        delimiter = numbers.slice(2, delimiterIndex); 
        input = numbers.slice(delimiterIndex + 1); 
    }

    const numberArray = input.split(new RegExp(`[${delimiter}\n]`)).map(num => num.trim()).filter(Boolean);

    let sum = 0;
    const negatives = [];

    numberArray.forEach(num => {
        const n = parseInt(num);

        if (isNaN(n)) {
            throw new Error(`Invalid number: ${num}`);
        }

        if (n < 0) {
            negatives.push(n);
        } else {
            sum += n;
        }
    });

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}

export { add };
