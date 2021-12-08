function getDeviation(sumatoria) {
    return Math.sqrt(sumatoria).toFixed(3);
}

function getRange(items) {
    items.sort();
    return (items.slice(-1) - items[0]);
}

function getAverage(items) {
    let average = 0;
    for (let i = 0; i < items.length; ++i)
    { average += items[i]; }
    return (average / items.length).toFixed(3);
}

function getSummation(items, average) {
    let total = 0;
    for (let i = 0; i < items.length; ++i)
    { total += (items[i] - average) ** 2; }
    return (total / items.length).toFixed(3);
}

const items = [ 3,5,7,2 ];

const promedio = getAverage(items);
const sumatoria = getSummation(items, promedio);
const rango = getRange(items);
const desviacion = getDeviation(sumatoria);

console.log('promedio:', promedio);
console.log('rango:', rango);
console.log('varianza:', sumatoria);
console.log('desviación:', desviacion);
