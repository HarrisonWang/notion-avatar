import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <Image alt="line" src="/icon/line.svg" width="125" height="54" />
      <div className="flex justify-center mt-10">
        <a
          className="transition hover:underline"
          href="https://github.com/harrisonwang/notion-avatar"
        >
          {t(`github`)}
        </a>
        <span className="mx-2 hidden md:inline-block">·</span>
        <a className="hover:underline" href="https://x.com/voywang">
          {t(`twitter`)}
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">
        &copy;
        <a href="https://xiaowangye.org" className="hover:underline">
          {' xiaowangye.org. '}
        </a>{' '}
        Designed By
        <a href="https://x.com/felix12777" className="hover:underline">
          {' Felix Wong. '}
        </a>
        Forked from 
        <a href="https://github.com/Mayandev/notion-avatar" className="hover:underline">
          {' notion-avatar. '}
        </a>
      </div>
    </footer>
  );
}
