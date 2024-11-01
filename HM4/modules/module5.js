export function concatStrings(first, second) {
    var first = first;
    var second = second;
    var concStr = `Первое слово - «${first}» , второе слово - «${second}»`;
    return concStr
}

export {concatStrings as concStr}