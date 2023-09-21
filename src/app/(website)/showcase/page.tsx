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
        <div className="flex flex-wrap gap-12">
          <div>
            <Heading level={2}>Buttons</Heading>

            <div className="mt-4 grid max-w-md grid-cols-3 justify-items-start gap-6">
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
                      <Button
                        disabled
                        kind={buttonKind}
                        emphasis={buttonEmphasis}
                      >
                        Label
                      </Button>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
          <div className="pt-1">
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
          </div>

          <div className="pt-1">
            <Heading level={3}>With icons and accels</Heading>

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
                        accel="x"
                      >
                        Label
                      </Button>
                      <Button
                        disabled
                        kind={buttonKind}
                        emphasis={buttonEmphasis}
                        icon={ClearIcon}
                        accel="x"
                      >
                        Label
                      </Button>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
