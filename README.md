# Rita och gissa

Ett färgglatt, mobilanpassat rit- och gissningsspel för 2–8 spelare.

På startsidan väljer gruppen antal spelare och sedan en egen åldersgrupp för varje spelare: 6–8 år, 9–12 år, 13–15 år, 15–18 år eller vuxen. Spelet visar automatiskt ett uppdrag från rätt åldersgrupp på varje spelares tur.

Varje åldersgrupp har exakt 5 000 unika, konkreta uppdrag och en egen blandad kortlek. Uppdragen är gjorda för personer som inte brukar rita: varje uppdrag har bara två delar – ett välkänt huvudmotiv och en enda tydlig detalj – till exempel ”En katt med hatt”, ”Ett hus på månen” eller ”En robot med ballong”. Inga extra färger eller egenskaper behöver ritas. Streckgubbar och enkla former räcker. Ett uppdrag återkommer inte förrän samtliga 5 000 har visats.

Öppna `index.html` direkt i en webbläsare. Spelet har inga externa beroenden, inget byggsteg och sparar inga personuppgifter.

## Publicering

Sidan kan publiceras med GitHub Pages från `main` och mappen `/(root)`.

### Publicera och testa via GitHub från iPhone

1. Hämta exportpaketet och öppna zip-filen i appen **Filer**.
2. Öppna repositoryt på GitHub i Safari och välj **Add file → Upload files**.
3. Ladda upp `index.html`, `README.md` och `CODEX_PROMPT.txt` till repositoryts rot på grenen `main`.
4. Öppna **Settings → Pages** på GitHub.
5. Välj **Deploy from a branch**, grenen `main` och mappen `/(root)`, och tryck på **Save**.
6. Vänta tills GitHub visar att publiceringen är klar. Spelet finns därefter på `https://<användarnamn>.github.io/<repository>/`.

Efter framtida ändringar räcker det att ersätta `index.html` på `main`. GitHub Pages publicerar då den nya versionen automatiskt. Om den gamla versionen syns på iPhone kan sidan öppnas i en privat Safari-flik för att undvika en cachad kopia.

## Testchecklista

- Välj ett antal mellan 2 och 8 och starta spelet.
- Ge spelarna olika åldersgrupper och kontrollera att rätt ålder visas på varje tur.
- Kontrollera att spelarnumret växlar efter varje uppdrag.
- Välj **Ändra val** och starta om med andra inställningar.
- Prova sidan i både stående och liggande läge.
