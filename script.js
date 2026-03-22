let carrinho = [];
let total = 0;

function addCarrinho(nome, preco){
    carrinho.push({nome, preco});
    total += preco;

    atualizarCarrinho();
}

/* ATUALIZA NA TELA */
function atualizarCarrinho(){
    const lista = document.getElementById("lista");
    const totalEl = document.getElementById("total");

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        lista.innerHTML += `
        <div style="display:flex; justify-content:space-between; margin:5px 0;">
            <span>${item.nome}</span>
            <span>R$${item.preco}</span>
        </div>
        `;
    });

    totalEl.innerHTML = "Total: R$ " + total;
}

/* FINALIZAR */
function finalizar(){
    if(carrinho.length === 0){
        alert("Carrinho vazio!");
        return;
    }

    let msg = "Pedido:%0A";

    carrinho.forEach(item => {
        msg += `${item.nome} - R$${item.preco}%0A`;
    });

    msg += `%0ATotal: R$${total}`;

    window.open(`https://wa.me/5516994532971?text=${msg}`, "_blank");
}