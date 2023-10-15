import { ClearIcon, SettingIcon } from "@apee/components/icons";
import {
  BUTTON_EMPHASIS,
  BUTTON_KIND,
  Button,
  Flex,
  ICON_BUTTON_EMPHASIS,
  ICON_BUTTON_KIND,
  ICON_BUTTON_SIZE,
  IconButton,
  Title,
} from "@apee/components/ui";

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col gap-y-8 overflow-auto px-32 py-20">
      <Title>Apee Meal</Title>

      <section className="space-y-4">
        <Title size="medium">Buttons</Title>

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

        <Title size="small">With icons</Title>

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
        <Title size="medium">Icon Buttons</Title>

        <div className="grid grid-cols-4 gap-6">
          {Object.values(ICON_BUTTON_EMPHASIS).map((iconButtonEmphasis) => (
            <Flex key={iconButtonEmphasis} className="flex-col gap-4">
              {Object.values(ICON_BUTTON_KIND).flatMap((iconButtonKind) => (
                <Flex className="space-x-4">
                  {Object.values(ICON_BUTTON_SIZE).map((iconButtonSize) => (
                    <Flex
                      className="h-12 w-12 items-center justify-center"
                      key={`${iconButtonSize}-${iconButtonKind}`}
                    >
                      <IconButton
                        data-combination={`${iconButtonEmphasis}-${iconButtonKind}-${iconButtonSize}`}
                        icon={SettingIcon}
                        size={iconButtonSize}
                        kind={iconButtonKind}
                        emphasis={iconButtonEmphasis}
                      />
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <Title size="medium">Form elements</Title>
        <Title size="small">Checkboxes</Title>
        <div className="mt-4 grid max-w-md grid-cols-3 justify-items-start gap-6"></div>
      </section>
    </div>
  );
}
