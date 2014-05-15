'use strict';

angular.module('dysonKrefelWebApp')
    .config(['$translateProvider', function ($translateProvider) {

        $translateProvider
            .translations('en-GB', {

                MENU:
                {
                    CYLINDER: 'Cylinders',
                    CORDLESS: 'Cordless',
                    HANDHELD: 'Handhelds',
                    FANS_HEATERS: 'Fans & heaters'
                },
                SHARED:
                {
                    SELECT_VACUUM: 'Select vacuum',
                    SELECT_FAN: 'Select a fan',

                    INCLUDED_BOX: 'This machine also comes with',

                    SHOP_NOW: 'Shop now',

                    VIEW_ALL: 'View all',

                    HYGENIC_BIN_TITLE: 'Hygenic bin emptying',
                    EXTRA_TOOLS_TITLE: 'Extra tools',
                    NO_EXTRA_COSTS_TITLE: 'No extra costs',
                    TWO_GUARANTEE_TITLE: '2 year guarantee',
                    FIVE_GUARANTEE_TITLE: '5 year guarantee',

                    HYGENIC_BIN_TEXT: 'Just press the button to release the dirt – quickly and hygienically.',
                    EXTRA_TOOLS_TEXT: 'Dyson-engineered tools to remove dust and dirt from awkward places.',
                    NO_EXTRA_COSTS_TEXT: 'Dyson vacuums don\'t use bags and have lifetime washable filters - so no extra costs.',

                    CREVICE_TOOL: 'Crevice tool',
                    COMBINATION_TOOL: 'Combination tool',
                    TFT_TOOL: 'Tangle-free turbine tool',
                    MOTORISED_TOOL: 'Mini motorised tool',
                    STAIR_TOOL: 'Stair tool',
                    MATTRESS_TOOL: 'Mattress tool',
                    HARD_TOOL: 'Articulating hard floor tool',
                    STUBBORN_TOOL: 'Stubborn dirt brush',
                    UPTOP_TOOL: 'Up top tool'

                },
                INDEX:
                {
                    DC62_CAROUSEL_HEADLINE: 'Sucks up as much dust as even a corded vacuum.',
                    DC62_CAROUSEL_BUTTON: 'Learn more',

                    AIR_MULTIPLIER_HEADLINE: 'Niew. Krachtige luchstroom. Nu tot 75% stiller.',

                    CYLINDER_TITLE: 'Cylinder',
                    CORDLESS_TITLE: 'Cordless',
                    HANDHELD_TITLE: 'Handhelds',
                    FANS_HEATERS_TITLE: 'Fans & heaters',

                    CYLINDER_TEXT: 'Remove dust from all floors, and follow you around the home with greater control.',
                    CORDLESS_TEXT: 'A new way to clean. Balanced for easy floor to ceiling cordless cleaning.',
                    HANDHELD_TEXT: 'Portable Dyson power for quick clean-ups around the home and car.',
                    FANS_HEATERS_TEXT: 'No blades - just an uninterrupted stream of smooth hot or cool air.',

                    CYLINDER_BUTTON: 'All cylinders',
                    CORDLESS_BUTTON: 'All cordless',
                    HANDHELD_BUTTON: 'All handhelds',
                    FANS_HEATERS_BUTTON: 'All fans & heaters',

                    MISSION_HEADER: 'Our mission is simple. We solve the problems others seem to ignore.',

                    MORE_THAN_MACHINE_HEADER: 'More than just a machine',

                    BALL_TECH_TITLE: 'Latest Ball™ technology',
                    CYCLONE_TITLE: 'Root Cyclone™ technology',
                    MULTIPLIER_TITLE: 'Air Multiplier™ technology',

                    BALL_TECH_TEXT: 'All of the vacuum\'s key components are housed within the ball itself, including the electronics, the motor, filter and power cable. This creates a low centre of gravity and provides stability allow it to follow you effortlessly around the home, without the awkward moves.',
                    CYCLONE_TEXT: 'Capturing more microscopic dust than any other vaccum. The Arrangment of the inner cyclones in a radial formation means airflow can be channelled directly onto the ball. This improves flow efficiency, preserving air pressure and maximising suction.',
                    MULTIPLIER_TEXT: 'Dyson fans and heaters are safe and produce an uninterrupted stream of smooth air. Drawn in by an energy efficient, brushless motor. A combination of the technologies used in turbochargers and jet engines generates powerful airflow.'
                },
                HANDHELD:
                {
                    HERO_HEADLINE: 'The highest suction of any handheld',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'DC34 Origin',
                    PRODUCT_1_PRICE: '€279',
                    PRODUCT_1_TAGLINE: '15 minutes of high powerful suction that doesn’t fade.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_de_table/dc_34_aspirateur_a_main/PKEY_A2_B349_C365_365171',

                    PRODUCT_2_NAME: 'DC34 Animal',
                    PRODUCT_2_PRICE: '€379',
                    PRODUCT_2_TAGLINE: '2 15 minutes of high powerful suction that doesn’t fade.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_de_table/dc_34_animal_pro/PKEY_A2_B349_C365_365155',

                    ALL_DYSONS_HAVE: 'All Dyson handheld vacuums have',

                    TWO_GUARANTEE_TEXT: 'All new Dyson handheld vacuums come with a free 2 year parts and labour guarantee.'

                },
                CORDLESS:
                {
                    HERO_HEADLINE: 'Sucks up as much dust as even a corded vacuum.',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'DC62 Animal Pro',
                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc62_animalpro/PKEY_A2_B349_C355_355055',

                    PRODUCT_2_NAME: 'DC62 Up Top',
                    PRODUCT_2_PRICE: '€379',
                    PRODUCT_2_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc62_up_top/PKEY_A2_B349_C355_355058',

                    PRODUCT_3_NAME: 'DC45 Animal Pro',
                    PRODUCT_3_PRICE: '€359',
                    PRODUCT_3_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',
                    PRODUCT_3_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc_45_animal_pro/PKEY_A2_B349_C355_355046',

                    PRODUCT_4_NAME: 'DC35 Multifloor',
                    PRODUCT_4_PRICE: '€329',
                    PRODUCT_4_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',
                    PRODUCT_4_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc35_multi_floor_slim/PKEY_A2_B349_C355_355033',

                    ALL_DYSONS_HAVE: 'All Dyson cordless vacuums have',

                    TWO_GUARANTEE_TEXT: 'All new Dyson fans & heaters come with a free 2 year parts and labour guarantee.'

                },
                CYLINDER:
                {
                    HERO_HEADLINE_1: 'The only vacuum with',
                    HERO_HEADLINE_2: 'No maintenance of filters No bags to buy and',
                    HERO_HEADLINE_3: 'No loss of suction',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'DC52 Animal Complete',
                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc_52_animal/PKEY_A2_B349_C349_349076',

                    PRODUCT_2_NAME: 'DC52 Allergy Musclehead Parquet',
                    PRODUCT_2_PRICE: '€3',
                    PRODUCT_2_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_de_table/dc_34_animal_pro/PKEY_A2_B349_C365_365155',

                    PRODUCT_3_NAME: 'DC52 Allergy Musclehead',
                    PRODUCT_3_PRICE: '€379',
                    PRODUCT_3_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_3_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc52_allergy_musclehead/PKEY_A2_B349_C349_349074',

                    PRODUCT_4_NAME: 'DC33c Allergy',
                    PRODUCT_4_PRICE: '€379',
                    PRODUCT_4_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_4_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc33c_allergy/PKEY_A2_B349_C349_349073',

                    PRODUCT_5_NAME: 'DC33c Origin Plus',
                    PRODUCT_5_PRICE: '€379',
                    PRODUCT_5_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_5_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc33c_origin_plus/PKEY_A2_B349_C349_349072',

                    PRODUCT_6_NAME: 'DC33 Musclehead',
                    PRODUCT_6_PRICE: '€379',
                    PRODUCT_6_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_6_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc33_musclehead/PKEY_A2_B349_C349_349082',


                    
                    ALL_DYSONS_HAVE: 'All Dyson cylinder vacuums have',

                    FIVE_GUARANTEE_TEXT: 'All new Dyson cylinder vacuums come with a free 5 year parts and labour guarantee.'

                },
                FANS:
                {
                    HERO_HEADLINE: 'Fast, even room heating. High velocity air to cool.',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'AM05 Iron/Blue',
                    PRODUCT_1_PRICE: '€179',
                    PRODUCT_1_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_1_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_2_NAME: 'AM05 Black/Nickel',
                    PRODUCT_2_PRICE: '€279',
                    PRODUCT_2_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_2_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_3_NAME: 'AM05 White/Silver',
                    PRODUCT_3_PRICE: '€379',
                    PRODUCT_3_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_3_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_4_NAME: 'AM06 White/Silver',
                    PRODUCT_4_PRICE: '€479',
                    PRODUCT_4_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_4_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_5_NAME: 'AM07 Black/Nickel',
                    PRODUCT_5_PRICE: '€579',
                    PRODUCT_5_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_5_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_6_NAME: 'AM08 White/Silver',
                    PRODUCT_6_PRICE: '€679',
                    PRODUCT_6_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_6_EXTRA: 'Heating and cooling fan - iron/blue.',

                    ALL_DYSONS_HAVE: 'All Dyson fans & heaters have',

                    SAFE_TITLE: 'Safe',
                    SAFE_TEXT: 'Dyson fans & heaters have no blades or visible heating elements.',

                    TILT_TITLE: 'Touch tilt',
                    TILT_TEXT: 'Dyson fans aren\'t top-heavy like some other fans, pivot on their own centre of gravity.',

                    CLEAN_TITLE: 'Easy to clean',
                    CLEAN_TEXT: 'Unlike many conventional fans Dyson fans & heaters have no grille, so they\'re easy to clean',

                    TWO_GUARANTEE_TEXT: 'All new Dyson fans & heaters come with a free 2 year parts and labour guarantee.'
                }
            })
            .translations('fr-BE', {

                MENU:
                {
                    CYLINDER: 'Aspirateurs',
                    CORDLESS: 'Aspirateurs sans fil',
                    HANDHELD: 'Aspirateurs à main',
                    FANS_HEATERS: 'Ventilateurs'
                },
                SHARED:
                {
                    SELECT_VACUUM: 'Sélectionnez un aspirateur',
                    SELECT_FAN: 'Sélectionnez un ventilateur',

                    INCLUDED_BOX: 'Aussi inclus',

                    SHOP_NOW: 'Acheter maintenant',

                    VIEW_ALL: 'Voir tous',

                    HYGENIC_BIN_TITLE: 'Vidage hygiénique du collecteur',
                    EXTRA_TOOLS_TITLE: 'Accessoires supplémentaires',
                    NO_EXTRA_COSTS_TITLE: 'Pas de dépenses supplémentaires',
                    TWO_GUARANTEE_TITLE: 'Garantie 2 ans',
                    FIVE_GUARANTEE_TITLE: 'Garantie 5 ans',

                    HYGENIC_BIN_TEXT: 'Il suffit de presser un bouton pour vider la poussière - rapidement et hygiéniquement',
                    EXTRA_TOOLS_TEXT: 'Accessoires de nettoyage conçus par Dyson pour éliminer la poussière et la saleté dans les endroits difficiles d’accés',
                    NO_EXTRA_COSTS_TEXT: 'Les aspirateurs de Dyson n’usagent pas de sacs et ont des filtres permanents lavables',

                    CREVICE_TOOL: 'Brosse passe-partout',
                    COMBINATION_TOOL: 'Accessoire combiné',
                    TFT_TOOL: 'Tangle-free turbine',
                    MOTORISED_TOOL: 'Mini brosse motorisée',
                    STAIR_TOOL: 'Petit suceur',
                    MATTRESS_TOOL: 'Brosse matelas',
                    HARD_TOOL: 'Brosse sols durs articulée',
                    STUBBORN_TOOL: 'Brosse rigide'

                },
                INDEX:
                {
                    DC62_CAROUSEL_HEADLINE: 'Aspire autant de poussière qu’un aspirateur avec fil.',
                    DC62_CAROUSEL_BUTTON: 'En savoir plus',

                    AIR_MULTIPLIER_HEADLINE: 'Nouveau. Un flux d’air puissant. Désormais jusqu’à 75% plus silencieux.',

                    CYLINDER_TITLE: 'Aspirateurs',
                    CORDLESS_TITLE: 'Aspirateurs sans fil',
                    HANDHELD_TITLE: 'Aspirateurs à main',
                    FANS_HEATERS_TITLE: 'Ventilateurs',

                    CYLINDER_TEXT: 'Enlève la poussière de tous les sols et vous suit dans toute la maison avec plus de contrôle.',
                    CORDLESS_TEXT: 'Une nouvelle manière pour nettoyer. Equilibré pour un nettoyage facile du sol au plafond.',
                    HANDHELD_TEXT: 'Puissance portable de Dyson pour nettoyages rapides autour de la maison et la voiture.',
                    FANS_HEATERS_TEXT: 'Pas de pales - seulement un flux d’air continu d’air chaud ou froid.',

                    CYLINDER_BUTTON: 'Tous les aspirateurs',
                    CORDLESS_BUTTON: 'Tous les aspirateurs sans fil',
                    HANDHELD_BUTTON: 'Tous les aspirateurs à main',
                    FANS_HEATERS_BUTTON: 'Tous les ventilateurs et chauffages',

                    MISSION_HEADER: 'Notre mission est simple. Nous résolvons les problèmes que d’autres semblent ignorer.',

                    MORE_THAN_MACHINE_HEADER: 'Plus qu’une simple machine',

                    BALL_TECH_TITLE: 'Nouveau technologie Ball™',
                    CYCLONE_TITLE: 'Technologie Root Cyclone™',
                    MULTIPLIER_TITLE: 'Technologie Air Multiplier™',

                    BALL_TECH_TEXT: 'Les principaux éléments de l’aspirateur se trouvent dans la boule, y compris l’électronique, le moteur, le filtre et le cordon. Cela crée un centre de gravité bas et assure la stabilité, de sorte que l’aspirateur parvienne facilement à vous suivre dans la maison sans les manoeuvres difficiles.',
                    CYCLONE_TEXT: 'Capture plus de poussières microscopiques qu’aucun autre aspirateur. La disposition des cyclones internes dans une formation radial cause que le flux d’air peut être canalisé vers la boule. Ceci améliore l’efficacité en préservant la pression d’air et en maximisant l’aspiration.',
                    MULTIPLIER_TEXT: 'Les ventilateurs Dyson Air Multiplier™ sont sans danger et produisent un flux d’air continu.  L’air est aspiré par un moteur efficace et sans brosse. Cette combinaison de technologies utilisées dans les turbocompresseurs et les moteurs à réaction produit un flux d’air puissant.'
                },
                HANDHELD:
                {
                    HERO_HEADLINE: 'La plus haute puissance d’aspiration de tous les aspirateurs à main',
                    HERO_BUTTON: 'En savoir plus',

                    PRODUCT_1_NAME: 'DC34',
                    PRODUCT_1_PRICE: '199,98 €',
                    PRODUCT_1_TAGLINE: 'Motoeur numérique de Dyson pour une aspiration à main puissante.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_de_table/dc_34_aspirateur_a_main/PKEY_A2_B349_C365_365171',

                    PRODUCT_2_NAME: 'DC34 Animal',
                    PRODUCT_2_PRICE: '249,98 €',
                    PRODUCT_2_TAGLINE: 'Motoeur numérique de Dyson pour une aspiration à main puissante.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_de_table/dc_34_animal_pro/PKEY_A2_B349_C365_365155',

                    ALL_DYSONS_HAVE: 'Tous les aspirateurs à main de Dyson ont les caractéristiques suivantes',

                    TWO_GUARANTEE_TEXT: 'Tous les aspirateurs sans fil de Dyson sont garantis 2 ans - sur pièces.'
                },
                CORDLESS:
                {
                    HERO_HEADLINE: 'Aspire autant de poussiè qu’un grand aspirateur',
                    HERO_BUTTON: 'En savoir plus',

                    PRODUCT_1_NAME: 'DC62 Animal Pro',
                    PRODUCT_1_PRICE: '429,98 €',
                    PRODUCT_1_TAGLINE: 'L’aspirateur sans fil le plus puissant. Avec une mini brosse motorisée pour les tâches difficiles.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc62_animalpro/PKEY_A2_B349_C355_355055',

                    PRODUCT_2_NAME: 'DC62 Up Top',
                    PRODUCT_2_PRICE: '379,00 €',
                    PRODUCT_2_TAGLINE: 'L’aspirateur sans fil le plus puissant. Avec brosse pour surfaces en hauteur.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc62_up_top/PKEY_A2_B349_C355_355058',

                    PRODUCT_3_NAME: 'DC45 Animal Pro',
                    PRODUCT_3_PRICE: '379,00 €',
                    PRODUCT_3_TAGLINE: 'Conçcus pour les tâches difficles. Enlève les poils d’animaux et les poussieres incrustée.',
                    PRODUCT_3_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc_45_animal_pro/PKEY_A2_B349_C355_355046',

                    PRODUCT_4_NAME: 'DC35 Multifloor',
                    PRODUCT_4_PRICE: '253,00 €',
                    PRODUCT_4_TAGLINE: 'Equilibr&233; pour un nettoyage du sol au plafond.',
                    PRODUCT_4_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_balai/dc35_multi_floor_slim/PKEY_A2_B349_C355_355033',

                    ALL_DYSONS_HAVE: 'Tous les aspirateurs sans fil de Dyson ont les caractéristiques suivantes',

                    TWO_GUARANTEE_TEXT: 'Tous les aspirateurs sans fil de Dyson sont garantis 2 ans - sur pièces.'

                },
                CYLINDER:
                {
                    HERO_HEADLINE_1: 'Le seul aspirateur',
                    HERO_HEADLINE_2: 'Sans filtre à nettoyer Sans sac à changer et',
                    HERO_HEADLINE_3: 'Sans perte d’aspiration',
                    HERO_HEADLINE_WIDTH: '260',
                    HERO_BUTTON: 'En savoir plus',

                    PRODUCT_1_NAME: 'DC52 Animal Complete',
                    PRODUCT_1_PRICE: '569,98 €',
                    PRODUCT_1_TAGLINE: 'Conçu pour les tâches difficiles. Capture la poussière et la saleté.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc_52_animal/PKEY_A2_B349_C349_349076',

                    PRODUCT_2_NAME: 'DC52 Allergy Musclehead Parquet',
                    PRODUCT_2_PRICE: '499,98 €',
                    PRODUCT_2_TAGLINE: 'Pour les personnes souffrant d’allergies. S’auto-ajuste sur tous les types de sols.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc52_allergy_musclehead/PKEY_A2_B349_C349_349075',

                    PRODUCT_3_NAME: 'DC52 Allergy Musclehead',
                    PRODUCT_3_PRICE: '499,98 €',
                    PRODUCT_3_TAGLINE: 'Pour les personnes souffrant d’allergies. S’auto-ajuste sur tous les types de sols.',
                    PRODUCT_3_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc52_allergy_musclehead/PKEY_A2_B349_C349_349074',

                    PRODUCT_4_NAME: 'DC33c Allergy',
                    PRODUCT_4_PRICE: '329,00 €',
                    PRODUCT_4_TAGLINE: 'Pour les personnes souffrant d’allergies.',
                    PRODUCT_4_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc33c_allergy/PKEY_A2_B349_C349_349073',

                    PRODUCT_5_NAME: 'DC33c Origin Plus',
                    PRODUCT_5_PRICE: '349,98 €',
                    PRODUCT_5_TAGLINE: 'Conçu pour un ramassage élevé de la poussière et de la saleté. Avec brosse matelas.',
                    PRODUCT_5_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc33c_origin_plus/PKEY_A2_B349_C349_349072',

                    PRODUCT_6_NAME: 'DC33c Musclehead',
                    PRODUCT_6_PRICE: '369,98 €',
                    PRODUCT_6_TAGLINE: 'Conçu pour un ramassage élevé de la poussière et de la saleté. S’auto-ajuste sur tous les types de sols.',
                    PRODUCT_6_SHOP: 'http://www.krefel.be/fr/petit_%C3%A9lectro/aspirer-nettoyer/aspirateur_tra%C3%AEneau_sans_sac/dc33_musclehead/PKEY_A2_B349_C349_349082',
                    
                    ALL_DYSONS_HAVE: 'Tous les aspirateurs de Dyson ont les caractéristiques suivantes',

                    FIVE_GUARANTEE_TEXT: 'Tous les aspirateurs Dyson sont garantis gratuitement 5 ans - sur pièces et main d’oeuvre.'

                },
                FANS:
                {
                    HERO_HEADLINE: 'Chauffage rapide et homogène de la pièce. Rafraîchissement de l’air à haute vitesse.',
                    HERO_BUTTON: 'En savoir plus',

                    PRODUCT_1_NAME: 'AM05 Bleu/Argent',
                    PRODUCT_1_PRICE: '379,00 €',
                    PRODUCT_1_TAGLINE: 'Chauffage rapide et homogène de la pièce. Rafraîchissement de l’air à haute vitesse.',

                    PRODUCT_2_NAME: 'AM05 Noir/Nickel',
                    PRODUCT_2_PRICE: '379,00 €',
                    PRODUCT_2_TAGLINE: 'Chauffage rapide et homogène de la pièce. Rafraîchissement de l’air à haute vitesse.',

                    PRODUCT_3_NAME: 'AM05 Blanc/Argent',
                    PRODUCT_3_PRICE: '379,00 €',
                    PRODUCT_3_TAGLINE: 'Chauffage rapide et homogène de la pièce. Rafraîchissement de l’air à haute vitesse.',

                    PRODUCT_4_NAME: 'AM06 Blanc/Argent',
                    PRODUCT_4_PRICE: '329,98 €',
                    PRODUCT_4_TAGLINE: 'Nouveau. Un flux d’air puissant. Désormais 75% plus silencieux.',

                    PRODUCT_5_NAME: 'AM07 Noir/Nickel',
                    PRODUCT_5_PRICE: '429,98 €',
                    PRODUCT_5_TAGLINE: 'Nouveau. Un flux d’air puissant. Désormais 60% plus silencieux.',

                    PRODUCT_6_NAME: 'AM08 Blanc/Argent',
                    PRODUCT_6_PRICE: '429,98 €',
                    PRODUCT_6_TAGLINE: 'Nouveau. Un flux d’air puissant. Désormais 35% plus silencieux.',

                    PRODUCT_1_EXTRA: 'Ventilateur pour chauffage et rafraîchissement - Bleu/Argent',
                    PRODUCT_2_EXTRA: 'Ventilateur pour chauffage et rafraîchissement - Noir/Nickel',
                    PRODUCT_3_EXTRA: 'Ventilateur pour chauffage et rafraîchissement - Blanc/Argent',
                    PRODUCT_4_EXTRA: 'Ventilateur pour rafraîchissement - Blanc/Argent',
                    PRODUCT_5_EXTRA: 'Ventilateur pour rafraîchissement - Noir/Nickel',
                    PRODUCT_6_EXTRA: 'Ventilateur pour rafraîchissement - Blanc/Argent',

                    ALL_DYSONS_HAVE: 'Tous les ventilateurs & chauffages de Dyson ont les caractéristiques suivantes',

                    SAFE_TITLE: 'Sans danger',
                    SAFE_TEXT: 'Les ventilateurs et chauffages de Dyson ont pas de pales ou d’éléments chauffants visibles',

                    TILT_TITLE: 'Incliner',
                    TILT_TEXT: 'Les ventilateurs Dyson ne sont pas lourds comme certains d’autres ventilateurs. Les ventilateurs Dyson pivotent sur son propre centre de gravité.',

                    CLEAN_TITLE: 'Facile à nettoyer',
                    CLEAN_TEXT: 'Contrairement aux ventilateurs conventionnels, les ventilateurs et chauffages de Dyson ont pas de grilles, donc ils sont facile à nettoyer.',

                    TWO_GUARANTEE_TEXT: 'Tous les ventilateurs et chauffages de Dyson sont garantis 2 ans - sur pièces.'
                }
            })
            .translations('nl-BE', {

                MENU:
                {
                    CYLINDER: 'Sledestofzuigers',
                    CORDLESS: 'Snoerloze stofzuigers',
                    HANDHELD: 'Kruimelzuigers',
                    FANS_HEATERS: 'Ventilatortechnologie'
                },
                SHARED:
                {
                    SELECT_VACUUM: 'Selecteer een stofzuiger',
                    SELECT_FAN: 'Selecteer een ventilator',

                    INCLUDED_BOX: 'Deze machine heeft ook',

                    VIEW_ALL: 'Bekijk alle',

                    SHOP_NOW: 'Nu kopen',

                    HYGENIC_BIN_TITLE: 'Hygiënisch legen van het stofreservoir',
                    EXTRA_TOOLS_TITLE: 'Extra hulpstukken',
                    NO_EXTRA_COSTS_TITLE: 'Geen bijkomende kosten',
                    TWO_GUARANTEE_TITLE: '2 jaar garantie',
                    FIVE_GUARANTEE_TITLE: '5 jaar garantie',

                    HYGENIC_BIN_TEXT: 'Druk op de knop om het vuil te verwijderen - snel en hygiënisch.',
                    EXTRA_TOOLS_TEXT: 'Door Dyson ontworpen hulpstukken om stof en vuil van lastige plekken te verwijderen.',
                    NO_EXTRA_COSTS_TEXT: 'Dyson stofzuigers gebruiken geen zakken en hebben levenslange wasbare filters.',

                    CREVICE_TOOL: 'Kierenzuiger',
                    COMBINATION_TOOL: 'Combinatie-accessoire',
                    TFT_TOOL: 'Tangle-free turbine',
                    MOTORISED_TOOL: 'Gemotoriseerde miniborstel',
                    STAIR_TOOL: 'Trapzuigmond',
                    MATTRESS_TOOL: 'Matrasborstel',
                    HARD_TOOL: 'Flexibele parketborstel',
                    STUBBORN_TOOL: 'Borstel voor hardnekkig vuil'

                },
                INDEX:
                {
                    DC62_CAROUSEL_HEADLINE: 'Zuigt net zo veel stof op als een grote stofzuiger',
                    DC62_CAROUSEL_BUTTON: 'Meer informatie',

                    AIR_MULTIPLIER_HEADLINE: 'Niew. Krachtige luchstroom. Nu tot 75% stiller.',

                    CYLINDER_TITLE: 'Sledestofzuigers',
                    CORDLESS_TITLE: 'Snoerloze stofzuigers',
                    HANDHELD_TITLE: 'Kruimelzuigers',
                    FANS_HEATERS_TITLE: 'Ventilatortechnologie',

                    CYLINDER_TEXT: 'Verwijderen stof van alle vloeren en volgen u door het hele huis met betere controle.',
                    CORDLESS_TEXT: 'Een nieuwe manier van schoonmaken. In balans om eenvoudig snoerloos schoon te maken van vloer tot plafond.',
                    HANDHELD_TEXT: 'Draagbare Dyson kracht voor snelle schoonmaakklusjes in huis en auto.',
                    FANS_HEATERS_TEXT: 'Geen bladen - enkel een onafgebroken stroom gladde warme of koele lucht',

                    CYLINDER_BUTTON: 'Alle sledestofzuigers',
                    CORDLESS_BUTTON: 'Alle snoerloze stofzuigers',
                    HANDHELD_BUTTON: 'Alle kruimelzuigers',
                    FANS_HEATERS_BUTTON: 'Alle ventilatoren en verwarmingsapparaten',

                    MISSION_HEADER: 'Onze missie is simpel. We lossen de problemen op die anderen lijken te negeren.',

                    MORE_THAN_MACHINE_HEADER: 'Meer dan gewoon een machine',

                    BALL_TECH_TITLE: 'De nieuwste Ball™ technologie',
                    CYCLONE_TITLE: 'Root Cyclone™ technologie',
                    MULTIPLIER_TITLE: 'Air Multiplier™ technologie',

                    BALL_TECH_TEXT: 'De belangrijkste onderdelen van de stofzuiger zitten in de bal, inclusief de electronica, de motor, het filter en het snoer. Dit creëert een laag zwaartepunt en zorgt voor stabiliteit, waardoor de stofzuiger u moeiteloos door het huis volgt, zonder de moeilijke manoeuvres.',
                    CYCLONE_TEXT: 'Vangt meer microscopisch stof op dan elke andere cycloon. Het arrangement van de binnenste cyclonen in een radiale formatie zorgt ervoor dat de luchtstroom rechtstreeks naar de bal gekanaliseerd kan worden. Dit verbetert de efficiëntie van de luchtstroom.',
                    MULTIPLIER_TEXT: 'Ventilatoren en verwarmingsapparaten van Dyson zijn veilig en produceren een onafgebroken stroom gladde lucht. Lucht wordt ingezogen door een energie-efficiënte borstelloze motor. Een combinatie van de technologieën gebruikt in turboladers en vliegtuigmotoren genereert een krachtige luchtstroom.'
                },
                HANDHELD:
                {
                    HERO_HEADLINE: 'De hoogste zuigkracht van alle kruimelzuigers',
                    HERO_BUTTON: 'Meer informatie',

                    PRODUCT_1_NAME: 'DC34',
                    PRODUCT_1_PRICE: '199,98 €',
                    PRODUCT_1_TAGLINE: 'Dyson digitale motor voor kruimelzuiger met hoge zuigkracht.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/kruimeldief/dc_34_aspirateur_a_main/PKEY_A2_B349_C365_365171',

                    PRODUCT_2_NAME: 'DC34 Animal',
                    PRODUCT_2_PRICE: '249,98 €',
                    PRODUCT_2_TAGLINE: 'Dyson digitale motor voor kruimelzuiger met hoge zuigkracht.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/kruimeldief/dc_34_animal_pro/PKEY_A2_B349_C365_365155',

                    ALL_DYSONS_HAVE: 'Voor alle Dyson kruimelzuigers geldt',

                    TWO_GUARANTEE_TEXT: 'Alle Dyson snoerloze stofzuigers hebben gratis 2 jaar garantie op onderdelen.'

                },
                CORDLESS:
                {
                    HERO_HEADLINE: 'Zuigt net zo veel stof op als een grote stofzuiger',
                    HERO_BUTTON: 'Meer informatie',

                    PRODUCT_1_NAME: 'DC62 Animalpro',
                    PRODUCT_1_PRICE: '429,98 €',
                    PRODUCT_1_TAGLINE: 'De krachtigste snoerloze stofzuiger. Met getmotoriseerde miniborstel voor lastige taken.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/steelstofzuiger/dc62_animalpro/PKEY_A2_B349_C355_355055', 

                    PRODUCT_2_NAME: 'DC62 Up Top',
                    PRODUCT_2_PRICE: '379,00 €',
                    PRODUCT_2_TAGLINE: 'De krachtigste snoerloze stofzuiger. Met een borstel voor bovenop om lastige plekken schoon te maken.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/steelstofzuiger/dc62_up_top/PKEY_A2_B349_C355_355058',

                    PRODUCT_3_NAME: 'DC45 Animalpro',
                    PRODUCT_3_PRICE: '379,00 €',
                    PRODUCT_3_TAGLINE: 'Ontwerpen voor lastige taken. Verwijdert haar en hardnekkig vuil.',
                    PRODUCT_3_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/steelstofzuiger/dc_45_animal_pro/PKEY_A2_B349_C355_355046',

                    PRODUCT_4_NAME: 'DC35 Multifloor',
                    PRODUCT_4_PRICE: '253,00 €',
                    PRODUCT_4_TAGLINE: 'In balans om van vloer tot plafond schoon te maken.',
                    PRODUCT_4_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/steelstofzuiger/dc35_multi_floor_slim/PKEY_A2_B349_C355_355033',

                    ALL_DYSONS_HAVE: 'Voor alle Dyson snoerloze stofzuigers geldt',

                    TWO_GUARANTEE_TEXT: 'Alle Dyson snoerloze stofzuigers hebben gratis 2 jaar garantie op onderdelen'

                },
                CYLINDER:
                {
                    HERO_HEADLINE_1: 'De enige stofzuiger',
                    HERO_HEADLINE_2: 'Zonder aanschaf van zakken Zonder filteronderhoud en',
                    HERO_HEADLINE_3: 'Zonder verlies aan zuigkracht',
                    HERO_HEADLINE_WIDTH: '310',
                    HERO_BUTTON: 'Meer informatie',

                    PRODUCT_1_NAME: 'DC52 Animal Complete',
                    PRODUCT_1_PRICE: '569,98 €',
                    PRODUCT_1_TAGLINE: 'Ontworpen voor lastige taken. Verwijdert haar en hardnekkig vuil.',
                    PRODUCT_1_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/sledestofzuiger_zonder_zak/dc_52_animal/PKEY_A2_B349_C349_349076',

                    PRODUCT_2_NAME: 'DC52 Allergy Musclehead Parquet',
                    PRODUCT_2_PRICE: '499,98 €',
                    PRODUCT_2_TAGLINE: 'Voor mensen met allergieën. Past zich automatisch aan op alle vloertypen.',
                    PRODUCT_2_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/sledestofzuiger_zonder_zak/dc52_allergy_musclehead/PKEY_A2_B349_C349_349075',

                    PRODUCT_3_NAME: 'DC52 Allergy Musclehead',
                    PRODUCT_3_PRICE: ' €499,98',
                    PRODUCT_3_TAGLINE: 'Voor mensen met allergieën. Past zich automatisch aan op alle vloertypen.',
                    PRODUCT_3_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/sledestofzuiger_zonder_zak/dc52_allergy_musclehead/PKEY_A2_B349_C349_349074',

                    PRODUCT_4_NAME: 'DC33c Allergy',
                    PRODUCT_4_PRICE: '329,00 €',
                    PRODUCT_4_TAGLINE: 'Voor mensen met allergieën.',
                    PRODUCT_4_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/sledestofzuiger_zonder_zak/dc33c_allergy/PKEY_A2_B349_C349_349073',

                    PRODUCT_5_NAME: 'DC33c Origin Plus',
                    PRODUCT_5_PRICE: '349,98 €',
                    PRODUCT_5_TAGLINE: 'Ontworpen voor hoge stof- en vuilverwijdering.',
                    PRODUCT_5_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/sledestofzuiger_zonder_zak/dc33c_origin_plus/PKEY_A2_B349_C349_349072',

                    PRODUCT_6_NAME: 'DC33c Musclehead',
                    PRODUCT_6_PRICE: '369,98 €',
                    PRODUCT_6_TAGLINE: 'Ontworpen voor hoge stof- en vuilverwijdering. Past zich automatisch aan op alle vloertypen.',
                    PRODUCT_6_SHOP: 'http://www.krefel.be/nl/klein_elektro/stofzuigen-reinigen/sledestofzuiger_zonder_zak/dc33_musclehead/PKEY_A2_B349_C349_349082',


                    
                    ALL_DYSONS_HAVE: 'Voor alle Dysonstofzuigers geldt',

                    FIVE_GUARANTEE_TEXT: 'Alle Dyson stofzuigers hebben 5 jaar gratis garantie op onderdelen en arbeid.'

                },
                FANS:
                {
                    HERO_HEADLINE: 'Snelle gelikmatige kamerverwarming. Een krachtige luchstroom am te verkoelen.',
                    HERO_BUTTON: 'Meer informatie',

                    PRODUCT_1_NAME: 'AM05 Grijs/Blauw',
                    PRODUCT_1_PRICE: '379,00 €',
                    PRODUCT_1_TAGLINE: 'Snelle gelikmatige kamerverwarming. Een krachtige luchstroom am te verkoelen.',

                    PRODUCT_2_NAME: 'AM05 Zwart/Nikkel',
                    PRODUCT_2_PRICE: '379,00 €',
                    PRODUCT_2_TAGLINE: 'Snelle gelikmatige kamerverwarming. Een krachtige luchstroom am te verkoelen.',

                    PRODUCT_3_NAME: 'AM05 Wit/Zilver',
                    PRODUCT_3_PRICE: '379,00 €',
                    PRODUCT_3_TAGLINE: 'Snelle gelikmatige kamerverwarming. Een krachtige luchstroom am te verkoelen.',

                    PRODUCT_4_NAME: 'AM06 Wit/Zilver',
                    PRODUCT_4_PRICE: '329,98 €',
                    PRODUCT_4_TAGLINE: 'Nieuw. Krachtige luchtstroom. Nu 75% stiller.',

                    PRODUCT_5_NAME: 'AM07 Zwart/Nikkel',
                    PRODUCT_5_PRICE: '429,98 €',
                    PRODUCT_5_TAGLINE: 'Nieuw. Krachtige luchtstroom. Nu 60% stiller.',

                    PRODUCT_6_NAME: 'AM08 Wit/Zilver',
                    PRODUCT_6_PRICE: '429,98 €',
                    PRODUCT_6_TAGLINE: 'Nieuw. Krachtige luchtstroom. Nu 35% stiller.',

                    PRODUCT_1_EXTRA: 'Verwarmings- en verkoelingsventilator - Grijs/Blauw.',
                    PRODUCT_2_EXTRA: 'Verwarmings- en verkoelingsventilator - Zwart/Nikkel',
                    PRODUCT_3_EXTRA: 'Verwarmings- en verkoelingsventilator - Wit/Zilver',
                    PRODUCT_4_EXTRA: 'Verkoelingsventilator - Wit/Zilver',
                    PRODUCT_5_EXTRA: 'Verkoelingsventilator - Zwart/Nikkel',
                    PRODUCT_6_EXTRA: 'Verkoelingsventilator - Wit/Zilver',

                    ALL_DYSONS_HAVE: 'Voor alle Dyson ventilatoren en verwarmingsapparaten geldt',

                    SAFE_TITLE: 'Veilig',
                    SAFE_TEXT: 'Dyson ventilatoren en verwarmingsapparaten hebben geen bladen of zichtbare verwarmingselementen.',

                    TILT_TITLE: 'Kantelen',
                    TILT_TEXT: 'Dyson ventilatoren zijn niet topzwaar, zoals andere ventilatoren. Dsyon ventilatoren draaien om hun eigen zwaartepunt.',

                    CLEAN_TITLE: 'Gemakkelijk schoon te maken',
                    CLEAN_TEXT: 'In tegenstelling tot veel conventionele ventilatoren hebben Dyson ventilatoren en verwarmingsapparaten geen rooster, dus zijn ze eenvoudig schoon te maken.',

                    TWO_GUARANTEE_TEXT: 'Alle Dyson ventilatoren en verwarmingsapparaten hebben een garantie van 2 jaar op onderdelen.'
                }
            })

        function getUrlVars(queryString)
        {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        function cleanLanguageVar(array)
        {
            return (array) ? array.split('#')[0] : null;
        }
        $translateProvider.preferredLanguage(cleanLanguageVar(getUrlVars()['language']) || 'en-GB');
        $translateProvider.fallbackLanguage('en-GB');
}]);