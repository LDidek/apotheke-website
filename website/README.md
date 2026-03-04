# Apotheke Manipulação - Website Local

Este é uma cópia local do site da Apotheke Manipulação, extraída de https://manipule.apothekemanipulacao.com.br/

## 📁 Estrutura de Arquivos

```
website/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos compilados do site
├── js/
│   ├── index.js       # Script principal (slider e animações)
│   └── main.js        # Função FAQ toggle
└── assets/            # Imagens, ícones e recursos
    ├── *.png          # Imagens (fotos dos farmacêuticos, backgrounds)
    ├── *.svg          # Ícones e logos vetoriais
    ├── *.jpg          # Fotos da galeria
    ├── *.gif          # Animações
    └── favicon.ico    # Ícone do site
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` diretamente no navegador
2. Ou use um servidor local simples:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (npx)
   npx serve
   ```
3. Acesse em http://localhost:8000

## ✅ O que foi copiado

- ✅ HTML completo da página
- ✅ CSS compilado (Tailwind)
- ✅ Todas as imagens e ícones locais
- ✅ Scripts JavaScript (FAQ toggle, slider de galeria)
- ✅ Estrutura responsiva mantida
- ✅ Favicon

## ⚠️ O que NÃO foi copiado

- ❌ Vídeo de fundo (ainda aponta para URL externa do WordPress)
- ❌ Scripts de tracking (Facebook Pixel, Google Analytics, Google Tag Manager)
- ❌ Script de proteção de email do Cloudflare (substituído por email direto)

## 📝 Notas Importantes

1. **Vídeo de fundo**: O vídeo ainda está sendo carregado de:
   ```
   https://apothekemanipulacao.com.br/wp-content/uploads/2020/06/Capa-Site-Apotheke-2.mp4
   ```
   Se quiser hospedar localmente, baixe o vídeo e atualize o caminho no HTML.

2. **Email de contato**: Foi substituído por `contato@apothekemanipulacao.com.br`.
   Verifique se este é o email correto e atualize se necessário.

3. **Telefone WhatsApp**: +55 47 99216-4286 (mantido no HTML)

4. **Scripts de tracking**: Foram mantidos no HTML mas podem ser removidos se não forem necessários.

## 🔧 Personalizações Possíveis

- Atualizar informações de contato
- Modificar textos e conteúdo
- Adicionar/remover seções
- Alterar cores no CSS
- Baixar e hospedar o vídeo localmente

## 📞 Informações de Contato no Site

- **WhatsApp**: (47) 9 9216-4286
- **Email**: contato@apothekemanipulacao.com.br
- **Horários**:
  - Seg-Sex: 9h-12h, 13:30-19h
  - Sáb: 8:30-12:30

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript vanilla
- Design responsivo
