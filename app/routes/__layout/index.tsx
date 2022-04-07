import { Button } from "@chakra-ui/react";
import { ExternalScriptsFunction } from "remix-utils";
import { Quote } from "~/components/quote";

// create the scripts function with the correct type
let scripts: ExternalScriptsFunction = () => {
  return [
    {
      src: "https://appointments.mobilapp.io/blitztermin/embed?app=20031&app_code=628e1b7343b4b6e0a3a1002bb2f39b090692d437&bts[settings]=60",
    },
  ];
};

// and export it through the handle, you could also create it inline here
// if you don't care about the type
export let handle = { scripts };

export default function Index() {
  return <Quote text={"Normale Einbindung von Blitztermin"} />;
}
