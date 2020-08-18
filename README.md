# agido Frontend Example Project

## Preparation

-   Install [Node.js](https://nodejs.org/en/)
-   Install [Yarn](https://yarnpkg.com/en/)
-   Fork and clone the repository.
-   Create and checkout your own branch.
-   Run `yarn` inside this folder to install all dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Not required here.

## Tasks

### Task 1: Preparation

-   Try to install and run the code.
-   Read the code and try to understand the underlying concepts

### Task 2: Concepts

-   Explain with your own words the different state management approaches (context, redux) with their advantages and disadvantages.
    Sowohl Context als auch Redux sind zwei wesentliche Ansätze zur Verwaltung des Zustands innerhalb einer (React) Applikation. Explizit, bei dem Einsatz von React, wird durch diese beiden Muster der Austausch von geteilten/globalen Zuständen zwischen Komponenten bewerkstelligt, welcher sonst mühselig über props abgebildet werden müsste.
    Das Redux Pattern setzt auf eine starke Segration of Concerns (hier: Command Query Responsibility Segregation (CQRS)) und besteht dabei aus drei (bzw. 4 mit Selectors) wesentlichen Bestandteilen:

    -   (einzelner, globaler) State: Der Zustand, welcher explizit nicht durch direkte Zugriffe bearbeitet werden darf (Single Source of Truth)
    -   Actions: Funktionen, welche ausgelöst (dispatched) werden können um eine Zustandsänderung (durch Reducer) zu veranlassen. Sie nehmen oftmals Daten entgegen
    -   Reducer: Erzeugen die eigentliche Zustandsänderung indem sie von den alten auf den neuen State abbilden. Oftmals befindet sich hier wesentliche Anwendungslogik.

    Der Context-Ansatz ist dahingegen wesentlich simpler: Wie der Name bereits verlauten lässt wird hierbei einzelnen Komponenten weitere Informationen von außerhalb (d.h. Kontext) reingereicht. Für einen Kontext wird dazu ein Provider erstellt, welcher den zu teilenden Zustand (oder Funktionen) bereitstellt. Benötigt nun eine Komponente Zugriff auf diese Inhalte, kann sie den Kontext einbinden und direkt darauf zugreifen (useContext).

    **Vor/-Nachteile Redux vs Context:**

    -   Redux ist „mächtiger“ als Context, erzeugt dementsprechend auch mehr Overhead in der Wartung. Es muss also dem Anwendungsfall entsprechend entschieden werden, welcher der beiden Ansätze zum Einsatz kommt.
    -   Redux bedingt meistens den Einsatz von Third-Party-Libraries, Context ist seit React 16 direkt in React verfügbar.
    -   Redux setzt konsequent das Konzept von Single Source of Truth um, mit Context ist es möglich, dass einzelne Komponente mehrere Sources of Truth haben.
    -   Redux eignet sich ideal für komplexere Tests, z.B. lasst sich eine Zustandsveränderung als Abfolge von Actions beliebig oft reproduzieren.
    -   Context erzwingt ein Re-Render bei dem Konsumenten, falls im Provider ein neuer Zustand erkannt wurde. Dies kann gewünscht sein, oder auch nicht – Redux überlässt hier mehr Kontrolle
    -   Context ist generell ein „leichter“ anwendbares Konzept, insbesondere für Entwickler, die noch nicht mit Redux in Kontakt gekommen sind.

    Trotzdem lassen sich beide Ansätze plausibel in Kombination Einsetzen.

-   What are the differences between classes and functional components?

    Class Components sind die ältere Möglichkeit Komponenten in React zu erstellen. Sie besitzen einen eigenen State (setState) und waren ursprünglich die einzige Möglichkeit auf Lifecycle Hooks zuzugreifen.

    Functional Components sind dahingegen an sich zustandslos und generell „kompakter“, da sie lediglich eine Funktion darstellen. Dies erhöht die Wartbarkeit und Testbarkeit gegenüber Stateful/Class Components. Trotzdem lasen sich heutzutage Konzepte wie State (über HOCs, useState) und Lifecycle Hooks (über useEffect) abbilden.

    React entwickelt sich zunehmend in die Richtung von functional Components.

-   What are the advantages of hooks over high order components or even mixins?

    Higher order components (HOCs) besitzen oftmals die Problematik, dass sie das Verständnis der Logik einer Komponente erschweren. Zum Beispiel sind mögliche Abhängigkeiten nicht mehr direkt ersichtlich, da sie durch die higher order component „verdeckt“ werden. Da sie zusätzlich eine eigene Komponente darstellen, erhöhen sie ebenfalls die Komplexität einer Applikation.

    Hooks erlauben den direkten Zugriff auf die gewünschten props, die Quelle kann direkt nachvollzogen werden. Der „Mittelmann“ über die HOC entfällt.

    Mixins beherbergten inhärent das Problem der Namens-Überlappung von genutzten Methoden, welches bei Hooks nicht existiert, da ein expliziter Name zugewiesen werden kann bei der Einbindung.

    Weiterhin sind „Hooks“ der offiziell bevorzugte Weg und zusätzliche Performance-Benefits durch z.b. Memoization (oder den lediglichen Entfall der extra-Komponente bei HOCs) werden Hooks zugesprochen.

### Task 3: View

-   Enhance the Match interface with a country (e.g. Spain) and a league (e.g. Primera Division) property
-   Add the new information in a suitable way to the view. Use [styled-components](https://www.styled-components.com/) to layout and style the new elements.

### Task 4: Utils + Tests

-   Show the weekday of a match instead of the full date
-   Adapt the tests accordingly. Run `yarn test` to test your result.

### Task 5: Fetching

-   Add a mechanism to fetch the API data automatically in an inverval of 60 seconds in every examples.

## Pull-Request

-   Create a pull request from your fork to this repo.
