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

#Ma la REGOLA N° è DI non aprire mai una mail sospetta da smartphone, MAI!!!!

---

Le truffe via email non sono il lavoro solitario di qualche hacker in cantina. Sono industrie organizzate, scalabili e redditizie.

Comprano banche dati di indirizzi email. Noleggiano server in paesi dove nessuno li raggiunge. Copiano loghi, colori e layout delle aziende più grandi. Usano sistemi automatici per mandare #milioni di messaggi al giorno.


Prendo uan delle tante mail ricevute nella mia casella di posta, quella in cui fingeva di essere DHL, #ATTENZIONE ti sto facendo vedere una mail facile, ma RICORDA che i truffatori sanno quando ti deve arrivare un pacco e potrebbe coincidere e quindi farti cadere nella trappola.

P.S.: Ci sono altri metodi per capire se una mail è vera o meno, ma devo dire che mi fido più del semplice controllo manuale.



L'esempio è condotto sul cliente più utilizzato GMAIL

```
From:        "DHL" (nome copiato, indirizzo falso)
Return-Path: return100189@eoj53x09ubi1drs.bf38d04.huaweii.com.tw
Server:      progresshartford.com [IP tedesco, hosting anonimo]
DKIM:        assente
Link:        storage.googleapis.com/barriom/fantomee.html
Testo:       migliaia di caratteri random nascosti per aggirare i filtri
```

Sei livelli di inganno sovrapposti. Tutto progettato per sembrare reale a chi non sa dove guardare.

Su questo non ci sono scuse. È frode. È reato. È fatto con piena consapevolezza del danno che causa.

---

## Adesso arriva la domanda che nessuno vuole sentire.

Chi ha insegnato a tua madre come funziona una mail?

Chi le ha spiegato che il nome del mittente non significa niente — che chiunque può scrivere "Intesa Sanpaolo" nel campo del nome e mandare la mail da un server in Russia? Chi le ha detto che un logo non è una garanzia? Che il lucchetto verde nella barra del browser non vuol dire niente su chi ti sta scrivendo?

Nessuno. Perché diamo per scontato che queste cose si sappiano. Non si sanno.

E nel frattempo i truffatori lo sanno benissimo che non si sanno.

---

## Il problema con l'indignazione che non cambia niente.

Ogni volta che esce una notizia sulle truffe online la reazione è sempre uguale. Articoli. Indignazione. Qualcuno che condivide. Qualcuno che commenta "vergogna". E poi tutto torna come prima.

Perché è più comodo indignarsi con i cattivi che fare la cosa difficile: sedersi vicino a un genitore anziano e spiegargli, con pazienza, come funziona davvero quello strumento che usa ogni giorno senza capirlo fino in fondo.

<div class="stat-row">
  <div class="stat-card">
    <div class="stat-number">3,4 Mld€</div>
    <div class="stat-label">Persi dagli italiani in truffe online nel 2024</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">+34%</div>
    <div class="stat-label">Aumento delle truffe via email in due anni</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">Over 60</div>
    <div class="stat-label">La fascia d'età più colpita in Italia</div>
  </div>
</div>

Le vittime principali sono gli anziani. Non perché siano stupidi. Ma perché hanno imparato a fidarsi delle istituzioni in un'epoca in cui le istituzioni comunicavano su carta, con firma e timbro. Nessuno gli ha mai detto che su internet chiunque può fingere di essere chiunque.

Quella lacuna non la colma nessuna multa a nessuna azienda. La colmiamo noi, se vogliamo.

---

## Quello che si può fare davvero.

Tre segnali che una mail falsa non riesce quasi mai a nascondere. Non servono competenze tecniche. Servono due minuti e la voglia di guardare.

**Primo: l'indirizzo del mittente, non il nome.** Il nome visualizzato è decorativo. Chiunque può scrivere "La tua banca" come nome. L'indirizzo vero — quello tra le parentesi angolari — è la cosa che conta. Se finisce con qualcosa di diverso dal dominio ufficiale dell'azienda, è falso.

**Secondo: l'urgenza è sempre un segnale.** "Il tuo account verrà sospeso entro 24 ore." "Azione richiesta immediatamente." "Il tuo pacco verrà rispedito oggi." Le aziende vere non comunicano così. L'urgenza è uno strumento di manipolazione. Funziona perché mette in cortocircuito il ragionamento.

**Terzo: nessuna azienda seria chiede dati via email.** Mai. La tua banca non ti chiede la password via mail. Poste Italiane non ti chiede il codice fiscale via mail. Amazon non ti chiede i dati della carta via mail. Se lo fa, non è la tua banca. Non è Poste. Non è Amazon.

> Se hai un dubbio, chiudi la mail. Apri il browser. Cerca il sito ufficiale su Google. Accedi da lì. Il dubbio si risolve in trenta secondi e non rischi niente.

Per chi vuole andare più a fondo esiste il sorgente della mail — la sua carta d'identità tecnica. Su Gmail si apre con tre clic: tre puntini in alto → *Mostra originale*. Contiene informazioni che non si possono falsificare.

La mail DHL sembrava ufficiale. Logo, colori, codice di tracciamento. Ma il sorgente mostrava questo:

```
Authentication-Results:
  spf=pass   → ma su un dominio taiwanese casuale, non su dhl.com
  dkim=ASSENTE
  dmarc=ASSENTE

Return-Path: return100189@[57 caratteri di nonsense].huaweii.com.tw
Link:        storage.googleapis.com/barriom/fantomee.html
```

Una mail legittima, invece, mostra tutt'altro:

```
Authentication-Results:
  dkim=pass   ✓
  spf=pass    ✓
  dmarc=pass  ✓  (p=REJECT — il massimo della protezione)

Return-Path: stessa-azienda@dominiolegittimo.it
Server:      sottodominio riconducibile all'azienda mittente
```

Il contrasto è netto. Leggibile da chiunque, una volta che sa cosa cercare.

---

## Le truffe non si fermano alla mail.

La mail è solo uno dei canali. Gli stessi truffatori usano anche WhatsApp, SMS, e telefonate. Se vuoi capire come funzionano le [truffe via WhatsApp](/2026-05-26-truffe-whatsapp) — sempre più diffuse e sempre più convincenti — ho scritto una guida anche su quello.

Il meccanismo è lo stesso. Cambiano solo gli strumenti.

---

## La domanda che mi faccio.

Non è quante truffe vengono denunciate. Non è quante leggi vengono approvate.

È quanti di noi, dopo aver letto questa storia, questa settimana si siedono vicino a un genitore o a un nonno e gli mostrano — concretamente, sul loro telefono — come riconoscere una mail falsa.

Mia madre usa lo smartphone da sola.

So cosa sa distinguere?

**Quella domanda vale più di qualsiasi campagna di sensibilizzazione.**

---

## Fonti

- **Dati sulle truffe in Italia** — Polizia Postale, Rapporto Cybercrime 2024
- **Come leggere il sorgente di una mail** — [Google Support](https://support.google.com/mail/answer/29436)
- **Autenticazione email: SPF, DKIM, DMARC** — [Cloudflare Learning Center](https://www.cloudflare.com/it-it/learning/email-security/dmarc-dkim-spf/)
- **Analisi tecnica** — Esempi reali analizzati nel corso della ricerca per questo articolo
