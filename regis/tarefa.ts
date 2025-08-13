// Definição da interface Usuario
interface Usuario {
    nome: string;
    email: string;
    idade: number;
    status: boolean;
}

// Lista inicial com alguns usuários
let listaDeUsuarios: Usuario[] = [
    { nome: "João Silva", email: "joao.silva@example.com", idade: 28, status: true },
    { nome: "Maria Souza", email: "maria.souza@example.com", idade: 34, status: false },
    { nome: "Carlos Santos", email: "carlos.santos@example.com", idade: 22, status: true }
];

// Função para cadastrar novo usuário
function cadastrarUsuario(usuario: Usuario): void {
    listaDeUsuarios.push(usuario);
    atualizarTabela();
}

// Função para atualizar a tabela no HTML
function atualizarTabela(): void {
    const corpoTabela = document.querySelector<HTMLTableSectionElement>("#tabelaUsuarios tbody");
    if (!corpoTabela) return;

    corpoTabela.innerHTML = ""; // limpa antes

    listaDeUsuarios.forEach((usuario) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.status ? "Ativo" : "Inativo"}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}

// Captura o formulário
const formCadastro = document.querySelector<HTMLFormElement>("#formCadastro");

formCadastro?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = (document.querySelector<HTMLInputElement>("#nome")?.value || "").trim();
    const email = (document.querySelector<HTMLInputElement>("#email")?.value || "").trim();
    const idade = Number(document.querySelector<HTMLInputElement>("#idade")?.value);
    const status = document.querySelector<HTMLSelectElement>("#status")?.value === "true";

    if (!nome || !email || !idade) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    cadastrarUsuario({ nome, email, idade, status });

    formCadastro.reset();
});

// Atualiza a tabela ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarTabela);
