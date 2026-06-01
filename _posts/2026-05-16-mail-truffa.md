---
layout: post
title: "Quella mail della tua banca non è della tua banca"
subtitle: "Come riconoscere una truffa via email in trenta secondi, senza sapere niente di informatica."
tags: [sicurezza digitale, truffe, phishing, società]
thumbnail-img: "/assets/img/nome-immagine.jpg"
---

![](/assets/img/nome-immagine.jpg)

Arriva una mail. Logo della banca, colori giusti, tono ufficiale. Ti dice che il tuo conto è stato bloccato per attività sospette e devi cliccare subito per sbloccare tutto.

Panico. Clicchi.

Hai appena consegnato le chiavi di casa a un signore che stava seduto dall'altra parte del mondo a sperare che tu non sapessi una cosa molto semplice: **chiunque può scrivere qualsiasi cosa nel campo "mittente" di una mail.**

Proprio come potresti firmare una lettera cartacea con il nome di Draghi senza che nessuno ti fermi. Il nome non è una prova. Non lo è mai stato.

---

## Non è colpa tua. È colpa di chi non te l'ha detto.

Chi ti ha spiegato come funziona una mail?

Nessuno. Perché tutti danno per scontato che queste cose si sappiano. I truffatori, invece, sanno benissimo che non si sanno. E ci costruiscono sopra un'industria.

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
    <div class="stat-label">La fascia d'età più colpita, ma non l'unica</div>
  </div>
</div>

Comprano database di indirizzi email, noleggiano server in paesi dove nessuno li raggiunge, copiano loghi e layout delle aziende più grandi e mandano milioni di messaggi al giorno con sistemi automatici. È un lavoro. Un lavoro ben pagato.

Le vittime principali sono gli over 60, non perché siano ingenui, ma perché hanno imparato a fidarsi delle istituzioni in un'epoca in cui le istituzioni comunicavano su carta, con firma e timbro. Nessuno ha aggiornato il manuale.

Ma attenzione: il resto di noi non se la cava molto meglio. Le truffe più sofisticate ingannano anche chi lavora con i computer tutto il giorno. La differenza è solo quanto tempo hai a disposizione prima di cliccare.

---

## Una mail truffa vera, smontata pezzo per pezzo

Ne ricevo in continuazione. Una di quelle che preferisco, per eleganza criminale, fingeva di essere DHL.

Logo perfetto. Testo professionale. "Il tuo pacco non può essere consegnato, clicca qui per riprogrammare."

Classico. Funziona perché quasi tutti aspettano un pacco. Quasi sempre.

Se avessi guardato solo il nome del mittente avrei visto scritto "DHL Express". Se avessi guardato l'indirizzo reale avrei visto questo:

```
return100189@eoj53x09ubi1drs.bf38d04.huaweii.com.tw
```

Non è DHL. Non è nemmeno italiano. È un server taiwanese con un dominio generato a caso che nessuno controllerà mai.

<div class="callout warning">
  <strong>Il trucco dello schermo piccolo</strong>
  Su smartphone il client di posta nasconde quasi sempre l'indirizzo reale e mostra solo il nome. È il motivo per cui le truffe funzionano molto meglio su mobile. Se hai un dubbio, aprila da computer.
</div>

---

## Come si riconosce, in pratica

Non devi sapere cosa sono SPF, DKIM o DMARC. Devi sapere tre cose.

<div class="timeline">
  <div class="timeline-item active">
    <div class="timeline-date">Controllo 1</div>
    <div class="timeline-title">Il nome del mittente non vale niente</div>
    <div class="timeline-body">Chiunque può scrivere "Intesa Sanpaolo" nel campo nome. Quello che conta è l'indirizzo tra le parentesi angolari, subito dopo. Se non finisce con il dominio ufficiale dell'azienda (es. @intesasanpaolo.com), è falso. Punto.</div>
  </div>
  <div class="timeline-item warning">
    <div class="timeline-date">Controllo 2</div>
    <div class="timeline-title">L'urgenza è il segnale, non la conferma</div>
    <div class="timeline-body">"Il tuo account verrà sospeso entro 24 ore." Le aziende vere non comunicano così, perché non hanno bisogno di metterti fretta. L'urgenza è uno strumento per mettere in cortocircuito il ragionamento. Funziona benissimo. Riconoscerla è già metà del lavoro.</div>
  </div>
  <div class="timeline-item danger">
    <div class="timeline-date">Controllo 3</div>
    <div class="timeline-title">Nessuna azienda ti chiede dati via email</div>
    <div class="timeline-body">Mai. La tua banca non ti chiede la password via mail. Poste Italiane non ti chiede il codice fiscale. Amazon non ti chiede i dati della carta. Se lo fa, non è chi dice di essere. Senza eccezioni.</div>
  </div>
</div>

<div class="callout success">
  <strong>La regola che vale sempre</strong>
  Hai un dubbio? Chiudi la mail. Apri il browser. Cerca il sito ufficiale su Google. Accedi da lì. Trenta secondi, zero rischi. Se il problema esiste davvero, lo trovi anche così.
</div>

---

## Per chi vuole vedere con i propri occhi

Se vuoi smontare una mail sospetta da solo, esiste una funzione che quasi nessuno conosce: il sorgente della mail. È la carta d'identità tecnica del messaggio, quella che non si può falsificare facilmente.

Su Gmail si apre con tre clic: tre puntini in alto a destra → *Mostra originale*.

Quello che cerchi è la riga che inizia con **"From:"**. Se il dominio dopo la @ non corrisponde all'azienda che dice di scriverti, la mail è falsa. Non servono altri controlli.

<div class="pull-quote">
  <p>"I truffatori possono copiare il logo. Non possono cambiare da dove arriva davvero la mail."</p>
</div>

---

## Le truffe non vivono solo nella posta

Gli stessi sistemi, le stesse tecniche, la stessa psicologia dell'urgenza si trovano su WhatsApp, via SMS, e sempre più spesso nelle telefonate generate dall'intelligenza artificiale con la voce clonata di qualcuno che conosci.

La mail è solo il canale più vecchio. Non è il più pericoloso.

---

## La domanda che mi faccio

Non quante truffe vengono denunciate. Non quante leggi vengono approvate.

Quanti di noi, dopo aver letto questo, questa settimana si siedono vicino a qualcuno, gli aprono la posta insieme e gli mostrano dove guardare.

**Quella cosa lì vale più di qualsiasi campagna di sensibilizzazione.**

---

## Fonti

- **Dati sulle truffe in Italia:** Polizia Postale, Rapporto Cybercrime 2024
- **Come leggere il sorgente di una mail:** [Google Support](https://support.google.com/mail/answer/29436)
- **Autenticazione email, SPF, DKIM, DMARC:** [Cloudflare Learning Center](https://www.cloudflare.com/it-it/learning/email-security/dmarc-dkim-spf/)
