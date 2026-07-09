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
          "titre": "La maison d'Edwin Fisher",
          "type": "lieu"
        },
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
          "titre": "Recherche d'indices",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Il faut environ 10 minutes pour fouiller une pièce. Les indices ne nécessitent pas de test pour être découverts, sauf mention contraire."
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
          "titre": "Le Santa Lucia",
          "type": "lieu"
        },
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
          "titre": "Hangar numéro 12",
          "type": "lieu"
        },
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
  "title": "Le Village",
  "intro": "Après le naufrage, les PJ sont recueillis par les habitants de l'accueillant village de Cragport, bâti sur une île isolée. Mais tout n'est pas aussi beau et bienveillant qu'on essaye de leur faire croire. Bloqués sur place, les PJ doivent enquêter afin de découvrir le sombre secret de l'île : un culte infâme sévit ici ! Il faudra trouver des alliés pour y mettre fin. Fiche technique : Action, Ambiance, Interaction, Investigation.",
  "steps": [
    {
      "id": "s3_e1",
      "label": "Géographie et histoire de l'île",
      "resume": "Après le naufrage, les PJ sont recueillis par les habitants de l'accueillant village de Cragport, bâti sur une île isolée. Mais tout n'est pas aussi beau et bienveillant qu'on essaye de leur faire croire. Bloqués sur place, les PJ doivent enquêter afin de découvrir le sombre secret de l'île.",
      "chapitres": [
        {
          "titre": "Géographie",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "L'île est située à environ 150 km au Nord-Est de Portland à vol d'oiseau. Lobster Bay, « la baie des homards », est le nom donné à la fois à la baie et à l'île elle-même (basée sur Isle Au Haut, Maine, USA). Elle mesure environ 12 km de large sur 25 km de haut, pour 300 km²."
            },
            {
              "type": "neutre",
              "contenu": "Seul Cragport est habité, le reste de l'île est montagneux, rocheux, difficile d'accès. La côte est constituée de falaises abruptes. Des récifs entourent la baie et empêchent les bateaux de fort tonnage d'approcher — les ravitaillements ont lieu toutes les trois semaines, uniquement par mer calme."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Chronologie : les PJ ont embarqué le 1er octobre, fait naufrage le 2, et leur aventure sur l'île débute le 3 octobre. Le prochain navire est prévu pour le 19 octobre — 16 jours à passer sur l'île.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "L'histoire du culte",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] À la fin du XIXe siècle, Lobster Bay vivait de la mine d'argent et de la pêche au homard. Les deux se sont taries presque simultanément. Le père Jean-Baptiste Fishburn, prétendant venir des mers du Sud, a alors proposé des prières aux esprits de la mer — les premiers à le suivre ont obtenu des pêches miraculeuses.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Trois serments successifs ont enchaîné les villageois : 1) le secret sur l'existence de Ceux des profondeurs, 2) l'or contre des sacrifices humains par noyade, 3) l'immortalité de la lignée contre la conception d'une progéniture avec les créatures, lors de cérémonies dédiées à mère Hydra.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Les premiers hybrides étaient stériles. Fishburn a recruté le Docteur Stemfield (devenu directeur de l'hôpital Saint-James, aventure 1) qui a mis au point, après 6 ans d'expériences sur des victimes achetées à des trafiquants, un traitement rendant fertile la progéniture humain-profond, via des sangsues hybrides qui filtrent le sang. Stemfield a depuis quitté l'île, laissant la relève au Dr Paula Dunstag.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Le plan final : coloniser le continent avec des enfants hybrides fertiles, disséminés dans des orphelinats, pour préparer le retour du grand Cthulhu. Les enfants sont maintenus à un stade larvaire par un procédé calqué sur le développement des homards.",
              "label": "🔵 Secret MJ"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s3_e2",
      "label": "L'arrivée au village",
      "resume": "Une centaine de villageois observent les PJ dans un silence pesant, jusqu'à l'arrivée du père Fishburn qui les accueille chaleureusement.",
      "chapitres": [
        {
          "titre": "Cragport",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous racontez par le menu votre naufrage au vieil homme que vous avez rencontré à votre arrivée. Ce dernier vous écoute avec grande attention tout en vous menant jusqu'à la place du village. Il frappe à la porte d'une petite maison, accolée à l'église, et y est reçu. Pendant que vous attendez son retour, des villageois, toujours plus nombreux, sortent des bâtisses alentour. Bientôt, une centaine d'individus vous observent dans un silence à la fois étrange et pesant. Que faites-vous ?"
            },
            {
              "type": "neutre",
              "contenu": "Toutes les tentatives des PJ pour entamer une conversation sont vaines, les villageois attendent les instructions du père Fishburn — assurez-vous qu'il apparaisse avant que la situation ne dégénère."
            },
            {
              "type": "bleu",
              "contenu": "Les PJ sont exténués et utilisent un d12 au lieu du d20 pour tous leurs tests tant qu'ils ne prennent pas repos. Le lendemain, ils pourront commencer à visiter le village.",
              "label": "🔵 Règle temporaire"
            },
            {
              "type": "neutre",
              "contenu": "Si les PJ font remarquer aux autres rescapés le comportement étrange des villageois à leur arrivée, on met cela sur le compte de la fatigue : « Nous étions tous épuisés et choqués, ce sont vos souvenirs qui vous jouent des tours ! »"
            }
          ]
        },
        {
          "titre": "Le père Fishburn",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Un homme aux cheveux gris, le sourcil broussailleux, le regard sévère et la carrure d'un bûcheron, sort sur le perron en compagnie du vieil homme qui vous a mené jusqu'ici et prend la parole. « Bienvenue sur l'île de Lobsterbay. Je suis le père Fishburn, pasteur du village de Cragport. » Se tournant vers les villageois, il ajoute : « Frères et sœurs, accueillons ces naufragés avec générosité. Nous allons leur fournir le gîte et le couvert, jusqu'à ce qu'ils retrouvent des forces et qu'ils puissent rentrer chez eux. » Immédiatement, les villageois se mettent à sourire et s'approchent des rescapés pour les réconforter et leur proposer leur aide. On vous ouvre des maisons inhabitées pour vous y installer. Des villageois y font un peu de ménage, tandis que d'autres surgissent pour vous apporter à boire et préparent de grandes marmites d'eau bouillante pour cuisiner d'énormes homards. On s'enquiert également de votre santé."
            }
          ]
        },
        {
          "titre": "Les questions chaudes",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Repartir : n'importe quel villageois répond que le navire de ravitaillement vient toutes les 3 semaines, le prochain dans 16 jours. Pas d'autre moyen de quitter l'île — les bateaux de pêche sont de simples barcasses à fond plat conçues pour les récifs, incapables d'affronter la haute mer. Pas d'émetteur radio."
            },
            {
              "type": "neutre",
              "contenu": "Le cadavre : si les PJ parlent à Fishburn ou à un villageois du cadavre pendu sur la grève, on fait mine de ne pas les croire. S'ils insistent, le lendemain, le cadavre et le mât ont disparu."
            },
            {
              "type": "vert",
              "contenu": "Après un véritable festin, les villageois se retirent pour vous laisser profiter d'une nuit de repos bien méritée. Vous êtes complètement épuisés."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Père Fishburn",
          "desc": "Pasteur baptiste de Cragport, accueille chaleureusement les PJ. Chef du culte."
        }
      ]
    },
    {
      "id": "s3_e3",
      "label": "Le Docteur Dunstag",
      "resume": "Le laboratoire secret cache la vérité sur la guérison miraculeuse d'Alicia — et un lien direct avec l'aventure 1.",
      "chapitres": [
        {
          "titre": "La maison du docteur",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Cette grosse bâtisse porte pour enseigne un serpent qui s'enroule autour d'un bâton, ce qui la désigne comme la maison du docteur du village. C'est une femme qui vous ouvre la porte. Blonde, athlétique, elle vous accueille avec un regard inquisiteur. « Bonjour, je suis le Docteur Dunstag, que puis-je pour vous ? Vous souffrez de quelque chose ? » D'un air de dire : si ce n'est pas le cas, je ne souhaite pas être dérangée."
            },
            {
              "type": "neutre",
              "contenu": "À propos d'Alicia : si interrogée sur la guérison miraculeuse de la fillette : « Cela fait des années que je travaille sur une méthode pour purifier le sang. Cette communauté a été victime de l'empoisonnement de sa source d'eau potable à cause de l'exploitation de la mine. J'utilise la même méthode que celle qui nous a permis de purifier nos corps du poison de la mine pour purifier le sang de la petite Alicia. Cette enfant est adorable, n'est-ce pas ? » Si on lui demande la méthode, elle reste évasive : « Il s'agit simplement d'une méthode très ancienne venue du Moyen Âge, l'utilisation de sangsues. » Elle ne fera pas visiter son installation."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Paula n'est pas une alliée naturelle mais a un vrai faible pour Alicia. Fishburn a laissé entendre que la petite servira de mère porteuse dès ses premières règles. En cas de situation désespérée, elle pourrait aider les PJ à s'enfuir contre la promesse d'emmener et sauver la petite.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Indices dans la maison",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Consultation : un cadre a été décroché du mur du cabinet (trace plus claire visible). Revenir en l'absence du docteur pour fouiller le bureau révèle la photo manquante : le docteur Stemfield."
            },
            {
              "type": "neutre",
              "contenu": "De nuit, Paula est souvent absente — elle couche avec le père Fishburn (pasteur baptiste, non soumis au célibat)."
            },
            {
              "type": "neutre",
              "contenu": "À l'étage, la chambre ne recèle rien de particulier, mais le tiroir de la table de nuit contient une clef qui ouvre les grilles du complexe souterrain (aventure 4, zone A)."
            },
            {
              "type": "neutre",
              "contenu": "Au rez-de-chaussée : cabinet médical, cuisine, buanderie. Sur le bureau, un calendrier avec la date du 17 octobre soulignée — la cérémonie finale."
            },
            {
              "type": "bleu",
              "contenu": "Au sous-sol : le laboratoire est fermé par un cadenas (clef sur Paula). Test de FOR difficulté 15 avec une barre métallique pour forcer (pas discret), ou test de DEX difficulté 15 (Voie de la furtivité) pour crocheter sans l'abîmer.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Le laboratoire contient deux bassins d'eau de mer et un bureau couvert de notes manuscrites."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Dr Paula Dunstag",
          "desc": "Médecin du village, formée par Stemfield. Un faible pour Alicia. Alliée potentielle en dernier recours."
        }
      ]
    },
    {
      "id": "s3_e4",
      "label": "L'église et le magasin",
      "resume": "L'église cache l'accès aux souterrains sous son autel. Le magasin de Rudolph révèle un indice compromettant : la robe d'une passagère du Princess.",
      "chapitres": [
        {
          "titre": "Le magasin de Rudolph",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Rudolph gère le magasin communautaire pour le père Fishburn. Les bas prix sont officiellement financés par la conserverie — en réalité par l'or des profonds. Il ouvre volontiers un compte contre une reconnaissance de dette."
            },
            {
              "type": "bleu",
              "contenu": "Si une PJ lui rend visite après quelques jours, Rudolph lui montre des robes en espérant un rendez-vous. Test d'INT difficulté 10 : elle reconnaît la robe de Lola Blue, la chanteuse du Princess of Olympus, portée la veille du naufrage. Test de PER difficulté 12 pour remarquer que Rudolph blêmit quand on l'interroge — il joue les candides : « Quel malheureux hasard, j'ai cet article en stock depuis plus d'un mois... »",
              "label": "🔵 Indice"
            },
            {
              "type": "neutre",
              "contenu": "Une étude approfondie montre que le vêtement n'est pas neuf, probablement passé par l'eau de mer avant d'être rincé — les petites magouilles de Rudolph. D'autres objets du naufrage peuvent être trouvés (pièces mécaniques). Les bijoux ont été fondus."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si cette histoire remonte à Fishburn, il conçoit une rage froide. On retrouve généralement un cadavre au pied de la falaise — celui de Rudolph, avec une lettre expliquant un suicide par dépit amoureux.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "neutre",
              "contenu": "Armes : on trouve de tout au magasin, mais aucune arme à feu ni munitions. Cadenas : la nuit, chaîne et cadenas — Rudolph a la clef, Fishburn un double dans son bureau."
            }
          ]
        },
        {
          "titre": "L'église",
          "blocs": [
            {
              "type": "vert",
              "contenu": "L'église de Cragport est adossée à la falaise qui surplombe le village et construite dans la même roche. La décoration extérieure est simple, elle arbore un poisson sur le fronton. Le père Jean-Baptiste Fishburn habite dans une maisonnette attenante."
            },
            {
              "type": "vert",
              "contenu": "À l'intérieur, l'église est également très austère. Elle comporte des bancs de bois, un autel constitué d'un unique bloc de pierre massif. Il est décoré de quatre anneaux de métal et d'un poisson sous lequel sont inscrits les lettres ICTHYS. Enfin, un large bassin de baptême qui permet d'immerger complètement un adulte est creusé dans le sol. Il est rempli d'eau. Une odeur de marée baigne l'église."
            },
            {
              "type": "neutre",
              "contenu": "Interrogé sur les ornementations de poissons : « une demande des pêcheurs, le poisson étant aussi le symbole chrétien du baptême. » Fishburn peut développer sur cette signification secrète."
            }
          ]
        },
        {
          "titre": "Le passage secret",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Ne pas déranger : parfois la nuit, Fishburn prie seul et ne doit être dérangé sous aucun prétexte — 2 costauds gardent la porte, 4 autres veillent à l'intérieur. En réalité, il se rend dans les souterrains.",
              "label": "🔵 Info MJ"
            },
            {
              "type": "bleu",
              "contenu": "Costauds (2+4) — NC1, FOR+3, DEX+1, CON+1, INT+0, PER+1, CHA+0, Init 14, DEF 11, PV 15. Mains nues +6 DM 1d4+3, Couteau +5 DM 1d4+3. Fanatique (1/combat : +5 att, +1d4 DM, -5 DEF 1 tour). Ignorer la douleur (1/combat).",
              "label": "🔵 Statistiques"
            },
            {
              "type": "neutre",
              "contenu": "Deux grandes barres de bois de 4m sont posées derrière une colonne, s'insèrent dans les anneaux de l'autel. Il faut un total de 80 points de FOR pour déplacer l'autel (les cultistes se mettent à 6). Une fois déplacé, l'autel révèle l'accès aux souterrains (aventure 4)."
            },
            {
              "type": "bleu",
              "contenu": "Des soupiraux font remonter un air froid et une odeur de marée. Test de PER difficulté 15 (20 si pas attentif) : hurlements lointains très ténus, presque comme le vent. Ce sont les cris du fils de Fishburn qui erre dans les souterrains.",
              "label": "🔵 Indice"
            }
          ]
        },
        {
          "titre": "La maisonnette de Fishburn",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Vie très simple, deux pièces. La principale sert de cuisine et salle de vie. Au fond, une bibliothèque avec des livres sur les religions, sciences, biologie, histoire."
            },
            {
              "type": "bleu",
              "contenu": "Fouiller la bibliothèque (1d6 minutes) + test de PER difficulté 15 : un cahier récapitulant les orphelinats du continent — une copie faite par Deniz, complète.",
              "label": "🔵 Indice"
            },
            {
              "type": "neutre",
              "contenu": "Messes : une heure chaque soir, de nombreux villageois y participent — bon moment pour visiter les habitations désertées (difficulté de discrétion réduite de 5 points). Devant des étrangers, la liturgie reste orthodoxe."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Rudolph",
          "desc": "Gérant du magasin communautaire, magouille avec les affaires du naufrage. Peut être exécuté par Fishburn si démasqué."
        },
        {
          "nom": "Costauds (garde)",
          "desc": "NC1, PV15. Gardent l'accès à l'église la nuit."
        }
      ]
    },
    {
      "id": "s3_e5",
      "label": "Josh l'ermite",
      "resume": "Le dernier homme libre de l'île, retranché loin du village, détient la dynamite et un avion abandonné — la clé de la conclusion de la campagne.",
      "chapitres": [
        {
          "titre": "La cabane de Josh",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Josh examine avec suspicion les PJ sous toutes les coutures, puis les invite à entrer."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Josh n'a prêté ni le second, ni le troisième serment. Il doit sa survie à son éloignement, son fusil, et le fait qu'il ne gêne personne. Ravitaillé par Max, sa situation deviendrait intenable si celui-ci disparaissait.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "neutre",
              "contenu": "Josh invite les PJ à boire un ou deux verres de son tord-boyaux maison."
            },
            {
              "type": "bleu",
              "contenu": "Test de PER (renseignement/psychologie) difficulté 10 pour comprendre qu'il en sait long et ne faudrait pas grand-chose pour qu'il parle. Il faut lui faire part de ses doutes ou lui raconter les aventures des PJ pour le décider.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Les révélations",
          "blocs": [
            {
              "type": "vert",
              "contenu": "« Suivez mon conseil, quittez c't'île maudite. » Son regard s'allume d'une joie malsaine : « Moi, ils m'auront pas vivant ! Ils auront une sacrée surprise ! Ouais, une sacrée surprise ! »"
            },
            {
              "type": "bleu",
              "contenu": "Les PJ devraient creuser en le poussant à boire encore, ou test de CHA (persuasion) difficulté 10.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Soudain il se lève et vous fait signe de le suivre. D'une démarche légèrement titubante, il vous guide jusqu'au hangar. Là, il soulève une bâche et dévoile plusieurs caisses. « Ça vient de la vieille mine, j'ai récupéré tout le stock ! Ouaip, mes jolis c'est bien ce que vous pensez d'la DYNAMITE ! » Mais, plus intéressant encore, un énorme avion trône dans le hangar !"
            },
            {
              "type": "neutre",
              "contenu": "Sur l'avion : « Un aviateur de l'aéropostale de New-York. L'an dernier, il s'est posé en catastrophe sur le promontoire. Je l'ai aidé à réparer, mais il manquait des pièces pour le moteur. Il est reparti en bateau, mais n'est jamais revenu. » Josh crache par terre. « Pourriture de Fishburn. M'est avis que le pauv' gars n'a jamais remis un pied sur la terre ferme. »"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Josh a raison : l'aviateur avait fourré son nez où il ne fallait pas, Fishburn l'a fait exécuter (jeté à l'eau durant la traversée). L'avion et sa réparation sont détaillés dans l'aventure 4.",
              "label": "🔵 Secret MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Josh",
          "desc": "Ermite retranché, dernier homme véritablement libre de Cragport. Détient dynamite et l'avion abandonné — allié clé pour la conclusion."
        }
      ]
    },
    {
      "id": "s3_e6",
      "label": "Conclusion — Le pense-bête du MJ",
      "resume": "Cette aventure se prolonge sans interruption par l'aventure 4 dès que les PJ commencent à explorer le complexe souterrain. Les deux aventures sont étroitement imbriquées.",
      "chapitres": [
        {
          "titre": "Transition vers l'aventure 4",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "L'aventure 3 correspond à l'exploration du village de Cragport, l'aventure 4 à celle du complexe souterrain. Il faudra naviguer entre les deux pendant toute la dernière partie de la campagne."
            },
            {
              "type": "neutre",
              "contenu": "Il n'y a pas de passage de niveau entre les deux aventures — cela aura lieu plus tard durant l'aventure 4."
            }
          ]
        },
        {
          "titre": "Pense-bête des indices",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Récapitulatif à cocher au fur et à mesure : Apparence étrange/maladie des villageois • Horaires de travail fantaisistes • Guérison d'Alicia • Disparition de l'agent Downey • Robe de Lola au magasin • Photo du Dr Stemfield • Clef pour les souterrains (Dunstag) • Date du 17 octobre • Laboratoire secret • Moteur de hors-bord • Activité factice à la conserverie • Passage dans l'autel de l'église • Cris sous l'église • Liste d'orphelinats chez Fishburn • Deniz caché dans sa maison • Entrée secondaire de la mine • Piste vers Josh (via Max) • Révélations de Josh (via Wilbur).",
              "label": "🔵 Pense-bête MJ"
            }
          ]
        }
      ],
      "pnj": []
    }
  ],
  "notes_globales": "Le lieu le plus secret et important du village est le complexe souterrain (mine + temple d'Hydra), réservé à l'aventure 4 — mais lisez l'aventure 4 avant de faire jouer l'aventure 3, elle contient des renseignements importants. Les deux aventures sont étroitement imbriquées."
},
  s4: {
  "title": "Le Temple Maudit",
  "intro": "Les PJ explorent le complexe souterrain sous le village pour assembler les pièces du puzzle et découvrir les horreurs qui s'y trament. Puis ils doivent élaborer une stratégie pour mettre fin au plan infâme des cultistes et réussir à quitter l'île maudite en vie. Fiche technique : Action, Ambiance, Interaction, Investigation.",
  "steps": [
    {
      "id": "s4_e1",
      "label": "Les mines",
      "resume": "Les PJ explorent le complexe souterrain sous le village pour assembler les pièces du puzzle et découvrir les horreurs qui s'y trament. L'aventure débute dès qu'ils s'enfoncent dans le complexe. Ne donnez jamais le plan aux joueurs avant qu'ils n'aient tout exploré.",
      "chapitres": [
        {
          "titre": "Passage de niveau",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Contrairement à l'habitude, il n'y a pas de passage de niveau automatique entre l'aventure 3 et l'aventure 4. Le passage de niveau aura lieu au cours de cette aventure — idéalement lorsque les PJ auront terminé l'exploration des souterrains et prendront une pause avant l'action. Cela implique la récupération des points de choc."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Ne donnez jamais le plan des souterrains aux joueurs avant qu'ils n'aient tout exploré. L'endroit est mystérieux, ils ne doivent pas savoir où ils mettent les pieds. Vous pouvez le remettre une fois l'exploration complète achevée, éventuellement au PJ le plus intelligent en lui demandant d'agir comme si c'était lui qui avait dessiné les lieux.",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "Les mines",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Il fait complètement noir dans tout le complexe, mais les PJ peuvent acheter des lampes torches au magasin général avant de descendre."
            },
            {
              "type": "vert",
              "contenu": "Un épais bosquet dissimule le pied de la falaise derrière la maison du vieillard. Vous découvrez une ouverture basse qui s'enfonce dans la roche. Il faut avancer à quatre pattes pour entrer dans la cavité."
            },
            {
              "type": "vert",
              "contenu": "Le boyau se prolonge sur quelques mètres avant de donner sur une salle plus vaste. Une odeur désagréable vous accueille, immédiatement suivie par une cacophonie de cris qui explose sous la voûte plongée dans les ténèbres."
            },
            {
              "type": "bleu",
              "contenu": "Une colonie de chauve-souris se précipite vers la sortie. Test de choc difficulté 5 pour les PJ engagés dans le boyau (1 PC perdu en cas d'échec). Au fond de la grotte, une crevasse tortueuse débouche sur une galerie de la mine.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Vous débouchez dans une galerie d'environ deux mètres de hauteur. Cette fois, le boyau ne semble pas naturel, mais creusé par la main de l'homme, comme l'attestent quelques vieux madriers de bois."
            },
            {
              "type": "neutre",
              "contenu": "Il existe trois galeries principales, formant un Y sur le plan. Hautes de 3 mètres, étayées de voûtes de pierre, de vieux rails rouillés courent au sol."
            },
            {
              "type": "bleu",
              "contenu": "[MJ optionnel] Danger d'éboulement : à chaque nouvelle galerie secondaire explorée, lancez 1d10 — sur un 1, la zone est dangereuse. PER difficulté 15 pour s'arrêter à temps, sinon éboulement. 1d6 : impair = 1 PJ pris, pair = 2 PJ, un 6 = 3 PJ. Chaque PJ pris fait un test de DEX difficulté 15 (2d6 DM si échec, +1 DM/tour, FOR difficulté 20 pour le délivrer, -1 par aide).",
              "label": "🔵 Règle optionnelle"
            }
          ]
        },
        {
          "titre": "Obstacles des mines",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Devant vous, la voûte s'est écroulée et la galerie est complètement obstruée."
            },
            {
              "type": "neutre",
              "contenu": "Test d'INT difficulté 15 : c'est l'éboulement qui bouche l'entrée principale de la mine. Il faudrait plusieurs semaines pour dégager l'entrée."
            },
            {
              "type": "vert",
              "contenu": "À cet endroit, la mine s'est effondrée dans une cavité en contrebas. Un trou béant de trois mètres de long vous coupe la route."
            },
            {
              "type": "bleu",
              "contenu": "Franchir le trou : longer la paroi (test de DEX escalade difficulté 10) ou sauter (test de FOR athlétisme difficulté 10). Échec = mauvaise posture, un compagnon peut aider (FOR difficulté 15) sinon chute et 1d6 DM. Une corde et des pitons réduisent la difficulté de 5.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "L'extrémité de cette galerie est partiellement effondrée. Il est possible de se faufiler en rampant. Le trou débouche dans un renfoncement en hauteur sur le côté d'une vaste caverne naturelle."
            },
            {
              "type": "bleu",
              "contenu": "Accès aux grottes (vers la grotte C) : test de DEX difficulté 15 pour descendre 3m sans chuter (1d4 DM si échec, automatique avec corde).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Cette galerie débouche sur une ouverture dans la voûte d'une vaste caverne, très haut au-dessus d'un bassin empli d'eau de mer."
            },
            {
              "type": "neutre",
              "contenu": "Le trou dans la voûte surplombe le bassin central de la grotte de cérémonie (J), 15 mètres plus bas, invisible depuis en dessous."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e2",
      "label": "Les grottes",
      "resume": "Ces grottes naturelles sont fréquentées par les profonds depuis des millions d'années. Humides, glissantes, une atroce odeur de poisson pourri y règne.",
      "chapitres": [
        {
          "titre": "Entrée & Fils de Fishburn",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Cette grotte de taille modeste possède trois issues. Un escalier étroit, noir et glissant monte vers la surface, une grille permet de bloquer l'accès à une autre grotte, tandis qu'un dernier tunnel s'enfonce plus profondément."
            },
            {
              "type": "neutre",
              "contenu": "La grotte est située juste sous l'église — une bouche d'aération permet d'entendre ce qui s'y dit. L'escalier débouche sous l'autel (impossible à soulever de ce côté, il faut le total de 80 FOR). La grille bloque l'accès à la caverne où vit le fils de Fishburn."
            },
            {
              "type": "bleu",
              "contenu": "Grilles : test de FOR difficulté 25 pour forcer, ou détruire la serrure à l'arme à feu (attaque contre DEF 10, au moins 5 DM). Fishburn porte la clef sur lui, le Dr Dunstag a un double.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Un terrible hurlement se répercute dans le complexe souterrain, aussitôt suivi d'une course lourde. Une forme massive se jette sur la grille de métal avec une telle violence que vous pensez un instant que les barreaux vont céder."
            },
            {
              "type": "bleu",
              "contenu": "Le fils de Fishburn — NC4, FOR+3, DEX-1, CON+3, INT-2, PER-1, CHA-4, Init 8, DEF 16, PV 25. Pinces +5, DM 2d6+3. Enrager (critique ou <½PV : ignore douleur/peur, +5 FOR et attaque, +1d6 DM, agit 1 tour après 0PV). Moral : se bat jusqu'à la mort.",
              "label": "🔵 Statistiques"
            },
            {
              "type": "vert",
              "contenu": "L'être abominable qui tente de vous atteindre possède deux courtes jambes épaisses et difformes. Le haut de son corps est recouvert d'une carapace rougeâtre. Vous frissonnez en comprenant qu'il ne s'agit pas d'une armure et que les énormes pinces que vous voyez, capables de couper un homme en deux, sont ses bras. Sa tête horrible est enfoncée dans le thorax de la créature. En émerge tout juste le haut du crâne et deux yeux humains qui dardent sur vous un regard empli de haine et de folie."
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 12 pour tout témoin (1 PC en cas d'échec).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Tant qu'il est prisonnier derrière les barreaux, il semble facile de l'abattre par balles, mais ce serait une erreur : à sa prochaine visite, Fishburn comprendrait immédiatement ce qui s'est passé, et malheur aux PJ. « Moi voit, moi tue » : si un PJ s'apprête à commettre l'irréparable, Dwain Blanchard (second du Princess, membre d'un groupe d'investigateurs avec le défunt Charles et Edwin Fisher) peut surgir une fois pour l'en empêcher.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Grotte naturelle & croisement",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Cette grotte est encombrée de concrétions en tout genre, stalactites, stalagmites, colonnes, rochers tombés du plafond. Le sol est humide et glissant."
            },
            {
              "type": "bleu",
              "contenu": "Deux issues : un boyau étroit et tortueux vers le Sud, et une issue en hauteur cachée derrière une colonne (test de PER difficulté 20 pour la découvrir depuis ici, mais évidente depuis la mine).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Cette cavité sans particularité est dotée de trois issues : un passage vers une porte de bois, un autre vers une autre grotte, et le dernier bloqué par une solide grille."
            },
            {
              "type": "neutre",
              "contenu": "La grille est fermée à clef sauf durant les cérémonies. La porte ne l'est pas. Une dernière issue au Nord (test de PER difficulté 15 pour la repérer) mène vers la grotte naturelle."
            }
          ]
        },
        {
          "titre": "Le bureau secret",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Un grand bureau en bois, recouvert de documents, est appuyé contre une des parois. Il est accompagné d'un imposant fauteuil dont la structure est sculptée de créatures marines dans des postures obscènes d'accouplements avec des êtres humains. Une grande bibliothèque, à moitié vide, masque la paroi opposée."
            },
            {
              "type": "neutre",
              "contenu": "Une tenture bleu nuit masque un escalier qui descend vers le temple ancien."
            },
            {
              "type": "bleu",
              "contenu": "La bibliothèque : ouvrages impies anciens. Un coup d'œil aux illustrations demande un test de choc difficulté 10 (1 PC). Lecture assidue par un personnage versé en langues anciennes : test de choc difficulté 20 par heure de lecture (1 PC), mais chaque heure permet un test d'INT difficulté 15 pour accéder à la Voie occulte.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Cahiers du Dr Stemfield : croquis et notes sur ses expériences avant d'aboutir à un résultat viable (voir Nurserie). Prendre connaissance des traitements demande un test de choc difficulté 15 (1 PC).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Lettre (disponible seulement après une semaine sur l'île, vers le 9 octobre) : « Cher ami, je vous confirme que le navire qui vous débarrassera sans faute de vos hôtes encombrants arrivera le 19 octobre en lieu et place du Sea of Hope. [...] Il prendra en charge, comme convenu, votre précieuse engeance pour livraison dans les différents orphelinats du pays [...] Ïa, Ïa Cthulhu ! » Test d'INT (lettres ou médecine) difficulté 15 pour identifier le nom de Stemfield.",
              "label": "🔵 Indice"
            },
            {
              "type": "neutre",
              "contenu": "2 tubes en or (valeur 500$) contenaient cette lettre. Une carte des étoiles annotée « étoiles propices, 17 octobre » révèle la date de la cérémonie. Un dossier du Dr Dunstag (test de PER graphologie) contient des courbes de croissance des fœtus. Une chaîne en or avec médaillon pieuvre (2kg, valeur 1000$) — objet de culte que Fishburn cherche à récupérer s'il est volé."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Le Fils de Fishburn",
          "desc": "NC4, PV25, DEF16. Enfermé dans sa caverne. Devient enragé sous la moitié de ses PV. Fishburn le venge si abattu."
        }
      ]
    },
    {
      "id": "s4_e3",
      "label": "Élevage, geôles et nurserie",
      "resume": "Les horreurs les plus sombres du complexe : l'élevage des vers, les prisonniers reproducteurs, et la nurserie où grandissent des dizaines d'hybrides.",
      "chapitres": [
        {
          "titre": "Élevage de vers",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Trois bassins occupent cette caverne. Une odeur douçâtre de décomposition se mêle aux relents viciés de poisson pourri. Vous découvrez que la puanteur provient d'un tas de viande avariée, entreposée à même le sol dans un coin. Un escalier descend plus profondément sous terre."
            },
            {
              "type": "bleu",
              "contenu": "Examiner la viande : test de choc difficulté 15 (1 PC) en comprenant qu'il s'agit de restes humains. Si Elmer Downey est mort, il s'agit de son cadavre (difficulté 20 dans ce cas).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Bassin Nord : larves inoffensives. Bassin Est : jeunes vers affamés (1 DM/tour si on y plonge la main). Bassin Sud : vers adultes viables, permettent de respirer sous l'eau."
            }
          ]
        },
        {
          "titre": "Geôles",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Une odeur d'excrément émane du lieu. Des grilles forment deux geôles distinctes. L'une d'elle est entièrement occupée par un bassin d'eau noirâtre où flotte vraisemblablement quelque chose, tandis que l'autre abrite un pauvre hère décharné au regard fou. Il lèche les barreaux de sa prison en se tortillant étrangement. Lorsqu'il vous voit, il vous fait une parodie de sourire."
            },
            {
              "type": "neutre",
              "contenu": "C'est la prison des reproducteurs, humains enlevés sur le continent par des contrebandiers. Les deux survivants sont fous — l'un réagit comme un chien battu et lubrique, l'autre dans le bassin est complètement catatonique, relié à des vers respiratoires."
            },
            {
              "type": "neutre",
              "contenu": "Les portes des geôles ont les mêmes caractéristiques que les grilles (FOR difficulté 25 ou destruction de serrure)."
            }
          ]
        },
        {
          "titre": "Nurserie",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Une vaste cavité ténébreuse s'étend devant vous, coupée sur toute sa longueur par un grand bassin d'eau de mer. Le clapotis de l'eau se répercute au loin sur les parois. Votre lampe torche s'avère insuffisante pour éclairer l'intégralité de la caverne. En revanche, le faisceau révèle un horrible spectacle. Crucifiés contre les parois rocheuses, des dizaines de corps sont plongés dans l'eau. Un immonde cordon ombilical rosâtre et translucide relie chaque corps à une sorte d'œuf qui flotte paresseusement à la surface de l'eau. Et dans chaque œuf, par transparence, vous pouvez distinguer un fœtus d'apparence humaine."
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 20 pour chaque témoin (1 PC en cas d'échec).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Une cinquantaine de bébés hybrides, conçus lors de cérémonies successives, prêts pour la même génération. Chaque bébé aspire les fluides vitaux de son hôte humain crucifié via le cordon ombilical, tandis que deux vers noirs sous ses aisselles fournissent l'oxygène."
            },
            {
              "type": "bleu",
              "contenu": "Couper un cordon tue l'hôte, l'œuf s'ouvre après 1d6 tours et libère un enfant (test de choc difficulté 10, 1 PC). Éliminer un nouveau-né (ils respirent sous l'eau) : test de choc difficulté 15 (1 PC). Intervenir pendant la cérémonie alerte immédiatement les cultistes — poursuite garantie !",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Pour éliminer tous les fœtus : deux charges de 10 bâtons de dynamite, une à chaque bout de la caverne.",
              "label": "🔵 Solution tactique"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e4",
      "label": "Temple ancien et salle de cérémonie",
      "resume": "Le cœur du complexe : le temple orné de gravures pré-humaines, et la grande salle où se déroulent les cérémonies orgiaques avec Ceux des profondeurs.",
      "chapitres": [
        {
          "titre": "Temple ancien",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Cette haute caverne comporte un autel de pierre antique, sculpté de tentacules. Les murs sont couverts de gravures si anciennes qu'elles sont très érodées et illisibles."
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT (archéologie) difficulté 10 pour éclairer les parois d'une lumière rasante et révéler les reliefs : une île émerge de l'eau, elle supporte une arche titanesque où brille une étoile. Une immense créature tentaculaire franchit l'arche, entourée de fourmis (des humains) en adoration à ses pieds.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Salle de cérémonie",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Cette caverne est immense et sa voûte se perd dans les ténèbres. Un profond bassin d'eau de mer occupe tout le centre, un escalier permet d'y descendre. Tout autour, des divans, des couches et des banquettes luxueuses meublent l'espace libre. Des chaînes équipées de menottes sont fixées dans l'eau et sur les parois de la grotte."
            },
            {
              "type": "neutre",
              "contenu": "C'est ici que se déroulent les cérémonies orgiaques et les accouplements avec Ceux des profondeurs."
            }
          ]
        },
        {
          "titre": "Sortie sous-marine",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Une grotte sous-marine relie le fond du bassin de la salle de cérémonie à la mer au-delà des falaises. Deux homards géants montent la garde."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e5",
      "label": "Le plan idéal",
      "resume": "Le dénouement peut considérablement varier selon les décisions des joueurs. Conseils pour vous aider à orchestrer une conclusion mémorable.",
      "chapitres": [
        {
          "titre": "Les trois objectifs",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Les options les plus probables et positives pour les PJ sont :"
            },
            {
              "type": "neutre",
              "contenu": "• Dynamiter le complexe, notamment la nurserie, pour empêcher Ceux des profondeurs de disperser leur progéniture.\n• Profiter de la cérémonie du 17 octobre pour tuer le plus grand nombre possible de cultistes et de profonds dans l'effondrement des souterrains.\n• Réparer et utiliser l'avion de Josh pour s'enfuir."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Dans l'idéal, les PJ cumulent ces trois actions en une même nuit — deux visites nécessaires : une première pour explorer/comprendre/préparer un plan, une seconde pour agir (idéalement pendant la cérémonie).",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "L'aide des PNJ",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Cette boîte est prévue pour des débutants — n'hésitez pas à les aider via un PNJ amical (Dwain Blanchard, Wilbur, ou surtout Josh). Dosez selon le groupe : trop d'aide casse la magie, pas assez peut ruiner la fin de l'histoire.",
              "label": "🔵 Conseil MJ"
            },
            {
              "type": "vert",
              "contenu": "Avant la première descente, Josh conseille : « Repérez d'abord les lieux sans vous faire remarquer, puis réfléchissons à ce que nous pouvons faire. Ne touchez à rien là-bas ! Pas de panique, pas de geste inconsidéré ! On ne déclenche pas le combat sans savoir où on met les pieds ! »"
            },
            {
              "type": "neutre",
              "contenu": "Josh fournit dynamite, fusil de chasse et revolver, mais seulement si les PJ lui exposent un plan cohérent — quitte à leur faire repasser l'examen plusieurs fois."
            },
            {
              "type": "vert",
              "contenu": "Josh conseille d'attendre la cérémonie du 17 : « De temps à autre, ils disparaissent tous là-dessous pour leurs cérémonies infâmes. On sait jamais trop à l'avance quand. Quand les étoiles sont propices, qu'ils disent. La nuit, toujours. En tout cas, c'est le bon moment pour agir, pour sûr ! »"
            }
          ]
        },
        {
          "titre": "La dynamite",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Josh possède deux caisses de dynamite (15 kg, 30 bâtons chacune). Il cède une caisse aux PJ, garde l'autre pour lui."
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT (explosifs) difficulté 10 pour comprendre que l'explosif est instable (vieille dynamite qui suinte de la nitroglycérine). En cas de chute, 1d6 : sur 5-6 elle explose (un PJ peut dépenser 1 PC pour relancer).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Explosion confinée : placer la dynamite en deux points stratégiques (cérémonie J + nurserie, 2 charges distinctes). Test d'INT (explosifs) difficulté 10 pour comprendre qu'il faut au moins 10 bâtons dans le renfoncement (repère 7) pour effondrer toute la voûte de la salle de cérémonie sur cultistes et profonds.",
              "label": "🔵 Solution tactique"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e6",
      "label": "La cérémonie du 17 octobre",
      "resume": "Nuit du 17 au 18 octobre. Les cultistes se rassemblent dans le temple ancien, psalmodient jusqu'à ce que les profonds émergent de l'eau. La cérémonie orgiaque commence.",
      "chapitres": [
        {
          "titre": "La chronologie",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Nuit du 2 au 3 octobre : naufrage des PJ.\nNuit du 17 au 18 octobre : cérémonie des cultistes.\n19 octobre : arrivée du bateau censé ramener les PJ sur le continent.\n21 octobre : arrivée du bateau qui doit emmener les bébés mutants."
            }
          ]
        },
        {
          "titre": "La cérémonie",
          "blocs": [
            {
              "type": "vert",
              "contenu": "D'abord, vous entendez des hurlements. Une cacophonie contre-nature de râles confus, de cris de douleur produits par un cœur de gorges à la fois humaines et inhumaines. Comme si une assemblée de porcs, de chiens et d'humains se livraient à une orgie blasphématoire. Enfin, au milieu de ce tintamarre infernal, vous reconnaissez la voix de Fishburn, puissante, couvrante, qui psalmodie une litanie impie."
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 10 en écoutant (1 PC en cas d'échec).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Il n'y a pas de mots. Quelle ignominie dans cette grotte ! Par chance, la pénombre cache les détails des corps enlacés et la physionomie infâme des créatures écailleuses issues des profondeurs qui copulent avec des villageoises et des villageois. Vous apercevez Fishburn au milieu de ses ouailles. À l'exception d'un imposant collier d'or qui représente une pieuvre, il est nu comme un ver et déclame une sombre mélopée les bras levés vers des étoiles invisibles."
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 20 pour tout observateur direct (1 PC supplémentaire en cas d'échec).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "La cérémonie accueille une cinquantaine de villageois et environ la moitié de profonds. Lancer des bâtons de dynamite au milieu de l'orgie fait des ravages mais déclenche immédiatement une poursuite mortelle."
            }
          ]
        },
        {
          "titre": "Le père Fishburn",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Fishburn — NC4 (Élite), FOR+3, DEX-1, CON+3, INT-2, PER-1, CHA-4, Init 16, DEF 11, PV 29. Couteau +7 DM 1d4+5. Attaque magique +7.",
              "label": "🔵 Statistiques"
            },
            {
              "type": "bleu",
              "contenu": "Malédiction (L) : test d'attaque magique opposé, en cas de succès la cible lance 2d20 et garde le plus mauvais résultat pendant 1d6 tours.\nChoc (L) : 1d6+3 DM à 20m sur test d'attaque magique réussi, renverse la cible sur échec de FOR difficulté 15.\nChef spirituel : +2 initiative/attaque/DM à tous les cultistes à portée de vue.\nChair à canon : 1/tour, dévie une attaque sur un cultiste à moins de 3m. +5 DEF si des cultistes sont proches.",
              "label": "🔵 Capacités"
            }
          ]
        },
        {
          "titre": "Fuir !",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Après l'explosion du complexe, les PJ ont un répit de quelques minutes, puis les survivants (costauds, profonds émergeant du port) prennent en chasse tous les naufragés encore présents — aucun ne survivra s'il reste au village. L'expédition punitive comporte 6 villageois, 6 costauds, 6 profonds, et 2 hybrides homards (si la cérémonie a été dynamitée). Sans dynamitage : Fishburn, une trentaine de villageois et une dizaine de profonds supplémentaires.",
              "label": "🔵 Secret MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Père Fishburn",
          "desc": "NC4 Élite, PV29, DEF11. Préside la cérémonie. Malédiction, Choc, Chef spirituel, Chair à canon."
        }
      ]
    },
    {
      "id": "s4_e7",
      "label": "L'avion de Josh",
      "resume": "L'ultime option de fuite : réparer et décoller avec l'Airco DH.10 abandonné dans le hangar de Josh.",
      "chapitres": [
        {
          "titre": "L'Airco DH.10 Amiens",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Cet avion d'origine anglaise est un bombardier bimoteur conçu à la fin de la Première Guerre mondiale, décliné en version civile pour le transport du courrier. Équipage : 3. Longueur 12m, envergure 19m, hauteur 4m. Poids à vide 2,6t, en charge 3,8t. Vitesse max 210 km/h. Autonomie 6 heures."
            }
          ]
        },
        {
          "titre": "Préparation au décollage",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Pousser l'avion hors du hangar : plusieurs tests de FOR difficulté 15, tension croissante à chaque échec (la horde se rapproche). Démarrer chaque moteur à la manivelle : test de DEX (mécanique) difficulté 10 par moteur. Chaque test raté fait arriver un cultiste ou un profond supplémentaire.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Décollage en piqué",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Prise d'élan : test de DEX (pilotage), difficulté 10 avec 3 passagers (+2/passager supplémentaire, +4 pour un acrobate sur l'aile, +6 pour deux, +2/ennemi au contact). Un échec inflige -2 au test suivant, une réussite avec marge de 10+ ou critique apporte +2 au test suivant.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Gérer le piqué du haut de la falaise : nouveau test de DEX (pilotage). Échec : possibilité de refaire le test avec -5 cumulatif, mais tout échec de plus de 10 points = crash (6d6 DM par occupant, avion détruit).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Sur les ailes : situation périlleuse durant le décollage en piqué ET la traversée. Chaque PJ sur une aile fait un test de FOR pour ne pas être emporté.",
              "label": "🔵 Jet de dés"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "s4_e8",
      "label": "Et après ? — Conclusion de la campagne",
      "resume": "Vos PJ ont réussi à quitter l'île en vie ! Mais cette aventure n'est peut-être pas tout à fait terminée.",
      "chapitres": [
        {
          "titre": "Revenir ?",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Les PJ souhaiteront peut-être revenir sur l'île pour régler des comptes, voire convaincre les autorités de les aider. Convaincre William J. Flynn n'est pas une mince affaire : selon les preuves apportées, un test de CHA (difficulté 15 à 25) sera nécessaire. Il serait plus facile de l'attirer en lui faisant croire à un repère de terroristes."
            },
            {
              "type": "neutre",
              "contenu": "Si la nurserie n'a pas été dynamitée, il est trop tard pour les enfants déjà disséminés (le Sea of Hope les emporte le 21 octobre au plus tard) — probablement vers une liste d'orphelinats alternative si Fishburn se doutait de quelque chose."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les cultistes craignent le retour des PJ avec les autorités, les survivants terminent leur mutation et franchissent le pas vers la mer. Au retour des PJ, il ne reste plus personne — à vous de décider si Wilbur, Max ou Josh ont survécu, ou ont été massacrés et suspendus à des crochets sur la jetée.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Stemfield ?",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Si les PJ ont compris les relations entre Fishburn et le docteur Stemfield, ils souhaiteront sans doute lui rendre visite à New York."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] À vous de décider des suites : le bon docteur a pris le large et reste un méchant récurrent, ou un horrible complexe d'expériences interdites se cache sous l'hôpital — les PJ pourraient découvrir que l'attentat de Wall Street avait permis d'invoquer un Shoggoth mineur qui hante désormais les égouts de la cité. Ou simplement, Stemfield nie tout et il sera très difficile de le confondre.",
              "label": "🔵 Suite possible"
            }
          ]
        }
      ],
      "pnj": []
    }
  ],
  "notes_globales": "Aventure étroitement imbriquée avec l'aventure 3 — lisez-la avant de faire jouer l'aventure 3, elle contient des renseignements importants. Ne donnez jamais le plan des souterrains avant exploration complète. Le passage de niveau (au niveau 4) a lieu pendant cette aventure, idéalement après l'exploration. La dynamite de Josh est la clé de voûte du plan idéal : nurserie + salle de cérémonie + fuite en avion."
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
  "intro": "Ce scénario est étroitement lié au premier. Il regroupe les aventures des PJ dans les Contrées du rêve. Leur première incursion se déroule contre leur volonté, mais leur permet de retrouver la mémoire et de comprendre les plans du Pharaon noir. Ils doivent ensuite s'y rendre volontairement afin de tenter de contrecarrer Nyarlathotep. Une entreprise difficile où il faudra mener un rituel dans les cinq pyramides bâties en vue de l'invocation d'Azathoth, avec l'aide d'une femme mystérieuse, la déesse Bast. Niveau 6/7. Ambiance : Stargate (le film).",
  "steps": [
    {
      "id": "q2_e1",
      "label": "Les Contrées du rêve — règles",
      "resume": "Ce scénario regroupe les aventures des PJ dans les Contrées du rêve. Leur première incursion se déroule contre leur volonté (flash-back), mais leur permet de retrouver la mémoire. Ils doivent ensuite s'y rendre volontairement pour contrecarrer Nyarlathotep, avec l'aide d'une femme mystérieuse : la déesse Bast.",
      "chapitres": [
        {
          "titre": "La rancune de Bast",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Il y a plusieurs millénaires, Nyarlathotep a passé un marché avec Bast : en échange de son aide pour dissimuler les sépultures des 5 prêtres momifiés, il lui a offert l'immortalité pour des centaines de chats momifiés capables de vivre dans les Contrées du rêve. À leur réveil, les prêtres se sont servis des momies de chats pour confectionner une drogue permettant de convoquer leurs esclaves humains. Bast considère cela comme la pire des trahisons — elle veut se venger, mais sans s'opposer frontalement à Nyarlathotep. Aider les PJ lui offre l'occasion idéale.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Règles des Contrées du rêve",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Faim et soif : les personnages en souffrent normalement mais n'en meurent pas. Au pire, ils subissent l'état affaibli (d12) après quelques jours. Le credo : « souffrir, mais pas mourir »."
            },
            {
              "type": "neutre",
              "contenu": "Inconscience et blessure grave : pas de blessure grave dans les Contrées du rêve. Un PJ à 0 PV reprend conscience après une heure (parfois cela suffit à le réveiller). Il est possible de mourir si un adversaire achève un PJ inconscient."
            },
            {
              "type": "neutre",
              "contenu": "Mort dans les Contrées du rêve : le rêveur qui meurt se réveille bien vivant dans le monde réel, mais perd immédiatement 1 point de choc et ne peut plus accéder aux Contrées du rêve en rêvant — seulement par des passages physiques (souterrains, royaume des goules, plateau de Leng) ou des objets interdimensionnels. Un personnage qui y entre corps et âme meurt pour de bon s'il y est tué."
            },
            {
              "type": "neutre",
              "contenu": "Équipement : niveau technologique moyenâgeux — pas d'armes à feu, pas de véhicules motorisés, la magie est omniprésente."
            }
          ]
        },
        {
          "titre": "Le plateau de Leng",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Le plateau de Leng, où se situe l'aventure 2, est un vaste désert, lieu de convergence de plusieurs réalités, qui se superpose parfois à certaines zones désertiques de la Terre (Afrique, Antarctique, Mongolie). Il peut exister dans plusieurs dimensions et à plusieurs endroits simultanément — une porte d'accès aux Contrées du rêve via le monde éveillé."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "q2_e2",
      "label": "Dans les fosses de Nyarlapolis",
      "resume": "Cette scène doit être jouée directement à la suite de la capture des PJ à l'asile d'Amityville (aventure 1). C'est un flash-back : les PJ se réveillent tous ensemble dans le temple de Nyarlathotep et tombent entre les mains d'Iaret et de ses gardes-chiourmes.",
      "chapitres": [
        {
          "titre": "Objectifs cachés du MJ",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Rappelez-vous qu'il s'agit d'un flash-back : tout ceci a eu lieu il y a plusieurs mois. Les joueurs pourraient croire qu'ils doivent s'enfuir ou saboter les pyramides — ne les détrompez pas, laissez-les tenter des choses. Leurs plans sont voués à l'échec pour le moment, ce qui nourrira un ressentiment utile pour la suite. Objectifs réels : découvrir les Contrées du rêve et le plateau de Leng, découvrir le plan de Nyarlathotep, alimenter la rancune des PJ contre Iaret et les prêtres, aider un chat qui deviendra leur allié.",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "Réveil dans le temple",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous reprenez conscience sur une surface de pierre. Au-dessus de vous, le plafond se perd dans les ténèbres. Lorsque vous redressez la tête, votre regard croise celui d'un immense pharaon noir aux yeux rougeoyants. Il vous domine de toute sa hauteur. Sa coiffe est ornée d'un cobra dressé, il porte un fléau dans une main et une crosse dans l'autre. Puis votre regard se dessille. Il ne s'agit que d'une statue de pierre noire aux yeux de rubis. Des dizaines de chats sont gravés sur le socle colossal. Vous vous redressez péniblement pour constater que chacun d'entre vous était allongé sur un autel, dans un grand temple soutenu par des colonnes pentagonales qui penchent selon des angles irréguliers."
            },
            {
              "type": "neutre",
              "contenu": "Les PJ portent la même tenue que lors de la soirée fatidique, mais n'ont aucun objet ni arme. Ils ont tous leurs PV. La statue (6m de haut) représente Nyarlathotep, le Pharaon noir, avec la coiffe-némès, l'uræus, la crosse-héqa et le flagellum-nekhekh."
            }
          ]
        },
        {
          "titre": "L'arrivée de la reine",
          "blocs": [
            {
              "type": "vert",
              "contenu": "À peine êtes-vous remis sur pied qu'une demi-douzaine de silhouettes se découpent dans l'embrasure de la porte. Vous constatez dans un hoquet d'horreur que ce ne sont pas des êtres humains, mais des parodies d'hommes dotés de traits bestiaux — courtes cornes, sabots, fourrure sous la ceinture, bouche anormalement large. Tous sont armés de fouets et d'épées courbes. Mais le pire se cache derrière eux : une grande chose glissante, blanche et frémissante, sorte de crapaud sans yeux doté d'une masse de courts tentacules roses au bout d'un groin aplati. La cohorte s'écarte puis s'incline dans une parodie de révérence devant une magnifique jeune femme aux allures de reine égyptienne, couronnée d'une coiffe à tête de serpent, un fléau à la main. Elle vous lance d'un air supérieur : « Ployez le genou devant le Pharaon noir. Vous êtes ici des esclaves à son service. Obéissez et vous serez sauvés. Résistez et vous souffrirez mille tourments ! »"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] La jeune reine n'est autre que Margery Morrow, mais les PJ ne peuvent pas la reconnaître à ce stade (première capture, avant leur rencontre). Ici elle est appelée Iaret — dans l'Égypte antique, le cobra femelle protecteur du pharaon.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "vert",
              "contenu": "Les hommes de Leng passent un collier de fer autour du cou de ceux qui ont mis un genou à terre, fermé par une goupille de métal. Iaret touche le collier en murmurant : « Serviteur de Pharaon, même la mort ne saurait te libérer. » Le collier est désormais impossible à ouvrir par des moyens conventionnels."
            },
            {
              "type": "bleu",
              "contenu": "Si les PJ résistent : coups de fouet des hommes de Leng jusqu'à soumission ou inconscience. En cas de résistance farouche, des renforts arrivent (2 bêtes lunaires + 1 douzaine d'hommes de Leng). Iaret utilise en priorité Injonction et Malédiction, puis Saignements, puis Broyer les cœurs et Possession si nécessaire. Si des PJ fuient dans les jardins sacrés : une dizaine de cobras ailés + poursuite. S'ils sont réduits à 0 PV, ils ne meurent pas — collier de servitude puis soin (1 PV).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Visite guidée et la fosse",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Les hommes-bêtes vous attachent les uns aux autres au moyen d'une chaîne de métal qui relie vos colliers de fer, puis on vous tire hors du temple sous les encouragements du fouet. Vous pénétrez dans l'ombre d'une jungle luxuriante de fougères géantes vertes et violettes. Vous parcourez une centaine de mètres avant de croiser une vaste ziggourat aux degrés de pierres noires. Soudain la jungle prend fin brutalement. Le sol disparaît devant vous. Un escalier vertigineux mène plusieurs dizaines de mètres en contrebas. Aussi loin que porte le regard, vous apercevez un vaste désert de roches ocre et de plateaux tabulaires. Mais ce qui vous saisit d'effroi se situe au premier plan : une énorme fosse en gradins où s'affairent des dizaines d'esclaves occupés à tailler et charrier d'énormes blocs de pierre. Cinq pyramides majestueuses sont en cours de construction."
            },
            {
              "type": "vert",
              "contenu": "La reine prend la parole : « C'est magnifique n'est-ce pas ? Nyarlapolis, l'avenir de l'humanité. Mais les jardins sacrés sont réservés aux élus. Pour vous ce sera les fosses. Mettez-les au travail sans perdre de temps. »"
            }
          ]
        },
        {
          "titre": "Premier jour de labeur",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Chaque PJ enchaîné au monte-charge fait un test de FOR difficulté 10 chaque jour. Si les réussites sont majoritaires, la charge monte, sinon les gardiens (3 hommes de Leng) fouettent un PJ au hasard (1d4 PV perdus). À 0 PV, il est simplement mis à l'écart le temps de se rétablir.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Les hommes-bêtes qui vous surveillent sont sous la férule des étranges crapauds à la silhouette changeante, qui émettent des notes de musique plaintives à l'aide de flûtes d'os. La journée est à la fois terrible et interminable : tirer, pousser, forcer, souffrir… et goûter à la morsure du fouet lorsque vous ne travaillez pas assez vite, parfois même sans raison."
            },
            {
              "type": "vert",
              "contenu": "Lorsque la nuit tombe enfin, tous les esclaves rejoignent la fosse centrale en colonnes, encadrés par les hommes-bêtes. De grandes marmites sont descendues par les monte-charge. Pour la première fois, vous pouvez approcher les autres esclaves — de pauvres hères aux vêtements sales et déchirés, certains en tenue d'hôpital, en camisole de force, en robe de ballerine ou en uniforme napoléonien. Certains portent d'affreux stigmates : gorge tranchée, nuque à angle impossible, genou plié à l'envers — et pourtant ils marchent encore."
            }
          ]
        },
        {
          "titre": "Le chat",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Dès le second jour, les PJ aperçoivent un chat malingre qui se faufile entre les décombres. Les hommes-bêtes détestent le chat et lui jettent des pierres. Au moment du repas, le félin, maigre à faire peur, se faufile près du PJ avec la plus haute valeur de CHA et quémande de la nourriture."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Ce chat tacheté ressemble comme deux gouttes d'eau à celui de la Villa Paterson.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "bleu",
              "contenu": "Si un PJ nourrit le chat : test de PER difficulté 20 pour comprendre qu'il dit « Merci ». Sinon, chaque soir, test de PER difficulté 20 pour entendre « J'ai faim ». À chaque rencontre suivante, un test de PER de plus en plus facile (18, 16, 14...) approfondit la compréhension. Après 3 réussites, le PJ peut miauler des mots simples. Au bout de quelques jours, le chat demande : « Libérez-moi ! »",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Libérer le chat : test de FOR+CHA (somme des Mod.) difficulté 12 pour le dissimuler. Échec : le chat griffe un homme-bête et s'échappe, le PJ reçoit des coups de fouet (1d6 DM) et ne peut plus retenter. Réussite : le chat ronronne un message : « Les chats se souviendront de votre aide. Lorsque vous serez libres, revenez nous voir dans les Contrées du rêve et dites ceci à la Dame qui se cache : Nous sommes les amis des chats et nous voulons combattre le Pharaon noir. »",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Le sens du sacrifice",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Cet événement se produit au bout de 3-4 jours."
            },
            {
              "type": "vert",
              "contenu": "Au petit matin, une agitation inhabituelle parcourt les rangs des hommes de Leng. Un seul mot, répété dans toutes les langues : « Sacrifice, sacrifice ». Une ombre noire vous survole — une créature plus grosse qu'un éléphant, aux ailes ni d'oiseau ni de chauve-souris, écailles noires luisantes, tête chevaline à l'énorme gueule. La reine Iaret est juchée sur son encolure et en descend d'un bond gracieux. « Aujourd'hui l'un de vous aura l'honneur de sanctifier la pyramide sacrée de son sang. Ïa ! Ïa Nyarlathotep ! »"
            },
            {
              "type": "bleu",
              "contenu": "Iaret désigne un esclave qui a l'air vaillant. Si un PJ s'interpose, il prend automatiquement la place de la victime désignée.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "La victime revient à la fosse avec un organe sensoriel devenu noir et inutile (lancer 1d10 : 1-2 main, etc.). En comparant les séquelles de différentes victimes et la direction prise par le shantak, un test d'INT difficulté 10 permet de déduire que chaque pyramide est liée à un sens particulier."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Sacrifier un PJ n'est pas obligatoire — selon le contrat social de votre table. Cela peut sanctionner un comportement (Iaret se souvient d'un PJ insolent) ou compliquer la scène finale (aventure 4).",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "Mystérieuse disparition",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Au bout d'une semaine environ, test de CON pour tous les PJ — celui qui obtient le plus haut résultat se réveille en premier et disparaît (retour à une scène de l'asile, aventure 1, hors de vue des autres joueurs). Il réapparaît quelques jours plus tard avec des souvenirs confus. Le processus se répète pour chaque PJ.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Seule la première incursion débute dans le temple. Les fois suivantes, après un passage par l'asile, les PJ se réveillent directement dans les fosses."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Iaret (Margery Morrow)",
          "desc": "Reine de Nyarlapolis. Injonction, Malédiction, Saignements, Broyer les cœurs, Possession. Monte un shantak."
        },
        {
          "nom": "Le chat",
          "desc": "Chat tacheté malingre, identique à celui de la Villa Paterson. Devient un allié précieux s'il est nourri et libéré."
        }
      ]
    },
    {
      "id": "q2_e3",
      "label": "La cité maudite — les pyramides",
      "resume": "La cité de Nyarlapolis est le lieu où les pyramides destinées à l'invocation d'Azathoth sont en construction. Description des lieux, utile lors des deux incursions des PJ.",
      "chapitres": [
        {
          "titre": "Les cinq pyramides",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Forme pentagonale, hauteur 30-40m pour une base de 81m de côté durant la période d'esclavage (hauteur finale d'environ 110m, mais tronquée au dernier tiers — les PJ ne peuvent pas le savoir sans accéder aux plans). Toutes identiques, sauf le symbole gravé qui correspond à chaque prêtre (scarabée, croissant de lune, bœuf Apis, tortue, chenille) relié à l'un des cinq sens."
            },
            {
              "type": "neutre",
              "contenu": "Prise individuellement, chaque pyramide onirique est insuffisante pour entrer dans le monde réel — c'est la réunion des cinq qui permettra à la pyramide d'invocation de se manifester."
            }
          ]
        },
        {
          "titre": "Accès souterrain et sanctuaire",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "La nuit, l'entrée n'est gardée que par 2 hommes de Leng, peu attentifs. Test de DEX difficulté 10 pour passer derrière eux ou les attaquer par surprise.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Un piège au milieu du couloir (désactivé avant les sacrifices) : test de PER difficulté 15 pour repérer la trappe. Échec = chute de 6m (2d6 DM), remonter demande un test de DEX difficulté 15 (1d6 DM si échec). Désactiver : test d'INT difficulté 15 (5 min/essai). Sauter par-dessus : test de DEX difficulté 10.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "La porte des étoiles : test de FOR difficulté 15 pour l'ouvrir (bonus égal au rang de la Voie des rêves). Sacrifier 1 PV par tentative ratée.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Le sanctuaire intérieur est une pièce pentagonale d'environ 7 mètres de diamètre, plafond bas à 2 mètres. L'autel sacrificiel, taillé dans l'hématite (pierre de sang), est un cube parfait d'1 mètre de côté, placé sous un puits carré qui s'ouvre au sommet de la pyramide."
            },
            {
              "type": "bleu",
              "contenu": "Un cobra ailé monte la garde dans le puits, prêt à se laisser tomber sur tout intrus.",
              "label": "🔵 Danger"
            },
            {
              "type": "bleu",
              "contenu": "Grimper au sommet par le puits : 3 tests de DEX difficulté 10 (échec = glisse, perd 1 PV, recommence ; échec critique = chute et 1d6 DM par test déjà réussi, entraîne les PJ en dessous sauf test de FOR difficulté [FOR du chuteur +5]). Redescendre en glissant sur le flanc : test de DEX difficulté 15 (1d6 DM si échec).",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Les autres lieux de la cité",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Fosse lunaire : excavation en spirale où dorment les bêtes lunaires, exposées à la lumière lunaire."
            },
            {
              "type": "neutre",
              "contenu": "Huttes des hommes de Leng : taudis de boue et d'excréments séchés, installés partout sauf sur les plateaux sacrés."
            },
            {
              "type": "neutre",
              "contenu": "Jardins sacrés : le paradis promis aux serviteurs, avec fruits aux sensations vertigineuses, surveillés par Iaret et les cobras ailés. Contiennent le temple de Nyarlathotep (voler un rubis de la statue = lèpre incurable) et la ziggourat du cobra (résidence de Iaret et des 5 prêtres, plate-forme des shantaks, observatoire)."
            },
            {
              "type": "neutre",
              "contenu": "Ponts suspendus : 20-30m de long, 2m de large, 50m au-dessus du sol, reliant les plateaux tabulaires."
            },
            {
              "type": "neutre",
              "contenu": "Le plateau de Leng : la cité maudite est nichée au centre d'un labyrinthe de plateaux tabulaires de 20 km de diamètre."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "q2_e4",
      "label": "La vengeance de Bast",
      "resume": "Ce chapitre débute lorsque les PJ retournent volontairement dans les Contrées du rêve et donnent la bonne réponse à la voix mystérieuse de la grotte (voir aventure 1). Cela signifie qu'ils ont déjà vécu la période d'esclavage.",
      "chapitres": [
        {
          "titre": "Le marché de la Dame",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Les PJ apparaissent sans le collier de servitude. Ceux qui ont sacrifié un sens subissent toujours le préjudice de leur organe noir."
            },
            {
              "type": "vert",
              "contenu": "« Je peux vous aider. Mais il y a une condition que vous devez accepter. Vous ne devrez jamais chercher à voir mon visage, ni à apprendre mon nom. À cette condition, je vous aiderai. »"
            },
            {
              "type": "neutre",
              "contenu": "Questions possibles et réponses de la Dame :\n« Pourquoi voulez-vous nous aider ? » — « Celui que vous combattez m'a causé un grand tort. »\n« Êtes-vous à l'origine de la lettre ? » — « Non, vous avez un allié improbable. Il choisira son moment pour se révéler à vous. »\n« Pourquoi ne pas révéler votre identité ? » — « Pour ma propre sécurité et pour la vôtre. Cet endroit est invisible du Pharaon noir. Mais seulement tant que vous ne savez pas qui je suis. Ici, ce qui n'est pas nommé n'existe pas. »"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les PJ prononcent le nom de Bast ou éclairent son visage : elle apparaît un instant (femme magnifique à tête de félin), crache « Inconscients ! Stupides humains indignes de mon aide ! » et disparaît définitivement.",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les PJ refusent le marché : elle les prévient que sans son aide leur monde sera détruit, puis disparaît pour toujours si l'insistance persiste. La campagne se poursuit mais le seul moyen d'empêcher l'invocation devient de vaincre les cinq prêtres en combat direct — bien plus périlleux.",
              "label": "🔵 Conséquence"
            }
          ]
        },
        {
          "titre": "La grotte de la Dame",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous entrez dans les ténèbres. La voix chuchote un mot et une étincelle enflamme un âtre circulaire creusé dans le sol. Plusieurs chats tachetés fuient le cercle de lumière. La Dame est assise dans un renfoncement obscur, vous n'apercevez d'elle qu'un long manteau noir, sa capuche plonge son visage dans les ténèbres. « Prenez place, jeunes disciples. Ainsi vous voulez contrecarrer les plans du Pharaon noir. Mais dites-moi, qu'avez-vous compris de ses machinations ? »"
            }
          ]
        },
        {
          "titre": "Initiation",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Assis en tailleur autour du feu dansant, vous plongez votre regard dans les flammes et écoutez les mots de la Dame lorsqu'elle vous conte les Contrées du rêve. Vous voyagez des semaines entières, explorant des lieux magiques, des cités mythiques aux minarets recouverts d'or. Ce monde est constitué des rêves de toute l'humanité, mais aussi des vôtres — de vos rêves d'enfant lorsque vous ne posiez pas de limites au possible."
            },
            {
              "type": "neutre",
              "contenu": "La Dame précise que mourir dans les Contrées du rêve est sans retour — la pseudo-immortalité vécue dans les fosses était un effet du collier de servage lié à la poudre de momie de chat."
            },
            {
              "type": "bleu",
              "contenu": "Chaque séance : test de CHA difficulté 20 (puis 19, 18... de plus en plus facile). Échec = réveil prématuré dans le salon de la Villa Paterson, état affaibli le reste de la journée.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Passage de niveau au niveau 7 lorsque l'initiation est jugée terminée. Si un PJ atteint le rang 3 de la Voie des rêves, Bast lui enseigne une version avancée de Modifier son apparence : pour 1 PC, il peut se transformer en illusion d'homme de Leng (disparaît s'il est blessé).",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "Le plan",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "La Dame demande aux PJ s'ils ont un plan. Laissez les joueurs chercher — elle écarte les solutions trop violentes ou irréalisables, et peut leur proposer un test d'INT difficulté 15 pour deviner : les cinq sens sont les vecteurs de la manifestation de la pyramide dans le monde réel."
            },
            {
              "type": "vert",
              "contenu": "« L'autel au cœur de chaque pyramide fait office de coffre qui renferme la quintessence de chaque sens. Volez ce trésor et le rituel échouera, renvoyant les pyramides dans les Contrées du rêve. Vous ne pouvez pas le voler maintenant, car les prêtres en seraient instantanément prévenus. Vous devrez le faire sur Terre, lorsque les cinq seront trop occupés à invoquer le Sultan des démons pour riposter. Ici, en revanche, vous devez créer la serrure qui vous permettra de vous emparer du pouvoir de l'autel lorsqu'il sera dans le monde matériel. Et cette serrure est votre propre sang. Il vous faut donc retourner à la cité maudite et vous introduire dans les pyramides pour faire couler votre sang sur chaque autel du sanctuaire intérieur. » Elle ajoute d'un ton glaçant : « Quelle déception pour lui. »"
            },
            {
              "type": "neutre",
              "contenu": "Question : « Si notre sang est la serrure, quelle est la clef ? » — « Une quête qu'il vous reste à accomplir. Non pas une clef, mais cinq. Vous les trouverez le moment venu. » (Il s'agit des clefs à tête de singe, aventure 3.)"
            },
            {
              "type": "neutre",
              "contenu": "Question : « Comment se rendre sur place ? » — « Un ami à vous s'est porté volontaire pour vous guider à travers le labyrinthe de roche. » Le chat sauvé dans les fosses apparaît alors pour guider les PJ."
            }
          ]
        },
        {
          "titre": "Infiltration des pyramides",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] 2 hommes de Leng gardent chaque pyramide au départ. En cas d'alerte : renforts en 3d6 tours, périmètre de 16 hommes de Leng + 2 bêtes lunaires par pyramide. Iaret patrouille sur son shantak, intervient en 4d6 tours. En cas de poursuite : tests opposés de DEX (les adversaires n'ont pas d'armes de jet).",
              "label": "🔵 Conseil MJ"
            },
            {
              "type": "bleu",
              "contenu": "[MJ — Joker optionnel] Si les PJ sont en très mauvaise posture : une vingtaine de maigres bêtes de la nuit peut surgir pour plonger sur les hommes de Leng (manœuvre de Bast). Les shantaks prennent peur et fuient.",
              "label": "🔵 Joker MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "La Dame (Bast)",
          "desc": "Ne révèle jamais son visage ni son nom. Initie les PJ à la Voie des rêves et leur révèle le plan pour saboter les pyramides."
        }
      ]
    }
  ],
  "notes_globales": "Avant de jouer cette aventure, prenez connaissance du chapitre consacré aux Contrées du rêve. Structure en 3 chapitres : Dans les fosses de Nyarlapolis (1ère incursion, forcée, flash-back), La cité maudite (description des lieux), La vengeance de Bast (2e incursion, volontaire, plan du sabotage). Le passage de niveau au niveau 7 a lieu après l'initiation de Bast."
},
  q3: {
  "title": "La Maison écartelée",
  "intro": "Lorsque les PJ reviennent des Contrées du rêve, Nyarlathotep décide de les emprisonner dans une réplique labyrinthique de la maison des Paterson en compagnie de Nellie Bly, afin de les empêcher de nuire à son plan. Il leur est possible de s'échapper en utilisant les cinq clefs à tête de singe qui permettent d'ouvrir un portail vers Yog-Sothoth. Il s'agit d'une course contre la montre, car une terrible corruption les ronge progressivement. Niveau 7. Ambiance : Evil Dead, Le Labyrinthe, The Shining, les œuvres de M.C. Escher.",
  "steps": [
    {
      "id": "q3_e1",
      "label": "L'Homme en noir",
      "resume": "Cette aventure débute lorsque les PJ ont terminé leur enquête, à la fois dans le monde réel et dans les Contrées du rêve. Dans le monde réel, ils doivent avoir mené leurs recherches d'indices (notamment les équations d'Alexeï Fedorov et la rencontre avec Albert Einstein). Dans les Contrées du rêve, ils doivent avoir marqué les autels de leur sang. Nyarlathotep leur rend alors visite en personne.",
      "chapitres": [
        {
          "titre": "La visite du Pharaon noir",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Assurez-vous de ne pas enfermer Robert Denod avec les PJ. Placez cet événement au moment qui convient le mieux — soit Nyarlathotep est déjà présent quand les PJ reviennent, soit ils le découvrent soudainement dans la cuisine.",
              "label": "🔵 Conseil MJ"
            },
            {
              "type": "vert",
              "contenu": "Un grand homme maigre à la peau d'un noir d'encre et aux traits occidentaux : chauve et complètement glabre, portant pour seul vêtement une robe informe de tissu noir. Ses souliers ne peuvent pas être aperçus, mais ils claquent sur le sol lorsqu'il se déplace."
            },
            {
              "type": "neutre",
              "contenu": "Un personnage au hasard se rend à la cuisine et découvre l'Homme en noir confortablement installé sur une chaise. Il salue le PJ et lui demande d'inviter ses compagnons à la discussion."
            }
          ]
        },
        {
          "titre": "L'offre de Nyarlathotep",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Il sourit. « Alors c'est vous, toute cette agitation. Pourquoi ? » Devant les hésitations des PJ : « Vous ne comprenez pas les enjeux. Vous êtes comme des rats dans un labyrinthe, tenaces mais sans vision d'ensemble de la structure de l'univers. Vous pensez agir pour sauver votre engeance ? En réalité, en refusant l'honneur de sacrifier votre monde à des entités qui vous sont supérieures en tout, vous vous condamnez. » Il marque une pause. « Mais vous… vous avez entrevu des bribes de vérité. Cela fait de vous des individus différents du reste du troupeau. Je vous donne une chance, une seule, de vous élever au-dessus de votre condition. Embrassez ma cause et vous serez sauvés. Votre corps si fragile cessera de vieillir, à jamais posé sur un bloc de glace noire. Que dites-vous ? »"
            },
            {
              "type": "neutre",
              "contenu": "Si les PJ hésitent, Nyarlathotep s'adresse à un personnage en particulier : « Mon nom n'a pas d'importance, j'en ai porté tellement… Ce ne sont que des masques. » Puis : « Soit honnête avec toi-même, n'es-tu pas tenté par ma proposition ? Tu sais mieux que quiconque ce que je peux apporter, n'est-ce pas mon ami ? »"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Cette déclaration n'a aucun fondement réel — elle vise uniquement à instiller le poison de la division dans le groupe, qui continuera son œuvre dans l'aventure 4 (Tentative de corruption).",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Refuser la proposition",
          "blocs": [
            {
              "type": "vert",
              "contenu": "L'Homme en noir esquisse un sourire entendu. « Bien, vous êtes si prévisibles ! La même réponse que l'autre femme. » Il se lève et pose sur la table une petite boîte argentée. À l'intérieur, il y a autant de comprimés blancs que de PJ. « Si jamais votre vie devient un enfer, ce poison mortel vous offrira une porte de sortie rapide. Je ne peux à présent rien faire de plus pour vous, hélas ! » Puis il se dirige vers la sortie. « Surtout restez bien à l'abri des murs de votre labyrinthe, petits rats. » Il referme la porte et s'en va."
            },
            {
              "type": "neutre",
              "contenu": "Si un PJ tente de lui barrer le chemin, Nyarlathotep réapparaît derrière lui, comme si le temps s'était arrêté pour les PJ."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les PJ demandent de quelle femme il parle : « Vous le saurez bien assez tôt » avec un sourire narquois (il s'agit de Geneviève, dans une variante narrative).",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Accepter la proposition",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Nyarlathotep pose sur la table une petite boîte argentée. « Avalez ce comprimé. Il est le symbole de votre engagement pour un futur meilleur. » Si tous avalent : « Vous me surprenez. Vous êtes plus sages que je ne le croyais. Allez voir le docteur Morrow, dites-lui que le Pharaon noir vous envoie. Vous avez gagné votre place au Paradis. Ne tardez pas trop. »"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Le cachet est un poison : les PJ perdent 1d6 PV par jour (de leur valeur maximale). À 0, ils meurent — aucun remède, seule la congélation sur la glace noire peut stopper l'effet. Si tous acceptent, la campagne se termine ici (vie éternelle mais parodie d'humanité dans Nyarlapolis). Une variante 'doubler Nyarlathotep' est possible mais raccourcit sérieusement la campagne — voir les notes globales.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "Attaquer Nyarlathotep",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si un PJ l'attaque, l'Homme en noir ne fait aucun geste pour esquiver — l'impact le transforme en nuage de mouches noires qui se dispersent. Aux tours suivants, les mouches se précipitent sur le coupable et s'infiltrent dans ses poumons. 3 tests de CON difficulté 15 : échec = 2d6 PV, succès = 1d6 PV quand même. S'il meurt de cette façon, la difficulté passe à 15 et les mouches pondent des œufs qui dévorent son corps. Tout témoin : test de choc difficulté 10 (1 PC en cas d'échec).",
              "label": "🔵 Secret MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "L'Homme en noir",
          "desc": "Se manifeste physiquement. Propose un pacte mortel (glace noire = immortalité). Extrêmement dangereux si attaqué."
        }
      ]
    },
    {
      "id": "q3_e2",
      "label": "La fermeture du labyrinthe",
      "resume": "La maison est condamnée par Nyarlathotep. Elle se replie sur elle-même dès qu'un PJ tente de la quitter, les enfermant dans un labyrinthe entre les dimensions.",
      "chapitres": [
        {
          "titre": "La fermeture",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Un choc puissant secoue la structure de la bâtisse. Toutes les portes et les volets claquent en même temps et la lumière décline brusquement. Une ombre dégouline sur les murs comme une encre noire. Le sol tangue sous vos pieds et votre estomac chavire comme si vous chutiez dans le vide. L'éclairage électrique se rallume enfin pour disperser les ténèbres. Le souffle coupé, vous n'arrivez pas à réaliser ce qui a pu se produire. Plus aucune lumière ne filtre. Instinctivement votre regard se porte sur les fenêtres et vous constatez avec stupéfaction qu'une porte remplace chacune d'elle."
            },
            {
              "type": "vert",
              "contenu": "Quant à la porte d'entrée, elle n'existe plus. Un mur plein la remplace sur toute la largeur de la pièce."
            },
            {
              "type": "neutre",
              "contenu": "Nyarlathotep vient d'enfermer les personnages dans une prison entre les dimensions — un labyrinthe pour les rats, une expérience qu'il trouve amusante mais qui vise surtout à les empêcher de lui nuire."
            }
          ]
        },
        {
          "titre": "Le chat",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Le chat gris tacheté s'est fait enfermer avec les PJ. Il reste dans leurs pattes durant toute l'exploration — vous pouvez parfois vous en servir pour mettre les personnages sur une piste, sans en abuser."
            }
          ]
        },
        {
          "titre": "Robert Denod",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les PJ ont donné une clef à Robert Denod, c'est un cadeau empoisonné — il se retrouve lié à la maison oniriquement (comme Louise ou James Paterson), sans y être physiquement enfermé. Il supporte mal l'expérience : soit il meurt affreusement, soit il devient fou et se retourne contre les PJ. À leur retour dans le monde réel, ils apprendront sa mort — il s'est jeté de sa fenêtre à l'aube, l'iris de ses yeux mystérieusement noir d'encre.",
              "label": "🔵 Secret MJ"
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "q3_e3",
      "label": "Le labyrinthe et le mal noir",
      "resume": "La maison est à présent au centre d'un labyrinthe infini de couloirs et de pièces, provenant d'autres versions de la même bâtisse dans le multivers. Un mal noir corrompt inexorablement l'esprit de toute créature qui y évolue.",
      "chapitres": [
        {
          "titre": "Objectif des PJ",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Pour s'échapper, les PJ doivent utiliser les cinq clefs à tête de singe sur cinq portes cachées dans le labyrinthe afin d'ouvrir un portail vers Yog-Sothoth. Trois clefs sont déjà en possession des PJ depuis l'aventure 1 (boîte aux lettres, tiroir du hall, jeu de l'oie de Nellie dans la chambre de Louise). La quatrième est portée par James Paterson, la dernière est dans la peluche de Louise."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Objectif pour le MJ : installer une ambiance entre escape room et maison hantée, puis gérer l'accès aux indices via la progression du mal noir pour une pression croissante. L'aventure doit débuter lentement avec beaucoup de questions, puis s'accélérer de manière effrénée.",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "Le mal noir — jauge de corruption",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Écoulement du temps : pas de jour/nuit dans le labyrinthe — chaque journée est divisée en 3 périodes (2 d'activité, 1 de repos)."
            },
            {
              "type": "bleu",
              "contenu": "Jauge de corruption : les PJ débutent avec un nombre de points de corruption égal à leur nombre de points de folie (0 si aucun). Chaque période dans le labyrinthe (pas dans la maison) = +1 point de corruption (2 s'ils ne se nourrissent/reposent pas). Lorsque la jauge atteint la valeur de CON du PJ : test de choc difficulté 10. Réussite = jauge divisée par 2 (arrondi inf.). Échec = jauge réduite au score initial, mais le PJ passe au stade suivant du mal noir.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Les stades du mal noir",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "À chaque nouveau stade, une crise passagère plus violente survient — le MJ prend le contrôle du personnage un instant. Test d'INT (difficulté 10+5×stade) pour choisir de passer sa rage sur le mobilier plutôt qu'un compagnon."
            },
            {
              "type": "neutre",
              "contenu": "Stade 0 → 1 : hurle sur un compagnon ou cogne un mur/meuble.\nStade 1 : quelques veines noires apparaissent (avant-bras, cou).\nStade 1 → 2 : frappe un compagnon à mains nues ou casse un objet.\nStade 2 : davantage de veines noires, yeux injectés de sang. +1 attaque au contact, -1 aux autres scores d'attaque.\nStade 2 → 3 : attaque un compagnon avec une arme, défonce du mobilier/une porte.\nStade 3 : ongles noirs, langue et peau grisâtres, difficultés à parler. +2 FOR et DM au contact, -2 INT et CHA.\nStade 3 → 4 : devient un serviteur de Nyarlathotep pendant 1d6 minutes, attaque ses camarades (peut être raisonné). Perd 1 PC à la fin de la crise.\nStade 4 : yeux et langue partiellement noirs, taches noires sur les mains qui s'étendent. +2 attaque contact, -2 autres scores.\nStade 4 → 5 : le joueur perd le contrôle de son personnage.\nStade 5 : yeux et peau totalement noirs — devient un serviteur de Nyarlathotep. S'il est ramené hors de la maison repliée par ses camarades, il gagne 1 point de folie à la fin de l'aventure."
            },
            {
              "type": "bleu",
              "contenu": "Mourir dans le labyrinthe : à 0 PV, +1 point de corruption immédiat. Si le PJ meurt, son corps disparaît après 2d6 périodes — son exploration est terminée, il réapparaît à la fin de l'aventure avec 1 point de folie supplémentaire. La clef de Yog-Sothoth n'a que faire de sa mort, une autre version de lui est disponible ailleurs.",
              "label": "🔵 Règle spéciale"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Doser la pression : la méthode la plus simple est de faire passer la corruption à 2 points/période au moment choisi. La plus pernicieuse : réduire les rations disponibles. Vers la fin, vous pouvez accorder -2 à -5 points de corruption à chaque porte ouverte avec succès.",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "La Villa Paterson (le refuge)",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "La villa garde sa structure et le contenu de chaque pièce reste identique à l'aventure 1 — sauf que toutes les fenêtres sont devenues des portes (26 au total, donnant sur le labyrinthe)."
            },
            {
              "type": "neutre",
              "contenu": "Le hall d'entrée : deux portes remplacent les fenêtres de l'étage (à 3m de haut, inaccessibles). La porte d'entrée a disparu, remplacée par un mur recouvert de la même tapisserie."
            },
            {
              "type": "bleu",
              "contenu": "Si les PJ arrachent la tapisserie du hall : une fresque représentant cinq singes autour d'une porte marquée du symbole de Yog-Sothoth. S'ils n'y pensent pas, test de PER difficulté 20 (puis 18, 16...) pour remarquer des traces de griffes, jusqu'à ce que le chat arrache lui-même un morceau du papier peint.",
              "label": "🔵 Indice"
            },
            {
              "type": "neutre",
              "contenu": "Particularités de la vraie villa (par opposition aux copies du labyrinthe) : aucune créature n'y attaque les PJ (refuge sûr), pas de gain de corruption ici, seul lieu à géométrie euclidienne, les actions des PJ y sont persistantes (marques laissées), la nourriture ne se renouvelle pas, et certaines pièces sont les points de départ obligés pour trouver les cinq portes de sortie."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "q3_e4",
      "label": "Nellie Bly, prisonnière du labyrinthe",
      "resume": "Nellie Bly est réellement présente, physiquement, dans le labyrinthe — enfermée par le Pharaon noir depuis le 15 janvier alors que, pour elle, il ne s'est écoulé que quelques jours.",
      "chapitres": [
        {
          "titre": "Indice — la rubrique nécrologique",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Avant la rencontre, placez cet indice quelque part dans le labyrinthe : un exemplaire du New York Post daté du 28 janvier 1922 annonçant la mort de Nellie Bly d'une pneumonie (« Mme Elizabeth Cochrane Seaman, connue sous le nom de Nellie Bly, décédée hier matin à l'âge de 56 ans à l'hôpital Saint-Mark, où elle avait été transférée depuis sa chambre à l'hôtel McAlpin. La cérémonie funéraire aura lieu à l'église de l'Ascension. »). Aux PJ de décider s'ils lui révèlent cette nouvelle — une ligne temporelle alternative, mais elle sait que sa faiblesse respiratoire la prédispose à ce type de complication.",
              "label": "🔵 Indice"
            }
          ]
        },
        {
          "titre": "La rencontre",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Tu ouvres la porte et blam ! Une femme échevelée te percute de plein fouet."
            },
            {
              "type": "bleu",
              "contenu": "Test de FOR difficulté 15 pour ne pas être renversé et choir au sol avec Nellie dans les bras. Le templier de Nyarlathotep qui la pourchassait arrive juste après et engage le combat.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Une fois le combat terminé, Nellie remercie les PJ, reconnaît immédiatement les anciens patients de l'asile et raconte son histoire jusqu'au moment où elle a été enfermée par le Pharaon noir."
            }
          ]
        },
        {
          "titre": "L'histoire de Nellie",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Nellie est très surprise de rencontrer les PJ ici et leur demande la date. Le pharaon l'a enfermée le 15 janvier ; pour elle il ne s'est écoulé que quelques jours, alors que pour les PJ on est en avril ou mai — trois mois d'errance dans le labyrinthe qu'elle refuse d'admettre."
            },
            {
              "type": "neutre",
              "contenu": "Le templier gardait une version du hall d'entrée où la porte d'entrée existait encore, émettant un battement sonore comme un cœur géant. Nellie a tenté de s'approcher pour savoir si cette porte menait à la sortie, mais le templier l'a repérée et poursuivie."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les PJ tentent de retrouver ce lieu, ils perdent une période à errer sans succès. Nellie l'a trouvé par instinct en se fiant à son ouïe — elle a utilisé sans le savoir la bonne méthode pour trouver la porte liée à l'ouïe.",
              "label": "🔵 Indice"
            }
          ]
        },
        {
          "titre": "Jouer Nellie",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Nellie est une femme à la volonté indomptable, persuadée qu'il existe une solution pour sortir. Elle met toute son énergie au service des PJ et n'est pas la dernière à prendre sa part dans l'action — loin du cliché de la princesse à sauver."
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Nellie ne doit jamais trouver la solution à la place des joueurs — utilisez-la pour poser les bonnes questions qui les font avancer : « Combien avez-vous de clefs ? », « Quelle est la signification de ces clefs ? », « Pourquoi certaines pièces apparaissent plus souvent que d'autres ? », « Avons-nous fait quelque chose de différent pour trouver cette porte cette fois ? »",
              "label": "🔵 Conseil MJ"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Nellie Bly",
          "desc": "Prisonnière physique du labyrinthe depuis le 15 janvier. Volonté indomptable, aide activement les PJ sans jamais résoudre l'énigme à leur place."
        },
        {
          "nom": "Templier de Nyarlathotep",
          "desc": "Garde une version du hall d'entrée où la porte émet un battement de cœur. Poursuit Nellie."
        }
      ]
    }
  ],
  "notes_globales": "Cette aventure débute lorsque les PJ ont terminé leur enquête dans le monde réel ET dans les Contrées du rêve (autels marqués de leur sang). Le labyrinthe est une version vaste du labyrinthe des templiers de Nyarlathotep. Variante 'Doubler Nyarlathotep' : si les PJ acceptent la proposition avec l'idée de trahir au dernier moment, cela raccourcit la campagne en évinçant les 2 scénarios suivants — combat final impitoyable, et même en cas de victoire les PJ ne survivent que quelques heures (poison)."
},
  q4: {
  "title": "Extinction 23°N 0°W",
  "intro": "Libérés, les PJ constatent que Nyarlathotep s'est joué d'eux. Il est trop tard pour se rendre sur les lieux de la cérémonie, à l'autre bout de la planète. Stemfield se révèle alors à eux et leur offre une aide inattendue : un passage par un portail sous l'océan via l'Atlantide pour atteindre l'Afrique plus rapidement et arriver à temps pour empêcher la cérémonie. Un final explosif ! Niveau 7. Ambiance : Abyss, La momie, Indiana Jones.",
  "steps": [
    {
      "id": "q4_e1",
      "label": "Libres !",
      "resume": "Les PJ sont enfin libérés du labyrinthe. Mais ils réalisent avec effroi qu'ils ont perdu presque une année, et que la cérémonie d'invocation approche à l'autre bout du monde. Niveau 7. Ambiance : Abyss, La momie, Indiana Jones.",
      "chapitres": [
        {
          "titre": "Le destin de Nellie",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Nellie Bly est sortie de la Villa Paterson une semaine avant les PJ (le 8 janvier), seule, sans savoir ce qu'ils étaient devenus. Son insuffisance respiratoire s'est aggravée en grave pneumonie — incapable de voyager, elle s'est installée à l'hôtel McAlpin et a laissé un message aux PJ sur la table basse, sans grand espoir. C'est le docteur Stemfield qui a trouvé ce message et rendu visite à Nellie deux jours avant le retour des PJ.",
              "label": "🔵 Secret MJ"
            }
          ]
        },
        {
          "titre": "15 janvier 1922 — Villa Paterson",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Les PJ sont de retour dans la Villa Paterson le 15 janvier 1922. À l'intérieur, rien n'a bougé, à une exception près : Nellie a récupéré ses affaires. Ils ne peuvent s'empêcher de ressentir un sentiment d'oppression — difficile de supporter plus longtemps cet endroit où ils ont été prisonniers. Le seul indice est le message de Nellie."
            }
          ]
        },
        {
          "titre": "La date",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "À la gare d'Amityville, test de PER difficulté 15 : ceux qui réussissent aperçoivent la date sur le journal du vendeur — 15 janvier 1922. Ils comprennent qu'ils ont perdu presque une année dans le labyrinthe.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT difficulté 10 : ceux qui réussissent réalisent qu'il est matériellement impossible de rejoindre le Sahara en douze jours par des moyens conventionnels. Ils se rappellent l'avertissement de l'Homme en noir : « Refusez ma proposition et vous assisterez impuissants à la fin de votre monde. » Nyarlathotep avait tout prévu.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 10 pour tous les PJ suite à cette révélation (1 PC en cas d'échec).",
              "label": "🔵 Jet de dés"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Nellie Bly",
          "desc": "Sortie du labyrinthe une semaine avant les PJ. Gravement malade (pneumonie), installée à l'hôtel McAlpin."
        }
      ]
    },
    {
      "id": "q4_e2",
      "label": "L'hôtel McAlpin",
      "resume": "Retrouvailles avec Nellie Bly — et le grand retour surprise du docteur Stemfield, ancien Némésis de la première campagne, qui devient ici un allié inattendu.",
      "chapitres": [
        {
          "titre": "L'hôtel McAlpin",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "À son ouverture en 1912, l'hôtel McAlpin était le plus grand au monde : 25 étages, jusqu'à 2500 clients."
            },
            {
              "type": "bleu",
              "contenu": "À la réception : on répond que Mme Bly est souffrante et ne reçoit pas. Test de CHA difficulté 15 pour convaincre la réceptionniste d'appeler la chambre. Si les PJ donnent leurs vrais noms, l'employée les compare à un papier inséré dans le registre — ils sont attendus.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Le retour de Stemfield",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Au moment où vous suivez le jeune homme en livrée dans l'ascenseur, un homme de belle stature dans un costume chic se faufile entre les portes au dernier moment. Les étages défilent et vous êtes maintenant certains de l'avoir déjà vu, mais vous n'arrivez pas à vous rappeler où et quand. Lorsque les portes s'ouvrent enfin, il vous emboîte le pas d'une démarche légèrement claudicante."
            },
            {
              "type": "bleu",
              "contenu": "Test d'INT difficulté 15 : le PJ reconnaît le jardinier de la maison de Stemfield (Jeremiah Pick).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "« Bonjour. Je vous prie de pardonner mon intrusion, mais il est très important que je puisse m'entretenir avec vous et Mme Bly. Cela fait plusieurs jours que je guettais votre arrivée. À vrai dire vous êtes en retard, très en retard et la situation est urgente. Vous avez besoin de moi, alors entrons pour discuter si vous le voulez bien. Vous me connaissez sous le nom de Stemfield, docteur Melkior Stemfield. »"
            },
            {
              "type": "neutre",
              "contenu": "Les PJ font le rapprochement avec le jardinier devant la maison du rampant des angles et l'homme claudicant qui s'enfuyait après le flash-back de l'asile — la même personne, habitée par l'esprit du docteur."
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 10 (1 PC en cas d'échec) en réalisant que Stemfield n'est pas mort mais a pris possession d'un autre corps.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "Si les PJ font un esclandre, Stemfield congédie le groom et joue son va-tout en récitant de mémoire la lettre qu'il a envoyée pour les convoquer à la Villa Paterson (aventure 1) : « C'est moi qui ai écrit ce message. Depuis le début, je vous aide, je vous protège, je vous guide. Vous avez eu deux bonnes fées qui ont veillé sur vous en coulisses : d'abord Mme Bly et, après sa disparition, moi-même. » Stemfield est pragmatique — même si un PJ le frappe en souvenir du naufrage du Princess, il se contente d'un « fair enough » flegmatique."
            }
          ]
        },
        {
          "titre": "Retrouver Nellie",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Nellie est alitée, le visage pâle, les traits tirés, mais lorsqu'elle vous aperçoit, un sourire de joie éclaire sa physionomie. Elle pousse un immense soupir de soulagement. « Entrez, prenez des chaises, nous avons beaucoup à nous dire et peu de temps. Vous pouvez encore sauver le monde ! » Elle essaye de se lever, mais une quinte de toux la plie en deux. Finalement, elle reste assise sur le lit."
            },
            {
              "type": "neutre",
              "contenu": "Nellie explique qu'elle est ressortie seule de la Villa le 8 janvier — le temps semble avoir subi des distorsions dans le labyrinthe. Elle s'est installée à l'hôtel pour fuir ces murs maudits, désespérée et malade, croyant devoir assister impuissante à la fin du monde. Stemfield lui a rendu visite deux jours plus tôt et lui a assuré connaître un moyen de traverser l'Atlantique en un seul jour."
            }
          ]
        },
        {
          "titre": "L'article de Nellie",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "🔵 Aide de jeu — Vous pouvez donner l'aide de jeu G à vos joueurs. Elle correspond à l'article de presse montré par Nellie.",
              "label": "🔵 Aide de jeu"
            },
            {
              "type": "vert",
              "contenu": "« Première traversée du Sahara en automobile. Ce 5 novembre 1921, huit voitures Citroën sont parties pour Touggourt en Algérie en mission d'essai dans le but de préparer la traversée de Touggourt à Tombouctou en passant par l'inaccessible et mortel désert du Tanezrouft. La mission sera réalisée à bord de véhicules munis de chenilles Kégresse sous le commandement de Louis Audouin-Dubreuil. [...] Cinq de ces véhicules seront rapatriés en France, mais trois resteront à Touggourt afin de permettre au lieutenant Georges Estienne d'approvisionner les postes d'Ouargla, Inifel et In Salah. »"
            },
            {
              "type": "neutre",
              "contenu": "Nellie suggère aux PJ d'essayer de trouver Louis Audouin-Dubreuil ou Georges Estienne pour leur emprunter un véhicule."
            }
          ]
        },
        {
          "titre": "La proposition de Stemfield",
          "blocs": [
            {
              "type": "vert",
              "contenu": "« Comme vous le savez, j'ai des contacts étroits avec certaines entités anciennes qui peuplent les profondeurs sous-marines de notre monde, et ce depuis bien avant la première foulée de l'homme sur la terre ferme. Je ne suis pas un cultiste du grand Cthulhu, mais en tant qu'érudit je ne pouvais passer à côté de l'opportunité de collaborer avec des formes de vie dont le niveau de connaissance ridiculise celui de l'humanité. Sachez qu'il existe un réseau de portails sous-marins sous l'océan Atlantique. Très probablement via l'Atlantide, que d'aucuns appellent aussi la Lémurie perdue. Je peux vous y mener et vous donner les consignes pour ouvrir le passage vers la côte d'Alger. Je ne vous accompagnerai pas à travers les portails — le lieu est maudit et protégé. Vous partirez en bateau demain, du ponton derrière la Villa Paterson. Je vais vous confier de l'or, plus qu'il ne vous en faudra. »"
            },
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si les PJ insistent pour savoir pourquoi il ne les accompagne pas : « Le courage n'est pas ma qualité première et j'éprouve encore quelques difficultés à garder le contrôle de ce nouveau corps. Le portail déconnecte un court instant le corps et l'esprit de celui qui l'emprunte. Dans mon cas, je ne suis qu'un passager clandestin qui serait expulsé. »",
              "label": "🔵 Secret MJ"
            },
            {
              "type": "vert",
              "contenu": "Après le départ de Stemfield, ses derniers mots résonnent : « Faites de beaux rêves. »"
            },
            {
              "type": "neutre",
              "contenu": "Demandez dès à présent quel PJ porte la clef d'argent sur lui — cela met la pression pour la suite. Nellie leur offre une nuit à l'hôtel dans des chambres adjacentes à la sienne."
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Docteur Stemfield",
          "desc": "Ancien antagoniste, devenu allié inattendu. Guide vers le premier portail de l'Atlantide, ne peut pas accompagner les PJ à travers."
        }
      ]
    },
    {
      "id": "q4_e3",
      "label": "L'Atlantide",
      "resume": "Les PJ entreprennent un voyage fantastique à travers un réseau de portails sous-marins, via l'Atlantide engloutie, pour rejoindre l'Algérie en une fraction du temps normal.",
      "chapitres": [
        {
          "titre": "16 janvier — Départ",
          "blocs": [
            {
              "type": "neutre",
              "contenu": "Le trajet entre l'hôtel McAlpin et la Villa Paterson prend la matinée. Les PJ n'ont pas vraiment le temps de faire des emplettes."
            },
            {
              "type": "vert",
              "contenu": "Lorsque vous arrivez au ponton derrière la Villa Paterson, vous constatez qu'un bateau de pêche à voiles y est déjà amarré."
            },
            {
              "type": "bleu",
              "contenu": "[MJ — Version Pulp] Si vous préférez une ambiance plus Pulp, vous pouvez décider que ce voyage via l'Atlantide n'est pas onirique mais bien réel — une porte ouverte vers des aventures dans les profondeurs de l'océan.",
              "label": "🔵 Option de jeu"
            }
          ]
        },
        {
          "titre": "Le voyage",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Si un PJ possède la Voie des rêves, il bénéficie des bonus habituels (Influence) de façon secrète, sans révéler explicitement qu'il s'agit d'un voyage onirique. Pas de pool spécial de PC pour ce voyage — ce sont les PC habituels qui sont dépensés.",
              "label": "🔵 Règle spéciale"
            },
            {
              "type": "neutre",
              "contenu": "Votre rôle est de bien décrire le cadre irrationnel et horrifique de l'itinéraire et de faire monter la pression jusqu'au soulagement final sur le sable de l'Algérie."
            }
          ]
        }
      ],
      "pnj": []
    },
    {
      "id": "q4_e4",
      "label": "27 janvier 1922 — La cérémonie",
      "resume": "Le grand final de la campagne. Les PJ arrivent au Sahara, approximativement à 23°N 0°W, alors que l'éclipse solaire commence — le compte à rebours mortel est lancé.",
      "chapitres": [
        {
          "titre": "Objectif de la scène",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "[MJ SEULEMENT] Lisez bien une première fois toute la scène avant de la jouer, ayez tous les paramètres en tête. Assurez-vous que vos joueurs sont prêts. Le but : générer de la tension, de l'émotion, des sensations fortes. N'hésitez pas à envoyer un ou plusieurs PJ au tapis, notamment à la toute fin du compte à rebours. Il faut que ce soit difficile et épique — que les joueurs aient le sentiment d'avoir triomphé de l'impossible, d'avoir contrarié les plans d'un dieu.",
              "label": "🔵 Conseil MJ"
            }
          ]
        },
        {
          "titre": "Le plateau désertique",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Le soleil se lève sur un plateau désertique recouvert de sable, de roches et de ruines éparses. Des ouvrages bas, à moitié enterrés et des obélisques penchés, dont les pointes dépassent çà et là. Aussi loin que porte le regard, vous ne discernez aucune pyramide pentagonale. En revanche, l'énorme planète grise domine un peu plus l'horizon de sa présence incongrue, plus massive que la veille, comme le signe certain que vous touchez au but."
            },
            {
              "type": "neutre",
              "contenu": "Les personnages sont approximativement à 23°N 0°W sur leur carte, à dix ou vingt kilomètres près. Comme ils ne savent pas dans quelle direction la pyramide va apparaître, cela ne change rien à la suite — rien ne sert de partir à temps, il faudra courir."
            }
          ]
        },
        {
          "titre": "Les ruines",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "Test d'INT (linguiste ou archéologie) difficulté 15 : chaînon manquant entre l'écriture hiéroglyphique égyptienne et l'écriture tifinagh berbère. Second test d'INT difficulté 10 : ce sont des tombes. Difficulté 20 : ce sont aussi des portes vers un royaume souterrain maudit peuplé de goules et de ghasts — les anciens Aherraz gardent le monde des vivants même après leur mort.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "neutre",
              "contenu": "L'entrée de chaque tombeau est scellée par une dalle de pierre obstruée de sable — plusieurs heures seraient nécessaires pour la dégager, un temps que les PJ n'ont pas."
            }
          ]
        },
        {
          "titre": "L'éclipse",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Environ une heure après votre départ, une ombre noire apparaît à la droite du soleil. La lune a rendez-vous avec le soleil et elle ronge imperceptiblement le disque lumineux."
            },
            {
              "type": "neutre",
              "contenu": "Durée d'une éclipse solaire : totale 2 heures, éclipse complète 8 minutes. Test d'INT (astronomie) difficulté 15 pour connaître cette information."
            },
            {
              "type": "bleu",
              "contenu": "Une demi-heure plus tard, test de PER pour tous les PJ — le meilleur résultat repère la pyramide en premier.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "vert",
              "contenu": "Une forme scintille à l'horizon, d'abord un simple point puis une silhouette se déploie et ondule tel un mirage dans le désert, avant de s'ancrer dans le réel. Durant un instant, vous doutez : dans vos souvenirs, la majestueuse pyramide était bien plus massive. Puis l'horrible vérité vous frappe avec la puissance du simoun : vous êtes beaucoup trop loin ! Si vous voulez l'atteindre avant la fin de l'éclipse, il va falloir faire vite, très vite."
            },
            {
              "type": "neutre",
              "contenu": "Distance : environ 15 km en véhicule (ou à dos de dromadaire, 40km/h pendant 1h max), 7-8 km à pied."
            }
          ]
        },
        {
          "titre": "La course contre la montre",
          "blocs": [
            {
              "type": "bleu",
              "contenu": "En véhicule : test de DEX (pilotage) difficulté 10. Échec = dépression sableuse qui s'effondre (tombeau souterrain), 1d4 DM par test de DEX raté, PJ à pied pour la suite (mitrailleuse trop lourde à emporter).",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "À dos de dromadaire : test de DEX (cavalier) difficulté 15. Échec = l'animal s'écroule à bout de forces, le PJ finit à pied.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "À pied : test de CON (endurance) difficulté 15. Échec = 1d6 PV perdus.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "L'apparition d'Azathoth",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Vous n'avez qu'une obsession : arriver à temps. Vous mobilisez toute votre volonté, mais également les souvenirs et les souffrances de ces derniers mois pour forcer vos jambes à avancer. Malgré cela, la lune gagne du terrain sur le soleil plus rapidement que vous n'avalez la distance qui vous sépare de la pyramide. Vous n'êtes plus qu'à quelques centaines de mètres, lorsque l'astre de la nuit occulte complètement le disque solaire, recouvrant le désert d'un voile d'ombre, annonciateur de fin du monde."
            },
            {
              "type": "vert",
              "contenu": "Soudain, un triangle de pure énergie éclaire le sommet de la pyramide et un rayon crépitant s'élance vers le ciel. Les cieux reculent et s'ouvrent, comme si la voûte céleste n'était qu'un tissu fragile désormais légèrement déchiré. De l'autre côté, vous entrevoyez quelque chose que vous ne sauriez nommer, une dimension au-delà de l'espace. Tentaculaire, boursouflée, grande comme une planète, qui pulse de façon indicible au rythme de tambours invisibles. La cérémonie a commencé…"
            },
            {
              "type": "bleu",
              "contenu": "Test de choc difficulté 15 pour chaque PJ (1 PC en cas d'échec). On ne contemple pas impunément Azathoth, même partiellement ! À partir de ce moment, il reste environ 8 minutes pour sauver le monde.",
              "label": "🔵 Jet de dés"
            }
          ]
        },
        {
          "titre": "Les esclaves — le périmètre défensif",
          "blocs": [
            {
              "type": "vert",
              "contenu": "Arrachant votre regard de l'indicible spectacle, vous constatez avec stupeur que, sous la lumière contre-nature qui baigne les lieux, vous n'êtes pas seuls. Une troupe hétéroclite et débraillée de plusieurs centaines d'hommes et de femmes encercle la pyramide et avance dans votre direction d'un pas raide. Un mélange improbable d'individus de toutes conditions, certains en vêtements de ville, d'autres portant les restes dépareillés de vêtements de contention typiques des établissements hospitaliers."
            },
            {
              "type": "neutre",
              "contenu": "Les anciens patients des asiles du monde entier ont été invoqués dans les Contrées du rêve pour défendre la pyramide, une fois cette dernière basculée dans le monde réel. Tous sont contrôlés à distance par Iaret, retranchée dans le sanctuaire au cœur de la pyramide."
            },
            {
              "type": "bleu",
              "contenu": "En véhicule — test de DEX (pilotage) pour forcer le passage : échec critique = véhicule retourné (test DEX difficulté 10 ou 1d4 DM, finir à pied) ; <10 = 3 aliénés/PJ (3 tests de FOR difficulté 10) ; 10+ = 2 aliénés/PJ ; 15+ = 1 aliéné/PJ ; 20+ = aucun ne s'accroche. Un PJ qui rate un test de FOR tombe du véhicule (1d6 DM) et doit continuer à pied.",
              "label": "🔵 Jet de dés"
            },
            {
              "type": "bleu",
              "contenu": "Mitrailleuse d'aviation : si la voiture de tête ouvre le feu pour dégager le chemin, 2 aliénés de moins attaquent chaque PJ par véhicule.",
              "label": "🔵 Tactique"
            }
          ]
        }
      ],
      "pnj": [
        {
          "nom": "Iaret",
          "desc": "Retranchée dans le sanctuaire au cœur de la pyramide. Contrôle à distance la horde d'aliénés qui défend le périmètre."
        },
        {
          "nom": "Les aliénés possédés",
          "desc": "Anciens patients d'asiles du monde entier, invoqués pour former un rempart humain autour de la pyramide."
        }
      ]
    }
  ],
  "notes_globales": "Ce scénario apprend aux joueurs que dans les aventures du Mythe de Cthulhu, face à de puissants adversaires, on ne se bat généralement pas — on négocie, ou le plus souvent on fuit. Le grand final (la cérémonie) doit être lu intégralement avant d'être joué, avec tous les paramètres en tête. Le compte à rebours de 8 minutes après l'apparition d'Azathoth est le climax de toute la campagne — n'hésitez pas à mettre les PJ à rude épreuve."
}
}
