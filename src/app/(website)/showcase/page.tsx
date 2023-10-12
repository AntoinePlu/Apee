import { ClearIcon } from "@apee/components/icons";
import {
  BUTTON_EMPHASIS,
  BUTTON_KIND,
  Button,
  Heading,
} from "@apee/components/ui";

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col gap-y-8 overflow-auto px-32 py-20">
      <Heading level={1}>Apee Meal</Heading>

      <section className="space-y-4">
        <Heading level={2}>Buttons</Heading>

        <div className="grid max-w-md grid-cols-3 justify-items-start gap-6">
          {Object.values(BUTTON_KIND).map((buttonKind) => (
            <>
              {Object.values(BUTTON_EMPHASIS).map((buttonEmphasis) => (
                <div
                  className="flex flex-col gap-y-3"
                  key={`${buttonKind}-${buttonEmphasis}`}
                >
                  <Button kind={buttonKind} emphasis={buttonEmphasis}>
                    Label
                  </Button>
                  <Button disabled kind={buttonKind} emphasis={buttonEmphasis}>
                    Label
                  </Button>
                </div>
              ))}
            </>
          ))}
        </div>

        <Heading level={3}>With icons</Heading>

        <div className="mt-4 grid max-w-md grid-cols-3 justify-items-start gap-6">
          {Object.values(BUTTON_KIND).map((buttonKind) => (
            <>
              {Object.values(BUTTON_EMPHASIS).map((buttonEmphasis) => (
                <div
                  className="flex flex-col gap-y-3"
                  key={`${buttonKind}-${buttonEmphasis}`}
                >
                  <Button
                    kind={buttonKind}
                    emphasis={buttonEmphasis}
                    icon={ClearIcon}
                  >
                    Label
                  </Button>
                  <Button
                    disabled
                    kind={buttonKind}
                    emphasis={buttonEmphasis}
                    icon={ClearIcon}
                  >
                    Label
                  </Button>
                </div>
              ))}
            </>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Form elements</Heading>
        <Heading level={3}>Checkboxes</Heading>
        <div className="mt-4 grid max-w-md grid-cols-3 justify-items-start gap-6"></div>
        <Checkbox></Checkbox>
      </section>
    </div>
  );
}
