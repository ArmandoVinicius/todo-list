# 🎬 To Watch List — Lista de Filmes para Assistir

Um projeto pessoal feito com **React**, **Node.js**, **MongoDB** e **Prisma** que permite ao usuário gerenciar uma lista de filmes que deseja assistir.

## ✨ Funcionalidades

- [x] Adicionar filmes à lista
- [x] Remover filmes da lista
- [ ] Marcar filmes como "assistidos"
- [ ] Filtrar por status: assistidos / não assistidos
- [ ] Buscar detalhes de filmes via [The Movie Database (TMDb)](https://www.themoviedb.org/) *(feature futura)*
- [ ] Salvar reviews e notas pessoais
- [ ] Autenticação de usuário com login simples

## 🧱 Tecnologias

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Banco de Dados:** MongoDB + Prisma
- **Outros:** TMDb API *(futuramente)*, dotenv

## 🚀 Rodando localmente

*obs: note que o projeto ainda não está finalizado, portanto nem todas as funcionalidades estão funcionando*

---
1. **Clone o repositório:**

```bash
git clone https://github.com/armandovinicius/todo-list
cd todo-list
```

2. **Instale as dependências:**
```bash
# frontend
cd frontend
npm install

# backend
cd ../backend
npm install
```

3. **Configure as variáveis de ambiente:**

- Crie um arquivo `.env` na pasta backend e adicione:

```.env
DATABASE_URL=mongodb+srv://<usuário>:<senha>@<cluster>.mongodb.net/<cluster>?retryWrites=true&w=majority
PORT=3000
```

4. **Execute o backend:**

```bash
cd backend
npm run dev
```

5. **Execute o frontend:**

```bash
cd frontend
npm run dev
```

6. **Acesse o app em http://localhost:5173**
---
📁 Estrutura de pastas
```plaintext
todo-list/
│
├── frontend/         # React app
│   ├── src/
│   └── ...
│
├── backend/         # Node.js backend com Express
│   ├── prisma/
│   ├── src/
│   └── ...
│
├── .gitignore
└── README.md
```
---
🧠 Próximos passos

 - Implementar drag-and-drop para ordenar a lista
 - Adicionar sistema de favoritos
 - Modo escuro/claro
 - Integração com agenda (para lembretes)
---
📸 Screenshot
![Imgur](https://i.imgur.com/NZM38Ye.png)
---
📜 Licença
MIT — use como quiser. Feito com ❤️ por Armando Vinicius.
