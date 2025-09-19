import { HeaderWrapper } from "./header-wrapper";
import ToggleTheme from "./toggle-theme";

function HeaderSite() {
  return (
    <HeaderWrapper className="fixed left-1/2 top-0 z-50 mt-4 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-full bg-background/20 backdrop-blur-lg md:rounded-full">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <span>portfolio</span>
        <ToggleTheme />
      </div>
    </HeaderWrapper>
  );
}

export default HeaderSite;
