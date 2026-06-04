import { TenantConfig } from "@/interfaces";

export function createColors(colors: Record<string, string>, total: number) {
  const target: Record<string, string[]> = {};
  Object.keys(colors).forEach(
    (key) => (target[key] = [...Array(total).keys()].map(() => colors[key]))
  );
  return target;
}

export function getCustomTheme(tenant: TenantConfig) {
  const { breakpoints, headings, colors } = tenant;
  const customTheme = {
    breakpoints: breakpoints,
    headings: headings,
    colors: createColors(colors, 7),
  };
  return customTheme;
}
