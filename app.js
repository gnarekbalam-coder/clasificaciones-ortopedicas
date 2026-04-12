function makeItem(id, name, region, type, summary, use, imaging, notes, keywords, levels) {
  return { id, name, region, type, summary, use, imaging, notes, keywords, levels };
}

const classifications = [
  makeItem("allman", "Allman", "Clavicle", "Fractura", "Clasifica fracturas de clavicula por tercio afectado.", "Sirve para ordenar fracturas mediales, diafisarias y distales de clavicula.", "Radiografias AP y proyeccion cefalica.", "La mayoria ocurren en el tercio medio.", ["clavicula", "tercio medio", "tercio distal"], [
    { title: "Grupo I", description: "Tercio medio." },
    { title: "Grupo II", description: "Tercio distal." },
    { title: "Grupo III", description: "Tercio proximal." }
  ]),
  makeItem("neer-clavicle", "Neer distal clavicle", "Clavicle", "Fractura", "Subclasifica fracturas distales de clavicula por estabilidad.", "Ayuda a diferenciar lesiones estables de las que suelen requerir fijacion.", "AP clavicula, Zanca y valoracion coracoclavicular.", "Las tipo II suelen ser las mas inestables.", ["clavicula distal", "neer", "coracoclavicular"], [
    { title: "Tipo I", description: "Ligamentos intactos y minima inestabilidad." },
    { title: "Tipo II", description: "Trazo medial al complejo ligamentario con desplazamiento." },
    { title: "Tipo III", description: "Extension intraarticular hacia la acromioclavicular." }
  ]),
  makeItem("robinson", "Robinson", "Clavicle", "Fractura", "Clasifica fracturas de clavicula por localizacion anatomica y desplazamiento.", "Muy util para ordenar fracturas del tercio medial, diafisario y lateral, especialmente en estudios y comunicacion quirurgica.", "Radiografias AP, cefalica y, si hace falta, CT en extremos medial o lateral complejos.", "El grupo 2 corresponde al tercio medio; los subgrupos B suelen implicar desplazamiento o conminucion significativa.", ["robinson", "clavicula", "midshaft", "desplazada"], [
    { title: "Tipo 1", description: "Fracturas del tercio medial de clavicula." },
    { title: "Tipo 2A", description: "Fracturas diafisarias minimamente desplazadas." },
    { title: "Tipo 2B", description: "Fracturas diafisarias desplazadas o conminutas." },
    { title: "Tipo 3", description: "Fracturas del tercio lateral, con estabilidad variable segun ligamentos coracoclaviculares." }
  ]),
  makeItem("rockwood", "Rockwood", "Shoulder", "Luxacion / Ligamentaria", "Clasifica lesiones acromioclaviculares por desplazamiento y ligamentos.", "Base practica para separar lesiones AC leves de lesiones complejas.", "Radiografias AP, Zanca y comparacion coracoclavicular.", "Los tipos altos suelen requerir valoracion quirurgica.", ["hombro", "acromioclavicular", "luxacion"], [
    { title: "Tipo I", description: "Esguince AC sin desplazamiento." },
    { title: "Tipo II", description: "Rotura AC con elevacion leve." },
    { title: "Tipo III", description: "Rotura AC y CC con desplazamiento superior." },
    { title: "Tipo IV", description: "Desplazamiento posterior." },
    { title: "Tipo V", description: "Desplazamiento superior severo." },
    { title: "Tipo VI", description: "Desplazamiento inferior raro." }
  ]),
  makeItem("neer-proximal-humerus", "Neer proximal humerus", "Shoulder", "Fractura", "Describe fracturas de humero proximal por numero de partes desplazadas.", "Ayuda a decidir entre manejo conservador, fijacion o artroplastia.", "AP, Y escapular, axilar y CT si hay duda.", "Cada parte cuenta si se desplaza mas de 1 cm o se angula mas de 45 grados.", ["humero proximal", "partes", "cabeza humeral"], [
    { title: "Una parte", description: "Sin fragmentos desplazados relevantes." },
    { title: "Dos partes", description: "Un fragmento desplazado." },
    { title: "Tres partes", description: "Dos fragmentos desplazados." },
    { title: "Cuatro partes", description: "Tres fragmentos desplazados con mayor riesgo vascular." }
  ]),
  makeItem("ideberg", "Ideberg", "Shoulder", "Fractura glenoidea", "Clasifica fracturas de glenoides escapular por localizacion y extension.", "Muy util cuando hay inestabilidad glenohumeral asociada a fractura del reborde o de la glenoides.", "CT con reconstruccion 3D mejora la definicion del patron.", "Las fracturas articulares desplazadas pueden alterar de forma importante la estabilidad.", ["glenoides", "escapula", "reborde anterior"], [
    { title: "Tipo I", description: "Fractura del reborde glenoideo." },
    { title: "Tipo II", description: "Trazo hacia la glenoides inferior." },
    { title: "Tipo III", description: "Trazo hacia la glenoides superior." },
    { title: "Tipo IV-VI", description: "Patrones transversos y combinados mas extensos." }
  ]),
  makeItem("hertel", "Criterios de Hertel", "Shoulder", "Fractura", "Predictores radiograficos de isquemia de la cabeza humeral en fracturas proximales intracapsulares.", "Ayudan a estimar riesgo biologico y a complementar la lectura de Neer o Codman en humero proximal.", "AP, Y escapular, axilar y CT; evaluar calcar medial y bisagra medial.", "Son utiles para estratificar riesgo, pero no sustituyen el juicio clinico ni predicen por si solos toda osteonecrosis.", ["hertel", "isquemia", "cabeza humeral", "calcar", "bisagra medial"], [
    { title: "Extension metafisaria < 8 mm", description: "Poca extension calcarica posteromedial se asocia a mayor riesgo de compromiso vascular." },
    { title: "Bisagra medial desplazada > 2 mm", description: "La perdida de la bisagra medial aumenta inestabilidad e isquemia potencial." },
    { title: "Trazo anatomico del cuello", description: "Las fracturas que comprometen el cuello anatomico incrementan la preocupacion por perfusion de la cabeza." }
  ]),
  makeItem("codman", "Codman", "Shoulder", "Fractura", "Describe fracturas del humero proximal a partir de cuatro segmentos anatomicos clasicos.", "Base conceptual para clasificaciones modernas del humero proximal y para entender combinaciones tipo LEGO.", "AP, Y escapular, axilar y CT si el patron es complejo.", "Los segmentos son cabeza, troquiter, troquin y diafisis; la combinacion de partes orienta complejidad y manejo.", ["codman", "humero proximal", "4 partes", "lego"], [
    { title: "Una parte", description: "Ningun segmento principal esta desplazado de forma relevante." },
    { title: "Dos partes", description: "Un segmento se separa del resto, como cuello quirurgico o una tuberosidad." },
    { title: "Tres partes", description: "Dos segmentos estan desplazados, con mayor complejidad reconstructiva." },
    { title: "Cuatro partes", description: "Separacion de cabeza, tuberosidades y diafisis; alto riesgo biologico y mecanico." }
  ]),
  makeItem("mayo-fjd", "Mayo-FJD", "Shoulder", "Fractura", "Clasificacion del humero proximal basada en reconocimiento de patrones.", "Busca identificar el patron principal antes de aplicar criterios de desplazamiento, con buena reproducibilidad especialmente en CT.", "Radiografias AP, Y, axilar y CT con reconstrucciones para reconocer el patron.", "Agrupa patrones de tuberosidades, cuello y cabeza; CT suele mejorar el acuerdo interobservador.", ["mayo-fjd", "humero proximal", "patrones", "shoulder"], [
    { title: "Tuberosidades", description: "Fracturas aisladas del troquiter o troquin, con o sin luxacion asociada." },
    { title: "Cuello quirurgico", description: "Patron del cuello quirurgico, con o sin tuberosidades asociadas." },
    { title: "Varo posteromedial / valgo impactado", description: "Patrones impactados con inclinacion o rotacion caracteristica de la cabeza." },
    { title: "Cabeza comprometida", description: "Incluye cabeza luxada, head split o impresion cefalica." }
  ]),
  makeItem("mason", "Mason", "Elbow", "Fractura", "Clasifica fracturas de cabeza radial por desplazamiento y conminucion.", "Sirve para anticipar bloqueo mecanico e inestabilidad del codo.", "AP y lateral de codo; CT cuando la conminucion no es clara.", "Versiones modernas agregan luxacion asociada.", ["codo", "cabeza radial", "bloqueo"], [
    { title: "Tipo I", description: "No desplazada o minima." },
    { title: "Tipo II", description: "Marginal desplazada." },
    { title: "Tipo III", description: "Conminuta de toda la cabeza radial." },
    { title: "Tipo IV", description: "Fractura con luxacion del codo." }
  ]),
  makeItem("regan-morrey", "Regan-Morrey", "Elbow", "Fractura", "Clasifica fracturas de la coronoides por tamano del fragmento.", "Muy usada en triada terrible e inestabilidad de codo.", "Lateral de codo y CT para definir altura del fragmento.", "Fragmentos grandes se asocian a mas inestabilidad.", ["coronoides", "triada terrible", "codo"], [
    { title: "Tipo I", description: "Avulsion de la punta." },
    { title: "Tipo II", description: "Menos del 50 por ciento de la altura." },
    { title: "Tipo III", description: "Mas del 50 por ciento de la altura." }
  ]),
  makeItem("morrey-terrible", "Terrible triad pattern", "Elbow", "Lesion combinada", "Patron de codo con luxacion, cabeza radial y coronoides.", "No es una escala numerica clasica, pero se usa como patron de alto riesgo para inestabilidad.", "Radiografias y CT para plan quirurgico.", "Exige descartar lesion ligamentaria extensa.", ["triada terrible", "codo", "luxacion"], [
    { title: "Componentes", description: "Luxacion posterolateral, fractura de cabeza radial y fractura de coronoides." },
    { title: "Importancia", description: "Alta tendencia a rigidez e inestabilidad residual." }
  ]),
  makeItem("fernandez", "Fernandez", "Wrist", "Fractura", "Clasificacion del radio distal basada en mecanismo.", "Ordena fracturas de muneca segun patron biomecanico.", "Serie de muneca y CT para patrones articulares.", "Es mas orientada al mecanismo que Colles o Smith.", ["muneca", "radio distal", "mecanismo"], [
    { title: "Tipo I", description: "Bending fracture." },
    { title: "Tipo II", description: "Shear fracture." },
    { title: "Tipo III", description: "Compression fracture." },
    { title: "Tipo IV", description: "Avulsion con luxacion radiocarpiana." },
    { title: "Tipo V", description: "Alta energia combinada." }
  ]),
  makeItem("frykman", "Frykman", "Wrist", "Fractura", "Clasifica fracturas de radio distal segun compromiso articular y de ulna distal.", "Ayuda a recordar si hay extension a radiocarpiana o radioulnar distal.", "Radiografia AP y lateral.", "Menos usada para decisiones modernas que otras clasificaciones, pero frecuente en docencia.", ["frykman", "radio distal", "ulna distal"], [
    { title: "I-II", description: "Extraarticulares con o sin fractura de ulna distal." },
    { title: "III-IV", description: "Compromiso radiocarpiano con o sin ulna distal." },
    { title: "V-VI", description: "Compromiso radioulnar distal con o sin ulna distal." },
    { title: "VII-VIII", description: "Compromiso de ambas articulaciones con o sin ulna distal." }
  ]),
  makeItem("mayfield", "Mayfield", "Wrist", "Inestabilidad", "Progresion de inestabilidad perilunar por etapas.", "Clave para entender lesion escafolunar y luxacion lunada.", "Serie de muneca, lateral estricta y CT si hace falta.", "La secuencia avanza de radial a cubital.", ["perilunar", "escafolunar", "lunate"], [
    { title: "Estadio I", description: "Disrupcion escafolunar." },
    { title: "Estadio II", description: "Disrupcion capitolunar." },
    { title: "Estadio III", description: "Disrupcion lunotriquetral." },
    { title: "Estadio IV", description: "Luxacion lunada." }
  ]),
  makeItem("herbert", "Herbert", "Wrist", "Fractura escafoides", "Clasifica fracturas de escafoides y pseudoartrosis.", "Util para trauma agudo y problemas de consolidacion del escafoides.", "Radiografias dedicadas y CT de escafoides.", "Las fracturas inestables y desplazadas cambian manejo.", ["escafoides", "herbert", "pseudoartrosis"], [
    { title: "Tipo A", description: "Estables agudas." },
    { title: "Tipo B", description: "Inestables agudas." },
    { title: "Tipo C", description: "Retraso de union." },
    { title: "Tipo D", description: "No union establecida." }
  ]),
  makeItem("rolando-bennett", "Bennett / Rolando", "Hand", "Fractura", "Patrones clasicos en la base del primer metacarpiano.", "Muy util en trauma de pulgar y articulacion carpometacarpiana.", "AP, oblicua y lateral del pulgar.", "Bennett es de dos fragmentos; Rolando es conminuta.", ["mano", "pulgar", "bennett", "rolando"], [
    { title: "Bennett", description: "Fractura-luxacion intraarticular de dos fragmentos." },
    { title: "Rolando", description: "Fractura intraarticular conminuta en Y o T." }
  ]),
  makeItem("eaton", "Eaton", "Hand", "Artrosis / Rizartrosis", "Clasifica la rizartrosis del pulgar por hallazgos radiograficos del trapeciometacarpiano.", "Ayuda a estadificar la artrosis CMC del pulgar y a comunicar gravedad estructural.", "Proyecciones AP, oblicua, lateral verdadera o Robert del pulgar.", "La severidad radiografica no siempre se correlaciona con dolor o funcion clinica.", ["rizartrosis", "cmc pulgar", "trapeciometacarpiana"], [
    { title: "Etapa I", description: "Contornos articulares conservados con ensanchamiento sutil por sinovitis o laxitud; sin osteofitos significativos." },
    { title: "Etapa II", description: "Leve estrechamiento articular con osteofitos o cuerpos libres menores de 2 mm." },
    { title: "Etapa III", description: "Estrechamiento avanzado, esclerosis o quistes subcondrales y osteofitos mayores de 2 mm; la articulacion escafotrapecial se mantiene." },
    { title: "Etapa IV", description: "Cambios avanzados como etapa III mas artrosis escafotrapecial." }
  ]),
  makeItem("gustilo-anderson", "Gustilo-Anderson", "General Trauma", "Fractura abierta", "Estratifica fracturas abiertas por herida y dano de partes blandas.", "Fundamental para antibioticos, debridacion y cobertura.", "La clasificacion integra examen de herida y radiografia.", "Idealmente se confirma despues del primer debridamiento.", ["abierta", "partes blandas", "contaminacion"], [
    { title: "Tipo I", description: "Herida limpia menor de 1 cm." },
    { title: "Tipo II", description: "Herida mayor de 1 cm sin perdida extensa." },
    { title: "Tipo IIIA", description: "Dano severo con cobertura osea suficiente." },
    { title: "Tipo IIIB", description: "Exposicion osea o necesidad de colgajo." },
    { title: "Tipo IIIC", description: "Lesion arterial con reparacion requerida." }
  ]),
  makeItem("ao-ota", "AO / OTA", "General Trauma", "Sistema global", "Sistema alfanumerico amplio para fracturas por hueso y morfologia.", "Sirve para documentacion formal, investigacion y comunicacion entre equipos.", "Requiere radiografia ortogonal y con frecuencia CT.", "Es el lenguaje mas universal pero el mas extenso.", ["ao", "ota", "segmento", "morfologia"], [
    { title: "Tipo A", description: "Patron simple o extraarticular." },
    { title: "Tipo B", description: "Patron en cuna o parcial articular." },
    { title: "Tipo C", description: "Patron complejo o articular completo." }
  ]),
  makeItem("tscherne", "Tscherne", "General Trauma", "Partes blandas", "Clasifica dano de tejidos blandos en fracturas cerradas y abiertas.", "Aporta gravedad del dano mas alla del trazo oseo.", "Evaluacion clinica de piel, musculo y contaminacion.", "Importante en trauma de alta energia.", ["tscherne", "partes blandas", "cerrada"], [
    { title: "Cerrada 0-3", description: "Desde contusion minima hasta degloving o sindrome compartimental." },
    { title: "Abierta 1-4", description: "Desde herida limpia hasta amputacion subtotal o dano vascular grave." }
  ]),
  makeItem("lund-browder", "Lund-Browder", "General Trauma", "Quemaduras", "Esquema para estimar el porcentaje de superficie corporal quemada ajustado por edad.", "Es la referencia mas precisa para calcular TBSA en ninos y tambien util en adultos cuando se busca mayor exactitud.", "Valoracion clinica de quemaduras de espesor parcial o total sobre esquema corporal anterior y posterior.", "Supera a la regla de los 9 cuando la edad modifica la proporcion cabeza-extremidades o cuando hay quemaduras irregulares.", ["lund-browder", "quemaduras", "tbsa", "superficie corporal"], [
    { title: "Cabeza y cuello", description: "El porcentaje cambia con la edad, mayor en lactantes y menor conforme crecen." },
    { title: "Tronco", description: "Se divide en superficies anterior y posterior para sumar area afectada." },
    { title: "Extremidades", description: "Cada segmento tiene ponderacion segun edad y lateralidad para un calculo mas fino." }
  ]),
  makeItem("rule-of-nines", "Rule of Nines (9%)", "General Trauma", "Quemaduras", "Metodo rapido para estimar superficie corporal quemada en adultos mediante bloques de 9 por ciento.", "Muy util en triage inicial y reanimacion temprana cuando se necesita una aproximacion inmediata.", "Valoracion clinica global de quemaduras de espesor parcial o total; menos exacta en ninos o en habitus extremos.", "En el adulto clasico: cabeza 9%, cada brazo 9%, tronco anterior 18%, tronco posterior 18%, cada pierna 18% y perine 1%.", ["rule of nines", "9%", "quemaduras", "tbsa", "wallace"], [
    { title: "Cabeza", description: "9% del total corporal en el adulto." },
    { title: "Cada miembro superior", description: "9% por brazo, con 4.5% anterior y 4.5% posterior." },
    { title: "Tronco", description: "18% anterior y 18% posterior." },
    { title: "Cada miembro inferior", description: "18% por pierna en el adulto." },
    { title: "Perine", description: "1% del total corporal." }
  ]),
  makeItem("salter-harris", "Salter-Harris", "Pediatrics", "Fisis", "Clasifica lesiones fisarias en trauma pediatrico.", "Base para estimar riesgo de alteracion del crecimiento.", "Radiografia simple; MRI si el trazo es sutil.", "Los tipos altos aumentan riesgo de arresto fisario.", ["pediatria", "fisis", "crecimiento"], [
    { title: "Tipo I", description: "Solo a traves de la fisis." },
    { title: "Tipo II", description: "Fisis y metafisis." },
    { title: "Tipo III", description: "Fisis y epifisis." },
    { title: "Tipo IV", description: "Metafisis, fisis y epifisis." },
    { title: "Tipo V", description: "Aplastamiento fisario." }
  ]),
  makeItem("gartland", "Gartland", "Pediatrics", "Fractura supracondilea", "Clasifica fracturas supracondileas de humero en ninos por desplazamiento.", "Muy importante para decidir reduccion cerrada y clavillos.", "AP y lateral de codo pediatrico.", "Las tipo III y IV tienen alto riesgo neurovascular.", ["gartland", "supracondilea", "pediatria"], [
    { title: "Tipo I", description: "No desplazada." },
    { title: "Tipo II", description: "Desplazada con cortical posterior integra parcial." },
    { title: "Tipo III", description: "Completamente desplazada." },
    { title: "Tipo IV", description: "Inestable en flexion y extension." }
  ]),
  makeItem("song", "Song", "Pediatrics", "Fractura condilo lateral", "Clasifica fracturas del condilo lateral humeral pediatrico.", "Ayuda a detectar patrones inestables aun con pequeno desplazamiento.", "Radiografia AP, lateral y oblicua interna.", "Lesiones minimamente desplazadas pueden ser inestables.", ["condilo lateral", "song", "pediatria"], [
    { title: "Etapa 1-2", description: "Fracturas tempranas y menos desplazadas." },
    { title: "Etapa 3-5", description: "Fracturas completas, inestables y desplazadas." }
  ]),
  makeItem("delbet", "Delbet", "Pediatrics", "Fractura", "Clasifica fracturas del cuello femoral pediatrico por localizacion anatomica.", "Ayuda a estimar riesgo de necrosis avascular, pseudoartrosis y deformidad del crecimiento.", "AP de pelvis y lateral de cadera; CT o MRI si la linea es sutil o para plan quirurgico.", "El riesgo de necrosis avascular es mayor en los patrones mas proximales, sobre todo el tipo I.", ["delbet", "cuello femoral", "pediatria", "necrosis avascular"], [
    { title: "Tipo I", description: "Transepifisaria; puede asociar luxacion de cadera y es la de peor pronostico vascular." },
    { title: "Tipo II", description: "Transcervical a traves del cuello femoral; clasica y de alto riesgo biologico." },
    { title: "Tipo III", description: "Cervicotrocanterica o basicervical; mas distal y con menor riesgo que I-II." },
    { title: "Tipo IV", description: "Intertrocanterica; la mas extracapsular y en general la de mejor pronostico." }
  ]),
  makeItem("ogden", "Ogden", "Pediatrics", "Fractura", "Clasifica fracturas-avulsion de la tuberosidad tibial en adolescentes y extiende Watson-Jones.", "Sirve para comunicar extension proximal al cartilago, conminucion y posible compromiso articular.", "AP y lateral de rodilla; CT si se sospecha extension intraarticular o patron complejo.", "Los subtipos B indican conminucion o desplazamiento mayor; los tipos IV-V suelen ser mas inestables y pueden asociar sindrome compartimental.", ["ogden", "tuberosidad tibial", "adolescente", "avulsion"], [
    { title: "Tipo I", description: "Avulsion distal de la tuberosidad; A simple, B conminuta o mas desplazada." },
    { title: "Tipo II", description: "El trazo progresa a la fisis proximal sin entrar claramente a la articulacion; A simple, B conminuta." },
    { title: "Tipo III", description: "Extension intraarticular hacia la superficie tibial proximal; A simple, B conminuta." },
    { title: "Tipo IV", description: "Avulsion de toda la epifisis proximal con extension posterior." },
    { title: "Tipo V", description: "Patron periostal en Y o combinacion de avulsion con fractura de la tibia proximal." }
  ]),
  makeItem("weiss", "Weiss", "Pediatrics", "Fractura condilo lateral", "Clasifica fracturas del condilo lateral humeral pediatrico por desplazamiento y congruencia articular.", "Muy util para decidir yeso, fijacion percutanea o reduccion abierta segun estabilidad articular.", "Radiografia AP, lateral y oblicua interna; artrograma o fluoroscopia si la superficie articular no es clara.", "Un desplazamiento mayor o igual a 2 mm aumenta la sospecha de inestabilidad; la incongruencia articular define la lesion mas severa.", ["weiss", "condilo lateral", "codo pediatrico", "desplazamiento"], [
    { title: "Tipo I", description: "Desplazamiento menor de 2 mm con superficie articular presumiblemente intacta." },
    { title: "Tipo II", description: "Desplazamiento de 2 mm o mas, pero con bisagra cartilaginosa o congruencia articular mantenida." },
    { title: "Tipo III", description: "Desplazamiento de 2 mm o mas con incongruencia o discontinuidad articular franca." }
  ]),
  makeItem("bado", "Bado", "Pediatrics", "Fractura-luxacion", "Clasifica lesiones de Monteggia por direccion de la luxacion de la cabeza radial y patron cubital.", "Ayuda a reconocer Monteggia y sus equivalentes en ninos, incluyendo deformidad plastica del cubito.", "AP y lateral de codo y antebrazo completos; siempre revisar la linea radiocapitelar.", "En pediatria puede haber deformidad plastica del cubito sin fractura evidente; si se pasa por alto, la cabeza radial puede quedar luxada cronica.", ["bado", "monteggia", "cabeza radial", "cubito", "pediatria"], [
    { title: "Tipo I", description: "Luxacion anterior de la cabeza radial con angulacion anterior del cubito o fractura diafisaria." },
    { title: "Tipo II", description: "Luxacion posterior o posterolateral de la cabeza radial con angulacion posterior del cubito." },
    { title: "Tipo III", description: "Luxacion lateral o anterolateral de la cabeza radial con fractura metafisaria proximal del cubito." },
    { title: "Tipo IV", description: "Luxacion anterior de la cabeza radial con fracturas de radio y cubito al mismo nivel." }
  ]),
  makeItem("tile", "Tile", "Pelvis", "Anillo pelvico", "Clasifica lesiones del anillo pelvico por estabilidad rotacional y vertical.", "Muy util para comunicar estabilidad global, gravedad y necesidad potencial de fijacion anterior o posterior.", "AP de pelvis, inlet, outlet y CT para definir compromiso posterior.", "Las lesiones tipo A son estables; las B son inestables en rotacion; las C son inestables en rotacion y verticalmente.", ["pelvis", "anillo", "inestabilidad", "tile"], [
    { title: "Tipo A", description: "Lesiones estables del anillo pelvico." },
    { title: "Tipo A1", description: "Avulsiones o fracturas que no comprometen la estabilidad del anillo." },
    { title: "Tipo A2", description: "Fracturas estables de alas iliacas o del anillo anterior con arco posterior intacto." },
    { title: "Tipo A3", description: "Fracturas transversas bajas del sacro o coccix sin inestabilidad del anillo." },
    { title: "Tipo B", description: "Inestabilidad rotacional con estabilidad vertical conservada." },
    { title: "Tipo B1", description: "Lesion en libro abierto por compresion anteroposterior externa." },
    { title: "Tipo B2", description: "Compresion lateral con rotacion interna del hemipelvis." },
    { title: "Tipo B3", description: "Lesiones bilaterales tipo B o combinadas con inestabilidad rotacional." },
    { title: "Tipo C", description: "Inestabilidad rotacional y vertical." },
    { title: "Tipo C1", description: "Lesion unilateral con desplazamiento vertical." },
    { title: "Tipo C2", description: "Lesion tipo C en un lado y tipo B en el otro." },
    { title: "Tipo C3", description: "Lesiones bilaterales tipo C con inestabilidad completa." }
  ]),
  makeItem("young-burgess", "Young-Burgess", "Pelvis", "Mecanismo", "Clasifica lesiones del anillo pelvico por mecanismo: compresion lateral, compresion anteroposterior o cizallamiento vertical.", "Muy util en trauma inicial porque el mecanismo ayuda a anticipar sangrado, lesion posterior y patron de inestabilidad.", "AP de pelvis y CT; inlet y outlet ayudan a definir el patron.", "LC I suele ser mas estable; APC II-III y VS suelen asociarse a mayor inestabilidad y necesidad de control hemorragico.", ["pelvis", "young-burgess", "compresion lateral", "open book"], [
    { title: "LC I", description: "Compresion lateral con fracturas por impaccion sacra y ramas pubicas ipsilaterales." },
    { title: "LC II", description: "Compresion lateral con lesion posterior tipo creciente del ala iliaca o articulacion sacroiliaca." },
    { title: "LC III", description: "Patron windswept: compresion lateral ipsilateral con apertura contralateral." },
    { title: "APC I", description: "Leve apertura anterior con ensanchamiento minimo de la sinfisis; ligamentos posteriores conservados." },
    { title: "APC II", description: "Libro abierto con rotacion externa, lesion de ligamentos anteriores SI y del piso pelvico anterior; inestabilidad rotacional." },
    { title: "APC III", description: "Disrupcion completa anterior y posterior con inestabilidad rotacional y vertical." },
    { title: "VS", description: "Cizallamiento vertical con desplazamiento cefalico del hemipelvis." },
    { title: "CM", description: "Mecanismo combinado con elementos de mas de un patron." }
  ]),
  makeItem("letournel", "Letournel", "Pelvis", "Acetabulo", "Clasifica fracturas acetabulares en cinco patrones elementales y cinco asociados.", "Es la referencia clasica para describir fracturas del acetabulo y planear el abordaje quirurgico.", "AP de pelvis, proyecciones de Judet y CT con reconstrucciones para definir columnas y pared posterior.", "La calidad de la reduccion anatomica pesa mas en el pronostico que la etiqueta sola de la clasificacion.", ["acetabulo", "judet", "columnas", "letournel"], [
    { title: "Elemental: pared posterior", description: "Fractura aislada de la pared posterior; puede asociar luxacion posterior." },
    { title: "Elemental: columna posterior", description: "Trazo a traves de la columna posterior hacia la escotadura ciatica." },
    { title: "Elemental: pared anterior", description: "Fractura aislada de la pared anterior, menos frecuente." },
    { title: "Elemental: columna anterior", description: "Trazo a traves de la columna anterior hacia el pubis." },
    { title: "Elemental: transversa", description: "Trazo transversal que separa acetabulo superior e inferior; puede variar de alta a baja." },
    { title: "Asociada: T", description: "Patron transverso con componente vertical que crea configuracion en T." },
    { title: "Asociada: columna posterior + pared posterior", description: "Fractura de columna posterior con extension a pared posterior." },
    { title: "Asociada: transversa + pared posterior", description: "Fractura transversa con fragmento adicional de pared posterior." },
    { title: "Asociada: columna anterior o hemitransversa posterior", description: "Patron dominante anterior con extension parcial posterior." },
    { title: "Asociada: ambas columnas", description: "Separacion completa de ambas columnas del esqueleto axial." }
  ]),
  makeItem("garden", "Garden", "Hip", "Fractura", "Clasifica fracturas intracapsulares del cuello femoral por desplazamiento.", "Muy usada para riesgo vascular y plan de fijacion o artroplastia.", "AP pelvis y lateral cruzada de cadera.", "Mayor desplazamiento implica mas riesgo de necrosis y no union.", ["cadera", "cuello femoral", "intracapsular"], [
    { title: "Tipo I", description: "Incompleta o impactada en valgo." },
    { title: "Tipo II", description: "Completa sin desplazamiento." },
    { title: "Tipo III", description: "Completa con desplazamiento parcial." },
    { title: "Tipo IV", description: "Completa con desplazamiento total." }
  ]),
  makeItem("pauwels", "Pauwels", "Hip", "Fractura", "Clasifica fracturas del cuello femoral por angulo del trazo.", "Anade componente biomecanico y de cizallamiento.", "Medicion del angulo respecto a la horizontal en AP.", "Mientras mas vertical, mas inestable.", ["pauwels", "cadera", "vertical"], [
    { title: "Tipo I", description: "Menor de 30 grados." },
    { title: "Tipo II", description: "Entre 30 y 50 grados." },
    { title: "Tipo III", description: "Mayor de 50 grados." }
  ]),
  makeItem("pipkin", "Pipkin", "Hip", "Fractura-luxacion", "Clasifica fracturas de cabeza femoral asociadas a luxacion.", "Muy util en trauma de alta energia de cadera.", "CT posterior a reduccion para definir extension exacta.", "Puede coexistir con lesion acetabular o del cuello femoral.", ["pipkin", "cabeza femoral", "luxacion cadera"], [
    { title: "Tipo I", description: "Fragmento inferior a la fovea." },
    { title: "Tipo II", description: "Fragmento superior a la fovea." },
    { title: "Tipo III", description: "Tipo I o II con fractura de cuello femoral." },
    { title: "Tipo IV", description: "Tipo I o II con fractura acetabular." }
  ]),
  makeItem("vancouver", "Vancouver", "Hip", "Periprotesica", "Clasifica fracturas femorales periprotesicas alrededor de protesis de cadera.", "Orienta estabilidad del vastago y calidad osea.", "Radiografias de femur completo y comparacion con implante.", "Esencial para decidir revisiones de protesis.", ["vancouver", "periprotesica", "protesis cadera"], [
    { title: "A", description: "Trocanter mayor o menor." },
    { title: "B1", description: "Alrededor del vastago con implante estable." },
    { title: "B2", description: "Alrededor del vastago con implante flojo." },
    { title: "B3", description: "Implante flojo y mala reserva osea." },
    { title: "C", description: "Distal al implante." }
  ]),
  makeItem("tronzo", "Tronzo", "Hip", "Fractura intertrocanterica", "Clasifica fracturas intertrocantericas por estabilidad, conminucion posteromedial y oblicuidad inversa.", "Todavia se usa en algunos entornos para describir estabilidad de fracturas transtrocantericas.", "AP de pelvis o cadera y lateral; CT si el patron no esta claro.", "Los tipos I-II se consideran estables y III en adelante inestables; su reproducibilidad publicada es solo moderada.", ["tronzo", "intertrocanterica", "estable", "inestable"], [
    { title: "Tipo I", description: "Fractura intertrocanterica incompleta; estable." },
    { title: "Tipo II", description: "Puede incluir trocanter menor, pero sin conminucion posteromedial; estable." },
    { title: "Tipo III", description: "Conminucion posteromedial con desplazamiento medial de la diafisis y apoyo del calcar proximal." },
    { title: "Tipo III variante", description: "Patron tipo III asociado a fractura del trocanter mayor." },
    { title: "Tipo IV", description: "Conminucion mayor, trazo mas vertical y desplazamiento lateral de la diafisis; inestable." },
    { title: "Tipo V", description: "Oblicuidad inversa, de lateral a medial y de distal a proximal; inestable." }
  ]),
  makeItem("schatzker", "Schatzker", "Knee", "Fractura", "Clasifica fracturas de meseta tibial por split, depresion y bicondilaridad.", "Ordena energia del trauma y plan de fijacion.", "AP, lateral y CT para hundimiento articular.", "Los tipos altos suelen asociar mas dano de partes blandas.", ["rodilla", "meseta tibial", "depresion"], [
    { title: "Tipo I", description: "Split lateral." },
    { title: "Tipo II", description: "Split-depresion lateral." },
    { title: "Tipo III", description: "Depresion pura lateral." },
    { title: "Tipo IV", description: "Meseta medial." },
    { title: "Tipo V", description: "Bicondilar." },
    { title: "Tipo VI", description: "Disociacion metafisodiafisaria." }
  ]),
  makeItem("outerbridge", "Outerbridge", "Knee", "Condral", "Gradua lesiones condrales por profundidad y exposicion osea.", "Frecuente en reportes artroscopicos y lesiones de cartilago.", "MRI orienta, pero la escala es clasica artroscopica.", "Los grados avanzados son de espesor total.", ["condral", "cartilago", "outerbridge"], [
    { title: "Grado I", description: "Reblandecimiento y edema." },
    { title: "Grado II", description: "Fisuras superficiales." },
    { title: "Grado III", description: "Fisuras profundas." },
    { title: "Grado IV", description: "Exposicion de hueso subcondral." }
  ]),
  makeItem("moore-patella", "Patella fracture patterns", "Knee", "Fractura", "Patrones utiles para rotula: transversa, polar, marginal, osteocondral y conminuta.", "No es una sola escala universal, pero organiza la lectura de fracturas de patela.", "AP, lateral y skyline cuando es posible.", "Importa mucho el mecanismo extensor.", ["rotula", "patela", "transversa"], [
    { title: "Transversa", description: "Trazo horizontal clasico." },
    { title: "Polo inferior", description: "Avulsion del polo inferior." },
    { title: "Conminuta", description: "Multiples fragmentos, con frecuencia por alta energia." }
  ]),
  makeItem("weber", "Danis-Weber", "Ankle", "Fractura", "Ubica fracturas del perone por relacion con la sindesmosis.", "Muy practica para inferir estabilidad del tobillo.", "AP, mortaja y lateral de tobillo.", "Las tipo C tienen mayor riesgo sindesmotico.", ["tobillo", "sindesmosis", "perone"], [
    { title: "Tipo A", description: "Debajo de la sindesmosis." },
    { title: "Tipo B", description: "A nivel de la sindesmosis." },
    { title: "Tipo C", description: "Por encima de la sindesmosis." }
  ]),
  makeItem("lauge-hansen", "Lauge-Hansen", "Ankle", "Mecanismo", "Describe lesiones del tobillo por posicion del pie y fuerza deformante.", "Util para entender secuencia de dano ligamentario y oseo.", "Correlacion entre orientacion del trazo y mecanismo en radiografias.", "Es descriptiva, amplia y algo menos reproducible.", ["tobillo", "supinacion", "pronacion"], [
    { title: "SER", description: "Supinacion-rotacion externa." },
    { title: "SAD", description: "Supinacion-aduccion." },
    { title: "PER", description: "Pronacion-rotacion externa." },
    { title: "PAB", description: "Pronacion-abduccion." }
  ]),
  makeItem("herscovici", "Herscovici", "Ankle", "Maleolo medial", "Clasifica fracturas del maleolo medial segun nivel del trazo.", "Util para entender estabilidad del complejo medial.", "AP, mortaja y lateral.", "Los trazos altos pueden asociarse a mas inestabilidad.", ["maleolo medial", "tobillo", "herscovici"], [
    { title: "Tipo A", description: "Punta del maleolo." },
    { title: "Tipo B", description: "Entre punta y plafon." },
    { title: "Tipo C", description: "A nivel del plafon." },
    { title: "Tipo D", description: "Vertical supraplataforma." }
  ]),
  makeItem("sanders", "Sanders", "Foot", "Fractura", "Clasificacion tomografica de fracturas intraarticulares de calcaneo.", "Muy importante para cirugia y pronostico del calcaneo.", "CT coronal en faceta posterior.", "Mas fragmentos articulares suele significar peor pronostico.", ["pie", "calcaneo", "ct"], [
    { title: "Tipo I", description: "No desplazada." },
    { title: "Tipo II", description: "Dos fragmentos articulares." },
    { title: "Tipo III", description: "Tres fragmentos articulares." },
    { title: "Tipo IV", description: "Conminuta con cuatro o mas fragmentos." }
  ]),
  makeItem("myerson", "Myerson", "Foot", "Luxofractura", "Clasifica lesiones de Lisfranc por direccion y extension del desplazamiento.", "Muy util para trauma del mediopie y articulaciones tarsometatarsianas.", "Radiografia con carga si es posible y CT cuando hay duda.", "Puede pasar desapercibida si no se busca activamente.", ["lisfranc", "mediopie", "tarsometatarsiana"], [
    { title: "Tipo A", description: "Desplazamiento total en una sola direccion." },
    { title: "Tipo B", description: "Desplazamiento parcial medial o lateral." },
    { title: "Tipo C", description: "Desplazamiento divergente." }
  ]),
  makeItem("hawkins", "Hawkins", "Foot", "Fractura talo", "Clasifica fracturas del cuello del talo por luxacion asociada.", "Ayuda a estimar riesgo de necrosis avascular del talo.", "AP, lateral y CT para definir subtalar y tibiotalar.", "Mayor numero de articulaciones luxadas implica peor irrigacion.", ["talo", "cuello del talo", "hawkins"], [
    { title: "Tipo I", description: "Sin luxacion." },
    { title: "Tipo II", description: "Luxacion subtalar." },
    { title: "Tipo III", description: "Luxacion subtalar y tibiotalar." },
    { title: "Tipo IV", description: "Ademas luxacion talonavicular." }
  ]),
  makeItem("denis", "Denis", "Spine", "Columna toracolumbar", "Modelo de tres columnas para trauma toracolumbar.", "Ayuda a entender estabilidad e indicacion de estudios adicionales.", "Radiografias y CT; MRI si hay duda ligamentaria.", "La lesion de columna media aumenta inestabilidad.", ["columna", "toracolumbar", "tres columnas"], [
    { title: "Anterior", description: "Ligamento anterior y cuerpo vertebral anterior." },
    { title: "Media", description: "Mitad posterior del cuerpo y ligamento posterior." },
    { title: "Posterior", description: "Elementos posteriores y complejo ligamentario." }
  ]),
  makeItem("allen-ferguson", "Allen-Ferguson", "Spine", "Columna cervical", "Clasifica trauma cervical subaxial segun mecanismo.", "Sirve como marco mecanico para lesiones cervicales complejas.", "Radiografia, CT y MRI segun disco-ligamentario.", "Muy util para razonar mecanismo y estabilidad.", ["cervical", "subaxial", "mecanismo"], [
    { title: "Flexion-compresion", description: "Carga anterior en flexion." },
    { title: "Distraccion-flexion", description: "Fallo posterior progresivo." },
    { title: "Compresion-extension", description: "Carga posterior en extension." },
    { title: "Distraccion-extension", description: "Separacion en extension." }
  ]),
  makeItem("tlics", "TLICS", "Spine", "Puntaje", "Puntua trauma toracolumbar por morfologia, PLC y neurologo.", "Ayuda a decidir conducta quirurgica versus conservadora.", "CT y MRI segun lesion ligamentaria.", "Combina imagen, estabilidad y estado neurologico.", ["tlics", "toracolumbar", "neurologico"], [
    { title: "Morfologia", description: "Compresion, estallido, traslacion o distraccion." },
    { title: "PLC", description: "Integridad del complejo ligamentario posterior." },
    { title: "Neurologico", description: "Estado neurologico como parte del puntaje final." }
  ])
];

const anatomyRegions = ["Clavicle", "Shoulder", "Elbow", "Wrist", "Hand", "Spine", "Pelvis", "Hip", "Knee", "Ankle", "Foot", "Pediatrics", "General Trauma"];

const regionLabels = {
  en: {
    Clavicle: "Clavicle",
    Shoulder: "Shoulder",
    Elbow: "Elbow",
    Wrist: "Wrist",
    Hand: "Hand",
    Spine: "Spine",
    Pelvis: "Pelvis",
    Hip: "Hip",
    Knee: "Knee",
    Ankle: "Ankle",
    Foot: "Foot",
    Pediatrics: "Pediatrics",
    "General Trauma": "General trauma"
  },
  es: {
    Clavicle: "Clavicula",
    Shoulder: "Hombro",
    Elbow: "Codo",
    Wrist: "Muneca",
    Hand: "Mano",
    Spine: "Columna",
    Pelvis: "Pelvis",
    Hip: "Cadera",
    Knee: "Rodilla",
    Ankle: "Tobillo",
    Foot: "Pie",
    Pediatrics: "Pediatria",
    "General Trauma": "Trauma general"
  }
};

const typeLabels = {
  Fractura: { en: "Fracture", es: "Fractura" },
  "Luxacion / Ligamentaria": { en: "Dislocation / Ligament", es: "Luxacion / Ligamentaria" },
  "Fractura glenoidea": { en: "Glenoid fracture", es: "Fractura glenoidea" },
  "Lesion combinada": { en: "Combined injury", es: "Lesion combinada" },
  Inestabilidad: { en: "Instability", es: "Inestabilidad" },
  "Fractura escafoides": { en: "Scaphoid fracture", es: "Fractura escafoides" },
  "Artrosis / Rizartrosis": { en: "Arthrosis / Thumb CMC OA", es: "Artrosis / Rizartrosis" },
  "Fractura abierta": { en: "Open fracture", es: "Fractura abierta" },
  "Sistema global": { en: "Global system", es: "Sistema global" },
  "Partes blandas": { en: "Soft tissues", es: "Partes blandas" },
  Fisis: { en: "Physis", es: "Fisis" },
  "Fractura supracondilea": { en: "Supracondylar fracture", es: "Fractura supracondilea" },
  "Fractura condilo lateral": { en: "Lateral condyle fracture", es: "Fractura condilo lateral" },
  "Anillo pelvico": { en: "Pelvic ring", es: "Anillo pelvico" },
  Mecanismo: { en: "Mechanism", es: "Mecanismo" },
  Acetabulo: { en: "Acetabulum", es: "Acetabulo" },
  Periprotesica: { en: "Periprosthetic", es: "Periprotesica" },
  "Fractura intertrocanterica": { en: "Intertrochanteric fracture", es: "Fractura intertrocanterica" },
  Condral: { en: "Chondral", es: "Condral" },
  Puntaje: { en: "Score", es: "Puntaje" },
  "Fractura-luxacion": { en: "Fracture-dislocation", es: "Fractura-luxacion" },
  Quemaduras: { en: "Burns / TBSA", es: "Quemaduras" }
};

const uiText = {
  en: {
    pageTitle: "Orthopedic Classifications",
    languageToggle: "Espanol",
    heroEyebrow: "Quick reference",
    betaBadge: "Beta",
    heroTitle: "Orthopedic Classifications by Region",
    heroText: "Tap a body region to open its classifications. You can also use search to find a specific system by name, bone, or injury pattern.",
    betaCopy: "Beta version for educational use. Install it on your phone for faster access.",
    heroStatLabel: "Loaded classifications",
    heroStatFootnote: "Anatomy map + search",
    skeletonSectionLabel: "Skeleton",
    skeletonHeading: "Choose a region",
    skeletonAlt: "Anatomical skeleton",
    searchLabel: "Search classification",
    searchPlaceholder: "Example: Garden, clavicle, ankle, open",
    regionLabel: "Region",
    typeLabel: "Type",
    allOption: "All",
    resultsSectionLabel: "Library",
    emptySectionLabel: "Detail",
    emptyTitle: "Choose a classification",
    emptyCopy: "Tap a skeleton region or a result card to see its types, imaging clues, reference images, and clinical notes here.",
    detailUseHeading: "Used for",
    detailClassificationHeading: "Classification",
    detailImagingHeading: "Imaging / clues",
    detailNotesHeading: "Clinical notes",
    detailKeywordsHeading: "Keywords",
    regionViewSectionLabel: "Region app",
    regionViewClose: "Back",
    resultsHeadingAll: "All classifications",
    resultsHeadingTypePrefix: "Classifications:",
    resultsHeadingRegionPrefix: "Classifications of",
    resultsHeadingSearchPrefix: 'Results for',
    resultsCount: (count) => `${count} result${count === 1 ? "" : "s"}`,
    levelsCount: (count) => `${count} level${count === 1 ? "" : "s"}`,
    noResults: "I could not find classifications with that filter. Try a different region or a broader term.",
    imageSingle: (path) => `Custom image: ${path}`,
    imageMultiple: (paths) => `Custom images: ${paths.join(" , ")}`,
    pointsLabel: "Key points",
    regionViewCopy: (region) => `Select a ${region} classification to view its full image and levels.`,
    regionViewTitle: (region) => `${region} classifications`,
    detailImageAlt: (name) => `Illustration of ${name}`,
    regionViewImageAlt: (name) => `${name} classification image`,
    brandSectionLabel: "Trauma Channel",
    brandTitle: "Trauma Channel",
    brandCopy: "Facebook",
    brandLink: "Open Facebook",
    brandCopyright: "Copyright © Trauma Channel. All rights reserved.",
    brandQrAlt: "Trauma Channel Facebook QR code"
  },
  es: {
    pageTitle: "Clasificaciones Ortopedicas",
    languageToggle: "English",
    heroEyebrow: "Referencia rapida",
    betaBadge: "Beta",
    heroTitle: "Clasificaciones Ortopedicas por Region",
    heroText: "Toca una parte del cuerpo para abrir sus clasificaciones. Tambien puedes usar la busqueda para encontrar una clasificacion especifica por nombre, hueso o lesion.",
    betaCopy: "Version beta de uso educativo. Instalala en tu celular para abrirla mas rapido.",
    heroStatLabel: "Clasificaciones cargadas",
    heroStatFootnote: "Mapa anatomico + buscador",
    skeletonSectionLabel: "Esqueleto",
    skeletonHeading: "Selecciona una zona",
    skeletonAlt: "Esqueleto anatomico",
    searchLabel: "Buscar clasificacion",
    searchPlaceholder: "Ejemplo: Garden, clavicula, tobillo, abierta",
    regionLabel: "Region",
    typeLabel: "Tipo",
    allOption: "Todas",
    resultsSectionLabel: "Lista",
    emptySectionLabel: "Detalle",
    emptyTitle: "Elige una clasificacion",
    emptyCopy: "Al tocar una region del esqueleto o un resultado, aqui veras sus tipos, claves radiograficas, imagenes ilustrativas y notas clinicas.",
    detailUseHeading: "Se usa para",
    detailClassificationHeading: "Clasificacion",
    detailImagingHeading: "Imagen / claves",
    detailNotesHeading: "Notas clinicas",
    detailKeywordsHeading: "Palabras clave",
    regionViewSectionLabel: "Vista de region",
    regionViewClose: "Cerrar",
    resultsHeadingAll: "Todas las clasificaciones",
    resultsHeadingTypePrefix: "Clasificaciones:",
    resultsHeadingRegionPrefix: "Clasificaciones de",
    resultsHeadingSearchPrefix: 'Resultados para',
    resultsCount: (count) => `${count} resultado${count === 1 ? "" : "s"}`,
    levelsCount: (count) => `${count} nivel${count === 1 ? "" : "es"}`,
    noResults: "No encontre clasificaciones con ese filtro. Prueba otra region o un termino mas amplio.",
    imageSingle: (path) => `Imagen personalizada: ${path}`,
    imageMultiple: (paths) => `Imagenes personalizadas: ${paths.join(" , ")}`,
    pointsLabel: "Puntos clave",
    regionViewCopy: (region) => `Selecciona una clasificacion de ${region} para ver su imagen completa y sus tipos.`,
    regionViewTitle: (region) => `Clasificaciones de ${region}`,
    detailImageAlt: (name) => `Ilustracion de ${name}`,
    regionViewImageAlt: (name) => `Imagen de ${name}`,
    brandSectionLabel: "Trauma Channel",
    brandTitle: "Trauma Channel",
    brandCopy: "Facebook",
    brandLink: "Abrir Facebook",
    brandCopyright: "Copyright © Trauma Channel. Todos los derechos reservados.",
    brandQrAlt: "Codigo QR de Facebook de Trauma Channel"
  }
};

const englishContent = {
  allman: {
    summary: "Classifies clavicle fractures by the involved third.",
    use: "Useful for organizing medial, shaft, and distal clavicle fractures.",
    imaging: "AP radiographs and cephalic tilt view.",
    notes: "Most injuries occur in the middle third.",
    keywords: ["clavicle", "middle third", "distal third"],
    levels: [
      { title: "Group I", description: "Middle third." },
      { title: "Group II", description: "Distal third." },
      { title: "Group III", description: "Proximal third." }
    ]
  },
  "neer-clavicle": {
    summary: "Subclassifies distal clavicle fractures by stability.",
    use: "Helps separate stable patterns from injuries that often need fixation.",
    imaging: "Clavicle AP, Zanca, and coracoclavicular assessment.",
    notes: "Type II injuries are usually the most unstable.",
    keywords: ["distal clavicle", "neer", "coracoclavicular"],
    levels: [
      { title: "Type I", description: "Intact ligaments with minimal instability." },
      { title: "Type II", description: "Medial fracture line to the ligament complex with displacement." },
      { title: "Type III", description: "Intra-articular extension into the acromioclavicular joint." }
    ]
  },
  robinson: {
    summary: "Classifies clavicle fractures by anatomic location and displacement.",
    use: "Very useful for organizing medial, shaft, and lateral clavicle fractures, especially in studies and surgical communication.",
    imaging: "AP and cephalic clavicle radiographs; CT when the medial or lateral end pattern is complex.",
    notes: "Group 2 corresponds to the midshaft; B subgroups usually imply significant displacement or comminution.",
    keywords: ["robinson", "clavicle", "midshaft", "displaced"],
    levels: [
      { title: "Type 1", description: "Medial-third clavicle fractures." },
      { title: "Type 2A", description: "Minimally displaced shaft fractures." },
      { title: "Type 2B", description: "Displaced or comminuted shaft fractures." },
      { title: "Type 3", description: "Lateral-third fractures, with variable stability depending on the coracoclavicular ligaments." }
    ]
  },
  rockwood: {
    summary: "Classifies acromioclavicular injuries by displacement and ligament damage.",
    use: "Practical system for separating mild AC injuries from complex ones.",
    imaging: "AP radiographs, Zanca view, and coracoclavicular comparison.",
    notes: "Higher grades often need surgical evaluation.",
    keywords: ["shoulder", "acromioclavicular", "dislocation"],
    levels: [
      { title: "Type I", description: "AC sprain without displacement." },
      { title: "Type II", description: "AC disruption with mild elevation." },
      { title: "Type III", description: "AC and CC disruption with superior displacement." },
      { title: "Type IV", description: "Posterior displacement." },
      { title: "Type V", description: "Severe superior displacement." },
      { title: "Type VI", description: "Rare inferior displacement." }
    ]
  },
  "neer-proximal-humerus": {
    summary: "Describes proximal humerus fractures by the number of displaced parts.",
    use: "Helps choose between conservative treatment, fixation, or arthroplasty.",
    imaging: "AP, scapular Y, axillary, and CT when needed.",
    notes: "A part counts if it is displaced more than 1 cm or angulated more than 45 degrees.",
    keywords: ["proximal humerus", "parts", "humeral head"],
    levels: [
      { title: "One-part", description: "No relevant displaced fragments." },
      { title: "Two-part", description: "One displaced fragment." },
      { title: "Three-part", description: "Two displaced fragments." },
      { title: "Four-part", description: "Three displaced fragments with higher vascular risk." }
    ]
  },
  ideberg: {
    summary: "Classifies scapular glenoid fractures by location and extent.",
    use: "Useful when glenohumeral instability is associated with a rim or glenoid fracture.",
    imaging: "CT with 3D reconstruction improves pattern definition.",
    notes: "Displaced articular fractures may significantly alter stability.",
    keywords: ["glenoid", "scapula", "anterior rim"],
    levels: [
      { title: "Type I", description: "Glenoid rim fracture." },
      { title: "Type II", description: "Fracture line into the inferior glenoid." },
      { title: "Type III", description: "Fracture line into the superior glenoid." },
      { title: "Type IV-VI", description: "More extensive transverse and combined patterns." }
    ]
  },
  hertel: {
    summary: "Radiographic predictors of humeral head ischemia in intracapsular proximal humerus fractures.",
    use: "Helps estimate biologic risk and complements Neer or Codman-based reading of proximal humerus fractures.",
    imaging: "AP, scapular Y, axillary, and CT views; specifically assess the medial calcar and medial hinge.",
    notes: "Useful for risk stratification, but not sufficient by itself to predict all later osteonecrosis.",
    keywords: ["hertel", "ischemia", "humeral head", "calcar", "medial hinge"],
    levels: [
      { title: "Metaphyseal extension < 8 mm", description: "Limited posteromedial calcar extension is associated with greater ischemic risk." },
      { title: "Medial hinge displacement > 2 mm", description: "Loss of the medial hinge increases instability and potential ischemia." },
      { title: "Anatomic neck pattern", description: "Fractures involving the anatomic neck raise concern for humeral head perfusion." }
    ]
  },
  codman: {
    summary: "Describes proximal humerus fractures using four classic anatomic segments.",
    use: "Conceptual foundation for modern proximal humerus classifications and LEGO-like pattern thinking.",
    imaging: "AP, scapular Y, axillary, and CT when the pattern is complex.",
    notes: "The segments are the head, greater tuberosity, lesser tuberosity, and shaft; their combinations define complexity.",
    keywords: ["codman", "proximal humerus", "4-part", "lego"],
    levels: [
      { title: "One-part", description: "No main segment is meaningfully displaced." },
      { title: "Two-part", description: "One segment separates from the rest, such as the surgical neck or one tuberosity." },
      { title: "Three-part", description: "Two segments are displaced, increasing reconstructive complexity." },
      { title: "Four-part", description: "Separation of head, tuberosities, and shaft; high biologic and mechanical risk." }
    ]
  },
  "mayo-fjd": {
    summary: "Pattern-recognition classification for proximal humerus fractures.",
    use: "Seeks to identify the main fracture pattern before displacement criteria are applied, with good reproducibility especially on CT.",
    imaging: "AP, scapular Y, axillary radiographs, and CT reconstructions to define the dominant pattern.",
    notes: "It groups tuberosity, neck, and head-compromising patterns; CT usually improves interobserver agreement.",
    keywords: ["mayo-fjd", "proximal humerus", "patterns", "shoulder"],
    levels: [
      { title: "Tuberosity patterns", description: "Isolated greater or lesser tuberosity fractures, with or without associated dislocation." },
      { title: "Surgical neck", description: "Surgical neck pattern, with or without associated tuberosity fractures." },
      { title: "Varus posteromedial / valgus impacted", description: "Impaction patterns with characteristic head tilt or rotation." },
      { title: "Head compromise", description: "Includes head dislocation, head split, or head impression injuries." }
    ]
  },
  mason: {
    summary: "Classifies radial head fractures by displacement and comminution.",
    use: "Useful for anticipating mechanical block and elbow instability.",
    imaging: "Elbow AP and lateral; CT when comminution is unclear.",
    notes: "Modern versions add associated elbow dislocation.",
    keywords: ["elbow", "radial head", "block"],
    levels: [
      { title: "Type I", description: "Nondisplaced or minimal." },
      { title: "Type II", description: "Displaced marginal fracture." },
      { title: "Type III", description: "Comminuted entire radial head." },
      { title: "Type IV", description: "Fracture with elbow dislocation." }
    ]
  },
  "regan-morrey": {
    summary: "Classifies coronoid fractures by fragment size.",
    use: "Commonly used in terrible triad injuries and elbow instability.",
    imaging: "Elbow lateral and CT to define fragment height.",
    notes: "Larger fragments are associated with greater instability.",
    keywords: ["coronoid", "terrible triad", "elbow"],
    levels: [
      { title: "Type I", description: "Tip avulsion." },
      { title: "Type II", description: "Less than 50 percent of coronoid height." },
      { title: "Type III", description: "More than 50 percent of coronoid height." }
    ]
  },
  "morrey-terrible": {
    summary: "Elbow injury pattern with dislocation, radial head fracture, and coronoid fracture.",
    use: "Not a classic numeric scale, but a high-risk instability pattern.",
    imaging: "Radiographs and CT for surgical planning.",
    notes: "Extensive ligament injury must be ruled out.",
    keywords: ["terrible triad", "elbow", "dislocation"],
    levels: [
      { title: "Components", description: "Posterolateral dislocation, radial head fracture, and coronoid fracture." },
      { title: "Importance", description: "High tendency toward stiffness and residual instability." }
    ]
  },
  fernandez: {
    summary: "Distal radius classification based on mechanism.",
    use: "Organizes wrist fractures by biomechanical pattern.",
    imaging: "Wrist series and CT for articular patterns.",
    notes: "More mechanism-oriented than Colles or Smith.",
    keywords: ["wrist", "distal radius", "mechanism"],
    levels: [
      { title: "Type I", description: "Bending fracture." },
      { title: "Type II", description: "Shear fracture." },
      { title: "Type III", description: "Compression fracture." },
      { title: "Type IV", description: "Avulsion with radiocarpal dislocation." },
      { title: "Type V", description: "Combined high-energy pattern." }
    ]
  },
  frykman: {
    summary: "Classifies distal radius fractures by articular involvement and distal ulna fracture.",
    use: "Helps remember whether there is radiocarpal or distal radioulnar extension.",
    imaging: "AP and lateral radiographs.",
    notes: "Less useful for modern decision-making than newer systems, but still common in teaching.",
    keywords: ["frykman", "distal radius", "distal ulna"],
    levels: [
      { title: "I-II", description: "Extra-articular with or without distal ulna fracture." },
      { title: "III-IV", description: "Radiocarpal involvement with or without distal ulna fracture." },
      { title: "V-VI", description: "Distal radioulnar involvement with or without distal ulna fracture." },
      { title: "VII-VIII", description: "Both joints involved with or without distal ulna fracture." }
    ]
  },
  mayfield: {
    summary: "Progression of perilunate instability by stages.",
    use: "Key for understanding scapholunate injury and lunate dislocation.",
    imaging: "Wrist series, strict lateral, and CT if needed.",
    notes: "The sequence progresses from radial to ulnar.",
    keywords: ["perilunate", "scapholunate", "lunate"],
    levels: [
      { title: "Stage I", description: "Scapholunate disruption." },
      { title: "Stage II", description: "Capitolunate disruption." },
      { title: "Stage III", description: "Lunotriquetral disruption." },
      { title: "Stage IV", description: "Lunate dislocation." }
    ]
  },
  herbert: {
    summary: "Classifies scaphoid fractures and nonunions.",
    use: "Useful for acute trauma and scaphoid healing problems.",
    imaging: "Dedicated scaphoid radiographs and CT.",
    notes: "Unstable and displaced fractures change management.",
    keywords: ["scaphoid", "herbert", "nonunion"],
    levels: [
      { title: "Type A", description: "Acute stable fractures." },
      { title: "Type B", description: "Acute unstable fractures." },
      { title: "Type C", description: "Delayed union." },
      { title: "Type D", description: "Established nonunion." }
    ]
  },
  "rolando-bennett": {
    summary: "Classic patterns at the base of the first metacarpal.",
    use: "Very useful in thumb trauma and carpometacarpal injuries.",
    imaging: "Thumb AP, oblique, and lateral views.",
    notes: "Bennett is a two-fragment injury; Rolando is comminuted.",
    keywords: ["hand", "thumb", "bennett", "rolando"],
    levels: [
      { title: "Bennett", description: "Two-fragment intra-articular fracture-dislocation." },
      { title: "Rolando", description: "Comminuted intra-articular Y or T fracture." }
    ]
  },
  eaton: {
    summary: "Classifies thumb carpometacarpal osteoarthritis by radiographic stage.",
    use: "Useful for staging thumb CMC arthrosis and communicating structural severity.",
    imaging: "Thumb AP, oblique, true lateral, or Robert views.",
    notes: "Radiographic stage does not always correlate with pain or hand function.",
    keywords: ["rhizarthrosis", "thumb cmc", "trapeziometacarpal"],
    levels: [
      { title: "Stage I", description: "Preserved joint contours with subtle widening from synovitis or laxity; no major osteophytes." },
      { title: "Stage II", description: "Mild joint-space narrowing with osteophytes or loose bodies smaller than 2 mm." },
      { title: "Stage III", description: "Advanced narrowing, sclerosis or subchondral cysts, and osteophytes larger than 2 mm; scaphotrapezial joint still preserved." },
      { title: "Stage IV", description: "Stage III changes plus scaphotrapezial arthrosis." }
    ]
  },
  "gustilo-anderson": {
    summary: "Stratifies open fractures by wound size and soft-tissue damage.",
    use: "Essential for antibiotics, debridement, and coverage planning.",
    imaging: "The classification combines wound exam and radiographs.",
    notes: "Ideally confirmed after the first debridement.",
    keywords: ["open", "soft tissues", "contamination"],
    levels: [
      { title: "Type I", description: "Clean wound smaller than 1 cm." },
      { title: "Type II", description: "Wound larger than 1 cm without extensive tissue loss." },
      { title: "Type IIIA", description: "Severe injury with adequate bone coverage." },
      { title: "Type IIIB", description: "Bone exposure or flap requirement." },
      { title: "Type IIIC", description: "Arterial injury requiring repair." }
    ]
  },
  "ao-ota": {
    summary: "Broad alphanumeric system for fractures by bone and morphology.",
    use: "Useful for formal documentation, research, and team communication.",
    imaging: "Requires orthogonal radiographs and often CT.",
    notes: "It is the most universal language, but also the most extensive.",
    keywords: ["ao", "ota", "segment", "morphology"],
    levels: [
      { title: "Type A", description: "Simple or extra-articular pattern." },
      { title: "Type B", description: "Wedge or partial articular pattern." },
      { title: "Type C", description: "Complex or complete articular pattern." }
    ]
  },
  tscherne: {
    summary: "Classifies soft-tissue injury in closed and open fractures.",
    use: "Adds soft-tissue severity beyond the bony fracture line.",
    imaging: "Clinical assessment of skin, muscle, and contamination.",
    notes: "Important in high-energy trauma.",
    keywords: ["tscherne", "soft tissues", "closed"],
    levels: [
      { title: "Closed 0-3", description: "From minimal contusion to degloving or compartment syndrome." },
      { title: "Open 1-4", description: "From a clean wound to subtotal amputation or severe vascular injury." }
    ]
  },
  "lund-browder": {
    summary: "Age-adjusted chart used to estimate burned total body surface area.",
    use: "Most precise bedside reference for TBSA calculation in children and also useful in adults when greater accuracy is needed.",
    imaging: "Clinical mapping of partial- and full-thickness burns over anterior and posterior body charts.",
    notes: "It outperforms the Rule of Nines when age changes head-limb proportions or burns are irregularly distributed.",
    keywords: ["lund-browder", "burns", "tbsa", "body surface area"],
    levels: [
      { title: "Head and neck", description: "Percentage changes with age, larger in infants and smaller as the child grows." },
      { title: "Trunk", description: "Anterior and posterior surfaces are calculated separately and added." },
      { title: "Extremities", description: "Each limb segment is weighted by age and side for finer estimation." }
    ]
  },
  "rule-of-nines": {
    summary: "Rapid method to estimate burned body surface area in adults using 9 percent blocks.",
    use: "Very useful in initial triage and early resuscitation when an immediate approximation is needed.",
    imaging: "Global clinical assessment of partial- and full-thickness burns; less accurate in children or extreme body habitus.",
    notes: "Classic adult distribution: head 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, and perineum 1%.",
    keywords: ["rule of nines", "9%", "burns", "tbsa", "wallace"],
    levels: [
      { title: "Head", description: "9% of adult total body surface area." },
      { title: "Each upper limb", description: "9% per arm, usually 4.5% anterior and 4.5% posterior." },
      { title: "Trunk", description: "18% anterior and 18% posterior." },
      { title: "Each lower limb", description: "18% per leg in the adult." },
      { title: "Perineum", description: "1% of total body surface area." }
    ]
  },
  "salter-harris": {
    summary: "Classifies physeal injuries in pediatric trauma.",
    use: "Foundation for estimating growth disturbance risk.",
    imaging: "Plain radiographs; MRI if the fracture line is subtle.",
    notes: "Higher grades carry greater risk of physeal arrest.",
    keywords: ["pediatrics", "physis", "growth"],
    levels: [
      { title: "Type I", description: "Through the physis only." },
      { title: "Type II", description: "Physis and metaphysis." },
      { title: "Type III", description: "Physis and epiphysis." },
      { title: "Type IV", description: "Metaphysis, physis, and epiphysis." },
      { title: "Type V", description: "Physeal crush injury." }
    ]
  },
  gartland: {
    summary: "Classifies pediatric supracondylar humerus fractures by displacement.",
    use: "Very important for deciding closed reduction and pinning.",
    imaging: "Pediatric elbow AP and lateral.",
    notes: "Types III and IV have high neurovascular risk.",
    keywords: ["gartland", "supracondylar", "pediatrics"],
    levels: [
      { title: "Type I", description: "Nondisplaced." },
      { title: "Type II", description: "Displaced with partially intact posterior cortex." },
      { title: "Type III", description: "Completely displaced." },
      { title: "Type IV", description: "Unstable in flexion and extension." }
    ]
  },
  song: {
    summary: "Classifies pediatric lateral humeral condyle fractures.",
    use: "Helps detect unstable patterns even with small displacement.",
    imaging: "AP, lateral, and internal oblique radiographs.",
    notes: "Minimally displaced injuries may still be unstable.",
    keywords: ["lateral condyle", "song", "pediatrics"],
    levels: [
      { title: "Stage 1-2", description: "Earlier and less displaced fractures." },
      { title: "Stage 3-5", description: "Complete, unstable, and displaced fractures." }
    ]
  },
  delbet: {
    summary: "Classifies pediatric femoral neck fractures by anatomic location.",
    use: "Helps estimate the risk of avascular necrosis, nonunion, and growth disturbance.",
    imaging: "Pelvis AP and hip lateral views; CT or MRI if the fracture line is subtle or for surgical planning.",
    notes: "Avascular necrosis risk is highest in the most proximal patterns, especially type I.",
    keywords: ["delbet", "femoral neck", "pediatrics", "avascular necrosis"],
    levels: [
      { title: "Type I", description: "Transepiphyseal; may be associated with hip dislocation and carries the worst vascular prognosis." },
      { title: "Type II", description: "Transcervical through the femoral neck; classic pattern with high biologic risk." },
      { title: "Type III", description: "Cervicotrochanteric or basicervical; more distal and generally lower risk than types I-II." },
      { title: "Type IV", description: "Intertrochanteric; the most extracapsular pattern and usually the best prognosis." }
    ]
  },
  ogden: {
    summary: "Classifies adolescent tibial tubercle avulsion fractures and expands Watson-Jones.",
    use: "Helps communicate proximal extension to the physis, comminution, and possible articular involvement.",
    imaging: "Knee AP and lateral views; CT when intra-articular extension or a complex pattern is suspected.",
    notes: "Subtype B implies more comminution or displacement; types IV-V are usually more unstable and may be associated with compartment syndrome.",
    keywords: ["ogden", "tibial tubercle", "adolescent", "avulsion"],
    levels: [
      { title: "Type I", description: "Distal tubercle avulsion; A simple, B comminuted or more displaced." },
      { title: "Type II", description: "Fracture extends toward the proximal physis without clear articular entry; A simple, B comminuted." },
      { title: "Type III", description: "Intra-articular extension into the proximal tibial joint surface; A simple, B comminuted." },
      { title: "Type IV", description: "Avulsion of the entire proximal tibial epiphysis with posterior extension." },
      { title: "Type V", description: "Periosteal sleeve or Y-type combination injury involving the proximal tibia." }
    ]
  },
  weiss: {
    summary: "Classifies pediatric lateral humeral condyle fractures by displacement and articular congruity.",
    use: "Very useful for choosing casting, percutaneous fixation, or open reduction according to articular stability.",
    imaging: "AP, lateral, and internal oblique radiographs; arthrogram or fluoroscopy when the articular surface is unclear.",
    notes: "Displacement of 2 mm or more raises concern for instability; articular incongruity defines the most severe injury.",
    keywords: ["weiss", "lateral condyle", "pediatric elbow", "displacement"],
    levels: [
      { title: "Type I", description: "Less than 2 mm displacement with the articular surface presumed intact." },
      { title: "Type II", description: "2 mm or more displacement, but with a preserved cartilaginous hinge or maintained articular congruity." },
      { title: "Type III", description: "2 mm or more displacement with clear articular incongruity or complete disruption." }
    ]
  },
  bado: {
    summary: "Classifies Monteggia lesions by the direction of radial head dislocation and the ulnar pattern.",
    use: "Helps recognize Monteggia injuries and equivalents in children, including ulnar plastic deformation.",
    imaging: "Complete forearm and elbow AP and lateral views; always confirm the radiocapitellar line.",
    notes: "In children there may be ulnar plastic deformation without an obvious fracture; if missed, the radial head may remain chronically dislocated.",
    keywords: ["bado", "monteggia", "radial head", "ulna", "pediatrics"],
    levels: [
      { title: "Type I", description: "Anterior radial head dislocation with anterior ulnar angulation or diaphyseal fracture." },
      { title: "Type II", description: "Posterior or posterolateral radial head dislocation with posterior ulnar angulation." },
      { title: "Type III", description: "Lateral or anterolateral radial head dislocation with proximal ulnar metaphyseal fracture." },
      { title: "Type IV", description: "Anterior radial head dislocation with fractures of both radius and ulna at the same level." }
    ]
  },
  tile: {
    summary: "Classifies pelvic ring injuries by rotational and vertical stability.",
    use: "Very useful for communicating global stability, injury severity, and possible need for anterior or posterior fixation.",
    imaging: "Pelvis AP, inlet, outlet, and CT to define posterior injury.",
    notes: "Type A injuries are stable; type B injuries are rotationally unstable; type C injuries are both rotationally and vertically unstable.",
    keywords: ["pelvis", "ring", "instability", "tile"],
    levels: [
      { title: "Type A", description: "Stable pelvic ring injuries." },
      { title: "Type A1", description: "Avulsions or fractures that do not compromise ring stability." },
      { title: "Type A2", description: "Stable iliac wing or anterior ring fractures with intact posterior arch." },
      { title: "Type A3", description: "Low transverse sacral or coccygeal fractures without ring instability." },
      { title: "Type B", description: "Rotational instability with preserved vertical stability." },
      { title: "Type B1", description: "Open-book injury from external anteroposterior compression." },
      { title: "Type B2", description: "Lateral compression with internal rotation of the hemipelvis." },
      { title: "Type B3", description: "Bilateral or combined type B injuries with rotational instability." },
      { title: "Type C", description: "Rotational and vertical instability." },
      { title: "Type C1", description: "Unilateral injury with vertical displacement." },
      { title: "Type C2", description: "Type C injury on one side and type B on the other." },
      { title: "Type C3", description: "Bilateral type C injuries with complete instability." }
    ]
  },
  "young-burgess": {
    summary: "Classifies pelvic ring injuries by mechanism: lateral compression, anteroposterior compression, or vertical shear.",
    use: "Very useful in early trauma care because the mechanism helps anticipate bleeding, posterior injury, and instability pattern.",
    imaging: "Pelvis AP and CT; inlet and outlet views help define the pattern.",
    notes: "LC I is often more stable, while APC II-III and VS usually imply greater instability and may require hemorrhage control.",
    keywords: ["pelvis", "young-burgess", "lateral compression", "open book"],
    levels: [
      { title: "LC I", description: "Lateral compression with sacral impaction and ipsilateral pubic rami fractures." },
      { title: "LC II", description: "Lateral compression with posterior crescent iliac wing or sacroiliac injury." },
      { title: "LC III", description: "Windswept pattern: ipsilateral lateral compression with contralateral opening." },
      { title: "APC I", description: "Mild anterior opening with minimal symphyseal widening; posterior ligaments remain intact." },
      { title: "APC II", description: "Open-book injury with external rotation, disruption of anterior SI ligaments and anterior pelvic floor; rotationally unstable." },
      { title: "APC III", description: "Complete anterior and posterior disruption with rotational and vertical instability." },
      { title: "VS", description: "Vertical shear with cephalad displacement of the hemipelvis." },
      { title: "CM", description: "Combined mechanism with elements of more than one pattern." }
    ]
  },
  letournel: {
    summary: "Classifies acetabular fractures into five elementary and five associated patterns.",
    use: "Classic reference for describing acetabular fractures and planning the surgical approach.",
    imaging: "Pelvis AP, Judet views, and CT with reconstructions to define columns and posterior wall.",
    notes: "Quality of anatomic reduction matters more for prognosis than the classification label alone.",
    keywords: ["acetabulum", "judet", "columns", "letournel"],
    levels: [
      { title: "Elementary: posterior wall", description: "Isolated posterior wall fracture; may accompany posterior dislocation." },
      { title: "Elementary: posterior column", description: "Fracture through the posterior column toward the greater sciatic notch." },
      { title: "Elementary: anterior wall", description: "Isolated anterior wall fracture, less common." },
      { title: "Elementary: anterior column", description: "Fracture through the anterior column toward the pubis." },
      { title: "Elementary: transverse", description: "Transverse line separating superior and inferior acetabulum; may be high, intermediate, or low." },
      { title: "Associated: T-shaped", description: "Transverse pattern with an added vertical component creating a T configuration." },
      { title: "Associated: posterior column + posterior wall", description: "Posterior column fracture with extension into the posterior wall." },
      { title: "Associated: transverse + posterior wall", description: "Transverse fracture with an additional posterior wall fragment." },
      { title: "Associated: anterior column or wall + posterior hemitransverse", description: "Predominantly anterior injury with partial posterior transverse extension." },
      { title: "Associated: both columns", description: "Complete separation of both columns from the axial skeleton." }
    ]
  },
  garden: {
    summary: "Classifies intracapsular femoral neck fractures by displacement.",
    use: "Widely used for vascular risk and fixation versus arthroplasty planning.",
    imaging: "Pelvis AP and cross-table lateral hip view.",
    notes: "More displacement means greater risk of necrosis and nonunion.",
    keywords: ["hip", "femoral neck", "intracapsular"],
    levels: [
      { title: "Type I", description: "Incomplete or valgus impacted." },
      { title: "Type II", description: "Complete without displacement." },
      { title: "Type III", description: "Complete with partial displacement." },
      { title: "Type IV", description: "Complete with full displacement." }
    ]
  },
  pauwels: {
    summary: "Classifies femoral neck fractures by fracture-line angle.",
    use: "Adds a biomechanical shear component.",
    imaging: "Angle measured relative to the horizontal on AP view.",
    notes: "The more vertical the fracture, the more unstable it is.",
    keywords: ["pauwels", "hip", "vertical"],
    levels: [
      { title: "Type I", description: "Less than 30 degrees." },
      { title: "Type II", description: "Between 30 and 50 degrees." },
      { title: "Type III", description: "Greater than 50 degrees." }
    ]
  },
  pipkin: {
    summary: "Classifies femoral head fractures associated with dislocation.",
    use: "Very useful in high-energy hip trauma.",
    imaging: "CT after reduction to define exact extent.",
    notes: "It may coexist with acetabular or femoral neck injury.",
    keywords: ["pipkin", "femoral head", "hip dislocation"],
    levels: [
      { title: "Type I", description: "Fragment inferior to the fovea." },
      { title: "Type II", description: "Fragment superior to the fovea." },
      { title: "Type III", description: "Type I or II with femoral neck fracture." },
      { title: "Type IV", description: "Type I or II with acetabular fracture." }
    ]
  },
  vancouver: {
    summary: "Classifies periprosthetic femoral fractures around hip arthroplasty.",
    use: "Guides stem stability and bone stock assessment.",
    imaging: "Full femur radiographs and implant comparison.",
    notes: "Essential for deciding prosthetic revision.",
    keywords: ["vancouver", "periprosthetic", "hip prosthesis"],
    levels: [
      { title: "A", description: "Greater or lesser trochanter." },
      { title: "B1", description: "Around the stem with a stable implant." },
      { title: "B2", description: "Around the stem with a loose implant." },
      { title: "B3", description: "Loose implant and poor bone stock." },
      { title: "C", description: "Distal to the implant." }
    ]
  },
  tronzo: {
    summary: "Classifies intertrochanteric fractures by stability, posteromedial comminution, and reverse obliquity.",
    use: "Still used in some settings to describe stability of transtrochanteric hip fractures.",
    imaging: "Pelvis or hip AP and lateral views; CT when the pattern is unclear.",
    notes: "Types I-II are considered stable and type III onward unstable; published reproducibility is only moderate.",
    keywords: ["tronzo", "intertrochanteric", "stable", "unstable"],
    levels: [
      { title: "Type I", description: "Incomplete intertrochanteric fracture; stable." },
      { title: "Type II", description: "May include the lesser trochanter, but without posteromedial comminution; stable." },
      { title: "Type III", description: "Posteromedial comminution with medial shaft displacement and residual calcar support." },
      { title: "Type III variant", description: "Type III pattern associated with greater trochanter fracture." },
      { title: "Type IV", description: "Greater comminution, more vertical line, and lateral shaft displacement; unstable." },
      { title: "Type V", description: "Reverse-obliquity pattern running from lateral-distal to medial-proximal; unstable." }
    ]
  },
  schatzker: {
    summary: "Classifies tibial plateau fractures by split, depression, and bicondylar involvement.",
    use: "Organizes trauma energy and fixation planning.",
    imaging: "AP, lateral, and CT for articular depression.",
    notes: "Higher types usually carry more soft-tissue damage.",
    keywords: ["knee", "tibial plateau", "depression"],
    levels: [
      { title: "Type I", description: "Lateral split." },
      { title: "Type II", description: "Lateral split-depression." },
      { title: "Type III", description: "Pure lateral depression." },
      { title: "Type IV", description: "Medial plateau." },
      { title: "Type V", description: "Bicondylar." },
      { title: "Type VI", description: "Metaphyseal-diaphyseal dissociation." }
    ]
  },
  outerbridge: {
    summary: "Grades chondral lesions by depth and bone exposure.",
    use: "Common in arthroscopic reports and cartilage lesions.",
    imaging: "MRI helps, but the classic scale is arthroscopic.",
    notes: "Advanced grades are full-thickness lesions.",
    keywords: ["chondral", "cartilage", "outerbridge"],
    levels: [
      { title: "Grade I", description: "Softening and edema." },
      { title: "Grade II", description: "Superficial fissures." },
      { title: "Grade III", description: "Deep fissures." },
      { title: "Grade IV", description: "Subchondral bone exposure." }
    ]
  },
  "moore-patella": {
    summary: "Useful patellar fracture patterns: transverse, pole, marginal, osteochondral, and comminuted.",
    use: "Not a single universal scale, but it organizes patella fracture reading.",
    imaging: "AP, lateral, and skyline views when possible.",
    notes: "The extensor mechanism is very important.",
    keywords: ["patella", "kneecap", "transverse"],
    levels: [
      { title: "Transverse", description: "Classic horizontal fracture line." },
      { title: "Inferior pole", description: "Avulsion of the inferior pole." },
      { title: "Comminuted", description: "Multiple fragments, often from high-energy trauma." }
    ]
  },
  weber: {
    summary: "Locates fibular fractures in relation to the syndesmosis.",
    use: "Very practical for inferring ankle stability.",
    imaging: "AP, mortise, and lateral ankle views.",
    notes: "Type C injuries have greater syndesmotic risk.",
    keywords: ["ankle", "syndesmosis", "fibula"],
    levels: [
      { title: "Type A", description: "Below the syndesmosis." },
      { title: "Type B", description: "At the level of the syndesmosis." },
      { title: "Type C", description: "Above the syndesmosis." }
    ]
  },
  "lauge-hansen": {
    summary: "Describes ankle injuries by foot position and deforming force.",
    use: "Useful for understanding the sequence of ligament and bone injury.",
    imaging: "Correlation between fracture-line orientation and mechanism on radiographs.",
    notes: "Descriptive and broad, but somewhat less reproducible.",
    keywords: ["ankle", "supination", "pronation"],
    levels: [
      { title: "SER", description: "Supination-external rotation." },
      { title: "SAD", description: "Supination-adduction." },
      { title: "PER", description: "Pronation-external rotation." },
      { title: "PAB", description: "Pronation-abduction." }
    ]
  },
  herscovici: {
    summary: "Classifies medial malleolus fractures by fracture-line level.",
    use: "Useful for understanding medial complex stability.",
    imaging: "AP, mortise, and lateral views.",
    notes: "Higher fracture lines may be associated with more instability.",
    keywords: ["medial malleolus", "ankle", "herscovici"],
    levels: [
      { title: "Type A", description: "Malleolar tip." },
      { title: "Type B", description: "Between the tip and plafond." },
      { title: "Type C", description: "At the level of the plafond." },
      { title: "Type D", description: "Vertical supraplatform fracture." }
    ]
  },
  sanders: {
    summary: "CT-based classification of intra-articular calcaneus fractures.",
    use: "Very important for calcaneal surgery and prognosis.",
    imaging: "Coronal CT through the posterior facet.",
    notes: "More articular fragments usually mean worse prognosis.",
    keywords: ["foot", "calcaneus", "ct"],
    levels: [
      { title: "Type I", description: "Nondisplaced." },
      { title: "Type II", description: "Two articular fragments." },
      { title: "Type III", description: "Three articular fragments." },
      { title: "Type IV", description: "Comminuted with four or more fragments." }
    ]
  },
  myerson: {
    summary: "Classifies Lisfranc injuries by direction and extent of displacement.",
    use: "Very useful for midfoot trauma and tarsometatarsal injuries.",
    imaging: "Weight-bearing radiographs if possible and CT when uncertain.",
    notes: "It can be missed if not actively sought.",
    keywords: ["lisfranc", "midfoot", "tarsometatarsal"],
    levels: [
      { title: "Type A", description: "Total displacement in one direction." },
      { title: "Type B", description: "Partial medial or lateral displacement." },
      { title: "Type C", description: "Divergent displacement." }
    ]
  },
  hawkins: {
    summary: "Classifies talar neck fractures by associated dislocation.",
    use: "Helps estimate risk of avascular necrosis of the talus.",
    imaging: "AP, lateral, and CT to define subtalar and tibiotalar involvement.",
    notes: "A greater number of dislocated joints implies worse blood supply.",
    keywords: ["talus", "talar neck", "hawkins"],
    levels: [
      { title: "Type I", description: "No dislocation." },
      { title: "Type II", description: "Subtalar dislocation." },
      { title: "Type III", description: "Subtalar and tibiotalar dislocation." },
      { title: "Type IV", description: "Also talonavicular dislocation." }
    ]
  },
  denis: {
    summary: "Three-column model for thoracolumbar trauma.",
    use: "Helps understand stability and the need for additional imaging.",
    imaging: "Radiographs and CT; MRI if ligament injury is suspected.",
    notes: "Middle-column injury increases instability.",
    keywords: ["spine", "thoracolumbar", "three columns"],
    levels: [
      { title: "Anterior", description: "Anterior ligament and anterior vertebral body." },
      { title: "Middle", description: "Posterior half of the vertebral body and posterior ligament." },
      { title: "Posterior", description: "Posterior elements and ligament complex." }
    ]
  },
  "allen-ferguson": {
    summary: "Classifies subaxial cervical trauma by mechanism.",
    use: "Provides a mechanical framework for complex cervical injuries.",
    imaging: "Radiographs, CT, and MRI depending on disc-ligament injury.",
    notes: "Very useful for reasoning through mechanism and stability.",
    keywords: ["cervical", "subaxial", "mechanism"],
    levels: [
      { title: "Flexion-compression", description: "Anterior load in flexion." },
      { title: "Distraction-flexion", description: "Progressive posterior failure." },
      { title: "Compression-extension", description: "Posterior load in extension." },
      { title: "Distraction-extension", description: "Separation in extension." }
    ]
  },
  tlics: {
    summary: "Scores thoracolumbar trauma by morphology, PLC, and neurologic status.",
    use: "Helps decide surgical versus conservative management.",
    imaging: "CT and MRI depending on ligament injury.",
    notes: "Combines imaging, stability, and neurologic status.",
    keywords: ["tlics", "thoracolumbar", "neurologic"],
    levels: [
      { title: "Morphology", description: "Compression, burst, translation, or distraction." },
      { title: "PLC", description: "Integrity of the posterior ligamentous complex." },
      { title: "Neurologic", description: "Neurologic status as part of the final score." }
    ]
  }
};

const regionGlyphs = {
  Clavicle: "C",
  Shoulder: "S",
  Elbow: "E",
  Wrist: "W",
  Hand: "H",
  Spine: "SP",
  Pelvis: "P",
  Hip: "HIP",
  Knee: "K",
  Ankle: "A",
  Foot: "F",
  Pediatrics: "PED",
  "General Trauma": "GT"
};

const imageManifest = {
  allman: ["assets/classifications/allman.jpg"],
  denis: ["assets/classifications/denis.png"],
  fernandez: ["assets/classifications/fernandez.jpg"],
  frykman: ["assets/classifications/frykman.jpg"],
  mason: ["assets/classifications/mason.jpg"],
  mayfield: [
    "assets/classifications/mayfield-1.jpg",
    "assets/classifications/mayfield-2.jpg",
    "assets/classifications/mayfield-3.jpg"
  ],
  "regan-morrey": ["assets/classifications/regan-morrey.jpg"],
  rockwood: ["assets/classifications/rockwood.jpg"],
  "neer-clavicle": ["assets/classifications/neer-clavicle.jpg"],
  "neer-proximal-humerus": ["assets/classifications/neer-proximal-humerus.jpg"],
  ideberg: ["assets/classifications/ideberg.jpg"],
  "gustilo-anderson": ["assets/classifications/gustilo-anderson.jpg"],
  tscherne: ["assets/classifications/tscherne.jpg"],
  gartland: ["assets/classifications/gartland.jpg"],
  song: ["assets/classifications/song.jpg"],
  "morrey-terrible": ["assets/classifications/terrible-triad.jpg"],
  "salter-harris": [
    "assets/classifications/salter-harris-1.jpg",
    "assets/classifications/salter-harris-2.jpg"
  ],
  tlics: [
    "assets/classifications/tlics-1.jpg",
    "assets/classifications/tlics-2.jpg"
  ]
};

const state = {
  language: "en",
  search: "",
  region: "all",
  type: "all",
  activeId: classifications[0]?.id ?? null
};

const searchInput = document.querySelector("#searchInput");
const languageToggle = document.querySelector("#languageToggle");
const regionFilter = document.querySelector("#regionFilter");
const typeFilter = document.querySelector("#typeFilter");
const resultsList = document.querySelector("#resultsList");
const resultsCount = document.querySelector("#resultsCount");
const resultsHeading = document.querySelector("#resultsHeading");
const regionChips = document.querySelector("#regionChips");
const classificationCount = document.querySelector("#classificationCount");
const hotspots = [...document.querySelectorAll(".anatomy-hotspot")];

const emptyState = document.querySelector("#emptyState");
const detailsCard = document.querySelector("#detailsCard");
const detailRegion = document.querySelector("#detailRegion");
const detailName = document.querySelector("#detailName");
const detailType = document.querySelector("#detailType");
const detailSummary = document.querySelector("#detailSummary");
const detailImage = document.querySelector("#detailImage");
const detailImageStrip = document.querySelector("#detailImageStrip");
const imageHint = document.querySelector("#imageHint");
const detailUse = document.querySelector("#detailUse");
const detailLevels = document.querySelector("#detailLevels");
const detailImaging = document.querySelector("#detailImaging");
const detailNotes = document.querySelector("#detailNotes");
const detailKeywords = document.querySelector("#detailKeywords");
const regionView = document.querySelector("#regionView");
const regionViewBackdrop = document.querySelector("#regionViewBackdrop");
const regionViewClose = document.querySelector("#regionViewClose");
const regionViewTitle = document.querySelector("#regionViewTitle");
const regionViewCopy = document.querySelector("#regionViewCopy");
const regionViewList = document.querySelector("#regionViewList");
const regionViewImage = document.querySelector("#regionViewImage");
const regionViewImageStrip = document.querySelector("#regionViewImageStrip");
const regionViewDetailName = document.querySelector("#regionViewDetailName");
const regionViewDetailType = document.querySelector("#regionViewDetailType");
const regionViewDetailSummary = document.querySelector("#regionViewDetailSummary");
const regionViewLevels = document.querySelector("#regionViewLevels");
const imageLightbox = document.querySelector("#imageLightbox");
const imageLightboxBackdrop = document.querySelector("#imageLightboxBackdrop");
const imageLightboxClose = document.querySelector("#imageLightboxClose");
const imageLightboxImage = document.querySelector("#imageLightboxImage");
const heroEyebrow = document.querySelector("#heroEyebrow");
const betaBadge = document.querySelector("#betaBadge");
const heroTitle = document.querySelector("#heroTitle");
const heroText = document.querySelector("#heroText");
const betaCopy = document.querySelector("#betaCopy");
const heroStatLabel = document.querySelector("#heroStatLabel");
const heroStatFootnote = document.querySelector("#heroStatFootnote");
const skeletonSectionLabel = document.querySelector("#skeletonSectionLabel");
const skeletonHeading = document.querySelector("#skeletonHeading");
const skeletonIllustration = document.querySelector("#skeletonIllustration");
const searchLabel = document.querySelector("#searchLabel");
const regionLabel = document.querySelector("#regionLabel");
const typeLabel = document.querySelector("#typeLabel");
const resultsSectionLabel = document.querySelector("#resultsSectionLabel");
const emptySectionLabel = document.querySelector("#emptySectionLabel");
const emptyTitle = document.querySelector("#emptyTitle");
const emptyCopy = document.querySelector("#emptyCopy");
const detailUseHeading = document.querySelector("#detailUseHeading");
const detailClassificationHeading = document.querySelector("#detailClassificationHeading");
const detailImagingHeading = document.querySelector("#detailImagingHeading");
const detailNotesHeading = document.querySelector("#detailNotesHeading");
const detailKeywordsHeading = document.querySelector("#detailKeywordsHeading");
const regionViewSectionLabel = document.querySelector("#regionViewSectionLabel");
const brandSectionLabel = document.querySelector("#brandSectionLabel");
const brandTitle = document.querySelector("#brandTitle");
const brandCopy = document.querySelector("#brandCopy");
const brandLink = document.querySelector("#brandLink");
const brandCopyright = document.querySelector("#brandCopyright");
const brandQr = document.querySelector("#brandQr");

function t(key) {
  return uiText[state.language][key];
}

function getRegionLabel(region) {
  return regionLabels[state.language]?.[region] ?? region;
}

function getTypeLabel(type) {
  return typeLabels[type]?.[state.language] ?? type;
}

function getLocalizedItem(item) {
  if (state.language !== "en") {
    return item;
  }

  const translated = englishContent[item.id];
  if (!translated) {
    return item;
  }

  return {
    ...item,
    ...translated,
    keywords: translated.keywords ?? item.keywords,
    levels: translated.levels ?? item.levels
  };
}

function renderStaticText() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  languageToggle.textContent = t("languageToggle");
  heroEyebrow.textContent = t("heroEyebrow");
  betaBadge.textContent = t("betaBadge");
  heroTitle.textContent = t("heroTitle");
  heroText.textContent = t("heroText");
  betaCopy.textContent = t("betaCopy");
  heroStatLabel.textContent = t("heroStatLabel");
  heroStatFootnote.textContent = t("heroStatFootnote");
  skeletonSectionLabel.textContent = t("skeletonSectionLabel");
  skeletonHeading.textContent = t("skeletonHeading");
  skeletonIllustration.alt = t("skeletonAlt");
  searchLabel.textContent = t("searchLabel");
  searchInput.placeholder = t("searchPlaceholder");
  regionLabel.textContent = t("regionLabel");
  typeLabel.textContent = t("typeLabel");
  resultsSectionLabel.textContent = t("resultsSectionLabel");
  emptySectionLabel.textContent = t("emptySectionLabel");
  emptyTitle.textContent = t("emptyTitle");
  emptyCopy.textContent = t("emptyCopy");
  detailUseHeading.textContent = t("detailUseHeading");
  detailClassificationHeading.textContent = t("detailClassificationHeading");
  detailImagingHeading.textContent = t("detailImagingHeading");
  detailNotesHeading.textContent = t("detailNotesHeading");
  detailKeywordsHeading.textContent = t("detailKeywordsHeading");
  regionViewSectionLabel.textContent = t("regionViewSectionLabel");
  regionViewClose.textContent = t("regionViewClose");
  brandSectionLabel.textContent = t("brandSectionLabel");
  brandTitle.textContent = t("brandTitle");
  brandCopy.textContent = t("brandCopy");
  brandLink.textContent = t("brandLink");
  brandCopyright.textContent = t("brandCopyright");
  brandQr.alt = t("brandQrAlt");
  imageLightboxClose.textContent = state.language === "en" ? "Close" : "Cerrar";
}

function uniqueValues(key) {
  return [...new Set(classifications.map((item) => item[key]))].sort();
}

function escapeSvgText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function toDataUri(svg) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createClassificationImage(item, mode = "detail") {
  const localizedItem = getLocalizedItem(item);
  const w = mode === "thumb" ? 180 : 760;
  const h = mode === "thumb" ? 180 : 360;
  const glyph = regionGlyphs[localizedItem.region] ?? "ORTHO";
  const name = escapeSvgText(localizedItem.name);
  const region = escapeSvgText(getRegionLabel(localizedItem.region));
  const type = escapeSvgText(getTypeLabel(localizedItem.type));
  const levelText = escapeSvgText(localizedItem.levels.map((level) => level.title).slice(0, 4).join(" / "));
  const summary = escapeSvgText(localizedItem.summary);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff8ef"/>
          <stop offset="55%" stop-color="#edf6f3"/>
          <stop offset="100%" stop-color="#f1eadb"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1">
          <stop offset="0%" stop-color="#0f6c5c"/>
          <stop offset="100%" stop-color="#d97c3f"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" rx="28" fill="url(#bg)"/>
      <circle cx="${mode === "thumb" ? 56 : 110}" cy="${mode === "thumb" ? 54 : 92}" r="${mode === "thumb" ? 36 : 64}" fill="#f7ecdc" stroke="#d5c2a3" stroke-width="3"/>
      <text x="${mode === "thumb" ? 56 : 110}" y="${mode === "thumb" ? 62 : 104}" text-anchor="middle" font-family="Space Grotesk, Arial" font-size="${mode === "thumb" ? 22 : 38}" font-weight="700" fill="#0f6c5c">${glyph}</text>
      <rect x="${mode === "thumb" ? 14 : 28}" y="${mode === "thumb" ? 112 : 182}" width="${mode === "thumb" ? 152 : 704}" height="${mode === "thumb" ? 54 : 122}" rx="20" fill="rgba(255,255,255,0.7)" stroke="rgba(15,108,92,0.16)"/>
      <text x="${mode === "thumb" ? 16 : 34}" y="${mode === "thumb" ? 24 : 40}" font-family="Space Grotesk, Arial" font-size="${mode === "thumb" ? 12 : 18}" font-weight="700" fill="#0f6c5c">${region}</text>
      <text x="${mode === "thumb" ? 16 : 34}" y="${mode === "thumb" ? 42 : 72}" font-family="Space Grotesk, Arial" font-size="${mode === "thumb" ? 16 : 28}" font-weight="700" fill="#1d2a2a">${name}</text>
      <text x="${mode === "thumb" ? 16 : 34}" y="${mode === "thumb" ? 58 : 98}" font-family="Source Sans 3, Arial" font-size="${mode === "thumb" ? 10 : 16}" fill="#5e6b67">${type}</text>
      <rect x="${mode === "thumb" ? 14 : 28}" y="${mode === "thumb" ? 72 : 122}" width="${mode === "thumb" ? 120 : 190}" height="${mode === "thumb" ? 22 : 32}" rx="11" fill="url(#accent)"/>
      <text x="${mode === "thumb" ? 74 : 123}" y="${mode === "thumb" ? 87 : 143}" text-anchor="middle" font-family="Source Sans 3, Arial" font-size="${mode === "thumb" ? 10 : 15}" font-weight="700" fill="#fffaf2">${escapeSvgText(t("levelsCount")(localizedItem.levels.length))}</text>
      <text x="${mode === "thumb" ? 24 : 48}" y="${mode === "thumb" ? 132 : 214}" font-family="Source Sans 3, Arial" font-size="${mode === "thumb" ? 10 : 17}" font-weight="700" fill="#97501f">${escapeSvgText(t("pointsLabel"))}</text>
      <text x="${mode === "thumb" ? 24 : 48}" y="${mode === "thumb" ? 148 : 242}" font-family="Source Sans 3, Arial" font-size="${mode === "thumb" ? 9 : 15}" fill="#5e6b67">${levelText}</text>
      <text x="${mode === "thumb" ? 24 : 48}" y="${mode === "thumb" ? 162 : 270}" font-family="Source Sans 3, Arial" font-size="${mode === "thumb" ? 8 : 14}" fill="#5e6b67">${summary}</text>
    </svg>
  `;
  return toDataUri(svg);
}

function getCustomImagePath(item) {
  return `assets/classifications/${item.id}.jpg`;
}

function getCustomImageCandidates(item) {
  return imageManifest[item.id] ?? [`assets/classifications/${item.id}.jpg`];
}

function getImageSource(item, mode = "detail") {
  if (item.availableImagePaths?.length) {
    return item.availableImagePaths[0];
  }

  if (!item.customImageUnavailable) {
    return getCustomImageCandidates(item)[0];
  }

  return createClassificationImage(item, mode);
}

function markCustomImageLoaded(itemId) {
  const target = classifications.find((item) => item.id === itemId);
  if (!target) {
    return;
  }

  target.customImageLoaded = true;
  target.customImageUnavailable = false;

  if (state.activeId === itemId) {
    detailImage.src = getImageSource(target, "detail");
  }

  const thumb = document.querySelector(`[data-thumb-id="${itemId}"]`);
  if (thumb) {
    thumb.src = getImageSource(target, "thumb");
  }
}

function markCustomImageUnavailable(itemId) {
  const target = classifications.find((item) => item.id === itemId);
  if (!target) {
    return;
  }

  target.customImageLoaded = false;
  target.customImageUnavailable = true;
}

function ensureAvailableImagePaths(item) {
  item.availableImagePaths = getCustomImageCandidates(item);
}

function setActiveDetailImage(item, src) {
  detailImage.dataset.itemId = item.id;
  detailImage.src = src;
  detailImage.alt = t("detailImageAlt")(item.name);

  const thumbs = [...detailImageStrip.querySelectorAll(".detail-thumb")];
  thumbs.forEach((thumb) => {
    thumb.classList.toggle("active", thumb.dataset.src === src);
  });
}

function openImageLightbox(src, alt) {
  imageLightboxImage.src = src;
  imageLightboxImage.alt = alt;
  imageLightbox.classList.remove("hidden");
}

function closeImageLightbox() {
  imageLightbox.classList.add("hidden");
  imageLightboxImage.src = "";
}

function setActiveRegionViewImage(item, src) {
  const localizedItem = getLocalizedItem(item);
  regionViewImage.dataset.itemId = item.id;
  regionViewImage.src = src;
  regionViewImage.alt = t("regionViewImageAlt")(localizedItem.name);

  const thumbs = [...regionViewImageStrip.querySelectorAll(".region-view-image-thumb")];
  thumbs.forEach((thumb) => {
    thumb.classList.toggle("active", thumb.dataset.src === src);
  });
}

function renderDetailImageStrip(item) {
  detailImageStrip.innerHTML = "";

  if (!item.availableImagePaths || item.availableImagePaths.length <= 1) {
    detailImageStrip.classList.add("hidden");
    return;
  }

  detailImageStrip.classList.remove("hidden");
  item.availableImagePaths.forEach((src, index) => {
    const thumb = document.createElement("img");
    thumb.className = `detail-thumb${index === 0 ? " active" : ""}`;
    thumb.src = src;
    thumb.alt = `${item.name} vista ${index + 1}`;
    thumb.dataset.src = src;
    thumb.addEventListener("click", () => {
      setActiveDetailImage(item, src);
      openImageLightbox(src, `${t("detailImageAlt")(item.name)} ${index + 1}`);
    });
    detailImageStrip.append(thumb);
  });
}

function renderRegionViewImageStrip(item) {
  regionViewImageStrip.innerHTML = "";

  if (!item.availableImagePaths || item.availableImagePaths.length <= 1) {
    regionViewImageStrip.classList.add("hidden");
    return;
  }

  regionViewImageStrip.classList.remove("hidden");
  item.availableImagePaths.forEach((src, index) => {
    const thumb = document.createElement("img");
    thumb.className = `region-view-image-thumb${index === 0 ? " active" : ""}`;
    thumb.src = src;
    thumb.alt = `${getLocalizedItem(item).name} preview ${index + 1}`;
    thumb.dataset.src = src;
    thumb.addEventListener("click", () => {
      setActiveRegionViewImage(item, src);
      openImageLightbox(src, `${t("regionViewImageAlt")(getLocalizedItem(item).name)} ${index + 1}`);
    });
    regionViewImageStrip.append(thumb);
  });
}

function populateFilters() {
  regionFilter.innerHTML = "";
  typeFilter.innerHTML = "";

  const allRegionOption = document.createElement("option");
  allRegionOption.value = "all";
  allRegionOption.textContent = t("allOption");
  regionFilter.append(allRegionOption);

  uniqueValues("region").forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = getRegionLabel(region);
    regionFilter.append(option);
  });

  const allTypeOption = document.createElement("option");
  allTypeOption.value = "all";
  allTypeOption.textContent = t("allOption");
  typeFilter.append(allTypeOption);

  uniqueValues("type").forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = getTypeLabel(type);
    typeFilter.append(option);
  });

  regionFilter.value = state.region;
  typeFilter.value = state.type;
}

function renderRegionChips() {
  regionChips.innerHTML = "";

  const allChip = document.createElement("button");
  allChip.className = `chip${state.region === "all" ? " active" : ""}`;
  allChip.type = "button";
  allChip.textContent = t("allOption");
  allChip.addEventListener("click", () => {
    state.region = "all";
    regionFilter.value = "all";
    selectFirstItemForCurrentFilters("all");
    render();
  });
  regionChips.append(allChip);

  anatomyRegions.forEach((region) => {
    const chip = document.createElement("button");
    chip.className = `chip${state.region === region ? " active" : ""}`;
    chip.type = "button";
    chip.textContent = getRegionLabel(region);
    chip.addEventListener("click", () => {
      state.region = region;
      regionFilter.value = region;
      selectFirstItemForCurrentFilters(region);
      render();
    });
    regionChips.append(chip);
  });
}

function getFilteredItems() {
  const query = state.search.trim().toLowerCase();

  return classifications.filter((item) => {
    const localizedItem = getLocalizedItem(item);
    const matchesRegion = state.region === "all" || item.region === state.region;
    const matchesType = state.type === "all" || item.type === state.type;
    const haystack = [
      item.name,
      item.region,
      getRegionLabel(item.region),
      getTypeLabel(item.type),
      item.summary,
      item.use,
      item.imaging,
      item.notes,
      ...item.keywords,
      ...item.levels.flatMap((level) => [level.title, level.description])
      ,
      localizedItem.summary,
      localizedItem.use,
      localizedItem.imaging,
      localizedItem.notes,
      ...localizedItem.keywords,
      ...localizedItem.levels.flatMap((level) => [level.title, level.description])
    ].join(" ").toLowerCase();

    return matchesRegion && matchesType && (!query || haystack.includes(query));
  });
}

function ensureActiveItem(items) {
  if (!items.length) {
    state.activeId = null;
    return null;
  }

  if (!items.some((item) => item.id === state.activeId)) {
    state.activeId = items[0].id;
  }

  return items.find((item) => item.id === state.activeId) ?? items[0];
}

function selectFirstItemForCurrentFilters(regionOverride = state.region) {
  const query = state.search.trim().toLowerCase();

  const firstMatch = classifications.find((item) => {
    const localizedItem = getLocalizedItem(item);
    const matchesRegion = regionOverride === "all" || item.region === regionOverride;
    const matchesType = state.type === "all" || item.type === state.type;
    const haystack = [
      item.name,
      item.region,
      getRegionLabel(item.region),
      getTypeLabel(item.type),
      item.summary,
      item.use,
      item.imaging,
      item.notes,
      ...item.keywords,
      ...item.levels.flatMap((level) => [level.title, level.description])
      ,
      localizedItem.summary,
      localizedItem.use,
      localizedItem.imaging,
      localizedItem.notes,
      ...localizedItem.keywords,
      ...localizedItem.levels.flatMap((level) => [level.title, level.description])
    ].join(" ").toLowerCase();

    return matchesRegion && matchesType && (!query || haystack.includes(query));
  });

  if (firstMatch) {
    state.activeId = firstMatch.id;
  }
}

function renderHotspots() {
  hotspots.forEach((button) => {
    button.classList.toggle("active", button.dataset.region === state.region);
    button.textContent = getRegionLabel(button.dataset.region);
  });
}

function renderResults(items) {
  resultsList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "no-results";
    empty.textContent = t("noResults");
    resultsList.append(empty);
    return;
  }

  items.forEach((item) => {
    const localizedItem = getLocalizedItem(item);
    const card = document.createElement("button");
    card.className = `result-card${item.id === state.activeId ? " active" : ""}`;
    card.type = "button";
    card.innerHTML = `
      <div class="result-layout">
        <img class="result-thumb" data-thumb-id="${item.id}" src="${getImageSource(item, "thumb")}" alt="${t("detailImageAlt")(localizedItem.name)}">
        <div>
          <div class="result-topline">
            <h3 class="result-name">${localizedItem.name}</h3>
            <span class="result-chip">${getTypeLabel(localizedItem.type)}</span>
          </div>
          <p class="result-summary">${localizedItem.summary}</p>
          <div class="result-meta">
            <span>${getRegionLabel(localizedItem.region)}</span>
            <span>${t("levelsCount")(localizedItem.levels.length)}</span>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      state.activeId = item.id;
      render();
    });

    resultsList.append(card);
  });
}

function renderDetails(item) {
  if (!item) {
    detailsCard.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  detailsCard.classList.remove("hidden");

  const localizedItem = getLocalizedItem(item);
  detailRegion.textContent = getRegionLabel(localizedItem.region);
  detailName.textContent = localizedItem.name;
  detailType.textContent = getTypeLabel(localizedItem.type);
  detailSummary.textContent = localizedItem.summary;
  ensureAvailableImagePaths(item);
  setActiveDetailImage(item, getImageSource(item, "detail"));
  renderDetailImageStrip(item);
  imageHint.textContent = item.availableImagePaths.length > 1
    ? t("imageMultiple")(item.availableImagePaths)
    : t("imageSingle")(item.availableImagePaths[0]);
  detailUse.textContent = localizedItem.use;
  detailImaging.textContent = localizedItem.imaging;
  detailNotes.textContent = localizedItem.notes;

  detailLevels.innerHTML = "";
  localizedItem.levels.forEach((level) => {
    const card = document.createElement("div");
    card.className = "level-card";
    card.innerHTML = `<h4>${level.title}</h4><p>${level.description}</p>`;
    detailLevels.append(card);
  });

  detailKeywords.innerHTML = "";
  localizedItem.keywords.forEach((keyword) => {
    const tag = document.createElement("span");
    tag.className = "keyword";
    tag.textContent = keyword;
    detailKeywords.append(tag);
  });
}

function renderHeading(items) {
  if (state.search.trim()) {
    resultsHeading.textContent = `${t("resultsHeadingSearchPrefix")} "${state.search.trim()}"`;
  } else if (state.region !== "all") {
    resultsHeading.textContent = `${t("resultsHeadingRegionPrefix")} ${getRegionLabel(state.region)}`;
  } else if (state.type !== "all") {
    resultsHeading.textContent = `${t("resultsHeadingTypePrefix")} ${getTypeLabel(state.type)}`;
  } else {
    resultsHeading.textContent = t("resultsHeadingAll");
  }

  resultsCount.textContent = t("resultsCount")(items.length);
}

function renderRegionViewDetail(item) {
  const localizedItem = getLocalizedItem(item);
  ensureAvailableImagePaths(item);
  setActiveRegionViewImage(item, getImageSource(item, "detail"));
  renderRegionViewImageStrip(item);
  regionViewDetailName.textContent = localizedItem.name;
  regionViewDetailType.textContent = getTypeLabel(localizedItem.type);
  regionViewDetailSummary.textContent = localizedItem.summary;

  regionViewLevels.innerHTML = "";
  localizedItem.levels.forEach((level) => {
    const block = document.createElement("div");
    block.className = "region-view-level";
    block.innerHTML = `<strong>${level.title}</strong><p>${level.description}</p>`;
    regionViewLevels.append(block);
  });
}

function openRegionView(region) {
  const regionItems = classifications.filter((item) => item.region === region);
  if (!regionItems.length) {
    return;
  }

  regionViewTitle.textContent = t("regionViewTitle")(getRegionLabel(region));
  regionViewCopy.textContent = t("regionViewCopy")(getRegionLabel(region));
  regionViewList.innerHTML = "";

  regionItems.forEach((item, index) => {
    const localizedItem = getLocalizedItem(item);
    ensureAvailableImagePaths(item);
    const card = document.createElement("button");
    card.className = `region-view-card${index === 0 ? " active" : ""}`;
    card.type = "button";
    card.innerHTML = `
      <div class="region-view-card-layout">
        <img class="region-view-thumb" src="${getImageSource(item, "thumb")}" alt="${t("detailImageAlt")(localizedItem.name)}">
        <div>
          <div class="region-view-card-topline">
            <h3>${localizedItem.name}</h3>
            <span class="result-chip">${getTypeLabel(localizedItem.type)}</span>
          </div>
          <p>${localizedItem.summary}</p>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      [...regionViewList.querySelectorAll(".region-view-card")].forEach((entry) => entry.classList.remove("active"));
      card.classList.add("active");
      renderRegionViewDetail(item);
    });
    regionViewList.append(card);
  });

  renderRegionViewDetail(regionItems[0]);
  regionView.classList.remove("hidden");
}

function closeRegionView() {
  regionView.classList.add("hidden");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Keep the app usable even if offline support is unavailable.
    });
  });
}

function render() {
  const items = getFilteredItems();
  const activeItem = ensureActiveItem(items);
  renderStaticText();
  renderRegionChips();
  renderHotspots();
  populateFilters();
  renderHeading(items);
  renderResults(items);
  renderDetails(activeItem);

  if (!regionView.classList.contains("hidden") && state.region !== "all") {
    openRegionView(state.region);
  }
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

regionFilter.addEventListener("change", (event) => {
  state.region = event.target.value;
  selectFirstItemForCurrentFilters(state.region);
  render();
});

typeFilter.addEventListener("change", (event) => {
  state.type = event.target.value;
  render();
});

languageToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "es" : "en";
  render();
});

detailImage.addEventListener("error", () => {
  const itemId = detailImage.dataset.itemId;
  const item = classifications.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  markCustomImageUnavailable(itemId);
  item.availableImagePaths = [];
  detailImageStrip.classList.add("hidden");
  detailImage.src = createClassificationImage(item, "detail");
});

detailImage.addEventListener("load", () => {
  const itemId = detailImage.dataset.itemId;
  if (itemId && !detailImage.src.startsWith("data:image/svg+xml")) {
    markCustomImageLoaded(itemId);
  }
});

detailImage.addEventListener("click", () => {
  if (detailImage.src) {
    openImageLightbox(detailImage.src, detailImage.alt);
  }
});

regionViewImage.addEventListener("click", () => {
  if (regionViewImage.src) {
    openImageLightbox(regionViewImage.src, regionViewImage.alt);
  }
});

resultsList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLImageElement)) {
    return;
  }

  if (target.classList.contains("result-thumb")) {
    openImageLightbox(target.src, target.alt);
  }
});

regionViewList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLImageElement)) {
    return;
  }

  if (target.classList.contains("region-view-thumb")) {
    openImageLightbox(target.src, target.alt);
  }
});

resultsList.addEventListener("error", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLImageElement)) {
    return;
  }

  const itemId = target.dataset.thumbId;
  const item = classifications.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  markCustomImageUnavailable(itemId);
  item.availableImagePaths = [];
  target.src = createClassificationImage(item, "thumb");
}, true);

resultsList.addEventListener("load", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLImageElement)) {
    return;
  }

  const itemId = target.dataset.thumbId;
  if (itemId && !target.src.startsWith("data:image/svg+xml")) {
    markCustomImageLoaded(itemId);
  }
}, true);

hotspots.forEach((button) => {
  button.addEventListener("click", () => {
    state.region = button.dataset.region;
    regionFilter.value = state.region;
    selectFirstItemForCurrentFilters(state.region);
    render();
    openRegionView(state.region);
  });
});

regionViewClose.addEventListener("click", closeRegionView);
regionViewBackdrop.addEventListener("click", closeRegionView);
imageLightboxClose.addEventListener("click", closeImageLightbox);
imageLightboxBackdrop.addEventListener("click", closeImageLightbox);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageLightbox();
  }
});

classificationCount.textContent = String(classifications.length);
render();
registerServiceWorker();

