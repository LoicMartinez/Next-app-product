function getLocalStorage(key: string) {
    if (window == undefined)
        return ''

    return window.localStorage.getItem(key);
}

function setLocalStorage(key: string, value: string) {
    if (window == undefined)
        return ''

    if (key && value) {
        window.localStorage.setItem(key, value);
    } else {
        throw new Error("key or value not valid to set local storage");
    }

}

function delLocalStorage(key: string) {
    if (window == undefined)
        return ''

    window.localStorage.removeItem(key);
}

export {
    getLocalStorage,
    setLocalStorage,
    delLocalStorage
};