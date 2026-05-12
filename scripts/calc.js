function calculateExposureTime(N, SNR, darkRate, backgroundRate, readNoise, nPix, a_b = 1, a_d = 1, a_z = 1) {
    
    // Components of Quadratic Equation
    let A = (N**2) / (SNR**2)
    let B = N**2 + nPix * a_b * (backgroundRate + a_d * darkRate)
    let C = nPix * a_b * a_d * a_z * readNoise**2

    return (-B + Math.sqrt(B**2 + 4 * A * C))/(2 * A);
}

document.getElementById("inputs").addEventListener("submit", function(event) {
    event.preventDefault();

    const SNR = Number(document.getElementById("SNR").value);
    const Flux = Number(document.getElementById("Flux").value);
    const darkRate = Number(document.getElementById("darkRate").value);
    const backgroundRate = Number(document.getElementById("backgroundRate").value);
    const readNoise = Number(document.getElementById("readNoise").value);
    const nPix = Number(document.getElementById("nPix").value);

    const result = calculateExposureTime(Flux, SNR, darkRate, backgroundRate, readNoise, nPix);

    document.getElementById("result").textContent = "Result: " + result;
});