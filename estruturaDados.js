let invoice = {
    name: "Lia",
    age: 30,
    products:{
        0: ["Mouse", 29.99],
        1: ["Teclado", 149.99],
        2: ["Monitor", 849.99],
        3: ["Cadeira Gamer", 2199.99]
    },
    taxes: "49.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é: ${invoice.name}`)
    console.log(`A idade é: ${invoice.age}`)
    console.log("--------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
            console.log(`- ${productName}: R$ ${productPrice}`)
    }
}