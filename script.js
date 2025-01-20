  function iniciarWhatsApp() {
            const numero = "5581982840782"; // Substitua pelo número correto
            const mensagem = encodeURIComponent("Olá! Tenho interesse em saber mais sobre os seus produtos.");
            const link = `https://wa.me/${numero}?text=${mensagem}`;
            window.open(link, "_blank"); // Abre o link em uma nova aba
        }