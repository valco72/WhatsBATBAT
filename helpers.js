function successfullMessage(msg) {
    return "✅ *WhatsBATBAT*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *WhatsBATBAT*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WhatsBATBAT*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
