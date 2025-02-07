import { useState } from 'react';

export const CreatePostModal = ({ isVisible, onCloseModal, addNewPost }) => {
    if (!isVisible) return null;

    const defaultValues = {
        userName: "",
        placeholderText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut amet veniam cupiditate nulla perspiciatis sed esse itaque",
        postTitle: '',
        postContent: ''
    };

    const [formDetails, setFormDetails] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormDetails({
            ...formDetails,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formDetails); // Acessa os dados como um objeto
        const { userName, ...restOfData } = formDetails;

        addNewPost({
            author: {
                name: userName,
                img: ""
            },
            ...restOfData
        });

        setFormDetails(defaultValues);
        onCloseModal();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
            <div className="bg-gray-100 w-full max-w-md rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-xl font-bold">Crie um novo post</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onCloseModal}
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                            placeholder="Digite o seu nome"
                            id="userName"
                            name="userName"
                            value={formDetails.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                            placeholder="Digite o título para o seu post"
                            id="postTitle"
                            name="postTitle"
                            value={formDetails.postTitle}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                            placeholder="Escreva o seu conteúdo aqui..."
                            id="postContent"
                            name="postContent"
                            value={formDetails.postContent}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
