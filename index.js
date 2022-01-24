import { registerRootComponent } from 'expo';


import PizzaTranslator from './PizzaTranslator';
import contar from './counter';
import CatApp from './CatApp';
import comp from './components';
import cats from './cats';
import App from './App';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


// registerRootComponent(PizzaTranslator);
// registerRootComponent(contar);
// registerRootComponent(CatApp);
// registerRootComponent(comp);
// registerRootComponent(cats);
registerRootComponent(App);


