import Image from 'next/image';

export default function SkillCard({ title, sub, icon1, icon2, icon3, textTitle, text, link }) {
    return (
        <div className='projectCard'>
            <div className='dots'></div>
            <div className='overlay'>
                <h1>{title}</h1>
                <h2>{sub}</h2>
                <div className='icons'>
                    {icon1 ? (
                        <Image
                            className='icon'
                            src={'/icons/' + icon1 + '.svg'}
                            width={100}
                            height={100}
                            alt={icon1}
                        />
                    ) : (
                        <></>
                    )}
                    {icon2 ? (
                        <Image
                            className='icon'
                            src={'/icons/' + icon2 + '.svg'}
                            width={100}
                            height={100}
                            alt={icon2}
                        />
                    ) : (
                        <></>
                    )}
                    {icon3 ? (
                        <Image
                            className='icon'
                            src={'/icons/' + icon3 + '.svg'}
                            width={100}
                            height={100}
                            alt={icon3}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className='content'>
                <p>
                    <span>{textTitle ? textTitle : title}</span>
                    {text}
                </p>
                {link ? (
                    <div className='actions'>
                        <Image
                            className='github'
                            src='/icons/github.svg'
                            width={100}
                            height={100}
                            alt='gh'
                        />
                        <a className='action' href={link}>
                            Learn More
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
