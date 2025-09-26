document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== "") {
        showWarning("Carregando...");
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid={API key}`;
    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}
