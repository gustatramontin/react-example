import { useState } from 'react';
import styles from "./listagem.module.css"

export default function ListagemDePessoas() {
    let [pessoas, setPessoas] = useState([])
    let [erro, setErro] = useState("")

    function getPessoas() {
	fetch('http://localhost:5000/listar_pessoas')
                .then(response => response.json()) // especificando que a resposta vai ser em json
                .then(json => {
                    //console.log(json);
                    if (json.resultado == 'ok') { // a API informa que deu certo a chamada?
                        setPessoas(json.detalhes); // pega as pessoas ;-p
                    } else {
                        // informar o erro - assustar o usuário :-O
                        setPessoas([{"nome":json.detalhes, "telefone":"erro", "email":"erro"}])
                    }
                })
                .catch(error => {
                    setErro(error)
                });
        }
    return (
	<>
	<button className={[styles.botao, "m-3"]} onClick={getPessoas}> Listar Pessoas </button>
	<div className={styles.cards}>
	{pessoas.map(p => (
	    <div className={styles.card} key={p.id}>
                <div className={styles.card_body} key={p.id}>
                    <strong>Nome: { p.nome }</strong><br />
                    <small>Email: { p.email }</small><br />
                    <small>Telefone: { p.telefone }</small>
                </div>
            </div>
	))}
	</div>
	<div className={styles.erro}>
	    {erro.toString()}
	</div>
	</>
    )
}
