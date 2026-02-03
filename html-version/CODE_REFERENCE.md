# 🔧 Code Reference - FinanceCon HTML

Referência rápida de código para desenvolvimento.

## 🎨 CSS Classes

### Layout

```css
/* Containers */
.max-w-7xl      /* Largura máxima 80rem */
.max-w-4xl      /* Largura máxima 56rem */
.max-w-3xl      /* Largura máxima 48rem */
.mx-auto        /* Centralizar horizontalmente */
.px-4           /* Padding horizontal 1rem */
.py-16          /* Padding vertical 4rem */

/* Flexbox */
.flex           /* display: flex */
.flex-col       /* flex-direction: column */
.items-center   /* align-items: center */
.justify-center /* justify-content: center */
.justify-between /* justify-content: space-between */
.gap-4          /* gap: 1rem */

/* Grid */
.grid                          /* display: grid */
.grid-cols-1                   /* 1 coluna */
.md:grid-cols-2                /* 2 colunas em tablet */
.lg:grid-cols-3                /* 3 colunas em desktop */
```

### Tipografia

```css
/* Tamanhos */
.text-sm        /* 0.875rem */
.text-base      /* 1rem */
.text-lg        /* 1.125rem */
.text-xl        /* 1.25rem */
.text-2xl       /* 1.5rem */
.text-3xl       /* 1.875rem */
.text-4xl       /* 2.25rem */
.text-5xl       /* 3rem */

/* Pesos */
.font-medium    /* font-weight: 500 */
.font-semibold  /* font-weight: 600 */
.font-bold      /* font-weight: 700 */

/* Alinhamento */
.text-center    /* text-align: center */
.text-left      /* text-align: left */
```

### Cores

```css
/* Backgrounds */
.bg-white       /* #ffffff */
.bg-gray-50     /* #f9fafb */
.bg-green-50    /* #f0fdf4 */
.bg-green-600   /* #16a34a - Principal */
.bg-green-700   /* #15803d */

/* Texto */
.text-white     /* #ffffff */
.text-gray-600  /* #4b5563 */
.text-gray-700  /* #374151 */
.text-gray-900  /* #111827 */
.text-green-600 /* #16a34a */
```

### Espaçamento

```css
/* Padding */
.p-4    /* padding: 1rem */
.p-6    /* padding: 1.5rem */
.px-4   /* padding-left/right: 1rem */
.py-3   /* padding-top/bottom: 0.75rem */

/* Margin */
.mb-4   /* margin-bottom: 1rem */
.mb-6   /* margin-bottom: 1.5rem */
.mt-4   /* margin-top: 1rem */
```

### Borders & Rounded

```css
.border             /* border: 1px solid */
.border-gray-200    /* border-color: #e5e7eb */
.border-green-500   /* border-color: #22c55e */
.rounded-lg         /* border-radius: 0.5rem */
.rounded-xl         /* border-radius: 0.75rem */
.rounded-full       /* border-radius: 9999px */
```

### Effects

```css
.shadow-sm          /* box-shadow pequena */
.shadow-lg          /* box-shadow grande */
.hover:bg-green-700 /* background ao hover */
.transition-colors  /* transição suave de cores */
```

## 🧩 HTML Patterns

### Página Básica

```html
<section data-section="nome-pagina" style="display: none;">
  <div class="bg-white">
    <!-- Hero -->
    <section class="py-16 bg-gradient-to-br from-green-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Título
        </h1>
        <p class="text-xl text-gray-600">Descrição</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Conteúdo -->
      </div>
    </section>
  </div>
</section>
```

### Botões

```html
<!-- Primário -->
<button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
  Clique Aqui
</button>

<!-- Secundário -->
<button class="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
  Clique Aqui
</button>

<!-- Com navegação -->
<button data-navigate="outra-pagina" class="px-6 py-3 bg-green-600 text-white rounded-lg">
  Ir para Outra Página
</button>
```

### Cards

```html
<!-- Card Simples -->
<div class="bg-white border border-gray-200 p-6 rounded-xl">
  <h3 class="text-xl font-semibold text-gray-900 mb-2">Título</h3>
  <p class="text-gray-600">Descrição</p>
</div>

<!-- Card Interativo -->
<button data-navigate="destino" class="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all text-left group cursor-pointer">
  <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
    Título
  </h3>
  <p class="text-gray-600">Descrição</p>
  <div class="text-green-600 font-medium text-sm mt-4 group-hover:underline">
    Saiba mais →
  </div>
</button>
```

### Grid Responsivo

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Ícones SVG

```html
<!-- Seta Direita -->
<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
</svg>

<!-- Seta Esquerda -->
<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
</svg>

<!-- Check -->
<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
</svg>

<!-- X (Fechar) -->
<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
```

## 💻 JavaScript Functions

### Navegação

```javascript
// Navegar para página
navigateToSection('finance');

// Verificar página atual
console.log(currentSection);

// Setup event listeners
setupNavigationListeners();
```

### Tradução

```javascript
// Obter tradução
const texto = t('nav.home'); // "Home" ou "Início"

// Mudar idioma
setLanguage('pt'); // pt, en, es, fr

// Obter idioma atual
const lang = getLanguage(); // "pt"

// Atualizar traduções na página
updateTranslations();
```

### Analytics

```javascript
// Rastrear visualização
trackPageView('finance', 'pt');

// Obter estatísticas
const stats = getStats();
console.log(stats.total); // Total de views
console.log(stats.uniqueVisitors); // Visitantes únicos
console.log(stats.pageStats); // Por página
console.log(stats.languageStats); // Por idioma

// Limpar dados
clearAnalytics();

// Mostrar dashboard
showAnalyticsDashboard();

// Fechar dashboard
closeAnalyticsDashboard();
```

### LocalStorage

```javascript
// Salvar dado
localStorage.setItem('chave', 'valor');

// Obter dado
const valor = localStorage.getItem('chave');

// Salvar objeto
localStorage.setItem('config', JSON.stringify({ tema: 'claro' }));

// Obter objeto
const config = JSON.parse(localStorage.getItem('config'));

// Remover
localStorage.removeItem('chave');

// Limpar tudo
localStorage.clear();
```

## 🎯 Data Attributes

### Navegação

```html
<!-- Define uma seção/página -->
<section data-section="minha-pagina">...</section>

<!-- Navega para seção -->
<button data-navigate="minha-pagina">Ir</button>

<!-- Menu navigation -->
<button data-nav="finance">Finance</button>
```

### Tradução

```html
<!-- Traduz automaticamente -->
<span data-i18n="nav.home">Home</span>

<!-- Idioma -->
<button data-lang="pt">Português</button>
```

## 🎨 Color Palette

```css
:root {
  /* Verde (Principal) */
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-500: #22c55e;
  --green-600: #16a34a;  /* Principal */
  --green-700: #15803d;

  /* Cinza */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-900: #111827;

  /* Outros */
  --blue-50: #eff6ff;
  --blue-600: #2563eb;
  --purple-50: #faf5ff;
  --purple-600: #9333ea;
  --orange-50: #fff7ed;
  --orange-600: #ea580c;
  --red-50: #fef2f2;
  --red-600: #dc2626;
}
```

## 📐 Spacing Scale

```css
/* rem values */
0.25rem = 4px   → gap-1, p-1
0.5rem  = 8px   → gap-2, p-2
0.75rem = 12px  → gap-3, p-3
1rem    = 16px  → gap-4, p-4
1.5rem  = 24px  → gap-6, p-6
2rem    = 32px  → gap-8, p-8
3rem    = 48px  → p-12
4rem    = 64px  → py-16
5rem    = 80px  → py-20
```

## 🔤 Typography Scale

```css
/* Font sizes */
0.875rem = 14px → text-sm
1rem     = 16px → text-base
1.125rem = 18px → text-lg
1.25rem  = 20px → text-xl
1.5rem   = 24px → text-2xl
1.875rem = 30px → text-3xl
2.25rem  = 36px → text-4xl
3rem     = 48px → text-5xl
3.75rem  = 60px → text-6xl
```

## 📱 Breakpoints

```css
/* Tailwind breakpoints */
sm: 640px   /* Tablet pequeno */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Desktop grande */

/* Uso */
.md:grid-cols-2  /* 2 colunas a partir de 768px */
.lg:text-4xl     /* Texto maior em desktop */
```

## 🔗 Common Patterns

### Hero Section

```html
<section class="py-16 bg-gradient-to-br from-green-50 to-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Título Principal
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Subtítulo descritivo aqui
      </p>
      <button class="px-8 py-3 bg-green-600 text-white rounded-lg">
        Call to Action
      </button>
    </div>
  </div>
</section>
```

### Content Section

```html
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
      Título da Seção
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Cards aqui -->
    </div>
  </div>
</section>
```

### Back Button

```html
<button data-navigate="voltar" class="text-green-600 hover:underline mb-6 inline-flex items-center gap-2">
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
  </svg>
  Back to Previous Page
</button>
```

### Formula Card

```html
<div class="bg-white border border-gray-200 p-6 rounded-xl">
  <h3 class="text-xl font-semibold text-gray-900 mb-3">Nome da Fórmula</h3>
  <p class="text-gray-600 mb-4">Descrição breve</p>
  
  <!-- Fórmula -->
  <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg mb-4 border-l-4 border-green-600">
    <p class="font-mono text-lg text-center">
      Formula = A + B
    </p>
  </div>
  
  <!-- Explicação -->
  <div class="text-sm text-gray-700">
    <p class="mb-2"><strong>Where:</strong></p>
    <ul class="space-y-1 ml-4">
      <li>• <strong>A</strong> = Variável A</li>
      <li>• <strong>B</strong> = Variável B</li>
    </ul>
  </div>
  
  <!-- Exemplo -->
  <div class="bg-blue-50 p-4 rounded-lg mt-4">
    <p class="text-sm font-semibold text-gray-900 mb-2">📝 Example:</p>
    <p class="text-sm text-gray-700">Exemplo prático aqui...</p>
  </div>
</div>
```

## 🛠️ Utilities

### Center Content

```html
<div class="flex items-center justify-center min-h-screen">
  <!-- Conteúdo centralizado -->
</div>
```

### Responsive Text

```html
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  Título Responsivo
</h1>
```

### Hover Effects

```html
<button class="bg-green-600 hover:bg-green-700 transition-colors">
  Hover Me
</button>
```

### Truncate Text

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 📋 Checklists

### Adicionar Nova Página

```
□ Criar <section data-section="nome">
□ Adicionar style="display: none;"
□ Criar hero section
□ Adicionar conteúdo
□ Adicionar botão de voltar
□ Criar botões de navegação [data-navigate="nome"]
□ Testar navegação
□ Adicionar traduções se necessário
```

### Adicionar Nova Tradução

```
□ Abrir js/translations.js
□ Adicionar chave em translations.en
□ Adicionar chave em translations.pt
□ Adicionar chave em translations.es
□ Adicionar chave em translations.fr
□ No HTML, adicionar data-i18n="chave"
□ Testar em todos os idiomas
```

## 🎯 Quick Commands

```bash
# Servidor Python
python -m http.server 8000

# Servidor Node
npx http-server -p 8000

# Validar HTML
# Vá para https://validator.w3.org/

# Minificar CSS (online)
# Vá para https://cssminifier.com/

# Minificar JavaScript (online)
# Vá para https://javascript-minifier.com/
```

## 🔍 Debug Tips

```javascript
// Ver todas as seções
document.querySelectorAll('[data-section]').forEach(s => 
  console.log(s.getAttribute('data-section'))
);

// Ver idioma atual
console.log(getLanguage());

// Ver analytics
console.log(getStats());

// Ver localStorage
console.log(localStorage);

// Limpar localStorage
localStorage.clear();
```

---

**Referência Completa:** [INDEX.md](INDEX.md)
**Documentação:** [README.md](README.md)
**Suporte:** financeconn@gmail.com
