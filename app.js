function genQuote() {
  var randNum = Math.floor(Math.random() * 14) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
}

//quote array
var quotes = ["Blank", 
"👉 Du möchtest ein Material zur Verbesserung der Rechtschreibung in einem von Dir gewählten Bereich erstellen. Welcher Inhaltstyp erscheint Dir dafür geeignet? Gestalte einen ersten Entwurf mit Deinem gewählten Inhaltstyp.", 
"👉  Ergänze beim Beispielinhalt 'Drag the Words' zu 'Es war eine Mutter', die zweite Strophe des Liedes mit weiteren 'Lücken'.",
"👉 Erstelle einen Lückentext mit einer Antwortmöglichkeit pro Lücke. Überlege Dir, in welchen Fällen weitere Antwortmöglichkeiten hilfreich wäre und gestalte einen entsprechenden erweiterten Inhaltstyp.",
"👉 Erstelle eine Übung zum Training der direkten Artikel mit dem Inhaltstyp 'Mark the Words'.",
"👉  Erstelle Vokabel-Lernkarten z.B. zu den Farben auf Englisch (oder auch zu einem anderen von Dir gewählten Thema).",
"👉  Erstelle zwei Multiple Choice Fragen: In der ersten Variante soll nur eine Antwort richtig sein; in der zweiten Variante sollen mehrere Antworten richtig sein.",
"👉 Erstelle einen Essay-Inhalt zum Märchen 'Rotkäppchen'. Teste aus, ob er so funktioniert, wie Du Dir das vorstellst und verbessere ihn, falls erforderlich.",
"👉 Erstelle ein Suchsel zu Großstädten in Deutschland. Welcher Inhaltstyp ist dafür geeignet? Gestalte das Bildungsmaterial.",
"👉 Wähle Dir eines der bereit gestellten Bilder aus und gestalte Hotspots darauf, die Lernende finden müssen. Welcher Inhaltstyp ist dafür geeignet? Welche Einstellungen erscheinen Dir dafür wichtig?",
"👉  Ändere den Drag and Drop Beispiel-Inhalt in eine Variante für Englischlernende. Anstelle deutscher Begriffe sollen die Begriffe nun auf Englisch sein, von den Lernenden richtig gelesen und dann wie bisher richtig zugeordnet werden können. Schaue Dir dabei die Einstellungen des Inhaltstyps an.",
"👉 Nimm ein kurzes Diktat für Lernende mit dem Inhaltstyp 'Dictation' auf. Erkunde, welche unterschiedlichen Einstellungsmöglichkeiten Dir zur Verfügung stehen.",
"👉 Überlege Dir ein Thema, das sich für eine zeitliche Darstellung eignet (z.B. die zurückliegende Arbeitswoche oder auch ein historisches Ereignis) und erstelle eine Zeitleiste.",
"👉 Wähle ein Video von Youtube und baue mithilfe von H5P (Inhaltstyp Interactive Video) mindestens eine Interaktion ein.",
"👉 Erstelle ein Balken- oder ein Kreisdiagramm mit dem Inhaltstyp 'Chart' mit Merkmalen Deiner oder einer Dir bekannten Lerngruppe."
];

