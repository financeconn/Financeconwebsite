# FinanceCon - HTML Version

Esta é a versão HTML pura do projeto FinanceCon, convertida de React para HTML/CSS/JavaScript vanilla.

## Estrutura do Projeto

```
html-version/
├── index.html          # Página principal com todas as seções
├── css/
│   └── styles.css      # Estilos (baseado em Tailwind CSS)
├── js/
│   ├── app.js          # Lógica principal de navegação
│   ├── translations.js # Sistema de tradução multi-idioma
│   └── analytics.js    # Sistema de analytics
└── README.md           # Este arquivo
```

## Funcionalidades

### ✅ Implementadas

1. **Sistema de Navegação SPA**
   - Navegação entre páginas sem recarregar
   - Scroll suave ao topo
   - URLs amigáveis

2. **Sistema de Tradução**
   - 4 idiomas: Inglês, Português, Espanhol, Francês
   - Troca de idioma em tempo real
   - Persistência da escolha no localStorage

3. **Sistema de Analytics**
   - Rastreamento de visualizações de página
   - Contador de visitantes únicos
   - Estatísticas por período (24h, 7 dias, 30 dias)
   - Páginas mais visitadas
   - Distribuição por idioma
   - **Atalho secreto**: `Ctrl + Shift + A` para abrir o dashboard

4. **Design Responsivo**
   - Mobile-first
   - Menu hamburger para mobile
   - Layout adaptativo

5. **Páginas Principais**
   - Home (Hero + Features + CTA)
   - About
   - Finance (com sub-páginas)
   - Economics (com sub-páginas)
   - Related Topics (Accounting, Business, Math, Statistics)
   - Resources
   - Páginas de Fórmulas
   - Páginas de Recursos

## Como Usar

### Opção 1: Servidor Local Simples

**Python 3:**
```bash
cd html-version
python -m http.server 8000
```

**Python 2:**
```bash
cd html-version
python -m SimpleHTTPServer 8000
```

**Node.js (com http-server):**
```bash
cd html-version
npx http-server -p 8000
```

Depois acesse: `http://localhost:8000`

### Opção 2: Abrir Diretamente

Você pode simplesmente abrir o arquivo `index.html` em qualquer navegador moderno. Todas as funcionalidades funcionam localmente.

## Atalhos de Teclado

- **Ctrl + Shift + A**: Abre/fecha o dashboard de analytics (só você vê!)

## Armazenamento Local

O site usa `localStorage` para:
- Salvar preferência de idioma
- Armazenar dados de analytics
- Identificar visitantes únicos

## Personalização

### Alterar Cores

Edite as variáveis CSS em `css/styles.css`:
```css
:root {
  --green-600: #16a34a;  /* Cor principal */
  --green-700: #15803d;  /* Cor escura */
  /* ... */
}
```

### Adicionar Traduções

Edite o objeto `translations` em `js/translations.js`:
```javascript
translations['pt']['nova.chave'] = 'Novo texto';
```

No HTML, use:
```html
<span data-i18n="nova.chave">Texto padrão</span>
```

### Adicionar Novas Páginas

1. Adicione uma nova seção no HTML:
```html
<section data-section="minha-pagina" style="display: none;">
  <!-- Conteúdo -->
</section>
```

2. Adicione botões de navegação:
```html
<button data-navigate="minha-pagina">Ir para Minha Página</button>
```

## Compatibilidade

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Opera (últimas 2 versões)
- ✅ Mobile browsers

## Diferenças da Versão React

### O que foi mantido:
- ✅ Todas as funcionalidades principais
- ✅ Sistema de tradução completo
- ✅ Analytics com dashboard
- ✅ Navegação SPA
- ✅ Design responsivo
- ✅ Todas as cores e estilos

### O que foi simplificado:
- 📝 Algumas páginas detalhadas foram reduzidas (podem ser expandidas)
- 📝 Calculadoras interativas estão em placeholders (podem ser implementadas)
- 📝 Componentes complexos foram simplificados

## Deploy

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload da pasta `html-version`
3. Vá em Settings > Pages
4. Selecione a branch e a pasta
5. Seu site estará online!

### Netlify

1. Arraste a pasta `html-version` para netlify.com/drop
2. Pronto!

### Vercel

```bash
cd html-version
vercel --prod
```

## Desenvolvimento

Para desenvolver localmente:

1. Edite os arquivos
2. Recarregue o navegador
3. Não precisa de build ou compilação!

## Performance

- 📦 Zero dependências externas
- ⚡ Carregamento instantâneo
- 🎯 ~50KB total (sem imagens)
- 💾 Funciona offline depois do primeiro carregamento

## Segurança

- 🔒 Sem código server-side
- 🔒 Analytics armazenados localmente
- 🔒 Sem cookies
- 🔒 Sem rastreadores externos

## Suporte

Para problemas ou dúvidas:
- Email: financeconn@gmail.com
- Website: www.financecon.com

## Licença

© 2026 FinanceCon. Todos os direitos reservados.

---

**Nota**: Esta é uma versão HTML pura. Para a versão React completa com todas as páginas detalhadas e calculadoras funcionais, veja o projeto original.
