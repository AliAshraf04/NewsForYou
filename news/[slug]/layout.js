export default function NewsDetailLayout({ children, modal }) {
    return <div className="news-detail-page">
       {modal}
        {children}
        </div>
}