import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getProject } from '../api/firebase';
import Footer from '../components/footer';
import Header from '../components/header';
import ReadMore from '../components/readmore';

import styles from '../../styles/detail.module.css';

// const data = {
//     "order": "n0",
//     "content": {
//         "n0": "",
//     }
// }

export default function ProjectDetail() {
    const [data, setData] = useState({});
    const [empty, setEmpty] = useState(true);
    const router = useRouter();

    const { pid } = router.query;

    useEffect(() => {
        if (empty)
            getProject(pid).then(data => {
                if (data) {
                    setData(data);
                    setEmpty(false);
                }
            });
    });

    if (empty)
        return <div></div>

    const d = (children, type) => {
        return <div className={`${styles[`m${type[1]}`]} ${styles[type[0]]}`}>
            {children}
        </div>;
    }

    const p = index => {
        return <p className={styles[index[0]]}>
            {data.content[index]}
        </p>
    }

    const i = index => {
        return <Image
            src={data.content[index].href} alt='img'
            width={data.content[index].width} height={data.content[index].height}
            loading='eager'
        />;
    }

    const l = index => {
        return <div className={styles.lRoot}>
            {Object.entries(data.content[index]).map(([key, text]) =>
                <div className={styles.lRow} key={key}>
                    <div className={styles.lDot}></div>
                    <p className={styles.l}>
                        {text}
                    </p>
                </div>)}
        </div>
    }

    const g = index => {
        let dim = data.content[index].size || 35;
        return <div className={styles.m5}><a href={`https://github.com${data.content[index].href}`}>
            <Image src='/icons/socials/github.svg' alt='gh' width={dim} height={dim} />
        </a></div>
    }

    const r = index => {
        return <div className={styles.m5}>
            <ReadMore href={data.content[index].href} textOverride={data.content[index].text} />
        </div>
    }

    let tStack = new Array();
    let cStack = new Array([]);
    let index = 0;

    data.order.replace(/ /g, '').match(/../g).forEach(expression => {
        switch (expression[0]) {
            // open div handling
            case 'o': case 'q': case 'x': case 'y': case 'h': case 'j':
                tStack.push(expression);
                cStack.push([]);
                index++;
                break;

            // close div handling
            case 'e':
                cStack[--index].push(d(cStack.pop(), tStack.pop()));
                break;

            // singleton element handling
            case 'n': case 't': case 's': case 'a': case 'p': case 'b':
                cStack[index].push(p(expression));
                break;
            case 'i':
                cStack[index].push(i(expression));
                break;
            case 'l':
                cStack[index].push(l(expression));
                break;
            case 'g':
                cStack[index].push(g(expression));
                break;
            case 'r':
                cStack[index].push(r(expression));
                break;

            // unknown fragment handling
            default:
                cStack[index].push(<></>);
        }
    });

    return d([
        <Head key=''>
            <title>{data.content.n0}</title>
            <link rel="icon" href='/logo/favicon.ico' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>,
        <Header key='' />,
        d(cStack[0], 'm'),
        <Footer key='' />
    ], 'r');
}
