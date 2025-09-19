import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";
import { USER } from "@/resources/data";
import { Panel, PanelContent } from "./panel";
import { JobItem } from "./job-item";
import { IntroItem } from "./overview/intro-item";
import { PhoneItem } from "./overview/phone-item";
import { EmailItem } from "./overview/email-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={GlobeIcon}
          content={USER.website}
          href={USER.website}
        />

        <IntroItem
          icon={USER.gender === "male" ? MarsIcon : VenusIcon}
          content={USER.pronouns}
        />
      </PanelContent>
    </Panel>
  );
}




