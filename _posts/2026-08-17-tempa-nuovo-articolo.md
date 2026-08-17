---
layout: post
title: "Tempa — Nuovo articolo"
subtitle: ""
tags: []
---


## TEMPA — STRUTTURA ARTICOLO


**IMPORTANTE:** questo template segue il formato reale che il publisher deve trasformare in Markdown/Jekyll. I blocchi grafici sono scritti come HTML letterale perché devono arrivare al post come HTML, non come semplici descrizioni.


---


## APERTURA


Scrivi qui il primo H2 dell'articolo.


Scrivi qui il testo introduttivo, normalmente 2–4 paragrafi.


Porta il lettore dentro il problema con un fatto, una domanda, una situazione reale o una provocazione.


---


## STAT ROW — SE SERVE


Incolla qui il blocco HTML reale:


<div class="stat-row">


    <div class="stat-card accent-red">


        <div class="stat-number">NUMERO</div>


        <div class="stat-label">DESCRIZIONE</div>


    </div>


    <div class="stat-card accent-amber">


        <div class="stat-number">NUMERO</div>


        <div class="stat-label">DESCRIZIONE</div>


    </div>


    <div class="stat-card">


        <div class="stat-number">NUMERO</div>


        <div class="stat-label">DESCRIZIONE</div>


    </div>


</div>


Scrivi qui il commento ai numeri.


---


## SPIEGAZIONE


Scrivi qui il secondo H2.


Spiega il problema in modo semplice.


Inserisci esempi, definizioni e passaggi logici.


---


## TIMELINE — SE SERVE


Incolla qui il blocco HTML reale:


<div class="timeline">


    <div class="timeline-item active">


        <div class="timeline-date">Passo 1</div>


        <div class="timeline-title">Titolo</div>


        <div class="timeline-body">Descrizione</div>


    </div>


    <div class="timeline-item warning">


        <div class="timeline-date">Passo 2</div>


        <div class="timeline-title">Titolo</div>


        <div class="timeline-body">Descrizione</div>


    </div>


    <div class="timeline-item danger">


        <div class="timeline-date">Passo 3</div>


        <div class="timeline-title">Titolo</div>


        <div class="timeline-body">Descrizione</div>


    </div>


</div>


---


## APPROFONDIMENTO


Scrivi qui il nuovo H2.


Sviluppa il ragionamento.


Puoi inserire elenchi, esempi, spiegazioni tecniche e considerazioni personali.


---


## CONFRONTO / DATI — SE SERVE


Scrivi qui il nuovo H2.


Spiega i dati e il confronto.


Inserisci una tabella Markdown quando serve:


| Elemento   | Dato | Dato | Note |
| ---------- | ---- | ---- | ---- |
| Elemento 1 | —    | —    | —    |
| Elemento 2 | —    | —    | —    |
| Elemento 3 | —    | —    | —    |


---


## CALLOUT WARNING — SE SERVE


Usa esattamente questo formato HTML:


<div class="callout warning">


    <strong>Attenzione</strong>


    Scrivi qui il messaggio importante.


</div>


---


## CASO CONCRETO


Scrivi qui il nuovo H2.


Porta il problema nella realtà: un prodotto, un'app, un servizio, un test, un caso personale o un caso di attualità.


Spiega cosa hai osservato e cosa hai scoperto.


---


## STAT HERO — SE SERVE


<div class="stat-hero">


    <div class="stat-number">NUMERO</div>


    <div class="stat-label">DESCRIZIONE</div>


</div>


---


## ANALISI


Scrivi qui l'analisi del caso concreto.


Puoi usare un elenco:


**Elemento 1** — spiegazione.


**Elemento 2** — spiegazione.


**Elemento 3** — spiegazione.


---


## CALLOUT SUCCESS — SE SERVE


<div class="callout success">


    <strong>La regola pratica</strong>


    Scrivi qui il consiglio operativo.


</div>


---


## LA DOMANDA CHE RIMANE


Scrivi qui il nuovo H2.


Smetti di spiegare e porta il lettore alla tua riflessione personale.


<div class="pull-quote">


    <p>"Inserisci qui la frase forte che emerge naturalmente dall'articolo."</p>


</div>


Scrivi qui la conclusione, normalmente 2–4 paragrafi.


Chiudi con una riflessione, una domanda o una provocazione.


---


## COSA PUOI FARE — SE SERVE


<div class="callout success">


    <strong>Cosa puoi fare subito</strong>


    Scrivi qui un'azione concreta per il lettore.


</div>


---


## FONTI

- **Nome fonte** — descrizione, [URL](https://example.com/)
- **Nome fonte** — descrizione, [URL](https://example.com/)
- **Nome fonte** — descrizione, [URL](https://example.com/)

---


## REGOLA DEL TEMPLATE


Non devi usare tutte le sezioni.


Mantieni però questa logica quando è adatta all'articolo:


**Aggancio → problema → spiegazione → dati/confronto → caso concreto → analisi → riflessione → domanda finale → fonti.**


Gli elementi `stat-row`, `timeline`, `stat-hero`, `callout` e `pull-quote` devono rimanere **HTML esatto**, perché sono i componenti che il CSS di Tempa riconosce.

