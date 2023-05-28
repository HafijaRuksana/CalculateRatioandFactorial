const ratioFactorial = require("../factorial/index")
const factRatio = require("../ratio/index")

const ratioAndFactorial = (haffi,rukku,sana)=>{
    const ratio = factRatio(haffi,rukku);
    const factorial = ratioFactorial(sana);
    return {ratio,factorial}

}
module.exports = ratioAndFactorial;