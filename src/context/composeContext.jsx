import { LoginContextProvider } from './LoginContext';
import { CartContextProvider } from './cartContext';
import {SelectedProductProvider} from './selectedProductContext';


const composeProviders =
  (...providers) =>
  ({ children }) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children
    );
  };

const Providers = composeProviders(
  LoginContextProvider,
  CartContextProvider,
  SelectedProductProvider
);

export default Providers;