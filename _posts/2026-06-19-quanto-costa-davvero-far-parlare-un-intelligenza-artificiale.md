---
layout: post
title: "Quanto costa davvero far parlare un'intelligenza artificiale"
subtitle: "Dietro ogni risposta di ChatGPT, Claude o Gemini c'è una bolletta. Vediamo quanto pesa."
tags: [ia, costi, tecnologia]
---

## Tutti parlano di IA, nessuno parla del conto

Tutti hanno un'opinione sull'intelligenza artificiale. Pochissimi sanno che ogni parola che un modello legge e ogni parola che scrive ha un prezzo, calcolato al "token" — più o meno un pezzetto di parola.

E i prezzi, tra un modello e l'altro, non sono lontanamente paragonabili.

<div class="stat-row">
  <div class="stat-card accent-red">
    <div class="stat-number">100x</div>
    <div class="stat-label">Differenza di prezzo tra il modello più economico e quello più caro</div>
  </div>
  <div class="stat-card accent-amber">
    <div class="stat-number">2-4x</div>
    <div class="stat-label">Quanto costa in più "scrivere" (output) rispetto a "leggere" (input)</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">~750</div>
    <div class="stat-label">Parole contenute in 1.000 token, come unità di misura</div>
  </div>
</div>

Numeri che, se gestisci un servizio che usa l'IA ogni giorno — un chatbot, un plugin, uno strumento interno — fanno la differenza tra un progetto sostenibile e uno che ti prosciuga il budget in un mese.

---

## Come funziona il prezzo, in due righe

Ogni richiesta a un modello di IA si divide in due parti, pagate separatamente:

- **input**: tutto quello che mandi al modello (la domanda, il contesto, i documenti allegati)
- **output**: tutto quello che il modello ti restituisce come risposta

L'output costa quasi sempre di più, perché generare testo è computazionalmente più pesante che leggerlo. Il prezzo si misura in dollari per milione di token, sia in entrata che in uscita.

Sembra un dettaglio tecnico. Non lo è: è la voce che decide se il tuo prodotto è in attivo o in passivo.

---

## Il confronto tra i principali modelli

Ho messo insieme i listini dei produttori più usati. I prezzi sono per milione di token (input / output):

| Modello | Input | Output | Per cosa va bene |
|---|---|---|---|
| Claude Opus | $5,00 | $25,00 | Ragionamento complesso, analisi lunghe |
| Claude Sonnet | $3,00 | $15,00 | Buon compromesso qualità/velocità |
| Claude Haiku | $1,00 | $5,00 | Compiti veloci e a basso costo |
| GPT-4.1 | $2,00 | $8,00 | Ragionamento avanzato, uso di strumenti |
| GPT-5 (Preview) | $1,25 | $10,00 | Le capacità più recenti |
| GPT-3.5 Turbo | $0,50 | $1,50 | Inferenza economica e rapida |
| Gemini Pro | $1,25 | $10,00 | Contesto enorme (fino a 1M di token) |
| Gemini Flash | $0,30 | $2,50 | Velocità e basso costo |
| Mistral Large | $2,00 | $6,00 | Qualità a prezzo contenuto |
| Mistral Medium | $0,27 | $0,81 | Buon equilibrio qualità/prezzo |
| Command R+ | $2,50 | $10,00 | Uso in produzione, RAG |
| Command Light | $0,03 | $0,10 | Elaborazione massiva, quasi gratis |
| DeepSeek-V3 | $0,28 | $0,42 | Ragionamento avanzato a costo bassissimo |

<div class="callout warning">
  <strong>Attenzione</strong>
  Questi numeri cambiano in continuazione — nuovi modelli arrivano, i listini si aggiornano, qualcuno taglia i prezzi per guadagnare quota di mercato. Prima di basarci un budget, vai sempre a controllare il listino ufficiale del fornitore.
</div>

---

## Un esempio concreto: il chatbot di assistenza

Mettiamo il caso di un servizio clienti automatizzato con 10.000 conversazioni al giorno, in media 200 token di domanda e 100 token di risposta. Su un mese di lavoro (ci