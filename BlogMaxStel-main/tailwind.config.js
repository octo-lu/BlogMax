// tailwind.config.js
module.exports = {
    important: true, // Adiciona !important a todas as classes
    content: [
      "./src/**/*.{js,jsx,ts,tsx}" // Defina o diretório onde os arquivos com classes Tailwind serão usados
    ],
    theme: {
      extend: {}, // Aqui você pode estender as configurações padrão, se necessário
    },
    plugins: [], // Adicione plugins aqui se precisar de funcionalidades extras
  };
  