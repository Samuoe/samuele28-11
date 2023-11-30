let agenda = {
    listacontatti: [{ nome: "ciro", numero: "333 33 33 333" }, { nome: "ciro", numero: "555 55 55 555" }, { nome: "michela", numero: "444 44 44 444" }],

    mostracontatti: function () {
        console.log(this.listacontatti)
    },


    aggiungicontatto: function (nome, numero) {
        let nuovocontatto = { nome: nome, numero: numero }
        this.listacontatti.push(nuovocontatto)
        console.log(this.listacontatti)
    },

    rimuovicontatto: function (nome) {
        for (let i = 0; i < this.listacontatti.length; i++)
            if (this.listacontatti[i].nome === nome) {
                this.listacontatti.splice(i, 1)
                console.log("contattorimosso" + nome)
                console.log(this.listacontatti)
                return;
            } else { console.log("contatto non trovato") }
    },

    mostrasingolocontatto: function (contatto) {
        let contattofiltrato = this.listacontatti.filter((contatto) => contatto.nome === nome)
        console.log(contattofiltrato)
    },

    modificacontatto: function (nomedamodificare, nuovonome, nuovonumero) {
        let indice = this.listacontatti.findIndex((contatto) => {
            return contatto.nome == nomedamodificare
        })
        if (indice != -1) {
            this.listacontatti[indice].nome = nuovonome
            this.listacontatti[indice].numero = nuovonumero
        } else {
            console.log("contatto non trovsto")
        }



    }

   
}




agenda.mostracontatti()
agenda.aggiungicontatto("luca", "66666666666")
agenda.rimuovicontatto("luca")
agenda.mostrasingolocontatto("michela")
agenda.modificacontatto("ciro,maria,6666666666")

