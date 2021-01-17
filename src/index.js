import React, { useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';


import api from './services/api';
// N'ao possuem valor semantico (significado)
// Nao possuem estiliza;'ao propria
// View : div, footer, header , main , aside , section
// Text:p, span, strong, h1, h2, h3

// Todos componentes por padrão possuem "display: flex"

export default function App(){

    const [projects, setProjects] = useState([]);



    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Diego Fernandes'
        });
        const project = response.data;
        setProjects([...projects, project]);
    }
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        
        <SafeAreaView style={styles.container}>
        <FlatList 
            
            data={projects}
            keyExtractor={project => projects.id }
            renderItem={({ item: project }) => (
                <Text style={styles.project}>{project.title}</Text>
            )}
        />
        <TouchableOpacity 
        activeOpacity={0.5} 
        style={styles.button} 
        onPress={handleAddProject}
        >
            <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
        </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7159c1',



    },
    title:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    project:{
        color: '#FFF',
        fontSize: 30,
        
    },
    button:{
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});