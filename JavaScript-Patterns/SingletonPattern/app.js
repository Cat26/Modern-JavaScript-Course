const Singleton = (function() {
        let instance;

        function createInstance() {
                const object = new Object({name:' Brad'});
                return object;
        }

        return {
                getInstance: function(){
                        if(!instance){
                                instance = createInstance();
                        }
                        return instance;
                }
        }
})();

const insatnceA = Singleton.getInstance();
const insatnceB = Singleton.getInstance();

console.log(insatnceA === insatnceB);
