const questoes = [
	{
		"texto_questao": "Quanto é 1+1 ?",
		"img_questao": null
	},
	{
		"texto_questao": "Qual a capital da França ?",
		"img_questao": null
	},
	{
		"texto_questao": "O que significa a palavra \"Father\" ?",
		"img_questao": null
	},
	{
		"texto_questao": "Qual a fórmula da relatividade geral de Einstein ?",
		"img_questao": "eistein.png"
	},
	{
		"texto_questao": "Qual a capital da Alemanha ?",
		"img_questao": "alemanha.png"
	}
]

return

questoes.map((questao) => {
    return (
        <ul>
            <li>{questao.id_questao}</li>
            <li>{questao.texto_questao}</li>
        </ul>
        
        
    )
})