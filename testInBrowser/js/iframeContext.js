import {
    WindowMessenger
} from '../../dist/api/windowMessanger.js';

const _WindowMessenger = new WindowMessenger();
const _origin = [window.location.origin];
_WindowMessenger.listen(_origin);
_WindowMessenger.on('abc',function(_,r){
    console.log(_);
    r({'hahah':'hehehe'});
})