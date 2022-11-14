let luvut = []

for (let i = 0; i < 5; i++) {
    luvut [i] = parseInt(prompt('Anna luku: ' + (i+1)))
}
for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i])
}