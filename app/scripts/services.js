'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {



                this.getDishes = function(){

                    return $resource.get(baseURL+"dishes/:id",null,{'update':{method:'PUT'}});

                };

                this.getPromotion = function() {
                    return $resource.get(baseURL+"promotions/:id",null,{'uddate':{method:'PUT'}});

                };


        }]);

        .service('corporateFactory', ['$resource','baseURL',function($resource, baseURL) {


            this.getLeaders = function(){

                    return $resource.get(baseURL+"leadership/:id",null,{'update':{method:'PUT'}});
                };


        }]);


