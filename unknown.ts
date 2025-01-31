function processValue(value: unknown): void {
    if (typeof value === 'string') {
        console.log(`String value: ${value.toUpperCase()}`);
    } else if (typeof value === 'number') {
        console.log(`Number value: ${value.toFixed(2)}`);
    } else if (Array.isArray(value)) {
        console.log(`Array value: ${value.join(', ')}`);
    } else {
        console.log('Unknown type');
    }
}

const values: unknown[] = ['hello', 42, [1, 2, 3], true];

values.forEach(value => {
    processValue(value);
});



//---------------------------------------------------------------------

//Explicitly handling asynchronous unknown values

function parseUnknown(input: unknown): void {
    if (typeof input === 'boolean') {
        console.log(`Boolean value: ${input}`);
    } else if (typeof input === 'object' && input !== null) {
        console.log(`Object value: ${JSON.stringify(input)}`);
    } else {
        console.log('Unknown type');
    }
}

const unknownValues: unknown[] = [true, { name: 'Alice', age: 30 }, 'test'];

unknownValues.forEach(value => {
    parseUnknown(value);
});
async function handleUnknownAsync(value: unknown): Promise<void> {
    switch (typeof value) {
        case 'string':
            console.log(`Handled string: ${value}`);
            break;
        case 'number':
            console.log(`Handled number: ${value}`);
            break;
        case 'boolean':
            console.log(`Handled boolean: ${value}`);
            break;
        case 'object':
            if (value === null) {
                console.log('Handled null');
            } else if (Array.isArray(value)) {
                console.log(`Handled array: ${value}`);
            } else {
                console.log(`Handled object: ${JSON.stringify(value)}`);
            }
            break;
        default:
            console.log('Unhandled type');
    }
}

const mixedValuesAsync: unknown[] = ['world', 100, false, { key: 'value' }, null, [4, 5, 6]];

async function processMixedValues(values: unknown[]): Promise<void> {
    for (const value of values) {
        await handleUnknownAsync(value);
    }
}

processMixedValues(mixedValuesAsync);


//---------------------------------------------------------------------


async function fetchUnknownValue(url: string): Promise<unknown> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

async function processFetchedValue(url: string): Promise<void> {
    try {
        const value = await fetchUnknownValue(url);
        await handleUnknownAsync(value);
    } catch (error) {
        console.error('Error fetching or processing value:', error);
    }
}

const url = 'https://api.example.com/data';
processFetchedValue(url);



