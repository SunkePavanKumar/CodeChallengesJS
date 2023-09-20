function titleCase(str) {
    return str.split(" ").map(num=>num[0].toUpperCase()  + num.substring(1)).join(" ")
}

module.exports = titleCase;
