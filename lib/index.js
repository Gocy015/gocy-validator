module.exports = {
    sayHi: function _sayHi(name) {
        console.log('Hello, ' + name + '!')
    },
    containsOnlyEnglish: function (target) {
        return /^[a-zA-Z]+$/.test(target)
    }
}