import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
   return (
      <header className="w-full shadow">
         <div className="container-screen bg-transparent">
            <div className="flex flex-row justify-between gap-3">
               <Link href="/">
                  <Image
                     src="/10mslogo.svg"
                     width={100}
                     height={28}
                     alt="10ms logo"
                     className="w-[100px] h-auto object-contain"
                     priority
                  />
               </Link>
               <LanguageSwitcher />
            </div>
         </div>
      </header>
   );
}

export default Header;
