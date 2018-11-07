//get a key for starage name and any the data to store

export default {
    store(key, any) {
        localStorage[key] = JSON.stringify(any);
    },

    load(key) {
        var str = localStorage[key] || 'null';
        return JSON.parse(str);
    }
}