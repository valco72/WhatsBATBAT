function successfullMessage(msg) {
    return "β *WhatsBATBAT*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *WhatsBATBAT*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *WhatsBATBAT*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
