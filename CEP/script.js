'use strict'

function limparForm() {
    document.getElementById('rua').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
}

function preencherForm(endereco) {
    document.getElementById('rua').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}

const eNum = (num) => /^[0-9]+$/.test(num)

const cepValido = (cep) => cep.length == 8 && eNum(cep)

async function pasquiserCEP() {
    const inputCEP = document.getElementById('cep')
    const cep = inputCEP.value.trim()
    limparForm()

    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cepValido(cep)) {
        const dados = await fetch(url)
        const addres = await dados.json()

        if(addres.hasOwnProperty('erro')) {
            alert('CEP não encontrado!')
        }

        else {
            preencherForm(addres)
        }
    }

    else {
        alert('CEP incorreto!')
    }
}

document.getElementById('cep').addEventListener('blur', pasquiserCEP)