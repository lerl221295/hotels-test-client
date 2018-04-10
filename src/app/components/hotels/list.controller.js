export default class ListController {
    constructor(API_URL, getHotelsService, $state, $scope) {
        let vm = this;
        vm.loading = true;
        vm.API_URL = API_URL;
        vm.filter = {stars: []};

        /*en base a las dimensiones del navegador donde se visualiza (mobile o desktop), se
        muestra o no el filtrado expandido en primer lugar*/
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        vm.filters = width >= 600;

        vm.filter_panels = {
            name: true,
            stars: true
        }

        /*obtiene del servidor los hoteles*/
        const getHotels = (params = {}) => {
            getHotelsService.get(params)
                .then(({data: hotels}) => {
                    vm.hotels = hotels;
                    vm.loading = false;
                });
        } 

        getHotels();
        
        vm.search = () => {
            getHotels({
                ...vm.filter,
                stars: JSON.stringify(vm.filter.stars)
            });
        };

        vm.exists = (stars) => vm.filter.stars.includes(stars)

        vm.toggle = (stars) => {
            const index_of_star = vm.filter.stars.indexOf(stars);
            if(index_of_star < 0) {
                vm.filter.stars.push(stars);
            }
            else {
                vm.filter.stars.splice(index_of_star, 1);
            }
            vm.search();
        };

        vm.toggleAll = () => {
            if(vm.filter.stars.length === 5){
                vm.filter.stars = []
            }
            else if(vm.filter.stars.length >= 0){
                vm.filter.stars = [1,2,3,4,5];
            }
            vm.search();
        }

        vm.allStars = () => vm.filter.stars.length === 5;

        vm.isIndeterminate = () => vm.filter.stars.length > 0 && vm.filter.stars.length < 5; 

        vm.getArray = n => new Array(n);

        vm.toggleStarsFilter = () => vm.filter_panels.stars = !vm.filter_panels.stars;
        vm.toggleNameFilter = () => vm.filter_panels.name = !vm.filter_panels.name;
        vm.toggleFilters = () => vm.filters = !vm.filters;
    }

}

ListController.$inject = ['API_URL', 'getHotelsService', '$state', '$scope'];