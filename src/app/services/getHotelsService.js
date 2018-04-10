export const GetHotelsService = ['$http', 'API_URL',
    ($http, API_URL) => {
        return {
            get: (params) => {
                return $http.get(API_URL+'/hotels', {params});
            }
        }
    }];