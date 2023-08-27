import React, { useEffect, useState } from 'react';
import api from '../../services/serviceConfig';


function TextEditor(props) {
    const [contentStr, setContent] = useState('');
    let content = document.getElementById(props.id);
    // content.onclick = ev => {
    //     alert('alou')
    // }

    function handleTyping(ev) {
        setContent(contentStr + ev.key);
        console.log(ev);
        props.onChange({target: {value: contentStr}});
    }
    return (
        <div id={props.id} className={props.className} contentEditable onKeyDown={handleTyping}>
            
        </div>
    )
}

function WritePost(props) {


    const [titulo,setTitulo] = useState('')
    const [descricao,setDescricao] = useState('')
    const [conteudo,setConteudo] = useState('')
    const [inputs,setInputs] = useState({})

    const [showPreview, setShowPreview] = useState(false)

    console.log('aaaaaaaaaaaaaaaaa');

    function handleTitle(e) {
        if(e.target.value.length <= 100){
            setTitulo(e.target.value);
        }
    }

    function handleDescricao(e) {
        if(e.target.value.length <= 100){
            setDescricao(e.target.value);
        }
    }

    function handleConteudo(e) {
        setConteudo(e.target.value);
    }

    function previewPost(){
        setShowPreview(!showPreview);
    }


    function savePost() {
        const data = {
            title: titulo,
            description: descricao,
            content: conteudo
        }

        api.post('posts', data)
        .then(res => {
            console.log( res.data )
        })
    }

    // useEffect(() => {
        
    // })

    return(
        <div>
            {!showPreview &&
            <div>
                <h1>Escrever Post</h1>
                
                <div className="form">

                    <div className="input-block">
                        <label>Titulo </label><span>{titulo.length}/100</span>
                        <input name="title" type="text" value={titulo} onChange={handleTitle}/>
                    </div>
                        

                    <div className="input-block">
                        <label>Descrição </label><span>{descricao.length}/100</span>
                        <input type="text" value={descricao} onChange={handleDescricao}/>
                    </div>


                    <div className="input-block">
                        <label>Conteúdo</label>
                        <textarea value={conteudo} onChange={handleConteudo}/>

                       
                        <TextEditor value={conteudo} id="text-writter-container" onChange={handleConteudo}/>
                    </div>

                    <button onClick={previewPost}>Preview</button>

                </div>
            </div>}

            {showPreview && <div>
                <button onClick={previewPost}>Voltar</button>
                <button onClick={savePost}>Salvar</button>
                <h3>Preview do post</h3>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
                <p>{conteudo}</p>
            </div>}
       
        </div>
    )
}

export default WritePost;