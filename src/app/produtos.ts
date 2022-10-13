export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Ração 1kg", preco: 54.90, descricaoPreco: "À vista no PIX", imagem: "./assets/racao-1.webp", quantidadeEstoque: 9 },
    { id: 2, descricao: "Casinha para cães", preco: 499.90, descricaoPreco: "À vista no PIX", imagem: "./assets/casinha-1.webp", quantidadeEstoque: 7 },
    { id: 3, descricao: "Petisco", preco: 9.99, descricaoPreco: "À vista no PIX", imagem: "./assets/petisco-1.webp", quantidadeEstoque: 3 },
    { id: 4, descricao: "Ossinho", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "./assets/osso-1.webp", quantidadeEstoque: 10 },
    { id: 5, descricao: "Brinquedo Pelúcia", preco: 49.99, descricaoPreco: "À vista no PIX", imagem: "./assets/brinquedo-1.webp", quantidadeEstoque: 1 },
    { id: 6, descricao: "Fralda Higiênica", preco: 71.50, descricaoPreco: "À vista no PIX", imagem: "./assets/fralda-1.webp", quantidadeEstoque: 13 },
    { id: 7, descricao: "Antipulgas e carrapatos", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/antipulga-1.webp", quantidadeEstoque: 2 },
    { id: 8, descricao: "Roupinha de chuva", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "./assets/roupinha-1.webp", quantidadeEstoque: 24 },
    { id: 9, descricao: "Pote para Armazenar Ração", preco: 100.00, descricaoPreco: "À vista no PIX", imagem: "./assets/pote-1.webp", quantidadeEstoque: 5 },
    { id: 10, descricao: "Coleira", preco: 39.90, descricaoPreco: "À vista no PIX", imagem: "./assets/coleira-1.webp", quantidadeEstoque: 0 },
    { id: 11, descricao: "Guia", preco: 50.00, descricaoPreco: "À vista no PIX", imagem: "./assets/guia-1.webp", quantidadeEstoque: 2 },
    { id: 12, descricao: "Arranhador Completo", preco: 1200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/arranhador-1.webp", quantidadeEstoque: 4 },
    { id: 13, descricao: "Coleira Antipulgas", preco: 78, descricaoPreco: "À vista no PIX", imagem: "./assets/coleira-2.webp", quantidadeEstoque: 14 },
    { id: 14, descricao: "Cinto de Segurança", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/cinto-1.webp", quantidadeEstoque: 11 },
    { id: 15, descricao: "Ração Natural", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/racao-2.webp", quantidadeEstoque: 6 },
]