// Dados iniciais dos produtos
let products = [
    // Frutas (Segunda-Feira)
    { id: 1, category: "Frutas", name: "Abacate", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    { id: 2, category: "Frutas", name: "Abacaxi", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "28.6%", offerDay: "Segunda-Feira" },
    { id: 3, category: "Frutas", name: "Ameixa Roxa", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$15.99/KG", discountedPrice: "R$12.99/KG", discountPercentage: "18.8%", offerDay: "Segunda-Feira" },
    { id: 4, category: "Frutas", name: "Avelã", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    { id: 5, category: "Frutas", name: "Banana", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$1.99/KG", discountedPrice: "R$0.99/KG", discountPercentage: "50%", offerDay: "Segunda-Feira" },
    { id: 6, category: "Frutas", name: "Caqui", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25%", offerDay: "Segunda-Feira" },
    { id: 7, category: "Frutas", name: "Coco", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/UN", discountedPrice: "R$7.99/UN", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    { id: 8, category: "Frutas", name: "Damasco", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    { id: 9, category: "Frutas", name: "Goiaba", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "40%", offerDay: "Segunda-Feira" },
    { id: 10, category: "Frutas", name: "Kiwi", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "30%", offerDay: "Segunda-Feira" },
    { id: 11, category: "Frutas", name: "Laranja", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Segunda-Feira" },
    { id: 12, category: "Frutas", name: "Limão", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$1.99/KG", discountedPrice: "R$0.99/KG", discountPercentage: "50%", offerDay: "Segunda-Feira" },
    { id: 13, category: "Frutas", name: "Maça", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Segunda-Feira" },
    { id: 14, category: "Frutas", name: "Manga", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "28.6%", offerDay: "Segunda-Feira" },
    { id: 15, category: "Frutas", name: "Maracujá", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$12.99/KG", discountedPrice: "R$9.99/KG", discountPercentage: "23.1%", offerDay: "Segunda-Feira" },
    { id: 16, category: "Frutas", name: "Melancia", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    { id: 17, category: "Frutas", name: "Morango", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    { id: 18, category: "Frutas", name: "Ponkan", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25%", offerDay: "Segunda-Feira" },
    { id: 19, category: "Frutas", name: "Pêssego", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$12.99/KG", discountedPrice: "R$9.99/KG", discountPercentage: "23.1%", offerDay: "Segunda-Feira" },
    { id: 20, category: "Frutas", name: "Uva", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Segunda-Feira" },
    // Verduras (Terça-Feira)
    { id: 21, category: "Verduras", name: "Agrião", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/Maço", discountedPrice: "R$3.99/Maço", discountPercentage: "42.9%", offerDay: "Terça-Feira" },
    { id: 22, category: "Verduras", name: "Alface Americana", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$2.99/UN", discountedPrice: "R$1.99/UN", discountPercentage: "33.4%", offerDay: "Terça-Feira" },
    { id: 23, category: "Verduras", name: "Alface Crespa", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$1.99/UN", discountedPrice: "R$0.99/UN", discountPercentage: "50%", offerDay: "Terça-Feira" },
    { id: 24, category: "Verduras", name: "Acelga", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/UN", discountedPrice: "R$3.99/UN", discountPercentage: "33.4%", offerDay: "Terça-Feira" },
    { id: 25, category: "Verduras", name: "Almeirão", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/Maço", discountedPrice: "R$3.99/Maço", discountPercentage: "33.4%", offerDay: "Terça-Feira" },
    { id: 26, category: "Verduras", name: "Cebolinha", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$1.99/Maço", discountedPrice: "R$0.99/Maço", discountPercentage: "50%", offerDay: "Terça-Feira" },
    { id: 27, category: "Verduras", name: "Chicória", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/UN", discountedPrice: "R$3.99/UN", discountPercentage: "33.4%", offerDay: "Terça-Feira" },
    { id: 28, category: "Verduras", name: "Couve", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$1.99/Maço", discountedPrice: "R$0.99/Maço", discountPercentage: "50%", offerDay: "Terça-Feira" },
    { id: 29, category: "Verduras", name: "Couve-Flor", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/UN", discountedPrice: "R$5.99/UN", discountPercentage: "25%", offerDay: "Terça-Feira" },
    { id: 30, category: "Verduras", name: "Escarola", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/Maço", discountedPrice: "R$7.99/Maço", discountPercentage: "27.3%", offerDay: "Terça-Feira" },
    { id: 31, category: "Verduras", name: "Espinafre", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/Maço", discountedPrice: "R$7.99/Maço", discountPercentage: "27.3%", offerDay: "Terça-Feira" },
    { id: 32, category: "Verduras", name: "Mostarda", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/Maço", discountedPrice: "R$2.99/Maço", discountPercentage: "25%", offerDay: "Terça-Feira" },
    { id: 33, category: "Verduras", name: "Nabo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25%", offerDay: "Terça-Feira" },
    { id: 34, category: "Verduras", name: "Pimentão", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Terça-Feira" },
    { id: 35, category: "Verduras", name: "Quiabo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Terça-Feira" },
    { id: 36, category: "Verduras", name: "Rabanete", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "14.3%", offerDay: "Terça-Feira" },
    { id: 37, category: "Verduras", name: "Repolho", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/UN", discountedPrice: "R$5.99/UN", discountPercentage: "14.3%", offerDay: "Terça-Feira" },
    { id: 38, category: "Verduras", name: "Repolho roxo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/UN", discountedPrice: "R$3.99/UN", discountPercentage: "33.4%", offerDay: "Terça-Feira" },
    { id: 39, category: "Verduras", name: "Rúcula", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/Maço", discountedPrice: "R$2.99/Maço", discountPercentage: "40.1%", offerDay: "Terça-Feira" },
    { id: 40, category: "Verduras", name: "Salsão", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/Maço", discountedPrice: "R$5.99/Maço", discountPercentage: "25%", offerDay: "Terça-Feira" },
    // Legumes (Quarta-Feira)
    { id: 41, category: "Legumes", name: "Abóbora", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Quarta-Feira" },
    { id: 42, category: "Legumes", name: "Abrobrinha", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Quarta-Feira" },
    { id: 43, category: "Legumes", name: "Alho", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$29.99/KG", discountedPrice: "R$25.99/KG", discountPercentage: "13.3%", offerDay: "Quarta-Feira" },
    { id: 44, category: "Legumes", name: "Batata", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Quarta-Feira" },
    { id: 45, category: "Legumes", name: "Batata Doce", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Quarta-Feira" },
    { id: 46, category: "Legumes", name: "Batata Salsa", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Quarta-Feira" },
    { id: 47, category: "Legumes", name: "Berinjela", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Quarta-Feira" },
    { id: 48, category: "Legumes", name: "Beteraba", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Quarta-Feira" },
    { id: 49, category: "Legumes", name: "Brócolis", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/UN", discountedPrice: "R$5.99/UN", discountPercentage: "25%", offerDay: "Quarta-Feira" },
    { id: 50, category: "Legumes", name: "Cenoura", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "16.7%", offerDay: "Quarta-Feira" },
    { id: 51, category: "Legumes", name: "Cebola", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "40.1%", offerDay: "Quarta-Feira" },
    { id: 52, category: "Legumes", name: "Chuchu", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25%", offerDay: "Quarta-Feira" },
    { id: 53, category: "Legumes", name: "Inhame", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/KG", discountedPrice: "R$8.99/KG", discountPercentage: "18.2%", offerDay: "Quarta-Feira" },
    { id: 54, category: "Legumes", name: "Mandioca", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$2.99/KG", discountedPrice: "R$1.99/KG", discountPercentage: "33.4%", offerDay: "Quarta-Feira" },
    { id: 55, category: "Legumes", name: "Moranga", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Quarta-Feira" },
    { id: 56, category: "Legumes", name: "Palmito", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/KG", discountedPrice: "R$8.99/KG", discountPercentage: "18.2%", offerDay: "Quarta-Feira" },
    { id: 57, category: "Legumes", name: "Pepino", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Quarta-Feira" },
    { id: 58, category: "Legumes", name: "Pepino japones", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "33.4%", offerDay: "Quarta-Feira" },
    { id: 59, category: "Legumes", name: "Tomate", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Quarta-Feira" },
    { id: 60, category: "Legumes", name: "Tomate-Cereja", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25%", offerDay: "Quarta-Feira" },
    // Grãos (Quinta-Feira)
    { id: 61, category: "Grãos", name: "Amaranto", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25.1%", offerDay: "Quinta-Feira" },
    { id: 62, category: "Grãos", name: "Arroz", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "40.1%", offerDay: "Quinta-Feira" },
    { id: 63, category: "Grãos", name: "Arroz integral", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$2.99/KG", discountedPrice: "R$1.99/KG", discountPercentage: "33.4%", offerDay: "Quinta-Feira" },
    { id: 64, category: "Grãos", name: "Aveia", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Quinta-Feira" },
    { id: 65, category: "Grãos", name: "Amendoin", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "28.6%", offerDay: "Quinta-Feira" },
    { id: 66, category: "Grãos", name: "Café", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$29.99/KG", discountedPrice: "R$19.99/KG", discountPercentage: "33.3%", offerDay: "Quinta-Feira" },
    { id: 67, category: "Grãos", name: "Cevada", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Quinta-Feira" },
    { id: 68, category: "Grãos", name: "Centeio", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Quinta-Feira" },
    { id: 69, category: "Grãos", name: "Ervilha", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Quinta-Feira" },
    { id: 70, category: "Grãos", name: "Feijão Preto", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "40.1%", offerDay: "Quinta-Feira" },
    { id: 71, category: "Grãos", name: "Feijão Branco", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$3.99/KG", discountedPrice: "R$2.99/KG", discountPercentage: "25%", offerDay: "Quinta-Feira" },
    { id: 72, category: "Grãos", name: "Granola", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Quinta-Feira" },
    { id: 73, category: "Grãos", name: "Grão De Bico", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Quinta-Feira" },
    { id: 74, category: "Grãos", name: "Lentilha", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "28.6%", offerDay: "Quinta-Feira" },
    { id: 75, category: "Grãos", name: "Linhaça", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/KG", discountedPrice: "R$8.99/KG", discountPercentage: "18.2%", offerDay: "Quinta-Feira" },
    { id: 76, category: "Grãos", name: "Milho", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Quinta-Feira" },
    { id: 77, category: "Grãos", name: "Pinhão", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Quinta-Feira" },
    { id: 78, category: "Grãos", name: "Quinoa", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Quinta-Feira" },
    { id: 79, category: "Grãos", name: "Soja", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$5.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "16.7%", offerDay: "Quinta-Feira" },
    { id: 80, category: "Grãos", name: "Trigo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$4.99/KG", discountedPrice: "R$3.99/KG", discountPercentage: "20%", offerDay: "Quinta-Feira" },
    // Temperos (Sexta-Feira)
    { id: 81, category: "Temperos", name: "Açafrão Seco", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$16.99/KG", discountedPrice: "R$14.99/KG", discountPercentage: "11.8%", offerDay: "Sexta-Feira" },
    { id: 82, category: "Temperos", name: "Alecrim", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$12.99/KG", discountedPrice: "R$10.99/KG", discountPercentage: "15.4%", offerDay: "Sexta-Feira" },
    { id: 83, category: "Temperos", name: "Alho Poró", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Sexta-Feira" },
    { id: 84, category: "Temperos", name: "Cebolinha", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$6.99/KG", discountedPrice: "R$4.99/KG", discountPercentage: "28.6%", offerDay: "Sexta-Feira" },
    { id: 85, category: "Temperos", name: "Coentro", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Sexta-Feira" },
    { id: 86, category: "Temperos", name: "Cominho", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$14.99/KG", discountedPrice: "R$12.99/KG", discountPercentage: "13.3%", offerDay: "Sexta-Feira" },
    { id: 87, category: "Temperos", name: "Curry", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$15.99/KG", discountedPrice: "R$13.99/KG", discountPercentage: "12.5%", offerDay: "Sexta-Feira" },
    { id: 88, category: "Temperos", name: "Erva Doce", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$11.99/KG", discountedPrice: "R$9.99/KG", discountPercentage: "16.7%", offerDay: "Sexta-Feira" },
    { id: 89, category: "Temperos", name: "Hortelã", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Sexta-Feira" },
    { id: 90, category: "Temperos", name: "Louro", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$13.99/KG", discountedPrice: "R$11.99/KG", discountPercentage: "14.3%", offerDay: "Sexta-Feira" },
    { id: 91, category: "Temperos", name: "Manjericão", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/KG", discountedPrice: "R$8.99/KG", discountPercentage: "18.2%", offerDay: "Sexta-Feira" },
    { id: 92, category: "Temperos", name: "Manjerona", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$12.99/KG", discountedPrice: "R$10.99/KG", discountPercentage: "15.4%", offerDay: "Sexta-Feira" },
    { id: 93, category: "Temperos", name: "Noz Moscada", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$17.99/KG", discountedPrice: "R$15.99/KG", discountPercentage: "11.1%", offerDay: "Sexta-Feira" },
    { id: 94, category: "Temperos", name: "Orégano", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$11.99/KG", discountedPrice: "R$9.99/KG", discountPercentage: "16.7%", offerDay: "Sexta-Feira" },
    { id: 95, category: "Temperos", name: "Páprica", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$14.99/KG", discountedPrice: "R$12.99/KG", discountPercentage: "13.3%", offerDay: "Sexta-Feira" },
    { id: 96, category: "Temperos", name: "Pimenta Do Reino", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$16.99/KG", discountedPrice: "R$14.99/KG", discountPercentage: "11.8%", offerDay: "Sexta-Feira" },
    { id: 97, category: "Temperos", name: "Salsa", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Sexta-Feira" },
    { id: 98, category: "Temperos", name: "Sálvia", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$13.99/KG", discountedPrice: "R$11.99/KG", discountPercentage: "14.3%", offerDay: "Sexta-Feira" },
    { id: 99, category: "Temperos", name: "Tomilho", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$12.99/KG", discountedPrice: "R$10.99/KG", discountPercentage: "15.4%", offerDay: "Sexta-Feira" },
    { id: 100, category: "Temperos", name: "Urucum", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$15.99/KG", discountedPrice: "R$13.99/KG", discountPercentage: "12.5%", offerDay: "Sexta-Feira" },
    // Artesanatos (Sábado)
    { id: 101, category: "Artesanatos", name: "Amigurumi", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$35.99/UN", discountedPrice: "R$33.99/UN", discountPercentage: "5.6%", offerDay: "Sábado" },
    { id: 102, category: "Artesanatos", name: "Boneca de Pano", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$45.99/UN", discountedPrice: "R$42.99/UN", discountPercentage: "6.5%", offerDay: "Sábado" },
    { id: 103, category: "Artesanatos", name: "Cestaria", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$55.99/UN", discountedPrice: "R$52.99/UN", discountPercentage: "5.4%", offerDay: "Sábado" },
    { id: 104, category: "Artesanatos", name: "Cerâmica", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$65.99/UN", discountedPrice: "R$62.99/UN", discountPercentage: "4.5%", offerDay: "Sábado" },
    { id: 105, category: "Artesanatos", name: "Crochê", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$25.99/UN", discountedPrice: "R$23.99/UN", discountPercentage: "7.7%", offerDay: "Sábado" },
    { id: 106, category: "Artesanatos", name: "Decoupage", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$75.99/UN", discountedPrice: "R$72.99/UN", discountPercentage: "3.9%", offerDay: "Sábado" },
    { id: 107, category: "Artesanatos", name: "Feltro", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$15.99/UN", discountedPrice: "R$13.99/UN", discountPercentage: "12.5%", offerDay: "Sábado" },
    { id: 108, category: "Artesanatos", name: "Macramê", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$85.99/UN", discountedPrice: "R$82.99/UN", discountPercentage: "3.5%", offerDay: "Sábado" },
    { id: 109, category: "Artesanatos", name: "Mosaico", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$95.99/UN", discountedPrice: "R$92.99/UN", discountPercentage: "3.1%", offerDay: "Sábado" },
    { id: 110, category: "Artesanatos", name: "Patchwork", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$105.99/UN", discountedPrice: "R$102.99/UN", discountPercentage: "2.8%", offerDay: "Sábado" },
    { id: 111, category: "Artesanatos", name: "Pintura em Tecido", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$115.99/UN", discountedPrice: "R$112.99/UN", discountPercentage: "2.6%", offerDay: "Sábado" },
    { id: 112, category: "Artesanatos", name: "Pintura em Tela", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$125.99/UN", discountedPrice: "R$122.99/UN", discountPercentage: "2.4%", offerDay: "Sábado" },
    { id: 113, category: "Artesanatos", name: "Pintura em Vidro", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$135.99/UN", discountedPrice: "R$132.99/UN", discountPercentage: "2.2%", offerDay: "Sábado" },
    { id: 114, category: "Artesanatos", name: "Pintura em Madeira", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$145.99/UN", discountedPrice: "R$142.99/UN", discountPercentage: "2.1%", offerDay: "Sábado" },
    { id: 115, category: "Artesanatos", name: "Pintura em Porcelana", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$155.99/UN", discountedPrice: "R$152.99/UN", discountPercentage: "1.9%", offerDay: "Sábado" },
    { id: 116, category: "Artesanatos", name: "Pintura em Metal", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$165.99/UN", discountedPrice: "R$162.99/UN", discountPercentage: "1.8%", offerDay: "Sábado" },
    { id: 117, category: "Artesanatos", name: "Pintura em Papel", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$175.99/UN", discountedPrice: "R$172.99/UN", discountPercentage: "1.7%", offerDay: "Sábado" },
    { id: 118, category: "Artesanatos", name: "Pintura em Pedra", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$185.99/UN", discountedPrice: "R$182.99/UN", discountPercentage: "1.6%", offerDay: "Sábado" },
    { id: 119, category: "Artesanatos", name: "Pintura em Plástico", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$195.99/UN", discountedPrice: "R$192.99/UN", discountPercentage: "1.5%", offerDay: "Sábado" },
    { id: 120, category: "Artesanatos", name: "Pintura em Resina", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$205.99/UN", discountedPrice: "R$202.99/UN", discountPercentage: "1.5%", offerDay: "Sábado" },
    // Derivados (Domingo)
    { id: 121, category: "Derivados", name: "Bolo de Banana", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$9.99/KG", discountedPrice: "R$7.99/KG", discountPercentage: "20%", offerDay: "Domingo" },
    { id: 122, category: "Derivados", name: "Bolo de Cenoura", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$12.99/KG", discountedPrice: "R$10.99/KG", discountPercentage: "15.4%", offerDay: "Domingo" },
    { id: 123, category: "Derivados", name: "Bolo de Chocolate", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$15.99/KG", discountedPrice: "R$13.99/KG", discountPercentage: "12.5%", offerDay: "Domingo" },
    { id: 124, category: "Derivados", name: "Bolo de Fubá", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$8.99/KG", discountedPrice: "R$6.99/KG", discountPercentage: "22.2%", offerDay: "Domingo" },
    { id: 125, category: "Derivados", name: "Bolo de Laranja", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$11.99/KG", discountedPrice: "R$9.99/KG", discountPercentage: "16.7%", offerDay: "Domingo" },
    { id: 126, category: "Derivados", name: "Bolo de Milho", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$10.99/KG", discountedPrice: "R$8.99/KG", discountPercentage: "18.2%", offerDay: "Domingo" },
    { id: 127, category: "Derivados", name: "Bolo de Morango", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$18.99/KG", discountedPrice: "R$16.99/KG", discountPercentage: "10.5%", offerDay: "Domingo" },
    { id: 128, category: "Derivados", name: "Bolo de Nozes", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$22.99/KG", discountedPrice: "R$20.99/KG", discountPercentage: "8.7%", offerDay: "Domingo" },
    { id: 129, category: "Derivados", name: "Bolo de Pão de Mel", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$25.99/KG", discountedPrice: "R$23.99/KG", discountPercentage: "7.7%", offerDay: "Domingo" },
    { id: 130, category: "Derivados", name: "Bolo de Prestígio", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$28.99/KG", discountedPrice: "R$26.99/KG", discountPercentage: "6.9%", offerDay: "Domingo" },
    { id: 131, category: "Derivados", name: "Bolo de Queijo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$14.99/KG", discountedPrice: "R$12.99/KG", discountPercentage: "13.3%", offerDay: "Domingo" },
    { id: 132, category: "Derivados", name: "Bolo de Rolo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$20.99/KG", discountedPrice: "R$18.99/KG", discountPercentage: "9.5%", offerDay: "Domingo" },
    { id: 133, category: "Derivados", name: "Bolo de Tapioca", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$13.99/KG", discountedPrice: "R$11.99/KG", discountPercentage: "14.3%", offerDay: "Domingo" },
    { id: 134, category: "Derivados", name: "Bolo de Trigo", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$7.99/KG", discountedPrice: "R$5.99/KG", discountPercentage: "25%", offerDay: "Domingo" },
    { id: 135, category: "Derivados", name: "Bolo de Uva", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$16.99/KG", discountedPrice: "R$14.99/KG", discountPercentage: "11.8%", offerDay: "Domingo" },
    { id: 136, category: "Derivados", name: "Bolo de Yakissoba", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$24.99/KG", discountedPrice: "R$22.99/KG", discountPercentage: "8%", offerDay: "Domingo" },
    { id: 137, category: "Derivados", name: "Bolo de Zucchini", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$17.99/KG", discountedPrice: "R$15.99/KG", discountPercentage: "11.1%", offerDay: "Domingo" },
    { id: 138, category: "Derivados", name: "Bolo de Abacaxi", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$19.99/KG", discountedPrice: "R$17.99/KG", discountPercentage: "10%", offerDay: "Domingo" },
    { id: 139, category: "Derivados", name: "Bolo de Aipim", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$21.99/KG", discountedPrice: "R$19.99/KG", discountPercentage: "9.1%", offerDay: "Domingo" },
    { id: 140, category: "Derivados", name: "Bolo de Ameixa", quantity: Math.floor(Math.random() * 30) + 1, originalPrice: "R$23.99/KG", discountedPrice: "R$21.99/KG", discountPercentage: "8.3%", offerDay: "Domingo" }
];

// Carregar produtos do localStorage se existirem
const savedProducts = localStorage.getItem('products');
if (savedProducts) {
    products = JSON.parse(savedProducts);
} else {
    // Se não houver dados salvos, salvar os produtos iniciais
    localStorage.setItem('products', JSON.stringify(products));
}

// Elementos do DOM
const productsTableBody = document.getElementById('productsTableBody');
const productModal = document.getElementById('productModal');
const productForm = document.getElementById('productForm');
const addProductBtn = document.getElementById('addProductBtn');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const dayFilter = document.getElementById('dayFilter');

// Função para salvar produtos no localStorage
function saveProductsToStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Função para renderizar a tabela de produtos
function renderProducts(filteredProducts = products) {
    productsTableBody.innerHTML = '';
    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.category}</td>
            <td>${product.name}</td>
            <td>${product.quantity || 0}</td>
            <td>${product.originalPrice}</td>
            <td>${product.discountedPrice}</td>
            <td>${product.discountPercentage}</td>
            <td>${product.offerDay}</td>
            <td class="actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-danger" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </td>
        `;
        productsTableBody.appendChild(row);
    });
}

// Função para adicionar/editar produto
function saveProduct(event) {
    event.preventDefault();
    
    const productId = document.getElementById('productId').value;
    const product = {
        category: document.getElementById('category').value,
        name: document.getElementById('name').value,
        quantity: parseInt(document.getElementById('quantity').value) || 0,
        originalPrice: document.getElementById('originalPrice').value,
        discountedPrice: document.getElementById('discountedPrice').value,
        discountPercentage: document.getElementById('discountPercentage').value,
        offerDay: document.getElementById('offerDay').value
    };
    
    if (productId) {
        // Editar produto existente
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            // Manter o ID original
            product.id = products[index].id;
            products[index] = product;
        }
    } else {
        // Adicionar novo produto
        // Encontrar o maior ID existente ou começar do 1 se não houver produtos
        const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
        const newId = maxId + 1;
        products.push({ id: newId, ...product });
        
        // Ordenar produtos por nome
        products.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Salvar no localStorage
    saveProductsToStorage();
    renderProducts();
    closeModal();
}

// Função para abrir o modal
function openModal(product = null) {
    const modalTitle = document.getElementById('modalTitle');
    const productId = document.getElementById('productId');
    
    if (product) {
        modalTitle.textContent = 'Editar Produto';
        productId.value = product.id;
        document.getElementById('category').value = product.category;
        document.getElementById('name').value = product.name;
        document.getElementById('quantity').value = product.quantity || 0;
        document.getElementById('originalPrice').value = product.originalPrice;
        document.getElementById('discountedPrice').value = product.discountedPrice;
        document.getElementById('discountPercentage').value = product.discountPercentage;
        document.getElementById('offerDay').value = product.offerDay;
    } else {
        modalTitle.textContent = 'Adicionar Novo Produto';
        productId.value = '';
        document.getElementById('category').value = 'Frutas'; // Valor padrão
        document.getElementById('name').value = '';
        document.getElementById('quantity').value = '0';
        document.getElementById('originalPrice').value = '';
        document.getElementById('discountedPrice').value = '';
        document.getElementById('discountPercentage').value = '';
        document.getElementById('offerDay').value = 'Segunda-Feira'; // Valor padrão
    }
    
    productModal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    productModal.style.display = 'none';
}

// Função para editar produto
function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        openModal(product);
    }
}

// Função para excluir produto
function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        products = products.filter(p => p.id !== id);
        // Salvar no localStorage após excluir
        saveProductsToStorage();
        renderProducts();
    }
}

// Função para filtrar produtos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const day = dayFilter.value;
    
    let filteredProducts = products;
    
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    if (day) {
        filteredProducts = filteredProducts.filter(p => p.offerDay === day);
    }
    
    renderProducts(filteredProducts);
}

// Event Listeners
addProductBtn.addEventListener('click', () => openModal());
document.querySelector('.close').addEventListener('click', closeModal);
productForm.addEventListener('submit', saveProduct);
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
dayFilter.addEventListener('change', filterProducts);

// Fechar modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === productModal) {
        closeModal();
    }
});

// Renderizar produtos iniciais
renderProducts();

// Dados de usuários (em um sistema real, isso estaria em um banco de dados)
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'usuario', password: 'senha123' }
];

// Elementos do DOM
const loginScreen = document.getElementById('loginScreen');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');

// Função para verificar login
function checkLogin(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

// Event listener para o formulário de login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (checkLogin(username, password)) {
        // Login bem sucedido
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Salvar estado de login no localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Verificar se já está logado
window.addEventListener('load', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }
});

// Função para logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.reload();
}

// Adicionar botão de logout no header
const header = document.querySelector('header');
const logoutButton = document.createElement('button');
logoutButton.className = 'btn-danger';
logoutButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Sair';
logoutButton.onclick = logout;
header.appendChild(logoutButton);

// Adicionar evento de logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}); 
