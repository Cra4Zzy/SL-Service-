# SL Service – Präsentationsentwurf

Statische, responsive Website in der Unternehmenspalette Blau, Orange und Weiß. Der Aufbau folgt dem vom Nutzer bevorzugten Designkonzept. HTML-Dateien befinden sich in dem Hauptverzeichnis, CSS und JavaScript in `assets/`.

## Vorschau und Bearbeitung

Die Startseite ist `index.html`. Die Dateien lassen sich lokal öffnen oder auf einem statischen Webhost bereitstellen. Für lokale HTTP-Vorschau: `python -m http.server 8000 --directory .`. Änderungen an Inhalten und Seitentemplates erfolgen in `build.py`, anschließend `python build.py` ausführen. Styles und Interaktionen sind eigenständig in `assets/style.css` und `assets/main.js`.

## Umfang

- Startseite und alle erfassten deutschen Navigationsseiten der bisherigen Website
- IT-Beratung, Managed Services, Netzwerkbetreuung, Hardware/Software, Telefonie, Backup
- Sicherheitsberatung, Kameras, Einbruch- und Brandmeldetechnik, Zutritt und Zeiterfassung
- Datenschutzbetreuung, Unternehmen, Kompetenz, Vorstellung, Branchen
- Karriere und die bestehende Ausbildungsseite
- Kontakt, Kontaktformular, Ansprechpartner, Standort, Support/Fernwartung
- Blog mit 13 historischen Themen und Filter-/Suchfunktion; Archivtexte teilweise gekürzt und mit Originalquelle verlinkt
- Impressum, Datenschutz und AGB-Seite als ausdrücklich gekennzeichneter Präsentationsstand

## Funktionsumfang

Mobilmenü, Tastaturbedienung, Dropdown-Navigation, modaler Support, responsive Layouts, reduzierte Bewegung bei entsprechender Systemeinstellung. Das Kontaktformular bereitet ausschließlich einen E-Mail-Link vor. Es gibt kein Backend und keine automatische Nachrichtenzustellung. Downloads und externe Dienste werden nur nach Klick geöffnet.

## Inhaltliche Grundlagen

Erfasst am 07.10.2026 von https://www.sl-sv.de/de/ und dessen deutschen Unterseiten. Texte wurden für den Entwurf verdichtet und modernisiert. Unternehmensdaten, Kontaktpersonen und alte Archivdaten basieren auf dem bestehenden Internetauftritt. Die auf der bisherigen Website genannten älteren ISO-Versionen, historischen Partnerschaften und früheren Preise wurden nicht als aktuelle Zertifizierungen oder Konditionen beworben. Vor einer tatsächlichen Veröffentlichung: Personen, Angebote, Ausbildungsbeginn, Vertragsdokumente und finalen Datenschutz durch SL Service bestätigen lassen.

## Bilder und Logo

Das Logo wird aus der vom Nutzer hochgeladenen Unternehmensreferenz im CSS-Ausschnitt angezeigt, inklusive der dort vorhandenen Jubiläumsergänzung. Für den finalen Livegang das aktuelle freigegebene Original-Logo in hoher Auflösung einsetzen. Die drei Illustrationsfotos wurden mit dem integrierten Bildgenerator erstellt und sind ausdrücklich keine Fotos tatsächlicher SL-Service-Mitarbeiter oder Geschäftsräume:

1. IT-Techniker am Serverrack, navyfarbenes Umfeld, freie linke Fläche für den Hero-Text.
2. Kamera an einer zeitgenössischen Geschäftsgebäudefassade, natürliche Fotografie.
3. Fiktive IT-Beratungssituation mit Laptop in einem hellen Büro.

## Prüfungen und Grenzen

JavaScript-Syntax und lokale HTML-Verweise geprüft. Browser- und visuelle QA war in dieser Ausführungsumgebung nicht verfügbar. Die Website ist für die private Kundenvorstellung gedacht und besitzt `noindex,nofollow` sowie eine sperrende robots.txt. Vor Veröffentlichung als offizieller Unternehmensauftritt sind diese Einstellungen gezielt anzupassen.
