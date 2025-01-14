function muunna() {
    let yksikkö = document.getElementById('yksikkö').value
    let asteet = document.getElementById('asteet').value
    let desimaali = document.querySelector('input[name="decimal"]:checked').value
    let tulos = document.getElementById('tulos')
    if (yksikkö == "fahrenheiteiksi") {
        if(asteet !== "") {
            let fahrenheit  = (asteet * 1.8 + 32).toFixed(desimaali)
            tulos.innerHTML = `${fahrenheit}°F`
        }    
    }
    if (yksikkö == "celsiukseksi") {
        if(asteet !== "") {
            let celsius = ((asteet - 32) / 1.8).toFixed(desimaali)

            tulos.innerHTML = `${celsius}°C`
        }
    }
}   