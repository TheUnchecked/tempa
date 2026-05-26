---
layout: post
title: "Caro genitore, nonno amico, NON aprire le mail!"
subtitle: "Dietro ogni email si può nascondere una truffa"
tags: [sicurezza digitale, truffe, phishing, società]
# cover-img: "/assets/img/.jpg"
# share-img: "/assets/img/.jpg"
# thumbnail-img: "/assets/img/.jpg"
---

Un mail truffa ha sempre un travestimento che la fa sembrare quella di una banca, la tua, delle poste o dell'Agenzia delle Entrate.

Non devi fidarti a prescindere, e qui proverò a spiegarti in modo semplice come capire subito se una mail è legittima o meno.

<div class="callout danger">
  <strong>La regola numero uno</strong>
  Non aprire mai una mail sospetta da smartphone, MAI. Lo schermo piccolo nasconde i dettagli che ti salvano.
</div>

---

Le truffe via email non sono il lavoro solitario di qualche hacker in cantina. Sono industrie organizzate, scalabili e redditizie.

Comprano banche dati di indirizzi email. Noleggiano server in paesi dove nessuno li raggiunge. Copiano loghi, colori e layout delle aziende più grandi. Usano sistemi automatici per mandare milioni di messaggi al giorno.

<div class="stat-row">
  <div class="stat-card accent-red">
    <div class="stat-number">3,4 Mld€</div>
    <div class="stat-label">Persi dagli italiani in truffe online nel 2024</div>
  </div>
  <div class="stat-card accent-amber">
    <div class="stat-number">+34%</div>
    <div class="stat-label">Aumento delle truffe via email in due anni</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">Over 60</div>
    <div class="stat-label">La fascia d'età più colpita in Italia</div>
  </div>
</div>

Le vittime principali sono gli anziani. Non perché siano stupidi. Ma perché hanno imparato a fidarsi delle istituzioni in un'epoca in cui le istituzioni comunicavano su carta, con firma e timbro. Nessuno gli ha mai detto che su internet chiunque può fingere di essere chiunque.

---

## Come funziona una truffa via email

Prendo una delle tante mail ricevute nella mia casella di posta, quella che fingeva di essere DHL.

<div class="callout warning">
  <strong>Attenzione</strong>
  Ti sto mostrando una mail facile da smascherare. I truffatori sanno quando ti deve arrivare un pacco — e potrebbero usarlo per renderla molto più convincente.
</div>

```
From:        "DHL" (nome copiato, indirizzo falso)
Return-Path: return100189@eoj53x09ubi1drs.bf38d04.huaweii.com.tw
Server:      progresshartford.com [IP tedesco, hosting anonimo]
DKIM:        assente
Link:        storage.googleapis.com/barriom/fantomee.html
Testo:       migliaia di caratteri random nascosti per aggirare i filtri
```

Sei livelli di inganno sovrapposti. Tutto progettato per sembrare reale a chi non sa dove guardare.

---

## Adesso arriva la domanda che nessuno vuole sentire.

Chi ha insegnato a tua madre come funziona una mail?

Chi le ha spiegato che il nome del mittente non significa niente — che chiunque può scrivere "Intesa Sanpaolo" nel campo del nome e mandare la mail da un server in Russia? Chi le ha detto che un logo non è una garanzia? Che il lucchetto verde nella barra del browser non vuol dire niente su chi ti sta scrivendo?

Nessuno. Perché diamo per scontato che queste cose si sappiano. Non si sanno.

<div class="pull-quote">
  <p>"E nel frattempo i truffatori lo sanno benissimo che non si sanno."</p>
</div>

---

## Quello che si può fare davvero

Tre segnali che una mail falsa non riesce quasi mai a nascondere.

<div class="timeline">
  <div class="timeline-item active">
    <div class="timeline-date">Controllo 1</div>
    <div class="timeline-title">Guarda l'indirizzo, non il nome</div>
    <div class="timeline-body">Il nome visualizzato è decorativo — chiunque può scrivere "Intesa Sanpaolo". L'indirizzo reale tra le parentesi angolari è quello che conta. Se non finisce con il dominio ufficiale dell'azienda, è falso.</div>
  </div>
  <div class="timeline-item warning">
    <div class="timeline-date">Controllo 2</div>
    <div class="timeline-title">L'urgenza è sempre un segnale</div>
    <div class="timeline-body">"Il tuo account verrà sospeso entro 24 ore." Le aziende vere non comunicano così. L'urgenza è uno strumento di manipolazione che mette in cortocircuito il ragionamento.</div>
  </div>
  <div class="timeline-item danger">
    <div class="timeline-date">Controllo 3</div>
    <div class="timeline-title">Nessuna azienda chiede dati via email</div>
    <div class="timeline-body">Mai. La tua banca non ti chiede la password via mail. Poste Italiane non ti chiede il codice fiscale. Amazon non ti chiede i dati della carta. Se lo fa, non è chi dice di essere.</div>
  </div>
</div>

<div class="callout success">
  <strong>Regola d'oro</strong>
  Se hai un dubbio, chiudi la mail. Apri il browser. Cerca il sito ufficiale su Google. Accedi da lì. Il dubbio si risolve in trenta secondi e non rischi niente.
</div>

---

## Per chi vuole andare più a fondo

Esiste il sorgente della mail — la sua carta d'identità tecnica. Su Gmail si apre con tre clic: tre puntini in alto → *Mostra originale*.

Come appare una mail truffa vs una legittima:

<div class="bar-chart">
  <div class="bar-item">
    <span class="bar-item-label">DKIM</span>
    <div class="bar-track"><div class="bar-fill red" style="width:100%">ASSENTE nella truffa</div></div>
  </div>
  <div class="bar-item">
    <span class="bar-item-label">DMARC</span>
    <div class="bar-track"><div class="bar-fill red" style="width:100%">ASSENTE nella truffa</div></div>
  </div>
  <div class="bar-item">
    <span class="bar-item-label">Dominio</span>
    <div class="bar-track"><div class="bar-fill teal" style="width:100%">PRESENTE nelle mail vere</div></div>
  </div>
</div>

---

## Le truffe non si fermano alla mail.

Gli stessi truffatori usano anche WhatsApp, SMS e telefonate. Se vuoi capire come funzionano le [truffe via WhatsApp](/tempa/2026-05-26-truffe-whatsapp/), sempre più diffuse e convincenti, ho scritto una guida anche su quello.

---

## La domanda che mi faccio.

Non è quante truffe vengono denunciate. Non è quante leggi vengono approvate.

È quanti di noi, dopo aver letto questa storia, questa settimana si siedono vicino a un genitore o a un nonno e gli mostrano — concretamente, sul loro telefono — come riconoscere una mail falsa.

**Quella domanda vale più di qualsiasi campagna di sensibilizzazione.**

---

## Fonti

- **Dati sulle truffe in Italia** — Polizia Postale, Rapporto Cybercrime 2024
- **Come leggere il sorgente di una mail** — [Google Support](https://support.google.com/mail/answer/29436)
- **Autenticazione email: SPF, DKIM, DMARC** — [Cloudflare Learning Center](https://www.cloudflare.com/it-it/learning/email-security/dmarc-dkim-spf/)
