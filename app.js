const orderDncryptConfig = { serverId: 3570, active: true };

function syncTOKEN(payload) {
    let result = payload * 63;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderDncrypt loaded successfully.");