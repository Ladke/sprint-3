import carService from '../../services/car.service.js'


export default {
    template:`
    <section class="car-edit">
        <h1>{{(car.id)? 'Edit Car': 'Add Car'}}</h1>
        <form @submit.prevent="saveCar">
            <input type="text" v-model="car.vendor" >
            <button type="submit"> {{(car.id)? 'Save': 'Add'}}</button>
        </form>
    </section>
    `,
    data() {
        return {
            car: {vendor: ''}
        }
    },
    created() {
        const carId  = this.$route.params.carId;
        if (carId) {
            carService.getById(carId)
            .then(car=>{
                this.car = car
            })
        }
    },
    methods: {
        saveCar() {
            console.log(this.car);
            carService.saveCar(this.car)
            .then(()=>{
                console.log('Saved!');
                this.$router.push('/car');
            })
        }
    }
}