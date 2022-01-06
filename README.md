 Modyfikacja aplikacji z lab9
 Zmiany:
 -wprowadzanie limitu indeksu k(20)
 -Przeglad historii obliczanych wartosci(Fib.js, History.js)
 -Fib.js - dodano metody umożliwiające interakcję z modułem historii
 -Modyfikacja funkcji wyliczajacej wartosci ciagu Fibonacciego(Index.js)
 -Strona glowna(Main.js)
 -Dokumentacja(Documentation.js)

Uruchomienie :
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 
docker-compose -f docker-compose.dev.yml up --build

Aplikacja jest dostępna na porcie 80.

