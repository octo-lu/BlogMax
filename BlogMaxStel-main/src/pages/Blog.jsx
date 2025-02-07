import { BlogPost } from "../components/Post";
import ImgDecoration from "../assets/img-effect.png";
import React, { useState } from "react";
import { CreatePostModal } from "../components/CreatePost";
import { usePosts } from "../context/postsContext";

export function Blog() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { posts, addNewPost } = usePosts(); // Acesso ao contexto

    if (!posts) {
        return <div>Carregando...</div>; // Exibe algo enquanto os posts não estão disponíveis
    }

    return (
        <>
            <CreatePostModal
                isVisible={isModalOpen}
                addNewPost={addNewPost}
                onCloseModal={() => setIsModalOpen(false)}
            />
            <header>
                <div className="header-logo">Web<span>Blog</span></div>
                <div className="header-rights">powered by WebII</div>
                <button onClick={() => setIsModalOpen(true)}>Criar post</button>
            </header>

            <div className="container">
                <main>
                    {posts.map(
                        ({ author, postTitle, postContent, placeholderText }, index) => (
                            <BlogPost author={author} postTitle={postTitle} postContent={postContent} placeholderText={placeholderText} key={index} />
                        )
                    )}
                </main>
                <aside>
                    <h1 className="aside-title">Tem algum assunto pra compartilhar?</h1>
                    <div className="aside-subtitle">Crie agora um post e compartilhe com o seu conteúdo.</div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white p-2 rounded"
                    >
                        Criar post
                    </button>
                    <img alt="Imagem de decoração" src={ImgDecoration} />
                </aside>
            </div>
            <footer>
                <div className="header-logo">Web<span>Blog</span></div>
                <div className="footer-text">powered by WebII</div>
            </footer>
        </>
    );
}
