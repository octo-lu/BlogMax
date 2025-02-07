import UserImage from '../assets/icone.png';

export function BlogPost({ author, postTitle, postContent, placeholderText }) {
    return (
        <article>
            <div className="post-author">
                <img alt="Ícone do Autor" src={UserImage} />
                <div className="post-author-name">{author.name}</div>
            </div>
            <h2 className="text-xl font-semibold">{postTitle}</h2>
            <p className="post-text">{postContent}</p>
            <p className="post-text">{placeholderText}</p>
        </article>
    );
}
