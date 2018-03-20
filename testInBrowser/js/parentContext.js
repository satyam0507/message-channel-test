import {
    WindowMessenger
} from '../../dist/api/windowMessanger.js';

window.addEventListener('load', function() {
    const _WindowMessenger = new WindowMessenger();
    const _origin = [window.location.origin];
    const _remoteContentWindow = document.getElementById('iframe').contentWindow;
    _WindowMessenger.listen(_origin);
    _WindowMessenger.connect(_remoteContentWindow, _origin).then((r) => console.log(r)).catch((e) => console.log(e));
})