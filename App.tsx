import AppNavigator from '@/Navigaiton/Navigation';
import Images from '@Assets/Index'
import LoadAssets from '@/Components/LoadAssets';


export default function App() {

  const fonts = {
    'ManropeRegular': require('./assets/Fonts/Manrope-Regular.ttf'),
    'ManropeBold': require('./assets/Fonts/Manrope-Bold.ttf')
  }

  return (
    <LoadAssets assets={Images} fonts={fonts} >
      <AppNavigator />
    </LoadAssets>
  );
}


