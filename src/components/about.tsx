
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { USER } from "@/resources/data";
import { Prose } from "./ui/typography";

export default function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          {USER.about}
        </Prose>
      </PanelContent>
    </Panel>
  );
}
