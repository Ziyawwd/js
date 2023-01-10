// 54 bonus
function glasnie(arr) {

}
// 56 bonus
function sortirovka(arr) {
    arr.forEach(element => {
      return arr.sort()
    });

}
// 58 bonus
function emotify(str) {
    console.log(str.split(''));
    if (arr[2] === 'ulibka') {
        arr[2] = ':D'
    }
    if (arr[2] === 'qrusno') {
        arr[2] = ':('
    }
    if (arr[2] === 'usmeshka') {
        arr[2] = ':)'
    }
}
// 59 bonus
function mean(arr) {
    arr.forEach(element => {
        return element += sum / element.length
    })
}
console.log(mean([1, 5, 8, 9]).toFixed(2))
// 60 bonus
function emotify(arr) {
    function uniq(item, index, arr) {
        return arr.indexOf(item) === index
    }

    arr = arr.filter(uniq)
}

