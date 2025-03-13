# NS erfenis formulier

**Tymo Smids**

*27-02-2025*

## De opdracht

Maak een formulier wat een repica is van het formulier van de erfbelasting dat ingevuld wordt bij de belastingsdienst.

De style van dit formulier moet in de style van de NS (Nederlandse spoorwegen) gemaakt worden.

### De style

De tekst, knop en link kleuren worden de basis kleuren van de NS (blauw & geel).

### De logica

De vragen en invoervelden komen van de pdf van de [belastingsdienst pdf](https://download.belastingdienst.nl/belastingdienst/docs/aangifte_erfbel_2024_suc0602z41fol.pdf).

#### Week 1

Begin gemaakt met huisstyle uitzoeken en inplementeren in de site.
Vragen zoeken die nagemaakt en verbeterd kunnen worden.

#### Week 2

Begonnen met de local storage om waardes op te slaan die zijn ingevuld.
Verkrijger velden dynamisch toevoegen als de vorige is ingevuld.
BSN nummer check via de (Constraint) Validation API.

#### Week 3

De hidden fieldset zijn omgedraaid zodat als de javascript niet ingeladen is en de css :has selector niet werkt, komen de invoervelden wel tevoorschijn. Dit zorgt ervoor dat de velden altijd berijkbaar zijn.

```cs
    /* Hide vragen als invoer ze skipt */
    fieldset.question:has(div[data-skip-sibling] input[type="radio"][value="no"]:checked) {
        > fieldset[data-hidable] {
            display: none;
        }
    }
```

De hoofdfieldsets zijn aangepast zodat de vragen als losse fieldsets eruitzien om de vragen te verduidelijken.
De inputs die required zijn hebben een oranje border en de vraag heeft een astrix (*) om te laten zien dat deze vraag required is. Als de waarde niet goed is wordt de border rood samen met de achtergrond van de input en er wordt een kruis achter de input gezet. Als de waarde goed is wordt de input border groen, de achtergrond krijgt een lichtere groen en achter de input komt een checkmark.

### Link

[Link naar github page](https://tymonl.github.io/erf_formulier/index.html)