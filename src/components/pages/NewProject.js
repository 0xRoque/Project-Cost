import { useNavigate } from 'react-router-dom';

import ProjectForm from "../project/ProjectFrom";
import styles from "./NewProjects.module.css"

function Newproject(){

        const navigate = useNavigate()

        function creatPost(project){

            // Initialize cost and services
            project.cost = 0
            project.services =[]

            fetch("http://localhost:5000/projects",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(project),
            })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                navigate('/projects', {state: { message: 'Projeto criado com sucesso!' }})

            })
            .catch(err=>console.log(err))

        }

    return(
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Cria o teu projeto para depois adicionar o serviços</p>
            <ProjectForm handleSubmit={creatPost} btnText="Criar Projeto"/>
        </div>
    );
}

export default Newproject;