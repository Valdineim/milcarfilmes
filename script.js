let carrinho = [];
let total = 0;

function addCarrinho(nome, preco){
carrinho.push({nome,preco});
total += preco;
atualizar();
}

function atualizar(){
let lista = document.getElementById("lista");
let totalEl = document.getElementById("total");
let contador = document.getElementById("contador");

lista.innerHTML = "";

carrinho.forEach(item=>{
lista.innerHTML += `<p>${item.nome} - R$${item.preco}</p>`;
});

totalEl.innerText = "Total: R$ " + total;
contador.innerText = carrinho.length;
}

function toggleCarrinho(){
let c = document.getElementById("carrinho");
c.style.display = c.style.display === "block" ? "none" : "block";
}

function finalizar(){
let msg = "Olá, quero orçamento:%0A";

carrinho.forEach(item=>{
msg += `${item.nome} - R$${item.preco}%0A`;
});

msg += `%0ATotal: R$${total}`;

window.open("https://wa.me/5516994532971?text="+msg);
}
