module.exports = {
    cartEmail (name, total){
        const str = `<body style="position: relative; text-align:justify; width: 80%">
        <h2>Obrigado por comprar conosco! ✨ 💫</h2>
        <p>Aqui está o resumo da sua compra, ${name}!</p>
        <div>
            <h3>Total da compra: R$ ${total}</h3>
        </div>
        <p style="color: gray"><i> <small> PetStore - Desenvolvido por Kamille Pimentel e Lara Hernandes :P</small></i></p>
    </body>`
        return str;
    }
}