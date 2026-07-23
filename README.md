# Rita och gissa

Ett färgglatt, mobilanpassat rit- och gissningsspel för 2–8 spelare.

## Så fungerar spelet

På startsidan väljer gruppen antal spelare. Varje spelare kan ange ett valfritt namn och välja en egen åldersgrupp: 6–8 år, 9–12 år, 13–15 år, 15–18 år eller vuxen. Valen sparas endast lokalt i webbläsaren.

Varje åldersgrupp har 15 gemensamma, mycket enkla figurer samt 25 egna åldersanpassade figurer. De kombineras med 30 handvalda extrasaker. Varje extrasak har ett passande mellanled: **med**, **i**, **på**, **under** eller **bredvid**. Resultatet blir korta uppdrag som ”Katt med hatt”, ”Robot i bil” och ”Hund under paraply”. Självkombinationer som ”Katt med katt” filtreras bort.

Utöver dessa finns exakt **1 000 korta knasuppdrag** som blandas in i alla kortlekar:

- 400 begripliga sammansättningar, till exempel **Bananbåt** och **Glassfontän**.
- 250 figurer med en enkel sak, till exempel **Rumpa med solglasögon**.
- 350 figurer med en enda synlig handling, till exempel **Prinsessan pruttar**.

Varje knasuppdrag innehåller högst tre ord och bygger på välkända saker eller handlingar som går att visa med enkla former.

De två turknapparna beskriver både handling och resultat. Den gröna huvudknappen **Klar! Nästa spelare** avslutar turen och låter nästa person rita. Den vita alternativknappen **Byt uppdrag** byter bara kortet och låter samma spelare fortsätta. Inget uppdrag upprepas inom en åldersgrupp innan dess blandade kortlek är slut.

Sidan använder en lättläst 8-bitarsstil med systemtypsnitt för brödtext, pixeltypsnitt för rubriker och knappar, avskurna pixelhörn och tydliga blockskuggor. Störande skanningslinjer och den dekorativa texten ”Pixelritkalas” är borttagna. Den har riktiga HTML-kontroller och `aria-live`. Den har inga externa beroenden, inget byggsteg och skickar inga uppgifter till en server.

## Kör lokalt

Öppna `index.html` direkt i en webbläsare.

Kör de automatiska kontrollerna med:

```bash
node tests.mjs
```

## Publicering

Sidan kan publiceras med GitHub Pages från `main` och mappen `/(root)`.

## Testchecklista

- Välj 2–8 spelare och ange olika namn och åldrar.
- Kontrollera att rätt namn och ålder visas på varje tur.
- Prova mellanleden **med**, **i**, **på**, **under** och **bredvid**.
- Tryck på **Byt uppdrag – Samma spelare fortsätter** och kontrollera att spelaren är densamma.
- Tryck på **Klar! Nästa spelare – Nästa person får rita** och kontrollera att turen går vidare.
- Ladda om sidan och kontrollera att grundinställningarna finns kvar.
- Prova sidan i stående och liggande mobilformat.
