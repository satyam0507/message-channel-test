'use strict';

export var abc = 'jajaja';

export class A{
    constructor(options){
        this.options = options;
    }
    listen(){
        console.log(this.options);
    }
}