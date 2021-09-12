export type Unit = keyof typeof CURRENCY_UNIT_SETTINGS;

type UnitSetting = {
  position: string;
  label: string;
};

type UnitSettings = {
  yen_en: UnitSetting;
  yen_jp: UnitSetting;
  dollar: UnitSetting;
  euro: UnitSetting;
};

const CURRENCY_UNIT_SETTINGS: UnitSettings = {
  yen_en: {
    position: "before",
    label: "\\",
  },
  yen_jp: {
    position: "after",
    label: "円",
  },
  dollar: {
    position: "before",
    label: "$",
  },
  euro: {
    position: "before",
    label: "€",
  },
} as const;

export const getValueWithUnit = (
  value: number | undefined | null,
  unit: string
): string =>
  value === undefined || value === null
    ? ""
    : `${
        CURRENCY_UNIT_SETTINGS[unit].position === "before"
          ? CURRENCY_UNIT_SETTINGS[unit].label
          : ""
      }
  ${value.toLocaleString()}
  ${
    CURRENCY_UNIT_SETTINGS[unit].position === "after"
      ? CURRENCY_UNIT_SETTINGS[unit].label
      : ""
  }`;
