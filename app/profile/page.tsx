import Image from "next/image";
import Link from "next/link";
import { tv } from 'tailwind-variants';
import { ProfileItem } from "@/lib/interfaceUtils";
import profile_data from "@/components/profile/profile.json";

const twStayles = tv({
  variants: {
    style:{
      content01:'container px-5 py-10 mx-auto flex flex-col',
      content02:'flex flex-col sm:flex-row mt-10',
      img01:'object-cover object-center h-full w-full',
      leftCont:'sm:w-1/3 text-center sm:pr-8 sm:py-8',
      rightCont:'sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left',
      border01:'w-12 h-1 bg-indigo-500 rounded mt-2 mb-4',
      border02:'w-28 h-1 bg-orange-500 rounded mt-2 mb-4',
      border03:'w-28 h-1 bg-indigo-500 rounded mt-2 mb-4',
      leftIcon:'"w-20 h-20 rounded-full inline-flex items-center justify-center bg-teal-50',
      botton01: "fill-current mr-1.5 text-white",
    },
  },
});
// Tag
const tvTag = tv({
  base: 'inline-flex items-center rounded-full px-2 text-sm text-black py-1 font-medium m-1',
  variants:{
    color:{
      green: 'bg-green-400',
      purple: 'bg-purple-400',
      sky: 'bg-sky-300',
      gray: 'bg-gray-400',
    },
  },
});
// Button
const tvButton = tv({
  base: 'py-2 px-2 transition-colors border font-medium rounded-lg disabled:opacity-50 m-1',
  variants: {
    color: {
      black: 'bg-gray-50 active:bg-gray-200 border-gray-200 text-gray-900 hover:bg-gray-100',
      green: 'bg-green-600 active:bg-green-800 border-green-700 text-white hover:bg-green-700',
      blue: 'bg-gray-50 active:bg-blue-800 border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 hover:bg-blue-600',
      red:'bg-gray-50 active:bg-red-800 border-gray-200 hover:text-white text-red-600 hover:border-red-700 hover:bg-red-600',
    },
  },
});


export default function ProfilePage() {
  const profileData:ProfileItem = profile_data;
  return(
    <section className="text-gray-600 body-font">
      <div className={twStayles({style:'content01'})}>
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image alt="display" className={twStayles({style:'img01'})} src={"/img/profileimg.JPG"} height={500} width={1200}/>
          </div>
          <div className={twStayles({style:'content02'})}>
            <div className={twStayles({style:'leftCont'})}>
              <div className={twStayles({style:'leftIcon'})}>
                <Image alt="icon" src={"/icon.png"} width={86} height={86}/>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">sea-yassan33</h2>
                <div className={twStayles({style:'border01'})}></div>
                <p className="text-base text-left">{profileData?.profile}</p>
              </div>
            </div>
            <div className={twStayles({style:'rightCont'})}>
              <h3>Programming Language</h3>
              <div className={twStayles({style:'border02'})}></div>
              {profileData?.languages.map((lang,langIndex)=>(
                <span className={`${tvTag({color:'green'})}`} key={langIndex}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={twStayles({style:'botton01'})} viewBox="0 0 16 16" width="16" height="16">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                  </svg>
                  {lang}
                </span>
              ))}
              <h3 className="mt-5">Infrastructure</h3>
              <div className={twStayles({style:'border02'})}></div>
              {profileData?.infrastructures.map((infra,langIndex)=>(
                <span className={`${tvTag({color:'purple'})}`} key={langIndex}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={twStayles({style:'botton01'})} viewBox="0 0 16 16" width="16" height="16">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                  </svg>
                  {infra}
                </span>
              ))}
              <h3 className="mt-5">Framework</h3>
              <div className={twStayles({style:'border02'})}></div>
              {profileData?.frameworkes.map((frame,langIndex)=>(
                <span className={`${tvTag({color:'sky'})}`} key={langIndex}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={twStayles({style:'botton01'})} viewBox="0 0 16 16" width="16" height="16">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                  </svg>
                  {frame}
                </span>
              ))}
              <h3 className="mt-5">Blog</h3>
              <div className={twStayles({style:'border03'})}></div>
              <button className={`${tvButton({color:'blue'})}`}>
                <Link href="https://qiita.com/sea_news_yass" className="flex flex-row items-center space-x-2" target="_blank">
                  <Image src={'/img/qiitaicon.png'} width={26} height={26} alt="qiita"/>
                  <span>Qiita Blog</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}