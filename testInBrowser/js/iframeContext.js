import {
    WindowMessenger
} from '../../dist/api/windowMessanger.js';

const _WindowMessenger = new WindowMessenger();
const _origin = [window.location.origin];
_WindowMessenger.listen(_origin);