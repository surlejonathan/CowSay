const cowsay = require("cowsay");

const myInfos = {
    name : 'Jon',
    campus : 'Bordeaux'
}

const hello = () => {
    console.log(cowsay.think({
        text : `Hello, I'm ${myInfos.name} from ${myInfos.campus}`,
        e : "^^",
        T : "U "
    }));
}

module.exports = hello;
