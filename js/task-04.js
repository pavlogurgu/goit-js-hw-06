const MyCounter = function ({ rootSelector, initialValue = 0, step = 1 } = {}){
this._refs = this._getRefs(rootSelector);
this._value = initialValue;
this._step = step;
this._bindEvents();

}
MyCounter.prototype.increment = function(){
    this._value += this._step;
}
MyCounter.prototype.decrement = function(){
    this._value -= this._step;
}
MyCounter.prototype._getRefs = function(rootSelector){

const refs = {};
refs.container = document.querySelector(rootSelector);
refs.incrementBtn = refs.container.querySelector('[data-increment]');
refs.decrementBtn = refs.container.querySelector('[data-decrement]');
refs.value = refs.container.querySelector('[data-value]');
return refs;

}

MyCounter.prototype._bindEvents = function() {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.newValue();
    })
    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.newValue();
    })
}

MyCounter.prototype.newValue = function(){
    this._refs.value.textContent = this._value;
}


const counter = new MyCounter({ rootSelector: '#counter', step: 1 });
console.log('counter', counter)