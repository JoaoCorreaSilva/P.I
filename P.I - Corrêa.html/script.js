function adicionarAoCarrinho(nome, preco) {
    var item1 = { name: "Body Family", price: 49.90 };
    var item2 = { name: "Body Pecuária", price: 39.90 };
    var item3 = { name: "Body FBI", price: 44.90 };
    var item4 = { name: "Body Modão", price: 19.90 };
    var item5 = { name: "Baby do Rodrigo", price: 19.90 };
    var item6 = { name: "Conjuntinho", price: 44.90 };

    var cart = localStorage.getItem("cart");
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    // Add the selected item to the cart
    if (nome === "Body Family") {
        cart.push(item1);
    } else if (nome === "Body Pecuária") {
        cart.push(item2);
    } else if (nome === "Body FBI") {
        cart.push(item3);
    } else if (nome === "Body Modão") {
        cart.push(item4);
    } else if (nome === "Baby do Rodrigo") {
        cart.push(item5);
    } else if (nome === "Conjuntinho") {
        cart.push(item6);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("O item foi adicionado ao carrinho!");
}

function limparCarrinho() {
    localStorage.removeItem("cart");
    var cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '<p id="empty-cart-message">Seu carrinho está vazio.</p>';
    alert("O carrinho foi limpo.");
}

  function getPrecoProduto(id) {
    return precos[id];
  }
  

// Variáveis globais
var quantidades = {
    1: 1, // Quantidade inicial do Produto 1 (Body Family)
    // Adicione as demais quantidades iniciais dos produtos aqui
};

// Função para aumentar a quantidade de um produto no carrinho
function aumentarQuantidade(id) {
    var input = document.getElementById('quantity-' + id);
    var quantidade = quantidades[id];
    quantidade++;
    input.value = quantidade;
    quantidades[id] = quantidade;
    atualizarValorTotal();
}

// Função para diminuir a quantidade de um produto no carrinho
function diminuirQuantidade(id) {
    var input = document.getElementById('quantity-' + id);
    var quantidade = quantidades[id];
    if (quantidade > 1) {
        quantidade--;
        input.value = quantidade;
        quantidades[id] = quantidade;
        atualizarValorTotal();
    }
}

// Função para remover um produto do carrinho
function removerDoCarrinho(id) {
    var cartItem = document.getElementById('cart-item-' + id);
    cartItem.remove();
    delete quantidades[id];
    atualizarValorTotal();
}

// Função para atualizar o valor total no carrinho
function atualizarValorTotal() {
    var totalValue = 0;
    for (var id in quantidades) {
        var quantidade = quantidades[id];
        var preco = getPrecoProduto(id);
        totalValue += quantidade * preco;
    }
    document.getElementById('total-value').innerText = totalValue.toFixed(2);
}

// Função para obter o preço de um produto com base no ID
function getPrecoProduto(id) {
}
var precos = {
    1: 49.90, // Preço do Produto 1 (Body Family)
    2: 39.90, // Preço do Produto 2 (Body Pecuária)
    3: 44.90, // Preço do Produto 3 (Baby Operacional)
    4: 19.90, // Preço do Produto 4 (Body Modão)
    5: 19.90, // Preço do Produto 5 (Baby do Rodrigo)
    6: 44.90  // Preço do Produto 6 (Moletom)
  };
  
  function getPrecoProduto(id) {
    return precos[id];
  }   

