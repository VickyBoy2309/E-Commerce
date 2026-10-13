import { Map, MapControls } from "@/components/ui/map";

export default function MapTest() {
  return (
    <div className="h-[450px] w-full overflow-hidden rounded-xl">
      <Map center={[80.2707, 13.0827]} zoom={12}>
        <MapControls />
      </Map>
    </div>
  );
}