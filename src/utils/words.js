export default function generarPalabrasAleatorias(numPalabras) {
    const palabras = [];
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < numPalabras; i++) {
        let palabra = '';
        const longitudPalabra = Math.floor(Math.random() * 10) + 3;
        for (let j = 0; j < longitudPalabra; j++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            palabra += caracteres[indiceAleatorio];
        }
        palabras.push(palabra);
    }
    return palabras;
}
