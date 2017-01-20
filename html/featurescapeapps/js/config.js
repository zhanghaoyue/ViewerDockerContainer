/**
 * Configure app in a block instead of hard-coding values inside the scripts.
 */
var config = {
    //domain: 'http://localhost:63342/FeatureScapeApps',
    domain: '/featurescapeapps',
    quipUrl: '/camicroscope/osdCamicroscope.php',
    //reserve4Url: 'http://reserve4.informatics.stonybrook.edu/dev1/osdCamicroscope.php',
    imgcoll: 'images',
    quot: "%22",
    iiifServer: location.hostname,
    iiifPrefix: 'fcgi-bin/iipsrv.fcgi?iiif=',
    default_execution_id: 'luad:bg:20160520',
    default_db: 'u24_luad',
    default_subject_id: 'TCGA-05-4244',
    default_case_id: 'TCGA-05-4245-01Z-00-DX1'
};

/*
function portToUse() {
    
    var port = 3000;
    
    if (location.port) {
        port = location.port;
    }
    else if (location.hostname === '129.49.249.191') {
        port = 4500;
    }
    
    return port;
}
*/