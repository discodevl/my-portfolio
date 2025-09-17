import { HeaderWrapper } from './HeaderWrapper'
import ToggleTheme from './ToggleTheme'

function HeaderSite() {
  return (
    <HeaderWrapper className='sticky top-0 max-w-screen overflow-x-hidden'>
      {/* <header className=""> */}
      <div className='container mx-auto px-32 py-2 flex justify-between items-center'>
        <span>portfolio</span>
        <ToggleTheme />
      </div>
      {/* </header> */}
    </HeaderWrapper>
  );
}

export default HeaderSite;
