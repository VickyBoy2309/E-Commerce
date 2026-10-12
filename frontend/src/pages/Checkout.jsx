import useNammaCartLocation from "../context/useNammaCartLocation";
import { MapPin, CheckCircle2 } from "lucide-react";
import "../styles/Checkout.css";

export default function Checkout() {
  const { location, openLocationPicker } = useNammaCartLocation();

  return (
    <main className="checkout-page">
      <section className="checkout-delivery-location">
        <div className="checkout-delivery-heading">
          <MapPin size={21} />
          <h2>Delivery address</h2>
        </div>

        {location ? (
          <>
            <p className="checkout-delivery-address">{location.address}</p>

            {location.available ? (
              <span className="checkout-delivery-status">
                <CheckCircle2 size={16} />
                Delivery available
              </span>
            ) : (
              <span className="checkout-delivery-unavailable">
                Delivery is not available at this location.
              </span>
            )}
          </>
        ) : (
          <p className="checkout-delivery-address">
            Please select your delivery address.
          </p>
        )}

        <button
          type="button"
          className="checkout-change-location"
          onClick={openLocationPicker}
        >
          {location ? "Change address" : "Select delivery address"}
        </button>
      </section>
    </main>
  );
}
