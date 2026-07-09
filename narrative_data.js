// ─── DONNÉES NARRATIVES (scénarios détaillés) ─────────────────────────────────
// Fichier séparé pour garder Index.html léger. Chargé via <script src="narrative_data.js">
const NARRATIVE = {
  s1: {
  "title": "L'Attentat",
  "intro": "New York, 16 septembre 1920. Cette aventure de niveau 1 commence lors de l'attentat de Wall Street, un événement historique qui a réellement eu lieu. Fiche technique : Action, Ambiance, Interaction, Investigation.",
  "steps": [
    {
      "id": "s1_e1",
      "label": "Début explosif",
      "resume": "16 septembre 1920, midi, Wall Street. La première aventure de ce livret est destinée à des personnages de niveau 1. Elle commence lors de l'attentat de Wall Street, un événement historique qui a réellement eu lieu.",
      "chapitres": [
        {
          "titre": "Wall Street",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Il est midi et le quartier de Wall Street, à New York, ressemble à une fourmilière ce lundi. Des centaines d'employés de bureau du quartier des finances se pressent dans les rues pour aller déjeuner. Vous devez parfois jouer des coudes pour avancer dans la foule de costumes sombres, de chemises blanches, de chapeaux et de casquettes que personne n'oublie de porter. L'affluence est telle que vous vous maudissez de vous être retrouvé ici à cette heure, lorsque…"
            },
            {
              "type": "neutre",
              "contenu": "Pour le moment, les personnages ne se connaissent pas encore, mais ils sont tous à ce moment-là à quelques mètres les uns des autres, parmi une foule d'inconnus."
            },
            {
              "type": "bleu",
              "contenu": "Le personnage avec la plus haute valeur de PER remarque un homme qui court dans la foule, en retenant sa casquette. Si Francesca Petrini est jouée, elle est bousculée par l'homme qui lâche un « scusi » réflexe — si la joueuse répond en italien, il se retourne, le regard fou : « Ne restez pas là, Il arrive ! », sinon il poursuit sa course. Test de PER difficulté 15 : la lame d'un couteau dépasse de sa main.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Le personnage avec la seconde plus haute valeur de PER voit un homme s'écrouler juste à côté, poignardé par l'Italien (si le professeur Kerensky est joué, il est juste à côté de la victime). L'homme se tient le bas-ventre, peau cuivrée, s'exprime en français. Test de PER difficulté 15 (Maryse Boucher) pour entendre « Attention, couchez-vous ! »",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Les autres aperçoivent simplement une colonne de fumée qui monte soudain d'une camionnette plus loin devant. Un murmure parcourt la foule. Demandez « Que faites-vous ? » et pressez les joueurs de répondre — n'accordez qu'une petite action (se jeter à terre, protéger un enfant, hurler, courir à l'opposé…)."
            },
            {
              "type": "vert",
              "contenu": "Une énorme déflagration se produit là où montait la colonne de fumée. Vous n'avez pas le temps de comprendre ce qui se passe qu'un souffle colossal vous projette en arrière. Des morceaux de métal percutent les corps et déchiquettent les chairs."
            },
            {
              "type": "bleu",
              "contenu": "Test de DEX difficulté 20 pour chaque personnage. Difficulté 15 pour ceux accroupis au chevet du blessé ou qui couraient pour s'éloigner. Difficulté 10 si un personnage a suivi le conseil de l'Indien (se coucher à terre). Échec = blessure grave. Que le test soit réussi ou non, tous les PJ sombrent dans l'inconscience (critique 20 naturel : reste conscient, voit l'Italien se relever et fuir, sans pouvoir intervenir).",
              "label": "🔵 Jet de dés"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s1_e2",
      "label": "Un réveil douloureux",
      "resume": "L'hôpital Saint-James, à peine à 50 mètres du lieu de l'attentat, est un petit établissement privé, dirigé par le docteur Stemfield. Votre but est de faire comprendre aux PJ que l'hôpital est le meilleur endroit pour une guérison rapide, de leur permettre de faire connaissance et de trouver des indices pour poursuivre l'aventure.",
      "chapitres": [
        {
          "titre": "Hôpital Saint-James",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous vous éveillez sur un lit d'hôpital. Le souvenir de l'explosion vous revient et vous laisse pantelant. Après un moment, vous retrouvez vos esprits et regardez autour de vous pour découvrir de nombreux autres lits occupés par des blessés. Dans un coin, une infirmière change un bandage derrière un rideau entrouvert qui sépare le dortoir en deux parties, l'une pour les hommes, l'autre pour les femmes. Vous portez une blouse blanche de patient et vos effets personnels sont posés sur une chaise."
            },
            {
              "type": "neutre",
              "contenu": "Les personnages se réveillent dans une chambre bondée (8 lits au lieu de 4). Le nombre des victimes excède largement la capacité d'accueil ordinaire des lieux, ce qui explique la promiscuité et la mixité du dortoir."
            },
            {
              "type": "bleu",
              "contenu": "Il manque 1d6 PV à chaque personnage, 2d6 PV à ceux qui ont subi une blessure grave.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Les autres patients",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Jake, le cireur de chaussures : jeune homme sans éducation et assez mal en point. Il a une main bandée et souffre beaucoup, mais serre les dents."
            },
            {
              "type": "neutre",
              "contenu": "Le vieil Indien : toujours inconscient, sa blessure est bandée et il ne saigne plus."
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT (médecine) difficulté 15. Une réussite permet de penser qu'il est au plus mal — il ne devrait pas être dans cette chambre mais avec les autres victimes dont le pronostic vital est engagé. Si on en informe Rosa, elle est sincèrement désolée mais il faudra attendre la visite du docteur.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Les autres patients : les personnages prétirés non choisis par les joueurs sont aussi présents — bon moyen de faire leur connaissance et de les incarner en PNJ crédibles."
            }
          ]
        },
        {
          "titre": "Le personnel",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Sœur Rosa, l'infirmière responsable du dortoir (et de deux autres), est une religieuse bénévole. Cœur sur la main mais peu causante. Les PJ ont pour consigne de se reposer 24 heures. Ils ne sont pas autorisés à quitter l'hôpital — en cas d'insistance, elle indique les deux policiers de faction à la sortie."
            },
            {
              "type": "neutre",
              "contenu": "Se déplacer : les PJ sont livrés à eux-mêmes le plus clair de leur temps. Dès qu'ils encombrent le couloir, une infirmière leur demande de retourner dans leur chambre. Il n'y a rien à voir hormis d'autres blessés dans des chambres similaires."
            },
            {
              "type": "neutre",
              "contenu": "Les policiers de faction ordonnent aux PJ d'attendre que le chef de la police donne son aval. Ils doivent rester à disposition des autorités — en pratique, ce moment n'arrivera jamais vu le nombre de témoins."
            },
            {
              "type": "neutre",
              "contenu": "Le médecin passe vers 18h avec deux infirmières, examine rapidement chaque patient. Il informe froidement Jake qu'il ne pourra plus se servir de sa main. Il fait une piqûre à l'Indien sans plus d'égards. S'interrogé sur les soins intensifs : « Les victimes qui sont en soins intensifs en ont réellement besoin. Nous sommes débordés, nous devons choisir nos priorités. Nous l'avons mis sous sédatif pour ne pas qu'il bouge et risque de rouvrir sa blessure. Mais il va bien. » Discussion close."
            }
          ]
        },
        {
          "titre": "Indices matériels",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Les effets personnels de l'Indien contiennent des indices importants. Les fouiller devant Rosa est une mauvaise idée (mise en garde des policiers) ; un petit billet suffit à acheter le silence de Jake."
            },
            {
              "type": "bleu",
              "contenu": "Une fouille rapide du costume permet de trouver des clés (habitation luxueuse) et 2 photos. Test de PER (recherche d'indice) difficulté 15 : les chaussures de l'Indien sont éclaboussées d'une substance blanche.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Photo 1 : photo floue d'un homme en costume banal. Un PJ ayant vu le visage de l'Italien le reconnaît. Un amateur de photo (journaliste) sait qu'il s'agit d'un agrandissement pris de loin."
            },
            {
              "type": "neutre",
              "contenu": "Photo 2 : deux hommes sur le perron d'une maison. L'un est l'Indien. L'autre est un inconnu — mais John Prentiss (prétiré) reconnaît Edwin P. Fisher, tennisman américain réputé (il a joué contre lui). Tout amateur de sport peut aussi le reconnaître."
            },
            {
              "type": "neutre",
              "contenu": "Terre blanche : traces provenant d'un remblai calcaire récemment étalé sur la jetée du port de plaisance de New York. Jake connaît cette terre qui rend son travail pénible et peut expliquer d'où elle vient."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Jake",
          "desc": "Jeune cireur de chaussures, main bandée. Peut faire les poches de l'Indien si les PJ ratent les indices (filet de sécurité)."
        },
        {
          "nom": "Sœur Rosa",
          "desc": "Infirmière religieuse bénévole, cœur sur la main mais peu causante."
        }
      ]
    },
    {
      "id": "s1_e3",
      "label": "Une nuit de cauchemar",
      "resume": "Vers 19h, on sert un repas frugal aux PJ. Ensuite ils peuvent dormir — important s'ils veulent guérir. Durant la nuit, ils font tous le même songe.",
      "chapitres": [
        {
          "titre": "Le cauchemar",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous êtes dans le quartier de Wall Street et vous marchez dans la foule des anonymes. Vous savez qu'ils vont tous mourir. Vous leur criez de fuir, mais ils ne vous écoutent pas. L'explosion se déploie dans un panache de lumière verdâtre, comme un nuage de gaz qui se répand au ralenti. À votre tour, vous voulez fuir, mais vos pieds s'enfoncent dans le sol. Le nuage nauséabond rattrape ses victimes une par une. Soudain, le vieil Indien se dresse face à vous et vous saisit par la main. Il vous remet debout et plonge son regard dans le vôtre. « Vous devez les arrêter ! » Vous vous redressez brusquement, en sueur, sur votre lit d'hôpital pour constater que d'autres, comme vous, sont assis dans le lit le souffle court, le regard halluciné."
            },
            {
              "type": "neutre",
              "contenu": "Tous les PJ ont fait le même rêve, ils ont été choisis par le vieil Indien pour poursuivre sa lutte."
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 10 pour chaque PJ. Échec = -1 PC (dureté et réalité du cauchemar). En contrepartie, l'Indien a insufflé une part de lui : guérison miraculeuse (chaque PJ souffrant d'une blessure grave peut l'effacer) + récupération normale de PV en fin de nuit (Dé de vie + Mod. de CON + niveau).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "La mort de l'Indien",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Le vieil Indien est mort sans un bruit. Les joueurs vont-ils s'en apercevoir immédiatement ou seulement au petit matin lorsque Rosa constatera le décès ? Il a les yeux grands ouverts. Si on l'examine de près, un filet de bave verdâtre s'étale à la commissure de ses lèvres."
            },
            {
              "type": "bleu",
              "contenu": "Test de PER difficulté 15. Réussite : une légère odeur de moutarde émane du cadavre. Seul Lord Duncan Blight (prétiré) identifie précisément cette odeur : le terrible gaz moutarde utilisé pendant la Grande Guerre. Environ 10 minutes après le constat du décès, deux brancardiers emmènent le corps à la morgue.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Fin de séjour",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "En fin de matinée, vu leur état, on annonce aux PJ qu'ils sont autorisés à partir. Rosa est particulièrement perplexe quant à leur rétablissement rapide et la mort de l'Indien — elle se signe plusieurs fois en les regardant. Les policiers leur demandent d'inscrire leur nom et adresse sur un registre avant de sortir. On les convoquera plus tard. Les PJ sont libres de poursuivre l'enquête."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Le vieil Indien",
          "desc": "Meurt durant la nuit. Insuffle une part de lui-même aux PJ (guérison + choix de continuer sa lutte)."
        }
      ]
    },
    {
      "id": "s1_e4",
      "label": "La maison d'Edwin Fisher",
      "resume": "Le seul indice que les PJ possèdent sur l'identité de l'Indien est la photo où il pose avec le célèbre tennisman. Une visite au club de tennis local permet d'obtenir l'adresse de son pied-à-terre new-yorkais.",
      "chapitres": [
        {
          "titre": "Extérieurs",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous êtes devant la maison où a été prise la photo d'Edwin Fisher. Une bâtisse de deux étages, assez étroite, dotée d'une magnifique porte décorée de ferronneries."
            },
            {
              "type": "neutre",
              "contenu": "La porte est verrouillée mais les PJ devraient avoir les clés. Sinon, il leur faudra entrer par effraction."
            }
          ]
        },
        {
          "titre": "Rez-de-chaussée",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Les clés en votre possession ouvrent la porte d'entrée qui donne sur un hall pourvu d'un escalier à vis. Deux portes desservent des pièces latérales. Un salon et une cuisine d'un côté, un bureau bibliothèque de l'autre. Tout est meublé avec un luxe discret. D'épais tapis étouffent les bruits de pas, des photos de sport, principalement de tennis, et des coupes décorent les lieux."
            },
            {
              "type": "neutre",
              "contenu": "Recherche d'indices : il faut environ 10 minutes pour fouiller une pièce. Les indices ne nécessitent pas de test pour être découverts, sauf mention contraire."
            },
            {
              "type": "neutre",
              "contenu": "Cuisine : pas d'indice."
            },
            {
              "type": "bleu",
              "contenu": "Salon : un cadre contient une photo d'Edwin au milieu d'une tribu amérindienne en tenue traditionnelle (tribu canadienne algonquine). Test de PER difficulté 10 pour repérer l'Indien de l'hôpital parmi les siens.",
              "label": "🔵 Indice"
            },
            {
              "type": "neutre",
              "contenu": "Bibliothèque : de nombreux livres d'ésotérisme, de religion, sur le thème des cultes antiques. Des ouvrages rares traitent de la magie des Indiens."
            },
            {
              "type": "neutre",
              "contenu": "Bureau : un télégramme envoyé par Edwin depuis Hamilton (Canada), adressé à M. Charles Grand (le nom français de l'Indien) à cette adresse. Daté du 10 septembre, rédigé en français : « Vision plus précise - 16 septembre - Wall Street - Edwin. »"
            }
          ]
        },
        {
          "titre": "Étage",
          "blocs": [
            {
              "type": "vert",
              "contenu": "L'étage accueille une chambre qui semble avoir été occupée récemment, elle donne sur un petit réduit transformé en laboratoire photographique, une salle d'eau. Une dernière porte est verrouillée et aucune de vos clés ne l'ouvre."
            },
            {
              "type": "neutre",
              "contenu": "Chambre (d'ami) récemment occupée par Charles : un sac de voyage, quelques affaires, une bourse contenant des osselets de divination, des plumes et autres gris-gris de magie indienne."
            },
            {
              "type": "neutre",
              "contenu": "Un livre noir sans titre est posé sur la table de nuit. Il traite de cultes sanglants et d'invocations de créatures monstrueuses. Un télégramme sert de marque-page et indique un chapitre traitant des sacrifices de masse."
            },
            {
              "type": "bleu",
              "contenu": "La lecture de l'ouvrage est très dérangeante : -1 PC, à moins de réussir un test de choc difficulté 10.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Le télégramme (15 septembre, français) : « Le conseil des anciens a imploré Gitche Manitou. Le 16 n'est qu'un essai. Quelque chose de plus terrible se prépare. » Pour les Indiens, Gitche Manitou est le Grand Esprit, créateur de tout et donneur de vie."
            },
            {
              "type": "neutre",
              "contenu": "Labo photo : de nombreux négatifs éparpillés. Un PJ compétent développe les photos prises au port de plaisance, dont celle de l'Italien de l'attentat. La photo complète montre deux autres personnes déchargeant une caisse d'un bateau. Une recherche attentive permet de lire le nom du voilier : « Santa Lucia »."
            },
            {
              "type": "neutre",
              "contenu": "Pièce verrouillée : chambre personnelle d'Edwin Fisher. Si forcée : grand lit à baldaquin, draps de soie, armoire de pyjamas de luxe. Rien d'utile à l'enquête."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Edwin P. Fisher (1873-1947)",
          "desc": "Tennisman de haut niveau réel, absent. A envoyé des cartes postales pressant ses amis de quitter Wall Street avant le 16 septembre — interné à l'asile d'Amityville, déclaré fou mais inoffensif."
        }
      ]
    },
    {
      "id": "s1_e5",
      "label": "Le Santa Lucia",
      "resume": "Tous les indices mènent les PJ vers le port de plaisance, à la recherche de l'Italien et du voilier Santa Lucia. À bord, l'homme responsable de l'attentat se meurt.",
      "chapitres": [
        {
          "titre": "Le port de plaisance",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Le port de plaisance n'est guère plus qu'une longue jetée de pierre recouverte de graviers blancs et parsemée de flaques laiteuses qui éclaboussent vos chaussures. De part et d'autre, de nombreux pontons de bois donnent accès à une multitude de voiliers."
            },
            {
              "type": "neutre",
              "contenu": "Le Santa Lucia est amarré à quai. Test de PER pour chaque PJ, le meilleur résultat trouve le voilier. C'est un bateau de 10 mètres capable de traverser l'Atlantique (ce qu'il a fait pour apporter sa cargaison létale)."
            }
          ]
        },
        {
          "titre": "L'homme du bateau",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "L'Italien responsable de l'attentat se meurt. Il a conduit la camionnette, mais son altercation avec Charles Grand a retardé sa fuite et il a reçu un projectile de métal dans le dos lors de l'explosion. Depuis, il s'est réfugié dans le navire où il se vide de son sang."
            },
            {
              "type": "neutre",
              "contenu": "Au cours de l'explosion, une terreur indicible s'est emparée de lui sans qu'il ne s'explique pourquoi. Cet événement et la douleur ont fait vaciller sa raison. Il pensait œuvrer pour sa cause anarchiste, mais réalise désormais avoir été manipulé."
            },
            {
              "type": "bleu",
              "contenu": "Test de PER difficulté 10 en montant à bord : traces de sang séché sur le bastingage. Test de DEX difficulté 15 pour ne pas se faire remarquer (échec = le pont craque, il est mis en alerte).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Si les PJ parlent entre eux en arrivant, il est automatiquement sur ses gardes — observez le comportement des joueurs pour déterminer si leurs personnages sont silencieux."
            }
          ]
        },
        {
          "titre": "Agonisant",
          "blocs": [
            {
              "type": "vert",
              "contenu": "À demi couché sur une banquette, adossé au mur, l'homme vous tient en joue de son revolver. Un bandage lui enserre la taille, sa main tremble et des gouttes de sueur perlent à son front. Son regard est voilé et il halète. « Vous êtes venus terminer le boulot ? Vous croyez que je n'ai pas compris ? Vous voulez un sacrifice de plus ? Mais vous ne m'aurez pas vivant ! » Il commence à retourner son arme vers lui…"
            },
            {
              "type": "neutre",
              "contenu": "Il hésite malgré tout un instant. Il faut rapidement le calmer par des paroles apaisantes."
            },
            {
              "type": "bleu",
              "contenu": "Écoutez ce que disent les joueurs, puis demandez au meilleur d'entre eux un test de CHA (difficulté 10 à 15 selon les arguments). La Voie de la psychologie ou la Voie du discours apportent le double de leur bonus habituel dans cette situation d'urgence.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Lui prendre son arme : si un personnage se précipite pour s'en saisir, l'homme change de cible et tire à bout portant (attaque 1d20+5 contre la DEF, DM 1d10) avant de s'affaisser. On pourrait le croire mort, tant son pouls est faible, pourtant il se réveille une minute plus tard pour prononcer ses dernières paroles."
            }
          ]
        },
        {
          "titre": "Dernières paroles",
          "blocs": [
            {
              "type": "vert",
              "contenu": "L'homme sanglote et secoue la tête. « La mort ! Ah ça, les bourgeois l'ont bien mérité. Mais pas comme ça, non pas ça ! Je l'ai senti, comme une langue froide qui lèche votre crâne ! Une… une sangsue qui aspire votre dernier souffle. Mais il n'en a pas encore assez. Il en veut plus, toujours plus de terreur, plus de morts ! Le hangar, trouvez le hangar ! Avant qu'ils ne cachent la mort, vite, maintenant ! Le hangar… » Il semble s'éteindre et, dans un dernier souffle, murmure quelque chose de presque inaudible."
            },
            {
              "type": "bleu",
              "contenu": "Seul un PJ tout près de lui (test de DEX difficulté 10 pour se rapprocher à temps) peut tenter un test de PER difficulté 10 pour entendre « numéro 12 ». Les autres doivent réussir un test de PER difficulté 20.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Suicide : si les personnages ne parviennent pas à le calmer, il se loge une balle dans la tête. Les PJ devront penser à se renseigner à la capitainerie (assez éloignée pour ne pas avoir entendu le coup de feu)."
            }
          ]
        },
        {
          "titre": "Fouilles & capitainerie",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Fouiller l'homme : il possède un revolver de gros calibre et assez de munitions pour recharger 3 fois, des papiers qui l'identifient, et 20 dollars."
            },
            {
              "type": "bleu",
              "contenu": "Fouiller le bateau : test de PER difficulté 10 pour trouver une pile de tracts dans un placard : « Libérez les prisonniers politiques ou bien aucun de vous n'échappera à la mort ! », signé « Les Combattants anarchistes américains ».",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "La capitainerie : une visite permet d'obtenir facilement le nom du propriétaire du bateau (en prétextant vouloir l'acheter ou le louer) : Lorenzo Bianchi. Test de CHA difficulté 10 pour apprendre que cette personne possède aussi un hangar un peu plus loin sur les docks, le numéro 12."
            },
            {
              "type": "bleu",
              "contenu": "Si les PJ ont raté l'indice : au moment où ils sont sur le quai à la sortie du bateau, test de PER — le meilleur résultat remarque un homme au cheveu brun gominé, visage de dur, costard bien taillé, qui avançait vers le Santa Lucia, voit les PJ et fait demi-tour rapidement. S'ils courent, il court vers le hangar et se cache sur la plate-forme (60m d'avance, hors de portée d'arme de poing).",
              "label": "🔵 Filet de sécurité MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "L'homme du Santa Lucia",
          "desc": "Agonisant, terrorisé, persuadé qu'on vient l'achever. Révèle l'existence du hangar n°12 avant de mourir ou se suicider."
        }
      ]
    },
    {
      "id": "s1_e6",
      "label": "Hangar numéro 12",
      "resume": "L'antre où se préparait un nouvel attentat, bien plus terrible. Deux hommes présents : un tireur embusqué en hauteur et un comparse dans le bureau du fond.",
      "chapitres": [
        {
          "titre": "Le hangar",
          "blocs": [
            {
              "type": "vert",
              "contenu": "La lourde porte du hangar coulisse avec difficulté dans un grincement qui tranche avec le silence sépulcral des lieux. Vous tendez l'oreille, mais vous entendez seulement le bruit des gouttes d'eau qui tombent de très haut. Ploc… Ploc… Ploc… comme si le temps était compté. Au fond, un bureau vitré est partiellement masqué par les engins qui encombrent le lieu."
            },
            {
              "type": "bleu",
              "contenu": "Un terroriste est caché sur une plate-forme à 5 mètres de hauteur. Test de PER difficulté 20 pour le repérer avant qu'il n'ouvre le feu. Test de PER difficulté 15 pour voir une ombre s'agiter derrière les vitres sales du bureau au fond. Dès que les PJ avancent, celui en hauteur commence à tirer.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Si le premier terroriste est abattu, il tombe de la plate-forme. Son comparse dans le bureau s'engouffre dans un souterrain dès que le premier est abattu, si quelqu'un arrive jusqu'au bureau, ou au bout de 3 tours (il brûle des papiers compromettants). La porte est fermée à clef — briser la vitre prend un tour complet."
            }
          ]
        },
        {
          "titre": "Poursuite dans les souterrains",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Les escaliers descendent dans la pénombre. Quelques soupiraux apportent une lumière à peine suffisante pour se déplacer dans ce labyrinthe de couloirs parcourus de tuyauteries rouillées et parsemé de flaques d'eau. Les sons de vos pas et de ceux du fuyard se répercutent partout, rendant difficile sa localisation."
            },
            {
              "type": "bleu",
              "contenu": "À chaque tour, test de PER et test de DEX difficulté 15 pour ne pas être semé. Certains personnages en distancent d'autres — s'ils veulent rester groupés, se caler sur le plus lent. Répétez 3 fois. Si un personnage a réussi au moins 2 tours sur 3, il arrive peu après le fuyard (Fin 1). Sinon il arrive trop tard (Fin 2).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Fin 1 — Rattrapé",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Après un dernier virage qui vous empêchait de voir votre cible, vous arrivez dans une salle éclairée par une lampe à pétrole. Au centre, un homme tient dans ses bras une lourde caisse de bois. Une autre caisse similaire est posée à ses pieds. Vous remarquez que sous la caisse, qu'il maintient avec peine, il braque un pistolet dans votre direction. Que faites-vous ?"
            },
            {
              "type": "neutre",
              "contenu": "Si le PJ a l'initiative, il peut se mettre à l'abri ou tirer le premier. Dès qu'il le peut, le terroriste fait feu. S'il est touché, blessé ou bousculé :"
            },
            {
              "type": "vert",
              "contenu": "Votre course folle dans les couloirs sombres est interrompue par une puissante déflagration. L'air confiné est comprimé, vous fracasse les tympans et vous projette au sol. L'onde de choc est aussitôt suivie par un puissant courant d'air qui emporte jusqu'à vous un épais nuage brunâtre qui pue la moutarde."
            },
            {
              "type": "bleu",
              "contenu": "Chaque personnage dans les souterrains fait un test de CON difficulté 15 ou est étourdi 1 tour complet. Tous subissent 1d6 DM (moitié si CON réussi).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Échapper au gaz",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "À chaque tour, test d'INT difficulté 10 (retrouver son chemin) et test de CON difficulté 15 (résister au gaz). Chaque échec = 1 point de DM. Il faut réussir 3 tests d'INT au total pour sortir. Tant que ce n'est pas le cas, on continue.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Dès qu'un personnage arrive à 0 PV, un miracle survient : un puissant vent se met à souffler depuis la sortie et dissipe rapidement le gaz. Les personnages sont brûlés par l'acide, presque asphyxiés, mais vivants. Le personnage avec la plus haute PER a l'impression d'entendre un murmure dans le vent : « Gitche Manitou »…"
            }
          ]
        },
        {
          "titre": "Fin 2 — Pas rattrapé",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Les personnages n'ont pas rattrapé le terroriste à temps. Dans la pièce qui contient les caisses de gaz, une épaisse porte blindée donne sur un souterrain qui mène directement à l'extérieur. L'homme s'est enfui avec une des caisses et, avant de condamner la sortie, jette une grenade à manche allemande dans la pièce afin de libérer le gaz contenu dans la seconde caisse."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Terroriste (plate-forme)",
          "desc": "Embusqué en hauteur, ouvre le feu dès qu'on avance dans le hangar."
        },
        {
          "nom": "Comparse (bureau)",
          "desc": "Brûle des papiers compromettants puis fuit par le souterrain avec une caisse de gaz."
        }
      ]
    },
    {
      "id": "s1_e7",
      "label": "Conclusion",
      "resume": "Que les PJ aient réussi ou non à arrêter le terroriste, la campagne se poursuit vers l'aventure 2 avec une invitation surprise.",
      "chapitres": [
        {
          "titre": "Conclusion de l'aventure",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Si les PJ ont arrêté le terroriste, ils ont la satisfaction d'avoir empêché un nouvel attentat."
            },
            {
              "type": "neutre",
              "contenu": "Si ce n'est pas le cas, ils apprendront qu'un attentat au gaz a fait des dizaines de victimes dans une petite ville de la côte Est, cinq jours plus tard, alors qu'ils sont encore à l'hôpital pour soigner cloques et brûlures."
            },
            {
              "type": "bleu",
              "contenu": "Ce qu'ils ne savent pas : cet attentat a servi à invoquer un Shoggoth, une créature qu'ils pourraient retrouver tôt ou tard.",
              "label": "🔵 Info MJ"
            }
          ],
          "type": "lieu"
        },
        {
          "titre": "Transition vers l'aventure 2",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Cette aventure débute directement après la précédente. Les PJ ont été victimes de l'attaque au gaz. Brûlés par la substance corrosive, ils ont passé deux semaines de plus à l'hôpital Saint-James. Durant cet intervalle, les PJ passent au niveau 2."
            },
            {
              "type": "vert",
              "contenu": "Les événements du hangar numéro 12 ne sont pas passés inaperçus. La police a rapidement cédé la place au FBI et vous avez longuement été interrogés, tandis que vous soigniez les brûlures que le gaz corrosif avait laissées sur votre peau. Deux semaines aux bons soins du docteur Stemfield et de la fidèle Rosa. Avant votre sortie de l'hôpital, le directeur du FBI en personne, William J. Flynn, est venu vous rendre visite pour vous faire part de sa position sur toute cette affaire. Officiellement, les attentats sont le fait d'anarchistes, les Galleanistes, un groupe organisé autour du journal Cronaca Sovversiva (La chronique subversive). Puis, tout en fumant un affreux cigare dont la fumée mettait à rude épreuve vos poumons encore fragiles, il a déclaré sur un ton qui ne souffre aucune contestation : « La nation reconnaissante, vous offre une croisière vers une station balnéaire quelque part du côté de Boston, afin de purifier vos poumons grâce au bon air marin de la Nouvelle Angleterre. Vous embarquez demain matin ! » Dans un dernier nuage de fumée, il a ajouté : « Restez là-bas aussi longtemps que vous le voudrez. »"
            },
            {
              "type": "neutre",
              "contenu": "Si les PJ insistent pour donner du corps à des soupçons mêlant magie indienne, sangsue, terreur — toute théorie « fantaisiste » qui ne va pas dans le sens de l'enquête sur les anarchistes — Flynn répond : « Évitez de répandre des rumeurs ridicules ! Vous avez été très éprouvés. Le repos vous fera le plus grand bien. » En cas d'insistance, il propose ostensiblement un placement à l'hôpital psychiatrique d'Amityville « comme pour le joueur de tennis, là, Edwin Fisher » — de quoi décourager les joueurs."
            },
            {
              "type": "vert",
              "contenu": "Quelques jours plus tard, vous voici sur le pont du Princess of Olympus, un navire de luxe qui doit vous emporter dans un établissement balnéaire de soins. À l'horizon, la statue de la liberté disparaît progressivement. Vous avez été informés que le navire est à destination de Portland, à une centaine de kilomètres au Nord de Boston. La croisière durera deux jours, le temps de naviguer vers un complexe hôtelier fraîchement inauguré."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Le bon docteur Stemfield a décidé de se venger des PJ. Lorsqu'il a appris qu'ils embarquaient pour Portland, il a contacté ses amis de Cragport et pris des dispositions pour que les PJ n'arrivent jamais à bon port. Sur place, le père Fishburn a décidé de coopérer.",
              "label": "🔵 Secret MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "William J. Flynn (directeur du FBI)",
          "desc": "Referme l'enquête officielle sur la piste anarchiste. Organise la croisière de convalescence qui mènera à l'aventure 2."
        }
      ]
    }
  ],
  "notes_globales": "Aventure d'introduction. Les textes en vert sont à lire tel quels ou à paraphraser. Points de passage : indices sur l'Indien à l'hôpital, maison d'Edwin Fisher, Santa Lucia, hangar 12. La conclusion transitionne directement vers l'aventure 2 (croisière du FBI vers Portland)."
},
  s2: {
  "title": "Le Naufrage",
  "intro": "Les personnages sont invités à profiter de l'air marin pour se refaire une santé. Sur le bateau, ils font connaissance d'autres passagers. Mais leur navire est saboté et, malgré leur intervention pour l'empêcher, le naufrage est inévitable. Fiche technique : Action, Ambiance, Interaction, Investigation.",
  "steps": [
    {
      "id": "s2_e1",
      "label": "Embarquement",
      "resume": "Le Princess of Olympus, navire de luxe, emporte les PJ vers un établissement balnéaire de soins à Portland. L'histoire pour le MJ : le docteur Stemfield s'est vengé en contactant ses amis de Cragport pour saboter le navire.",
      "chapitres": [
        {
          "titre": "Le Princess of Olympus",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Bateau à vapeur de petite taille (50m de long, moins de 10m de large, une seule cheminée). Le pont supérieur abrite le poste de commandement et le quartier des officiers. Le pont principal accueille un bar, une salle à manger et un salon cossu, parfois animé par le quartet Blue Waltz et la chanteuse Miss Lila Blue. Le pont arrière offre des chaises longues et un bar extérieur."
            },
            {
              "type": "neutre",
              "contenu": "Environ 60 personnes à bord, dont 40 passagers. Les cabines des clients (chaque PJ a la sienne) sont au-dessus de la ligne de flottaison. Celles du personnel sont dans les profondeurs, près de leur poste de travail."
            },
            {
              "type": "neutre",
              "contenu": "Météo : le premier jour, mer calme, mais une forte houle venue de l'Est se lève en soirée."
            }
          ]
        },
        {
          "titre": "Les passagers",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Pour le trajet, jouez une courte scène pour chaque PJ. Choisissez le PNJ qui convient le mieux : pour un docteur → Stella, un aventurier → Alicia, un intellectuel → Elmer."
            },
            {
              "type": "neutre",
              "contenu": "Elmer Downey : homme d'apparence quelconque, en réalité agent du FBI incognito chargé par Flynn de surveiller les PJ. Excellent joueur d'échecs et de backgammon. Confronté au surnaturel, il devient violent."
            },
            {
              "type": "vert",
              "contenu": "« Bonjour. Le temps est long sur un bateau n'est-ce pas ? L'oisiveté, quel ennui. Que diriez-vous d'une partie d'échec ? »"
            },
            {
              "type": "bleu",
              "contenu": "Pour gagner une partie de jeu de réflexion contre Elmer : tests d'INT opposés (Elmer +5). Le premier à cumuler 3 réussites l'emporte.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Stella Northshore : épouse d'un richissime banquier, victime de l'attentat du 16 septembre. Plus de peur que de mal, mais sa santé mentale déjà précaire s'est aggravée — persuadée d'avoir des plaies infectées dans le dos."
            },
            {
              "type": "vert",
              "contenu": "« Docteur, je vous en supplie, aidez-moi. Je souffre, mes plaies se sont ouvertes. Vous ne voyez pas que je suis EN TRAIN DE MOURIR ! DOCTEUR ! DOCTEUR ! »"
            },
            {
              "type": "bleu",
              "contenu": "Poigne de fer : test de FOR difficulté 15 pour se dégager (redouble ses hurlements), ou test de CHA difficulté 10 à 15 pour la calmer.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Allan Smalder : acteur de second rôle à la petite notoriété, aime jouer les héros. S'accoude au bastingage à côté d'un PJ : « J'ai surpris votre regard. Un très beau regard, mais avec des yeux tristes, en vérité » — réplique tirée du film « La Fille du train »."
            },
            {
              "type": "neutre",
              "contenu": "Famille Lendberg : Karl (père), Lena (mère), Kurt (fils 19 ans, costaud et mutique) et Alicia (9 ans), atteinte d'une lourde insuffisance respiratoire — ce voyage est sa cure de la dernière chance."
            },
            {
              "type": "vert",
              "contenu": "Une fois de plus, une toux rauque ravage tes poumons. Du pouce, tu essuies le filet de sang qui perle à la commissure de tes lèvres, lorsqu'une fillette tire doucement sur tes vêtements. « Ça va monsieur ? Tu as mal ? » Elle tend vers toi un mouchoir blanc. Tu remarques la peau de sa main, extrêmement pâle, presque bleue, sous laquelle on devine des veines pratiquement noires."
            },
            {
              "type": "neutre",
              "contenu": "Si le PJ essuie son sang dans le mouchoir, Kurt intervient et s'en empare dans un grognement, emmenant Alicia avec un regard noir. Sinon, elle parle quelques instants avec le PJ."
            },
            {
              "type": "neutre",
              "contenu": "De vieilles connaissances : les prétirés non utilisés sont à nouveau présents, déjà rencontrés à l'hôpital, envoyés eux aussi en cure suite à leurs cauchemars."
            },
            {
              "type": "bleu",
              "contenu": "Victimes potentielles : si les PJ n'ont pas empêché la fuite du dernier terroriste (aventure 1), des victimes de l'attentat au gaz sont aussi du voyage et peuvent en témoigner — bon moyen de faire ressentir les conséquences d'un échec.",
              "label": "🔵 Conséquence narrative"
            }
          ]
        },
        {
          "titre": "L'équipage",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Capitaine Lars Ulfwik : a perdu sa femme récemment, dépressif. Mortellement indécis quand les choses tournent mal."
            },
            {
              "type": "neutre",
              "contenu": "Dwain Blanchard, second : Canadien, courageux et compétent, mais trop respectueux pour contredire le « pitaine »."
            },
            {
              "type": "neutre",
              "contenu": "Magrit, mécano : gros bonhomme bourru en relation d'amour avec le moteur. Traite ses aides comme des moins que rien."
            },
            {
              "type": "neutre",
              "contenu": "Liam et Deniz, les « gueules noires » : alimentent la chaudière. Gueule noire de charbon, peau grasse de sueur, démarche voûtée, yeux étonnamment protubérants."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Elmer Downey",
          "desc": "Agent FBI incognito chargé de surveiller les PJ."
        },
        {
          "nom": "Stella Northshore",
          "desc": "Femme traumatisée, croit avoir des plaies infectées."
        },
        {
          "nom": "Allan Smalder",
          "desc": "Acteur cabotin qui joue les séducteurs."
        },
        {
          "nom": "Famille Lendberg",
          "desc": "Karl, Lena, Kurt et la petite Alicia, malade."
        }
      ]
    },
    {
      "id": "s2_e2",
      "label": "Une nuit agitée",
      "resume": "Durant la nuit, la météo se dégrade et le navire se fait ballotter.",
      "chapitres": [
        {
          "titre": "Tempête nocturne",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Chaque PJ fait un test de CON (marine) difficulté 12 ou subit un violent mal de mer : malus de -2 à toutes les actions jusqu'au retour à terre.",
              "label": "🔵 Jet de dés"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s2_e3",
      "label": "Apocalypse now",
      "resume": "Le lendemain, la houle se fait de plus en plus forte. Le navire perd son cap et se retrouve à la merci des vagues — deux scènes simultanées se déclenchent : Alicia à la mer, et le moteur qui lâche.",
      "chapitres": [
        {
          "titre": "La tempête empire",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Le lendemain, plus la journée avance et plus la houle se fait forte. Le navire doit affronter des vagues toujours plus hautes. Le commandant s'applique à les affronter de face, mais soudain le navire fait une embardée et perd son cap, ce qui le laisse à la merci des paquets d'eau qui le prennent par le travers."
            },
            {
              "type": "bleu",
              "contenu": "Chaque PJ fait un test de PER (vigilance) et un test d'INT (mécanique). Le meilleur PER entend un cri à l'extérieur : Alicia sur le pont, penchée à la rambarde. Le meilleur INT comprend que le moteur vient de s'arrêter dans un choc anormal.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Alicia à la mer",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Allan, l'acteur presque célèbre, vous a devancé. La mer est démontée et des paquets d'eau balayent le pont au moment où le navire semble brusquement ralentir et se mettre en travers. Vous posez à peine le pied dehors que la fillette est emportée par une vague. Sans réfléchir, Allan plonge aussitôt à son secours. Que faites-vous ?"
            },
            {
              "type": "neutre",
              "contenu": "La manœuvre d'Allan est stupide sans bouée. Il commence à se noyer lui aussi. Une seule bouée, attachée à une corde, est disponible à quelques mètres. Dilemme : qui sauver ? Allan met 6 tours à se noyer, la fillette 4 tours."
            },
            {
              "type": "bleu",
              "contenu": "Lancer la bouée à Alicia : aucun effet, elle n'est pas capable de s'y accrocher.\nLancer la bouée à Allan : test de DEX difficulté 15 (1 essai/tour) puis 2 tests de FOR difficulté 15 pour le ramener (1 essai/tour).\nSauter à l'eau pour Alicia : 3 tests de FOR (natation) difficulté 15 (+10 avec bouée). Chaque échec = 1d3 DM de noyade.\nSauter à l'eau pour Allan : 3 tests de FOR (natation) difficulté 20 (+10 avec bouée). Chaque échec = 1d3 DM de noyade.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Si Alicia est sauvée, elle a ingurgité beaucoup d'eau, au plus mal, à moitié inconsciente."
            },
            {
              "type": "bleu",
              "contenu": "Test de PER difficulté 15 pour saisir ses mots : « Le monsieur noir dans la mer, le monsieur noir ». Elle a vu Liam, armé d'une barre de fer, se jeter à l'eau. Elle ne reprendra pas conscience avant le lendemain.",
              "label": "🔵 Indice"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Allan Smalder",
          "desc": "Se jette héroïquement mais maladroitement à l'eau pour sauver Alicia."
        }
      ]
    },
    {
      "id": "s2_e4",
      "label": "En salle des machines, ça chauffe !",
      "resume": "Le moteur coupé, il faut descendre réparer avant que la chaudière n'explose. Deniz, armé d'une pelle, est encore caché dans les parages.",
      "chapitres": [
        {
          "titre": "La salle des machines",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Pour y accéder : descendre deux étages, parcourir des coursives de métal tandis que le bateau est secoué."
            },
            {
              "type": "bleu",
              "contenu": "Test de DEX difficulté 12 pour chaque PJ. Échec = chute d'une plate-forme, 1d3 DM.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Une impressionnante chaudière fournit en vapeur des pistons qui actionnent un énorme arbre à cames. Le corps d'un homme gît au sol, une flaque de sang macule son crâne. Du côté des pistons, un inquiétant nuage de vapeur cache la vue et émet un sifflement strident."
            },
            {
              "type": "neutre",
              "contenu": "Liam et Deniz ont saboté le moteur. Magrit a surpris Liam qui coinçait une grande clef de métal pour immobiliser l'arbre à cames — Deniz l'a frappé par derrière avec sa pelle, le tuant sur le coup. Il est encore caché sur une passerelle en hauteur (PER difficulté 15 pour le repérer). Liam a ensuite sauté à l'eau pour saboter le gouvernail."
            }
          ]
        },
        {
          "titre": "Analyser la situation",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Examiner l'arbre à cames : test de DEX difficulté 15 pour s'approcher sans subir 1d4 DM de vapeur bouillante et apercevoir la clef qui bloque le mécanisme.\nExaminer le corps : Magrit est mort. Test d'INT (médecine) difficulté 15 pour comprendre que l'entaille n'est pas due à une chute mais à un objet tranchant.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Le métal de la chaudière émet des grincements de très mauvais augure et de plus en plus fréquents. Comme sous l'effet d'une énorme pression. Soudain, un rivet est projeté dans la pièce dans une détonation sèche."
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT (mécanique) difficulté 10 : pour retirer la clef, il faut réduire la pression — mais cela plonge la pièce dans un nuage de vapeur bouillante. Trouver la bonne vanne : autre test d'INT difficulté 10 (1 essai/tour, décompter les tours).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Débloquer l'arbre à cames à la force brute : test de FOR difficulté 25 (quasi impossible). Si un PJ relâche la pression, la difficulté baisse de 3 points par tour, mais chaque PJ présent subit 1d4 DM/tour (moitié si CON difficulté 15 réussi).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Combat contre Deniz",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Dès qu'un personnage repère Deniz, ou dès que quelqu'un tente de faire tomber la pression, le saboteur attaque en sautant du plafond avec sa pelle."
            },
            {
              "type": "bleu",
              "contenu": "Test de PER difficulté 15 ou être Surpris. À chaque tour, un personnage choisit entre attaquer Deniz ou maintenir la pression ouverte. Rivets projetés (DM 1d4), jets de vapeur (test DEX difficulté 15 pour esquiver sinon DM 1d4).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Deniz — NC1, FOR+2, DEX+1, CON+1, INT+0, PER-1, CHA-2, Init 12, DEF 11, PV 12. Pelle +3, DM 1d6+2. Moral : fuit vers la mer sous 3 PV. Même capturé, se jette à l'eau à la moindre occasion (mains liées y compris).",
              "label": "🔵 Statistiques"
            },
            {
              "type": "neutre",
              "contenu": "Si les PJ sont en difficulté : un rivet projeté entre les yeux de Deniz peut l'envoyer au tapis, ou Dwain le second peut prêter main forte."
            },
            {
              "type": "neutre",
              "contenu": "Explosion : seulement si tous les PJ sont inconscients ou fuient — la chaudière explose alors et tout PJ présent meurt."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Deniz",
          "desc": "NC1, PV12, DEF11. Pelle 1d6+2. Fuit vers la mer sous 3 PV, même capturé."
        },
        {
          "nom": "Magrit (mécano)",
          "desc": "Retrouvé mort, assassiné par Deniz d'un coup de pelle."
        }
      ]
    },
    {
      "id": "s2_e5",
      "label": "De Charybde en Scylla",
      "resume": "Le moteur sauvé, mais Liam sabote encore le gouvernail. Le navire part définitivement à la dérive.",
      "chapitres": [
        {
          "titre": "Le gouvernail perdu",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Liam, armé d'une barre de fer, utilise ses talents (sur)naturels pour nager jusqu'au gouvernail et le coincer. Le capitaine ne comprend pas immédiatement, force, et brise définitivement les gouvernes."
            },
            {
              "type": "vert",
              "contenu": "Quelque chose cloche dans le gouvernail. Le bateau semble tourner en rond. Il se met en travers, amasse paquets d'eau après paquets d'eau et part à la dérive. Il gîte de plus en plus."
            },
            {
              "type": "neutre",
              "contenu": "Il n'y a pas grand-chose à faire — se jeter à l'eau pour examiner le gouvernail serait un pur suicide avec cette mer, et même un héros n'y pourrait rien : les dégâts sont irréparables."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s2_e6",
      "label": "Naufrage",
      "resume": "Le capitaine refuse d'évacuer. L'attente dure plusieurs heures angoissantes, jusqu'à ce que le navire heurte les récifs.",
      "chapitres": [
        {
          "titre": "L'attente",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Chacun se calfeutre et craint le pire, ne faudrait-il pas évacuer le navire ? Le capitaine refuse. L'attente dure plusieurs heures angoissantes, tandis que le navire penche toujours davantage et dérive, poussé par la tempête."
            },
            {
              "type": "bleu",
              "contenu": "Si les PJ s'occupent activement (salle des machines, rassurer les passagers avec des tests de CHA difficulté 15, convaincre Miss Lila Blue et son quartet de jouer façon Titanic), cela aide le navire à affronter la tempête. Désobéir au capitaine = mutinerie : le second trouve un allié en Elmer Downey, tous deux armés.",
              "label": "🔵 Occupation optionnelle"
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 10 pour chaque PJ (-1 PC en cas d'échec).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Le choc",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Et puis soudain, le second crie « Terre, terre en vue ! » À travers les trombes d'eau et la tempête, vous apercevez la côte, silhouette sombre à l'horizon dans le crépuscule qui s'annonce. C'est à ce moment-là qu'un choc violent accompagné d'un énorme craquement stoppe définitivement le bateau. Le capitaine ordonne enfin l'évacuation. Hélas, à présent, l'inclinaison du navire bloque la mise à l'eau d'un des canots. Tout le monde se précipite sur l'unique embarcation abordable. Commence une lutte sans pitié. Des gens tombent à l'eau."
            }
          ]
        },
        {
          "titre": "Le canot",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Monter dans le canot : test difficulté 10 au choix de FOR (jouer des coudes), DEX (se faufiler) ou CHA (se faire aider). Un résultat ≥15 permet d'aider quelqu'un d'autre à monter. Impliquez des PNJ connus sans place à bord — qui les PJ choisissent-ils de secourir ?",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Finalement, le navire coule. Le capitaine Ulfwik reste à bord. Des gens se noient autour des PJ, impossible de tous les sauver. La tempête pousse le canot vers la côte comme une coquille de noix."
            },
            {
              "type": "bleu",
              "contenu": "Sans place à bord : 4 tests de CON (natation) difficulté 15 (+5 avec bouée). Chaque échec = 1d6 DM de noyade. S'il reste au moins 1 PV après les 4 tests, le PJ s'échoue sur la plage. Sinon il se noie.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Sabotage : le canot prend l'eau par un large trou dès sa mise à l'eau. Test d'INT difficulté 10 pour comprendre qu'il a été saboté à la hache par Liam et Deniz — s'il avait été mis à l'eau plus tôt, il aurait coulé immédiatement. Les rescapés doivent la vie sauve à la décision (funeste) du capitaine de ne pas évacuer plus tôt."
            }
          ]
        },
        {
          "titre": "Arrivée brutale",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Dans un dernier coup du sort, le canot heurte violemment les récifs et tous ses occupants sont précipités sur des rochers balayés par la mer déchaînée."
            },
            {
              "type": "bleu",
              "contenu": "Test de FOR difficulté 10 ou 1d4 DM pour atteindre la grève. Score ≥15 : peut aider un autre passager.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Enfin, ceux qui en ont encore la force réussissent à se mettre à l'abri dans une sorte de grotte creusée dans la falaise contre laquelle vous avez été drossés. Inutile de songer à quitter ce modeste abri tant que la mer est démontée. Les survivants, guère plus d'une douzaine au final, se blottissent les uns contre les autres et attendent le petit matin en essayant d'oublier la terrible vérité : que la majorité des passagers a péri lors du naufrage."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s2_e7",
      "label": "Un jour nouveau",
      "resume": "Au petit matin, la mer s'est calmée. Les rescapés explorent la côte et font une découverte macabre avant de retrouver la civilisation.",
      "chapitres": [
        {
          "titre": "La grève",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Au petit matin, la mer s'est calmée. La marée est basse et permet de sortir de la grotte où vous avez passé la nuit pour parcourir la grève rocheuse. Que faites-vous ?"
            },
            {
              "type": "neutre",
              "contenu": "L'épave : aucune trace du Princess. En revanche, les restes de la chaloupe sont éparpillés sur les rochers — 10 mètres de corde ou une bâche de 2x2m à récupérer."
            },
            {
              "type": "vert",
              "contenu": "Vous avez pris pied sur une côte de roches et de falaises. Vous êtes à l'embouchure d'une vaste baie orientée vers le Sud. Vers l'Est, un long cap abrupt avance dans la mer. Au Sud, l'eau s'étend à l'infini et au Nord se déploie un paysage de collines et de forêts. La bonne nouvelle, c'est que vers l'Ouest, vous apercevez un village de l'autre côté de la baie. L'endroit est habité, comme le confirme le petit sentier que vous venez de repérer."
            }
          ]
        },
        {
          "titre": "Découverte macabre",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Après environ une demi-heure de marche, vous arrivez à un croisement. Le sentier principal continue au-dessus des falaises et un autre descend à une petite plage. Vous remarquez quelque chose d'étrange sur la grève en contrebas. Une sorte de grand mât auquel est suspendu quelque chose."
            },
            {
              "type": "bleu",
              "contenu": "Test de PER difficulté 15 : c'est un cadavre, dans une posture étrange. Descendre à la plage prend une dizaine de minutes.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Sur le sable humide, à peine découvert par la marée, un horrible spectacle vous soulève l'estomac. Le cadavre d'un homme est attaché à un mât métallique, tête en bas. Sa cage thoracique a été ouverte et il a été vidé de tous ses organes. Il sèche au soleil comme un vulgaire poisson, comparaison accentuée par ses yeux étrangement protubérants. Mais votre malaise atteint son paroxysme lorsque vous réalisez que le mât est en fait une partie de l'arbre moteur d'un grand navire. Est-ce celui du Princess ? Cela semble impossible. Qui pourrait avoir eu la force de dresser un tel monument au cours de cette nuit de tempête ?"
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 12 pour chaque témoin (-1 PC en cas d'échec).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Il n'y a pas d'autres empreintes de pas que celles des PJ — le sacrifice a été fait à marée haute, par des créatures aquatiques."
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT ou PER difficulté 15 : le PJ croit reconnaître, sans certitude, le corps de Liam ou Deniz (traces de charbon que même la mer n'a pas effacées). Ceux des profondeurs ont sacrifié un des deux compères en représailles pour le demi-échec de leur mission.",
              "label": "🔵 Indice"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Étude anatomique (test d'INT médecine difficulté 15) : il manque les extrémités des mains et des pieds (palmées) et les flancs de la cage thoracique (branchies retirées). Le joueur ne doit avoir aucune certitude sur la véritable nature de la victime.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Retour à la civilisation",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous continuez vers l'ouest, sur le sentier principal, pendant encore quelques heures, ignorant quelques bifurcations qui ne vous semblent pas aller dans la bonne direction. Vous traversez une gorge profonde, au fond de laquelle coule une rivière, en empruntant un vertigineux pont de corde. La faim et la soif tenaillent tous les rescapés mais, enfin, le sentier débouche au-dessus du village que vous aviez aperçu. Des cultures en terrasses surplombent les maisons aux toits de pierre. Là, un vieux cultivateur qui piochait une parcelle se redresse et vous regarde d'un air ébahi : « Cré dieu, ben d'où vous arrivez donc ? »"
            },
            {
              "type": "neutre",
              "contenu": "Cette rencontre marque la fin de la seconde aventure. Les personnages vont pouvoir découvrir le village de Cragport et ses secrets."
            }
          ]
        }
      ],
      "pnj": []
    }
  ],
  "notes_globales": "L'histoire pour le MJ : le docteur Stemfield (aventure 1) s'est vengé en contactant ses amis de Cragport. Le père Fishburn (aventure 3) a fait engager Liam et Deniz pour saboter le navire — tous les passagers devaient périr, mais l'intervention des PJ et l'entêtement du capitaine provoquent un demi-échec. Les rescapés s'échouent près de Cragport."
},
  s3: {
  "title": "Lobster Bay",
  "intro": "Les naufragés sont recueillis à Lobster Bay, village de pêcheurs coupé du monde… au sourire trop parfait. Investigation au long cours : chaque indice rapproche du culte. Fiche technique : Action ★★ / Ambiance ★★★ / Investigation ★★★.",
  "steps": [
    {
      "id": "s3_e1",
      "label": "🏘️ L'arrivée au village",
      "resume": "Accueil chaleureux — trop chaleureux. Géographie : village isolé, Cragport le hameau voisin, la conserverie, l'église, la mine désaffectée. Pas de route praticable, pas d'émetteur radio.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Un homme aux cheveux gris, le sourcil broussailleux, vous écoute avec grande attention en hochant la tête. Autour, les villageois s'affairent pour vous installer, vous nourrir, vous sécher — des sourires partout. Et pourtant, quelque chose dans ces sourires…"
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Repartir : aucun bateau ne part « avant un moment », pas de route praticable, pas d'émetteur. N'importe quel villageois le confirme aimablement.\n• PER difficulté 15 → certains villageois ont un regard étrangement fixe.\n• INT difficulté 10 → le village vit en autarcie complète, ce qui est anormal."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Décrire Cragport comme étrange : les gens sont souriants et le malaise doit s'installer LENTEMENT. Comment un village peut-il vivre ainsi coupé de tout ?"
        }
      ],
      "pnj": [
        {
          "nom": "Père Fishburn",
          "desc": "Pasteur du village, chaleureux et autoritaire à la fois. LE grand méchant local."
        },
        {
          "nom": "Dr Dunstag",
          "desc": "Médecin du village — ambigu, son laboratoire cache des horreurs."
        },
        {
          "nom": "Villageois",
          "desc": "Souriants, serviables… et presque tous cultistes ou complices."
        }
      ]
    },
    {
      "id": "s3_e2",
      "label": "⚰️ Le cadavre & la guérison d'Alicia",
      "resume": "Le cadavre du profond trouvé sur la côte disparaît/est escamoté. Pendant ce temps, Alicia guérit miraculeusement — trop vite.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Alicia est devant la maison, en train de rire au soleil. « C'est une dame merveilleuse, elle a mis fin à mes crises » dit sa mère, des larmes de gratitude aux yeux. La jeune fille mourante d'il y a deux jours resplendit."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• INT difficulté 10 → Alicia porte une robe locale (elle est « adoptée » par le village).\n• PER difficulté 12 → elle joue les guides mais oriente subtilement les PJ loin de certains lieux.\n• Repère 1 (pense-bête) : guérison d'Alicia = première anomalie majeure."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "La guérison doit émerveiller PUIS inquiéter. Ne pas expliquer — laisser les PJ construire l'hypothèse."
        }
      ],
      "pnj": [
        {
          "nom": "Alicia (guérie)",
          "desc": "Sa « guérison » = le village l'a réclamée. Son sang parle. Elle devient de plus en plus distante."
        }
      ]
    },
    {
      "id": "s3_e3",
      "label": "🕵️ Disparition d'Elmer Downey",
      "resume": "Downey se révèle être un agent : il donne rendez-vous aux PJ le soir… et disparaît. Son cadavre nourrit déjà autre chose.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Un billet glissé sous votre porte : « Rendez-vous ce soir sur les rochers, au nord de la jetée. Venez discrètement. Je sais ce qui se passe ici. — E.D. » Le soir venu, les rochers sont déserts. Seule la mer répond."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Repère 2a/2b : disparition + message de l'agent Downey.\n• PER difficulté 15 sur les rochers → traces de lutte, une chaussure coincée.\n• La nuit, la difficulté des tests de discrétion des PJ augmente (villageois qui « se promènent »)."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Downey mort = escalade. Les PJ comprennent qu'ils sont surveillés. Dès lors, les villageois les suivent discrètement."
        }
      ],
      "pnj": [
        {
          "nom": "Elmer Downey (†)",
          "desc": "Agent en mission sur le village. Éliminé par le culte avant de parler. Son corps a été donné aux profonds."
        }
      ]
    },
    {
      "id": "s3_e4",
      "label": "🔬 Le laboratoire secret du Dr Dunstag",
      "resume": "Chez Dunstag : une clef, une date (17 octobre), et un laboratoire dissimulé contenant deux bassins d'eau de mer — et leurs occupants.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Le laboratoire contient deux bassins d'eau de mer alimentés par un système de pompes. Dans la pénombre verdâtre, quelque chose bouge sous la surface — quelque chose qui n'aurait jamais dû exister."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Repères 3-4 : photo du Dr Stemfield chez Dunstag ! + clef des souterrains + date du 17 octobre.\n• FOR difficulté 15 (porte métallique) OU DEX difficulté 15 (crocheter le cadenas).\n• 1 heure d'étude + INT difficulté 15 → conclusions sur les expériences (hybridation).\n• Choc difficulté 18 devant les bassins, sinon -1 PC."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "La photo de Stemfield relie ENFIN l'hôpital de l'aventure 1 au village. Moment de bascule de la campagne."
        }
      ],
      "pnj": [
        {
          "nom": "Dr Dunstag",
          "desc": "Complice « scientifique » du culte. Peut être retourné : il a peur de ce qu'il a contribué à créer."
        }
      ]
    },
    {
      "id": "s3_e5",
      "label": "⛪ L'église, ICHTHYS & la conserverie",
      "resume": "L'église de Cragport cache l'entrée des souterrains sous son autel. L'inscription ICTHYS (mal orthographiée) est un jeu de piste. La conserverie tourne à vide.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Comme chaque jour, vous trouvez une activité factice à la conserverie : des caisses qu'on déplace, des machines qui tournent sans rien produire. À l'église, l'autel de pierre porte quatre anneaux de fer et une inscription grecque : ICTHYS — il manque une lettre."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• ICHTHYS = poisson en grec (I-CH-TH-Y-S : Jésus Christ Fils de Dieu Sauveur). Ici « ICTHYS » sans H : un PJ maîtrisant le grec le remarque. Les cultistes l'ont détourné : « CTHulhu, Your Servant » — Ô grand Cthulhu, ton serviteur.\n• Repère 5 : activité factice à la conserverie.\n• Repère 6 : passage sous l'autel — 2 barres de bois de 4m dans les anneaux, FOR TOTALE 80 points cumulés pour déplacer l'autel.\n• Repère 7 : PER difficulté 15 (20 si inattentif) près des soupiraux → hurlements lointains très ténus (le Fils de Fishburn).\n• Messe chaque soir pendant 1h → créneau idéal pour fouiller les maisons (difficulté de discrétion réduite).\n• DEX (discrétion) difficulté 15 pour approcher la messe sans être repéré → assister à un office… particulier."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Le pense-bête du MJ (repères 0-12) liste tous les indices/ressources et où les trouver — cocher au fur et à mesure."
        }
      ],
      "pnj": [
        {
          "nom": "Père Fishburn",
          "desc": "Officie chaque soir. Ses sermons glissent doucement de la Bible vers autre chose."
        },
        {
          "nom": "Costauds (2+4)",
          "desc": "NC 1. Hommes de main du culte, patrouillent près de l'église la nuit."
        }
      ]
    },
    {
      "id": "s3_e6",
      "label": "⛏️ La mine, Josh & les révélations",
      "resume": "La vieille mine (entrée secondaire des souterrains) et Josh, l'ermite distillateur, dernier homme libre du coin — et détenteur de dynamite.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Voici l'entrée de l'ancienne mine, à demi effondrée. Plus loin, chez Max puis chez Wilbur, la piste mène à une cabane isolée : un vieil homme en fauteuil roulant somnole devant sa distillerie artisanale, un fusil à portée de main."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• DEX difficulté 15 (rochers glissants) pour approcher par la côte ; PER difficulté 15 pour repérer l'entrée secondaire (repère 10).\n• INT (explosifs) difficulté 20 → évaluer la dynamite de Josh (état, quantité).\n• PER (renseignement/psychologie) difficulté 10 → Josh en sait long mais a peur.\n• Le faire parler : boire un ou deux verres de son tord-boyaux OU CHA (persuasion) difficulté 10.\n• Repères 11-12 : piste chez Max → révélations de Josh chez Wilbur."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Josh + dynamite = la solution de la conclusion (aventure 4). Sa protection devient un enjeu. La date du 17 octobre approche…"
        }
      ],
      "pnj": [
        {
          "nom": "Josh",
          "desc": "Ermite en fauteuil roulant, distillateur. Connaît les souterrains ET possède la dynamite. Sa confiance se gagne."
        },
        {
          "nom": "Wilbur et Max",
          "desc": "Relais de la piste vers Josh — derniers habitants non acquis au culte."
        },
        {
          "nom": "Dwayne Blanchard",
          "desc": "Si les PJ sont en difficulté, il peut les aiguiller (filet de sécurité)."
        }
      ]
    }
  ],
  "notes_globales": "Cœur de la campagne : investigation lente, malaise croissant. Utiliser le pense-bête (repères 0-12) pour tracker les indices. Ne JAMAIS donner le plan des souterrains avant l'exploration. La messe du soir = créneau de fouille récurrent. Tout converge vers la cérémonie du 17 octobre."
},
  s4: {
  "title": "Le Rituel Final",
  "intro": "Sous Lobster Bay : mines effondrées, grottes, temple ancien. La cérémonie du 17 octobre approche — l'invocation doit être empêchée. Passage au niveau 4 avant la phase d'action. Fiche technique : Action ★★★ / Ambiance ★★★ / Investigation ★★.",
  "steps": [
    {
      "id": "s4_e1",
      "label": "⛏️ Les mines — descente",
      "resume": "Passage de niveau (niveau 4) avant d'entrer. Deux approches : « tout en finesse » (infiltration) ou frontale. Les mines effondrées mènent aux grottes.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Le boyau se prolonge sur quelques dizaines de mètres avant que la mine ne s'effondre en un chaos de poutres brisées. Un trou dans les gravats débouche dans un renfoncement naturel — au-delà, l'obscurité absolue et une odeur de marée."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Choc difficulté 5 (1 PC si échec) — l'oppression des profondeurs.\n• INT difficulté 15 → être certain du bon itinéraire dans les effondrements.\n• Franchir l'effondrement : DEX (escalade) difficulté 10 par le rebord instable OU FOR (athlétisme) difficulté 10 ; les PJ qui s'entraident : FOR difficulté 15 pour hisser.\n• Descente : DEX difficulté 15. Danger d'éboulis : DEX difficulté 15 pour s'arrêter à temps, FOR difficulté 20 pour retenir un compagnon (difficulté +1 par point d'équipement lourd).\n• Pas de plan pour les PJ : décrire, ne jamais montrer."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "L'entrée par la mine (repère 10, via Josh) évite l'église gardée. Gérer la lumière (lampes, torches) comme une ressource."
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e2",
      "label": "🦞 B. Le Fils de Fishburn",
      "resume": "Derrière une grille scellée, la créature hurlante entendue sous l'église : l'hybride monstrueux, fils du pasteur.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Un hurlement terrible se répercute dans les galeries, si proche que vos lampes tremblent. Derrière une grille de fer, une silhouette massive aux chairs épaisses et difformes se jette sur les barreaux — le haut de son corps s'achève en pinces énormes, capables de cisailler un homme."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Choc difficulté 12 ou -1 PC en le voyant.\n• La grille : FOR difficulté 25 pour la forcer (lui s'y acharne aussi !). Destructible à l'arme à feu (serrure).\n• « Moi voit, moi tue » : son langage rudimentaire — il peut être manipulé/libéré stratégiquement contre les cultistes."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Dilemme moral et tactique : le libérer sème le chaos chez les cultistes… et chez tout le monde."
        }
      ],
      "pnj": [
        {
          "nom": "Fils de Fishburn",
          "desc": "NC 4, DEF 16, PV 25. Hybride monstrueux. Pinces. Peut devenir une arme si libéré au bon moment."
        }
      ]
    },
    {
      "id": "s4_e3",
      "label": "📜 E. Le bureau secret & la lettre",
      "resume": "Le bureau de Fishburn dans les grottes : correspondances, registre, et le livre interdit.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Un grand bureau en bois, recouvert de papiers ordonnés avec un soin maniaque. Une lettre attire l'œil : « Cher ami, je vous confirme que le navire… » — la correspondance révèle l'ampleur du réseau."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• PER (détection) difficulté 15 → repérer le bureau dissimulé (zone E).\n• PER difficulté 20 → l'issue cachée de la grotte naturelle (zone C).\n• La lettre : INT difficulté 15 → identifier le nom de STEMFIELD (le docteur de l'hôpital de Wall Street !).\n• Le livre interdit : Choc difficulté 10 (-1 PC) à l'ouverture. Lecture assidue : Choc difficulté 20 par heure de lecture. INT (langues anciennes) difficulté 15 → accès aux passages utiles. Toute personne y ayant été soumise : Choc difficulté 15.\n• PER (graphologie) difficulté 20 + INT/PER difficulté 15 → recouper les écritures."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "La lettre boucle la boucle : Stemfield → l'hôpital → l'attentat → Lobster Bay. Le livre donne le contre-rituel… à quel prix."
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e4",
      "label": "🐛 F-H. Élevage, geôles, nurserie",
      "resume": "Les horreurs de l'élevage : vers nourriciers, prisonniers humains, et la nurserie des hybrides.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Une odeur d'excréments émane du renfoncement : des cages. Des visages hâves se tournent vers votre lumière. Plus loin, une vaste cavité ténébreuse s'étend — des formes s'y agitent doucement, par dizaines."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Zone F (élevage de vers) : ambiance pure — décrire, faire frissonner.\n• Zone G (geôles) : prisonniers à libérer (témoins, disparus, marins du Princess ?).\n• Zone H (nurserie) : Choc selon exposition (12-15). Discrétion impérative : DEX difficulté 15."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Chaque libération est un choix logistique. La nurserie NE DOIT PAS être un combat : trop nombreux."
        }
      ],
      "pnj": [
        {
          "nom": "Prisonniers",
          "desc": "Libérables. Certains peuvent se battre, d'autres ralentissent la fuite — choix cornélien."
        }
      ]
    },
    {
      "id": "s4_e5",
      "label": "🏛️ I-K. Temple ancien & salle de cérémonie",
      "resume": "Le cœur : une île sur un lac souterrain, un temple pré-humain, la salle où tout se jouera, et la sortie sous-marine des profonds.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Une île émerge de l'eau noire ; elle supporte des pierres dressées d'un âge impossible, couvertes de glyphes qui semblent bouger à la lueur des lampes. Au-delà, la grande salle : un autel, des torchères, un bassin qui communique avec l'océan."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Zone I (temple) : INT (langues anciennes) 15 → les glyphes décrivent l'invocation ET sa faille.\n• Zone J (salle de cérémonie) : repérage tactique — noter les couverts, issues, l'autel.\n• Zone K (sortie sous-marine) : par où viennent les profonds. Peut servir de fuite désespérée (natation !)."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Laisser les PJ préparer le terrain (dynamite ? embuscade ? sabotage de l'autel ?) — leur plan EST le climax."
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e6",
      "label": "🌑 La cérémonie du 17 octobre",
      "resume": "Nuit du 17 au 18 : procession silencieuse des villageois, cacophonie contre-nature, l'invocation commence. Interrompre : tuer Fishburn OU détruire l'autel.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Une procession silencieuse serpente vers l'église à la tombée de la nuit — tout le village, cierges en main, sourires enfin tombés. Sous terre, une cacophonie contre-nature de râles et de chants monte des profondeurs, et l'eau du bassin commence à luire."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Chronologie stricte : nuit du 17 au 18. Les PJ doivent être en position AVANT.\n• Cérémonie : 1d6 PC pour les témoins (par étape de rituel, selon exposition).\n• INTERROMPRE : tuer Fishburn OU détruire l'autel (dynamite de Josh = solution royale).\n• Explosion confinée : INT (explosifs) 20 pour bien placer les charges ; les grottes s'effondrent après l'interruption → FUITE (DEX/FOR 15 en série).\n• Chaque PC perdu pendant le final = +1 point de folie."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Fins ouvertes : Décapiter l'hydre (tuer Fishburn), Explosion confinée (dynamite), Ne pas se mouiller (alerter les autorités — voir hydravion). Étoiles propices : si les PJ échouent, esquisser la suite du monde."
        }
      ],
      "pnj": [
        {
          "nom": "Père Fishburn",
          "desc": "NC élevé + Attaque magique +7. Préside. Sa mort interrompt le rituel."
        },
        {
          "nom": "Villageois cultistes",
          "desc": "Profil cultiste. Nombreux — éviter le combat frontal."
        },
        {
          "nom": "Profonds",
          "desc": "Montent du bassin au fil du rituel (voir Bestiaire du Mythe p.6-7)."
        },
        {
          "nom": "Grand prêtre / Shoggoth",
          "desc": "Si le rituel va trop loin… tout est possible."
        }
      ]
    },
    {
      "id": "s4_e7",
      "label": "✈️ Mettre les voiles — l'hydravion",
      "resume": "L'option aérienne : un hydravion (type Amiens) au village — réparer, décoller, fuir ou alerter. Et la vision d'horreur finale.",
      "textes_mj": [
        {
          "titre": "📖 Texte à lire aux joueurs (paraphraser librement)",
          "contenu": "Le pilote s'arc-boute sur le manche tandis que l'appareil s'arrache à la baie. Soudain, une vague colossale se dresse derrière vous — et dans la vague, quelque chose d'immense qui n'aurait jamais dû s'éveiller regarde l'appareil s'éloigner."
        },
        {
          "titre": "🎲 Jets de dés",
          "contenu": "• Hydravion : équipage 3, vitesse max 210 km/h, autonomie 6h.\n• Réparer : tests d'INT (mécanique) en série (10-15).\n• Décoller dans la tempête/nuit : tests de DEX (pilotage) 15 — Maryse ou Klaus brillent ici.\n• La vision d'horreur : Choc final (12-15 selon exposition)."
        },
        {
          "titre": "💡 Notes de MJ",
          "contenu": "Épilogue : retour à New York, rapports au BOI, cicatrices et points de folie. La campagne d'initiation s'achève — Quintessence peut commencer (les PJ perdront la mémoire de ces événements… d'où le « Déjà-vu »)."
        }
      ],
      "pnj": []
    }
  ],
  "notes_globales": "Ne pas donner le plan des souterrains avant l'exploration complète. Passage au niveau 4 pendant l'aventure 4, avant la phase d'action. Aventures 3 et 4 imbriquées — naviguer librement. La dynamite de Josh est la clé de voûte. Chaque PC perdu au final = +1 folie. Le pont vers Quintessence : l'amnésie post-traumatique des PJ."
},
  q1: {
  "title": "Déjà-vu",
  "intro": "Mars 1921. Les PJ ont perdu une partie de leur mémoire suite aux événements de Septembre rouge. Ils reçoivent une lettre mystérieuse les conviant à la Villa Paterson, 98 Ocean Avenue, Amityville. Une clef à tête de singe aveugle est jointe. L'auteur : le Dr. Stemfield, désormais dans le corps du jardinier Jeremiah Pick.",
  "steps": [
            {
      "id": "q1_e1",
      "label": "Introduction",
      "resume": "Deux cas de figure sont proposés pour adapter cette introduction en fonction de votre équipe de PJ : équipe originelle ayant joué Septembre rouge ou nouvelle équipe, ne l'ayant pas jouée.",
      "chapitres": [
            {
                  "titre": "Équipe originelle",
                  "blocs": [
                        {
                              "type": "neutre",
                              "contenu": "Dans le cas de figure idéal où vos PJ ont joué Septembre rouge et que vous avez mis fin à leurs aventures avec la dernière scène de la campagne, alors vous pouvez leur lire ou paraphraser le texte qui suit. N'hésitez pas à placer quelques allusions au déroulement de leurs aventures, par exemple pour rendre hommage à la mémoire d'un compagnon disparu ou à une scène mémorable.\nSi vous avez improvisé une suite avec le docteur Stemfield, vous devrez modifier quelques éléments pour que le résumé corresponde à votre expérience de jeu."
                        },
                        {
                              "type": "bleu",
                              "label": "🔵 Aide de jeu",
                              "contenu": "Vous pouvez donner l'aide de jeu A à vos joueurs. Elle correspond à la lettre qu'ils reçoivent."
                        },
                        {
                              "type": "vert",
                              "contenu": "Les événements de Lobster Bay vous ont durablement traumatisés. Vous peinez à mettre des mots sur les horreurs dont vous avez été les témoins. Les accouplements impies, les hybrides odieux et la forme immense que vous avez devinée sous les flots vous poursuivent dans vos cauchemars chaque nuit. Surtout, le plan machiavélique des créatures des profondeurs dans le but de coloniser l'humanité vous hantera à jamais. À votre retour, vous avez tenté de retrouver le docteur Stemfield. Sans succès. Aucune trace de celui qui en savait sans doute beaucoup sur toute cette affaire."
                        }
                  ]
            },
            {
                  "titre": "Nouvelle équipe",
                  "blocs": [
                        {
                              "type": "neutre",
                              "contenu": "Ce paragraphe convient aux nouveaux prétirés ou à de nouveaux PJ créés spécifiquement pour Quintessence, mais n'ayant pas joué Septembre rouge. Il part du principe que l'élément fondateur de la communauté de PJ est l'attentat de Wall Street du 16 septembre 1920 (qui est aussi le point de départ de Septembre rouge).\nCette introduction reprend l'historique fourni pour chaque PJ."
                        },
                        {
                              "type": "vert",
                              "contenu": "Gravement blessés, vous gardez un horrible souvenir de votre longue convalescence à l'hôpital Saint-James. D'horribles cauchemars vous ont poursuivis chaque nuit, de plus en plus terrifiants. Quelque chose d'innommable qui se nourrissait de la peur, de la douleur et de la mort. Le sentiment intime que ce quelque chose rampait et se déformait juste sous votre lit à chaque fois que vous fermiez les yeux. Vous étiez plusieurs dans cette chambre à subir les mêmes visions. Pourtant, le docteur Stemfield, qui supervisait vos soins, ne vous a pas pris au sérieux lorsque vous avez relaté vos cauchemars. Lorsque vous êtes sortis de l'établissement, vous étiez déboussolés."
                        }
                  ]
            },
            {
                  "titre": "En commun",
                  "blocs": [
                        {
                              "type": "neutre",
                              "contenu": "Dans les deux cas, l'expérience des PJ se rejoint à présent. Enchaînez avec ce qui suit :"
                        },
                        {
                              "type": "vert",
                              "contenu": "Complètement épuisés, vous avez traversé les dernières semaines sans intérêt aucun dans une sorte de brouillard cotonneux. Votre mémoire laisse d'ailleurs de côté les détails du quotidien, qui glissent sur vous sans laisser de trace. Vous vivez désormais sans notion du temps qui s'écoule, sans parvenir à reprendre pied. Déprimés, cramés, vous avez l'impression de vous enfoncer un peu plus chaque jour dans des ténèbres indicibles. Quelque chose vous ronge de l'intérieur et vous n'arrivez pas à savoir de quoi il s'agit. Vous n'êtes plus que l'ombre de vous-même. Le moindre effort vous semble insurmontable. Vous n'osez pas l'admettre, mais la folie vous guette."
                        },
                        {
                              "type": "bleu",
                              "label": "🔵 Jet de dés",
                              "contenu": "Après avoir installé cette atmosphère pesante, annoncez aux joueurs que chaque PJ doit faire un test de choc (CHA ou attaque magique au choix) difficulté 10 : perte de 1 point de choc en cas d'échec."
                        },
                        {
                              "type": "neutre",
                              "contenu": "Les PJ mettent naturellement leurs problèmes sur le compte du traumatisme qu'ils ont subi au cours des événements décrits dans Septembre rouge. Pourtant ce n'est pas ce mal qui leur coûte un point de choc. Ce qui les ronge à présent est double :\n• d'une part, ils ont perdu la mémoire de leur séjour à l'asile psychiatrique et de l'esclavage subi dans les Contrées du rêve, mais leur inconscient s'en souvient et cette dissonance cognitive provoque d'affreux cauchemars ;\n• d'autre part, sans le savoir les PJ sont en manque après avoir été drogués quotidiennement à l'opium pendant des semaines."
                        },
                        {
                              "type": "vert",
                              "contenu": "Nous sommes aujourd'hui le 12 mars 1921, et ce jour commence comme chaque autre jour, un peu plus près du gouffre indicible qui sape votre santé mentale... Lorsque vous recevez par la poste une étrange missive."
                        },
                        {
                              "type": "neutre",
                              "contenu": "De plus, le PJ avec la plus haute valeur d'INT trouve, le même jour, dans sa boîte aux lettres une clef étrange."
                        }
                  ]
            },
            {
                  "titre": "Les lettres",
                  "blocs": [
                        {
                              "type": "neutre",
                              "contenu": "Tous les PJ reçoivent la lettre le même matin, alors qu'ils sont à New York."
                        },
                        {
                              "type": "vert",
                              "contenu": "Rendez-vous au 98 Ocean Avenue, Amityville, aujourd'hui à 16 heures. Quelqu'un a besoin de votre aide. Et vous avez besoin de son aide pour comprendre ce qui vous arrive, ces cauchemars et la folie qui rôde. Soyez discrets."
                        },
                        {
                              "type": "neutre",
                              "contenu": "Les joueurs pourraient avoir des questions. Voici les réponses :\n• toutes les lettres sont identiques ;\n• elles ne sont pas signées ;\n• le tampon de la poste permet de savoir qu'elles ont été postées à New York le 10 mars."
                        },
                        {
                              "type": "bleu",
                              "label": "🔵 Pour le MJ",
                              "contenu": "Chaque lettre a été écrite et envoyée par le docteur Stemfield (devenu le jardinier Jeremiah Pick), mais rien ne permet de savoir qu'il en est l'auteur. Stemfield a pris la précaution d'écrire entièrement en majuscules afin d'empêcher toute analyse graphologique. On peut toutefois remarquer qu'il s'agit des mêmes encre, écriture hésitante et papier si on compare les différentes lettres.\nStemfield préfère mettre les PJ sur la piste de leur mémoire de façon indirecte. D'une part, il pense qu'une approche frontale est vouée à l'échec à cause de sa mauvaise réputation auprès des PJ (s'ils ont joué Septembre rouge), et d'autre part il préfère passer pour mort afin de ne pas attirer l'attention de Morrow sur lui."
                        }
                  ]
            },
            {
                  "titre": "La clef",
                  "blocs": [
                        {
                              "type": "vert",
                              "contenu": "Cette clef à panneton en argent représente un petit singe qui se cache les yeux."
                        },
                        {
                              "type": "bleu",
                              "label": "🔵 Pour le MJ",
                              "contenu": "Le design de l'objet est inspiré d'un des trois singes de la sagesse."
                        },
                        {
                              "type": "bleu",
                              "label": "🔵 Indice — Test d'INT",
                              "contenu": "Pour un PJ occidental, il faut réussir un test d'INT difficulté 20 pour avoir accès aux informations qui concernent les singes de la sagesse. Un globe-trotter (par exemple John Prentiss ou Francesca Petrini) obtient un bonus de +5 pour ce test, tandis que Shisao réussit automatiquement.\nLes trois singes de la sagesse sont associés au bouddhisme chinois. Dans la mythologie chinoise, c'est un singe qui fut le compagnon du pèlerin Xuanzang et qui l'aida à trouver les livres saints du bouddhisme.\nEn japonais, les trois singes s'appellent Mizaru (l'aveugle), Kikazaru (le sourd) et Iwazaru (le muet). Leurs noms signifient plus précisément « Je ne dis pas ce qu'il ne faut pas dire », « Je ne vois ce qu'il ne faut pas voir », et enfin « Je n'entends ce qu'il ne faut pas entendre », car si l'on respecte ces trois conditions, le mal nous épargnera."
                        }
                  ]
            },
            {
                  "titre": "98 Ocean Avenue",
                  "type": "lieu",
                  "blocs": [
                        {
                              "type": "neutre",
                              "contenu": "Laissez les joueurs décider s'ils se rendent au rendez-vous chacun de son côté ou s'ils passent d'abord informer leurs compagnons, s'ils arrivent à l'heure dite ou en avance. Cela n'a pas d'influence sur la suite.\nLe 112 Ocean Avenue est connu sous le nom de Villa Paterson, du nom de son propriétaire, James Paterson. Elle a été construite pour lui, il y a un peu plus de dix ans. L'électricité y a été installée, mais elle n'a pas de ligne téléphonique.\nLes PJ qui n'ont pas d'automobile peuvent prendre le train entre New York et Amityville. Il faut ensuite compter 25 minutes de marche jusqu'à l'adresse indiquée."
                        }
                  ]
            },
            {
                  "titre": "Extérieurs",
                  "blocs": [
                        {
                              "type": "neutre",
                              "contenu": "Selon le mode d'approche des PJ, lisez ou paraphrasez ce texte :"
                        },
                        {
                              "type": "vert",
                              "contenu": "Vous arrivez dans un quartier résidentiel, luxueux même. Les maisons sont de belle taille, récentes et reliées au réseau électrique. Le 98 Ocean Avenue correspond à une belle demeure de deux étages. Un panneau de bois décoré de lettres en fer forgé porte les mots « Villa Paterson ». La boîte aux lettres à l'entrée de l'allée de gravillons blancs indique deux noms. Celui de James Paterson est gravé sur une plaque métallique tandis que celui d'Elizabeth Cochrane a été ajouté sur un bristol blanc.\nLes noms de Paterson et Cochrane sont inconnus des PJ."
                        },
                        {
                              "type": "bleu",
                              "label": "🔵 Indice — Test d'INT (journalisme)",
                              "contenu": "Cochrane est le nom de jeune fille de Nellie Bly. Si Ilia Droudji est présente (ou tout autre PJ journaliste), elle peut tenter un test d'INT (journalisme) difficulté 15 pour connaître ce lien."
                        }
                  ]
            }
      ],
      "encadres": [
            {
                  "titre": "Amityville",
                  "icon": "🏘️",
                  "contenu": "Amityville est une petite ville bourgeoise de la banlieue de New York située sur Long Island, à environ 40 miles (65 km) du centre de la grande cité. La distance de 30 miles indiquée sur la carte d'époque correspond à l'entrée de New York mesurée à vol d'oiseau.\nEn 1920, Amityville est qualifiée de « village » et compte environ 3 250 habitants. L'agglomération est alors en pleine expansion. C'est aussi une destination touristique pour les New-Yorkais.\nOcean Avenue est une longue route orientée nord-sud qui longe un bras de mer vers la baie. La côte sud de Long Island est protégée de la houle de l'Atlantique par une zone de petites îles marécageuses et un long cordon littoral de sable. Amityville possède un asile psychiatrique fondé en 1881, mais la ville est aujourd'hui surtout connue pour les meurtres sanglants qui ont eu lieu en 1974. Toutefois, la maison rendue célèbre par les meurtres de la famille Defeo ne sera construite au 108 de l'avenue qu'en 1928."
            }
      ],
      "pnj": [
            {
                  "nom": "Dr. Stemfield / Jeremiah Pick",
                  "desc": "Auteur de la lettre. Le jardinier du voisin. Âme de Stemfield dans ce corps, processus interrompu — peine à s'exprimer. Ne se révèle pas immédiatement."
            },
            {
                  "nom": "Le chat tacheté gris et noir",
                  "desc": "Rôde dans la villa. Peut attirer l'attention sur des indices manqués (à utiliser avec parcimonie)."
            }
      ]
    },


    {
      "id": "q1_e2",
      "resume": "Exploration libre de la villa saturée d'indices : 2 clefs à trouver, la photo du Caire, le livre de Privesne, le laboratoire en cave. Utiliser l'aide de jeu n°1 (tableau des indices D/U).",
      "label": "Villa Paterson — Exploration",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Fouille : PER difficulté 10 à 15 selon la cachette (clef sourd = boîte à musique du hall ; clef goût = latte de parquet chambre de Louise).\n• Si les PJ s'attardent en cave : rencontre possible avec le Rampant des angles (Choc diff.15 ou -1 PC)."},
        {
          "titre": "Description générale",
          "contenu": "Belle demeure 2 étages, cave et grenier. Abandonnée depuis plusieurs semaines. Poussière révèle que les chambres 7-10 sont inoccupées depuis plus longtemps. Saturée d'indices — prendre le temps de décrire chaque pièce."
        },
        {
          "titre": "Indices clés par pièce",
          "contenu": "HALL : tiroir secrétaire = clef du singe sourd dans boîte à musique cassée. Lettre du Dr. Brenner (Suisse) demandant des nouvelles de Louise.\n\nCHAMBRE LOUISE (chambre 3) : clef singe muet sous latte de parquet. Dessins : poulpe noir géant + femme en fauteuil. Journal : 'La dame en fauteuil me parle dans mes rêves.'\n\nBUREAU MORROW : articles sur des disparitions. Photo Morrow + 4 hommes devant musée du Caire 1918. Note : 'R.H. reconnu — changer la disposition'. Livre Privesne : Les prêtres oubliés de Nyarlathotep (1919).\n\nCAVE : laboratoire improvisé démantelé. Pentagone brûlé au sol, bougies noires. Rampant des angles si les PJ s'attardent."
        },
        {
          "titre": "Tableau des indices (aide de jeu n°1)",
          "contenu": "Cocher D=Découvert, U=Utilisé :\n[ ] Lettre en majuscules\n[ ] Clef aveugle (Vue) — lettre\n[ ] Clef sourd (Ouïe) — hall\n[ ] Clef muet/Goût — chambre Louise\n[ ] Clef odorat — James Paterson\n[ ] Clef toucher — à localiser\n[ ] Photo Morrow + 4 hommes au Caire\n[ ] Livre de Privesne\n[ ] Lettre Dr. Brenner (Louise en Suisse)\n[ ] Dessins de Louise\n[ ] Laboratoire démantelé en cave"
        }
      ],
      "pnj": [
        {
          "nom": "Chat tacheté",
          "desc": "Signal sur indices oubliés. À utiliser 1-2 fois max."
        }
      ]
    },
    {
      "id": "q1_e3",
      "resume": "Infiltration de l'asile d'Amityville la nuit : dossiers médicaux, flash-back mémoriel collectif, docteurs cultistes et aliénés contrôlés par Margery.",
      "label": "L'asile d'Amityville",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Entrer en visiteurs : CHA difficulté 15 (sinon buanderie côté canal, fenêtre non verrouillée).\n• Flash-back déclenché par le dossier « Morrow » ou la chambre d'expérimentation (sous-sol) — 30 s, PJ immobiles.\n• Poison soporifique des docteurs : CON difficulté 12 (15 pour la version supérieure) ou Ralenti, 2e échec = inconscient.\n• Regard de l'âme de Margery : Choc difficulté 15 ou inconscient 1d6 jours."},
        {
          "titre": "Présentation du lieu",
          "contenu": "Bâtiment de brique rouge, 3 étages, grillages. 2 gardes de nuit, 1 infirmier. Nellie Bly s'y est infiltrée comme femme de ménage (sous le nom 'Betty Cott' aux RH).\nAccès : buanderie (fenêtre non verrouillée côté canal) ou visiteurs légaux (test CHA diff.15)."
        },
        {
          "titre": "Le flash-back mémoriel",
          "contenu": "Déclenché par : dossier 'Morrow' dans les archives OU chambre d'expérimentation au sous-sol. Vision collective 30 secondes, PJ immobiles.\n\nContenu du flash-back (à lire) : 'Vous vous revoyez, quelques mois plus tôt. Un homme en costume parle dans une pièce sombre. Son visage est flou mais sa voix est claire : Vous avez besoin de moi. Je suis le seul à pouvoir vous guider. Puis l'image d'une villa au bord de l'eau. Un chat. Une lettre. Et la même voix : La villa Paterson. Allez-y. Le flash-back se dissipe.'"
        },
        {
          "titre": "Les docteurs cultistes",
          "contenu": "Dr. Terrence Miles et Anton Fleisch : présents la nuit. Masques oudjat cachés dans leurs blouses. Si alertés, libèrent les aliénés (Margery les contrôle à distance). Objectif : capturer les PJ, pas les tuer."
        }
      ],
      "pnj": [
        {
          "nom": "Docteurs Miles/Fleisch",
          "desc": "NC 2. Cultistes déguisés en médecins. Poison soporifique. Masques oudjat sous les blouses."
        },
        {
          "nom": "Margery (à distance)",
          "desc": "Contrôle les aliénés depuis la villa. Ne se déplace pas."
        },
        {
          "nom": "Aliénés (30+)",
          "desc": "Contrôlés par Margery. Cherchent à capturer, pas tuer. DM temporaires seulement."
        }
      ]
    },
    {
      "id": "q1_e4",
      "resume": "Le Muséum d'Histoire Naturelle : sarcophage de Rahotep, 5 statuettes-symboles, article sur Privesne, livre d'or annoté par Nellie Bly. Rencontre possible avec Privesne/Tohtesis.",
      "label": "Le Muséum d'Histoire Naturelle",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• CHA difficulté 15 pour engager la conversation avec Gaston Privesne (50 % de présence, ou au choix du MJ).\n• Recoupement des indices : INT difficulté 12 pour relier les 5 symboles aux 5 sens."},
        {
          "titre": "Indices au musée",
          "contenu": "SALLE ÉGYPTIENNE : sarcophage de Rahotep ('Don de G. Privesne, 1919'). 5 statuettes en demi-cercle avec symboles : scarabée or, croissant argent, tortue bronze, bœuf Apis, 5e non identifié.\n\nARCHIVES : article NYT (15 juin 1919) sur Gaston Privesne, 'découvreur des momies oubliées'. Photo — l'un des 4 hommes de la photo du bureau de Morrow.\n\nLIVRE D'OR : Morrow a signé 3 fois en 1920. Dernière visite : 12 septembre 1920 (4j avant l'attentat). Le croissant d'argent encerclé au crayon — Nellie Bly l'a fait pour marquer Morrow/Rahotep."
        },
        {
          "titre": "Rencontre avec Gaston Privesne/Tohtesis",
          "contenu": "50% de chances qu'il soit présent. Test CHA diff.15 pour approcher. Se présente comme conseiller du musée, français, passionné d'Égypte. Poli, légèrement hautain, propos parfois abscons.\n\nSi poussé à bout : 'Les dieux ne meurent jamais. Ils dorment. Et le réveil approche.' Puis il part."
        }
      ],
      "pnj": [
        {
          "nom": "Gaston Privesne/Tohtesis",
          "desc": "NC 4. Poli en surface, dangereux. Symbole scarabée d'or (Vue). Chef des 5 prêtres."
        },
        {
          "nom": "William Morrow/Rahotep",
          "desc": "NC 5. Peut apparaître en visiteur discret si scène trop calme."
        }
      ]
    }
  ],
  "notes_globales": "La clef odorat est avec James Paterson (en Suisse). Ne pas forcer le rythme : laisser les PJ fouiller, déduire, se perdre. La tension vient de l'accumulation d'indices contradictoires."
},
  q2: {
  "title": "L'Empire des sens",
  "intro": "Les PJ basculent dans les Contrées du rêve — d'abord involontairement lors du flash-back dans l'asile, puis délibérément pour accomplir un rituel de contre-invocation dans les 5 pyramides. La déesse Bast leur prête une aide inattendue.",
  "steps": [
    {
      "id": "q2_e1",
      "resume": "Règles spéciales des Contrées du rêve : faim/soif sans mort, 0 PV = réveil 1 h après, mort = retour au réel avec pénalité, possibilité de modeler le rêve.",
      "label": "Règles des Contrées du rêve",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Modeler le rêve : action + CHA difficulté 10 à 20 selon l'ampleur ; échec = -1 PC et aucun effet.\n• Mort dans les Contrées : -1 PC immédiat + perte de l'accès onirique.\n• Rapporter un objet : +1 PC à l'arrivée dans le monde réel."},
        {
          "titre": "Ce qui change par rapport au monde réel",
          "contenu": "FAIM/SOIF : s'appliquent. Au pire : état Affaibli (d12). Jamais la mort.\n0 PV : le PJ reprend conscience 1h après dans les Contrées (parfois ça le réveille dans le monde réel).\nMORT dans les Contrées : réveil vivant dans monde réel. Mais -1PC immédiat + perd l'accès onirique.\nBLESSURE GRAVE : pas comptabilisée.\nMODELER LE RÊVE : action, test CHA diff.10-20 selon ampleur. Si raté : -1PC, pas d'effet.\nRAPPORTER UN OBJET : possible mais +1PC à l'arrivée."
        },
        {
          "titre": "Factions des Contrées",
          "contenu": "GOULES : alliées potentielles (ennemies des bêtes lunaires). Test CHA diff.15 pour convaincre.\nHOMMES DE LENG : servent Nyarlathotep. Hostiles.\nARAIGNÉES DE LENG : dangereuses, pas intelligentes.\nBÊTES LUNAIRES : montées par hommes de Leng. Ennemies des goules.\nDÉESSE BAST : indépendante, temporairement utile. Ne jamais lui mentir."
        },
        {
          "titre": "Accès aux Contrées",
          "contenu": "1. Involontaire : flash-back dans l'asile.\n2. En dormant (tant que les PJ n'y sont pas morts).\n3. Physiquement : souterrains des goules, plateau de Leng, objets interdimensionnels.\n4. Raccourci Stemfield (aventure 4) : portail astral direct."
        }
      ],
      "pnj": []
    },
    {
      "id": "q2_e2",
      "resume": "Exploration des Contrées : bêtes lunaires montées par les hommes de Leng, araignées embusquées, shantaks colossaux — et les goules, alliées potentielles.",
      "label": "Exploration et créatures",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Paralysie (bête lunaire/araignée) : CON difficulté 12 ou immobilisé 1d6 tours.\n• Convaincre les goules : CHA difficulté 15.\n• Apprivoiser un shantak : CHA difficulté 20 + 1d6 jours d'approche."},
        {
          "titre": "Description des Contrées",
          "contenu": "Désert vaste et irréel. Lumière étrange (soleil noir ou lune géante). Pyramides à l'horizon. Ruines antiques. Falaises vertigineuses. Sons déformés. Une ville tentaculaire aperçue de loin — ne jamais s'en approcher."
        },
        {
          "titre": "Bêtes lunaires et Hommes de Leng",
          "contenu": "Bêtes lunaires (NC 3) : montées par hommes de Leng. Tentacules paralysants, fouet qui renverse, lance. Ennemies des goules.\nHommes de Leng (NC 1) : sans yeux/bouche/nez. Fouet + épée khépesh.\nTactique : encerclement + charges. Cherchent à capturer, pas tuer."
        },
        {
          "titre": "Araignées et Shantak",
          "contenu": "Araignées de Leng (NC 3) : morsure paralysante (CON diff.12 ou immob 1d6 tours). Embuscade depuis les fissures.\nShantak (NC 7) : plus gros qu'un éléphant. Morsure 2d6+8. Vol 30m/action. Apprivoisement possible (test CHA diff.20 + 1d6 jours). Résistance feu/acide 10 pts."
        }
      ],
      "pnj": [
        {
          "nom": "Goules",
          "desc": "Alliées potentielles contre les bêtes lunaires. Test CHA diff.15. Connaissent des passages secrets."
        }
      ]
    },
    {
      "id": "q2_e3",
      "resume": "Les 5 pyramides en pentagramme (une par sens/prêtre) : accomplir le rituel de contre-invocation dans chacune, avec l'aide ambiguë de la déesse Bast.",
      "label": "Les cinq pyramides",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Trouver l'autel central : PER difficulté 12.\n• Rituel de contre-invocation : 10 minutes + INT difficulté 12 ; échec = -1 PC.\n• Succès = prêtre correspondant affaibli au final (-2 à tous ses tests, PV réduits de moitié)."},
        {
          "titre": "Dispositif général",
          "contenu": "5 pyramides en pentagramme, chacune liée à un sens et un prêtre :\nVue (Tohtesis/Scarabée) — hommes de Leng.\nOuïe (Rahotep/Croissant) — cultistes soniques.\nOdorat (Pannekhop/Tortue) — araignées de Leng.\nToucher (Ptahsiris/Bœuf Apis) — maigres bêtes.\n5e sens (Mullner) — rampants des angles."
        },
        {
          "titre": "Le rituel de contre-invocation",
          "contenu": "Dans chaque pyramide : trouver l'autel central (PER diff.12). Accomplir le rituel (10 minutes, test INT diff.12). Si raté : -1PC. Succès : le prêtre correspondant est affaibli pour la cérémonie finale (-2 à tous tests, PV réduits de moitié).\n\nSi prêtre tué dans les Contrées : revient dans 1d6 mois. S'il revient avant la cérémonie finale, il participe quand même (mais affaibli si rituel accompli)."
        },
        {
          "titre": "La déesse Bast",
          "contenu": "Apparaît en femme-chat ou grand félin doré. Propose : localisation des pyramides, neutralisation de gardes, faiblesse des prêtres.\nEn échange : rien (elle joue son propre jeu contre Nyarlathotep).\nNe jamais lui mentir — elle voit tout. Ne pas la contrarier."
        }
      ],
      "pnj": [
        {
          "nom": "Déesse Bast",
          "desc": "Alliée provisoire. Ne jamais lui mentir. Motivations obscures mais efficaces."
        },
        {
          "nom": "Reine Iaret",
          "desc": "NC 10. Peut apparaître si les PJ approchent la pyramide du 5e sens sans préparation."
        }
      ]
    },
    {
      "id": "q2_e4",
      "resume": "Sortir des Contrées : sommeil, passage de Nellie, ou raccourci de Stemfield. Chaque PJ peut ramener une capacité durable selon ses actions.",
      "label": "Retour du rêve",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Se rendormir pour sortir : 1d6 heures + CON difficulté 10.\n• Effets durables : shantak invocable 1/aventure, service des goules, +5 vs folie cosmique (Bast), +2 att magique (3+ rituels)."},
        {
          "titre": "Comment sortir des Contrées",
          "contenu": "Naturellement : se rendormir (1d6h, test CON diff.10).\nVia Nellie Bly (si délivrée en aventure 3) : elle connaît un passage.\nRaccourci Stemfield (aventure 4) : portail astral direct.\nMort dans les Contrées : réveil immédiat dans monde réel (-1PC)."
        },
        {
          "titre": "Effets durables du voyage",
          "contenu": "Selon les actions des PJ, chacun peut gagner une capacité :\nA apprivoisé un Shantak → peut l'invoquer 1/aventure (1d6h).\nA aidé les goules → elles devront un service.\nA parlé à Bast → +5 résistance folie cosmique.\nA accompli 3+ rituels → +2 att magique permanent."
        }
      ],
      "pnj": []
    }
  ],
  "notes_globales": "Les Contrées sont un lieu de liberté narrative. La déesse Bast peut intervenir si les PJ partent trop loin du but. L'objectif principal : affaiblir les 5 prêtres avant la cérémonie finale."
},
  q3: {
  "title": "La Maison écartelée",
  "intro": "Au retour des Contrées, Nyarlathotep emprisonne les PJ dans une réplique labyrinthique de la Villa Paterson, hors du temps. Nellie Bly y est aussi prisonnière. Seule issue : réunir les 5 clefs à tête de singe et ouvrir le portail de Yog-Sothoth.",
  "steps": [
    {
      "id": "q3_e1",
      "resume": "Nyarlathotep emprisonne les PJ dans une réplique labyrinthique de la Villa Paterson — physique non-euclidienne, miroirs menteurs, temps suspendu.",
      "label": "Le piège de Nyarlathotep",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Pas de faim/soif dans le labyrinthe.\n• RESET : si Louise (version enfant) hurle à la mort de son père → labyrinthe réinitialisé (PJ à l'entrée, indices réapparus).\n• Désorientation : INT difficulté 12 pour garder le fil du plan mental."},
        {
          "titre": "Texte d'introduction (à lire)",
          "contenu": "En ouvrant les yeux, vous reconnaissez la Villa Paterson. Mais quelque chose cloche. Les proportions sont légèrement fausses. Les couloirs semblent plus longs qu'ils ne devraient. Un reflet dans un miroir bouge une demi-seconde trop tard. Et quelqu'un a retourné toutes les horloges face au mur."
        },
        {
          "titre": "Règles du labyrinthe",
          "contenu": "PHYSIQUE NON-EUCLIDIENNE : certaines pièces sont impossibles (escalier monte et descend vers le même palier).\nMIROIRS : ne reflètent pas exactement. Souvent utiles — parfois terrifiants.\nSONS : déformés. Voix venues d'ailleurs. Nyarlathotep rit parfois.\nTEMPS : indéterminé. Pas de faim ni soif dans le labyrinthe.\nRESET : si Louise (version enfant) hurle de terreur → labyrinthe se réinitialise (PJ à l'entrée, indices réapparus)."
        }
      ],
      "pnj": [
        {
          "nom": "Nyarlathotep (voix)",
          "desc": "Observe et commente. Ne combat pas. Voix moqueuse via miroirs et sons."
        }
      ]
    },
    {
      "id": "q3_e2",
      "resume": "Réunir les 5 clefs à tête de singe : aveugle (déjà en main), sourd (hall), goût (chambre vide de Louise), odorat (sur Paterson), toucher (gardée par Nellie en noir au grenier). Attention aux 3 fausses clefs.",
      "label": "Les 5 clefs de singes",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Distinguer les fausses clefs : PER difficulté 15 (les fausses infligent DM mentaux/état préjudiciable dans les serrures).\n• Approcher James Paterson : CHA difficulté 10 (+5 si Nellie présente, automatique avec Louise).\n• Singes gardiens : morsure → CON difficulté 15 ou perte d'un sens 1d6 périodes (calmer : CHA diff.15 + nourriture, auto avec Louise)."},
        {
          "titre": "Localisation des clefs",
          "contenu": "1. AVEUGLE (Vue) : l'un des PJ l'a depuis la lettre.\n2. SOURD (Ouïe) : réplique hall d'entrée, boîte à musique qui joue une berceuse étrange.\n3. MUET/GOÛT : réplique chambre Louise, sous la même latte mais chambre sans dessins (version vide).\n4. ODORAT : James Paterson l'a sur lui. Test CHA diff.10 (+5 si Nellie présente, auto si Louise présente).\n5. TOUCHER : gardée par Nellie en noir dans le grenier. Combat ou négociation."
        },
        {
          "titre": "Fausses clefs",
          "contenu": "3 fausses clefs dans le labyrinthe. Test PER diff.15 pour distinguer du vrai. Les fausses clefs insérées dans les serrures provoquent : DM mentaux, vision perturbée ou état préjudiciable."
        }
      ],
      "pnj": [
        {
          "nom": "James Paterson",
          "desc": "NC 1/2. Terrifié, armé d'un fusil de chasse. Clef odorat sur lui. Test CHA diff.10 pour approcher."
        },
        {
          "nom": "Nellie en noir",
          "desc": "NC 2. Grenier. Attaque si approchée. Peut être distraite si la vraie Nellie lui parle (1 round de délai)."
        }
      ]
    },
    {
      "id": "q3_e3",
      "resume": "Retrouver Nellie Bly réfugiée dans la bibliothèque : sa carte partielle du labyrinthe (+5 à la recherche des clefs) et ses informations sur Morrow.",
      "label": "Nellie Bly — Trouver l'alliée",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Influence de Margery sur Nellie : PER difficulté 15 pour remarquer ses yeux qui deviennent gris quelques secondes (fausse information possible)."},
        {
          "titre": "Où trouver Nellie",
          "contenu": "Réfugiée dans la bibliothèque (pièce relativement stable). A cartographié le labyrinthe sur les pages vierges des livres. Sa carte partielle = +5 à la recherche des clefs."
        },
        {
          "titre": "Interaction avec Nellie",
          "contenu": "Lucide mais épuisée (PV 12/29, insuffisance respiratoire aggravée). Reconnaît les PJ si ils mentionnent Wall Street ou Morrow.\n\nElle peut donner : carte partielle, emplacement clef sourd, confirmation que Nellie en noir est irrécupérable.\n\nElle veut savoir : où est Louise. Si les PJ l'ont protégée → Nellie coopère pleinement.\n\nRisque Margery : peut temporairement influencer Nellie. Signe : yeux gris quelques secondes. Test PER diff.15 pour remarquer."
        }
      ],
      "pnj": [
        {
          "nom": "Nellie Bly",
          "desc": "NC 4, PV 12. Alliée essentielle. Carte partielle du labyrinthe. Peut convaincre Paterson."
        },
        {
          "nom": "Nellie en noir",
          "desc": "NC 2. Grenier. Peut être distraite par la vraie Nellie (1 round)."
        }
      ]
    },
    {
      "id": "q3_e4",
      "resume": "La grande salle centrale : 5 serrures en pentagramme. Insérer les 5 clefs simultanément ouvre le portail de Yog-Sothoth — 3 tours pour passer, sous le regard moqueur de Nyarlathotep.",
      "label": "Le portail de Yog-Sothoth",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Tenir 2 clefs à la fois (si moins de 5 personnes) : DEX difficulté 12.\n• Ouverture : test de groupe SAG difficulté 15, sinon -1d3 PC pour le groupe.\n• Le portail reste ouvert exactement 3 tours."},
        {
          "titre": "La grande salle centrale",
          "contenu": "Accessible automatiquement une fois les 5 clefs réunies (le labyrinthe se referme vers le centre). 5 serrures dans 5 colonnes de marbre noir en pentagramme. Lumière bleue palpitante."
        },
        {
          "titre": "Le rituel d'ouverture",
          "contenu": "Insérer les 5 clefs simultanément (5 personnes, ou tenir 2 clefs avec test DEX diff.12). Test de groupe SAG diff.15 : si raté, -1d3 PC.\n\nPortail dure 3 tours. Nyarlathotep se manifeste : 'Quelle persistance admirable. Vous avez survécu à mon labyrinthe. Voyons si vous survivez à la suite.' Puis disparaît en riant."
        },
        {
          "titre": "Après le labyrinthe",
          "contenu": "Retour dans le monde réel. James Paterson et Nellie Bly reviennent si présents.\n\nPROBLÈME : la cérémonie d'Azathoth est dans 48h au Sahara algérien (23°N 0°W). Impossible par voie normale. C'est le moment du retour de Stemfield."
        }
      ],
      "pnj": [
        {
          "nom": "Nyarlathotep",
          "desc": "1 round. Voix ou forme floue. Ne combat pas. Commente sarcastiquement."
        }
      ]
    }
  ],
  "notes_globales": "Le labyrinthe est une sandbox narrative. L'ordre d'exploration est libre. Atmosphère > combat. Insister sur la physique non-euclidienne. La mort renvoie dans le monde réel (-1PC)."
},
  q4: {
  "title": "Extinction 23°N 0°W",
  "intro": "Libérés du labyrinthe, les PJ ont 48h pour atteindre 23°N 0°W dans le Sahara algérien. Impossible par voie normale. Stemfield propose un portail via l'Atlantide engloutie. Le final : interrompre la cérémonie d'Azathoth avant la fin du 5e tour.",
  "steps": [
    {
      "id": "q4_e1",
      "resume": "Stemfield se révèle enfin : la cérémonie a lieu dans 48 h à 23°N 0°W (Sahara algérien). Il offre le portail de l'Atlantide — puis disparaît. « Faites de beaux rêves. »",
      "label": "Stemfield se révèle",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "Pas de jets — scène de révélation et de choix. Les PJ peuvent contacter Louis Audouin-Dubreuil pour l'équipement (1 pistolet moyen/PJ + 1 fusil à répétition/véhicule)."},
        {
          "titre": "La révélation",
          "contenu": "Stemfield (dans le corps de Jeremiah) se révèle enfin. Sait où est la cérémonie et quand. Propose un portail sous-marin vers l'Atlantide pour atteindre les côtes africaines en quelques heures.\n\n'J'avais tort sur les moyens. Pas sur la fin. Nous voulons la même chose.'\n\nNe les accompagne pas : 'Mon corps est trop fragile.' Donne les coordonnées du portail (quai 7, Brooklyn, sous la surface).\n\nSes derniers mots : 'Faites de beaux rêves.'"
        },
        {
          "titre": "23°N 0°W",
          "contenu": "Sahara algérien, frontière Mali/Algérie. Désert absolu. Aucune route. Aucun village à 200 km. Les guerriers Aherraz appellent cet endroit 'Le nombril du monde' en berbère."
        }
      ],
      "pnj": [
        {
          "nom": "Dr. Stemfield",
          "desc": "Se révèle. Donne accès au portail. Disparaît définitivement après cette scène."
        }
      ]
    },
    {
      "id": "q4_e2",
      "resume": "Traversée de l'Atlantide engloutie : arche de pierre noire au quai 7 de Brooklyn, ruines bioluminescentes, gardiens, et la fresque des 5 prêtres vaincus il y a 4000 ans.",
      "label": "L'Atlantide engloutie",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Traverser le portail : CON difficulté 10, sinon -1d4 PV (portail instable : -1 PC si le test de groupe échoue).\n• Éviter les cobras ailés (2d4) : DEX difficulté 12 ; morsure = CON diff.10 ou Ralenti ; crachat = DEX diff.12 ou aveuglé 1d6 min.\n• Découvrir la fresque des archives → +5 à tous les tests contre les prêtres au combat final.\n• Durée du trajet : 2d6 heures."},
        {
          "titre": "Le portail",
          "contenu": "Quai 7, Brooklyn. Sous la surface : arche de pierre noire couverte de symboles pré-humains. S'ouvre avec la clef du singe aveugle. Test CON diff.10 pour traverser sans dommage (sinon -1d4 PV). Durée du trajet : 2d6 heures."
        },
        {
          "titre": "Description de l'Atlantide",
          "contenu": "Architecture non-humaine. Colonnes de marbre noir. Fresques de la préhistoire humaine et des Grands Anciens. Lumière bioluminescente. L'eau est présente mais respirable dans les couloirs (magie atlantéenne).\n\nCreatures présentes : rampants des angles, araignées de Leng égarées, cobras ailés adaptés (NC 1, évitables test DEX diff.12)."
        },
        {
          "titre": "Découverte clé",
          "contenu": "Salle des archives : fresques montrant 5 prêtres égyptiens qui avaient DÉJÀ tenté cette invocation il y a 4000 ans. Ils ont échoué grâce à Bast et des guerriers (ancêtres des Aherraz). Cette découverte = +5 à tous tests contre les prêtres lors du combat final."
        }
      ],
      "pnj": [
        {
          "nom": "Cobras ailés",
          "desc": "NC 1. Gardiens. 2d4 présents. Poison + crachat aveuglant. Évitables test DEX diff.12."
        }
      ]
    },
    {
      "id": "q4_e3",
      "resume": "Le combat final au Sahara : 5 prêtres en pentagramme, Nyarlathotep en Pharaon noir, 20 guerriers Aherraz bloqués par le bouclier. 5 tours pour interrompre l'invocation d'Azathoth.",
      "label": "La cérémonie — Combat final",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Chaque tour dans le pentagramme : -1 PC (tours 1 à 4).\n• NEUTRALISER un prêtre : le réduire à 0 PV OU rituel rapide (action complète + INT difficulté 15, coûte 1 PC, paralyse 2 tours).\n• Nyarlathotep (tour 3+) : att. magique +12, DM 2d6 + Terreur (test de Choc diff.15 ou -1 PC supplémentaire). Immunisé aux armes physiques normales.\n• Tour 4 : 2d4 rampants des angles traversent la déchirure.\n• Prêtre affaibli par un rituel des pyramides : -2 à tous ses tests, PV de moitié."},
        {
          "titre": "L'arrivée",
          "contenu": "Émergence du portail dans les sables, 500m du site. Nuit claire. Dizaines de torches en pentagramme. Les 5 prêtres en position centrale. Nyarlathotep sous forme du Pharaon noir observe (grand homme à la peau de jais, couronné d'or noir).\n\nLes guerriers Aherraz (si contactés) : 20 guerriers en demi-cercle à l'extérieur. Un bouclier magique les repousse. Les PJ peuvent entrer (ils ne sont pas des 'mortels ordinaires')."
        },
        {
          "titre": "Mécanique des 5 tours",
          "contenu": "TOUR 1 : chant s'intensifie. -1PC pour tous dans le pentagramme.\nTOUR 2 : le ciel commence à se déchirer. -1PC. Prêtres peuvent agir et attaquer.\nTOUR 3 : lumière aveuglante. -1PC. Nyarlathotep intervient au combat.\nTOUR 4 : déchirure s'agrandit. -1PC. 2d4 rampants des angles traversent.\nTOUR 5 fin : si aucun prêtre neutralisé = Azathoth partiellement invoqué (catastrophe). Si AU MOINS 1 prêtre neutralisé = invocation interrompue.\n\nNEUTRALISER : réduire à 0 PV OU rituel rapide (action complète, INT diff.15, -1PC) qui paralyse 2 tours."
        },
        {
          "titre": "Nyarlathotep — Le Pharaon noir",
          "contenu": "N'intervient qu'au tour 3. Avant : observe et commente.\nTour 3+ : att magique +12, DM 2d6 + Terreur (test PC diff.15 ou -1PC supp). Immunisé aux armes physiques normales (magie, armes enchantées ou Bast peuvent l'endommager).\n\nSi attaqué avant tour 3 : 'Quel courage. Ou quelle bêtise.'\nSi tous prêtres neutralisés : 'Jusqu'à la prochaine fois.' Disparaît."
        }
      ],
      "pnj": [
        {
          "nom": "Prêtres de Nyarlathotep (5)",
          "desc": "NC 7 chacun. Priorité : cérémonie avant combat. Tohtesis=Cécité, Rahotep=Aspirer la vie, etc."
        },
        {
          "nom": "Nyarlathotep/Pharaon noir",
          "desc": "NC inf. Intervient tour 3. Immunisé au physique. Peut être perturbé par magie ou Bast."
        },
        {
          "nom": "Guerriers Aherraz (20)",
          "desc": "Bloqués par bouclier magique. Peuvent attaquer les créatures qui sortent du pentagramme."
        }
      ]
    },
    {
      "id": "q4_e4",
      "resume": "Épilogue selon le résultat : succès total, interruption partielle, ou manifestation avortée d'Azathoth. Destins des PNJ et graines pour la suite.",
      "label": "L'épilogue",
      "textes_mj": [
        {"titre": "🎲 Jets de dés", "contenu": "• Échec (aucun prêtre neutralisé au tour 5) : -1d6 PC pour tous les présents.\n• Chaque PC perdu pendant le final = +1 point de folie."},
        {
          "titre": "Résultats possibles",
          "contenu": "SUCCÈS TOTAL (tous neutralisés avant tour 5) : prêtres s'effondrent vides, ciel se referme, Nyarlathotep disparaît. Les Aherraz soignent les blessés.\n\nSUCCÈS PARTIEL (1+ prêtre, invocation interrompue) : prêtres survivants fuient. Nyarlathotep : 'Vous avez gagné du temps. Rien de plus.'\n\nÉCHEC (tour 5 sans neutralisation) : -1d6 PC pour tous. La manifestation se résorbe en quelques heures (trop brève). 'Intéressant. Vous résistez même à l'inévitable.' Le monde continue mais quelque chose a changé."
        },
        {
          "titre": "Destin des personnages secondaires",
          "contenu": "STEMFIELD : corps de Jeremiah retrouvé dans Brooklyn 3 jours plus tard, vide.\nNELLIE BLY : rentre à New York. Meurt d'une pneumonie le 27 janvier 1922 (comme dans l'histoire réelle). Elle savait.\nJAMES PATERSON : se remet. Retrouve Louise en Suisse. Vend la villa.\nLOUISE : guérit lentement. Ses cauchemars s'arrêtent le soir de la cérémonie.\nMARGERY : perd sa connexion aux Contrées. Toujours catatonique mais moins agitée."
        },
        {
          "titre": "Graines pour la suite",
          "contenu": "Nyarlathotep est toujours libre.\nLes Aherraz savent qui sont les PJ — alliés potentiels pour la suite.\nLes Contrées du rêve existent toujours.\nLa clef du singe aveugle brille légèrement. Yog-Sothoth se souvient."
        }
      ],
      "pnj": []
    }
  ],
  "notes_globales": "Le combat final doit être épique, pas du pur hack-and-slash. Nyarlathotep est une présence, pas un boss. Encourager les actions créatives (rituel, Aherraz comme distraction, invoquer Bast). L'atmosphère est primordiale : ciel qui se déchire, chants, torches."
}
}
