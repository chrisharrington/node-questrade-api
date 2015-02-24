var _store = {};

module.exports = {
    get: function(key) {
        var stored = _store[key];
        if (stored && new Date() > stored.expiry)
            delete _store[key];
        return _store[key] ? _store[key].value : undefined;
    },
    
    set: function(key, value, expiry) {
        _store[key] = { value: value, expiry: expiry };
    }
};