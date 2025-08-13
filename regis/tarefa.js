// Lista inicial com alguns usuários
var listaDeUsuarios = [
    { nome: "João Silva", email: "joao.silva@example.com", idade: 28, status: true },
    { nome: "Maria Souza", email: "maria.souza@example.com", idade: 34, status: false },
    { nome: "Carlos Santos", email: "carlos.santos@example.com", idade: 22, status: true }
];
// Função para cadastrar novo usuário
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
    atualizarTabela();
}
// Função para atualizar a tabela no HTML
function atualizarTabela() {
    var corpoTabela = document.querySelector("#tabelaUsuarios tbody");
    if (!corpoTabela)
        return;
    corpoTabela.innerHTML = ""; // limpa antes
    listaDeUsuarios.forEach(function (usuario) {
        var linha = document.createElement("tr");
        linha.innerHTML = "\n            <td>".concat(usuario.nome, "</td>\n            <td>").concat(usuario.email, "</td>\n            <td>").concat(usuario.idade, "</td>\n            <td>").concat(usuario.status ? "Ativo" : "Inativo", "</td>\n        ");
        corpoTabela.appendChild(linha);
    });
}
// Captura o formulário
var formCadastro = document.querySelector("#formCadastro");
formCadastro === null || formCadastro === void 0 ? void 0 : formCadastro.addEventListener("submit", function (event) {
    var _a, _b, _c, _d;
    event.preventDefault();
    var nome = (((_a = document.querySelector("#nome")) === null || _a === void 0 ? void 0 : _a.value) || "").trim();
    var email = (((_b = document.querySelector("#email")) === null || _b === void 0 ? void 0 : _b.value) || "").trim();
    var idade = Number((_c = document.querySelector("#idade")) === null || _c === void 0 ? void 0 : _c.value);
    var status = ((_d = document.querySelector("#status")) === null || _d === void 0 ? void 0 : _d.value) === "true";
    if (!nome || !email || !idade) {
        alert("Preencha todos os campos corretamente.");
        return;
    }
    cadastrarUsuario({ nome: nome, email: email, idade: idade, status: status });
    formCadastro.reset();
});
// Atualiza a tabela ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarTabela);
