PatronymoGeo
============

En France de nombreuses voies portent des noms de personnalités (scientifiques, artistes, responsables politiques, militaires,...). L'objectif de l'application PatronymoGéo est de présenter une cartographie des communes dont les voies portent des noms de personnalités. Vous pouvez rechercher un nom de personnalité puis afficher les communes contenant une voie correspondant à ce nom. La visualisation cartographique permet, par exemple, de constater des phénomènes géographiques intéressants liés à l'histoire ou à l'activité d'une personnalité. L'application propose également un accès rapide aux 100 noms de personnalités masculines et féminines que l'on retrouve le plus fréquement dans les noms de voie en France métropolitaine.


![Image Alt](https://github.com/esrifrance/PatronymoGeo/raw/master/images/capture_ecran_1.png)

###Les données utilisées

L'application repose sur les informations fournies par la base de données Fantoir 2013 diffusée en [Licence Ouverte](http://wiki.data.gouv.fr/wiki/Licence_Ouverte_/_Open_Licence) et téléchargeable depuis le site web [data.gouv.fr](http://www.data.gouv.fr/fr/dataset/fichier-fantoir-des-voies-et-lieux-dits) depuis novembre 2013. Cette base de données répertorie les 1,6 millions de noms de voie en France (Métropole + DOM-TOM). Par des traitements automatisés, seuls les noms de voies correspondant à des noms de personnalités ont été conservés, soit environ 289500 voies pour la Métropole.


###L'application

L'application cartographique est basée sur [l'API ArcGIS for JavaScript](http://developers.arcgis.com/javascript/) d'[Esri](http://www.esri.com) et des services web hébergés sur la plateforme [ArcGIS Online](http://www.arcgis.com).

Vous pouvez tester l'application ici](http://apps.arcorama.fr/PatronymoGeo).


###Avertissements

La base de données Fantoir est d'une qualité assez médiocre en terme de normalisation des noms de voie. De nombreux traitements de nettoyage ont été nécessaires pour extraire uniquement les noms patronymiques, les prénoms et autres titres et abréviations qualifiant les nom de personnalités. Il est donc possible que vous ne trouviez pas une rue que vous connaissez. Autre difficulé rencontrée avec cette base de données, on peut trouver de nombreuses dénominations pour une même personnalité (par exemple 115 variantes pour le 'Général De Gaulle').

