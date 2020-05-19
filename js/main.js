function calcular() {
    let tam = document.getElementById('tam').value
    let vel = document.getElementById('vel').value
    let res = document.getElementById('res')

    let nta = document.getElementById('nta').value //número tamanho arquivo
    let nvc = document.getElementById('nvc').value //número velocidade de conexão

    nta = Number(nta)
    nvc = Number(nvc)

    //velocidade convertida para kilobytes por segundo
    let velconv = 0
    //tamanho convertido para kilobytes
    let tamconv = 0

    switch (vel) {
        case 'Mbps':
            velconv = 1000.0 * (nvc / 8)
            break
        case 'Kbps':
            velconv = nvc / 8.0
            break
        case 'KBps':
            velconv = nvc
            break
    }

    switch (tam) {
        case 'Gigabyte':
            tamconv = 1024.0 * 1024.0 * nta
            break
        case 'Megabyte':
            tamconv = 1024.0 * nta
            break
        case 'Kilobyte':
            tamconv = nta
            break
        case 'Byte':
            tamconv = nta / 1024.0
            break
    }

    //resposta em minutos
    let respmin = tamconv / velconv / 60.0


    let txthora = 'hora'
    let txtmin = 'minuto'
    let txtseg = 'segundo'

    if (respmin >= 60.0) {
        let hora = 0
        let aux = respmin
        while (aux >= 60.0) {
            aux -= 60.0
            hora += 1
        }
        let resto = aux % 1
        let seg = parseInt(resto * 60)
        let min = parseInt(aux)
        if (hora > 1) {
            txthora = 'horas'
        }
        if (min > 1) {
            txtmin = 'minutos'
        }
        if (seg > 1) {
            txtseg = 'segundos'
        }
        res.innerHTML = `O download durará ${hora} ${txthora} ${min} ${txtmin} e ${seg} ${txtseg}.`
    } else {
        let resto = respmin % 1
        let seg = parseInt(resto * 60)
        let min = parseInt(respmin)
        if (min > 1) {
            txtmin = 'minutos'
        }
        if (seg > 1) {
            txtseg = 'segundos'
        }
        res.innerHTML = `O download durará ${min} ${txtmin} e ${seg} ${txtseg}.`
    }

}