export default function EducationCard({ cover, title, highlight, location, start, end, grade }) {
    return (
        <div className="card">
            <div className={'cover ' + cover}></div>
            <div className='border'>
                <div className='top'>
                    <h1>
                        <span className='color'>{highlight}</span>
                        {title}
                    </h1>
                    <h2>{location}</h2>
                </div>
                <div className='details'>
                    <p>
                        {start} - {end}
                    </p>
                    <p>{grade}</p>
                </div>
            </div>
        </div>
    );
}
