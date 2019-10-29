class EventObserver{
        constructor(){
                this.observers = [];  
        }
        suscribe(fn) {
                this.observers.push(fn);
                console.log(`You are now subscribe to ${fn.name}`);
        }

        unsubsribe(fn) {
                this.observers = this.observers.filter(function(item){
                        if(item !== fn) {
                                return item;
                        }
                });
                console.log(`You are now unsuscribed from ${fn.name}`);
        }

        fire(){
                this.observers.forEach(function(item) {
                        item.call();
                });
        }      
}


const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function(){
        click.suscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
        click.unsubsribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function(){
        click.suscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
        click.unsubsribe(getCurSeconds);
});
document.querySelector('.fire').addEventListener('click', function(){
        click.fire();
});

const getCurMilliseconds = function() {
        console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
        console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
