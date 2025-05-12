
import { getNewsForYear, getAllNews,getNewsForYearAndMonth, getNewsForMonth, getAvailableNewsYears, getAvailableNewsMonths } from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";
export default function FilteredNewsPage({ params }) {
   const filter = params.filter;
   const selectedYear = filter?.[0];
   const selectedMonth = filter?.[1];
   let links = getAvailableNewsYears();
   let news;
   
   if (selectedYear&&!selectedMonth) {
     news = getNewsForYear(selectedYear);
     links= getAvailableNewsMonths(selectedYear);
   }
   if (selectedYear&&selectedMonth) {
     news = getNewsForYearAndMonth(selectedYear, selectedMonth);
     links=[];
   }
   let newsContent= <p>No news found</p>
   
   if (news && news.length>0) {
    newsContent= <NewsList news={news} />
   }
  const isYearInvalid = selectedYear && !getAvailableNewsYears().includes(+selectedYear);
const isMonthInvalid = selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth);

if (isYearInvalid || isMonthInvalid) {
  error();
}

   
    return (
      <>
      <header id="archive-header">
      <nav>
      <ul>
         {links.map((link) => {
         const href= selectedYear?
         `/archive/${selectedYear}/${link}`
         :`/archive/${link}`

          return (
            <li key={link}>
            <Link href={href}>{link}</Link>
            </li>
          )
})}
      </ul>
      </nav>
      </header>
     {newsContent }
      </>
    );
  }