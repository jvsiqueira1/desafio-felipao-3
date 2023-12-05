class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atack(){
        let ataque
        switch (this.type) {
            case "guerreiro":
                ataque = "usou espada"
                break
            case "mago":
                ataque = "usou magia"
                break
            case "monge":
                ataque = "usou artes marciais"
                break
            case "ninja":
                ataque = "usou shuriken"
                break
        }
        const mensagem = `O ${this.type} atacou usando ${ataque}`
        return mensagem
    }
}
let heroi1 = new hero("João", 22, "guerreiro")
console.log(heroi1.atack())
let heroi2 = new hero("João", 22, "mago")
console.log(heroi2.atack())
let heroi3 = new hero("João", 22, "monge")
console.log(heroi3.atack())
let heroi4 = new hero("João", 22, "ninja")
console.log(heroi4.atack())
