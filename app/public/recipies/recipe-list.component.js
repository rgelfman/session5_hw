var myApp = angular.module('recipeApp',[]);


myApp.controller('ListController', ['$scope', function($scope) {
 
     templateUrl: 'recipies/recipe-template.html'
    

$scope.filters = {
                    title: "",
                    description: ""
                };
$scope.recipes = [
            {
                name: 'recipe1309',
                title: 'Lasagna',
                date: '2013-09-01',
                description: 'Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.',
                image: 'lasagne.png'
            },

            {
                name: 'recipe1404',
                title: 'Pho-Chicken Noodle Soup',
                date: '2014-04-15',
                description: 'Pho (pronounced "fuh") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.',
                image: 'pho.png'
            },

            {
                name: 'recipe1210',
                title: 'Guacamole',
                date: '2012-10-01',
                description: 'Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.',
                image: 'guacamole.png'
            },

            {
                name: 'recipe1810',
                title: 'Hamburger',
                date: '2012-10-20',
                description: 'A Hamburger (often called a burger) is a type of food in the form of a rounded bun sliced in half with its center filled with patty which is usually meat. Possible toppings include  lettuce, tomatoes and onions.',
                image: 'hamburger.png'
            }
        ]
   


}]);




// myApp.component('recipeList', {

//     // isolated scope binding
   

//     // Inline template which is binded to message variable
//     // in the component controller
//    templateUrl: 'recipies/recipe-template.html',

//     // The controller that handles our component logic
//    controller: 'ListController',
  

//      bindings: {
//         name:  '=',
//      date: '@',
//         title:  '=',
//         description: '=',
//          image: '=',
//     }



// });









// angular.module('recipeApp').component('recipeList', {
//     templateUrl: 'recipies/recipe-template.html',
//     controller: 'ListController',
//          bindings: {
//         name:  '=',
//      date: '@',
//         title:  '=',
//         description: '@',
//          image: '@',
//     }

//  });









angular.module('recipeApp').component('recipeList', {
    templateUrl: 'recipies/recipe-template.html',
    controller: function RecipeListController() {
        this.recipes = [
            {
                name: 'recipe1309',
                title: 'Lasagna',
                date: '2013-09-01',
                description: 'Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.',
                image: 'lasagne.png'
            },

            {
                name: 'recipe1404',
                title: 'Pho-Chicken Noodle Soup',
                date: '2014-04-15',
                description: 'Pho (pronounced "fuh") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.',
                image: 'pho.png'
            },

            {
                name: 'recipe1210',
                title: 'Guacamole',
                date: '2012-10-01',
                description: 'Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.',
                image: 'guacamole.png'
            },

            {
                name: 'recipe1810',
                title: 'Hamburger',
                date: '2012-10-20',
                description: 'A Hamburger (often called a burger) is a type of food in the form of a rounded bun sliced in half with its center filled with patty which is usually meat. Possible toppings include  lettuce, tomatoes and onions.',
                image: 'hamburger.png'
            }
        ]
   }
 });

// angular.
//   module('recipeApp').
//   component('recipeList', {
//    templateUrl: 'recipies/recipe-template.html',
//     controller: ['$http', '$routeParams',
//       function RecipeListController($http, $routeParams) {
//         var self = this;

//         $http.get('data/recipies.json').then(function(response) {
//           self.phone = response.data;
//         });
//       }
//     ]
//   });














// angular.module('recipeApp').component('recipeList', {
//     templateUrl: 'recipies/recipe-template.html',
//     controller: function RecipeListController() {
//         this.recipes = [
//             {
//                 name: 'recipe1309',
//                 title: 'Lasagna',
//                 date: '2013-09-01',
//                 description: 'Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.',
//                 image: 'lasagne.png'
//             },

//             {
//                 name: 'recipe1404',
//                 title: 'Pho-Chicken Noodle Soup',
//                 date: '2014-04-15',
//                 description: 'Pho (pronounced "fuh") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.',
//                 image: 'pho.png'
//             },

//             {
//                 name: 'recipe1210',
//                 title: 'Guacamole',
//                 date: '2012-10-01',
//                 description: 'Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.',
//                 image: 'guacamole.png'
//             },

//             {
//                 name: 'recipe1810',
//                 title: 'Hamburger',
//                 date: '2012-10-20',
//                 description: 'A Hamburger (often called a burger) is a type of food in the form of a rounded bun sliced in half with its center filled with patty which is usually meat. Possible toppings include  lettuce, tomatoes and onions.',
//                 image: 'hamburger.png'
//             }
//         ]
//     window.onload = function () {
//             prepareGallery();
//         }

//         function prepareGallery() {
//             var gallery = document.getElementById("imageGallery");
//             var links = gallery.getElementsByTagName("a");
//             for (var i = 0; i < links.length; i++) {
//                 links[i].onclick = function () {
//                     showPic(this, links);
//                     return false;
//                 }
//                 links[0].parentNode.className = 'active';
//                 showPic(links[0]);
//             }
//         };

//         function showPic(whichPic, links) {
//             if (links) {
//                 for (var i = 0; i < links.length; i++) {
//                     links[i].parentNode.className = '';
//                 }
//             }
//             whichPic.parentNode.className = 'active';
//             var source = whichPic.getAttribute("href");
//             var placeholder = document.getElementById('placeholder');
//             placeholder.setAttribute('src', source);

//             var text = whichPic.getAttribute("title");
//             var description = document.getElementById("description");
//             description.firstChild.nodeValue = text;
//         };
//     }
// });