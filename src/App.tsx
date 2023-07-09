import type { Component } from "solid-js";
import { useFlutterwave } from "./lib/useFlutterwave";
import { getEnv } from "./utils/general";

const App: Component = () => {
  const { initializePayment, actions, setConfig } = useFlutterwave();

  setConfig({
    public_key: getEnv("VITE_FLUTTERWAVE_PUBLIC_KEY"),
    amount: 1000,
    currency: "NGN",
    payment_options: ["card", "ussd", "banktransfer"],
    customer: {
      email: "solidjsflutter@yopmail.com",
      name: "Solid Flutterwave",
      phone_number: "08102909304",
    },
    customizations: {
      title: "Solid Flutterwave Demo",
      logo: "https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/KAOmqplghJT2PrJlOgZ5.png?auto=format",
      description: "Middleout isn't free. Pay the price",
    },
  });

  return (
    <div>
      <button onClick={() => initializePayment(
          (response) => {

            console.log("success", response.charge_response_message);

            setTimeout(() => {
              console.log("closing modal");
              actions().close();
            }, 5000);
          },
          (incomplete) => {
            console.log("closed payment", incomplete);
          }
      )}>Pay Now</button>
    </div>
  );
};

export default App;
