import { createSignal } from "solid-js";
import { FlutterwaveConfig, FlutterWaveProps } from "../interface/general";
import useFlutterScript from "./useFlutterScript";
import {openPopup} from "./openPopup";

export const useFlutterwave = () => {
  const [config, setConfig] = createSignal<FlutterwaveConfig>({
    public_key: "",
    customer: {
      email: "",
    },
    amount: 0,
    customizations: {
      title: "",
    },
  });
  const [closeModal, setCloseModal] = createSignal({
    close: () => null,
  });
  const scriptState = useFlutterScript();

  function initializePayment(
      onSuccess?: FlutterWaveProps["callback"],
      onClose?: FlutterWaveProps["onclose"]
  ) {
    if (scriptState().error) {
      throw new Error("Unable to load flutterwave inline script");
    }

    if (scriptState().loaded) {
      const flutterwaveConfig: FlutterWaveProps = {
        ...config(),
        callback: onSuccess ? onSuccess : () => null,
        onclose: onClose ? onClose : () => null,
        payment_options: config()?.payment_options?.length
            ? config().payment_options!.join(", ")
            : "card, ussd, mobilemoney",
        tx_ref: config().tx_ref || Date.now().toString(),
      };
      const closeModal = openPopup(flutterwaveConfig);
      setCloseModal((prev) => {
        return { ...prev, ...closeModal };
      });
    }
  }

  return { initializePayment, setConfig, actions: closeModal };
};
