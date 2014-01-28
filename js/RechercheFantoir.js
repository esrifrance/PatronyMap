$(document).ready(function() {
  $('.typeahead').typeahead([{
    name: 'Fantoir',
    remote: {
                // Parametered query to ArcGIS Online to retrieve the targeted feature as a Json response
                // Using COLLATE in the SQL syntax allows not to worry about casing and accents
                //url: 'http://services.arcgis.com/d3voDfTFbHOCRwVR/arcgis/rest/services/Fantoir_Noms_Voies_Uniques/FeatureServer/0/query?where=name+like+%27%25%QUERY%25%27+COLLATE+SQL_Latin1_General_Cp437_CI_AI&outFields=objectid,name,address&orderByFields=name&returnGeometry=false&f=json',
                
                url: 'http://services.arcgis.com/d3voDfTFbHOCRwVR/arcgis/rest/services/APPLI_NOMS_VOIES_UNIQUES/FeatureServer/0/query?where=NOM_VOIE+LIKE+%27%25%QUERY%25%27+COLLATE+SQL_Latin1_General_Cp437_CI_AI&outFields=NOM_VOIE%2CNEW_ID_VOIE&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=EFFECTIF+DESC&groupByFieldsForStatistics=&outStatistics=&f=json',
                
                // The filter function is there built the typeahead dataset from the ArcGIS JSon response
                filter: function(data){
                  retour = [];
                  $.each(data.features, function(index, value) {
                    retour.push({value: value.attributes.NOM_VOIE, id_voie: value.attributes.NEW_ID_VOIE});
                  });
                  return retour;
                }
              },
    template: [                                                                                             
      '<p class="name">{{value}}</p>',                                                             
      ].join(''),
    engine: Hogan,                                                               
    limit: 20,
    minLength: 3
  }
  ]);


  // Those 2 events are there to demonstrate how to get the resulting user's choice and start to do something usefull with it...
  $('.typeahead').bind('typeahead:selected', function(obj, datum, dataset) {        
        //alert("Origine : menu de sélection \nDataset : " + dataset + "\nid_voie : " + JSON.stringify(datum.id_voie));
        RechercheCommunes_Par_ID_VOIE(datum.id_voie);
  });

  $('.typeahead').bind('typeahead:autocompleted', function(obj, datum, dataset) {        
        //alert("Origine : autocomplétion \nDataset : " + dataset + "\nid_voie : " + JSON.stringify(datum.id_voie));
        RechercheCommunes_Par_ID_VOIE(datum.id_voie);
  });
});
