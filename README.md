PatronymoGeo
============

En France de nombreuses voies portent des noms de personnalités (scientifiques, artistes, responsables politiques, militaires,...). L'objectif de l'application PatronymoGéo est de présenter une cartographie des communes dont les voies portent des noms de personnalités. Vous pouvez rechercher un nom de personnalité puis afficher les communes contenant une voie correspondant à ce nom. La visualisation cartographique permet, par exemple, de constater des phénomènes géographiques intéressants liés à l'histoire ou à l'activité d'une personnalité. L'application propose également un accès rapide aux 100 noms de personnalités masculines et féminines que l'on retrouve le plus fréquement dans les noms de voie en France métropolitaine.


Les données utilisées
---------------------

L'application repose sur les informations fournies par la base de données Fantoir 2013 diffusée en Licence Ouverte et téléchargeable depuis le site web data.gouv.fr depuis novembre 2013. Cette base de données répertorie les 1,6 millions de noms de voie en France (Métropole + DOM-TOM). Par des traitements automatisés, seuls les noms de voies correspondant à des noms de personnalités ont été conservés, soit environ 289500 voies pour la Métropole.



xxxxx [Atexte du lien](http://developers.arcgis.com). xxxxx xxxxx  [basemaps](#basemaplayer) and [feature services](#featurelayer), as well as [tiled](#tiledmaplayer) and [dynamic](#dynamicmaplayer) map services.





L'application

L'application cartographique est basée sur l'API ArcGIS for JavaScript d'Esri et des services web hébergés sur la plateforme ArcGIS Online.

Avertissements

La base de données Fantoir est d'une qualité assez médiocre en terme de normalisation des noms de voie. De nombreux traitements de nettoyage ont été nécessaires pour extraire uniquement les noms patronymiques, les prénoms et autres titres et abréviations qualifiant les nom de personnalités. Il est donc possible que vous ne trouviez pas une rue que vous connaissez. Autre difficulé rencontrée avec cette base de données, on peut trouver de nombreuses dénominations pour une même personnalité (par exemple 115 variantes pour le 'Général De Gaulle').

