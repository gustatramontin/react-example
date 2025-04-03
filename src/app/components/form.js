import { useState } from 'react'
import styles from './form.module.css'

export default function Form() {

    let [mensagem, setMensagem] = useState("")

    let [nome, setNome] = useState("João Silva Oliveira")
    let [email, setEmail] = useState("joaosilva@gmail.com")
    let [telefone, setTelefone] = useState("47 91234 5678")

    const handleChange = (e, set) => {
	set(e.target.value)	
    }

    async function incluirPessoa(formData) {

	const dados = {nome, email, telefone}
	console.log(dados)
	try {
	const res = await fetch("http://localhost:5000/incluir_pessoa", {
	    method: "POST",
	    headers: {
		"content-type": "application/json"
	    },
	    body: JSON.stringify(dados),
	})
	const json = await res.json()
	console.log(json)
	if (json.resultado == "ok") {
	    setMensagem("Pessoa incluída com sucesso!")

	    setNome("")
	    setEmail("")
	    setTelefone("")
	}
	} catch (error) {
	    setMensagem(error.toString())
	}


    } 
    return (
	<form action={incluirPessoa} className={styles.form}>
	<h2>Formulario</h2>
	<p>Nome <input type="text"  value={nome}     onChange={(e) => handleChange(e, setNome)    }/>
	</p>
	<p> Email: <input type="email" value={email}    onChange={(e) => handleChange(e, setEmail)   }/> </p>
	<p>Telefone: <input type="tel"   value={telefone} onChange={(e) => handleChange(e, setTelefone)}/></p>

	<button type="submit">Incluir!</button>
	<p>{mensagem}</p>
	</form>
    )
}

