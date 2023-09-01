
import React, { ReactElement, useEffect, useState } from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";



type FontSource = Parameters<typeof Font.loadAsync>[0];
const usePromiseAll = (
  promises: Promise<void | void[] | Asset[]>[],
  cb: () => void
) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false);
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true)
  );
  return ready;
};

interface LoadAssetsProps {
  fonts: FontSource;
  assets: number[];
  children: ReactElement | ReactElement[];
}

const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {

  const ready = useLoadAssets(assets || [], fonts || {});


  if (!ready) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;

