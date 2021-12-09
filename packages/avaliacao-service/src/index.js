const { ServiceBroker} = require("moleculer");
const mongoose = require("mongoose");

(async () => {
    await mongoose.connect("mongodb+srv://nadilson:<PASSWORD_HERE>@ebac-workshop.m24sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    const broker = new ServiceBroker({
        transporter: "TCP"
    });

    broker.loadServices("./src/services");

    broker.start().then(() => {
        // Switch to REPL mode
        broker.repl();
    });

})()