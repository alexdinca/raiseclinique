/* ============================================================
   Raise Beauty Clinique — date servicii
   Prețuri promoționale de vară (preț vechi -> preț nou)
   ============================================================ */

/* Bloc reutilizabil: radiofrecvență facială */
const RF_BLOCK = `
  <p>Radiofrecvența facială este un tratament estetic non-invaziv care folosește unde electromagnetice pentru a încălzi straturile profunde ale pielii, stimulând producția de colagen și elastină pentru un efect de lifting și fermitate. Spune adio pielii lipsite de tonus și ridurilor fine — fără ace și fără perioadă de recuperare.</p>
  <h5>Cum funcționează?</h5>
  <ul>
    <li><b>Încălzire controlată:</b> dispozitivul livrează energie termică în derm (stratul profund).</li>
    <li><b>Contractarea fibrelor:</b> căldura contractă instantaneu fibrele vechi de colagen.</li>
    <li><b>Neocolageneză:</b> celulele sunt activate pentru a produce colagen nou pe termen lung.</li>
  </ul>
  <h5>Beneficii majore</h5>
  <ul>
    <li><b>Efect de lifting:</b> redefinește conturul feței și linia mandibulară.</li>
    <li><b>Reducerea ridurilor:</b> diminuează ridurile fine din zona ochilor, gurii și gâtului.</li>
    <li><b>Fermitate:</b> combate laxitatea cutanată și îmbunătățește textura.</li>
    <li><b>Pori și cicatrici:</b> varianta fracționată ajută la micșorarea porilor și estomparea urmelor post-acneice.</li>
  </ul>
  <h5>Protocolul de tratament</h5>
  <ul>
    <li>Se recomandă cure de 3–6 ședințe consecutive.</li>
    <li>Procedura se repetă de regulă o dată pe săptămână.</li>
    <li>Senzație: o căldură intensă, dar confortabilă, asemănătoare unui masaj cu pietre calde.</li>
  </ul>
  <h5>Contraindicații principale</h5>
  <ul>
    <li>Sarcină și alăptare.</li>
    <li>Stimulator cardiac (pacemaker) sau implanturi metalice în zona tratată.</li>
    <li>Răni deschise, infecții active (herpes) sau acnee severă în faza inflamatorie.</li>
    <li>Ten hipersensibil, afectat de cuperoză extinsă sau rozacee.</li>
  </ul>`;

/* Bloc reutilizabil: HIFU facial generic */
const HIFU_GENERIC = `
  <p>HIFU (High-Intensity Focused Ultrasound) este un tratament estetic non-invaziv care folosește ultrasunete focalizate de înaltă intensitate pentru a stimula producția de colagen și a oferi un efect de lifting facial și fermitate corporală fără chirurgie.</p>
  <h5>Cum funcționează?</h5>
  <ul>
    <li><b>Energie termică directă:</b> dispozitivul emite unde ultrasonice concentrate care trec prin straturile superficiale fără a le afecta.</li>
    <li><b>Țintirea stratului SMAS:</b> energia ajunge în profunzime, până la dermul profund și stratul muscular superficial (SMAS) — aceeași zonă tratată și în liftingul chirurgical.</li>
    <li><b>Neocolageneză:</b> căldura controlată distruge fibrele vechi de colagen și declanșează vindecarea naturală, generând colagen și elastină noi.</li>
  </ul>
  <h5>Beneficii principale</h5>
  <ul>
    <li><b>Lifting non-chirurgical:</b> redefinește ovalul feței, linia mandibulei și ridică sprâncenele.</li>
    <li><b>Reducerea ridurilor:</b> netezește pliurile nazolabiale, ridurile perioculare și liniile de pe gât sau decolteu.</li>
    <li><b>Remodelare corporală:</b> distruge localizat celulele adipoase de pe abdomen, brațe sau coapse și întinde pielea lăsată.</li>
  </ul>
  <h5>Rezultate și durată</h5>
  <ul>
    <li>O ușoară îmbunătățire a fermității se observă imediat, datorită contracției fibrelor existente.</li>
    <li>Efect maxim: rezultatele finale devin vizibile după 2–6 luni, timpul necesar formării noului colagen.</li>
    <li>Durabilitate: efectul de întinerire se menține între 1 și 2 ani, în funcție de stilul de viață și structura pielii.</li>
    <li>Fără timp de recuperare — poți reveni imediat la activitățile zilnice.</li>
  </ul>
  <h5>Contraindicații importante</h5>
  <ul>
    <li>Femei însărcinate sau care alăptează.</li>
    <li>Persoane cu stimulatoare cardiace sau implanturi metalice în zona tratată.</li>
    <li>Infecții active, răni deschise sau acnee severă în zona de aplicare.</li>
    <li>Boli autoimune sau tulburări de coagulare a sângelui.</li>
  </ul>`;

window.SERVICES_DATA = [
  {
    id: "faciale",
    label: "Tratamente faciale",
    note: "",
    items: [
      {
        name: "Instant Glow Microneedling",
        old: "600 lei", now: "450 lei",
        tag: "Inducție de colagen prin micro-înțepături controlate",
        desc: `
          <p>Microneedling-ul este o procedură cosmetică minim invazivă care stimulează producția naturală de colagen și elastină prin micro-înțepături controlate, realizate cu ace minuscule sterilizate. Cunoscută și ca terapie de inducție a colagenului, este folosită pe scară largă pentru regenerarea pielii, estomparea cicatricilor și reducerea semnelor de îmbătrânire.</p>
          <h5>Cum funcționează procedura?</h5>
          <p>Aparatul (de tip Dermapen sau role Dermaroller) creează sute de micro-perforații fine în epidermă și dermă. Aceste leziuni microscopice declanșează mecanismul natural de vindecare: celulele eliberează factori de creștere care stimulează formarea de noi fibre de colagen și elastină. Canalele create temporar permit substanțelor active (seruri cu acid hialuronic, vitamine sau cocktailuri de mezoterapie) să pătrundă profund în piele.</p>
          <h5>Principalele beneficii</h5>
          <ul>
            <li><b>Atenuarea cicatricilor:</b> extrem de eficient pe cicatrici post-acneice, post-operatorii sau post-traumatice.</li>
            <li><b>Rejuvenare facială:</b> reduce ridurile fine, liniile de expresie și redă fermitatea.</li>
            <li><b>Uniformizarea texturii:</b> corectează porii dilatați și textura aspră.</li>
            <li><b>Diminuarea hiperpigmentării:</b> estompează petele cauzate de soare sau vârstă.</li>
            <li><b>Reducerea vergeturilor:</b> aplicabil și pe corp.</li>
          </ul>
          <h5>Protocol de tratament</h5>
          <p>Un plan complet implică de obicei 3–6 ședințe, la interval de 4–6 săptămâni, în funcție de problemele tratate.</p>
          <h5>Recuperare post-procedură</h5>
          <p>Pielea va fi roșie (similar unei arsuri solare ușoare) 24–48 de ore, după care se poate exfolia fin. Aplicarea riguroasă a unei creme cu SPF 50 este obligatorie în zilele următoare, pentru a preveni hiperpigmentarea.</p>
          <h5>Contraindicații majore</h5>
          <ul>
            <li>Acnee activă purulentă sau infecții cutanate locale (herpes simplex activ).</li>
            <li>Răni deschise, eczeme, dermatită, rozacee sau psoriazis în zona tratată.</li>
            <li>Istoric de cicatrici cheloide sau tulburări de coagulare.</li>
            <li>Femei însărcinate sau care alăptează.</li>
          </ul>`
      },
      {
        name: "Mezoterapie Glow Up",
        old: "450 lei", now: "350 lei",
        tag: "Infuzie de vitamine, acid hialuronic și aminoacizi",
        desc: `
          <p>Mezoterapia este o procedură estetică minim invazivă prin care se introduc în straturile profunde ale pielii substanțe nutritive precum acid hialuronic, vitamine, minerale și aminoacizi, pentru rejuvenare și hidratare. Tratamentul stimulează producția naturală de colagen și elastină, oferind un aspect mai ferm, luminos și vizibil întinerit.</p>
          <h5>Beneficii principale</h5>
          <ul>
            <li><b>Hidratare profundă:</b> redă elasticitatea pielii uscate sau deshidratate.</li>
            <li><b>Efect anti-aging:</b> estompează liniile fine și ridurile superficiale.</li>
            <li><b>Luminozitate:</b> uniformizează nuanța tenului și reduce semnele de oboseală.</li>
            <li><b>Tratamentul alopeciei:</b> stimulează creșterea și regenerarea firelor de păr.</li>
            <li><b>Reducerea imperfecțiunilor:</b> ameliorează cicatricile post-acneice și petele pigmentare.</li>
          </ul>
          <h5>Tipuri de mezoterapie</h5>
          <ul>
            <li><b>Injectabilă (cu ac):</b> substanțele active sunt introduse precis prin micro-injecții.</li>
            <li><b>Fracționată (cu microace):</b> aparat automatizat tip Dermapen care creează mii de micro-canale.</li>
            <li><b>Virtuală (fără ac):</b> electroporație — crește permeabilitatea pielii fără înțepături.</li>
          </ul>
          <h5>Protocol de tratament</h5>
          <p>Un plan complet implică de obicei 3–6 ședințe, la interval de 4–6 săptămâni.</p>
          <h5>Recuperare post-procedură</h5>
          <p>Pielea poate fi roșie 24–48 de ore, apoi se poate exfolia fin. SPF 50 este obligatoriu în zilele următoare.</p>
          <h5>Contraindicații importante</h5>
          <ul>
            <li>Sarcină și alăptare.</li>
            <li>Infecții active ale pielii (herpes, rozacee, psoriazis, eczeme, dermatită).</li>
            <li>Boli autoimune sau tulburări de coagulare a sângelui.</li>
          </ul>`
      },
      {
        name: "Hydro-Glow & Deep Cleanse",
        old: "450 lei", now: "350 lei",
        tag: "Curățare profundă, extracții și hidratare, cu radiofrecvență",
        desc: `<p>Ritual de curățare profundă, extracții și hidratare, finalizat cu radiofrecvență pentru fermitate și luminozitate.</p>${RF_BLOCK}`
      },
      {
        name: "Pro-Age & Collagen Booster",
        old: "400 lei", now: "300 lei",
        tag: "Ritual de lifting, hidratare și fermitate, cu radiofrecvență",
        desc: `<p>Ritual de lifting, hidratare și fermitate, susținut de radiofrecvență pentru un ten vizibil mai tânăr.</p>${RF_BLOCK}`
      },
      {
        name: "Flash Radiance & Detox",
        old: "", now: "Preț la cerere",
        tag: "Hidratare intensă, cu radiofrecvență",
        desc: `<p>Tratament pentru hidratare intensă, cu radiofrecvență — pentru un boost rapid de strălucire și detoxifiere.</p>${RF_BLOCK}`
      },
      {
        name: "Teenage Dream",
        old: "300 lei", now: "250 lei",
        tag: "Ritual complet pentru pielea tânără",
        desc: `
          <p>Tratament pentru pielea tânără: diagnosticare video, exfoliere, curățare profundă, extracții, drenaj și detoxifiere (manipul cald), oxigenare și infuzie (ultrasunete), mască, sigilare și calmare (manipul rece).</p>
          <p>Pielea adolescenților devine adesea mai reactivă și mai predispusă la exces de sebum și erupții, din cauza schimbărilor hormonale. O rutină corectă trebuie să fie simplă, blândă și consecventă, bazată pe patru pași esențiali.</p>
          <h5>Cei 4 pași pentru o piele tânără și sănătoasă</h5>
          <ul>
            <li><b>Curățare (de două ori pe zi):</b> gel de curățare blând, fără parfum sau sulfați. Evită produsele care usucă excesiv pielea.</li>
            <li><b>Hidratare:</b> chiar și tenul gras are nevoie de hidratare — o cremă non-comedogenică, cu textură lejeră.</li>
            <li><b>Protecție solară:</b> SPF 30 sau mai mare în fiecare dimineață.</li>
            <li><b>Tratament local (la nevoie):</b> ingrediente sigure pentru adolescenți, precum peroxidul de benzoil sau acidul salicilic.</li>
          </ul>
          <h5>Ce trebuie să eviți categoric</h5>
          <ul>
            <li>Nu sparge și nu stoarce coșurile — risc de cicatrici permanente și răspândirea bacteriilor.</li>
            <li>Nu folosi ingrediente agresive (retinol, vitamina C, peelinguri puternice) destinate tenului matur.</li>
            <li>Evită fast-food-ul, dulciurile și sucurile acidulate în exces.</li>
          </ul>`
      },
      {
        name: "Hollywood Peel",
        old: "500 lei", now: "400 lei",
        tag: "Carbon Peel — curățare profundă și strălucire instantanee",
        desc: `
          <p>Carbon Peel (cunoscut și ca Hollywood Peel sau Carbon Laser Facial) este un tratament dermatologic non-invaziv, ideal pentru curățarea profundă, exfolierea și întinerirea rapidă a tenului. Combină o mască pe bază de cărbune activ cu tehnologia laser Nd:YAG pentru a distruge impuritățile din pori și a stimula colagenul.</p>
          <h5>Cum funcționează</h5>
          <ul>
            <li><b>Aplicarea carbonului:</b> o loțiune cu microparticule de carbon activ pătrunde în pori și absoarbe sebumul și celulele moarte.</li>
            <li><b>Încălzirea laser:</b> laserul fixează blând carbonul în pori.</li>
            <li><b>Vaporizarea prin laser:</b> fasciculul este atras de culoarea neagră și distruge instantaneu particulele de cărbune împreună cu impuritățile.</li>
          </ul>
          <h5>Beneficii majore</h5>
          <ul>
            <li><b>Curățare profundă:</b> elimină sebumul, punctele negre și bacteriile responsabile de acnee.</li>
            <li><b>Micșorarea porilor:</b> căldura contractă porii dilatați.</li>
            <li><b>Exfoliere și luminozitate:</b> piele catifelată și radiantă imediat după ședință.</li>
            <li><b>Efect anti-aging:</b> stimulează colagenul, reducând liniile fine.</li>
          </ul>
          <p>Fără timp de recuperare — o ușoară roșeață câteva ore, apoi îți reiei activitățile imediat. Excelent pentru ten gras, mixt sau predispus la acnee, dar și pentru un plus de strălucire înainte de un eveniment important.</p>
          <h5>Protocol</h5>
          <p>Serii de 4–6 ședințe, la 1–2 săptămâni. Pentru menținere, o ședință lunară.</p>
          <h5>Contraindicații</h5>
          <ul>
            <li>Sarcină și alăptare.</li>
            <li>Infecții active sau leziuni (herpes, eczeme, răni deschise, arsuri).</li>
            <li>Tratamente recente cu retinoizi/retinol (ex. Roaccutane).</li>
            <li>Afecțiuni fotosensibilizante (lupus), epilepsie, diabet dezechilibrat sau boli de inimă.</li>
            <li>Expunere recentă intensă la soare (arsuri solare).</li>
          </ul>`
      }
    ]
  },
  {
    id: "tatuaje",
    label: "Îndepărtare tatuaje",
    note: "",
    items: [
      {
        name: "Îndepărtare cu laser PICO",
        old: "500 lei", now: "400 lei",
        tag: "Fragmentarea pigmentului cu laser — fără cicatrici",
        desc: `
          <p>Îndepărtarea tatuajelor cu laser este cea mai sigură și eficientă metodă modernă de eliminare a pigmenților din piele, acționând prin fragmentarea particulelor de tuș fără a distruge țesutul înconjurător. Se folosește atât pentru tatuaje corporale, cât și pentru ștergerea machiajului semipermanent — fără a rămâne cicatrici.</p>
          <h5>Cum funcționează procedura?</h5>
          <ul>
            <li><b>Dezintegrarea pigmentului:</b> fasciculul laser țintește exclusiv celulele colorate, spărgând tușul în particule minuscule.</li>
            <li><b>Eliminarea naturală:</b> sistemul limfatic preia micro-particulele și le elimină treptat în săptămânile următoare.</li>
            <li><b>Protecția pielii:</b> distribuție uniformă a energiei, care protejează epiderma împotriva cicatricilor.</li>
          </ul>
          <h5>Ce trebuie să știi</h5>
          <ul>
            <li>În medie 4–10 ședințe, în funcție de mărimea, vechimea și profunzimea tatuajului.</li>
            <li>Sesiunile se spațiază la 6–8 săptămâni, pentru vindecare.</li>
          </ul>
          <h5>Contraindicații</h5>
          <ul>
            <li>Sarcină și alăptare.</li>
            <li>Infecții active sau leziuni (herpes, eczeme, răni deschise, arsuri).</li>
            <li>Afecțiuni fotosensibilizante (lupus), epilepsie, diabet dezechilibrat sau boli de inimă.</li>
            <li>Expunere recentă intensă la soare.</li>
          </ul>`
      },
      {
        name: "Îndepărtare cu substanță alcalină",
        old: "600 lei", now: "500 lei",
        tag: "Remover alcalin — elimină orice culoare de pigment",
        desc: `
          <p>Îndepărtarea cu substanțe alcaline (remover alcalin) este o metodă bio-chimică non-laser, folosită în special pentru ștergerea micropigmentării (sprâncene, buze) sau a tatuajelor corporale mici. Cu ajutorul unui aparat de tatuat se introduce în piele o soluție cu pH ridicat (bază/alcalină), care emulsionează pigmentul și îl trage spre suprafață.</p>
          <h5>Cum funcționează</h5>
          <ul>
            <li><b>Introducerea soluției:</b> pielea se deschide ușor cu ace sterile și substanța alcalină se aplică direct pe pigment.</li>
            <li><b>Reacția chimică:</b> substanța desface legăturile dintre celule și moleculele de pigment, transformând cerneala într-o emulsie.</li>
            <li><b>Extracția:</b> pigmentul emulsionat este împins în exterior, formând o crustă în zilele următoare.</li>
          </ul>
          <h5>Avantaje față de laser</h5>
          <ul>
            <li><b>Elimină orice culoare:</b> inclusiv nuanțele deschise (alb, galben, verde) cu care laserul are dificultăți.</li>
            <li><b>Costuri adesea mai mici:</b> mai puține ședințe pentru pigmenții deschiși.</li>
            <li><b>Bun pentru reziduuri:</b> ideal pentru tatuaje vechi unde laserul nu mai dă rezultate.</li>
          </ul>
          <h5>Riscuri și dezavantaje</h5>
          <ul>
            <li>Risc de cicatrici cheloide dacă adâncimea e prea mare sau îngrijirea post-procedură nu se respectă.</li>
            <li>Vindecare vizibilă: crustele groase nu trebuie smulse 7–14 zile.</li>
            <li>Mai dureros, iar procedura durează puțin mai mult decât îndepărtarea cu laser.</li>
          </ul>
          <h5>Contraindicații absolute</h5>
          <ul>
            <li>Sarcină și alăptare.</li>
            <li>Boli oncologice sau chimioterapie.</li>
            <li>Predispoziție la cicatrici cheloide.</li>
            <li>Boli autoimune sau de piele active (psoriazis, vitiligo, eczeme, dermatite).</li>
            <li>Infecții active în zonă (herpes, acnee severă, infecții bacteriene/fungice).</li>
            <li>Tatuaj mai recent de 1–2 luni.</li>
            <li>Diabet zaharat necontrolat.</li>
            <li>Expunere recentă la soare (bronz proaspăt).</li>
          </ul>`
      },
      {
        name: "Îndepărtare laser & substanță alcalină",
        old: "1000 lei", now: "700 lei",
        tag: "Protocol mixt — pentru o piele perfect curată",
        desc: `
          <p>Cele două metode funcționează complet diferit și se folosesc adesea complementar pentru o piele perfect curată. Laserul este ideal pentru culorile închise, iar removerul alcalin excelează acolo unde laserul eșuează: nuanțe deschise, pigmenți nude sau machiaj semipermanent.</p>
          <h5>De ce se combină cele două metode?</h5>
          <ul>
            <li><b>Efectul de „virare” a culorii:</b> unele tatuaje cosmetice tratate cu laser virează spre gri, maro sau verde din cauza oxizilor de fier.</li>
            <li>Laserul nu mai recunoaște noua nuanță — se intervine cu removerul alcalin.</li>
            <li><b>Curățare totală:</b> laserul curăță baza neagră, iar substanța alcalină elimină ultimele resturi de pigmenți deschiși sau încăpățânați.</li>
          </ul>
          <h5>Recomandări esențiale</h5>
          <ul>
            <li>6–8 săptămâni de pauză între proceduri, pentru vindecare completă.</li>
            <li>Nu smulge crustele formate de removerul alcalin — risc de cicatrici adânci sau hiperpigmentare.</li>
            <li>Protecție solară SPF 50+ câteva luni, pentru a evita pătarea definitivă.</li>
          </ul>
          <h5>Contraindicații principale</h5>
          <p>Sarcina, alăptarea, predispoziția la cicatrici cheloide, bolile autoimune, infecțiile active în zona tratată și expunerea recentă la soare sau solar.</p>`
      }
    ]
  },
  {
    id: "sprancene",
    label: "Laminare sprâncene",
    note: "",
    items: [
      {
        name: "Stilizare & laminare sprâncene",
        old: "300 lei", now: "220 lei",
        tag: "Armonizare, definire și fixare a firelor — efect 4–6 săptămâni",
        desc: `
          <p>Stilizarea sprâncenelor este un proces profesional de armonizare, conturare și definire în funcție de fizionomia fiecărei persoane. Spre deosebire de pensatul clasic, care doar curăță firele în exces, stilizarea creează o formă echilibrată, corectează asimetriile și pune în valoare trăsăturile feței.</p>
          <p>Laminarea este un tratament semi-permanent care disciplinează, fixează și oferă volum firelor, menținându-le ordonate 4–6 săptămâni. Funcționează ca o „permanentă” pentru sprâncene: relaxează legăturile de keratină și permite rearanjarea firului în direcția dorită — ideal pentru acoperirea golurilor sau îmblânzirea firelor rebele.</p>
          <h5>Îngrijire ulterioară (primele 24–48 h)</h5>
          <ul>
            <li>Nu uda sprâncenele și evită aburul (dușuri fierbinți, saună).</li>
            <li>Nu aplica machiaj sau demachiante pe bază de ulei în zonă.</li>
            <li>Pieptănă-le zilnic în sus cu o perie curată pentru a menține forma.</li>
            <li>Hidratează-le după 48 h cu ulei de ricin sau un serum special.</li>
          </ul>
          <h5>Contraindicații</h5>
          <ul>
            <li>Afecțiuni cutanate active (eczeme, psoriazis, dermatită seboreică, rozacee) pe frunte sau în zonă.</li>
            <li>Leziuni sau răni deschise, arsuri solare, acnee severă în jurul sprâncenelor.</li>
            <li>Infecții oculare sau ale pielii (conjunctivită, blefarită, urcior).</li>
            <li>Alergii la keratină, acid tioglicolic sau alte substanțe de permanent.</li>
            <li>Retinol, acizi AHA/BHA sau peelinguri în ultimele 72 h.</li>
            <li>Izotretinoin (ex. Roaccutane) în ultimele 6–12 luni.</li>
            <li>Microblading, micropigmentare sau intervenții faciale nevindecate.</li>
            <li>Sarcină și alăptare.</li>
            <li>Pensat/epilat cu ceară cu mai puțin de 24–48 h înainte.</li>
            <li>Sprâncene extrem de rare sau deteriorate.</li>
          </ul>`
      }
    ]
  },
  {
    id: "hifu",
    label: "HIFU",
    note: "",
    items: [
      { name: "HIFU gușă", old: "350 lei", now: "250 lei", tag: "Lifting non-chirurgical al zonei submentoniere", desc: HIFU_GENERIC },
      { name: "HIFU full face", old: "500 lei", now: "400 lei", tag: "Lifting facial complet, fără chirurgie", desc: HIFU_GENERIC },
      { name: "HIFU full face & gușă", old: "850 lei", now: "600 lei", tag: "Față completă plus zona submentonieră", desc: HIFU_GENERIC },
      {
        name: "HIFU brațe", old: "500 lei", now: "400 lei",
        tag: "Tonifiere și lifting pentru zona tricepsului",
        desc: `
          <p>HIFU pentru brațe este o procedură non-invazivă ideală pentru eliminarea aspectului de „piele lăsată” (aripi de liliac) din zona tricepsului și pentru distrugerea depozitelor localizate de grăsime. Ultrasunetele focalizate pătrund în straturile profunde, stimulând colagenul și elastina, pentru lifting, tonifiere și remodelare fără operație, ace sau perioadă de recuperare.</p>
          <h5>Cum funcționează pe brațe</h5>
          <ul>
            <li><b>Lifting și fermitate:</b> contractă fibrele de colagen existente și declanșează formarea unora noi.</li>
            <li><b>Lipoliză (slăbire localizată):</b> distruge membranele celulelor adipoase, eliminate apoi prin sistemul limfatic.</li>
            <li><b>Timp zero de recuperare:</b> pielea nu este lezată la suprafață.</li>
          </ul>
          <p>Senzație: disconfort minim, ca o căldură locală. Primele efecte apar imediat, rezultatul final în 2–3 luni.</p>
          <h5>Contraindicații</h5>
          <ul>
            <li>Infecții cutanate active (răni deschise, herpes, infecții bacteriene/fungice).</li>
            <li>Sarcină sau alăptare.</li>
            <li>Boli autoimune sau tulburări de coagulare.</li>
            <li>Diabet necontrolat; epilepsie.</li>
            <li>Pacemaker / stimulatoare electrice; implanturi metalice.</li>
            <li>Afecțiuni oncologice; dermatite, psoriazis activ sau acnee severă în zonă.</li>
          </ul>`
      },
      {
        name: "HIFU zona fesieră", old: "600 lei", now: "500 lei",
        tag: "Efect „butt-lift”, tonifiere și reducerea celulitei",
        desc: `
          <p>HIFU pentru zona fesieră este o procedură non-invazivă pentru un efect de „butt-lift”, tonifiere intensă și reducerea celulitei. Ultrasunetele focalizate penetrează straturile profunde, stimulând colagenul nou și topind micro-depozitele de grăsime localizată.</p>
          <h5>Beneficii principale</h5>
          <ul>
            <li><b>Lifting nechirurgical:</b> ridică țesuturile lăsate prin scurtarea fibrelor de colagen.</li>
            <li><b>Tonifiere profundă:</b> piele mai fermă, compactă și elastică.</li>
            <li><b>Diminuarea celulitei:</b> netezește aspectul de „coajă de portocală”.</li>
            <li><b>Remodelare și contur:</b> formă mai bombată și mai bine definită.</li>
            <li><b>Fără timp de recuperare.</b></li>
          </ul>
          <p>Efect parțial imediat; rezultate maxime în 2–3 luni. O singură procedură se poate menține până la un an.</p>
          <h5>Contraindicații importante</h5>
          <ul>
            <li>Sarcină și alăptare.</li>
            <li>Afecțiuni vasculare severe (tromboză, varice pronunțate în zonă).</li>
            <li>Tulburări de coagulare.</li>
            <li>Boli autoimune active sau epilepsie.</li>
            <li>Implanturi metalice sau fillere permanente în zona fesieră.</li>
          </ul>`
      },
      {
        name: "HIFU coapse", old: "750 lei", now: "600 lei",
        tag: "Topirea grăsimii localizate, celulită și lifting",
        desc: `
          <p>HIFU pentru coapse este o procedură non-invazivă pentru topirea depozitelor de grăsime localizată, eliminarea celulitei și liftingul pielii lăsate. Ultrasunetele focalizate pătrund adânc în țesut, stimulând colagenul și distrugând celulele adipoase fără a afecta suprafața pielii.</p>
          <h5>Beneficii</h5>
          <ul>
            <li><b>Lipoliză:</b> distruge celulele de grăsime (coapse interior, exterior, față sau spate).</li>
            <li><b>Lifting și fermitate:</b> stimulează neocolageneza, tratând pielea flască.</li>
            <li><b>Reducerea celulitei:</b> uniformizează aspectul și îmbunătățește elasticitatea.</li>
            <li><b>Non-invaziv:</b> fără incizii, ace sau recuperare.</li>
          </ul>
          <h5>Contraindicații</h5>
          <ul>
            <li>Afecțiuni venoase severe (varice proeminente, tromboflebită profundă).</li>
            <li>Leziuni cutanate (răni deschise, infecții, dermatite, inflamații).</li>
            <li>Injectări cu silicon sau alte substanțe permanente în zonă.</li>
            <li>Sarcină și alăptare.</li>
            <li>Pacemaker, defibrilatoare sau implanturi metalice în zonă.</li>
            <li>Tulburări de coagulare / tratament anticoagulant.</li>
            <li>Boli sistemice grave (cancer, epilepsie, diabet decompensat, afecțiuni endocrine).</li>
            <li>Boli autoimune active (lupus, vitiligo, psoriazis, Zona Zoster).</li>
          </ul>`
      },
      {
        name: "HIFU abdomen", old: "650 lei", now: "500 lei",
        tag: "Reducerea stratului adipos și tonifiere abdominală",
        desc: `
          <p>HIFU pentru abdomen este o procedură non-invazivă pentru reducerea stratului adipos localizat, eliminarea pielii laxe și tonifierea profundă a zonei abdominale. Ultrasunetele focalizate acționează direct în profunzimea țesutului, fără a afecta suprafața pielii.</p>
          <h5>Cum funcționează pe abdomen</h5>
          <ul>
            <li><b>Distrugerea celulelor adipoase:</b> ultrasunetele sparg membranele celulelor de grăsime, eliminate apoi natural.</li>
            <li><b>Stimularea colagenului:</b> căldura contractă fibrele elastice și declanșează colagen nou.</li>
            <li><b>Skin tightening:</b> piele mai fermă, mai netedă și contur abdominal îmbunătățit.</li>
          </ul>
          <h5>Beneficii principale</h5>
          <ul>
            <li>Fără chirurgie, anestezie, incizii sau recuperare.</li>
            <li>Tratament țintit (abdomen inferior sub ombilic sau superior).</li>
            <li>Excelent post-sarcină sau după o slăbire rapidă.</li>
          </ul>
          <h5>Contraindicații</h5>
          <ul>
            <li>Sarcină și alăptare.</li>
            <li>Dispozitive electronice implantate (pacemaker, defibrilatoare, stimulatoare).</li>
            <li>Implanturi metalice în zonă, inclusiv steriletul metalic (DIU).</li>
            <li>Boli oncologice active.</li>
            <li>Răni deschise, dermatite, iritații, infecții sau cicatrici recente pe abdomen.</li>
            <li>Tulburări de coagulare / anticoagulante.</li>
            <li>Boli autoimune active (lupus, vitiligo, scleroză multiplă, psoriazis).</li>
            <li>Diabet decompensat, afecțiuni endocrine grave sau epilepsie.</li>
          </ul>`
      },
      {
        name: "HIFU full body", old: "2000 lei", now: "1500 lei",
        tag: "Remodelare corporală completă — mai multe zone",
        desc: `
          <p>HIFU Full Body este o procedură non-invazivă pentru remodelare corporală, reducerea grăsimii localizate și liftingul pielii. Ultrasunetele focalizate pătrund adânc în țesut, distrugând celulele adipoase și stimulând colagenul și elastina.</p>
          <h5>Cum funcționează</h5>
          <ul>
            <li><b>Topirea grăsimii:</b> pierdere de până la 4 cm în circumferință pe ședință.</li>
            <li><b>Lifting non-chirurgical:</b> acționează pe stratul SMAS, strângând pielea lăsată.</li>
            <li><b>Neocolageneză:</b> regenerare a colagenului timp de 3–6 luni după tratament.</li>
          </ul>
          <h5>Zone incluse</h5>
          <ul>
            <li>Abdomen și talie (flancuri)</li>
            <li>Coapse (interior, exterior)</li>
            <li>Fese</li>
            <li>Brațe (zona inferioară)</li>
            <li>Spate (zona liniei sutienului)</li>
          </ul>
          <h5>Avantaje</h5>
          <ul>
            <li>Fără timp de recuperare.</li>
            <li>Metodă aprobată FDA, sigură și non-chirurgicală.</li>
            <li>Rezultate de lungă durată — efect maxim la 2–3 luni.</li>
          </ul>
          <h5>Contraindicații</h5>
          <ul>
            <li>Sarcină sau alăptare.</li>
            <li>Stimulatoare cardiace; implanturi metalice în zona tratată.</li>
            <li>Afecțiuni oncologice sau cronice severe.</li>
            <li>Răni deschise pe piele.</li>
            <li>Boli autoimune active; tulburări de coagulare.</li>
          </ul>`
      },
      { name: "HIFU full face & full body", old: "2600 lei", now: "2000 lei", tag: "Pachetul complet — față și corp", desc: HIFU_GENERIC }
    ]
  },
  {
    id: "injectari",
    label: "Injectări",
    note: "Serviciu disponibil curând.",
    items: []
  }
];
