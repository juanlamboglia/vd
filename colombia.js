document.addEventListener('DOMContentLoaded', function() {
    const departamentoInput = document.getElementById('depto-residencia');
    const ciudadInput = document.getElementById('ciudad-residencia');
    const departamentoLaboralInput = document.getElementById('depto-laboral');
    const ciudadLaboralInput = document.getElementById('ciudad-laboral');
    const departamentosDatalist = document.getElementById('departamentos');
    const departamentosLaboralesDatalist = document.getElementById('departamentos-laborales');
    const ciudadesDatalist = document.getElementById('ciudades');
    const ciudadesLaboralesDatalist = document.getElementById('ciudades-laborales');

    const data = {
    "departamentos": {
        "Amazonas": {
            "municipios": [
                {
                    "nombre": "El Encanto",
                    "codigo": "91263"
                },
                {
                    "nombre": "La Chorrera",
                    "codigo": "91405"
                },
                {
                    "nombre": "La Pedrera",
                    "codigo": "91407"
                },
                {
                    "nombre": "La Victoria",
                    "codigo": "91430"
                },
                {
                    "nombre": "Leticia",
                    "codigo": "91001"
                },
                {
                    "nombre": "Miriti - Parana",
                    "codigo": "91460"
                },
                {
                    "nombre": "Puerto Alegria",
                    "codigo": "91530"
                },
                {
                    "nombre": "Puerto Arica",
                    "codigo": "91536"
                },
                {
                    "nombre": "Puerto Nariño",
                    "codigo": "91540"
                },
                {
                    "nombre": "Puerto Santander",
                    "codigo": "91669"
                },
                {
                    "nombre": "Tarapaca",
                    "codigo": "91798"
                }
            ]
        },
        "Antioquia": {
            "municipios": [
                {
                    "nombre": "Abejorral",
                    "codigo": "5002"
                },
                {
                    "nombre": "Abriaqui",
                    "codigo": "5004"
                },
                {
                    "nombre": "Alejandria",
                    "codigo": "5021"
                },
                {
                    "nombre": "Amaga",
                    "codigo": "5030"
                },
                {
                    "nombre": "Amalfi",
                    "codigo": "5031"
                },
                {
                    "nombre": "Andes",
                    "codigo": "5034"
                },
                {
                    "nombre": "Angelopolis",
                    "codigo": "5036"
                },
                {
                    "nombre": "Angostura",
                    "codigo": "5038"
                },
                {
                    "nombre": "Anori",
                    "codigo": "5040"
                },
                {
                    "nombre": "Anza",
                    "codigo": "5044"
                },
                {
                    "nombre": "Apartado",
                    "codigo": "5045"
                },
                {
                    "nombre": "Arboletes",
                    "codigo": "5051"
                },
                {
                    "nombre": "Argelia",
                    "codigo": "5055"
                },
                {
                    "nombre": "Armenia",
                    "codigo": "5059"
                },
                {
                    "nombre": "Barbosa",
                    "codigo": "5079"
                },
                {
                    "nombre": "Bello",
                    "codigo": "5088"
                },
                {
                    "nombre": "Belmira",
                    "codigo": "5086"
                },
                {
                    "nombre": "Betania",
                    "codigo": "5091"
                },
                {
                    "nombre": "Betulia",
                    "codigo": "5093"
                },
                {
                    "nombre": "Briceño",
                    "codigo": "5107"
                },
                {
                    "nombre": "Buritica",
                    "codigo": "5113"
                },
                {
                    "nombre": "Caceres",
                    "codigo": "5120"
                },
                {
                    "nombre": "Caicedo",
                    "codigo": "5125"
                },
                {
                    "nombre": "Caldas",
                    "codigo": "5129"
                },
                {
                    "nombre": "Campamento",
                    "codigo": "5134"
                },
                {
                    "nombre": "Cañasgordas",
                    "codigo": "5138"
                },
                {
                    "nombre": "Caracoli",
                    "codigo": "5142"
                },
                {
                    "nombre": "Caramanta",
                    "codigo": "5145"
                },
                {
                    "nombre": "Carepa",
                    "codigo": "5147"
                },
                {
                    "nombre": "Carolina",
                    "codigo": "5150"
                },
                {
                    "nombre": "Caucasia",
                    "codigo": "5154"
                },
                {
                    "nombre": "Chigorodo",
                    "codigo": "5172"
                },
                {
                    "nombre": "Cisneros",
                    "codigo": "5190"
                },
                {
                    "nombre": "Ciudad Bolivar",
                    "codigo": "5101"
                },
                {
                    "nombre": "Cocorna",
                    "codigo": "5197"
                },
                {
                    "nombre": "Concepcion",
                    "codigo": "5206"
                },
                {
                    "nombre": "Concordia",
                    "codigo": "5209"
                },
                {
                    "nombre": "Copacabana",
                    "codigo": "5212"
                },
                {
                    "nombre": "Dabeiba",
                    "codigo": "5234"
                },
                {
                    "nombre": "Don Matias",
                    "codigo": "5237"
                },
                {
                    "nombre": "Ebejico",
                    "codigo": "5240"
                },
                {
                    "nombre": "El Bagre",
                    "codigo": "5250"
                },
                {
                    "nombre": "El Carmen De Viboral",
                    "codigo": "5148"
                },
                {
                    "nombre": "El Santuario",
                    "codigo": "5697"
                },
                {
                    "nombre": "Entrerrios",
                    "codigo": "5264"
                },
                {
                    "nombre": "Envigado",
                    "codigo": "5266"
                },
                {
                    "nombre": "Fredonia",
                    "codigo": "5282"
                },
                {
                    "nombre": "Frontino",
                    "codigo": "5284"
                },
                {
                    "nombre": "Giraldo",
                    "codigo": "5306"
                },
                {
                    "nombre": "Girardota",
                    "codigo": "5308"
                },
                {
                    "nombre": "Gomez Plata",
                    "codigo": "5310"
                },
                {
                    "nombre": "Granada",
                    "codigo": "5313"
                },
                {
                    "nombre": "Guadalupe",
                    "codigo": "5315"
                },
                {
                    "nombre": "Guarne",
                    "codigo": "5318"
                },
                {
                    "nombre": "Guatape",
                    "codigo": "5321"
                },
                {
                    "nombre": "Heliconia",
                    "codigo": "5347"
                },
                {
                    "nombre": "Hispania",
                    "codigo": "5353"
                },
                {
                    "nombre": "Itagüi",
                    "codigo": "5360"
                },
                {
                    "nombre": "Ituango",
                    "codigo": "5361"
                },
                {
                    "nombre": "Jardin",
                    "codigo": "5364"
                },
                {
                    "nombre": "Jerico",
                    "codigo": "5368"
                },
                {
                    "nombre": "La Ceja",
                    "codigo": "5376"
                },
                {
                    "nombre": "La Estrella",
                    "codigo": "5380"
                },
                {
                    "nombre": "La Pintada",
                    "codigo": "5390"
                },
                {
                    "nombre": "La Union",
                    "codigo": "5400"
                },
                {
                    "nombre": "Liborina",
                    "codigo": "5411"
                },
                {
                    "nombre": "Maceo",
                    "codigo": "5425"
                },
                {
                    "nombre": "Marinilla",
                    "codigo": "5440"
                },
                {
                    "nombre": "Medellin",
                    "codigo": "5001"
                },
                {
                    "nombre": "Montebello",
                    "codigo": "5467"
                },
                {
                    "nombre": "Murindo",
                    "codigo": "5475"
                },
                {
                    "nombre": "Mutata",
                    "codigo": "5480"
                },
                {
                    "nombre": "Nariño",
                    "codigo": "5483"
                },
                {
                    "nombre": "Nechi",
                    "codigo": "5495"
                },
                {
                    "nombre": "Necocli",
                    "codigo": "5490"
                },
                {
                    "nombre": "Olaya",
                    "codigo": "5501"
                },
                {
                    "nombre": "Peñol",
                    "codigo": "5541"
                },
                {
                    "nombre": "Peque",
                    "codigo": "5543"
                },
                {
                    "nombre": "Pueblorrico",
                    "codigo": "5576"
                },
                {
                    "nombre": "Puerto Berrio",
                    "codigo": "5579"
                },
                {
                    "nombre": "Puerto Nare",
                    "codigo": "5585"
                },
                {
                    "nombre": "Puerto Triunfo",
                    "codigo": "5591"
                },
                {
                    "nombre": "Remedios",
                    "codigo": "5604"
                },
                {
                    "nombre": "Retiro",
                    "codigo": "5607"
                },
                {
                    "nombre": "Rionegro",
                    "codigo": "5615"
                },
                {
                    "nombre": "Sabanalarga",
                    "codigo": "5628"
                },
                {
                    "nombre": "Sabaneta",
                    "codigo": "5631"
                },
                {
                    "nombre": "Salgar",
                    "codigo": "5642"
                },
                {
                    "nombre": "San Andres De Cuerquia",
                    "codigo": "5647"
                },
                {
                    "nombre": "San Carlos",
                    "codigo": "5649"
                },
                {
                    "nombre": "San Francisco",
                    "codigo": "5652"
                },
                {
                    "nombre": "San Jeronimo",
                    "codigo": "5656"
                },
                {
                    "nombre": "San Jose De La Montaña",
                    "codigo": "5658"
                },
                {
                    "nombre": "San Juan De Uraba",
                    "codigo": "5659"
                },
                {
                    "nombre": "San Luis",
                    "codigo": "5660"
                },
                {
                    "nombre": "San Pedro De Los Milagros",
                    "codigo": "5664"
                },
                {
                    "nombre": "San Pedro De Uraba",
                    "codigo": "5665"
                },
                {
                    "nombre": "San Rafael",
                    "codigo": "5667"
                },
                {
                    "nombre": "San Roque",
                    "codigo": "5670"
                },
                {
                    "nombre": "San Vicente",
                    "codigo": "5674"
                },
                {
                    "nombre": "Santa Barbara",
                    "codigo": "5679"
                },
                {
                    "nombre": "Santa Rosa De Osos",
                    "codigo": "5686"
                },
                {
                    "nombre": "Santafe De Antioquia",
                    "codigo": "5042"
                },
                {
                    "nombre": "Santo Domingo",
                    "codigo": "5690"
                },
                {
                    "nombre": "Segovia",
                    "codigo": "5736"
                },
                {
                    "nombre": "Sonson",
                    "codigo": "5756"
                },
                {
                    "nombre": "Sopetran",
                    "codigo": "5761"
                },
                {
                    "nombre": "Tamesis",
                    "codigo": "5789"
                },
                {
                    "nombre": "Taraza",
                    "codigo": "5790"
                },
                {
                    "nombre": "Tarso",
                    "codigo": "5792"
                },
                {
                    "nombre": "Titiribi",
                    "codigo": "5809"
                },
                {
                    "nombre": "Toledo",
                    "codigo": "5819"
                },
                {
                    "nombre": "Turbo",
                    "codigo": "5837"
                },
                {
                    "nombre": "Uramita",
                    "codigo": "5842"
                },
                {
                    "nombre": "Urrao",
                    "codigo": "5847"
                },
                {
                    "nombre": "Valdivia",
                    "codigo": "5854"
                },
                {
                    "nombre": "Valparaiso",
                    "codigo": "5856"
                },
                {
                    "nombre": "Vegachi",
                    "codigo": "5858"
                },
                {
                    "nombre": "Venecia",
                    "codigo": "5861"
                },
                {
                    "nombre": "Vigia Del Fuerte",
                    "codigo": "5873"
                },
                {
                    "nombre": "Yali",
                    "codigo": "5885"
                },
                {
                    "nombre": "Yarumal",
                    "codigo": "5887"
                },
                {
                    "nombre": "Yolombo",
                    "codigo": "5890"
                },
                {
                    "nombre": "Yondo",
                    "codigo": "5893"
                },
                {
                    "nombre": "Zaragoza",
                    "codigo": "5895"
                }
            ]
        },
        "Arauca": {
            "municipios": [
                {
                    "nombre": "Arauca",
                    "codigo": "81001"
                },
                {
                    "nombre": "Arauquita",
                    "codigo": "81065"
                },
                {
                    "nombre": "Cravo Norte",
                    "codigo": "81220"
                },
                {
                    "nombre": "Fortul",
                    "codigo": "81300"
                },
                {
                    "nombre": "Puerto Rondon",
                    "codigo": "81591"
                },
                {
                    "nombre": "Saravena",
                    "codigo": "81736"
                },
                {
                    "nombre": "Tame",
                    "codigo": "81794"
                }
            ]
        },
        "Archipielago De San Andres": {
            "municipios": [
                {
                    "nombre": "Providencia",
                    "codigo": "88564"
                },
                {
                    "nombre": "San Andres",
                    "codigo": "88001"
                }
            ]
        },
        "Atlantico": {
            "municipios": [
                {
                    "nombre": "Baranoa",
                    "codigo": "8078"
                },
                {
                    "nombre": "Barranquilla",
                    "codigo": "8001"
                },
                {
                    "nombre": "Campo De La Cruz",
                    "codigo": "8137"
                },
                {
                    "nombre": "Candelaria",
                    "codigo": "8141"
                },
                {
                    "nombre": "Galapa",
                    "codigo": "8296"
                },
                {
                    "nombre": "Juan De Acosta",
                    "codigo": "8372"
                },
                {
                    "nombre": "Luruaco",
                    "codigo": "8421"
                },
                {
                    "nombre": "Malambo",
                    "codigo": "8433"
                },
                {
                    "nombre": "Manati",
                    "codigo": "8436"
                },
                {
                    "nombre": "Palmar De Varela",
                    "codigo": "8520"
                },
                {
                    "nombre": "Piojo",
                    "codigo": "8549"
                },
                {
                    "nombre": "Polonuevo",
                    "codigo": "8558"
                },
                {
                    "nombre": "Ponedera",
                    "codigo": "8560"
                },
                {
                    "nombre": "Puerto Colombia",
                    "codigo": "8573"
                },
                {
                    "nombre": "Repelon",
                    "codigo": "8606"
                },
                {
                    "nombre": "Sabanagrande",
                    "codigo": "8634"
                },
                {
                    "nombre": "Sabanalarga",
                    "codigo": "8638"
                },
                {
                    "nombre": "Santa Lucia",
                    "codigo": "8675"
                },
                {
                    "nombre": "Santo Tomas",
                    "codigo": "8685"
                },
                {
                    "nombre": "Soledad",
                    "codigo": "8758"
                },
                {
                    "nombre": "Suan",
                    "codigo": "8770"
                },
                {
                    "nombre": "Tubara",
                    "codigo": "8832"
                },
                {
                    "nombre": "Usiacuri",
                    "codigo": "8849"
                }
            ]
        },
        "Bogota D.C.": {
            "municipios": [
                {
                    "nombre": "Bogota D.C.",
                    "codigo": "11001"
                }
            ]
        },
        "Bolivar": {
            "municipios": [
                {
                    "nombre": "Achi",
                    "codigo": "13006"
                },
                {
                    "nombre": "Altos Del Rosario",
                    "codigo": "13030"
                },
                {
                    "nombre": "Arenal",
                    "codigo": "13042"
                },
                {
                    "nombre": "Arjona",
                    "codigo": "13052"
                },
                {
                    "nombre": "Arroyohondo",
                    "codigo": "13062"
                },
                {
                    "nombre": "Barranco De Loba",
                    "codigo": "13074"
                },
                {
                    "nombre": "Calamar",
                    "codigo": "13140"
                },
                {
                    "nombre": "Cantagallo",
                    "codigo": "13160"
                },
                {
                    "nombre": "Cartagena",
                    "codigo": "13001"
                },
                {
                    "nombre": "Cicuco",
                    "codigo": "13188"
                },
                {
                    "nombre": "Clemencia",
                    "codigo": "13222"
                },
                {
                    "nombre": "Cordoba",
                    "codigo": "13212"
                },
                {
                    "nombre": "El Carmen De Bolivar",
                    "codigo": "13244"
                },
                {
                    "nombre": "El Guamo",
                    "codigo": "13248"
                },
                {
                    "nombre": "El Peñon",
                    "codigo": "13268"
                },
                {
                    "nombre": "Hatillo De Loba",
                    "codigo": "13300"
                },
                {
                    "nombre": "Magangue",
                    "codigo": "13430"
                },
                {
                    "nombre": "Mahates",
                    "codigo": "13433"
                },
                {
                    "nombre": "Margarita",
                    "codigo": "13440"
                },
                {
                    "nombre": "Maria La Baja",
                    "codigo": "13442"
                },
                {
                    "nombre": "Mompos",
                    "codigo": "13468"
                },
                {
                    "nombre": "Montecristo",
                    "codigo": "13458"
                },
                {
                    "nombre": "Morales",
                    "codigo": "13473"
                },
                {
                    "nombre": "Norosi",
                    "codigo": "13490"
                },
                {
                    "nombre": "Pinillos",
                    "codigo": "13549"
                },
                {
                    "nombre": "Regidor",
                    "codigo": "13580"
                },
                {
                    "nombre": "Rio Viejo",
                    "codigo": "13600"
                },
                {
                    "nombre": "San Cristobal",
                    "codigo": "13620"
                },
                {
                    "nombre": "San Estanislao",
                    "codigo": "13647"
                },
                {
                    "nombre": "San Fernando",
                    "codigo": "13650"
                },
                {
                    "nombre": "San Jacinto",
                    "codigo": "13654"
                },
                {
                    "nombre": "San Jacinto Del Cauca",
                    "codigo": "13655"
                },
                {
                    "nombre": "San Juan Nepomuceno",
                    "codigo": "13657"
                },
                {
                    "nombre": "San Martin De Loba",
                    "codigo": "13667"
                },
                {
                    "nombre": "San Pablo",
                    "codigo": "13670"
                },
                {
                    "nombre": "Santa Catalina",
                    "codigo": "13673"
                },
                {
                    "nombre": "Santa Rosa",
                    "codigo": "13683"
                },
                {
                    "nombre": "Santa Rosa Del Sur",
                    "codigo": "13688"
                },
                {
                    "nombre": "Simiti",
                    "codigo": "13744"
                },
                {
                    "nombre": "Soplaviento",
                    "codigo": "13760"
                },
                {
                    "nombre": "Talaigua Nuevo",
                    "codigo": "13780"
                },
                {
                    "nombre": "Tiquisio",
                    "codigo": "13810"
                },
                {
                    "nombre": "Turbaco",
                    "codigo": "13836"
                },
                {
                    "nombre": "Turbana",
                    "codigo": "13838"
                },
                {
                    "nombre": "Villanueva",
                    "codigo": "13873"
                },
                {
                    "nombre": "Zambrano",
                    "codigo": "13894"
                }
            ]
        },
        "Boyaca": {
            "municipios": [
                {
                    "nombre": "Almeida",
                    "codigo": "15022"
                },
                {
                    "nombre": "Aquitania",
                    "codigo": "15047"
                },
                {
                    "nombre": "Arcabuco",
                    "codigo": "15051"
                },
                {
                    "nombre": "Belen",
                    "codigo": "15087"
                },
                {
                    "nombre": "Berbeo",
                    "codigo": "15090"
                },
                {
                    "nombre": "Beteitiva",
                    "codigo": "15092"
                },
                {
                    "nombre": "Boavita",
                    "codigo": "15097"
                },
                {
                    "nombre": "Boyaca",
                    "codigo": "15104"
                },
                {
                    "nombre": "Briceño",
                    "codigo": "15106"
                },
                {
                    "nombre": "Buenavista",
                    "codigo": "15109"
                },
                {
                    "nombre": "Busbanza",
                    "codigo": "15114"
                },
                {
                    "nombre": "Caldas",
                    "codigo": "15131"
                },
                {
                    "nombre": "Campohermoso",
                    "codigo": "15135"
                },
                {
                    "nombre": "Cerinza",
                    "codigo": "15162"
                },
                {
                    "nombre": "Chinavita",
                    "codigo": "15172"
                },
                {
                    "nombre": "Chiquinquira",
                    "codigo": "15176"
                },
                {
                    "nombre": "Chiquiza",
                    "codigo": "15232"
                },
                {
                    "nombre": "Chiscas",
                    "codigo": "15180"
                },
                {
                    "nombre": "Chita",
                    "codigo": "15183"
                },
                {
                    "nombre": "Chitaraque",
                    "codigo": "15185"
                },
                {
                    "nombre": "Chivata",
                    "codigo": "15187"
                },
                {
                    "nombre": "Chivor",
                    "codigo": "15236"
                },
                {
                    "nombre": "Cienega",
                    "codigo": "15189"
                },
                {
                    "nombre": "Combita",
                    "codigo": "15204"
                },
                {
                    "nombre": "Coper",
                    "codigo": "15212"
                },
                {
                    "nombre": "Corrales",
                    "codigo": "15215"
                },
                {
                    "nombre": "Covarachia",
                    "codigo": "15218"
                },
                {
                    "nombre": "Cubara",
                    "codigo": "15223"
                },
                {
                    "nombre": "Cucaita",
                    "codigo": "15224"
                },
                {
                    "nombre": "Cuitiva",
                    "codigo": "15226"
                },
                {
                    "nombre": "Duitama",
                    "codigo": "15238"
                },
                {
                    "nombre": "El Cocuy",
                    "codigo": "15244"
                },
                {
                    "nombre": "El Espino",
                    "codigo": "15248"
                },
                {
                    "nombre": "Firavitoba",
                    "codigo": "15272"
                },
                {
                    "nombre": "Floresta",
                    "codigo": "15276"
                },
                {
                    "nombre": "Gachantiva",
                    "codigo": "15293"
                },
                {
                    "nombre": "Gameza",
                    "codigo": "15296"
                },
                {
                    "nombre": "Garagoa",
                    "codigo": "15299"
                },
                {
                    "nombre": "Guacamayas",
                    "codigo": "15317"
                },
                {
                    "nombre": "Guateque",
                    "codigo": "15322"
                },
                {
                    "nombre": "Guayata",
                    "codigo": "15325"
                },
                {
                    "nombre": "Güican",
                    "codigo": "15332"
                },
                {
                    "nombre": "Iza",
                    "codigo": "15362"
                },
                {
                    "nombre": "Jenesano",
                    "codigo": "15367"
                },
                {
                    "nombre": "Jerico",
                    "codigo": "15368"
                },
                {
                    "nombre": "La Capilla",
                    "codigo": "15380"
                },
                {
                    "nombre": "La Uvita",
                    "codigo": "15403"
                },
                {
                    "nombre": "La Victoria",
                    "codigo": "15401"
                },
                {
                    "nombre": "Labranzagrande",
                    "codigo": "15377"
                },
                {
                    "nombre": "Macanal",
                    "codigo": "15425"
                },
                {
                    "nombre": "Maripi",
                    "codigo": "15442"
                },
                {
                    "nombre": "Miraflores",
                    "codigo": "15455"
                },
                {
                    "nombre": "Mongua",
                    "codigo": "15464"
                },
                {
                    "nombre": "Mongui",
                    "codigo": "15466"
                },
                {
                    "nombre": "Moniquira",
                    "codigo": "15469"
                },
                {
                    "nombre": "Motavita",
                    "codigo": "15476"
                },
                {
                    "nombre": "Muzo",
                    "codigo": "15480"
                },
                {
                    "nombre": "Nobsa",
                    "codigo": "15491"
                },
                {
                    "nombre": "Nuevo Colon",
                    "codigo": "15494"
                },
                {
                    "nombre": "Oicata",
                    "codigo": "15500"
                },
                {
                    "nombre": "Otanche",
                    "codigo": "15507"
                },
                {
                    "nombre": "Pachavita",
                    "codigo": "15511"
                },
                {
                    "nombre": "Paez",
                    "codigo": "15514"
                },
                {
                    "nombre": "Paipa",
                    "codigo": "15516"
                },
                {
                    "nombre": "Pajarito",
                    "codigo": "15518"
                },
                {
                    "nombre": "Panqueba",
                    "codigo": "15522"
                },
                {
                    "nombre": "Pauna",
                    "codigo": "15531"
                },
                {
                    "nombre": "Paya",
                    "codigo": "15533"
                },
                {
                    "nombre": "Paz De Rio",
                    "codigo": "15537"
                },
                {
                    "nombre": "Pesca",
                    "codigo": "15542"
                },
                {
                    "nombre": "Pisba",
                    "codigo": "15550"
                },
                {
                    "nombre": "Puerto Boyaca",
                    "codigo": "15572"
                },
                {
                    "nombre": "Quipama",
                    "codigo": "15580"
                },
                {
                    "nombre": "Ramiriqui",
                    "codigo": "15599"
                },
                {
                    "nombre": "Raquira",
                    "codigo": "15600"
                },
                {
                    "nombre": "Rondon",
                    "codigo": "15621"
                },
                {
                    "nombre": "Saboya",
                    "codigo": "15632"
                },
                {
                    "nombre": "Sachica",
                    "codigo": "15638"
                },
                {
                    "nombre": "Samaca",
                    "codigo": "15646"
                },
                {
                    "nombre": "San Eduardo",
                    "codigo": "15660"
                },
                {
                    "nombre": "San Jose De Pare",
                    "codigo": "15664"
                },
                {
                    "nombre": "San Luis De Gaceno",
                    "codigo": "15667"
                },
                {
                    "nombre": "San Mateo",
                    "codigo": "15673"
                },
                {
                    "nombre": "San Miguel De Sema",
                    "codigo": "15676"
                },
                {
                    "nombre": "San Pablo De Borbur",
                    "codigo": "15681"
                },
                {
                    "nombre": "Santa Maria",
                    "codigo": "15690"
                },
                {
                    "nombre": "Santa Rosa De Viterbo",
                    "codigo": "15693"
                },
                {
                    "nombre": "Santa Sofia",
                    "codigo": "15696"
                },
                {
                    "nombre": "Santana",
                    "codigo": "15686"
                },
                {
                    "nombre": "Sativanorte",
                    "codigo": "15720"
                },
                {
                    "nombre": "Sativasur",
                    "codigo": "15723"
                },
                {
                    "nombre": "Siachoque",
                    "codigo": "15740"
                },
                {
                    "nombre": "Soata",
                    "codigo": "15753"
                },
                {
                    "nombre": "Socha",
                    "codigo": "15757"
                },
                {
                    "nombre": "Socota",
                    "codigo": "15755"
                },
                {
                    "nombre": "Sogamoso",
                    "codigo": "15759"
                },
                {
                    "nombre": "Somondoco",
                    "codigo": "15761"
                },
                {
                    "nombre": "Sora",
                    "codigo": "15762"
                },
                {
                    "nombre": "Soraca",
                    "codigo": "15764"
                },
                {
                    "nombre": "Sotaquira",
                    "codigo": "15763"
                },
                {
                    "nombre": "Susacon",
                    "codigo": "15774"
                },
                {
                    "nombre": "Sutamarchan",
                    "codigo": "15776"
                },
                {
                    "nombre": "Sutatenza",
                    "codigo": "15778"
                },
                {
                    "nombre": "Tasco",
                    "codigo": "15790"
                },
                {
                    "nombre": "Tenza",
                    "codigo": "15798"
                },
                {
                    "nombre": "Tibana",
                    "codigo": "15804"
                },
                {
                    "nombre": "Tibasosa",
                    "codigo": "15806"
                },
                {
                    "nombre": "Tinjaca",
                    "codigo": "15808"
                },
                {
                    "nombre": "Tipacoque",
                    "codigo": "15810"
                },
                {
                    "nombre": "Toca",
                    "codigo": "15814"
                },
                {
                    "nombre": "Togüi",
                    "codigo": "15816"
                },
                {
                    "nombre": "Topaga",
                    "codigo": "15820"
                },
                {
                    "nombre": "Tota",
                    "codigo": "15822"
                },
                {
                    "nombre": "Tunja",
                    "codigo": "15001"
                },
                {
                    "nombre": "Tunungua",
                    "codigo": "15832"
                },
                {
                    "nombre": "Turmeque",
                    "codigo": "15835"
                },
                {
                    "nombre": "Tuta",
                    "codigo": "15837"
                },
                {
                    "nombre": "Tutaza",
                    "codigo": "15839"
                },
                {
                    "nombre": "Umbita",
                    "codigo": "15842"
                },
                {
                    "nombre": "Ventaquemada",
                    "codigo": "15861"
                },
                {
                    "nombre": "Villa De Leyva",
                    "codigo": "15407"
                },
                {
                    "nombre": "Viracacha",
                    "codigo": "15879"
                },
                {
                    "nombre": "Zetaquira",
                    "codigo": "15897"
                }
            ]
        },
        "Caldas": {
            "municipios": [
                {
                    "nombre": "Aguadas",
                    "codigo": "17013"
                },
                {
                    "nombre": "Anserma",
                    "codigo": "17042"
                },
                {
                    "nombre": "Aranzazu",
                    "codigo": "17050"
                },
                {
                    "nombre": "Belalcazar",
                    "codigo": "17088"
                },
                {
                    "nombre": "Chinchina",
                    "codigo": "17174"
                },
                {
                    "nombre": "Filadelfia",
                    "codigo": "17272"
                },
                {
                    "nombre": "La Dorada",
                    "codigo": "17380"
                },
                {
                    "nombre": "La Merced",
                    "codigo": "17388"
                },
                {
                    "nombre": "Manizales",
                    "codigo": "17001"
                },
                {
                    "nombre": "Manzanares",
                    "codigo": "17433"
                },
                {
                    "nombre": "Marmato",
                    "codigo": "17442"
                },
                {
                    "nombre": "Marquetalia",
                    "codigo": "17444"
                },
                {
                    "nombre": "Marulanda",
                    "codigo": "17446"
                },
                {
                    "nombre": "Neira",
                    "codigo": "17486"
                },
                {
                    "nombre": "Norcasia",
                    "codigo": "17495"
                },
                {
                    "nombre": "Pacora",
                    "codigo": "17513"
                },
                {
                    "nombre": "Palestina",
                    "codigo": "17524"
                },
                {
                    "nombre": "Pensilvania",
                    "codigo": "17541"
                },
                {
                    "nombre": "Riosucio",
                    "codigo": "17614"
                },
                {
                    "nombre": "Risaralda",
                    "codigo": "17616"
                },
                {
                    "nombre": "Salamina",
                    "codigo": "17653"
                },
                {
                    "nombre": "Samana",
                    "codigo": "17662"
                },
                {
                    "nombre": "San Jose",
                    "codigo": "17665"
                },
                {
                    "nombre": "Supia",
                    "codigo": "17777"
                },
                {
                    "nombre": "Victoria",
                    "codigo": "17867"
                },
                {
                    "nombre": "Villamaria",
                    "codigo": "17873"
                },
                {
                    "nombre": "Viterbo",
                    "codigo": "17877"
                }
            ]
        },
        "Caqueta": {
            "municipios": [
                {
                    "nombre": "Albania",
                    "codigo": "18029"
                },
                {
                    "nombre": "Belen De Los Andaquies",
                    "codigo": "18094"
                },
                {
                    "nombre": "Cartagena Del Chaira",
                    "codigo": "18150"
                },
                {
                    "nombre": "Curillo",
                    "codigo": "18205"
                },
                {
                    "nombre": "El Doncello",
                    "codigo": "18247"
                },
                {
                    "nombre": "El Paujil",
                    "codigo": "18256"
                },
                {
                    "nombre": "Florencia",
                    "codigo": "18001"
                },
                {
                    "nombre": "La Montañita",
                    "codigo": "18410"
                },
                {
                    "nombre": "Milan",
                    "codigo": "18460"
                },
                {
                    "nombre": "Morelia",
                    "codigo": "18479"
                },
                {
                    "nombre": "Puerto Rico",
                    "codigo": "18592"
                },
                {
                    "nombre": "San Jose Del Fragua",
                    "codigo": "18610"
                },
                {
                    "nombre": "San Vicente Del Caguan",
                    "codigo": "18753"
                },
                {
                    "nombre": "Solano",
                    "codigo": "18756"
                },
                {
                    "nombre": "Solita",
                    "codigo": "18785"
                },
                {
                    "nombre": "Valparaiso",
                    "codigo": "18860"
                }
            ]
        },
        "Casanare": {
            "municipios": [
                {
                    "nombre": "Aguazul",
                    "codigo": "85010"
                },
                {
                    "nombre": "Chameza",
                    "codigo": "85015"
                },
                {
                    "nombre": "Hato Corozal",
                    "codigo": "85125"
                },
                {
                    "nombre": "La Salina",
                    "codigo": "85136"
                },
                {
                    "nombre": "Mani",
                    "codigo": "85139"
                },
                {
                    "nombre": "Monterrey",
                    "codigo": "85162"
                },
                {
                    "nombre": "Nunchia",
                    "codigo": "85225"
                },
                {
                    "nombre": "Orocue",
                    "codigo": "85230"
                },
                {
                    "nombre": "Paz De Ariporo",
                    "codigo": "85250"
                },
                {
                    "nombre": "Pore",
                    "codigo": "85263"
                },
                {
                    "nombre": "Recetor",
                    "codigo": "85279"
                },
                {
                    "nombre": "Sabanalarga",
                    "codigo": "85300"
                },
                {
                    "nombre": "Sacama",
                    "codigo": "85315"
                },
                {
                    "nombre": "San Luis De Palenque",
                    "codigo": "85325"
                },
                {
                    "nombre": "Tamara",
                    "codigo": "85400"
                },
                {
                    "nombre": "Tauramena",
                    "codigo": "85410"
                },
                {
                    "nombre": "Trinidad",
                    "codigo": "85430"
                },
                {
                    "nombre": "Villanueva",
                    "codigo": "85440"
                },
                {
                    "nombre": "Yopal",
                    "codigo": "85001"
                }
            ]
        },
        "Cauca": {
            "municipios": [
                {
                    "nombre": "Almaguer",
                    "codigo": "19022"
                },
                {
                    "nombre": "Argelia",
                    "codigo": "19050"
                },
                {
                    "nombre": "Balboa",
                    "codigo": "19075"
                },
                {
                    "nombre": "Bolivar",
                    "codigo": "19100"
                },
                {
                    "nombre": "Buenos Aires",
                    "codigo": "19110"
                },
                {
                    "nombre": "Cajibio",
                    "codigo": "19130"
                },
                {
                    "nombre": "Caldono",
                    "codigo": "19137"
                },
                {
                    "nombre": "Caloto",
                    "codigo": "19142"
                },
                {
                    "nombre": "Caloto",
                    "codigo": "19300"
                },
                {
                    "nombre": "Corinto",
                    "codigo": "19212"
                },
                {
                    "nombre": "El Tambo",
                    "codigo": "19256"
                },
                {
                    "nombre": "Florencia",
                    "codigo": "19290"
                },
                {
                    "nombre": "Guapi",
                    "codigo": "19318"
                },
                {
                    "nombre": "Inza",
                    "codigo": "19355"
                },
                {
                    "nombre": "Jambalo",
                    "codigo": "19364"
                },
                {
                    "nombre": "La Sierra",
                    "codigo": "19392"
                },
                {
                    "nombre": "La Vega",
                    "codigo": "19397"
                },
                {
                    "nombre": "Lopez",
                    "codigo": "19418"
                },
                {
                    "nombre": "Mercaderes",
                    "codigo": "19450"
                },
                {
                    "nombre": "Miranda",
                    "codigo": "19455"
                },
                {
                    "nombre": "Morales",
                    "codigo": "19473"
                },
                {
                    "nombre": "Padilla",
                    "codigo": "19513"
                },
                {
                    "nombre": "Paez",
                    "codigo": "19517"
                },
                {
                    "nombre": "Patia",
                    "codigo": "19532"
                },
                {
                    "nombre": "Piamonte",
                    "codigo": "19533"
                },
                {
                    "nombre": "Piendamo",
                    "codigo": "19548"
                },
                {
                    "nombre": "Popayan",
                    "codigo": "19001"
                },
                {
                    "nombre": "Puerto Tejada",
                    "codigo": "19573"
                },
                {
                    "nombre": "Purace",
                    "codigo": "19585"
                },
                {
                    "nombre": "Rosas",
                    "codigo": "19622"
                },
                {
                    "nombre": "San Sebastian",
                    "codigo": "19693"
                },
                {
                    "nombre": "Santa Rosa",
                    "codigo": "19701"
                },
                {
                    "nombre": "Santander De Quilichao",
                    "codigo": "19698"
                },
                {
                    "nombre": "Silvia",
                    "codigo": "19743"
                },
                {
                    "nombre": "Sotara",
                    "codigo": "19760"
                },
                {
                    "nombre": "Suarez",
                    "codigo": "19780"
                },
                {
                    "nombre": "Sucre",
                    "codigo": "19785"
                },
                {
                    "nombre": "Timbio",
                    "codigo": "19807"
                },
                {
                    "nombre": "Timbiqui",
                    "codigo": "19809"
                },
                {
                    "nombre": "Toribio",
                    "codigo": "19821"
                },
                {
                    "nombre": "Totoro",
                    "codigo": "19824"
                },
                {
                    "nombre": "Villa Rica",
                    "codigo": "19845"
                }
            ]
        },
        "Cesar": {
            "municipios": [
                {
                    "nombre": "Aguachica",
                    "codigo": "20011"
                },
                {
                    "nombre": "Agustin Codazzi",
                    "codigo": "20013"
                },
                {
                    "nombre": "Astrea",
                    "codigo": "20032"
                },
                {
                    "nombre": "Becerril",
                    "codigo": "20045"
                },
                {
                    "nombre": "Bosconia",
                    "codigo": "20060"
                },
                {
                    "nombre": "Chimichagua",
                    "codigo": "20175"
                },
                {
                    "nombre": "Chiriguana",
                    "codigo": "20178"
                },
                {
                    "nombre": "Curumani",
                    "codigo": "20228"
                },
                {
                    "nombre": "El Copey",
                    "codigo": "20238"
                },
                {
                    "nombre": "El Paso",
                    "codigo": "20250"
                },
                {
                    "nombre": "Gamarra",
                    "codigo": "20295"
                },
                {
                    "nombre": "Gonzalez",
                    "codigo": "20310"
                },
                {
                    "nombre": "La Gloria",
                    "codigo": "20383"
                },
                {
                    "nombre": "La Jagua De Ibirico",
                    "codigo": "20400"
                },
                {
                    "nombre": "La Paz",
                    "codigo": "20621"
                },
                {
                    "nombre": "Manaure",
                    "codigo": "20443"
                },
                {
                    "nombre": "Pailitas",
                    "codigo": "20517"
                },
                {
                    "nombre": "Pelaya",
                    "codigo": "20550"
                },
                {
                    "nombre": "Pueblo Bello",
                    "codigo": "20570"
                },
                {
                    "nombre": "Rio De Oro",
                    "codigo": "20614"
                },
                {
                    "nombre": "San Alberto",
                    "codigo": "20710"
                },
                {
                    "nombre": "San Diego",
                    "codigo": "20750"
                },
                {
                    "nombre": "San Martin",
                    "codigo": "20770"
                },
                {
                    "nombre": "Tamalameque",
                    "codigo": "20787"
                },
                {
                    "nombre": "Valledupar",
                    "codigo": "20001"
                }
            ]
        },
        "Choco": {
            "municipios": [
                {
                    "nombre": "Acandi",
                    "codigo": "27006"
                },
                {
                    "nombre": "Alto Baudo",
                    "codigo": "27025"
                },
                {
                    "nombre": "Atrato",
                    "codigo": "27050"
                },
                {
                    "nombre": "Bagado",
                    "codigo": "27073"
                },
                {
                    "nombre": "Bahia Solano",
                    "codigo": "27075"
                },
                {
                    "nombre": "Bajo Baudo",
                    "codigo": "27077"
                },
                {
                    "nombre": "Bojaya",
                    "codigo": "27099"
                },
                {
                    "nombre": "Carmen Del Darien",
                    "codigo": "27150"
                },
                {
                    "nombre": "Certegui",
                    "codigo": "27160"
                },
                {
                    "nombre": "Condoto",
                    "codigo": "27205"
                },
                {
                    "nombre": "El Canton Del San Pablo",
                    "codigo": "27135"
                },
                {
                    "nombre": "El Carmen De Atrato",
                    "codigo": "27245"
                },
                {
                    "nombre": "El Litoral Del San Juan",
                    "codigo": "27250"
                },
                {
                    "nombre": "Istmina",
                    "codigo": "27361"
                },
                {
                    "nombre": "Jurado",
                    "codigo": "27372"
                },
                {
                    "nombre": "Lloro",
                    "codigo": "27413"
                },
                {
                    "nombre": "Medio Atrato",
                    "codigo": "27425"
                },
                {
                    "nombre": "Medio Baudo",
                    "codigo": "27430"
                },
                {
                    "nombre": "Medio San Juan",
                    "codigo": "27450"
                },
                {
                    "nombre": "Novita",
                    "codigo": "27491"
                },
                {
                    "nombre": "Nuqui",
                    "codigo": "27495"
                },
                {
                    "nombre": "Quibdo",
                    "codigo": "27001"
                },
                {
                    "nombre": "Rio Iro",
                    "codigo": "27580"
                },
                {
                    "nombre": "Rio Quito",
                    "codigo": "27600"
                },
                {
                    "nombre": "Riosucio",
                    "codigo": "27615"
                },
                {
                    "nombre": "San Jose Del Palmar",
                    "codigo": "27660"
                },
                {
                    "nombre": "Sipi",
                    "codigo": "27745"
                },
                {
                    "nombre": "Tado",
                    "codigo": "27787"
                },
                {
                    "nombre": "Unguia",
                    "codigo": "27800"
                },
                {
                    "nombre": "Union Panamericana",
                    "codigo": "27810"
                }
            ]
        },
        "Cordoba": {
            "municipios": [
                {
                    "nombre": "Ayapel",
                    "codigo": "23068"
                },
                {
                    "nombre": "Buenavista",
                    "codigo": "23079"
                },
                {
                    "nombre": "Canalete",
                    "codigo": "23090"
                },
                {
                    "nombre": "Cerete",
                    "codigo": "23162"
                },
                {
                    "nombre": "Chima",
                    "codigo": "23168"
                },
                {
                    "nombre": "Chinu",
                    "codigo": "23182"
                },
                {
                    "nombre": "Cienaga De Oro",
                    "codigo": "23189"
                },
                {
                    "nombre": "Cotorra",
                    "codigo": "23300"
                },
                {
                    "nombre": "La Apartada",
                    "codigo": "23350"
                },
                {
                    "nombre": "Lorica",
                    "codigo": "23417"
                },
                {
                    "nombre": "Los Cordobas",
                    "codigo": "23419"
                },
                {
                    "nombre": "Momil",
                    "codigo": "23464"
                },
                {
                    "nombre": "Montelibano",
                    "codigo": "23466"
                },
                {
                    "nombre": "Monteria",
                    "codigo": "23001"
                },
                {
                    "nombre": "Moñitos",
                    "codigo": "23500"
                },
                {
                    "nombre": "Planeta Rica",
                    "codigo": "23555"
                },
                {
                    "nombre": "Pueblo Nuevo",
                    "codigo": "23570"
                },
                {
                    "nombre": "Puerto Escondido",
                    "codigo": "23574"
                },
                {
                    "nombre": "Puerto Libertador",
                    "codigo": "23580"
                },
                {
                    "nombre": "Purisima",
                    "codigo": "23586"
                },
                {
                    "nombre": "Sahagun",
                    "codigo": "23660"
                },
                {
                    "nombre": "San Andres Sotavento",
                    "codigo": "23670"
                },
                {
                    "nombre": "San Antero",
                    "codigo": "23672"
                },
                {
                    "nombre": "San Bernardo Del Viento",
                    "codigo": "23675"
                },
                {
                    "nombre": "San Carlos",
                    "codigo": "23678"
                },
                {
                    "nombre": "San Jose De Ure",
                    "codigo": "23682"
                },
                {
                    "nombre": "San Pelayo",
                    "codigo": "23686"
                },
                {
                    "nombre": "Tierralta",
                    "codigo": "23807"
                },
                {
                    "nombre": "Tuchin",
                    "codigo": "23815"
                },
                {
                    "nombre": "Valencia",
                    "codigo": "23855"
                }
            ]
        },
        "Cundinamarca": {
            "municipios": [
                {
                    "nombre": "Agua De Dios",
                    "codigo": "25001"
                },
                {
                    "nombre": "Alban",
                    "codigo": "25019"
                },
                {
                    "nombre": "Anapoima",
                    "codigo": "25035"
                },
                {
                    "nombre": "Anolaima",
                    "codigo": "25040"
                },
                {
                    "nombre": "Apulo",
                    "codigo": "25599"
                },
                {
                    "nombre": "Arbelaez",
                    "codigo": "25053"
                },
                {
                    "nombre": "Beltran",
                    "codigo": "25086"
                },
                {
                    "nombre": "Bituima",
                    "codigo": "25095"
                },
                {
                    "nombre": "Bojaca",
                    "codigo": "25099"
                },
                {
                    "nombre": "Cabrera",
                    "codigo": "25120"
                },
                {
                    "nombre": "Cachipay",
                    "codigo": "25123"
                },
                {
                    "nombre": "Cajica",
                    "codigo": "25126"
                },
                {
                    "nombre": "Caparrapi",
                    "codigo": "25148"
                },
                {
                    "nombre": "Caqueza",
                    "codigo": "25151"
                },
                {
                    "nombre": "Carmen De Carupa",
                    "codigo": "25154"
                },
                {
                    "nombre": "Chaguani",
                    "codigo": "25168"
                },
                {
                    "nombre": "Chia",
                    "codigo": "25175"
                },
                {
                    "nombre": "Chipaque",
                    "codigo": "25178"
                },
                {
                    "nombre": "Choachi",
                    "codigo": "25181"
                },
                {
                    "nombre": "Choconta",
                    "codigo": "25183"
                },
                {
                    "nombre": "Cogua",
                    "codigo": "25200"
                },
                {
                    "nombre": "Cota",
                    "codigo": "25214"
                },
                {
                    "nombre": "Cucunuba",
                    "codigo": "25224"
                },
                {
                    "nombre": "El Colegio",
                    "codigo": "25245"
                },
                {
                    "nombre": "El Peñon",
                    "codigo": "25258"
                },
                {
                    "nombre": "El Rosal",
                    "codigo": "25260"
                },
                {
                    "nombre": "Facatativa",
                    "codigo": "25269"
                },
                {
                    "nombre": "Fomeque",
                    "codigo": "25279"
                },
                {
                    "nombre": "Fosca",
                    "codigo": "25281"
                },
                {
                    "nombre": "Funza",
                    "codigo": "25286"
                },
                {
                    "nombre": "Fuquene",
                    "codigo": "25288"
                },
                {
                    "nombre": "Fusagasuga",
                    "codigo": "25290"
                },
                {
                    "nombre": "Gachala",
                    "codigo": "25293"
                },
                {
                    "nombre": "Gachancipa",
                    "codigo": "25295"
                },
                {
                    "nombre": "Gacheta",
                    "codigo": "25297"
                },
                {
                    "nombre": "Gama",
                    "codigo": "25299"
                },
                {
                    "nombre": "Girardot",
                    "codigo": "25307"
                },
                {
                    "nombre": "Granada",
                    "codigo": "25312"
                },
                {
                    "nombre": "Guacheta",
                    "codigo": "25317"
                },
                {
                    "nombre": "Guaduas",
                    "codigo": "25320"
                },
                {
                    "nombre": "Guasca",
                    "codigo": "25322"
                },
                {
                    "nombre": "Guataqui",
                    "codigo": "25324"
                },
                {
                    "nombre": "Guatavita",
                    "codigo": "25326"
                },
                {
                    "nombre": "Guayabal De Siquima",
                    "codigo": "25328"
                },
                {
                    "nombre": "Guayabetal",
                    "codigo": "25335"
                },
                {
                    "nombre": "Gutierrez",
                    "codigo": "25339"
                },
                {
                    "nombre": "Jerusalen",
                    "codigo": "25368"
                },
                {
                    "nombre": "Junin",
                    "codigo": "25372"
                },
                {
                    "nombre": "La Calera",
                    "codigo": "25377"
                },
                {
                    "nombre": "La Mesa",
                    "codigo": "25386"
                },
                {
                    "nombre": "La Palma",
                    "codigo": "25394"
                },
                {
                    "nombre": "La Peña",
                    "codigo": "25398"
                },
                {
                    "nombre": "La Vega",
                    "codigo": "25402"
                },
                {
                    "nombre": "Lenguazaque",
                    "codigo": "25407"
                },
                {
                    "nombre": "Macheta",
                    "codigo": "25426"
                },
                {
                    "nombre": "Madrid",
                    "codigo": "25430"
                },
                {
                    "nombre": "Manta",
                    "codigo": "25436"
                },
                {
                    "nombre": "Medina",
                    "codigo": "25438"
                },
                {
                    "nombre": "Mosquera",
                    "codigo": "25473"
                },
                {
                    "nombre": "Nariño",
                    "codigo": "25483"
                },
                {
                    "nombre": "Nemocon",
                    "codigo": "25486"
                },
                {
                    "nombre": "Nilo",
                    "codigo": "25488"
                },
                {
                    "nombre": "Nimaima",
                    "codigo": "25489"
                },
                {
                    "nombre": "Nocaima",
                    "codigo": "25491"
                },
                {
                    "nombre": "Pacho",
                    "codigo": "25513"
                },
                {
                    "nombre": "Paime",
                    "codigo": "25518"
                },
                {
                    "nombre": "Pandi",
                    "codigo": "25524"
                },
                {
                    "nombre": "Paratebueno",
                    "codigo": "25530"
                },
                {
                    "nombre": "Pasca",
                    "codigo": "25535"
                },
                {
                    "nombre": "Puerto Salgar",
                    "codigo": "25572"
                },
                {
                    "nombre": "Puli",
                    "codigo": "25580"
                },
                {
                    "nombre": "Quebradanegra",
                    "codigo": "25592"
                },
                {
                    "nombre": "Quetame",
                    "codigo": "25594"
                },
                {
                    "nombre": "Quipile",
                    "codigo": "25596"
                },
                {
                    "nombre": "Ricaurte",
                    "codigo": "25612"
                },
                {
                    "nombre": "San Antonio Del Tequendama",
                    "codigo": "25645"
                },
                {
                    "nombre": "San Bernardo",
                    "codigo": "25649"
                },
                {
                    "nombre": "San Cayetano",
                    "codigo": "25653"
                },
                {
                    "nombre": "San Francisco",
                    "codigo": "25658"
                },
                {
                    "nombre": "San Juan De Rio Seco",
                    "codigo": "25662"
                },
                {
                    "nombre": "Sasaima",
                    "codigo": "25718"
                },
                {
                    "nombre": "Sesquile",
                    "codigo": "25736"
                },
                {
                    "nombre": "Sibate",
                    "codigo": "25740"
                },
                {
                    "nombre": "Silvania",
                    "codigo": "25743"
                },
                {
                    "nombre": "Simijaca",
                    "codigo": "25745"
                },
                {
                    "nombre": "Soacha",
                    "codigo": "25754"
                },
                {
                    "nombre": "Sopo",
                    "codigo": "25758"
                },
                {
                    "nombre": "Subachoque",
                    "codigo": "25769"
                },
                {
                    "nombre": "Suesca",
                    "codigo": "25772"
                },
                {
                    "nombre": "Supata",
                    "codigo": "25777"
                },
                {
                    "nombre": "Susa",
                    "codigo": "25779"
                },
                {
                    "nombre": "Sutatausa",
                    "codigo": "25781"
                },
                {
                    "nombre": "Tabio",
                    "codigo": "25785"
                },
                {
                    "nombre": "Tausa",
                    "codigo": "25793"
                },
                {
                    "nombre": "Tena",
                    "codigo": "25797"
                },
                {
                    "nombre": "Tenjo",
                    "codigo": "25799"
                },
                {
                    "nombre": "Tibacuy",
                    "codigo": "25805"
                },
                {
                    "nombre": "Tibirita",
                    "codigo": "25807"
                },
                {
                    "nombre": "Tocaima",
                    "codigo": "25815"
                },
                {
                    "nombre": "Tocancipa",
                    "codigo": "25817"
                },
                {
                    "nombre": "Topaipi",
                    "codigo": "25823"
                },
                {
                    "nombre": "Ubala",
                    "codigo": "25839"
                },
                {
                    "nombre": "Ubaque",
                    "codigo": "25841"
                },
                {
                    "nombre": "Une",
                    "codigo": "25845"
                },
                {
                    "nombre": "Utica",
                    "codigo": "25851"
                },
                {
                    "nombre": "Venecia",
                    "codigo": "25506"
                },
                {
                    "nombre": "Vergara",
                    "codigo": "25862"
                },
                {
                    "nombre": "Viani",
                    "codigo": "25867"
                },
                {
                    "nombre": "Villa De San Diego De Ubate",
                    "codigo": "25843"
                },
                {
                    "nombre": "Villagomez",
                    "codigo": "25871"
                },
                {
                    "nombre": "Villapinzon",
                    "codigo": "25873"
                },
                {
                    "nombre": "Villeta",
                    "codigo": "25875"
                },
                {
                    "nombre": "Viota",
                    "codigo": "25878"
                },
                {
                    "nombre": "Yacopi",
                    "codigo": "25885"
                },
                {
                    "nombre": "Zipacon",
                    "codigo": "25898"
                },
                {
                    "nombre": "Zipaquira",
                    "codigo": "25899"
                }
            ]
        },
        "Guainia": {
            "municipios": [
                {
                    "nombre": "Barranco Minas",
                    "codigo": "94343"
                },
                {
                    "nombre": "Cacahual",
                    "codigo": "94886"
                },
                {
                    "nombre": "Guadalupe",
                    "codigo": "94885"
                },
                {
                    "nombre": "Inirida",
                    "codigo": "94001"
                },
                {
                    "nombre": "Mapiripana",
                    "codigo": "94663"
                },
                {
                    "nombre": "Morichal",
                    "codigo": "94888"
                },
                {
                    "nombre": "Pana Pana",
                    "codigo": "94887"
                },
                {
                    "nombre": "Puerto Colombia",
                    "codigo": "94884"
                },
                {
                    "nombre": "San Felipe",
                    "codigo": "94883"
                }
            ]
        },
        "Guaviare": {
            "municipios": [
                {
                    "nombre": "Calamar",
                    "codigo": "95015"
                },
                {
                    "nombre": "El Retorno",
                    "codigo": "95025"
                },
                {
                    "nombre": "Miraflores",
                    "codigo": "95200"
                },
                {
                    "nombre": "San Jose Del Guaviare",
                    "codigo": "95001"
                }
            ]
        },
        "Huila": {
            "municipios": [
                {
                    "nombre": "Acevedo",
                    "codigo": "41006"
                },
                {
                    "nombre": "Agrado",
                    "codigo": "41013"
                },
                {
                    "nombre": "Aipe",
                    "codigo": "41016"
                },
                {
                    "nombre": "Algeciras",
                    "codigo": "41020"
                },
                {
                    "nombre": "Altamira",
                    "codigo": "41026"
                },
                {
                    "nombre": "Baraya",
                    "codigo": "41078"
                },
                {
                    "nombre": "Campoalegre",
                    "codigo": "41132"
                },
                {
                    "nombre": "Colombia",
                    "codigo": "41206"
                },
                {
                    "nombre": "Elias",
                    "codigo": "41244"
                },
                {
                    "nombre": "Garzon",
                    "codigo": "41298"
                },
                {
                    "nombre": "Gigante",
                    "codigo": "41306"
                },
                {
                    "nombre": "Guadalupe",
                    "codigo": "41319"
                },
                {
                    "nombre": "Hobo",
                    "codigo": "41349"
                },
                {
                    "nombre": "Iquira",
                    "codigo": "41357"
                },
                {
                    "nombre": "Isnos",
                    "codigo": "41359"
                },
                {
                    "nombre": "La Argentina",
                    "codigo": "41378"
                },
                {
                    "nombre": "La Plata",
                    "codigo": "41396"
                },
                {
                    "nombre": "Nataga",
                    "codigo": "41483"
                },
                {
                    "nombre": "Neiva",
                    "codigo": "41001"
                },
                {
                    "nombre": "Oporapa",
                    "codigo": "41503"
                },
                {
                    "nombre": "Paicol",
                    "codigo": "41518"
                },
                {
                    "nombre": "Palermo",
                    "codigo": "41524"
                },
                {
                    "nombre": "Palestina",
                    "codigo": "41530"
                },
                {
                    "nombre": "Pital",
                    "codigo": "41548"
                },
                {
                    "nombre": "Pitalito",
                    "codigo": "41551"
                },
                {
                    "nombre": "Rivera",
                    "codigo": "41615"
                },
                {
                    "nombre": "Saladoblanco",
                    "codigo": "41660"
                },
                {
                    "nombre": "San Agustin",
                    "codigo": "41668"
                },
                {
                    "nombre": "Santa Maria",
                    "codigo": "41676"
                },
                {
                    "nombre": "Suaza",
                    "codigo": "41770"
                },
                {
                    "nombre": "Tarqui",
                    "codigo": "41791"
                },
                {
                    "nombre": "Tello",
                    "codigo": "41799"
                },
                {
                    "nombre": "Teruel",
                    "codigo": "41801"
                },
                {
                    "nombre": "Tesalia",
                    "codigo": "41797"
                },
                {
                    "nombre": "Timana",
                    "codigo": "41807"
                },
                {
                    "nombre": "Villavieja",
                    "codigo": "41872"
                },
                {
                    "nombre": "Yaguara",
                    "codigo": "41885"
                }
            ]
        },
        "La Guajira": {
            "municipios": [
                {
                    "nombre": "Albania",
                    "codigo": "44035"
                },
                {
                    "nombre": "Barrancas",
                    "codigo": "44078"
                },
                {
                    "nombre": "Dibulla",
                    "codigo": "44090"
                },
                {
                    "nombre": "Distraccion",
                    "codigo": "44098"
                },
                {
                    "nombre": "El Molino",
                    "codigo": "44110"
                },
                {
                    "nombre": "Fonseca",
                    "codigo": "44279"
                },
                {
                    "nombre": "Hatonuevo",
                    "codigo": "44378"
                },
                {
                    "nombre": "La Jagua Del Pilar",
                    "codigo": "44420"
                },
                {
                    "nombre": "Maicao",
                    "codigo": "44430"
                },
                {
                    "nombre": "Manaure",
                    "codigo": "44560"
                },
                {
                    "nombre": "Riohacha",
                    "codigo": "44001"
                },
                {
                    "nombre": "San Juan Del Cesar",
                    "codigo": "44650"
                },
                {
                    "nombre": "Uribia",
                    "codigo": "44847"
                },
                {
                    "nombre": "Urumita",
                    "codigo": "44855"
                },
                {
                    "nombre": "Villanueva",
                    "codigo": "44874"
                }
            ]
        },
        "Magdalena": {
            "municipios": [
                {
                    "nombre": "Algarrobo",
                    "codigo": "47030"
                },
                {
                    "nombre": "Aracataca",
                    "codigo": "47053"
                },
                {
                    "nombre": "Ariguani",
                    "codigo": "47058"
                },
                {
                    "nombre": "Cerro San Antonio",
                    "codigo": "47161"
                },
                {
                    "nombre": "Chibolo",
                    "codigo": "47170"
                },
                {
                    "nombre": "Cienaga",
                    "codigo": "47189"
                },
                {
                    "nombre": "Concordia",
                    "codigo": "47205"
                },
                {
                    "nombre": "El Banco",
                    "codigo": "47245"
                },
                {
                    "nombre": "El Piñon",
                    "codigo": "47258"
                },
                {
                    "nombre": "El Reten",
                    "codigo": "47268"
                },
                {
                    "nombre": "Fundacion",
                    "codigo": "47288"
                },
                {
                    "nombre": "Guamal",
                    "codigo": "47318"
                },
                {
                    "nombre": "Nueva Granada",
                    "codigo": "47460"
                },
                {
                    "nombre": "Pedraza",
                    "codigo": "47541"
                },
                {
                    "nombre": "Pijiño Del Carmen",
                    "codigo": "47545"
                },
                {
                    "nombre": "Pivijay",
                    "codigo": "47551"
                },
                {
                    "nombre": "Plato",
                    "codigo": "47555"
                },
                {
                    "nombre": "Puebloviejo",
                    "codigo": "47570"
                },
                {
                    "nombre": "Remolino",
                    "codigo": "47605"
                },
                {
                    "nombre": "Sabanas De San Angel",
                    "codigo": "47660"
                },
                {
                    "nombre": "Salamina",
                    "codigo": "47675"
                },
                {
                    "nombre": "San Sebastian De Buenavista",
                    "codigo": "47692"
                },
                {
                    "nombre": "San Zenon",
                    "codigo": "47703"
                },
                {
                    "nombre": "Santa Ana",
                    "codigo": "47707"
                },
                {
                    "nombre": "Santa Barbara De Pinto",
                    "codigo": "47720"
                },
                {
                    "nombre": "Santa Marta",
                    "codigo": "47001"
                },
                {
                    "nombre": "Sitionuevo",
                    "codigo": "47745"
                },
                {
                    "nombre": "Tenerife",
                    "codigo": "47798"
                },
                {
                    "nombre": "Zapayan",
                    "codigo": "47960"
                },
                {
                    "nombre": "Zona Bananera",
                    "codigo": "47980"
                }
            ]
        },
        "Meta": {
            "municipios": [
                {
                    "nombre": "Acacias",
                    "codigo": "50006"
                },
                {
                    "nombre": "Barranca De Upia",
                    "codigo": "50110"
                },
                {
                    "nombre": "Cabuyaro",
                    "codigo": "50124"
                },
                {
                    "nombre": "Castilla La Nueva",
                    "codigo": "50150"
                },
                {
                    "nombre": "Cubarral",
                    "codigo": "50223"
                },
                {
                    "nombre": "Cumaral",
                    "codigo": "50226"
                },
                {
                    "nombre": "El Calvario",
                    "codigo": "50245"
                },
                {
                    "nombre": "El Castillo",
                    "codigo": "50251"
                },
                {
                    "nombre": "El Dorado",
                    "codigo": "50270"
                },
                {
                    "nombre": "Fuente De Oro",
                    "codigo": "50287"
                },
                {
                    "nombre": "Granada",
                    "codigo": "50313"
                },
                {
                    "nombre": "Guamal",
                    "codigo": "50318"
                },
                {
                    "nombre": "La Macarena",
                    "codigo": "50350"
                },
                {
                    "nombre": "Lejanias",
                    "codigo": "50400"
                },
                {
                    "nombre": "Mapiripan",
                    "codigo": "50325"
                },
                {
                    "nombre": "Mesetas",
                    "codigo": "50330"
                },
                {
                    "nombre": "Puerto Concordia",
                    "codigo": "50450"
                },
                {
                    "nombre": "Puerto Gaitan",
                    "codigo": "50568"
                },
                {
                    "nombre": "Puerto Lleras",
                    "codigo": "50577"
                },
                {
                    "nombre": "Puerto Lopez",
                    "codigo": "50573"
                },
                {
                    "nombre": "Puerto Rico",
                    "codigo": "50590"
                },
                {
                    "nombre": "Restrepo",
                    "codigo": "50606"
                },
                {
                    "nombre": "San Carlos De Guaroa",
                    "codigo": "50680"
                },
                {
                    "nombre": "San Juan De Arama",
                    "codigo": "50683"
                },
                {
                    "nombre": "San Juanito",
                    "codigo": "50686"
                },
                {
                    "nombre": "San Martin",
                    "codigo": "50689"
                },
                {
                    "nombre": "Uribe",
                    "codigo": "50370"
                },
                {
                    "nombre": "Villavicencio",
                    "codigo": "50001"
                },
                {
                    "nombre": "Vistahermosa",
                    "codigo": "50711"
                }
            ]
        },
        "Nariño": {
            "municipios": [
                {
                    "nombre": "Aldana",
                    "codigo": "52022"
                },
                {
                    "nombre": "Ancuya",
                    "codigo": "52036"
                },
                {
                    "nombre": "Arboleda - Berruecos",
                    "codigo": "52051"
                },
                {
                    "nombre": "Barbacoas",
                    "codigo": "52079"
                },
                {
                    "nombre": "Belen",
                    "codigo": "52083"
                },
                {
                    "nombre": "Buesaco",
                    "codigo": "52110"
                },
                {
                    "nombre": "Chachagüi",
                    "codigo": "52240"
                },
                {
                    "nombre": "Colon",
                    "codigo": "52203"
                },
                {
                    "nombre": "Consaca",
                    "codigo": "52207"
                },
                {
                    "nombre": "Contadero",
                    "codigo": "52210"
                },
                {
                    "nombre": "Cordoba",
                    "codigo": "52215"
                },
                {
                    "nombre": "Cuaspud",
                    "codigo": "52224"
                },
                {
                    "nombre": "Cumbal",
                    "codigo": "52227"
                },
                {
                    "nombre": "Cumbitara",
                    "codigo": "52233"
                },
                {
                    "nombre": "El Charco",
                    "codigo": "52250"
                },
                {
                    "nombre": "El Peñol",
                    "codigo": "52254"
                },
                {
                    "nombre": "El Rosario",
                    "codigo": "52256"
                },
                {
                    "nombre": "El Tablon De Gomez",
                    "codigo": "52258"
                },
                {
                    "nombre": "El Tambo",
                    "codigo": "52260"
                },
                {
                    "nombre": "Francisco Pizarro",
                    "codigo": "52520"
                },
                {
                    "nombre": "Funes",
                    "codigo": "52287"
                },
                {
                    "nombre": "Guachucal",
                    "codigo": "52317"
                },
                {
                    "nombre": "Guaitarilla",
                    "codigo": "52320"
                },
                {
                    "nombre": "Gualmatan",
                    "codigo": "52323"
                },
                {
                    "nombre": "Iles",
                    "codigo": "52352"
                },
                {
                    "nombre": "Imues",
                    "codigo": "52354"
                },
                {
                    "nombre": "Ipiales",
                    "codigo": "52356"
                },
                {
                    "nombre": "La Cruz",
                    "codigo": "52378"
                },
                {
                    "nombre": "La Florida",
                    "codigo": "52381"
                },
                {
                    "nombre": "La Llanada",
                    "codigo": "52385"
                },
                {
                    "nombre": "La Tola",
                    "codigo": "52390"
                },
                {
                    "nombre": "La Union",
                    "codigo": "52399"
                },
                {
                    "nombre": "Leiva",
                    "codigo": "52405"
                },
                {
                    "nombre": "Linares",
                    "codigo": "52411"
                },
                {
                    "nombre": "Los Andes",
                    "codigo": "52418"
                },
                {
                    "nombre": "Magüi",
                    "codigo": "52427"
                },
                {
                    "nombre": "Mallama",
                    "codigo": "52435"
                },
                {
                    "nombre": "Mosquera",
                    "codigo": "52473"
                },
                {
                    "nombre": "Nariño",
                    "codigo": "52480"
                },
                {
                    "nombre": "Olaya Herrera",
                    "codigo": "52490"
                },
                {
                    "nombre": "Ospina",
                    "codigo": "52506"
                },
                {
                    "nombre": "Pasto",
                    "codigo": "52001"
                },
                {
                    "nombre": "Policarpa",
                    "codigo": "52540"
                },
                {
                    "nombre": "Potosi",
                    "codigo": "52560"
                },
                {
                    "nombre": "Providencia",
                    "codigo": "52565"
                },
                {
                    "nombre": "Puerres",
                    "codigo": "52573"
                },
                {
                    "nombre": "Pupiales",
                    "codigo": "52585"
                },
                {
                    "nombre": "Ricaurte",
                    "codigo": "52612"
                },
                {
                    "nombre": "Roberto Payan",
                    "codigo": "52621"
                },
                {
                    "nombre": "Samaniego",
                    "codigo": "52678"
                },
                {
                    "nombre": "San Andres De Tumaco",
                    "codigo": "52835"
                },
                {
                    "nombre": "San Bernardo",
                    "codigo": "52685"
                },
                {
                    "nombre": "San Jose De Alban",
                    "codigo": "52019"
                },
                {
                    "nombre": "San Lorenzo",
                    "codigo": "52687"
                },
                {
                    "nombre": "San Pablo",
                    "codigo": "52693"
                },
                {
                    "nombre": "San Pedro De Cartago",
                    "codigo": "52694"
                },
                {
                    "nombre": "Sandona",
                    "codigo": "52683"
                },
                {
                    "nombre": "Santa Barbara",
                    "codigo": "52696"
                },
                {
                    "nombre": "Santacruz",
                    "codigo": "52699"
                },
                {
                    "nombre": "Sapuyes",
                    "codigo": "52720"
                },
                {
                    "nombre": "Taminango",
                    "codigo": "52786"
                },
                {
                    "nombre": "Tangua",
                    "codigo": "52788"
                },
                {
                    "nombre": "Tuquerres",
                    "codigo": "52838"
                },
                {
                    "nombre": "Yacuanquer",
                    "codigo": "52885"
                }
            ]
        },
        "Norte De Santander": {
            "municipios": [
                {
                    "nombre": "Abrego",
                    "codigo": "54003"
                },
                {
                    "nombre": "Arboledas",
                    "codigo": "54051"
                },
                {
                    "nombre": "Bochalema",
                    "codigo": "54099"
                },
                {
                    "nombre": "Bucarasica",
                    "codigo": "54109"
                },
                {
                    "nombre": "Cachira",
                    "codigo": "54128"
                },
                {
                    "nombre": "Cacota",
                    "codigo": "54125"
                },
                {
                    "nombre": "Chinacota",
                    "codigo": "54172"
                },
                {
                    "nombre": "Chitaga",
                    "codigo": "54174"
                },
                {
                    "nombre": "Convencion",
                    "codigo": "54206"
                },
                {
                    "nombre": "Cucuta",
                    "codigo": "54001"
                },
                {
                    "nombre": "Cucutilla",
                    "codigo": "54223"
                },
                {
                    "nombre": "Durania",
                    "codigo": "54239"
                },
                {
                    "nombre": "El Carmen",
                    "codigo": "54245"
                },
                {
                    "nombre": "El Tarra",
                    "codigo": "54250"
                },
                {
                    "nombre": "El Zulia",
                    "codigo": "54261"
                },
                {
                    "nombre": "Gramalote",
                    "codigo": "54313"
                },
                {
                    "nombre": "Hacari",
                    "codigo": "54344"
                },
                {
                    "nombre": "Herran",
                    "codigo": "54347"
                },
                {
                    "nombre": "La Esperanza",
                    "codigo": "54385"
                },
                {
                    "nombre": "La Playa",
                    "codigo": "54398"
                },
                {
                    "nombre": "Labateca",
                    "codigo": "54377"
                },
                {
                    "nombre": "Los Patios",
                    "codigo": "54405"
                },
                {
                    "nombre": "Lourdes",
                    "codigo": "54418"
                },
                {
                    "nombre": "Mutiscua",
                    "codigo": "54480"
                },
                {
                    "nombre": "Ocaña",
                    "codigo": "54498"
                },
                {
                    "nombre": "Pamplona",
                    "codigo": "54518"
                },
                {
                    "nombre": "Pamplonita",
                    "codigo": "54520"
                },
                {
                    "nombre": "Puerto Santander",
                    "codigo": "54553"
                },
                {
                    "nombre": "Ragonvalia",
                    "codigo": "54599"
                },
                {
                    "nombre": "Salazar",
                    "codigo": "54660"
                },
                {
                    "nombre": "San Calixto",
                    "codigo": "54670"
                },
                {
                    "nombre": "San Cayetano",
                    "codigo": "54673"
                },
                {
                    "nombre": "Santiago",
                    "codigo": "54680"
                },
                {
                    "nombre": "Sardinata",
                    "codigo": "54720"
                },
                {
                    "nombre": "Silos",
                    "codigo": "54743"
                },
                {
                    "nombre": "Teorama",
                    "codigo": "54800"
                },
                {
                    "nombre": "Tibu",
                    "codigo": "54810"
                },
                {
                    "nombre": "Toledo",
                    "codigo": "54820"
                },
                {
                    "nombre": "Villa Caro",
                    "codigo": "54871"
                },
                {
                    "nombre": "Villa Del Rosario",
                    "codigo": "54874"
                }
            ]
        },
        "Putumayo": {
            "municipios": [
                {
                    "nombre": "Colon",
                    "codigo": "86219"
                },
                {
                    "nombre": "Leguizamo",
                    "codigo": "86573"
                },
                {
                    "nombre": "Mocoa",
                    "codigo": "86001"
                },
                {
                    "nombre": "Orito",
                    "codigo": "86320"
                },
                {
                    "nombre": "Puerto Asis",
                    "codigo": "86568"
                },
                {
                    "nombre": "Puerto Caicedo",
                    "codigo": "86569"
                },
                {
                    "nombre": "Puerto Guzman",
                    "codigo": "86571"
                },
                {
                    "nombre": "San Francisco",
                    "codigo": "86755"
                },
                {
                    "nombre": "San Miguel",
                    "codigo": "86757"
                },
                {
                    "nombre": "Santiago",
                    "codigo": "86760"
                },
                {
                    "nombre": "Sibundoy",
                    "codigo": "86749"
                },
                {
                    "nombre": "Valle Del Guamuez",
                    "codigo": "86865"
                },
                {
                    "nombre": "Villagarzon",
                    "codigo": "86885"
                }
            ]
        },
        "Quindio": {
            "municipios": [
                {
                    "nombre": "Armenia",
                    "codigo": "63001"
                },
                {
                    "nombre": "Buenavista",
                    "codigo": "63111"
                },
                {
                    "nombre": "Calarca",
                    "codigo": "63130"
                },
                {
                    "nombre": "Circasia",
                    "codigo": "63190"
                },
                {
                    "nombre": "Cordoba",
                    "codigo": "63212"
                },
                {
                    "nombre": "Filandia",
                    "codigo": "63272"
                },
                {
                    "nombre": "Genova",
                    "codigo": "63302"
                },
                {
                    "nombre": "La Tebaida",
                    "codigo": "63401"
                },
                {
                    "nombre": "Montenegro",
                    "codigo": "63470"
                },
                {
                    "nombre": "Pijao",
                    "codigo": "63548"
                },
                {
                    "nombre": "Quimbaya",
                    "codigo": "63594"
                },
                {
                    "nombre": "Salento",
                    "codigo": "63690"
                }
            ]
        },
        "Risaralda": {
            "municipios": [
                {
                    "nombre": "Apia",
                    "codigo": "66045"
                },
                {
                    "nombre": "Balboa",
                    "codigo": "66075"
                },
                {
                    "nombre": "Belen De Umbria",
                    "codigo": "66088"
                },
                {
                    "nombre": "Dosquebradas",
                    "codigo": "66170"
                },
                {
                    "nombre": "Guatica",
                    "codigo": "66318"
                },
                {
                    "nombre": "La Celia",
                    "codigo": "66383"
                },
                {
                    "nombre": "La Virginia",
                    "codigo": "66400"
                },
                {
                    "nombre": "Marsella",
                    "codigo": "66440"
                },
                {
                    "nombre": "Mistrato",
                    "codigo": "66456"
                },
                {
                    "nombre": "Pereira",
                    "codigo": "66001"
                },
                {
                    "nombre": "Pueblo Rico",
                    "codigo": "66572"
                },
                {
                    "nombre": "Quinchia",
                    "codigo": "66594"
                },
                {
                    "nombre": "Santa Rosa De Cabal",
                    "codigo": "66682"
                },
                {
                    "nombre": "Santuario",
                    "codigo": "66687"
                }
            ]
        },
        "Santander": {
            "municipios": [
                {
                    "nombre": "Aguada",
                    "codigo": "68013"
                },
                {
                    "nombre": "Albania",
                    "codigo": "68020"
                },
                {
                    "nombre": "Aratoca",
                    "codigo": "68051"
                },
                {
                    "nombre": "Barbosa",
                    "codigo": "68077"
                },
                {
                    "nombre": "Barichara",
                    "codigo": "68079"
                },
                {
                    "nombre": "Barrancabermeja",
                    "codigo": "68081"
                },
                {
                    "nombre": "Betulia",
                    "codigo": "68092"
                },
                {
                    "nombre": "Bolivar",
                    "codigo": "68101"
                },
                {
                    "nombre": "Bucaramanga",
                    "codigo": "68001"
                },
                {
                    "nombre": "Cabrera",
                    "codigo": "68121"
                },
                {
                    "nombre": "California",
                    "codigo": "68132"
                },
                {
                    "nombre": "Capitanejo",
                    "codigo": "68147"
                },
                {
                    "nombre": "Carcasi",
                    "codigo": "68152"
                },
                {
                    "nombre": "Cepita",
                    "codigo": "68160"
                },
                {
                    "nombre": "Cerrito",
                    "codigo": "68162"
                },
                {
                    "nombre": "Charala",
                    "codigo": "68167"
                },
                {
                    "nombre": "Charta",
                    "codigo": "68169"
                },
                {
                    "nombre": "Chima",
                    "codigo": "68176"
                },
                {
                    "nombre": "Chipata",
                    "codigo": "68179"
                },
                {
                    "nombre": "Cimitarra",
                    "codigo": "68190"
                },
                {
                    "nombre": "Concepcion",
                    "codigo": "68207"
                },
                {
                    "nombre": "Confines",
                    "codigo": "68209"
                },
                {
                    "nombre": "Contratacion",
                    "codigo": "68211"
                },
                {
                    "nombre": "Coromoro",
                    "codigo": "68217"
                },
                {
                    "nombre": "Curiti",
                    "codigo": "68229"
                },
                {
                    "nombre": "El Carmen De Chucuri",
                    "codigo": "68235"
                },
                {
                    "nombre": "El Guacamayo",
                    "codigo": "68245"
                },
                {
                    "nombre": "El Peñon",
                    "codigo": "68250"
                },
                {
                    "nombre": "El Playon",
                    "codigo": "68255"
                },
                {
                    "nombre": "Encino",
                    "codigo": "68264"
                },
                {
                    "nombre": "Enciso",
                    "codigo": "68266"
                },
                {
                    "nombre": "Florian",
                    "codigo": "68271"
                },
                {
                    "nombre": "Floridablanca",
                    "codigo": "68276"
                },
                {
                    "nombre": "Galan",
                    "codigo": "68296"
                },
                {
                    "nombre": "Gambita",
                    "codigo": "68298"
                },
                {
                    "nombre": "Giron",
                    "codigo": "68307"
                },
                {
                    "nombre": "Guaca",
                    "codigo": "68318"
                },
                {
                    "nombre": "Guadalupe",
                    "codigo": "68320"
                },
                {
                    "nombre": "Guapota",
                    "codigo": "68322"
                },
                {
                    "nombre": "Guavata",
                    "codigo": "68324"
                },
                {
                    "nombre": "Güepsa",
                    "codigo": "68327"
                },
                {
                    "nombre": "Hato",
                    "codigo": "68344"
                },
                {
                    "nombre": "Jesus Maria",
                    "codigo": "68368"
                },
                {
                    "nombre": "Jordan",
                    "codigo": "68370"
                },
                {
                    "nombre": "La Belleza",
                    "codigo": "68377"
                },
                {
                    "nombre": "La Paz",
                    "codigo": "68397"
                },
                {
                    "nombre": "Landazuri",
                    "codigo": "68385"
                },
                {
                    "nombre": "Lebrija",
                    "codigo": "68406"
                },
                {
                    "nombre": "Los Santos",
                    "codigo": "68418"
                },
                {
                    "nombre": "Macaravita",
                    "codigo": "68425"
                },
                {
                    "nombre": "Malaga",
                    "codigo": "68432"
                },
                {
                    "nombre": "Matanza",
                    "codigo": "68444"
                },
                {
                    "nombre": "Mogotes",
                    "codigo": "68464"
                },
                {
                    "nombre": "Molagavita",
                    "codigo": "68468"
                },
                {
                    "nombre": "Ocamonte",
                    "codigo": "68498"
                },
                {
                    "nombre": "Oiba",
                    "codigo": "68500"
                },
                {
                    "nombre": "Onzaga",
                    "codigo": "68502"
                },
                {
                    "nombre": "Palmar",
                    "codigo": "68522"
                },
                {
                    "nombre": "Palmas Del Socorro",
                    "codigo": "68524"
                },
                {
                    "nombre": "Paramo",
                    "codigo": "68533"
                },
                {
                    "nombre": "Piedecuesta",
                    "codigo": "68547"
                },
                {
                    "nombre": "Pinchote",
                    "codigo": "68549"
                },
                {
                    "nombre": "Puente Nacional",
                    "codigo": "68572"
                },
                {
                    "nombre": "Puerto Parra",
                    "codigo": "68573"
                },
                {
                    "nombre": "Puerto Wilches",
                    "codigo": "68575"
                },
                {
                    "nombre": "Rionegro",
                    "codigo": "68615"
                },
                {
                    "nombre": "Sabana De Torres",
                    "codigo": "68655"
                },
                {
                    "nombre": "San Andres",
                    "codigo": "68669"
                },
                {
                    "nombre": "San Benito",
                    "codigo": "68673"
                },
                {
                    "nombre": "San Gil",
                    "codigo": "68679"
                },
                {
                    "nombre": "San Joaquin",
                    "codigo": "68682"
                },
                {
                    "nombre": "San Jose De Miranda",
                    "codigo": "68684"
                },
                {
                    "nombre": "San Miguel",
                    "codigo": "68686"
                },
                {
                    "nombre": "San Vicente De Chucuri",
                    "codigo": "68689"
                },
                {
                    "nombre": "Santa Barbara",
                    "codigo": "68705"
                },
                {
                    "nombre": "Santa Helena Del Opon",
                    "codigo": "68720"
                },
                {
                    "nombre": "Simacota",
                    "codigo": "68745"
                },
                {
                    "nombre": "Socorro",
                    "codigo": "68755"
                },
                {
                    "nombre": "Suaita",
                    "codigo": "68770"
                },
                {
                    "nombre": "Sucre",
                    "codigo": "68773"
                },
                {
                    "nombre": "Surata",
                    "codigo": "68780"
                },
                {
                    "nombre": "Tona",
                    "codigo": "68820"
                },
                {
                    "nombre": "Valle De San Jose",
                    "codigo": "68855"
                },
                {
                    "nombre": "Velez",
                    "codigo": "68861"
                },
                {
                    "nombre": "Vetas",
                    "codigo": "68867"
                },
                {
                    "nombre": "Villanueva",
                    "codigo": "68872"
                },
                {
                    "nombre": "Zapatoca",
                    "codigo": "68895"
                }
            ]
        },
        "Sucre": {
            "municipios": [
                {
                    "nombre": "Buenavista",
                    "codigo": "70110"
                },
                {
                    "nombre": "Caimito",
                    "codigo": "70124"
                },
                {
                    "nombre": "Chalan",
                    "codigo": "70230"
                },
                {
                    "nombre": "Coloso",
                    "codigo": "70204"
                },
                {
                    "nombre": "Corozal",
                    "codigo": "70215"
                },
                {
                    "nombre": "Coveñas",
                    "codigo": "70221"
                },
                {
                    "nombre": "El Roble",
                    "codigo": "70233"
                },
                {
                    "nombre": "Galeras",
                    "codigo": "70235"
                },
                {
                    "nombre": "Guaranda",
                    "codigo": "70265"
                },
                {
                    "nombre": "La Union",
                    "codigo": "70400"
                },
                {
                    "nombre": "Los Palmitos",
                    "codigo": "70418"
                },
                {
                    "nombre": "Majagual",
                    "codigo": "70429"
                },
                {
                    "nombre": "Morroa",
                    "codigo": "70473"
                },
                {
                    "nombre": "Ovejas",
                    "codigo": "70508"
                },
                {
                    "nombre": "Palmito",
                    "codigo": "70523"
                },
                {
                    "nombre": "Sampues",
                    "codigo": "70670"
                },
                {
                    "nombre": "San Benito Abad",
                    "codigo": "70678"
                },
                {
                    "nombre": "San Juan De Betulia",
                    "codigo": "70702"
                },
                {
                    "nombre": "San Luis De Since",
                    "codigo": "70742"
                },
                {
                    "nombre": "San Marcos",
                    "codigo": "70708"
                },
                {
                    "nombre": "San Onofre",
                    "codigo": "70713"
                },
                {
                    "nombre": "San Pedro",
                    "codigo": "70717"
                },
                {
                    "nombre": "Santiago De Tolu",
                    "codigo": "70820"
                },
                {
                    "nombre": "Sincelejo",
                    "codigo": "70001"
                },
                {
                    "nombre": "Sucre",
                    "codigo": "70771"
                },
                {
                    "nombre": "Tolu Viejo",
                    "codigo": "70823"
                }
            ]
        },
        "Tolima": {
            "municipios": [
                {
                    "nombre": "Alpujarra",
                    "codigo": "73024"
                },
                {
                    "nombre": "Alvarado",
                    "codigo": "73026"
                },
                {
                    "nombre": "Ambalema",
                    "codigo": "73030"
                },
                {
                    "nombre": "Anzoategui",
                    "codigo": "73043"
                },
                {
                    "nombre": "Armero",
                    "codigo": "73055"
                },
                {
                    "nombre": "Ataco",
                    "codigo": "73067"
                },
                {
                    "nombre": "Cajamarca",
                    "codigo": "73124"
                },
                {
                    "nombre": "Carmen De Apicala",
                    "codigo": "73148"
                },
                {
                    "nombre": "Casabianca",
                    "codigo": "73152"
                },
                {
                    "nombre": "Chaparral",
                    "codigo": "73168"
                },
                {
                    "nombre": "Coello",
                    "codigo": "73200"
                },
                {
                    "nombre": "Coyaima",
                    "codigo": "73217"
                },
                {
                    "nombre": "Cunday",
                    "codigo": "73226"
                },
                {
                    "nombre": "Dolores",
                    "codigo": "73236"
                },
                {
                    "nombre": "Espinal",
                    "codigo": "73268"
                },
                {
                    "nombre": "Falan",
                    "codigo": "73270"
                },
                {
                    "nombre": "Flandes",
                    "codigo": "73275"
                },
                {
                    "nombre": "Fresno",
                    "codigo": "73283"
                },
                {
                    "nombre": "Guamo",
                    "codigo": "73319"
                },
                {
                    "nombre": "Herveo",
                    "codigo": "73347"
                },
                {
                    "nombre": "Honda",
                    "codigo": "73349"
                },
                {
                    "nombre": "Ibague",
                    "codigo": "73001"
                },
                {
                    "nombre": "Icononzo",
                    "codigo": "73352"
                },
                {
                    "nombre": "Lerida",
                    "codigo": "73408"
                },
                {
                    "nombre": "Libano",
                    "codigo": "73411"
                },
                {
                    "nombre": "Mariquita",
                    "codigo": "73443"
                },
                {
                    "nombre": "Melgar",
                    "codigo": "73449"
                },
                {
                    "nombre": "Murillo",
                    "codigo": "73461"
                },
                {
                    "nombre": "Natagaima",
                    "codigo": "73483"
                },
                {
                    "nombre": "Ortega",
                    "codigo": "73504"
                },
                {
                    "nombre": "Palocabildo",
                    "codigo": "73520"
                },
                {
                    "nombre": "Piedras",
                    "codigo": "73547"
                },
                {
                    "nombre": "Planadas",
                    "codigo": "73555"
                },
                {
                    "nombre": "Prado",
                    "codigo": "73563"
                },
                {
                    "nombre": "Purificacion",
                    "codigo": "73585"
                },
                {
                    "nombre": "Rioblanco",
                    "codigo": "73616"
                },
                {
                    "nombre": "Roncesvalles",
                    "codigo": "73622"
                },
                {
                    "nombre": "Rovira",
                    "codigo": "73624"
                },
                {
                    "nombre": "Saldaña",
                    "codigo": "73671"
                },
                {
                    "nombre": "San Antonio",
                    "codigo": "73675"
                },
                {
                    "nombre": "San Luis",
                    "codigo": "73678"
                },
                {
                    "nombre": "Santa Isabel",
                    "codigo": "73686"
                },
                {
                    "nombre": "Suarez",
                    "codigo": "73770"
                },
                {
                    "nombre": "Valle De San Juan",
                    "codigo": "73854"
                },
                {
                    "nombre": "Venadillo",
                    "codigo": "73861"
                },
                {
                    "nombre": "Villahermosa",
                    "codigo": "73870"
                },
                {
                    "nombre": "Villarrica",
                    "codigo": "73873"
                }
            ]
        },
        "Valle Del Cauca": {
            "municipios": [
                {
                    "nombre": "Alcala",
                    "codigo": "76020"
                },
                {
                    "nombre": "Andalucia",
                    "codigo": "76036"
                },
                {
                    "nombre": "Ansermanuevo",
                    "codigo": "76041"
                },
                {
                    "nombre": "Argelia",
                    "codigo": "76054"
                },
                {
                    "nombre": "Bolivar",
                    "codigo": "76100"
                },
                {
                    "nombre": "Buenaventura",
                    "codigo": "76109"
                },
                {
                    "nombre": "Bugalagrande",
                    "codigo": "76113"
                },
                {
                    "nombre": "Caicedonia",
                    "codigo": "76122"
                },
                {
                    "nombre": "Cali",
                    "codigo": "76001"
                },
                {
                    "nombre": "Calima",
                    "codigo": "76126"
                },
                {
                    "nombre": "Candelaria",
                    "codigo": "76130"
                },
                {
                    "nombre": "Cartago",
                    "codigo": "76147"
                },
                {
                    "nombre": "Dagua",
                    "codigo": "76233"
                },
                {
                    "nombre": "El Aguila",
                    "codigo": "76243"
                },
                {
                    "nombre": "El Cairo",
                    "codigo": "76246"
                },
                {
                    "nombre": "El Cerrito",
                    "codigo": "76248"
                },
                {
                    "nombre": "El Dovio",
                    "codigo": "76250"
                },
                {
                    "nombre": "Florida",
                    "codigo": "76275"
                },
                {
                    "nombre": "Ginebra",
                    "codigo": "76306"
                },
                {
                    "nombre": "Guacari",
                    "codigo": "76318"
                },
                {
                    "nombre": "Guadalajara De Buga",
                    "codigo": "76111"
                },
                {
                    "nombre": "Jamundi",
                    "codigo": "76364"
                },
                {
                    "nombre": "La Cumbre",
                    "codigo": "76377"
                },
                {
                    "nombre": "La Union",
                    "codigo": "76400"
                },
                {
                    "nombre": "La Victoria",
                    "codigo": "76403"
                },
                {
                    "nombre": "Obando",
                    "codigo": "76497"
                },
                {
                    "nombre": "Palmira",
                    "codigo": "76520"
                },
                {
                    "nombre": "Pradera",
                    "codigo": "76563"
                },
                {
                    "nombre": "Restrepo",
                    "codigo": "76606"
                },
                {
                    "nombre": "Riofrio",
                    "codigo": "76616"
                },
                {
                    "nombre": "Roldanillo",
                    "codigo": "76622"
                },
                {
                    "nombre": "San Pedro",
                    "codigo": "76670"
                },
                {
                    "nombre": "Sevilla",
                    "codigo": "76736"
                },
                {
                    "nombre": "Toro",
                    "codigo": "76823"
                },
                {
                    "nombre": "Trujillo",
                    "codigo": "76828"
                },
                {
                    "nombre": "Tulua",
                    "codigo": "76834"
                },
                {
                    "nombre": "Ulloa",
                    "codigo": "76845"
                },
                {
                    "nombre": "Versalles",
                    "codigo": "76863"
                },
                {
                    "nombre": "Vijes",
                    "codigo": "76869"
                },
                {
                    "nombre": "Yotoco",
                    "codigo": "76890"
                },
                {
                    "nombre": "Yumbo",
                    "codigo": "76892"
                },
                {
                    "nombre": "Zarzal",
                    "codigo": "76895"
                }
            ]
        },
        "Vaupes": {
            "municipios": [
                {
                    "nombre": "Caruru",
                    "codigo": "97161"
                },
                {
                    "nombre": "Mitu",
                    "codigo": "97001"
                },
                {
                    "nombre": "Pacoa",
                    "codigo": "97511"
                },
                {
                    "nombre": "Papunaua",
                    "codigo": "97777"
                },
                {
                    "nombre": "Taraira",
                    "codigo": "97666"
                },
                {
                    "nombre": "Yavarate",
                    "codigo": "97889"
                }
            ]
        },
        "Vichada": {
            "municipios": [
                {
                    "nombre": "Cumaribo",
                    "codigo": "99773"
                },
                {
                    "nombre": "La Primavera",
                    "codigo": "99524"
                },
                {
                    "nombre": "Puerto Carreño",
                    "codigo": "99001"
                },
                {
                    "nombre": "Santa Rosalia",
                    "codigo": "99624"
                }
            ]
        }
    }
};


    function updateCiudades(departamentoInput, ciudadesDatalist) {
        const selectedDepto = departamentoInput.value;
        const ciudadInput = departamentoInput.closest('.form-group').nextElementSibling.querySelector('input');
        ciudadInput.value = '';
        ciudadInput.setCustomValidity('Seleccione una ciudad válida de la lista');
        ciudadesDatalist.innerHTML = '';

        if (selectedDepto && data.departamentos[selectedDepto]) {
            const municipios = data.departamentos[selectedDepto].municipios;
            municipios.forEach(municipio => {
                const option = document.createElement('option');
                option.value = municipio.nombre;
                ciudadesDatalist.appendChild(option);
            });
        }
    }

    const departamentos = Object.keys(data.departamentos);
    departamentos.forEach(departamento => {
        const option = document.createElement('option');
        option.value = departamento;
        departamentosDatalist.appendChild(option);

        const optionLaboral = option.cloneNode(true);
        departamentosLaboralesDatalist.appendChild(optionLaboral);
    });

    function handleDepartamentoInput(departamentoInput, ciudadesDatalist) {
        if (!departamentos.includes(departamentoInput.value)) {
            departamentoInput.setCustomValidity('Seleccione un departamento válido de la lista');
        } else {
            departamentoInput.setCustomValidity('');
            updateCiudades(departamentoInput, ciudadesDatalist);
        }
    }

    function handleCiudadInput(departamentoInput, ciudadInput) {
        const selectedDepto = departamentoInput.value;
        const municipios = selectedDepto ? data.departamentos[selectedDepto].municipios : [];
        const municipioNombres = municipios.map(municipio => municipio.nombre);

        if (!municipioNombres.includes(ciudadInput.value)) {
            ciudadInput.setCustomValidity('Seleccione una ciudad válida de la lista');
        } else {
            ciudadInput.setCustomValidity('');
        }
    }

    departamentoInput.addEventListener('input', function() {
        handleDepartamentoInput(departamentoInput, ciudadesDatalist);
    });

    departamentoInput.addEventListener('blur', function() {
        if (!departamentos.includes(departamentoInput.value)) {
            departamentoInput.value = '';
            ciudadInput.value = '';
            ciudadInput.setCustomValidity('');
            ciudadesDatalist.innerHTML = '';
        }
    });

    ciudadInput.addEventListener('input', function() {
        handleCiudadInput(departamentoInput, ciudadInput);
    });

    ciudadInput.addEventListener('blur', function() {
        handleCiudadInput(departamentoInput, ciudadInput);
    });

    departamentoLaboralInput.addEventListener('input', function() {
        handleDepartamentoInput(departamentoLaboralInput, ciudadesLaboralesDatalist);
    });

    departamentoLaboralInput.addEventListener('blur', function() {
        if (!departamentos.includes(departamentoLaboralInput.value)) {
            departamentoLaboralInput.value = '';
            ciudadLaboralInput.value = '';
            ciudadLaboralInput.setCustomValidity('');
            ciudadesLaboralesDatalist.innerHTML = '';
        }
    });

    ciudadLaboralInput.addEventListener('input', function() {
        handleCiudadInput(departamentoLaboralInput, ciudadLaboralInput);
    });

    ciudadLaboralInput.addEventListener('blur', function() {
        handleCiudadInput(departamentoLaboralInput, ciudadLaboralInput);
    });
});
