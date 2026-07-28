import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const whatsappUrl = 'https://tintim.link/whatsapp/8ecd6b81-7447-41c1-ab41-56c76e44cfd5/c281f571-2564-42f2-bb8f-8745e005da88'

const photo = (id, width = 1600) => `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`
const assets = { logo: photo('1IGiWTk6b0KHX7JiceQqIOaD1jLzm_9Qf', 600) }

const heroPhoto = photo('1-FUg7jPxAaGLhc0wbrRinwXi3vEYemWO', 1800)
const portraitPhoto = photo('1Vkb_cX-sexJ9E13_H-7ETBRb5HawpoyQ', 1400)

function WhatsAppLink({ className = '', children, place }) {
  return <a className={className} href={whatsappUrl} target="_blank" rel="noreferrer" data-cta={place}>{children}</a>
}

const questions = [
  ['Quais condições podem ser avaliadas?', 'Dores e limitações relacionadas a articulações, coluna, joelho, ombro, cotovelo e outras condições ortopédicas podem ser avaliadas de forma individualizada.'],
  ['Quando uma infiltração pode ser indicada?', 'A indicação depende do diagnóstico, do histórico clínico e do exame físico. Na consulta, o Dr. Matheus avalia se esse é o caminho adequado para o seu caso.'],
  ['Vocês atendem por convênio?', 'A disponibilidade de convênios pode variar. A equipe confirma as possibilidades de atendimento no momento do agendamento.'],
  ['Onde é realizado o atendimento?', 'O atendimento é realizado na Clínica Salus Ortopedia e Fisioterapia, na Asa Norte, em Brasília.']
]

function App() {
  const [openQuestion, setOpenQuestion] = useState(null)

  return <>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        <img src={assets.logo} alt="Dr. Matheus Cavalcanti" />
      </a>
      <nav aria-label="Navegação principal">
        <a href="#tratamentos">Tratamentos</a>
        <a href="#sobre">O especialista</a>
        <a href="#atendimento">Atendimento</a>
      </nav>
      <WhatsAppLink className="header-cta" place="header">Agendar avaliação <span>↗</span></WhatsAppLink>
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="hero-grid">
          <div className="hero-content reveal">
            <p className="eyebrow"><span></span> ORTOPEDIA E MEDICINA DA DOR · BRASÍLIA</p>
            <h1>Sua dor não precisa <em>definir</em> o ritmo da sua vida.</h1>
            <p className="hero-summary">Cuidado ortopédico com escuta, precisão diagnóstica e opções de tratamento avaliadas para o seu momento.</p>
            <WhatsAppLink className="button button-light" place="hero">Conversar com a equipe <b>→</b></WhatsAppLink>
            <p className="credential">CRM-DF 29142 &nbsp;·&nbsp; RQE Ortopedia e Traumatologia 26084</p>
          </div>
          <div className="hero-portrait">
            <img src={heroPhoto} alt="Dr. Matheus Cavalcanti em retrato profissional" />
            <div className="portrait-caption"><span>ATENDIMENTO</span><strong>Asa Norte<br />Brasília · DF</strong></div>
            <div className="portrait-orbit" aria-hidden="true">MOVIMENTO · AUTONOMIA · BEM-ESTAR ·</div>
          </div>
        </div>
        <div className="hero-footnote">ROLE PARA ENTENDER SEU CAMINHO <span>↓</span></div>
      </section>

      <section className="intro section-pad">
        <div className="section-kicker">01 / QUANDO A DOR MUDA SUA ROTINA</div>
        <div className="intro-layout">
          <h2>O corpo costuma avisar antes de <em>parar.</em></h2>
          <div className="intro-copy">
            <p>Quando a dor limita o trabalho, o sono ou os momentos que você gosta de viver, uma avaliação ortopédica pode ajudar a entender o que está acontecendo.</p>
            <p>O objetivo é sair do improviso e decidir com segurança os próximos passos do seu cuidado.</p>
          </div>
        </div>
        <div className="signals" aria-label="Sinais de que uma avaliação pode ser importante">
          <div><span>01</span><strong>Dor que<br />persiste</strong></div>
          <div><span>02</span><strong>Rigidez ao<br />movimentar</strong></div>
          <div><span>03</span><strong>Limitação nas<br />atividades</strong></div>
          <div><span>04</span><strong>Desconforto que<br />volta sempre</strong></div>
        </div>
      </section>

      <section id="tratamentos" className="treatments">
        <div className="treatments-head section-pad">
          <div className="section-kicker">02 / POSSIBILIDADES DE CUIDADO</div>
          <h2>Tratamento não é uma fórmula. É uma escolha clínica feita <em>com você.</em></h2>
        </div>
        <div className="treatment-list">
          <article><span>01</span><div><h3>Viscossuplementação</h3><p>Infiltração com ácido hialurônico para casos avaliados de dor e desgaste articular.</p></div><i>→</i></article>
          <article><span>02</span><div><h3>Infiltrações guiadas</h3><p>Procedimentos guiados por imagem, quando indicados, buscando mais precisão na abordagem.</p></div><i>→</i></article>
          <article><span>03</span><div><h3>Manejo da dor</h3><p>Estratégias construídas a partir do diagnóstico, da sua história e do impacto da dor no dia a dia.</p></div><i>→</i></article>
          <article><span>04</span><div><h3>Medicina regenerativa</h3><p>Opções ortobiológicas avaliadas de acordo com indicação médica e contexto clínico.</p></div><i>→</i></article>
        </div>
      </section>

      <section className="method section-pad">
        <div className="method-photo"><img src={portraitPhoto} alt="Dr. Matheus Cavalcanti durante ensaio profissional" /></div>
        <div className="method-content">
          <div className="section-kicker">03 / UM PROCESSO SEM PRESSA</div>
          <h2>Decisões melhores começam com a <em>pergunta certa.</em></h2>
          <ol>
            <li><span>1</span><div><h3>Escuta e avaliação</h3><p>Entender a sua queixa, sua rotina e os sinais que o corpo vem dando.</p></div></li>
            <li><span>2</span><div><h3>Diagnóstico com contexto</h3><p>Integrar exame clínico e, quando necessário, exames complementares.</p></div></li>
            <li><span>3</span><div><h3>Plano individualizado</h3><p>Conversar sobre alternativas, indicações e o que faz sentido para o seu caso.</p></div></li>
          </ol>
        </div>
      </section>

      <section id="sobre" className="authority">
        <div className="authority-grid section-pad">
          <div className="authority-mark">MC<br /><span>MEDICINA<br />EM MOVIMENTO</span></div>
          <div className="authority-copy">
            <div className="section-kicker">04 / SEU ESPECIALISTA</div>
            <h2>Dr. Matheus<br /><em>Cavalcanti</em></h2>
            <p>Ortopedia e traumatologia com uma abordagem orientada por rigor clínico, tecnologia e clareza em cada decisão.</p>
            <p className="authority-credential">CRM-DF 29142<br />RQE Ortopedia e Traumatologia 26084</p>
          </div>
          <div className="authority-note">“A consulta é o espaço para compreender a dor e discutir o cuidado com tranquilidade.”</div>
        </div>
      </section>

      <section className="convenios section-pad">
        <div><div className="section-kicker">05 / ATENDIMENTO</div><h2>Seu cuidado merece uma conversa <em>bem informada.</em></h2></div>
        <div className="convenios-answer"><p>Quer confirmar possibilidades de atendimento, convênio ou preparar sua consulta? Nossa equipe pode orientar você antes do agendamento.</p><WhatsAppLink className="text-link" place="convenios">Falar com a equipe <span>→</span></WhatsAppLink></div>
      </section>

      <section className="faq section-pad">
        <div className="faq-heading"><div className="section-kicker">06 / DÚVIDAS FREQUENTES</div><h2>Mais clareza.<br /><em>Menos incerteza.</em></h2></div>
        <div className="questions">
          {questions.map(([question, answer], index) => <article key={question} className={openQuestion === index ? 'is-open' : ''}>
            <button onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}>
              <span>{question}</span><b>{openQuestion === index ? '−' : '+'}</b>
            </button>
            <div className="answer"><p>{answer}</p></div>
          </article>)}
        </div>
      </section>

      <section id="atendimento" className="closing">
        <div className="closing-wash"></div>
        <div className="closing-content"><p className="eyebrow"><span></span> ORTOPEDIA · BRASÍLIA</p><h2>Vamos conversar<br />sobre o seu <em>movimento.</em></h2><p>Agende sua avaliação e receba as orientações iniciais da equipe.</p><WhatsAppLink className="button button-gold" place="final">Quero agendar uma avaliação <b>→</b></WhatsAppLink></div>
        <div className="address"><span>ATENDIMENTO EM</span><p>Clínica Salus Ortopedia e Fisioterapia<br />STM Conjunto M, entrada B · Centro Clínico Vital Brazil<br />Salas 342, 344 e 346 · Asa Norte · Brasília, DF</p></div>
      </section>
    </main>

    <footer><a className="brand footer-brand" href="#inicio"><img src={assets.logo} alt="Dr. Matheus Cavalcanti" /></a><p>© {new Date().getFullYear()} Dr. Matheus Cavalcanti. Todos os direitos reservados.</p><a href="#inicio">Voltar ao início ↑</a></footer>
    <WhatsAppLink className="mobile-cta" place="mobile">Agendar avaliação <span>→</span></WhatsAppLink>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
