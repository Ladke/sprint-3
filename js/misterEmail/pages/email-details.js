import carService from '../../services/car.service.js'
import busService, {USR_MSG_DISPLAY} from '../../services/event-bus.service.js'

export default {
    template: `
        <section class="car-details">
            <h1>Car Details</h1>
            {{car}}
            <button @click="deleteCar">Delete</button>
        </section>
    `,
    data(){
        return {
            car: null
        }
    },
    created() {
        const carId = this.$route.params.carId;
        carService.getById(carId)
        .then(car => this.car = car)

    },
    methods: {
        deleteCar() {
            carService.deleteCar(this.car.id)
            .then(res => {
                busService.$emit(USR_MSG_DISPLAY, {txt: `Car ${this.car.vendor} Deleted`, type:'success' })
                this.$router.push('/car');
            })
        }
    },
    components: {
    }
}