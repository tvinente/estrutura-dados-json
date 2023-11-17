class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar (){
        console.log("Bolo assando de: " + this.saborDaMassa)

    }
}
//let boloFesta = new formaDeBolo("Massa de Chocolate", "Recheio de Nutella")
let boloFesta = new formaDeBolo("Chocolate", "Nutella")
let boloPremium = new formaDeBolo("Baunilha", "Coco")

//console.log(boloFesta)
//console.log(boloFesta.saborDaMassa)

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()