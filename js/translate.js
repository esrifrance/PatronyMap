  function ChangeLanguage(){
      if(language=='fr'){
        require(["dojo/dom"], function(dom){
            dom.byId("WelcomeBanner").style.backgroundImage="url('./images/banner_750_500_en.jpg')";
            dom.byId("image_language").src="./images/go_fr.png";
            dom.byId("GoButton").innerHTML='Enter the application';

            dom.byId("label_search_personne").innerHTML='Search for a famous name (eg: Kennedy)';
            dom.byId("search").placeholder='a name:';
            dom.byId("label_top100_H").innerHTML='Top 100 male names';
            dom.byId("label_top100_F").innerHTML='Top 100 female names';
            myAboutDialog.set("title","About this application");
            myAboutDialog.set("content","<div><p align='justify' style>In France, many streets are named after famous people (scientists, artists, politicians, militaries,...). The purpose of this application is to provide a map of cities whose streets are named after a specific surname. You can search for a particular person name and then display all the city containing a street baptized with this name. With this kind of map display we can visualize, for example, interesting spatial trends related to the history or the activity of this famous figure. The application also offers a quick access to the most common 100 names (male and female) found in the French street names. <br/></br><b>The data</b><br/></br>The application is based on the Fantoir 2013 database published under the license <a target='_new' href='http://wiki.data.gouv.fr/wiki/Licence_Ouverte_/_Open_Licence'>Open License</a> and can be downloaded from <a target='_new' href='http://www.data.gouv.fr/fr/dataset/fichier-fantoir-des-voies-et-lieux-dits'>data.gov.fr</a> since november 2013. This database lists the 1.6 million streets in France (Mainland + DOM-TOM). Using automated processing, only street names matching a famous name have been retained (approximately 289500 street names) for France Mainland.<br/></br><b>The application</b><br/></br>This web application is based on the Esri <a href='http://developers.arcgis.com/javascript/' target='_new'>ArcGIS for JavaScript API</a> and powered by <a href='http://www.arcgis.com' target='_new'>ArcGIS Online</a> hosted services.<br/></br><b>Disclaimers</b><br/></br>The Fantoir database information has a relatively poor quality in terms of standardization of street names. Many cleaning processes were needed to extract only the lastnames, firstnames, titles and abbreviations from street names. It may occur that you will not find a street name that you know. Another difficulty with this database, you can find many names for the same person (eg: 115 variants for the 'General de Gaulle').<br/></br></br>Author: <a href='https://twitter.com/Gaetan_LAVENU' target='_new'>Gaetan LAVENU</a></p><table><tr><td style='width: 450px'><a href='http://www.esrifrance.fr' target='_new'><img src='./images/logo_EF.png'/></a></td><td style='width: 450px'><p align='right'><button class='GreyButton' type='button' onClick='dijit.byId(\"AboutDialog\").hide()'>Back to the application</button></p></td></tr></table></div>");


            myAboutDialog.startup();

            if(isMobile){
				myAboutDialog.show();
				myAboutDialog.hide();
            }
            language='en';
        });


      }
      else{
        require(["dojo/dom"], function(dom){
            dom.byId("WelcomeBanner").style.backgroundImage="url('./images/banner_750_500_fr.jpg')";
            dom.byId("image_language").src="./images/go_en.png";
            dom.byId("GoButton").innerHTML='Accéder à l\'application';

            dom.byId("label_search_personne").innerHTML='Rechercher un nom de personne (ex: Leblanc)';
            dom.byId("search").placeholder='un nom:';
            dom.byId("label_top100_H").innerHTML='Top 100 des personnalités masculines';
            dom.byId("label_top100_F").innerHTML='Top 100 des personnalités féminines';
            myAboutDialog.set("title","A propos de cette application");
            myAboutDialog.set("content","<div><p align='justify' style>En France de nombreuses voies portent des noms de personnalités (scientifiques, artistes, responsables politiques, militaires,...). L'objectif de cette application est de présenter une cartographie des communes dont les voies portent des noms de personnalités. Vous pouvez rechercher un nom de personnalité puis afficher les communes contenant une voie correspondant à ce nom. La visualisation cartographique permet, par exemple, de constater des phénomènes géographiques intéressants liés à l'histoire ou à l'activité d'une personnalité. L'application propose également un accès rapide aux 100 noms de personnalités masculines et féminines que l'on retrouve le plus fréquement dans les noms de voie en France métropolitaine.<br/></br><b>Les données utilisées</b><br/></br>L'application repose sur les informations fournies par la base de données Fantoir 2013 diffusée en <a target='_new' href='http://wiki.data.gouv.fr/wiki/Licence_Ouverte_/_Open_Licence'>Licence Ouverte</a> et téléchargeable depuis <a target='_new' href='http://www.data.gouv.fr/fr/dataset/fichier-fantoir-des-voies-et-lieux-dits'>le site web data.gouv.fr</a> depuis novembre 2013. Cette base de données répertorie les 1,6 millions de noms de voie en France (Métropole + DOM-TOM). Par des traitements automatisés, seuls les noms de voies correspondant à des noms de personnalités ont été conservés, soit environ 289500 voies pour la Métropole.<br/></br><b>L'application</b><br/></br>L'application cartographique est basée sur <a href='http://developers.arcgis.com/javascript/' target='_new'>l'API ArcGIS for JavaScript</a> d'Esri et des services web hébergés sur la plateforme <a href='http://www.arcgis.com' target='_new'>ArcGIS Online</a>.<br/></br><b>Avertissements</b><br/></br>La base de données Fantoir est d'une qualité assez médiocre en terme de normalisation des noms de voie. De nombreux traitements de nettoyage ont été nécessaires pour extraire uniquement les noms patronymiques, les prénoms et autres titres et abréviations qualifiant les nom de personnalités. Il est donc possible que vous ne trouviez pas une rue que vous connaissez. Autre difficulté rencontrée avec cette base de données, on peut trouver de nombreuses dénominations pour une même personnalité (par exemple 115 variantes pour le 'Général De Gaulle').<br/></br></br>Réalisation: <a href='https://twitter.com/Gaetan_LAVENU' target='_new'>Gaetan LAVENU</a></p><table><tr><td style='width: 450px'><a href='http://www.esrifrance.fr' target='_new'><img src='./images/logo_EF.png'/></a></td><td style='width: 450px'><p align='right'><button class='GreyButton' type='button' onClick='dijit.byId(\"AboutDialog\").hide()'>Retour à l'application</button></p></td></tr></table></div>");

			myAboutDialog.startup();

			if(isMobile){
				myAboutDialog.show();
				myAboutDialog.hide();
            }
            language='fr';
        });

      }

    }