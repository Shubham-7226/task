const copyObject = (object) => {
    let cpObj = {};
    let key, value;
    if(typeof (object) !== "object" || object === null) {
        return object;
    }

    for (key in object) {
        value = object[key];
        cpObj[key] = copyObject(value);
    }
    return cpObj;

}

