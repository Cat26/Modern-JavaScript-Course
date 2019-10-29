const User = function(name) {
        this.name = name;
        this.chatroom = null;
}

User.prototype = {
        send: function(msg, to){
                this.chatroom.send(msg, this, to);
        },
        receive: function(msg, from){
                console.log(`${from.name} to ${this.name}: ${msg}`);
        }
}

const Chatroom = function(){
        let users = {};

        return {
                register: function(user){
                        users[user.name] = user;
                        user.chatroom = this;
                },
        
                send: function(msg, from, to){
                        if(to){
                                to.receive(msg, from);
                        } else {
                                for(key in users){
                                       if(users[key] !== from){
                                               users[key].receive(msg, from);
                                       } 
                                }
                        }
                }
        }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad', brad);
jeff.send('Hello evryone!!!');
