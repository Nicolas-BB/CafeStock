const json = {
    "estoque": 70,
    "pedidos": 12,
    "fornecedores": 3,
    "resumo": [
        { "id": "id-2025-09-01", "data": "01 de Setembro", "valor": -22 },
        { "id": "id-2025-09-02", "data": "02 de Setembro", "valor": -18 },
        { "id": "id-2025-09-03", "data": "03 de Setembro", "valor": -12 },
        { "id": "id-2025-09-04", "data": "04 de Setembro", "valor": 10 },
        { "id": "id-2025-09-05", "data": "05 de Setembro", "valor": -15 },
        { "id": "id-2025-09-06", "data": "06 de Setembro", "valor": -20 },
        { "id": "id-2025-09-07", "data": "07 de Setembro", "valor": 25 },
        { "id": "id-2025-09-08", "data": "08 de Setembro", "valor": -30 }
    ],
    "consumo": [
        { "id": "id-2025-09-01", "data": "01 de Setembro", "valor": 34 },
        { "id": "id-2025-09-02", "data": "02 de Setembro", "valor": 36 },
        { "id": "id-2025-09-03", "data": "03 de Setembro", "valor": 39 },
        { "id": "id-2025-09-04", "data": "04 de Setembro", "valor": 37 },
        { "id": "id-2025-09-05", "data": "05 de Setembro", "valor": 35 },
        { "id": "id-2025-09-06", "data": "06 de Setembro", "valor": 42 },
        { "id": "id-2025-09-07", "data": "07 de Setembro", "valor": 38 },
        { "id": "id-2025-09-08", "data": "08 de Setembro", "valor": 40 }
    ],
    "entradas": [
        { "id": "id-2025-09-01", "data": "01 de Setembro", "valor": 7 },
        { "id": "id-2025-09-02", "data": "02 de Setembro", "valor": 13 },
        { "id": "id-2025-09-03", "data": "03 de Setembro", "valor": 9 },
        { "id": "id-2025-09-04", "data": "04 de Setembro", "valor": 11 },
        { "id": "id-2025-09-05", "data": "05 de Setembro", "valor": 15 },
        { "id": "id-2025-09-06", "data": "06 de Setembro", "valor": 8 },
        { "id": "id-2025-09-07", "data": "07 de Setembro", "valor": 12 },
        { "id": "id-2025-09-08", "data": "08 de Setembro", "valor": 10 }
    ]
}

document.querySelector('#estoque').innerHTML = json.estoque;
document.querySelector('#pedidos').innerHTML = json.pedidos;
document.querySelector('#fornecedores').innerHTML = json.fornecedores;

json.resumo.forEach(i => {
    const ret = document.createElement('div');
    ret.classList.add('ret');
    if (i.valor < 0) {
        ret.style.height = (i.valor * -1) * 10 + 'px';
        ret.style.backgroundColor = 'orange';
    } else {
        ret.style.height = (i.valor * 10) + 'px';
    }
    document.querySelector('.graficoResumo').appendChild(ret);
});

json.consumo.forEach(i => {
    const ret = document.createElement('div');
    ret.classList.add('ret');
    ret.style.height = (i.valor * 10) + 'px';
    ret.style.backgroundColor = 'orange';
    document.querySelector('.graficoConsumo').appendChild(ret);
});

json.entradas.forEach(i => {
    const ret = document.createElement('div');
    ret.classList.add('ret');
    if (i.valor < 0) {
        ret.style.height = (i.valor * -1) * 10 + 'px';
        ret.style.backgroundColor = 'orange';
    } else {
        ret.style.height = (i.valor * 10) + 'px';
    }
    document.querySelector('.graficoEntradas').appendChild(ret);
});