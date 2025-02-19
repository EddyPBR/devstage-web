# 🚀 devstage-web

![DevStage](https://github.com/user-attachments/assets/d1f7526f-7a23-4ab1-ad8f-230bfcb5b5b5)


## 📌 Sobre o Projeto

O **DevStage** é um aplicativo de inscrições onde os usuários podem:

- Se inscrever no evento;
- Compartilhar um link exclusivo para convidar outras pessoas;
- Acompanhar o número de acessos e inscrições gerados pelo seu link;
- Ver o ranking TOP 3 dos usuários que mais trouxeram inscritos.

O projeto é dividido em duas partes:

- 🔹 **Backend:** API que gerencia usuários, convites e rankings [(devstage-api)](https://github.com/EddyPBR/devstage-api)
- 🔹 **Frontend:** Interface web do sistema (**este repositório**)

---

## 🛠️ Como Rodar o Projeto

### 🔽 1. Clone o Repositório

```bash
git clone https://github.com/EddyPBR/devstage-web.git
cd devstage-web
```

### 📦 2. Instale as Dependências

```bash
npm install
```

### ⚙️ 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env.development` na raiz do projeto e adicione:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3333
```

> Substitua a URL da API caso esteja rodando em outro endereço.

### 🔄 4. Gere as API Requests com Orval (OPCIONAL)
```bash
npm run generate:api
```

### 🚀 5. Rode o Projeto

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Tecnologias Utilizadas

- **Next.js**
- **TailwindCSS 4**
- **Orval**

---

💙 **Gostou do projeto? Deixe uma ⭐ para apoiar!**
