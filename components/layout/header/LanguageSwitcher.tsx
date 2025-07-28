'use client';

import LanguageIcon from '@/components/icons/LanguageIcon';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

type Locale = 'en' | 'bn';

function LanguageSwitcher() {
   const router = useRouter();
   const pathname = usePathname();
   const locale = useLocale();

   const handleSwitchLanguage = (locale: Locale) => {
      router.replace(pathname, { locale });
   };

   return (
      <Button
         className="uppercase"
         variant="outline"
         size="sm"
         onClick={() => handleSwitchLanguage(locale === 'en' ? 'bn' : 'en')}
      >
         <LanguageIcon />
         <span className="min-w-[22px]">{locale === 'en' ? 'বাং' : 'EN'}</span>
      </Button>
   );
}

export default LanguageSwitcher;
