# Guia de Testes - FinanceCon HTML

Este documento descreve como testar todas as funcionalidades do FinanceCon.

## 🚀 Iniciando o Projeto

### Método 1: Python (Recomendado)
```bash
cd html-version
python -m http.server 8000
# ou python3 -m http.server 8000
```
Acesse: http://localhost:8000

### Método 2: Node.js
```bash
cd html-version
npx http-server -p 8000
```
Acesse: http://localhost:8000

### Método 3: VS Code Live Server
1. Instale extensão "Live Server"
2. Clique direito em `index.html`
3. Selecione "Open with Live Server"

### Método 4: Abrir Diretamente
Simplesmente abra `index.html` no navegador (duplo clique)

---

## ✅ Checklist de Funcionalidades

### 1. Navegação Principal

#### Desktop
- [ ] Logo clicável leva para Home
- [ ] Botões do menu funcionam
- [ ] Menu de idiomas abre ao clicar no ícone de globo
- [ ] Menu de idiomas fecha ao clicar fora
- [ ] Botão ativo tem fundo verde
- [ ] Hover nos botões muda cor

#### Mobile (< 768px)
- [ ] Menu hamburguer aparece
- [ ] Menu abre ao clicar
- [ ] Menu fecha ao clicar novamente
- [ ] Ícone muda de hamburguer para X
- [ ] Menu fecha ao navegar para página
- [ ] Seletor de idioma aparece no menu mobile

**Como testar:**
1. Abra o DevTools (F12)
2. Ative modo responsivo (Ctrl+Shift+M)
3. Teste em 375px, 768px, 1024px

---

### 2. Sistema de Tradução

#### Funcionalidades
- [ ] Idioma padrão é Inglês
- [ ] Trocar para Português funciona
- [ ] Trocar para Espanhol funciona
- [ ] Trocar para Francês funciona
- [ ] Textos atualizam instantaneamente
- [ ] Idioma persiste ao recarregar página
- [ ] Idioma ativo tem destaque verde

**Teste manual:**
```
1. Abra o site
2. Clique no ícone de globo
3. Selecione cada idioma
4. Verifique se textos mudam:
   - Navegação: Home, About, Finance, etc.
   - Hero: "Welcome to" / "Bem-vindo ao" / etc.
   - Footer: textos de rodapé
5. Recarregue página (F5)
6. Verifique se idioma permanece
```

**Teste console:**
```javascript
// Abra console (F12) e teste:
console.log(getLanguage()); // Deve mostrar idioma atual
setLanguage('pt');          // Muda para português
setLanguage('en');          // Muda para inglês
```

---

### 3. Sistema de Analytics

#### Funcionalidades
- [ ] Ctrl+Shift+A abre dashboard
- [ ] Ctrl+Shift+A fecha dashboard
- [ ] Dashboard mostra total de views
- [ ] Dashboard mostra visitantes únicos
- [ ] Dashboard mostra stats de 7 dias
- [ ] Dashboard mostra stats de 30 dias
- [ ] Dashboard mostra páginas mais visitadas
- [ ] Dashboard mostra distribuição de idiomas
- [ ] Clicar fora do modal fecha
- [ ] Botão X fecha o modal
- [ ] Limpar dados funciona (com confirmação)

**Teste manual:**
```
1. Navegue por várias páginas
2. Mude de idioma algumas vezes
3. Pressione Ctrl+Shift+A
4. Verifique:
   - Total Views aumentou
   - Visitante único = 1
   - Páginas listadas corretamente
   - Idiomas mostrados com percentual
5. Clique em "Clear All Data"
6. Confirme
7. Reabra dashboard (Ctrl+Shift+A)
8. Verifique que dados foram zerados
```

**Teste console:**
```javascript
// Teste programático
trackPageView('test', 'en');
console.log(getStats());
clearAnalytics();
```

**Teste localStorage:**
```javascript
// Veja dados armazenados
console.log(localStorage.getItem('financecon_analytics'));
console.log(localStorage.getItem('financecon_visitor_id'));
console.log(localStorage.getItem('financecon_language'));
```

---

### 4. Navegação entre Páginas

#### Páginas Principais
- [ ] Home → exibe hero + features + CTA
- [ ] About → exibe missão e valores
- [ ] Finance → exibe tópicos de finanças
- [ ] Economics → exibe tópicos de economia
- [ ] Related Topics → exibe accounting, business, etc.
- [ ] Resources → exibe categorias de recursos

#### Sub-páginas
- [ ] Finance → Personal Finance funciona
- [ ] Finance → Investments funciona
- [ ] Finance → Financial Analysis funciona
- [ ] Economics → Microeconomics funciona
- [ ] Topics → Accounting Formulas funciona
- [ ] Resources → Finance Resources funciona

#### Comportamento
- [ ] Página muda instantaneamente
- [ ] Scroll vai para o topo
- [ ] URL não recarrega
- [ ] Botão "voltar" funciona
- [ ] Histórico do navegador funciona
- [ ] Analytics registra visita

**Teste manual:**
```
1. Navegue: Home → Finance → Personal Finance
2. Verifique se scroll voltou ao topo
3. Clique em "Back to Finance"
4. Verifique se voltou para Finance
5. Use botão voltar do navegador
6. Verifique se navegação funciona
```

---

### 5. Design Responsivo

#### Breakpoints para testar
- 375px (iPhone SE)
- 390px (iPhone 12/13/14)
- 768px (iPad)
- 1024px (Desktop pequeno)
- 1920px (Desktop grande)

#### Elementos para verificar

**Mobile (< 768px)**
- [ ] Menu hamburguer aparece
- [ ] Cards ficam em coluna única
- [ ] Texto fica legível
- [ ] Botões são clicáveis
- [ ] Footer se ajusta

**Tablet (768px - 1024px)**
- [ ] Menu desktop aparece
- [ ] Grid mostra 2 colunas
- [ ] Espaçamento adequado

**Desktop (> 1024px)**
- [ ] Grid mostra 3 colunas
- [ ] Layout centralizado
- [ ] Max-width respeitado

**Teste orientação:**
- [ ] Portrait funciona
- [ ] Landscape funciona

---

### 6. Performance

#### Tempo de Carregamento
- [ ] Página carrega em < 1 segundo
- [ ] Navegação é instantânea
- [ ] Sem flash de conteúdo
- [ ] Animações são suaves

**Teste com DevTools:**
```
1. Abra DevTools (F12)
2. Vá para aba Network
3. Recarregue página (Ctrl+R)
4. Verifique:
   - Total: < 100KB
   - Tempo: < 1s
   - Requests: < 10
```

#### Lighthouse Audit
```
1. Abra DevTools (F12)
2. Vá para aba Lighthouse
3. Selecione:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Clique "Generate report"
5. Score alvo: > 90 em todas
```

---

### 7. Compatibilidade de Navegadores

#### Testar em:
- [ ] Chrome (última versão)
- [ ] Firefox (última versão)
- [ ] Safari (última versão)
- [ ] Edge (última versão)
- [ ] Chrome Mobile
- [ ] Safari Mobile

#### Funcionalidades críticas:
- [ ] localStorage funciona
- [ ] CSS Grid funciona
- [ ] Flexbox funciona
- [ ] Transitions funcionam
- [ ] JavaScript funciona

---

### 8. Acessibilidade

#### Navegação por Teclado
- [ ] Tab navega entre elementos
- [ ] Enter ativa botões/links
- [ ] Esc fecha modais
- [ ] Foco visível nos elementos
- [ ] Ordem de tabulação lógica

**Teste:**
```
1. Não use mouse
2. Use apenas Tab/Enter/Esc
3. Navegue pelo site completo
4. Verifique se consegue acessar tudo
```

#### Screen Reader
- [ ] Textos alternativos presentes
- [ ] Hierarquia de headings correta
- [ ] Links descritivos
- [ ] Botões com labels

---

### 9. Formulários e Calculadoras

#### Validação
- [ ] Campos obrigatórios funcionam
- [ ] Validação de números funciona
- [ ] Mensagens de erro aparecem
- [ ] Resultado é calculado corretamente

**Teste calculadora de juros compostos:**
```
1. Navegue para Calculators (quando implementado)
2. Digite valores inválidos (letras)
3. Verifique validação
4. Digite valores válidos:
   - Principal: 10000
   - Taxa: 5
   - Tempo: 10
5. Clique Calculate
6. Verifique resultado ≈ 16288.95
```

---

### 10. LocalStorage

#### Dados Salvos
- [ ] Idioma preferido
- [ ] Analytics data
- [ ] Visitor ID

**Teste limpar dados:**
```javascript
// Console
localStorage.clear();
location.reload();
// Verifique se idioma voltou para inglês
```

**Teste quota:**
```javascript
// Verifique espaço usado
let used = 0;
for(let key in localStorage) {
  if(localStorage.hasOwnProperty(key)) {
    used += localStorage[key].length + key.length;
  }
}
console.log(`${(used / 1024).toFixed(2)} KB used`);
```

---

### 11. Testes de Stress

#### Navegação Rápida
```
1. Clique rapidamente em vários links
2. Verifique se não trava
3. Verifique se analytics não duplica
```

#### Dados Grandes
```javascript
// Adicione muitos page views
for(let i = 0; i < 1000; i++) {
  trackPageView('test-' + i, 'en');
}
// Abra analytics (Ctrl+Shift+A)
// Verifique se carrega sem travar
```

---

### 12. Testes de Erro

#### JavaScript desabilitado
- [ ] Mensagem aparece
- [ ] Site explica necessidade de JS

#### LocalStorage desabilitado
- [ ] Site funciona parcialmente
- [ ] Analytics não quebra
- [ ] Tradução ainda funciona

#### Conexão lenta
- [ ] Conteúdo carrega progressivamente
- [ ] Não há erros visíveis

---

## 🐛 Reporte de Bugs

### Template de Bug Report
```markdown
**Descrição:**
[Descreva o problema]

**Passos para reproduzir:**
1. 
2. 
3. 

**Resultado esperado:**
[O que deveria acontecer]

**Resultado atual:**
[O que está acontecendo]

**Ambiente:**
- Navegador: [Chrome 120 / Firefox 121 / etc]
- Sistema: [Windows 11 / macOS / Android]
- Resolução: [1920x1080]

**Console Errors:**
```
[Cole erros do console aqui]
```

**Screenshots:**
[Adicione screenshots se relevante]
```

---

## ✅ Checklist Final de Deploy

Antes de fazer deploy em produção:

### Funcionalidades
- [ ] Todas as páginas funcionam
- [ ] Navegação funciona perfeitamente
- [ ] Traduções completas
- [ ] Analytics funciona
- [ ] Mobile responsivo
- [ ] Sem erros no console

### Performance
- [ ] Lighthouse score > 90
- [ ] Carregamento < 2s
- [ ] Imagens otimizadas

### Conteúdo
- [ ] Textos revisados
- [ ] Links funcionam
- [ ] Email correto
- [ ] Copyright atualizado

### Técnico
- [ ] HTML validado (validator.w3.org)
- [ ] CSS validado
- [ ] JavaScript sem erros
- [ ] Meta tags configuradas
- [ ] Favicon adicionado

### SEO
- [ ] Title tags únicos
- [ ] Meta descriptions
- [ ] Heading hierarchy correta
- [ ] Alt text em imagens

---

## 📊 Métricas de Sucesso

### Performance Goals
- Load Time: < 2s
- First Contentful Paint: < 1s
- Time to Interactive: < 3s

### User Experience Goals
- Zero erros JavaScript
- 100% funcionalidades operacionais
- Navegação intuitiva
- Design consistente

### Accessibility Goals
- WCAG 2.1 Level AA
- Keyboard navigation completa
- Screen reader friendly

---

## 🎓 Testes Automáticos (Futuro)

### Ferramentas Sugeridas
- Selenium (testes E2E)
- Jest (testes unitários)
- Cypress (testes de integração)
- Pa11y (testes de acessibilidade)

---

## 📞 Suporte

Se encontrar problemas durante os testes:

1. Verifique console do navegador (F12)
2. Tente em modo anônimo
3. Limpe cache (Ctrl+Shift+Delete)
4. Teste em outro navegador
5. Verifique documentação

**Contato:**
- Email: financeconn@gmail.com
- Website: www.financecon.com

---

**Última atualização:** 2026
**Versão:** 1.0.0
