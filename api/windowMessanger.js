export class WindowMessanger{
    constructor(_window){
        this._window = _window || window;
    }
    listen(){
        console.log(this);
        this._window.addEventListener('message',this.onMessage.bind(this));
    }
    onMessage(messageEvent){
        console.log(this);
        console.log(messageEvent.data);
    }
}