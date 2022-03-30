import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifyer.notify({
  title: "Hora de olhar seus e-mails",
  body: "Não deixe para depois, você pode esquecer."
})

const App = {
  async start() {
   try {
     await Notifyer.init()

    Emitter.on('countdown-start', notify)
    Emitter.on('countdown-end', Timer.init)
    
    Timer.init()
   } catch (err) {
     console.log(err.message)
   }
  }
}

export { App }