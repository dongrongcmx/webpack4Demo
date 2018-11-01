import './index.less'
import './text.css'



const $ = require('jquery')
$('#root').append('xsamksl')

async function testSync() {
    const response = await new Promise(resolve => {
        setTimeout(() => {
            resolve("async await test...");
         }, 1000);
    });
    console.log(response);
}
testSync();//async await test...

const Test = {
    one:'xsaxa',
    two:'xsad'
}

const {one} = Test

console.log(one);
