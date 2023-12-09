export default function AchievementCard({ date, title, subtitle, text }) {
    return (
        <div className='achCard'>
            <div className='shape'></div>
            <h3>{date}</h3>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{text}</p>
        </div>
    );
}
