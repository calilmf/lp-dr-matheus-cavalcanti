# Mapa Visual — Dr. Matheus Cavalcanti

## Referências ativas

- `ref.pulso.dr-gustavo.anatomia-conversao`: arquitetura recorrente, tracking e CTAs persistentes da LP do Dr. Gustavo Pimpão.
- `ref.pulso.dra-lara.narrativa-medica`: sequência problema → tratamentos → processo → médica → locais → FAQ.
- `ref.pulso.dr-thiago.convenios`: convênios como objeção de alta intenção e CTA de confirmação.
- `ref.web.hss.condition-first`: entrada pelo problema/região do corpo, sem copiar interface ou copy.
- `ref.brand.dr-matheus.drive`: paleta, logos e fotografias oficiais fornecidas.

| Seção | Função | Referências visuais | Padrão aplicado | Decisão de interface | Risco a evitar |
| --- | --- | --- | --- | --- | --- |
| Header | Navegação e ação persistente | `ref.pulso.dr-gustavo.anatomia-conversao` | `pattern.header.sticky-cta` | Fundo claro, logo oficial e CTA contornado | Header alto, menu excessivo ou logo ilegível |
| Hero | Confirmar busca e gerar ação | `ref.brand.dr-matheus.drive` + `ref.web.hss.condition-first` | `pattern.hero.search-intent-photo` | Layout em duas colunas, retrato real sobre fundo grafite e joelho 3D parcialmente ocluído para criar profundidade | Cortar o cabelo, usar fundo branco chapado, competir com o rosto ou transformar anatomia em espetáculo |
| Prova rápida | Reduzir insegurança | `ref.pulso.dra-lara.narrativa-medica` | `pattern.proof.four-items` | Quatro itens retos com ícones funcionais e dados verificáveis | Estatísticas inventadas ou cards decorativos |
| Problema | Criar reconhecimento | `ref.web.hss.condition-first` | `pattern.problem.body-regions` | Grade de regiões com linhas editoriais | Lista extensa de diagnósticos sem contexto |
| Processo | Explicar mecanismo | `ref.pulso.dra-lara.narrativa-medica` | `pattern.process.four-steps` | Faixa verde escura, quatro etapas numeradas | Sugerir que o processo garante resultado |
| Tratamentos | Apresentar possibilidades | `ref.pulso.dr-thiago.convenios` | `pattern.services.indexed-list` | Lista de recursos, indicação e limites | Vender procedimento antes da avaliação |
| Médico | Construir autoridade | `ref.brand.dr-matheus.drive` | `pattern.authority.documentary-split` | Foto real, formação e registros | Currículo inflado ou superlativos |
| Convênios | Remover objeção comercial | `ref.pulso.dr-thiago.convenios` | `pattern.insurance.confirmation-list` | Lista concisa com ressalva e CTA | Afirmar cobertura automática ou destacar plano não desejado |
| Local/FAQ | Resolver logística | `ref.pulso.dra-lara.narrativa-medica` | `pattern.support.address-faq` | Endereço, rota, telefone e acordeão nativo | Esconder informações práticas |
| CTA final | Fechar a narrativa | `ref.pulso.dr-gustavo.anatomia-conversao` | `pattern.cta.high-contrast` | Faixa verde, WhatsApp e telefone | Vários destinos concorrentes |

## Direção geral

- **Tom:** clínico claro, humano e preciso.
- **Densidade:** média, com respiro e informação prática.
- **Imagem:** `photo-7540.jpg` no hero, com cabeça preservada e fundo grafite; `photo-7547.jpg` na seção do médico.
- **Elemento anatômico:** `hero-knee-3d.webp`, render original de joelho em marfim/areia, alpha transparente, decorativo e sem texto.
- **Iconografia:** ícones lineares apenas na prova rápida e logística.
- **Movimento:** flutuação/rotação lenta apenas no joelho 3D; animação desativada por `prefers-reduced-motion`.
- **Regra do CTA:** preservar verbo, destino, prioridade e tracking definidos na estratégia.
