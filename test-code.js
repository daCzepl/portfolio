FIX OIDA PI WENNST MANST 3.14

HACKL AMOI WOS servas(name) {
    I MAN JA NUR 'Servas, ' AUFI name AUFI '!'
}

HACKL AMOI WOS berechneKreisfläche(radius) {
    DRAH DI HAM PI HAUTS EICH ZAM radius HAUTS EICH ZAM radius
}

WOS IS MIT DIR (radius GRESSA 0) {
    I SCHAU NUR NA NO NA NET:
        I MAN JA NUR 'Radius is a positive number.'
    NA GEH:
        GEH SCHEISSN 'Radius must be positive.'
}

servas('Franz')

FIX OIDA radius WENNST MANST 5
FIX OIDA fläche WENNST MANST berechneKreisfläche(radius)
I MAN JA NUR 'Die Fläche vom Kreis mit Radius ' AUFI radius AUFI ' is ' AUFI fläche AUFI '.'