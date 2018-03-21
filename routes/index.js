/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
	'projects': [
		{ 	'name': 'Creation of a web app based on Google Maps API',
		    'image': 'movesafe.jpg',
		    'id': 'project1'
		},
		{ 	'name': 'Information System for the management of Enos configurations',
			'image': 'automatisation.jpg',
			'id': 'project2'
		},
		{ 	'name': 'Prototyping',
			'image': 'lorempixel.technics.1.jpeg',
			'id': 'project3'
		}
	]
  });
};
