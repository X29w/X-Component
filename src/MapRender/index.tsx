interface MapRenderProps<K, V> {
  mapData: [K, V][];
  condition: K;
  defaultValue?: V;
}

const MapRender = <K, V>({
  mapData,
  condition,
  defaultValue,
}: MapRenderProps<K, V>) => new Map<K, V>(mapData).get(condition) || defaultValue;

export default MapRender;
