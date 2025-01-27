document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Prosta walidacja (sprawdzanie, czy pola są wypełnione)
    if (login && password) {
        // Zalogowano pomyślnie, usuwamy formularz logowania
        document.getElementById('loginForm').style.display = 'none';

        // Powolne zanikanie tytułu
        const title = document.getElementById('title');
        title.style.opacity = '0';
        
        // Po 1 sekundzie (gdy tytuł zaniknie) pokaż formularz wyboru imienia i płci
        setTimeout(function() {
            title.style.display = 'none';
            document.getElementById('characterForm').style.display = 'block';
        }, 1000);
    } else {
        alert('Proszę wypełnić oba pola!');
    }
});
