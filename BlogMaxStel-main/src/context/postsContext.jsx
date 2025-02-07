import React, { createContext, useContext, useState } from 'react';

// Dados iniciais dos posts
const initialPosts = [
    {
        author: { img: "assets/icone.png", name: "Randall Pearson" },
        postTitle: "Título bem grandão do post pra colocar aqui, talvez quebrando linha.",
        postContent: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página...",
        placeholderText: "A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras..."
    },
    {
        author: { img: "assets/icone.png", name: "Randall Pearson" },
        postTitle: "Título bem grandão do post pra colocar aqui, talvez quebrando linha.",
        postContent: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página...",
        placeholderText: "A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras..."
    }
];

// Criar o contexto
const PostsContext = createContext();

// Provedor de contexto para envolver os componentes e fornecer os dados
export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState(initialPosts); // Estado para armazenar os posts

    // Função para adicionar um novo post
    const addNewPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <PostsContext.Provider value={{ posts, addNewPost }}>
            {children}
        </PostsContext.Provider>
    );
};

// Hook personalizado para consumir o contexto
export const usePosts = () => {
    return useContext(PostsContext);
};
