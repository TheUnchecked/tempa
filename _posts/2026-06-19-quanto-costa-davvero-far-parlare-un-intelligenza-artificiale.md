---
layout: post
title: "Quanto costa davvero far parlare un'intelligenza artificiale"
subtitle: "Dietro ogni risposta di ChatGPT, Claude o Gemini c'è una bolletta. Vediamo quanto pesa."
tags: [AI, IA, Costi, tecnologia]
---


## Tutti parlano di AI, nessuno parla del conto
Tutti hanno un'opinione sull'intelligenza artificiale. Pochissimi sanno che ogni parola che un modello legge e ogni parola che scrive ha un prezzo, calcolato al "token"   più o meno un pezzetto di parola.
E i prezzi, tra un modello e l'altro, non sono lontanamente paragonabili.
<div class="stat-row"> <div class="stat-card accent-red"> <div class="stat-number">100x</div> <div class="stat-label">Differenza di prezzo tra il modello più economico e quello più caro</div> </div> <div class="stat-card accent-amber"> <div class="stat-number">2-4x</div> <div class="stat-label">Quanto costa in più "scrivere" (output) rispetto a "leggere" (input)</div> </div> <div class="stat-card"> <div class="stat-number">~750</div> <div class="stat-label">Parole contenute in 1.000 token, come unità di misura</div> </div> </div>
Numeri che, se gestisci un servizio che usa l'AI ogni giorno   un chatbot, un plugin, un tool interno   fanno la differenza tra un progetto sostenibile e uno che ti prosciuga il budget in un mese.
---
## Come funziona il prezzo, in due righe
Ogni richiesta a un modello AI si divide in due parti, pagate separatamente:
- **input**: tutto quello che mandi al modello (la domanda, il contesto, i documenti allegati)- **output**: tutto quello che il modello ti restituisce come risposta
L'output costa quasi sempre di più, perché generare testo è computazionalmente più pesante che leggerlo. Il prezzo si misura in dollari per milione di token, sia in entrata che in uscita.
Sembra un dettaglio tecnico. Non lo è: è la voce che decide se il tuo prodotto è in attivo o in passivo.
---
## Il confronto tra i principali modelli
Ho messo insieme i listini dei produttori più usati. I prezzi sono per milione di token (input / output):
| Modello | Input | Output | Per cosa va bene ||---|---|---|---|| Claude Opus | $5,00 | $25,00 | Ragionamento complesso, analisi lunghe || Claude Sonnet | $3,00 | $15,00 | Buon compromesso qualità/velocità || Claude Haiku | $1,00 | $5,00 | Compiti veloci e a basso costo || GPT-4.1 | $2,00 | $8,00 | Ragionamento avanzato, uso di strumenti || GPT-5 (Preview) | $1,25 | $10,00 | Le capacità più recenti || GPT-3.5 Turbo | $0,50 | $1,50 | Inferenza economica e rapida || Gemini Pro | $1,25 | $10,00 | Contesto enorme (fino a 1M di token) || Gemini Flash | $0,30 | $2,50 | Velocità e basso costo || Mistral Large | $2,00 | $6,00 | Qualità a prezzo contenuto || Mistral Medium | $0,27 | $0,81 | Buon equilibrio qualità/prezzo || Command R+ | $2,50 | $10,00 | Uso in produzione, RAG || Command Light | $0,03 | $0,10 | Elaborazione massiva, quasi gratis || DeepSeek-V3 | $0,28 | $0,42 | Ragionamento avanzato a costo bassissimo |
<div class="callout warning"> <strong>Attenzione</strong> Questi numeri cambiano in continuazione   nuovi modelli arrivano, i listini si aggiornano, qualcuno taglia i prezzi per guadagnare quota di mercato. Prima di basarci un budget, vai sempre a controllare il listino ufficiale del provider. </div>
---
## Un esempio concreto: il chatbot di assistenza
Mettiamo il caso di un servizio clienti automatizzato con 10.000 conversazioni al giorno, in media 200 token di domanda e 100 token di risposta. Su un mese di lavoro (circa 22 giorni), il conto cambia radicalmente a seconda del modello scelto:
<div class="timeline"> <div class="timeline-item danger"> <div class="timeline-date">Top di gamma</div> <div class="timeline-title">Modello premium (es. Claude Opus)</div> <div class="timeline-body">Circa 770 $ al mese. Qualità altissima, ma per un compito semplice come rispondere a domande standard è decisamente sovradimensionato.</div> </div> <div class="timeline-item warning"> <div class="timeline-date">Compromesso</div> <div class="timeline-title">Modello bilanciato (es. Mistral Medium)</div> <div class="timeline-body">Circa 30 $ al mese. Qualità più che sufficiente per la maggior parte delle richieste di assistenza.</div> </div> <div class="timeline-item active"> <div class="timeline-date">Budget</div> <div class="timeline-title">Modello economico (es. GPT-4o-mini o simili)</div> <div class="timeline-body">Meno di 20 $ al mese. Per un chatbot che risponde a domande frequenti, spesso è più che sufficiente.</div> </div> </div>
Stessa funzione, stesso volume di traffico, costo che varia di **40 volte**. La domanda giusta non è "qual è il modello migliore", ma "qual è il modello giusto per quello che devo fare".
---
## Come abbassare il conto senza abbassare la qualità
Non serve per forza cambiare modello per risparmiare. Ci sono leve che si possono attivare prima, a parità di AI usata:
**Prompt più snelli**   un prompt di sistema scritto in modo prolisso può facilmente dimezzarsi senza perdere efficacia. Meno token in entrata, meno spesa, ogni singola volta.
**Limitare la lunghezza della risposta**   se non ti serve un papiro, dillo al modello. Tagliare l'output massimo da 500 a 200 token può tagliare il costo di output del 60%.
**Caching del contesto**   se mandi spesso lo stesso documento o lo stesso contesto, molte piattaforme permettono di "metterlo in cache" invece di pagarlo ogni volta da zero.
**Instradamento intelligente (model routing)**   non tutte le richieste sono uguali. Le domande semplici possono andare a un modello economico, quelle complesse a uno più potente. Un sistema che smista così il traffico può tagliare i costi anche del 60%, mantenendo la qualità dove serve davvero.
**Elaborazione in batch**   se le risposte non servono in tempo reale, molte API offrono sconti importanti (anche il 50%) per chi accetta di aspettare qualche ora in cambio di un prezzo più basso.
<div class="callout success"> <strong>La regola pratica</strong> Usa i modelli di punta solo dove la qualità della risposta incide davvero sul risultato (codice, analisi, decisioni). Per tutto il resto   classificazione, risposte standard, elaborazione di massa   un modello economico fa lo stesso lavoro a una frazione del prezzo. </div>
---
## La domanda che rimane
<div class="pull-quote"> <p>"Non è l'intelligenza artificiale a costare cara. È usarla senza pensarci."</p> </div>
Prima di scegliere un modello per il tuo progetto, fatti due conti veri: quanti token consuma in media una richiesta, quante richieste al giorno, e quanto sei disposto a pagare per la qualità in più che ti dà un modello premium. Spesso la risposta sorprende.
---
## Fonti
Questo articolo prende spunto dal confronto prezzi pubblicato da **DeployBase**, [LLM Token Cost Comparison](https://deploybase.ai/articles/llm-token-cost-comparison). Per i numeri aggiornati al momento in cui leggi, conviene comunque controllare i listini ufficiali di Anthropic, OpenAI, Google, Mistral, Cohere e DeepSeek, perché in questo settore i prezzi cambiano alla velocità della luce.

