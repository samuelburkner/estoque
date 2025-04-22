document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Função para verificar login
    function checkLogin(username, password) {
        // Verificar se o usuário e senha são os corretos
        return username === 'admin@estoque.com' && password === 'admin123';
    }

    if (checkLogin(username, password)) {
        // Login bem sucedido - redirecionar para a página de estoque
        window.location.href = 'estoque.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}); 