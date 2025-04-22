// Verificar se já está na página de login
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Função para verificar login
        function checkLogin(username, password) {
            // Usar uma função de hash simples para a senha
            const hashedPassword = btoa(password);
            // Verificar se o usuário e senha são os corretos
            return username === 'admin@estoque.com' && hashedPassword === btoa('admin123');
        }

        if (checkLogin(username, password)) {
            // Login bem sucedido - redirecionar para a página de estoque
            window.location.href = 'estoque.html';
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });
} else {
    // Se estiver na página de estoque, verificar se está logado
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html';
    }
} 
