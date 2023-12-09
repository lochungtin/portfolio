import Image from 'next/image';

export default function SkillCard({ icon, name, score }) {
    return (
        <div className='skillCard'>
            <div className='top'>
                <Image
                    className='icon'
                    src={'/icons/' + icon + '.svg'}
                    width={100}
                    height={100}
                    alt={name}
                />
                <p>{name}</p>
            </div>
            <div
                className='indicators'
                style={'clip-path: inset(0 0 0 0 round ' + (20 - score / 5).toString() + 'rem);'}
            ></div>
        </div>
    );
}
