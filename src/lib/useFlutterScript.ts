import { createEffect, createSignal, onCleanup } from "solid-js";

const cachedScripts: string[] = [];
interface IScriptResult {
  loaded: boolean;
  error: boolean;
}

export default function useFlutterScript() {
  const src = "https://checkout.flutterwave.com/v3.js";

  const [state, setState] = createSignal<IScriptResult>({
    loaded: false,
    error: false,
  });

  createEffect((): any => {
    if (cachedScripts.includes(src)) {
      setState({
        loaded: true,
        error: false,
      });
    } else {
      cachedScripts.push(src);

      const script = document.createElement("script");
      script.src = src;
      script.async = true;

      const onScriptLoad = (): void => {
        setState({
          loaded: true,
          error: false,
        });
      };

      const onScriptError = (): void => {
        const index = cachedScripts.indexOf(src);
        if (index >= 0) cachedScripts.splice(index, 1);
        script.remove();

        setState({
          loaded: true,
          error: true,
        });
      };

      script.addEventListener("load", onScriptLoad);
      script.addEventListener("complete", onScriptLoad);
      script.addEventListener("error", onScriptError);

      document.body.appendChild(script);

      onCleanup((): void => {
        script.removeEventListener("load", onScriptLoad);
        script.removeEventListener("error", onScriptError);
      });
    }
  });

  return state;
}
