const Assinantes = require("../model/Assinantes")

module.exports = {
    name: "assinantes-service",
    version: 1,

    actions: {
        // teste(ctx) {
        //     console.log("Qualquer coisa");
        // }
        create: {
            async handler(ctx) {
                if (ctx.params) {
                    if (ctx.params.nome &&  ctx.params.cpf) {
                        return Assinantes.create({
                            nome: ctx.params.nome,
                            cpf: ctx.params.cpf
                        })
                    }
                }

                return false;
            }
        },

        list: {
          async handler(ctx) {
                return await Assinantes.find();
            }
        },

        exists: {
          async handler(ctx) {
                if (ctx.params) {
                    if (ctx.params.id) {
                        return await Assinantes.exists({
                            _id: ctx.params.id
                        });
                    }
                }

                return false;
            }
        }
    }
}