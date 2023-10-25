function rot13(str) {
    return str.replace(/[A-Z]/g, function(letter) {
        return String.fromCharCode(((letter.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
    });
}